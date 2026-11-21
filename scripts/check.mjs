// Checks the static export after every build; any problem fails the build.
//   Same origin only: no inline script, inline style or event handler (the page's content security policy forbids them),
//   and no script, stylesheet, image, font, frame or form target on another origin.
//   Accessibility from the markup: document language, title, exactly one h1 with no skipped heading level, a main
//   landmark, alt text on images and a name on buttons.
//   Every internal link points to a page that exists.
//   Placeholders and internal markers (WR-02): found in a page's visible text or attributes. Normal (preview) build: listed as
//   warnings. Publish build (SITE_PUBLISH=1): each one fails the build. A publish build also refuses the AI-switch check variable
//   (AF_SWITCH_CHECK_ON), which exists only for scripts/check-switch.mjs.
//   Home page weight (HTML, CSS, JS, images, fonts; no video) must stay under 1.5 MB.
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

// Search readiness: a meta description on every page; a canonical URL on every page but the error page, which is always
// noindex; robots.txt and every page's robots meta agree with the publication switch (site.json "indexing" or
// SITE_INDEX=1); sitemap.xml lists exactly the canonical pages.
const site = JSON.parse(readFileSync(new URL("../site.json", import.meta.url), "utf8"));
const indexing = site.indexing === true || process.env.SITE_INDEX === "1";
const canonicals = new Set();
for (const file of files(dir).filter((f) => f.endsWith(".html"))) {
  const html = readFileSync(file, "utf8");
  const at = (p) => report.push(`${relative(dir, file)}: ${p}`);
  const error = /(^|[\\/])(404|500)(\.html|[\\/])/.test(relative(dir, file));
  const robots = [...html.matchAll(/<meta\b[^>]*name="robots"[^>]*content="([^"]*)"/gi)].map((m) => m[1]);
  const canonical = /<link\b[^>]*rel="canonical"[^>]*href="([^"]*)"/i.exec(html)?.[1];
  if (!/<meta\b[^>]*name="description"[^>]*content="[^"]+"/i.test(html)) at("no meta description");
  if (error) {
    if (!robots.some((r) => /noindex/i.test(r))) at("error page without noindex");
    if (canonical) at("error page with a canonical URL");
    continue;
  }
  if (!canonical) at("no canonical URL");
  else {
    const path = relative(dir, file).split(/[\\/]/).slice(0, -1).join("/");   // about/index.html -> about
    const want = `${site.origin}/${path ? `${path}/` : ""}`;
    if (canonical !== want) at(`canonical ${canonical}, expected ${want}`);
    canonicals.add(canonical);
  }
  const noindex = robots.some((r) => /noindex/i.test(r));
  if (indexing && noindex) at("noindex although indexing is on");
  if (!indexing && !noindex) at("no noindex although indexing is off");
}
const robotsTxt = existsSync(join(dir, "robots.txt")) ? readFileSync(join(dir, "robots.txt"), "utf8") : null;
if (robotsTxt === null) report.push("robots.txt missing");
else if (indexing ? !/^Allow: \/$/m.test(robotsTxt) || /^Disallow: \/$/m.test(robotsTxt) : !/^Disallow: \/$/m.test(robotsTxt)) {
  report.push(`robots.txt does not match indexing ${indexing ? "on" : "off"}`);
}
const sitemap = existsSync(join(dir, "sitemap.xml")) ? readFileSync(join(dir, "sitemap.xml"), "utf8") : null;
if (sitemap === null) report.push("sitemap.xml missing");
else {
  const locs = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  for (const c of canonicals) if (!locs.has(c)) report.push(`sitemap.xml misses ${c}`);
  for (const l of locs) if (!canonicals.has(l)) report.push(`sitemap.xml lists ${l}, which is not a canonical page`);
}

// WR-02: placeholders and internal markers visible to a reader. No page is exempt (DEC-462): the legal pages carry the interim
// label instead of a draft banner, and a "[Counsel ...]" or "[Owner ...]" item, DRAFT or "COUNSEL REVIEW" is a marker on any page.
const publish = process.env.SITE_PUBLISH === "1";
if (publish && process.env.AF_SWITCH_CHECK_ON) report.push("publish build with AF_SWITCH_CHECK_ON set (it is for the switch check only)");
const MARKERS = [
  ["placeholder", /placeholder/i],
  ["W8", /\bW8\b/],
  ["CONFIRM", /CONFIRM/],
  ["CLAIM-", /CLAIM-/],
  ["TODO", /TODO/],
  ["DRAFT", /DRAFT/],
  ["COUNSEL REVIEW", /COUNSEL REVIEW/i],
  ["[OWNER", /\[OWNER\b/],
  ["[Owner/Counsel item", /\[(Owner|Counsel)\b[^\]]*\]/i],   // case-insensitive: "[counsel review: ...]" counts too
];
// The recognised state of a legal page (DEC-462): the interim label from components/Blocks.tsx (InterimBanner), exactly.
// Every legal page must show it in every build.
const INTERIM_LABEL = "Interim version of 21 November 2026, for the design-partner program. Pending formal legal review. If this page and your signed design-partner agreement differ, the agreement governs.";
const LEGAL_PAGES = ["terms", "privacy", "legal/evaluation-licence", "legal/acceptable-use", "legal/design-partner-agreement",
  "trust/ai-use-policy", "trust/subprocessors", "trust/product-privacy", "trust/accessibility"].map((p) => join(p, "index.html"));
