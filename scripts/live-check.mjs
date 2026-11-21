// Live checks around a deploy (docs/RELEASE-PACKAGE.md). Reads the public site only; changes nothing.
//   node scripts/live-check.mjs save <dir>          Save every page in the live sitemap, plus robots.txt, sitemap.xml and
//                                                   security.txt, into <dir> (the copy taken before the deploy).
//   node scripts/live-check.mjs compare [out]       After the deploy: every page of the local build [out] must be served live with
//                                                   the same HTML (build-hash asset paths ignored); every forwarding page must
//                                                   forward to its target; every address in OLD_ADDRESSES must still answer 200.
//   node scripts/live-check.mjs diff <dirA> <dirB>  Compare two saved copies; lists the files that differ.
// Origin: site.json "origin" (https://assuredforge.com), or LIVE_ORIGIN.
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const site = JSON.parse(readFileSync(new URL("../site.json", import.meta.url), "utf8"));
const ORIGIN = process.env.LIVE_ORIGIN ?? site.origin;
// Addresses the live site served before the redesign (main 38082b2, 2026-11-21). Each must still answer 200 after go-live.
const OLD_ADDRESSES = ["/", "/about/", "/deployment/", "/design-partners/", "/manufacturing/", "/platform/", "/privacy/", "/security/", "/terms/",
  "/robots.txt", "/sitemap.xml", "/.well-known/security.txt", "/favicon.ico", "/icon.svg", "/apple-touch-icon.png", "/og.png"];
const norm = (s) => s.replace(/\/_next\/static\/[^"')\s]+/g, "/_next/static/X").replace(/"buildId":"[^"]+"/g, '"buildId":"X"');
const name = (path) => (path.replace(/^\/|\/$/g, "").replace(/\//g, "_") || "home");
const get = async (path) => {
  const r = await fetch(ORIGIN + path, { headers: { "Cache-Control": "no-cache" }, redirect: "manual" });
  return { status: r.status, text: await r.text() };
};
const [mode, a = "out", b] = process.argv.slice(2);
const problems = [];

if (mode === "save") {
  mkdirSync(a, { recursive: true });
  const map = await get("/sitemap.xml");
  const paths = [...map.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  for (const p of [...paths, "/robots.txt", "/sitemap.xml", "/.well-known/security.txt"]) {
    const r = await get(p);
    writeFileSync(join(a, name(p) + (p.endsWith("/") ? ".html" : "")), r.text);
    if (r.status !== 200) problems.push(`${p}: ${r.status}`);
  }
  console.log(`Saved ${paths.length} pages and 3 files from ${ORIGIN} into ${a}`);
} else if (mode === "compare") {
  const files = (d) => readdirSync(d).flatMap((n) => (statSync(join(d, n)).isDirectory() ? files(join(d, n)) : [join(d, n)]));
  const pages = files(a).filter((f) => f.endsWith("index.html") && !f.includes(`${sep}_next${sep}`));
  for (const f of pages) {
    const path = `/${relative(a, f).split(sep).slice(0, -1).join("/")}/`.replace(/^\/\/$/, "/");
    const local = readFileSync(f, "utf8");
    const live = await get(path);
    if (live.status !== 200) { problems.push(`${path}: live ${live.status}`); continue; }
    if (norm(live.text) !== norm(local)) problems.push(`${path}: live HTML differs from the local build`);
    const fwd = /<meta\b[^>]*http-equiv="refresh"[^>]*content="0; url=([^"]+)"/i.exec(local)?.[1];
    if (fwd) {
      const target = await get(fwd.split("#")[0]);
      if (target.status !== 200) problems.push(`${path}: forwards to ${fwd}, which answers ${target.status}`);
      else console.log(`forward ok: ${path} -> ${fwd}`);
    }
  }
  for (const p of OLD_ADDRESSES) { const r = await get(p); if (r.status !== 200) problems.push(`old address ${p}: ${r.status}`); }
  for (const p of ["/robots.txt", "/sitemap.xml"]) {
    const local = join(a, p.slice(1));
    if (existsSync(local) && (await get(p)).text !== readFileSync(local, "utf8")) problems.push(`${p}: live differs from the local build`);
  }
  console.log(`Compared ${pages.length} pages of ${a} with ${ORIGIN}; ${OLD_ADDRESSES.length} old addresses checked`);
} else if (mode === "diff") {
  for (const n of readdirSync(a)) {
    const other = join(b, n);
    if (!existsSync(other)) problems.push(`${n}: only in ${a}`);
    else if (norm(readFileSync(join(a, n), "utf8")) !== norm(readFileSync(other, "utf8"))) problems.push(`${n}: differs`);
  }
  for (const n of readdirSync(b)) if (!existsSync(join(a, n))) problems.push(`${n}: only in ${b}`);
  console.log(`Compared ${a} with ${b}`);
} else {
  console.error("Usage: node scripts/live-check.mjs save <dir> | compare [out] | diff <dirA> <dirB>");
  process.exit(2);
}
if (problems.length) { console.error(`Problems:\n  ${problems.join("\n  ")}`); process.exit(1); }
console.log("No problems.");
