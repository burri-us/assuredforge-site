import { Layout, Section, Title } from "../components/Layout";
import { ShotSlot, VideoSlot } from "../components/Blocks";
import { AI } from "../components/AiWording";

const SHOTS = [
  "Requirement and Feature with the Digital Thread",
  "A Release with Deliveries and test results",
  "The signed approval",
  "The audit chain check",
  "The evidence export",
  ...(AI.demoShot ? [AI.demoShot] : []), // WR-01: only when AI is available
];

// DRAFT. Slots only: the screenshots and the video are captured from the rehearsal kit after W8, in a demo Tenant with
// invented data. The video will be a self-hosted MP4 (about 3 minutes) in a native video element: no third-party player.
export default function Demo() {
  return (
    <Layout title="Demo | AssuredForge" description="A three-minute walkthrough of governed delivery in AssuredForge, and how to book a walkthrough.">
      <Title lead="Three minutes: a requirement to a signed, recorded release.">Demo</Title>
      <Section title="3-minute video">
        <VideoSlot kind="walkthrough" title="Three-minute walkthrough: a requirement to a signed, recorded release" />
      </Section>
      <Section title="Screenshots">
        <p className="mb-4">The Digital Thread is one connected record from requirement to Release, approval, push and recorded deployment, and back.</p>
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

// No client script: the page has no interactive features (page weight, A11Y-PERF-FINDINGS F-3).
export const config = { unstable_runtimeJS: false };