const markerWarnings = [];
for (const file of files(dir).filter((f) => f.endsWith(".html"))) {
  const html = readFileSync(file, "utf8");
  const stripped = html.replace(/<script\b[\s\S]*?<\/script>/gi, "").replace(/<style\b[\s\S]*?<\/style>/gi, "").replace(/<!--[\s\S]*?-->/g, "");
  const visible = stripped.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
  const attrs = [...stripped.matchAll(/\s(?:aria-label|alt|title|content|value|placeholder)="([^"]*)"/gi)].map((m) => m[1]).join(" ");
  const haystack = `${visible} ${attrs} ${/\splaceholder=/i.test(stripped) ? "placeholder" : ""}`;
  for (const [name, re] of MARKERS) {
    const hit = re.exec(haystack);
    if (hit) markerWarnings.push(`${relative(dir, file)}: ${name} ("${haystack.slice(Math.max(0, hit.index - 20), hit.index + 40).replace(/\s+/g, " ").trim()}")`);
  }
  if (LEGAL_PAGES.includes(relative(dir, file)) && !visible.replace(/\s+/g, " ").includes(INTERIM_LABEL)) {
    report.push(`${relative(dir, file)}: legal page without the interim label`);
  }
}
for (const p of LEGAL_PAGES) if (!existsSync(join(dir, p))) report.push(`legal page missing: ${p}`);
// Served files (allow-list): the Pages workflow uploads only this folder, and only these kinds of file may be in it.
// Internal files (COUNSEL-LIST.md, HANDOFF.md, DIFFERENCES.md, notes, scripts, design records) must never be served.
const SERVED_ALLOW = [
  /^([a-z0-9-]+\/)*index\.html$/, /^404\.html$/,
  /^_next\/static\/[A-Za-z0-9_.~/-]+\.(js|css|woff2)$/,
  /^(favicon\.ico|icon\.svg|apple-touch-icon\.png|og\.png|robots\.txt|sitemap\.xml|\.well-known\/security\.txt)$/,
];
const servedProblems = (list) => list.filter((f) => !SERVED_ALLOW.some((re) => re.test(f)));
const servedFiles = files(dir).map((f) => relative(dir, f).split("\\").join("/"));
for (const f of servedProblems(servedFiles)) report.push(`${f}: would be served but is not a site file (allow-list in scripts/check.mjs)`);
// The third-party notices page (fonts under the OFL) must be served and linked from every page's footer.
if (!servedFiles.includes("third-party-notices/index.html")) report.push("third-party-notices/index.html: missing (the fonts' licence notices)");
for (const f of servedFiles.filter((f) => f.endsWith("index.html") || f === "404.html")) {
  if (!/<footer\b[\s\S]*href="[^"]*\/third-party-notices\/"[\s\S]*<\/footer>/.test(readFileSync(join(dir, f), "utf8"))) report.push(`${f}: footer link to the third-party notices missing`);
}
// Negative test: planted internal files must be caught.
for (const planted of ["COUNSEL-LIST.md", "HANDOFF.md", "LANE-HANDOFF.md", "DIFFERENCES.md", "legal/DIFFERENCES.html", "scripts/check.mjs", "notes.txt"]) {
  if (servedProblems([planted]).length !== 1) report.push(`served-file check: planted ${planted} was not caught`);
}

const markerPages = new Set(markerWarnings.map((w) => w.split(":")[0]));
if (publish) for (const w of markerWarnings) report.push(`publish: visible marker ${w}`);
else {
  for (const w of markerWarnings) console.warn(`warning: marker ${w}`);
  console.log(`Marker check: ${markerWarnings.length} marker(s) on ${markerPages.size} page(s) (warnings; SITE_PUBLISH=1 makes them fail)`);
}

// Home page weight (owner media plan): the home page's HTML plus the CSS, JS, images and fonts it loads, no video, under 1.5 MB.
{
  const homeFile = join(dir, "index.html");
  const html = readFileSync(homeFile, "utf8");
  let bytes = statSync(homeFile).size;
  const seen = new Set();
  for (const m of html.matchAll(/<(link|script|img|source)\b[^>]*\s(?:href|src)="([^"]+)"/gi)) {
    if (m[1].toLowerCase() === "link" && !/rel="(stylesheet|preload|modulepreload)"/i.test(m[0])) continue;
    let ref = m[2].split(/[?#]/)[0];
    if (/^(https?:)?\/\//i.test(ref)) continue;
    if (base && ref.startsWith(base)) ref = ref.slice(base.length);
    const f = join(dir, ref);
    if (!seen.has(f) && existsSync(f) && statSync(f).isFile()) { seen.add(f); bytes += statSync(f).size; }
  }
  const LIMIT = 1_500_000;
  console.log(`Home page weight: ${(bytes / 1024).toFixed(0)} KB (HTML, CSS, JS, images, fonts; limit ${LIMIT / 1000} KB)`);
  if (bytes > LIMIT) report.push(`home page weighs ${bytes} bytes, over ${LIMIT}`);
}

// Vocabulary (warning only; AD-010 principle 4): page text describes capabilities, not AI vendors or model families.
const VOCAB = /\b(claude|anthropic|openai|chatgpt|gpt-?\d[\w.]*|gemini|copilot|azure\s+openai|llama|mistral|sonnet|opus|bedrock)\b/gi;
let vocabWarnings = 0;
for (const file of files(dir).filter((f) => f.endsWith(".html"))) {
  const words = text(readFileSync(file, "utf8").replace(/<script\b[\s\S]*?<\/script>/gi, ""));
  for (const m of words.matchAll(VOCAB)) {
    vocabWarnings++;
    console.warn(`warning: ${relative(dir, file)}: vendor or model name '${m[0]}' (AD-010 principle 4)`);
  }
}
console.log(`Vocabulary check: ${vocabWarnings} warning(s) (warning only)`);

if (report.length) {
  console.error(`Site check failed:\n  ${report.join("\n  ")}`);
  process.exit(1);
}
console.log(`Site check passed: ${files(dir).filter((f) => f.endsWith(".html")).length} pages in ${dir}`);
