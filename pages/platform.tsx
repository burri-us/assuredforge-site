import Link from "next/link";
import { Layout, Section, Title } from "../components/Layout";
import { AI } from "../components/AiWording";

// Current State only (DEC-262): what the released platform does today. Anything not released is marked "planned".
export default function Platform() {
  return (
    <Layout title="Platform | AssuredForge" description="How AssuredForge governs software delivery today: signed approvals, a connected record from requirement to deployment, and a verifiable audit chain.">
      <Title>How AssuredForge governs delivery</Title>
      <Section title="Governance first">
        <p>Every Release moves through recorded stages: Deliveries recorded, integrated with tests run, UAT result recorded, approved with a signed decision, pushed to the main line and deployment recorded. A step that its rules do not allow is refused, with the reason.</p>
      </Section>
      <Section title="Human accountability">
        <p>Only people approve: automation never does. Only a named person holding the required role, within its scope, can approve, and each approval records the person, the role assignment that authorized it and the reason. Roles are granted for the whole Tenant, a Workspace or a Portfolio.</p>
      </Section>
      <Section title="Traceability and the Digital Thread">
        <p>Visions, Requirements, Features, Releases, their Deliveries (the commits that implement them), UAT results, approvals, pushes and deployments in one connected record.</p>
      </Section>
      <Section title="Auditability">
        <p>Every governed action is written to a tamper-evident audit chain that you can verify. A Tenant&apos;s records can be exported as a signed export that can be verified offline.</p>
      </Section>
      <Section title="Sign-in">
        <p>Local accounts with two-step verification that an organization can require for all its members. Sign-in with Microsoft Entra ID for an installation&apos;s own directory.</p>
      </Section>
      <Section title="Works with your tools, optionally">
        <p>AssuredForge is the system of governance and is fully functional without any external work-item system. Connectors for Jira, Confluence, Bitbucket and Azure DevOps are built and tested against their contracts; first use with live systems is planned with design partners. Every write a connector proposes is decided by a person. GitHub and GitLab connectors are planned, and PTC Windchill is planned for manufacturing.</p>
      </Section>
      <Section title={AI.available ? "AI-assisted delivery" : "AI assistance (planned)"}>
        {/* WS-01 switch: components/AiWording.tsx. CL-19 (hold) / CLAIM-UNVERIFIED (new wording). */}
        <p>{AI.productLead}</p>
        <p>Deeper pages: <Link href="/product/governance/">Governance and approvals</Link>, <Link href="/product/traceability/">Traceability</Link>, <Link href="/product/audit/">Audit and evidence</Link>, <Link href="/product/integrations/">Integrations</Link>, <Link href="/product/ai-assisted-delivery/">AI-assisted delivery</Link>.</p>
      </Section>
    </Layout>
  );
}
