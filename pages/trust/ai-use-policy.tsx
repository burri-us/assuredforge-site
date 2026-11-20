import { LegalPage, Bullets } from "../../components/Blocks";
import { AI } from "../../components/AiWording";

// DRAFT — COUNSEL REVIEW. The rule that AI never approves is CL-04 (current). Where AI is used and the account/budget points
// are CLAIM-UNVERIFIED and sit inside the WS-01 decision: if the owner holds the new AI wording, hold this page too.
export default function AiUsePolicy() {
  return (
    <LegalPage
      title="AI use policy"
      description="Where AI may be used in AssuredForge, what it never does, and your responsibilities."
      intro={AI.available ? "This policy describes how AI is used with AssuredForge." : "AI assistance is being validated for the desktop design-partner evaluation. This policy states the rules that apply to it."}
      sections={[
        { h: "Where AI may be used", body: AI.available ? <p>Planning, writing code, writing and running tests, and analysis of delivery work, when model execution is turned on by an administrator.</p> : <p>Once validated: planning, writing code, writing and running tests, and analysis of delivery work, under the same governance.</p> },
        { h: "What AI never does", body: <Bullets items={["AI never approves.", "AI never accepts risk.", "AI never authorizes a release.", "A named person decides all of these."]} /> },
        { h: "Human review duties", body: <p>A person must review AI output before relying on it. Model output may be wrong, incomplete or insecure. You remain responsible for what you release.</p> },
        ...(AI.available ? [
        { h: "Your model account and key", body: <p>You use your own account and key with the model provider you choose. Your use is under that provider&apos;s terms. Charges are billed by the provider to you.</p> },
        { h: "Training", body: <p>Tierra does not train models on your data. [Counsel and owner to confirm this wording; it covers Tierra only, not the provider you choose, whose terms govern.]</p> },
        { h: "Cost controls", body: <p>You can set a run budget and a monthly limit. An administrator turns model execution on or off as a signed decision.</p> },
        ] : []),
        { h: "Prohibited uses", body: <Bullets items={[...(AI.available ? ["Submitting data you have no right to share with a model provider."] : []), "Using AI output to bypass an approval or a gate.", AI.available ? "Any use prohibited by the acceptable use policy or by the provider's terms." : "Any use prohibited by the acceptable use policy."]} /> },
      ]}
    />
  );
}
