// Brand language (DEC-637, amended with the owner's decisions on BRAND-LANGUAGE-PLAN.md §7; folded into SB2, DEC-671 (3)). Wording is
// the claims register's verbatim: CL-74 to CL-85. Each value replaces today's live one only once its row allows it
// (components/Claim.tsx claimOr; owner decision 1, DEC-671: "Approved wording" rows as wording, pillar sentences by their own state);
// until then a publish build shows today's site, and a review preview (AF_CLAIMS_PREVIEW=1) shows the new wording with "[Held: ...]"
// marker lines. Marketing vocabulary in headlines and names only (CL-85); claim sentences keep "agents" (DEC-592). Never
// "autonomous execution". No "AI" in headlines, taglines or navigation (DEC-577). WR-01: a pillar sentence that states an AI fact
// (CL-81, CL-83, CL-84) comes only with the AI switch on; with it off the pillar shows its name and state only.
import { AI } from "./AiWording";
import { claimOr, claimState, heldNote, CLAIMS_PREVIEW, type ClaimState } from "./Claim";
import { WORDING } from "./BrandNames";
import type { StatusKind } from "./Blocks";

const TODAY_DESCRIPTION =
  "Governed software delivery with traceability, release approvals signed by named people and a tamper-evident audit chain. For individuals and small teams today; a hosted edition for organizations is planned.";

// Share image and its alt text (assessor finding 2026-11-25: today's carry CL-01 "Build anywhere ..."). The new image rests on
// CL-74 and CL-76 and is copied into public/ under the same condition (scripts/held-assets.mjs).
const OG_ON = claimOr("CL-74", true, false, WORDING) === true && claimOr("CL-76", true, false, WORDING) === true;

export const BRAND = {
  ogImage: OG_ON ? "/og-brand.png" : "/og.png",
  ogAlt: OG_ON ? "AssuredForge: From goals to execution. Build. Govern. Deliver." : "AssuredForge: Build anywhere. Deploy anywhere. Govern everywhere.",
  heroTitle: String(claimOr("CL-74", "From goals to execution", AI.heroTitle, WORDING)),
  heroLead: claimOr<string | null>("CL-75", "Turn business objectives into governed, evidence-backed outcomes, starting with software delivery.", null, WORDING),
  oneLiner: String(claimOr("CL-77", "AssuredForge turns business goals into governed, evidence-backed execution, starting with software delivery.", TODAY_DESCRIPTION, WORDING)),
  tagline: claimOr<string | null>("CL-76", "Build. Govern. Deliver.", null, WORDING),
  heroHeld: heldNote(["CL-74", "CL-75", "CL-77"], WORDING),
  taglineHeld: heldNote(["CL-76"], WORDING),
};

// Six pillars mapped onto Plan / Build / Decide / Prove (DEC-637 (5)). Governance is stated as fact (CL-79, needs Current); the others
// appear as labelled state lines (Being validated, Planned) or as fact once Current (DEC-637 (6), DEC-671 decision 1).
// `label` is the state shown in a review preview while the row is still Draft; once the row has a state, the state decides.
export type Pillar = { name: string; text: string | null; label: StatusKind; row: string };
export const PILLAR_GROUPS: { step: string; pillars: Pillar[] }[] = [
  { step: "Plan", pillars: [
    { name: "Goal alignment", text: "Requirements are drawn from the product's Vision.", label: "validated", row: "CL-80" },
  ] },
  { step: "Build", pillars: [
    { name: "Skills and expertise", text: "Your organization's expertise, captured as reusable skills.", label: "planned", row: "CL-82" },
    { name: "Model independence", text: AI.available ? "Not tied to one model provider; each model source shows its own status." : null, label: "validated", row: "CL-84" },
  ] },
  { step: "Decide", pillars: [
    { name: "Governance", text: "Named people make every governed decision, and every governed decision is recorded and verifiable.", label: "today", row: "CL-79" },
    { name: "Cost governance", text: AI.available ? "Every run has a run budget and a monthly limit." : null, label: "validated", row: "CL-83" },
  ] },
  { step: "Record", pillars: [
    { name: "Observability", text: AI.available ? "See what agents did on every run: the run console and agent action records." : null, label: "validated", row: "CL-81" },
  ] },
];

const KIND: Partial<Record<ClaimState, StatusKind>> = { Current: "today", "Being validated": "validated", Planned: "planned" };
const SHOWN: ClaimState[] = ["Current", "Being validated", "Planned"];

// The state label a pillar shows: from its row once the row has a usable state; the intended label in a review preview.
export function pillarKind(p: Pillar): StatusKind {
  return KIND[claimState(p.row) as ClaimState] ?? p.label;
}
// A pillar appears when its row is usable as a state line, or in a review preview.
export function pillarShown(p: Pillar): boolean {
  return SHOWN.includes(claimState(p.row) as ClaimState) || CLAIMS_PREVIEW;
}
// The pillar section replaces today's Govern / Trace / Prove / Build tiles once Governance (CL-79) is Current and the section's
// names (CL-85) are usable; in a review preview it shows with its marker line.
export const PILLARS_ON = Boolean(claimOr("CL-79", true, false, ["Current"])) && Boolean(claimOr("CL-85", true, false, WORDING));
export const PILLARS_HELD = heldNote(["CL-79", "CL-85", ...PILLAR_GROUPS.flatMap((g) => g.pillars.map((p) => p.row))], ["Current", "Approved wording", "Being validated", "Planned"]);
