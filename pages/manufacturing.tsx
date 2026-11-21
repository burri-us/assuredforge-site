import Link from "next/link";
import { Layout, Section, Title } from "../components/Layout";
import { AI } from "../components/AiWording";

export default function Manufacturing() {
  return (
    <Layout title="AssuredForge for Manufacturing" description="Governed software delivery for manufacturers building internal software under quality-system pressure.">
      <p className="mb-3"><span className="inline-block rounded border border-rule px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-ink">Hosted edition (planned)</span></p>
      <Title lead="For manufacturers, the planned hosted edition is for regulated organizations. Manufacturers building internal software under quality-system pressure, where you must show what was delivered, who approved it and how it was validated.">
        AssuredForge for Manufacturing
      </Title>
      <Section title="What the platform does today">
        {/* WR-03 option B (DEC-436): manufacturing is the first regulated sector for the planned hosted edition. */}
        <ul className="list-disc space-y-2 pl-6">
          <li>Requirements to deployment traced in one record: what was asked for, which code delivered it, how it was accepted and where it was deployed.</li>
          <li>Approvals by named, accountable people with signed decisions, and an audit chain you can verify and export.</li>
        </ul>
      </Section>
      <Section title="Planned with design partners">
        <ul className="list-disc space-y-2 pl-6">
          <li>Connection to engineering context through a PTC Windchill integration.</li>
          {!AI.available && <li>AI assistance under the same governance: it may recommend and prepare, and people decide.</li>}{/* WS-01 switch */}
        </ul>
      </Section>
      <p className="mt-4 max-w-3xl text-ink-muted">The hosted edition for manufacturers is planned. Manufacturers can join the design-partner waitlist; it is not a current offer. See <Link href="/design-partners/">Design partners</Link>.</p>
      <Section title="One platform, Editions by industry">
        <p>AssuredForge is one platform, with Editions for industries planned. Manufacturing comes first and is being shaped with design partners. Other industries follow once the manufacturing Edition is proven.</p>
      </Section>
    </Layout>
  );
}
