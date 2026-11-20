import { LegalPage } from "../../components/Blocks";

// DRAFT — COUNSEL REVIEW. Providers are described by capability (AD-010): no vendor or model names. The review (Sec. 5) names
// two example providers; the owner decides whether to name them. CLAIM-UNVERIFIED (no register entry).
export default function Subprocessors() {
  return (
    <LegalPage
      title="Subprocessors and model providers"
      description="Who may process data when you use the AssuredForge website and the desktop edition."
      intro="A subprocessor is a service that processes personal data on our behalf."
      sections={[
        { h: "Desktop edition", body: <p>Tierra operates no subprocessors for the desktop edition: your records stay on your machine. Model providers are chosen by you, work under your own agreement with them, and are not Tierra&apos;s subprocessors. [Owner: decide whether to list example providers by name.]</p> },
        { h: "This website", body: <ul className="list-disc space-y-1 pl-6"><li>GitHub, Inc. (GitHub Pages): hosts the website.</li><li>[EMAIL PROVIDER: owner to confirm]: handles email sent to our addresses.</li></ul> },
        { h: "Changes", body: <p>We update this page when the list changes and tell design partners of a change before it takes effect. [Counsel to set the notice period.]</p> },
      ]}
    />
  );
}
