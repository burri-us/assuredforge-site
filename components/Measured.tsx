// Figures measured at the W8 rehearsal (S-24, DEC-435/436; claims register CL-54). One place to fill them.
//
// RAM: null until W8. While null, /solutions/individuals/ shows the CL-54 marker "[RAM: CONFIRM AT W8]", which a publish
// build refuses. To fill it after W8:
//   1. Set both numbers from the W8 measurement record, for example { minGB: 8, recommendedGB: 16 }.
//   2. Make the FAQ ("8 GB RAM minimum (16 GB recommended)") and Editions and deployment ("8 GB RAM minimum; 16 GB
//      recommended") state the same numbers. scripts/check.mjs refuses a build where the three pages differ.
//   3. Ask the register owner to replace the marker in CL-54 with the filled wording.
export const RAM_W8: { minGB: number; recommendedGB: number } | null = null;

// Placeholders (owner, DEC-483 (12), OI-608): hidden until the W8 media and figures exist, so publication does not wait on
// them. While false, a screenshot or video slot without media renders nothing and the RAM clause is left out. Set it to true
// to show the placeholders again (preview only: a publish build refuses them).
export const SHOW_PLACEHOLDERS = false;

export const RAM_MARKER = "[RAM: CONFIRM AT W8]";

// The words that complete CL-54's sentence "... and about 30 GB of free disk, with <this>."
export function ramWording(): string {
  return RAM_W8 ? `${RAM_W8.minGB} GB RAM minimum (${RAM_W8.recommendedGB} GB recommended)` : RAM_MARKER;
}

// The clause after "about 30 GB of free disk": ", with <RAM>" once filled; nothing while the placeholders are hidden.
export function ramClause(): string {
  return RAM_W8 || SHOW_PLACEHOLDERS ? `, with ${ramWording()}` : "";
}
