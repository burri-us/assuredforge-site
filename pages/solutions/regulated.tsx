import Link from "next/link";
import { Layout, Section, Title } from "../../components/Layout";
import { Bullets } from "../../components/Blocks";
import { POSITION } from "../../components/Positioning";

export default function Regulated() {
  return (
    <Layout title="Regulated and quality-driven teams | AssuredForge" description="For engineering leads and quality and compliance teams who must show who approved what, and why.">
      <p className="mb-3"><span className="inline-block rounded-sm border border-rule px-2 py-0.5 text-label uppercase tracking-wide text-ink">Hosted edition (planned)</span></p>
      <Title lead="For teams that must show what was delivered, who approved it and how it was validated.">Regulated and quality-driven teams</Title>
      <p className="mt-4 max-w-3xl text-muted">{POSITION.hosted} {POSITION.hostedWho}</p>
      <p className="mt-2 max-w-3xl text-muted">Regulated organizations can join the design-partner waitlist for the planned hosted edition. It is not a current offer.</p>
      <Section title="Engineering leads">
        {/* CL-08, CL-30 */}
        <Bullets items={["A governed release path from a Feature (an individual functional unit that is built, tested and delivered) to its recorded deployment.", "Each release passes the readiness suite (one shared test suite) on the desktop edition and on the installation that runs our own internal pilot, before it reaches that pilot."]} />{/* CL-30 reworded for the owner's two edition names (sweep item 9); register owner to align CL-30 */}
      </Section>
      <Section title="Quality and compliance">
        {/* CL-05, CL-06, CL-07 */}
        <Bullets items={["Release approvals signed by named people holding the required role.", "A tamper-evident audit chain you can verify, and an export of your organization's records verified offline."]} />
      </Section>
      <p className="mt-6 text-sm text-muted">No certification (for example SOC 2 or ISO 27001) is claimed.</p>
      <p className="mt-4"><Link href="/manufacturing/">Manufacturing (planned)</Link> · <Link href="/design-partners/">Design partners</Link></p>
    </Layout>
  );
}
