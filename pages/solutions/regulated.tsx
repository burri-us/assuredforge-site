import Link from "next/link";
import { Layout, Section, Title } from "../../components/Layout";
import { Bullets } from "../../components/Blocks";
import { POSITION } from "../../components/Positioning";

export default function Regulated() {
  return (
    <Layout title="Regulated and quality-driven teams | AssuredForge" description="For engineering leads and quality and compliance teams who must show who approved what, and why.">
      <Title lead="For teams that must show what was delivered, who approved it and how it was validated.">Regulated and quality-driven teams</Title>
      <p className="mt-4 max-w-3xl text-ink-muted">{POSITION.hosted} {POSITION.hostedWho}</p>
      <Section title="Engineering leads">
        {/* CL-08, CL-30 */}
        <Bullets items={["A governed release path from Feature to recorded Deployment.", "Each release passes the readiness suite on the desktop and Azure editions before it reaches the pilot."]} />
      </Section>
      <Section title="Quality and compliance">
        {/* CL-05, CL-06, CL-07 */}
        <Bullets items={["Release approvals signed by named people in scoped roles.", "A tamper-evident audit chain you can verify, and a Tenant export verified offline."]} />
      </Section>
      <p className="mt-6 text-sm text-ink-muted">No certification (for example SOC 2 or ISO 27001) is claimed.</p>
      <p className="mt-4"><Link href="/manufacturing/">Manufacturing</Link> · <Link href="/design-partners/">Design partners</Link></p>
    </Layout>
  );
}
