import Link from "next/link";
import { Layout, Section, Title } from "../../components/Layout";
import { AI } from "../../components/AiWording";
import { Bullets, ShotSlot, Status } from "../../components/Blocks";

// DRAFT COPY. WS-01: the lead and the section below follow the switch in components/AiWording.tsx.
export default function AiDelivery() {
  return (
    <Layout title="AI-assisted delivery | AssuredForge" description="How AI assistance fits inside AssuredForge's governance: AI prepares and recommends, independent checks test, and only named people approve.">
      <Title lead={AI.productLead}>AI-assisted delivery</Title>
      <p className="mt-4"><Status kind={AI.available ? "partners" : "planned"} /></p>

      <Section title="The rule that does not change">
        {/* CL-04: current, enforced. */}
        <p>Only people approve. Automation and AI may recommend and prepare; they never approve, accept risk or authorize a release.</p>
      </Section>

      {AI.available ? (
        <>
          <Section title="What the pipeline does">
            {/* CLAIM-UNVERIFIED: this whole branch (agent runs, independent tests, model sources). Needs the owner's WS-01 decision. */}
            <Bullets
              items={[
                "Agent runs plan, write and test changes for a Feature, inside the same gates as human work.",
                "Independent tests check the result; the author of a change does not mark its own work as passed.",
                "You choose the model source: your own API key, or a subscription or local model where configured.",
                "You set a run budget and a monthly limit. An administrator turns model execution on or off in Setup as a signed decision.",
                "A person reviews, and a named person approves, before anything is released.",
              ]}
            />
          </Section>
          <Section title="See it">
            <ShotSlot title="An agent run with its independent test results" />
            <p><Link href="/demo/">Watch the 3-minute demo</Link></p>
          </Section>
        </>
      ) : (
        <Section title="Planned">
          {/* CL-19 */}
          <p>AI assistance is planned as an optional extension under the same governance. It is not part of the platform available today.</p>
        </Section>
      )}

      <Section title="Your data and your model account">
        {/* CLAIM-UNVERIFIED: no register entry; see the AI use policy draft. */}
        <p>
          Read the <Link href="/trust/ai-use-policy/">AI use policy</Link> (draft) and the{" "}
          <Link href="/trust/subprocessors/">subprocessors and model providers</Link> page for where data goes.
        </p>
      </Section>
    </Layout>
  );
}
