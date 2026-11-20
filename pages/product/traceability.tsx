import { Layout, Section, Title } from "../../components/Layout";
import { Bullets, ShotSlot, Status } from "../../components/Blocks";

export default function Traceability() {
  return (
    <Layout title="Traceability | AssuredForge" description="One connected record from requirement to Release, approval, push and recorded deployment, and back.">
      <Title lead="Every requirement, approval, release and deployment is traceable and attributable to a named person.">Traceability</Title>
      <p className="mt-4"><Status kind="today" /></p>
      <Section title="The Digital Thread">
        {/* CL-03 */}
        <p>Visions, Requirements, Features, Releases, their Deliveries, UAT results, approvals, pushes and deployments are one connected record you can follow in either direction.</p>
      </Section>
      <Section title="Deployments are checked against what was approved">
        <Bullets items={[
          "A deployment is recorded against the approved Release; a deployment whose content differs from what was approved is refused.", // CL-11
          "Integration runs in an isolated suite runner, and the integration's tree is what the approval and the deployment are checked against.", // CL-36
          "Records are append-only: a change is a new version.", // CL-34
        ]} />
      </Section>
      <ShotSlot title="The Digital Thread for one Release" />
    </Layout>
  );
}
