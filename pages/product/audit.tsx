import { Layout, Section, Title } from "../../components/Layout";
import { Bullets, ShotSlot, Status } from "../../components/Blocks";

export default function Audit() {
  return (
    <Layout title="Audit and evidence | AssuredForge" description="A tamper-evident audit chain you can verify, and a Tenant export that is verified offline.">
      <Title lead="Prove how your software was delivered, to an auditor, without reconstructing it.">Audit and evidence</Title>
      <p className="mt-4"><Status kind="today" /></p>
      <Section title="What you can show">
        <Bullets items={[
          "Every governed action is written to a tamper-evident audit chain that you can verify in the Portal.", // CL-06
          "A Tenant can be exported, and the export is verified offline.", // CL-07
          "Records cannot be updated or deleted by any role; the audit entries are append-only.", // CL-34
          "Tenant isolation is enforced by the database.", // CL-33
        ]} />
      </Section>
      <p className="text-sm text-ink-muted">No certification or external audit is claimed.</p>
      <ShotSlot title="The audit chain check and the export" />
    </Layout>
  );
}
