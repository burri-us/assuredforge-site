import { Layout, Section, Title } from "../components/Layout";

export default function Platform() {
  return (
    <Layout title="Platform | AssuredForge" description="How AssuredForge governs software delivery: approvals, traceability, audit and governed AI.">
      <Title>How AssuredForge governs delivery</Title>
      <Section title="Governance first">
        <p>Release gates, signed approvals and immutable records. Only named people holding the required role, within its scope, can approve.</p>
      </Section>
      <Section title="Human accountability">
        <p>AI never approves. Each decision records the narrowest role assignment that authorized it.</p>
      </Section>
      <Section title="Traceability and the Digital Thread">
        <p>Vision, requirements, features, releases, validation and deployment in one connected record, linked to the external work items and pull requests where the work happens.</p>
      </Section>
      <Section title="Auditability">
        <p>Every governed action is written to a tamper-evident chain that you can verify and export.</p>
      </Section>
      <Section title="Governed AI">
        <p>Every model call is metered and attributable. Prompts are not retained by default. Customer data is never used for training.</p>
      </Section>
      <Section title="Enterprise sign-in">
        <p>Sign in with Microsoft Entra ID, under your own directory and multi-factor authentication policies.</p>
      </Section>
      <Section title="Works with your tools">
        <p>Connectors for Jira, Confluence, Bitbucket and Azure DevOps. GitHub and GitLab are planned, and PTC Windchill is planned for manufacturing.</p>
      </Section>
    </Layout>
  );
}
