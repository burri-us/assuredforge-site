// SB2 (DEC-662, plan docs/SB2-CONTENT-PLAN.md section 2): shared rules for the claims-state snapshot.
// The claims register's State cell is free text; the site needs one of seven states per row. mapState() maps a cell or returns
// null when it cannot decide (mixed cells such as "Current (desktop) / planned (hosted)"); those rows need an explicit entry in
// content/claims-mapping.json (from Kit Notices). It never guesses.

export const STATES = ["Current", "Decided", "Approved wording", "Being validated", "Planned", "Draft", "Withdrawn"];

export function mapState(cell) {
  const c = cell.replace(/\s+/g, " ").trim();
  // A Draft hold wins whatever else the cell says (CL-74 "Approved wording ...; **Draft ...", CL-79 "Current ...; **Draft ...").
  if (/\*\*Draft\b/.test(c) || /^Draft\b/.test(c)) return "Draft";
  if (/^Withdrawn\b/.test(c)) return "Withdrawn";
  // Two states side by side ("A / B") cannot be mapped without a decision.
  if (/\s\/\s/.test(c)) return null;
  if (/^Current\b/.test(c)) return "Current";
  if (/^Being validated\b/.test(c)) return "Being validated";
  if (/^Planned\b/.test(c)) return "Planned";
  if (/^Decided\b/.test(c)) return "Decided";
  if (/^Approved wording\b/.test(c)) return "Approved wording";
  return null;
}

// Rows of the register's claims tables: "| CL-xx | claim | state | sources |".
export function parseRegister(md) {
  const rows = {};
  for (const line of md.split(/\r?\n/)) {
    const m = /^\|\s*(CL-[A-Z0-9-]+)\s*\|(.*)\|\s*$/.exec(line);
    if (!m) continue;
    const cells = m[2].split(" | ");
    if (cells.length < 3) continue;
    rows[m[1]] = cells[1].trim();
  }
  return rows;
}

// Rows the site's source uses: <Claim row="CL-xx" ...> and claimText("CL-xx", ...).
export const ROW_USE = /(?:\brow=|\bclaimText\()\s*["'](CL-[A-Z0-9-]+)["']/g;

// Self-tests, run by scripts/check-claims.mjs: each case is [cell, expected state or null].
export const MAP_CASES = [
  ["Current", "Current"],
  ["Current (rule enforced)", "Current"],
  ["Being validated (until the W8 model-path rehearsal, DEC-437)", "Being validated"],
  ["Planned", "Planned"],
  ["Decided (accepted, DEC-439 P-1; revised, DEC-470)", "Decided"],
  ["Approved wording", "Approved wording"],
  ["Withdrawn", "Withdrawn"],
  ["Approved wording (owner, DEC-637); **Draft (owner, DEC-637); not used until the next preview round passes the owner's review**", "Draft"],
  ["Current (rests on Current claims; stated as fact, DEC-637 (3)(f)); **Draft (owner, DEC-637); not used until ...**", "Draft"],
  ["**Draft (owner, DEC-608); not used until the content refresh is built and released by its own owner decision.**", "Draft"],
  ["Current (desktop) / planned (hosted) (revised, DEC-469)", null],
  ["Current (pilot on Azure) / planned (hosted edition)", null],
  ["Something new", null],
];
