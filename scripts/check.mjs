// Checks the static export after every build; any problem fails the build.
//   Same origin only: no inline script, inline style or event handler (the page's content security policy forbids them),
//   and no script, stylesheet, image, font, frame or form target on another origin.
//   Accessibility from the markup: document language, title, exactly one h1 with no skipped heading level, a main
//   landmark, alt text on images and a name on buttons.
//   Every internal link points to a page that exists.
// Usage: node scripts/check.mjs [dir]   (default: out)
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const dir = process.argv[2] ?? "out";
const base = process.env.BASE_PATH ?? "";
const files = (d) => readdirSync(d).flatMap((n) => (statSync(join(d, n)).isDirectory() ? files(join(d, n)) : [join(d, n)]));
const text = (s) => s.replace(/<[^>]+>/g, "").trim();
const report = [];

for (const file of files(dir).filter((f) => f.endsWith(".html"))) {
  const html = readFileSync(file, "utf8");
  const at = (p) => report.push(`${relative(dir, file)}: ${p}`);

  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (!/\ssrc=/i.test(m[1]) && !/type="application\/(ld\+)?json"/i.test(m[1]) && m[2].trim()) at("inline script");
  }
  if (/<style\b/i.test(html)) at("inline <style>");
  if (/<[a-z][^>]*\sstyle=/i.test(html)) at("style attribute");
  if (/<[a-z][^>]*\son[a-z]+=/i.test(html)) at("inline event handler");
  for (const m of html.matchAll(/<(script|link|img|iframe|source|form)\b[^>]*\s(src|href|action)="([^"]*)"/gi)) {
    if (/^(https?:)?\/\//i.test(m[3]) && !(m[1] === "link" && /rel="canonical"/i.test(m[0]))) at(`${m[1]} from another origin: ${m[3]}`);
  }

  if (!/<html\b[^>]*\slang="[^"]+"/i.test(html)) at("no document language");
  if (!text(/<title\b[^>]*>([\s\S]*?)<\/title>/i.exec(html)?.[1] ?? "")) at("no title");
  const levels = [...html.matchAll(/<h([1-6])\b/gi)].map((m) => Number(m[1]));
  if (levels.filter((l) => l === 1).length !== 1) at("not exactly one h1");
  levels.forEach((l, i) => { if (i && l > levels[i - 1] + 1) at(`heading level skipped: h${levels[i - 1]} to h${l}`); });
  if (!/<main\b/i.test(html)) at("no main landmark");
  for (const m of html.matchAll(/<img\b[^>]*>/gi)) if (!/\salt="/i.test(m[0])) at("image without alt text");
  for (const m of html.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/gi)) if (!text(m[1]) && !/aria-label=/i.test(m[0])) at("button without a name");

  for (const m of html.matchAll(/<a\b[^>]*\shref="(\/[^"#?]*)/gi)) {
    let path = m[1];
    if (base && path.startsWith(base)) path = path.slice(base.length) || "/";
    const target = join(dir, path);
    if (!(existsSync(join(target, "index.html")) || (existsSync(target) && statSync(target).isFile()))) at(`broken link ${m[1]}`);
  }
}

if (report.length) {
  console.error(`Site check failed:\n  ${report.join("\n  ")}`);
  process.exit(1);
}
console.log(`Site check passed: ${files(dir).filter((f) => f.endsWith(".html")).length} pages in ${dir}`);
