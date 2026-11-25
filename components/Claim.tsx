// SB2 (DEC-662, plan docs/SB2-CONTENT-PLAN.md section 2): content tied to a claims row. A block renders only when its row's state
// (content/claims-state.json, refreshed at each release by scripts/claims-sync.mjs) is one the block allows; otherwise it is absent,
// so held content no longer blocks a release. Owner decision 1 (DEC-671): fact sentences need "Current"; commitments may allow
// "Decided" or "Approved wording"; "Being validated" and "Planned" appear only as labelled state lines.
// Preview (AF_CLAIMS_PREVIEW=1): held blocks show in place behind a "[Held: ...]" marker, which a publish build refuses.
// A row missing from the snapshot shows a CLAIM- marker in every build, so a publish build fails until the snapshot is refreshed.
import type { ReactNode } from "react";
import snapshot from "../content/claims-state.json";
import { pending } from "./Registered";

export type ClaimState = "Current" | "Decided" | "Approved wording" | "Being validated" | "Planned" | "Draft" | "Withdrawn";
export const CLAIMS_PREVIEW = process.env.AF_CLAIMS_PREVIEW === "1";
const ROWS = (snapshot as { rows: Record<string, ClaimState> }).rows;

export function claimState(row: string): ClaimState | undefined {
  return ROWS[row];
}

export function Claim({ row, when = ["Current"], children }: { row: string; when?: ClaimState[]; children: ReactNode }) {
  const state = ROWS[row];
  if (!state) return <>{pending(`${row} not in content/claims-state.json`)}</>;
  if (when.includes(state)) return <>{children}</>;
  if (!CLAIMS_PREVIEW) return null;
  return (
    <div className="claim-held">
      <p className="text-label text-muted">[Held: {row}, {state}]</p>
      {children}
    </div>
  );
}

// The same rule for a string (metadata, alt text): the text, a preview marker, or null.
export function claimText(row: string, text: string, when: ClaimState[] = ["Current"]): string | null {
  const state = ROWS[row];
  if (!state) return pending(`${row} not in content/claims-state.json`);
  if (when.includes(state)) return text;
  return CLAIMS_PREVIEW ? `[Held: ${row}, ${state}] ${text}` : null;
}
