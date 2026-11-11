import { Layout, Section, Title } from "../components/Layout";

export default function Deployment() {
  return (
    <Layout title="Deployment | AssuredForge" description="AssuredForge governs the delivery lifecycle, not where your software runs, and comes as a cloud edition and a desktop edition.">
      <Title lead="AssuredForge governs the delivery lifecycle, not the place your software runs. Your deployment step reports each deployment back, and the Release's record shows where and when the approved change was deployed.">
        Run it where you need it
      </Title>
      <Section title="Where AssuredForge itself runs">
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-ink">Cloud edition</strong> on Microsoft Azure. It runs AssuredForge&apos;s own internal pilot today; a hosted environment for design partners is planned.</li>
          <li><strong className="text-ink">Desktop edition</strong> on a single workstation, built and tested from the same code as the cloud edition.</li>
          <li><strong className="text-ink">Customer-hosted</strong> in your own cloud or data center, from the same images (planned).</li>
        </ul>
        <p>Dedicated single-tenant hosting and air-gapped operation are future directions.</p>
      </Section>
    </Layout>
  );
}
