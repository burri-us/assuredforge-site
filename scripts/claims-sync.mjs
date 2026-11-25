// SB2: refreshes content/claims-state.json from the claims register at a named architecture commit (read only: git show).
// It records the state of every row the site's source uses (scripts/claims-state.mjs ROW_USE). A row whose State cell cannot be
// mapped to one state needs an entry in content/claims-mapping.json ({ "CL-xx": "<state>" }, from Kit Notices); otherwise the run
// fails and names the row. The refresh is its own commit; its diff lists the content that will appear or disappear at the next
// release (RELEASE-PACKAGE G-9).
// Usage: node scripts/claims-sync.mjs <path to an architecture clone> <commit>
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { STATES, mapState, parseRegister, ROW_USE } from "./claims-state.mjs";

const [repo, commit] = process.argv.slice(2);
if (!repo || !commit) {
  console.error("Usage: node scripts/claims-sync.mjs <path to an architecture clone> <commit>");
  process.exit(2);
}
const REGISTER = "research/design-partners/materials/CLAIMS-REGISTER.md";
const full = execFileSync("git", ["-C", repo, "rev-parse", "--verify", `${commit}^{commit}`], { encoding: "utf8" }).trim();
const md = execFileSync("git", ["-C", repo, "show", `${full}:${REGISTER}`], { encoding: "utf8", maxBuffer: 1 << 26 });
const register = parseRegister(md);

const files = (d) => readdirSync(d).flatMap((n) => (statSync(join(d, n)).isDirectory() ? files(join(d, n)) : [join(d, n)]));
const used = new Set();
for (const d of ["pages", "components"]) {
  for (const f of files(d).filter((f) => /\.tsx?$/.test(f))) for (const m of readFileSync(f, "utf8").matchAll(ROW_USE)) used.add(m[1]);
}

const mapping = existsSync("content/claims-mapping.json") ? JSON.parse(readFileSync("content/claims-mapping.json", "utf8")) : {};
const problems = [];
const rows = {};
for (const id of [...used].sort()) {
  if (!(id in register)) { problems.push(`${id}: used by the site but not in the register at ${full.slice(0, 8)}`); continue; }
  const state = mapping[id] ?? mapState(register[id]);
  if (!state) problems.push(`${id}: state cell needs a mapping in content/claims-mapping.json: "${register[id].slice(0, 90)}"`);
  else if (!STATES.includes(state)) problems.push(`${id}: mapping "${state}" is not one of ${STATES.join(", ")}`);
  else rows[id] = state;
}
if (problems.length) {
  console.error(`Claims sync failed:\n  ${problems.join("\n  ")}`);
  process.exit(1);
}

const before = existsSync("content/claims-state.json") ? JSON.parse(readFileSync("content/claims-state.json", "utf8")).rows ?? {} : {};
writeFileSync("content/claims-state.json", `${JSON.stringify({ register: full, rows }, null, 2)}\n`);
const changed = Object.keys({ ...before, ...rows }).sort().filter((id) => before[id] !== rows[id]);
console.log(`Claims state: ${Object.keys(rows).length} row(s) from register ${full.slice(0, 8)}`);
for (const id of changed) console.log(`  ${id}: ${before[id] ?? "(new)"} -> ${rows[id] ?? "(no longer used)"}`);
