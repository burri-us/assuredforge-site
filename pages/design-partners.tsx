import { Layout, Section, Title } from "../components/Layout";

export default function DesignPartners() {
  return (
    <Layout title="Design partners | AssuredForge" description="Shape AssuredForge with us: the design partner program for manufacturing organisations.">
      <Title lead="We are looking for a small number of manufacturing organisations to work with as design partners.">
        Shape AssuredForge with us
      </Title>
      <Section title="What design partners get">
        <p>Early access, direct influence on the roadmap, and delivery support from the team building the platform.</p>
      </Section>
      <Section title="What we look for">
        <ul className="list-disc space-y-2 pl-6">
          <li>Teams building internal software under quality or regulatory pressure.</li>
          <li>Jira, Azure DevOps or similar tools in use.</li>
          <li>Windchill or Creo in the engineering landscape is a plus.</li>
          <li>A sponsor willing to give regular feedback.</li>
        </ul>
      </Section>
      <Section title="How to start">
        <p>
          Email <a href="mailto:sales@assuredforge.com">sales@assuredforge.com</a> with a short description of your team and
          what you deliver. We reply personally. Onboarding begins once our design partner program is ready.
        </p>
      </Section>
    </Layout>
  );
}
