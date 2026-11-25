// SB2: checks the claims-state snapshot against the site's source; run by npm run build before next build.
//   Every row the source uses (<Claim row=...>, claimText(...)) is in content/claims-state.json with a valid state.
//   A publish build (SITE_PUBLISH=1) refuses AF_CLAIMS_PREVIEW (held blocks shown for review only).
//   Self-tests of the state mapping (scripts/claims-state.mjs MAP_CASES) and of the row-use pattern.
// scripts/check.mjs also refuses a visible "[Held:" marker in a publish build.
// Usage: node scripts/check-claims.mjs
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { MAP_CASES, STATES, mapState, parseRegister, ROW_USE } from "./claims-state.mjs";

const problems = [];
const snapshot = JSON.parse(readFileSync("content/claims-state.json", "utf8"));
if (typeof snapshot.register !== "string" || typeof snapshot.rows !== "object") problems.push("content/claims-state.json: needs \"register\" and \"rows\"");
for (const [id, s] of Object.entries(snapshot.rows ?? {})) if (!STATES.includes(s)) problems.push(`claims-state.json: ${id} has unknown state "${s}"`);

const files = (d) => readdirSync(d).flatMap((n) => (statSync(join(d, n)).isDirectory() ? files(join(d, n)) : [join(d, n)]));
let uses = 0;
for (const d of ["pages", "components"]) {
  for (const f of files(d).filter((f) => /\.tsx?$/.test(f))) {
    for (const m of readFileSync(f, "utf8").matchAll(ROW_USE)) {
      uses++;
      if (!(m[1] in (snapshot.rows ?? {}))) problems.push(`${f}: ${m[1]} is not in content/claims-state.json (run scripts/claims-sync.mjs)`);
    }
  }
}
if (process.env.SITE_PUBLISH === "1" && process.env.AF_CLAIMS_PREVIEW) problems.push("publish build with AF_CLAIMS_PREVIEW set (held blocks are for review only)");

for (const [cell, want] of MAP_CASES) {
  const got = mapState(cell);
  if (got !== want) problems.push(`mapping self-test: "${cell.slice(0, 50)}" gave ${got}, expected ${want}`);
}
const sample = '| CL-01 | "A" | Approved wording | src |\n| CL-79 | B | Current (x); **Draft (y)** | src |\n| CL-IND-00 | C | Decided | src |';
const parsed = parseRegister(sample);
if (parsed["CL-79"] !== "Current (x); **Draft (y)**" || parsed["CL-IND-00"] !== "Decided" || Object.keys(parsed).length !== 3) problems.push("register parse self-test failed");
const useSample = '<Claim row="CL-82" when={["Current"]}> claimText("CL-WW-02", "x") row={x}';
if ([...useSample.matchAll(ROW_USE)].map((m) => m[1]).join(",") !== "CL-82,CL-WW-02") problems.push("row-use self-test failed");

if (problems.length) {
  console.error(`Claims check failed:\n  ${problems.join("\n  ")}`);
  process.exit(1);
}
console.log(`Claims check passed: ${uses} use(s), ${Object.keys(snapshot.rows).length} row(s) in the snapshot (register ${String(snapshot.register).slice(0, 8)})`);
