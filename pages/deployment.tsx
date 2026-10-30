import { Layout, Section, Title } from "../components/Layout";

export default function Deployment() {
  return (
    <Layout title="Deployment | AssuredForge" description="AssuredForge governs delivery wherever your software runs, and runs where you need it.">
      <Title lead="AssuredForge governs the delivery lifecycle, not where your product runs: your software can be deployed to any cloud, on-premises or edge target.">
        Run it where you need it
      </Title>
      <Section title="Where AssuredForge itself runs">
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-ink">SaaS</strong> on Microsoft Azure, including dedicated single-tenant SaaS for enterprises (planned).</li>
          <li><strong className="text-ink">Customer-hosted</strong> in your own cloud or data centre, from the same images.</li>
          <li><strong className="text-ink">Desktop</strong> for evaluation and individual work.</li>
        </ul>
        <p>Air-gapped operation is a future direction.</p>
      </Section>
    </Layout>
  );
}
