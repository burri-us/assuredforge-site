import { LegalPage } from "../../components/Blocks";
import { AI } from "../../components/AiWording";

// Interim version of 21 November 2026 (DEC-462): standard interim wording, pending formal legal review; every filled clause is in COUNSEL-LIST.md.
// Providers are described by capability (AD-010): no vendor or model names. The review (Sec. 5) names
// two example providers; the owner decides whether to name them. CLAIM-UNVERIFIED (no register entry).
export default function Subprocessors() {
  return (
    <LegalPage
      title="Subprocessors and model providers"
      description="Who may process data when you use the AssuredForge website and the desktop edition."
      intro="A subprocessor is a service that processes personal data on our behalf."
      sections={[
        { h: "Desktop edition", body: <p>Tierra operates no subprocessors for the desktop edition: your records stay on your machine.{AI.available ? <> If you turn on model execution, the provider of the model key you enter works under your own agreement with it and is not Tierra&apos;s subprocessor. {AI.modelPath}{/* CL-48 (trust page, kept as-is; DEC-439 O-5 names only technical pages): the only provider named, because it is the only verified path (DEC-436 W11 (4)) */}</> : null}</p> },
        { h: "This website", body: <ul className="list-disc space-y-1 pl-6"><li>GitHub, Inc. (GitHub Pages): hosts the website.</li><li>IONOS SE: handles the website's email for info@, support@ and security@assuredforge.com.</li></ul> },
        { h: "Changes", body: <p>We update this page when the list changes and tell design partners by email at least 30 days before a new subprocessor starts, unless a change is needed sooner for security or legal reasons; then we tell them as soon as we can.</p> },
      ]}
    />
  );
}
