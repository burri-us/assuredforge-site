// Text for /industries/ and /works-with/ comes only from approved claims register entries (owner decision 2026-11-21);
// Kit Notices owns the register. A slot that is null has no approved entry yet and shows a CLAIM- marker, which a publish
// build (SITE_PUBLISH=1) refuses. Fill a slot by copying the approved register text verbatim and naming its entry in `basis`.
// No compliance claims on either page: scripts/check.mjs fails the build on compliance terms there.
import type { StatusKind } from "./Blocks";

export const pending = (slot: string) => `[CLAIM- entry pending: ${slot}]`;

// ---- Industries (/industries/): one short section each, same structure (owner's list and order). ----
export type IndustryEntry = {
  id: string;            // anchor: /industries/#<id>
  name: string;          // owner's name for the industry
  status?: StatusKind;   // optional; the claim drafts (bff6eb9) give no status per industry
  summary: string | null;
  points: string[] | null;
  basis: string | null;  // register entries the text comes from, e.g. "CL-60"
};

// shared: the line for organizations, shown after the lead and under each industry (draft CL-IND-00).
export const INDUSTRIES_PAGE: { description: string | null; lead: string | null; shared: string | null } = { description: null, lead: null, shared: null };

export const INDUSTRIES: IndustryEntry[] = [
  { id: "manufacturing", name: "Manufacturing", summary: null, points: null, basis: null },
  { id: "healthcare-life-sciences", name: "Healthcare and life sciences", summary: null, points: null, basis: null },
  { id: "retail-ecommerce", name: "Retail and e-commerce", summary: null, points: null, basis: null },
  { id: "banking-financial-services", name: "Banking and financial services", summary: null, points: null, basis: null },
  { id: "insurance", name: "Insurance", summary: null, points: null, basis: null },
  { id: "public-sector", name: "Public sector", summary: null, points: null, basis: null },
  { id: "education", name: "Education", summary: null, points: null, basis: null },
  { id: "software-technology", name: "Software and technology", summary: null, points: null, basis: null },
];

// ---- Works with (/works-with/): three groups, each item with a Supported / Being validated / Planned badge. ----
export type WorksWithItem = { name: string; status: Extract<StatusKind, "supported" | "validated" | "planned">; note: string | null; basis: string };
// asOf: "Status as of <date>, for the desktop evaluation kit <release>." under each list (draft page rule); limits: optional lines.
// aiOnly: shown only while the AI switch is on (components/AiWording.tsx; WR-01 forbids naming a model source while it is off,
// as sweep decision 11 does for "model usage" on the individuals page).
export type WorksWithGroup = { id: string; title: string; aiOnly?: boolean; intro: string | null; items: WorksWithItem[] | null; asOf: string | null; limits?: string[] };

export const WORKS_WITH_PAGE: { description: string | null; lead: string | null; badges: string | null } = {
  description: null,
  lead: null,
  badges: null,   // what Supported, Being validated and Planned mean (glossary wording)
};

export const WORKS_WITH: WorksWithGroup[] = [
  { id: "languages", title: "Languages and toolchains", intro: null, items: null, asOf: null },
  { id: "model-sources", title: "AI model sources", aiOnly: true, intro: null, items: null, asOf: null },
  { id: "connectors", title: "Connectors", intro: null, items: null, asOf: null },
];
