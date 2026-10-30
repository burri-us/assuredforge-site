import { Layout, Section, Title } from "../components/Layout";

export default function Manufacturing() {
  return (
    <Layout title="AssuredForge for Manufacturing" description="Governed software delivery for manufacturers building internal software under quality-system pressure.">
      <Title lead="For manufacturers building internal software under quality-system pressure, where you must show what was delivered, who approved it and how it was validated.">
        AssuredForge for Manufacturing
      </Title>
      <Section title="What it gives you">
        <ul className="list-disc space-y-2 pl-6">
          <li>Requirements to deployment traced in one record, connected to engineering context (Windchill integration planned with design partners).</li>
          <li>Approvals by named, accountable people, with evidence ready for audits.</li>
          <li>AI assistance under governance: faster delivery without giving up accountability.</li>
        </ul>
      </Section>
      <Section title="One platform, Editions by industry">
        <p>AssuredForge is one platform with Editions for industries. Manufacturing is the first. Other industries follow once the manufacturing Edition is proven with design partners.</p>
      </Section>
    </Layout>
  );
}
