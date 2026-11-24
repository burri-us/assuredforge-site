import Link from "next/link";
import { Layout, Section, Title } from "../../components/Layout";
import { AI } from "../../components/AiWording";
import { Bullets, ShotSlot, Status } from "../../components/Blocks";

// DRAFT COPY. WS-01: the lead and the section below follow the switch in components/AiWording.tsx.
export default function AiDelivery() {
  return (
    <Layout title="Agent-prepared delivery | AssuredForge" description="How agents fit inside AssuredForge's governance: agents prepare and recommend, independent checks test, and only named people approve.">
      <Title lead={AI.productLead}>Agent-prepared delivery</Title>
      <p className="mt-4"><Status kind="validated" />{/* CL-46: Being validated */}</p>

      <Section title="The rule that does not change">
        {/* CL-04: current, enforced. */}
        <p>Only people approve. Automation and agents may recommend and prepare; they never approve, accept risk or authorize a release.</p>
      </Section>

      {AI.available ? (
        <>
          <Section title="What the pipeline does">
            {/* CL-19, CL-40R, CL-47, CL-49, CL-50 (Being validated). The switch itself needs the owner's WS-01 decision. */}
            <Bullets items={AI.productPoints} />
            {/* Naming scope (CL-48): no provider named on this narrative page. */}
            <p>Which model keys work is answered in the <Link href="/faq/">FAQ</Link>.</p>
          </Section>
          <Section title="See it">
            <ShotSlot title="An agent run with its test results" />
            <p><Link href="/demo/">Watch the 3-minute demo</Link></p>
          </Section>
        </>
      ) : (
        <Section title="Being validated">
          {/* CL-19, CL-46 (hold wording, DEC-439 O-4) */}
          <p>Agent-assisted planning and delivery is being validated for the desktop design-partner evaluation.</p>
        </Section>
      )}

      {AI.available ? (
        <Section title="Your data and your model key">
          {/* CL-47; see the AI use policy (interim). */}
          <p>
            Read the <Link href="/trust/ai-use-policy/">AI use policy</Link> (interim) and the{" "}
            <Link href="/trust/subprocessors/">subprocessors and model providers</Link> page for where data goes.
          </p>
        </Section>
      ) : (
        <Section title="The rules that will apply">
          <p>The <Link href="/trust/ai-use-policy/">AI use policy</Link> (interim) states the rules for when agent assistance becomes available.</p>
        </Section>
      )}
    </Layout>
  );
}

// No client script: the page has no interactive features (page weight, A11Y-PERF-FINDINGS F-3).
export const config = { unstable_runtimeJS: false };
