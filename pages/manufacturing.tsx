import { Layout, Section, Title } from "../components/Layout";

export default function Manufacturing() {
  return (
    <Layout title="AssuredForge for Manufacturing" description="Governed software delivery for manufacturers building internal software under quality-system pressure.">
      <Title lead="For manufacturers building internal software under quality-system pressure, where you must show what was delivered, who approved it and how it was validated.">
        AssuredForge for Manufacturing
      </Title>
      <Section title="What it gives you today">
        <ul className="list-disc space-y-2 pl-6">
          <li>Requirements to deployment traced in one record: what was asked for, which code delivered it, how it was accepted and where it was deployed.</li>
          <li>Approvals by named, accountable people with signed decisions, and an audit chain you can verify and export.</li>
        </ul>
      </Section>
      <Section title="Planned with design partners">
        <ul className="list-disc space-y-2 pl-6">
          <li>Connection to engineering context through a PTC Windchill integration.</li>
          <li>AI assistance under the same governance: it may recommend and prepare, and people decide.</li>
        </ul>
      </Section>
      <Section title="One platform, Editions by industry">
        <p>AssuredForge is one platform, with Editions for industries planned. Manufacturing comes first and is being shaped with design partners. Other industries follow once the manufacturing Edition is proven.</p>
      </Section>
    </Layout>
  );
}
