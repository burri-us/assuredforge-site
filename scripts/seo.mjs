// Writes robots.txt and sitemap.xml into the static export after every build.
//   Indexing is on only when site.json has "indexing": true (the publication switch, owner approval D1-11) or the build
//   sets SITE_INDEX=1 (the pages workflow's "index" input). While it is off, robots.txt disallows all crawling and every
//   page carries noindex (pages/_document.tsx); the sitemap is written either way so it can be reviewed before publication.
// Usage: node scripts/seo.mjs [dir]   (default: out)
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const dir = process.argv[2] ?? "out";
const site = JSON.parse(readFileSync(new URL("../site.json", import.meta.url), "utf8"));
const indexing = site.indexing === true || process.env.SITE_INDEX === "1";

// Every page of the export: a directory with an index.html (trailingSlash export), except the error pages.
const dirs = (d) => readdirSync(d).filter((n) => statSync(join(d, n)).isDirectory()).flatMap((n) => [join(d, n), ...dirs(join(d, n))]);
const pages = [dir, ...dirs(dir)]
  .filter((d) => existsSync(join(d, "index.html")))
  .map((d) => `/${relative(dir, d).split(sep).join("/")}/`.replace(/^\/\/$/, "/"))
  .filter((p) => !/^\/(404|500|_next)\b/.test(p))
  .sort();

const urls = pages.map((p) => `  <url><loc>${site.origin}${p}</loc></url>`).join("\n");
writeFileSync(
  join(dir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

writeFileSync(
  join(dir, "robots.txt"),
  indexing
    ? `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`
    : `# Not published yet: search engines stay out until publication is approved (site.json "indexing").\nUser-agent: *\nDisallow: /\n`,
);
console.log(`robots.txt: indexing ${indexing ? "ON" : "off"}; sitemap.xml: ${pages.length} pages`);
