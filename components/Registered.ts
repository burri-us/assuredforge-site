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
export const INDUSTRIES_PAGE: { description: string | null; lead: string | null; shared: string | null } = {
  description: "Software delivery governance and traceability you can export and verify, for individuals and small teams on the desktop edition, and for organizations on the hosted edition (planned).", // CL-02
  lead: "Software delivery governance and traceability you can export and verify, for individuals and small teams on the desktop edition, and for organizations on the hosted edition (planned).", // CL-02
  shared: "Organizations: the hosted edition is planned. Join the waitlist. Today's evaluation is the desktop edition, for individuals and small teams.", // CL-IND-00
};

export const INDUSTRIES: IndustryEntry[] = [
  { id: "manufacturing", name: "Manufacturing", summary: "Software in manufacturing often changes alongside products, lines and quality processes, and teams are asked to show which version was built, who approved it and how it was checked. AssuredForge records each requirement, approval and test result against a named person, in an audit trail you can verify.", points: null, basis: "CL-IND-01" },
  { id: "healthcare-life-sciences", name: "Healthcare and life sciences", summary: "Software teams in healthcare and life sciences are often asked for a clear record of what changed, why, and who signed it off. AssuredForge keeps that record as you work: requirements, signed approvals and test results, linked from the request to the release.", points: null, basis: "CL-IND-02" },
  { id: "retail-ecommerce", name: "Retail and e-commerce", summary: "Retail and e-commerce teams release often, and when something goes wrong they need to know quickly what was released and who approved it. AssuredForge links each release to its approved content, its tests and the people who decided.", points: null, basis: "CL-IND-03" },
  { id: "banking-financial-services", name: "Banking and financial services", summary: "Banks and financial firms usually expect changes to be separated, reviewed and approved by named people, with evidence kept for later review. AssuredForge enforces roles, records signed approvals and writes every governed action into an audit trail you can verify.", points: null, basis: "CL-IND-04" },
  { id: "insurance", name: "Insurance", summary: "Insurers' systems carry rules and calculations that must be changed with care and explained later. AssuredForge keeps each change traceable from requirement to release, with who approved it and how it was tested.", points: null, basis: "CL-IND-05" },
  { id: "public-sector", name: "Public sector", summary: "Public-sector teams are often asked to show how a system was built and accepted, sometimes years later. AssuredForge records requirements, acceptance decisions and releases against named people, and lets you export the records and verify the export offline.", points: null, basis: "CL-IND-06" },
  { id: "education", name: "Education", summary: "Schools, universities and education-technology teams often work with small teams and changing staff, so the reasons behind a change get lost. AssuredForge keeps what was built, who approved it and how it was checked in one place that the next person can follow.", points: null, basis: "CL-IND-07" },
  { id: "software-technology", name: "Software and technology", summary: "Software companies are increasingly asked by customers to show how their software is built, reviewed and released. AssuredForge gives you that record as part of the work: traceable requirements, signed release approvals, recorded tests and a verifiable audit trail.", points: null, basis: "CL-IND-08" },
];

// ---- Works with (/works-with/): three groups, each item with a Supported / Being validated / Planned badge. ----
export type WorksWithItem = { name: string; status: Extract<StatusKind, "supported" | "validated" | "planned">; note: string | null; basis: string };
// asOf: "Status as of <date>, for the desktop evaluation kit <release>." under each list (draft page rule); limits: optional lines.
// aiOnly: shown only while the AI switch is on (components/AiWording.tsx; WR-01 forbids naming a model source while it is off,
// as sweep decision 11 does for "model usage" on the individuals page).
export type WorksWithGroup = { id: string; title: string; aiOnly?: boolean; intro: string | null; items: WorksWithItem[] | null; asOf: string | null; limits?: string[] };

export const WORKS_WITH_PAGE: { description: string | null; lead: string | null; badges: string | null } = {
  description: "Not tied to one technology or one model provider.", // CL-WW-00
  lead: "Not tied to one technology or one model provider.", // CL-WW-00
  // Badge definitions (DEC-470 (5)).
  badges: "Supported: a recorded live run on the current kit's code line. Being validated: built and tested, no live run on the current kit. Planned: not built.",
};
// Status line under each group (the approved page rule, DEC-470).
const AS_OF = "Status as of 21 November 2026, for the desktop evaluation kit release-b1-c68012b.";

