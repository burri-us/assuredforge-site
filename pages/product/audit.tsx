import { Layout, Section, Title } from "../../components/Layout";
import { Bullets, ShotSlot, Status } from "../../components/Blocks";

export default function Audit() {
  return (
    <Layout title="Audit and evidence | AssuredForge" description="A tamper-evident audit chain you can verify, and an export of your organization's records that is verified offline.">
      <Title lead="Prove how your software was delivered, to an auditor, without reconstructing it.">Audit and evidence</Title>
      <p className="mt-4"><Status kind="today" /></p>
      <Section title="What you can show">
        <Bullets items={[
          "Every governed action is written to a tamper-evident audit chain that you can verify in the Portal. (The Portal is the AssuredForge web application you sign in to in your browser. The audit chain is a record of every governed action, whose entries cannot be updated or deleted by any role.)", // CL-06 verbatim; explanation: glossary (Audit Chain), CL-34
          "A Tenant (your organization's account) can be exported, and the export is verified offline.", // CL-07
          "Records, including audit entries, cannot be updated or deleted by any role. A change is a new version.", // CL-34
          "Tenant isolation is enforced by the database: each Tenant's data is kept separate from every other Tenant's.", // CL-33; explanation: site text (security)
        ]} />
      </Section>
      <p className="text-sm text-muted">No certification or external audit is claimed.</p>
      <ShotSlot title="The audit chain check and the export" />
    </Layout>
  );
}
