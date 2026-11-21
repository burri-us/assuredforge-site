// Fails the build when the site's own code types a colour value or a font name by hand (design system README section 13).
// Allowed only in the generated files (styles/tokens.generated.css, components/*.generated.*) and in public/ assets (the
// supplied mark and icon files). Also fails when the generated CSS is out of date with design/tokens.json.
// Usage: node scripts/check-tokens.mjs
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const root = new URL("../", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const files = (d) => (existsSync(d) ? readdirSync(d).flatMap((n) => (statSync(join(d, n)).isDirectory() ? files(join(d, n)) : [join(d, n)])) : []);
const sources = ["pages", "components", "styles"].flatMap((d) => files(join(root, d)))
  .filter((f) => /\.(tsx?|css|mjs)$/.test(f) && !/\.generated\./.test(f));

const rules = [
  [/(^|[^&\w])#[0-9a-fA-F]{3,8}\b(?![\w-])/, "raw hex colour"],
  [/\b(rgba?|hsla?|oklch|oklab)\(/i, "raw colour function"],
  [/\b(Space Grotesk|JetBrains Mono|Inter|system-ui|Segoe UI|Roboto|Helvetica|Arial|Cascadia|Consolas)\b/, "font name"],
];
const problems = [];
for (const f of sources) {
  readFileSync(f, "utf8").split(/\r?\n/).forEach((line, i) => {
    const code = line.replace(/href="#[\w-]*"/g, "").replace(/\bhref=\{?`?#[\w-]*/g, "");
    for (const [re, what] of rules) if (re.test(code)) problems.push(`${f.slice(root.length)}:${i + 1}: ${what}: ${line.trim().slice(0, 90)}`);
  });
}
const sha = createHash("sha256").update(readFileSync(join(root, "design/tokens.json"))).digest("hex");
if (!readFileSync(join(root, "styles/tokens.generated.css"), "utf8").includes(sha)) problems.push("styles/tokens.generated.css is not generated from the current design/tokens.json (run node scripts/tokens.mjs)");
if (problems.length) { console.error(problems.join("\n")); console.error(`Token check failed: ${problems.length} problem(s)`); process.exit(1); }
console.log(`Token check passed: ${sources.length} source files, no raw colours or font names`);
