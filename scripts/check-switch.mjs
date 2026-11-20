// WR-01: the AI switch (components/AiWording.tsx, AI_DELIVERY_AVAILABLE) must leave no page contradicting itself or another page,
// whichever way it is set. This builds the site once per value into its own folder (never out/, which a preview may be serving),
// runs the ordinary site check on each, and then tests the rendered text:
//   switch off  no page may say AI assistance is available or name a model key, a model source, a run budget, a provider or
//               an agent run; the home page and the FAQ must say it is planned and not part of the platform today.
//   switch on   no page may say AI is planned or not part of the platform today; the home page must say you use your own model
//               key and the FAQ must name the verified path (your own Anthropic API key).
//   both        no ChatGPT or OpenAI naming, no "people approve every gate" (a claims must-not row), no "every result
//               independently tested" (CL-36 covers integration only), no "You choose the model source" (DEC-430 (6)).
// The "on" build uses AF_SWITCH_CHECK_ON=1, which only this script sets; a publish build (SITE_PUBLISH=1) refuses it.
// Usage: npm run check:switch
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, rmSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const files = (d) => readdirSync(d).flatMap((n) => (statSync(join(d, n)).isDirectory() ? files(join(d, n)) : [join(d, n)]));
const textOf = (f) =>
  readFileSync(f, "utf8")
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ");

const BOTH = [/ChatGPT/i, /OpenAI/i, /people approve every gate/i, /every result independently tested/i, /choose the model source/i];
const OFF_FORBIDDEN = [/model key/i, /model source/i, /model execution/i, /run budget/i, /monthly limit/i, /Anthropic/i, /API key/i, /bring your own/i, /agent runs?\b/i, /AI builds/i, /AI that never approves/i];
const ON_FORBIDDEN = [/not part of the platform/i, /planned as an optional extension/i, /where only people approve/i, /AI assistance \(planned\)/i];

const problems = [];
function build(mode) {
  const dir = `.build-switch-${mode}`;
  rmSync(dir, { recursive: true, force: true });
  const env = { ...process.env, NEXT_DIST_DIR: dir };
  delete env.AF_SWITCH_CHECK_ON;
  delete env.SITE_PUBLISH;
  if (mode === "on") env.AF_SWITCH_CHECK_ON = "1";
  // Next.js can exit non-zero after it has written the export (an upgrade reminder); what counts is the export and the checks.
  for (let i = 0; i < 3 && !existsSync(join(dir, "index.html")); i++) {
    spawnSync("npx", ["next", "build", "--webpack"], { env, shell: true, stdio: "ignore" });
  }
  if (!existsSync(join(dir, "index.html"))) { problems.push(`${mode}: build produced no export`); return null; }
  for (const script of ["seo.mjs", "check.mjs"]) {
    const r = spawnSync("node", [join("scripts", script), dir], { env, encoding: "utf8" });
    if (r.status !== 0) problems.push(`${mode}: scripts/${script} failed:\n${r.stdout}${r.stderr}`);
  }
  return dir;
}

for (const mode of ["off", "on"]) {
  const dir = build(mode);
  if (!dir) continue;
  const pages = files(dir).filter((f) => f.endsWith(".html"));
  let n = 0;
  for (const f of pages) {
    const t = textOf(f);
    const name = relative(dir, f);
    const forbidden = [...BOTH, ...(mode === "off" ? OFF_FORBIDDEN : ON_FORBIDDEN)];
    for (const re of forbidden) {
      const m = re.exec(t);
      if (m) problems.push(`switch ${mode}: ${name} says "${t.slice(Math.max(0, m.index - 30), m.index + 50)}" (${re})`);
    }
    n++;
  }
  const home = textOf(join(dir, "index.html"));
  const faq = textOf(join(dir, "faq", "index.html"));
  if (mode === "off") {
    for (const [name, t] of [["home", home], ["faq", faq]]) if (!/not part of the platform available today/i.test(t)) problems.push(`switch off: ${name} does not say AI is not part of the platform today`);
  } else {
    if (!/own (AI )?model key/i.test(home)) problems.push("switch on: home does not say you use your own model key");
    if (!/your own Anthropic API key/i.test(faq)) problems.push("switch on: faq does not name the verified model path");
  }
  console.log(`switch ${mode}: ${n} pages checked`);
}

if (problems.length) {
  console.error(`AI switch check failed:\n  ${problems.join("\n  ")}`);
  process.exit(1);
}
console.log("AI switch check passed for both values");
