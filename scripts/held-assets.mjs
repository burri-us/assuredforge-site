// SB2: assets that carry held wording live in held-assets/, outside public/ (everything in public/ is served, linked or not).
// Each is copied into public/ only when the claims rows its text rests on allow it (content/claims-state.json), or in a review
// preview (AF_CLAIMS_PREVIEW=1); otherwise the copy is removed. The copies are ignored by git. components/Brand.tsx uses the same
// condition to point the page at the asset, and scripts/check.mjs refuses a held asset that no page uses.
// Usage: node scripts/held-assets.mjs   (first steps of npm run build)
import { copyFileSync, existsSync, readFileSync, rmSync } from "node:fs";

const WORDING = ["Current", "Approved wording", "Decided"];
const rows = JSON.parse(readFileSync("content/claims-state.json", "utf8")).rows;
const preview = process.env.AF_CLAIMS_PREVIEW === "1";
// og-brand.png: "From goals to execution" (CL-74) and "Build. Govern. Prove." (CL-76).
const ASSETS = [{ file: "og-brand.png", rows: ["CL-74", "CL-76"] }];

for (const a of ASSETS) {
  const on = preview || a.rows.every((r) => WORDING.includes(rows[r]));
  const target = `public/${a.file}`;
  if (on) copyFileSync(`held-assets/${a.file}`, target);
  else if (existsSync(target)) rmSync(target);
  console.log(`Held asset ${a.file}: ${on ? "in public/" : "held"}`);
}
