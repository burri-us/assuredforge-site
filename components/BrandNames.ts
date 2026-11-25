// Names in the new vocabulary (CL-85, DEC-637 (3)(b)(d): headlines, page and section names only; claim sentences keep "agents",
// DEC-592). Each name replaces today's live one once CL-85 allows it (components/Claim.tsx claimOr; owner decision 1, DEC-671:
// "Approved wording" rows may be used as wording). A separate module, so components/AiWording.tsx can use it without a cycle.
import { claimOr, type ClaimState } from "./Claim";

export const WORDING: ClaimState[] = ["Current", "Approved wording", "Decided"];
const name = (text: string, today: string) => String(claimOr("CL-85", text, today, WORDING));

export const NAMES = {
  deliveryPage: name("Governed execution", "Agent-prepared delivery"),
  platformSection: name("Governed execution, human approval", "Agents prepare, people decide"),
  buildStep: name("Governed build", "Agents build"),
};
