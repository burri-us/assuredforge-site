// SB2 (DEC-662, DEC-671): learner, license and download wording, verbatim from the claims register (architecture 3ea0b1b7).
// CL-89 to CL-92 are Planned once out of Draft and appear only as labelled state lines; CL-93 and CL-95 are Decided commitments;
// CL-94 is Planned. Each block shows only when its row allows it (components/Claim.tsx), or in a review preview with its marker.
// No open self-service sign-up (the register's must-not row, DEC-671): only the verified license request and the invite-only pilot.
import { claimKind, claimShown, heldNote, type ClaimState } from "./Claim";
import { Status } from "./Blocks";

export const PLANNED_LINE: ClaimState[] = ["Planned", "Being validated", "Current"];
export const COMMITMENT: ClaimState[] = ["Decided", "Current"];

export const LEARNER_LINE = "Students and individual learners can use AssuredForge to learn the software delivery lifecycle with tools they already have."; // CL-89

const ROUTES: { row: string; text: string }[] = [
  { row: "CL-90", text: "Run AssuredForge in your own student cloud: one deployment into your own Azure for Students account. Any Azure usage comes from your own credit, which you control." },
  { row: "CL-91", text: "Campus editions hosted by universities." },
  { row: "CL-92", text: "An invite-only learner pilot for adults (18+) on the hosted edition; its first stage has AI features off." },
];

// Home "Who it is for" and the Individuals page lead: the learner audience line (CL-89).
export function LearnerLine({ className = "max-w-[70ch]" }: { className?: string }) {
  if (!claimShown("CL-89", PLANNED_LINE)) return null;
  return (
    <p className={className}>
      {heldNote(["CL-89"], PLANNED_LINE)} <Status kind={claimKind("CL-89", "planned")} /> {LEARNER_LINE}
    </p>
  );
}

// Individuals page: the learner routes (CL-90 to CL-92), each with its state.
export function LearnerRoutes() {
  const shown = ROUTES.filter((r) => claimShown(r.row, PLANNED_LINE));
  if (!shown.length) return null;
  return (
    <ul className="mt-3 max-w-[70ch] space-y-3">
      {shown.map((r) => (
        <li key={r.row}>
          {heldNote([r.row], PLANNED_LINE)} <Status kind={claimKind(r.row, "planned")} /> {r.text}
        </li>
      ))}
    </ul>
  );
}

// Editions page: licenses (CL-93), the download page and license request (CL-94), the registration privacy summary (CL-95).
export function Licenses() {
  const parts = [
    claimShown("CL-93", COMMITMENT) && (
      <p key="CL-93" className="max-w-[70ch]">{heldNote(["CL-93"], COMMITMENT)} Every edition needs a license, free editions included. A free license is time-limited, bound to your installation or account and tied to a registered, verified contact.</p>
    ),
    claimShown("CL-94", PLANNED_LINE) && (
      <p key="CL-94" className="max-w-[70ch]">{heldNote(["CL-94"], PLANNED_LINE)} <Status kind={claimKind("CL-94", "planned")} /> A public download page, and a &quot;Get your free license&quot; request in the product; once your request is verified and approved, the license is issued and installed automatically.</p>
    ),
    claimShown("CL-95", COMMITMENT) && (
      <p key="CL-95" className="max-w-[70ch]">{heldNote(["CL-95"], COMMITMENT)} Registration asks only for what we need to verify you. University and field of study are optional and used only to personalize your welcome.</p>
    ),
  ].filter(Boolean);
  return parts.length ? <>{parts}</> : null;
}
export const LICENSES_SHOWN = claimShown("CL-93", COMMITMENT) || claimShown("CL-94", PLANNED_LINE) || claimShown("CL-95", COMMITMENT);
export const ROUTES_SHOWN = ROUTES.some((r) => claimShown(r.row, PLANNED_LINE));
