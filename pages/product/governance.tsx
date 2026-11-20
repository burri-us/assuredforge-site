import { Layout, Section, Title } from "../../components/Layout";
import { Bullets, ShotSlot, Status } from "../../components/Blocks";

export default function Governance() {
  return (
    <Layout title="Governance and approvals | AssuredForge" description="Release stages, signed approvals by named people in scoped roles, and escalations decided by a person.">
      <Title lead="Gates and approvals are enforced by the platform, not by convention.">Governance and approvals</Title>
      <p className="mt-4"><Status kind="today" /></p>
      <Section title="Recorded stages">
        {/* CL-08 */}
        <p>A Release moves through Feature, Release, Delivery, Integration, UAT, Approval, Push and Deployment in the Portal. A step its rules do not allow is refused, with the reason.</p>
      </Section>
      <Section title="Signed approvals">
        <Bullets items={[
          "Release approvals are signed by named people holding the required role, within its scope.", // CL-05
          "Roles are scoped to a Tenant, Workspace or Portfolio and enforced by the platform; a revoked role is refused at once.", // CL-13
          "Escalations, such as a merge conflict at integration, are decided by a person with a signed decision.", // CL-10
          "Two-step verification for every account; a Tenant can require it for all members.", // CL-12
        ]} />
      </Section>
      <ShotSlot title="The approval record" />
    </Layout>
  );
}