// CL-WW-02 / DEC-470 (1): the Anthropic API source becomes "Supported" once the W8 model-path rehearsal passes on the current kit.
// Prepared, not applied (owner item 3): the approved change sets the date the rehearsal passed, e.g. "23 November 2026", and
// the model-source status line follows it. While null the row stays "Being validated". The model-source group shows only while
// the AI switch is on (WR-01), so the rehearsal commit normally also turns on AI_DELIVERY_AVAILABLE (components/AiWording.tsx),
// which is its own approval. Release notes: docs/RELEASE-PACKAGE.md section 4.
export const ANTHROPIC_SUPPORTED_SINCE: string | null = null;
const MODEL_AS_OF = ANTHROPIC_SUPPORTED_SINCE
  ? `Status as of ${ANTHROPIC_SUPPORTED_SINCE}, for the desktop evaluation kit release-b1-c68012b.`
  : AS_OF;

export const WORKS_WITH: WorksWithGroup[] = [
  { // CL-WW-01
    id: "languages", title: "Languages and toolchains",
    intro: "Each is built and tested in its own isolated container on your PC.",
    items: [
      ...["Python 3.12", "Java 21", "Kotlin 2.4", ".NET 10", "TypeScript 5.9", "JavaScript on Node 22", "Go 1.27"].map((name) => ({ name, status: "validated" as const, note: null, basis: "CL-WW-01" })),
      { name: "Other runtimes", status: "planned", note: "As demand shows.", basis: "CL-WW-01" },
    ],
    asOf: AS_OF,
    limits: ["Runs on Windows 11 with Docker Desktop.", "A Mac version of the desktop edition is planned."], // CL-54, CL-56
  },
  { // CL-WW-02; CL-48: Works with is a technical page, provider names only for sources with live evidence (today Anthropic)
    id: "model-sources", title: "Model sources", aiOnly: true,
    intro: "Chosen in Setup, with no default.", // CL-WW-02 wording; "choose the model source" is barred (DEC-430 (6), switch check)
    items: [
      ANTHROPIC_SUPPORTED_SINCE
        ? { name: "Anthropic API key", status: "supported", note: `Supported since ${ANTHROPIC_SUPPORTED_SINCE}, after a recorded live run on the current kit.`, basis: "CL-WW-02, CL-48; W8 model-path rehearsal" }
        : { name: "Anthropic API key", status: "validated", note: null, basis: "CL-WW-02, CL-48" },
      { name: "Enterprise model gateway", status: "validated", note: null, basis: "CL-WW-02" },
      { name: "Models on your own PC", status: "validated", note: "Governance only; no delivery claim.", basis: "CL-WW-02" },
      { name: "Other provider APIs", status: "planned", note: null, basis: "CL-WW-02" },
      { name: "Subscription access", status: "planned", note: "Not in this evaluation version.", basis: "CL-WW-02; DEC-470 (4)" },
    ],
    asOf: MODEL_AS_OF,
  },
  { // CL-WW-03, CL-16, CL-17
    id: "connectors", title: "Connectors",
    intro: "AssuredForge is fully usable without third-party connectors and without an assistant. The Jira, Confluence, Bitbucket and Azure DevOps connectors are built and tested against their contracts; first use with live systems is planned with design partners.",
    items: [
      ...["Jira", "Confluence", "Bitbucket", "Azure DevOps"].map((name) => ({ name, status: "validated" as const, note: "Built and checked against sandbox systems; set up with you by agreement, no self-service set-up.", basis: "CL-WW-03" })),
      { name: "GitHub", status: "planned", note: null, basis: "CL-WW-03" },
      { name: "GitLab", status: "planned", note: null, basis: "CL-WW-03" },
      { name: "PTC Windchill", status: "planned", note: "With design partners.", basis: "CL-WW-03" },
    ],
    asOf: AS_OF,
  },
];
