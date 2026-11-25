// SB2 (DEC-662, plan docs/SB2-CONTENT-PLAN.md section 2): content tied to a claims row. A block renders only when its row's state
// (content/claims-state.json, refreshed at each release by scripts/claims-sync.mjs) is one the block allows; otherwise it is absent,
// so held content no longer blocks a release. Owner decision 1 (DEC-671): fact sentences need "Current"; commitments may allow
// "Decided" or "Approved wording"; "Being validated" and "Planned" appear only as labelled state lines.
// Preview (AF_CLAIMS_PREVIEW=1): held blocks show in place behind a "[Held: ...]" marker, which a publish build refuses.
// A row missing from the snapshot shows a CLAIM- marker in every build, so a publish build fails until the snapshot is refreshed.
import type { ReactNode } from "react";
import snapshot from "../content/claims-state.json";
import { pending } from "./Registered";
import type { StatusKind } from "./Blocks";

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

// A value that replaces today's live one once its row allows it: the new value when allowed or in a review preview (the preview
// shows the page as it would be; heldNote() carries the marker), today's value otherwise. A row missing from the snapshot gives a
// CLAIM- marker, so a publish build fails until the snapshot is refreshed.
export function claimOr<T>(row: string, value: T, fallback: T, when: ClaimState[] = ["Current"]): T | string {
  const state = ROWS[row];
  if (!state) return pending(`${row} not in content/claims-state.json`);
  return when.includes(state) || CLAIMS_PREVIEW ? value : fallback;
}

// Whether a row's content shows: its state allows it, or a review preview. For list items and paragraphs that carry their own
// heldNote() marker inside them (a <div> or bare text inside <ul> is invalid markup).
export function claimShown(row: string, when: ClaimState[] = ["Current"]): boolean {
  const state = ROWS[row];
  return (state !== undefined && when.includes(state)) || CLAIMS_PREVIEW;
}

// The status label for a row shown as a state line (owner decision 1, DEC-671): from its state, or the intended label while Draft.
export function claimKind(row: string, intended: StatusKind): StatusKind {
  const state = ROWS[row];
  return state === "Current" ? "today" : state === "Being validated" ? "validated" : state === "Planned" ? "planned" : intended;
}

// The marker line for a review preview: the rows on this part of the page that are still held, or null.
export function heldNote(rows: string[], when: ClaimState[] = ["Current"]): string | null {
  if (!CLAIMS_PREVIEW) return null;
  const held = [...new Set(rows)].filter((r) => !ROWS[r] || !when.includes(ROWS[r]));
  return held.length ? `[Held: ${held.map((r) => `${r}, ${ROWS[r] ?? "not in snapshot"}`).join("; ")}]` : null;
}

// The same rule for a string (metadata, alt text): the text, a preview marker, or null.
export function claimText(row: string, text: string, when: ClaimState[] = ["Current"]): string | null {
  const state = ROWS[row];
  if (!state) return pending(`${row} not in content/claims-state.json`);
  if (when.includes(state)) return text;
  return CLAIMS_PREVIEW ? `[Held: ${row}, ${state}] ${text}` : null;
}
