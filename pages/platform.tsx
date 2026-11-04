import { Layout, Section, Title } from "../components/Layout";

export default function Platform() {
  return (
    <Layout title="Platform | AssuredForge" description="How AssuredForge governs software delivery: approvals, traceability and audit, with optional connectors and planned AI assistance.">
      <Title>How AssuredForge governs delivery</Title>
      <Section title="Governance first">
        <p>Release gates, signed approvals and immutable records. Only named people holding the required role, within its scope, can approve.</p>
      </Section>
      <Section title="Human accountability">
        <p>Only people approve: automation and AI never do. Each decision records the narrowest role assignment that authorized it.</p>
      </Section>
      <Section title="Traceability and the Digital Thread">
        <p>Vision, requirements, features, releases, validation and deployment in one connected record, with optional links to the external work items and pull requests where the work happens.</p>
      </Section>
      <Section title="Auditability">
        <p>Every governed action is written to a tamper-evident chain that you can verify and export.</p>
      </Section>
      <Section title="Governed AI (planned)">
        <p>AI assistance is planned as a configurable extension, not a requirement. Its design meters and attributes every model call, does not retain prompts by default and never uses customer data for training.</p>
      </Section>
      <Section title="Sign-in">
        <p>Local accounts with two-step verification that an organisation can require for all its members. Sign-in with Microsoft Entra ID for an installation's own directory.</p>
      </Section>
      <Section title="Works with your tools, optionally">
        <p>AssuredForge is the system of governance and is fully functional without any external work-item system. Optional connectors for Jira, Confluence, Bitbucket and Azure DevOps are available; GitHub and GitLab are planned, and PTC Windchill is planned for manufacturing.</p>
      </Section>
    </Layout>
  );
}
