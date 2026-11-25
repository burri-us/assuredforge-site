// Brand language (DEC-637, amended with the owner's decisions on BRAND-LANGUAGE-PLAN.md §7). PREVIEW ROUND. Wording is the claims
// register's verbatim: CL-74 to CL-85 (records ffd6906f), all Draft until this preview round passes the owner's review, so every block
// here carries a pending marker and the release build (SITE_PUBLISH=1) refuses the pages that show it. Marketing vocabulary in
// headlines and names only (CL-85); claim sentences keep "agents" (DEC-592). Never "autonomous execution". No "AI" in headlines,
// taglines or navigation (DEC-577). WR-01: a pillar sentence that states an AI fact (CL-81, CL-83, CL-84) comes only with the AI switch
// on; with it off the pillar shows its name and state only.
import { AI } from "./AiWording";
import { pending } from "./Registered";
import type { StatusKind } from "./Blocks";

export const BRAND = {
  heroTitle: "From goals to execution", // CL-74
  heroLead: "Turn business objectives into governed, evidence-backed outcomes, starting with software delivery.", // CL-75
  oneLiner: "AssuredForge turns business goals into governed, evidence-backed execution, starting with software delivery.", // CL-77
  tagline: "Build. Govern. Prove.", // CL-76
  heroPending: pending("CL-74, CL-75, CL-77 (Draft, DEC-637 preview round)"),
  taglinePending: pending("CL-76 (Draft, DEC-637 preview round)"),
  pillarsPending: pending("CL-79 to CL-85 (Draft, DEC-637 preview round)"),
};

// Six pillars mapped onto Plan / Build / Decide / Prove (DEC-637 (5); the mapping is confirmed at the preview review). Governance is
// stated as fact (CL-79, Current); the others show their state (DEC-637 (6)).
export type Pillar = { name: string; text: string | null; state: StatusKind; row: string };
export const PILLAR_GROUPS: { step: string; pillars: Pillar[] }[] = [
  { step: "Plan", pillars: [
    { name: "Goal alignment", text: "Requirements are drawn from the product's Vision.", state: "validated", row: "CL-80" },
  ] },
  { step: "Build", pillars: [
    { name: "Skills and expertise", text: "Your organization's expertise, captured as reusable skills.", state: "planned", row: "CL-82" },
    { name: "Model independence", text: AI.available ? "Not tied to one model provider; each model source shows its own status." : null, state: "validated", row: "CL-84" },
  ] },
  { step: "Decide", pillars: [
    { name: "Governance", text: "Named people make every governed decision, and every governed decision is recorded and verifiable.", state: "today", row: "CL-79" },
    { name: "Cost governance", text: AI.available ? "Every run has a run budget and a monthly limit." : null, state: "validated", row: "CL-83" },
  ] },
  { step: "Prove", pillars: [
    { name: "Observability", text: AI.available ? "See what agents did on every run: the run console and agent action records." : null, state: "validated", row: "CL-81" },
  ] },
];
