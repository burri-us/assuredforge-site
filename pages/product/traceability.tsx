import { Layout, Section, Title } from "../../components/Layout";
import { Bullets, ShotSlot, Status } from "../../components/Blocks";

export default function Traceability() {
  return (
    <Layout title="Traceability | AssuredForge" description="One connected record from requirement to Release, approval, push and recorded deployment, and back.">
      <Title lead="Every requirement, approval, release and deployment is traceable and attributable to a named person.">Traceability</Title>
      <p className="mt-4"><Status kind="today" /></p>
      <Section title="The Digital Thread">
        {/* CL-03 */}
        <p>The Digital Thread is one connected record from requirement to Release, approval, push and recorded deployment, and back. Visions (business initiatives: the what and why), Requirements (statements of business need that must be satisfied and verified), Features, Releases (deployable packages of one or more Features), their Deliveries (the commits that implement them), user acceptance test (UAT) results, approvals, pushes and deployments are one connected record you can follow in either direction.</p>
      </Section>
      <Section title="Deployments are checked against what was approved">
        <Bullets items={[
          "A deployment is recorded against the approved Release; a deployment whose content differs from what was approved is refused.", // CL-11
          "Integration runs in an isolated suite runner, and the integration's tree is what the approval and the deployment are checked against. (Integration combines the delivered changes; the suite runner is a disposable place used only for that test run; the tree is the combined code that was tested.)", // CL-36 verbatim, plain explanation alongside (assessor, sweep item 6)
          "Records cannot be updated or deleted by any role: a change is a new version.", // CL-34
        ]} />
      </Section>
      <ShotSlot title="The Digital Thread for one Release" />
    </Layout>
  );
}

// No client script: the page has no interactive features (page weight, A11Y-PERF-FINDINGS F-3).
export const config = { unstable_runtimeJS: false };
