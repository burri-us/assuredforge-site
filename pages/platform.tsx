import Link from "next/link";
import { Layout, Section, Title } from "../components/Layout";
import { Status } from "../components/Blocks";
import { AI } from "../components/AiWording";

// Current State only (DEC-262): what the released platform does today. Anything not released is marked "planned".
export default function Platform() {
  return (
    <Layout title="Platform | AssuredForge" description="How AssuredForge governs software delivery today: signed approvals, a connected record from requirement to deployment, and a verifiable audit chain.">
      <Title>How AssuredForge governs delivery</Title>
      <Section title="Governance first">
        <p>Every Release (a deployable package of one or more Features) moves through recorded stages: Deliveries (the commits that implement them) recorded, the delivered changes combined and tests run, user acceptance test (UAT) result recorded, approved with a signed decision, pushed to the main line (your main code line, the branch your team treats as the current version) and deployment recorded. A step that its rules do not allow is refused, with the reason.</p>
      </Section>
      <Section title="Human accountability">
        <p>Only people approve: automation never does. Only a named person holding the required role, within its scope, can approve, and each approval records the person, the role assignment that authorized it and the reason. Roles are granted for the whole Tenant (your organization's account), a Workspace (a separate space inside it, for example for one client) or a Portfolio (a long-lived product line or initiative).</p>
      </Section>
      <Section title="Traceability and the Digital Thread">
        <p>The Digital Thread is one connected record from requirement to Release, approval, push and recorded deployment, and back: Visions (business initiatives: the what and why), Requirements (statements of business need that must be satisfied and verified), Features, Releases, their Deliveries, UAT results, approvals, pushes and deployments in one connected record.</p>
      </Section>
      <Section title="Audit and evidence">
        <p>Every governed action (an action the platform records because its rules govern it, such as an approval, a sign-off or a decision) is written to a tamper-evident audit chain (a record of every governed action, whose entries cannot be updated or deleted by any role) that you can verify. A Tenant&apos;s records can be exported as a signed export that can be verified offline.</p>
      </Section>
      <Section title="Sign-in">
        <p>Local accounts with two-step verification that an organization can require for all its members. Sign-in with Microsoft Entra ID for an installation&apos;s own directory.</p>
      </Section>
      <Section title="Works with your tools, optionally">
        {/* CL-16, CL-17, CL-18 verbatim (assessor, sweep item 8: one connector status from CL-17) */}
        <p>AssuredForge is fully usable without third-party connectors (integrations to outside systems such as Jira or Azure DevOps) and without an assistant. Optional connectors for Jira, Confluence, Bitbucket and Azure DevOps exist. Connecting a partner&apos;s systems is set up together, by agreement, during the program. GitHub and GitLab are planned; PTC Windchill is planned with design partners. A connector write into an external tool needs a signed human decision.</p>
      </Section>
      <Section title={AI.available ? "AI-assisted delivery" : "AI assistance"}>
        {/* WS-01 switch: components/AiWording.tsx. CL-19, CL-40R, CL-46 (on) / hold wording DEC-439 O-4. CL-46 state: Being validated. */}
        <p><Status kind="validated" /></p>
        <p>{AI.productLead}</p>
        <p>Deeper pages: <Link href="/product/governance/">Governance and approvals</Link>, <Link href="/product/traceability/">Traceability</Link>, <Link href="/product/audit/">Audit and evidence</Link>, <Link href="/product/integrations/">Integrations</Link>, <Link href="/works-with/">Works with</Link>, <Link href="/product/ai-assisted-delivery/">AI-assisted delivery</Link>.</p>
      </Section>
    </Layout>
  );
}
