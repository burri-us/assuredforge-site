import { Layout, Section, Title } from "../components/Layout";
import { ShotSlot } from "../components/Blocks";

const SHOTS = [
  "Requirement and Feature with the Digital Thread",
  "A Release with Deliveries and test results",
  "The signed approval",
  "The audit chain check",
  "The evidence export",
  "Model source, run budget and monthly limit (Setup)",
];

// DRAFT. Slots only: the screenshots and the video are captured from the rehearsal kit after W8, in a demo Tenant with
// invented data. The video will be a self-hosted MP4 (about 3 minutes) in a native video element: no third-party player.
export default function Demo() {
  return (
    <Layout title="Demo | AssuredForge" description="A three-minute walkthrough of governed delivery in AssuredForge, and how to book a walkthrough.">
      <Title lead="Three minutes: a requirement to a signed, recorded release.">Demo</Title>
      <Section title="3-minute video">
        <div
          role="img"
          aria-label="Video placeholder: a self-hosted MP4 of about 3 minutes, to be recorded after the W8 rehearsal."
          className="flex aspect-video w-full flex-col items-center justify-center rounded-md border-2 border-dashed border-rule bg-surface-alt p-4 text-center"
        >
          <span className="font-semibold text-ink">Video placeholder</span>
          <span className="mt-1 text-sm text-ink-muted">Self-hosted MP4, about 3 minutes, with captions. Recorded after W8.</span>
        </div>
      </Section>
      <Section title="Screenshots">
        <div className="grid gap-6 md:grid-cols-2">
          {SHOTS.map((s) => <ShotSlot key={s} title={s} />)}
        </div>
      </Section>
      <Section title="Book a walkthrough">
        <p>
          Email <a href="mailto:info@assuredforge.com?subject=Walkthrough%20request">info@assuredforge.com</a> and we will arrange a live walkthrough. We use email rather than a booking widget so this site stays free of cookies and third-party code.
        </p>
      </Section>
    </Layout>
  );
}
