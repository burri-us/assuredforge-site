import Link from "next/link";
import { Layout, Section, Title } from "../../components/Layout";
import { Bullets, Status } from "../../components/Blocks";
import { AI } from "../../components/AiWording";
import { POSITION } from "../../components/Positioning";

// Wording is quoted from the claims register: CL-51, CL-52, CL-54, CL-55.
// Markers kept on purpose (they show as placeholders and block a publish build until W8 or counsel):
// CL-52 "[counsel review: age line]" and CL-54 "[RAM: CONFIRM AT W8]".
export default function Individuals() {
  return (
    <Layout title="Individuals and small teams | AssuredForge" description="The desktop edition for individuals and small teams, available to design partners.">
      <Title lead={POSITION.desktop}>Individuals and small teams</Title>
      <p className="mt-4"><Status kind="partners" /> The desktop edition is available to design partners.{/* CL-51 */}</p>
      <p className="mt-4 max-w-3xl text-muted">{POSITION.hosted}{/* CL-51 */}</p>
      <Section title="Who the program is for">
        {/* CL-52 (counsel marker on the age line) */}
        <p className="max-w-[70ch]">
          The Founding Design Partner Program has a track for individuals and small teams on the desktop edition. You are 18 or older [counsel review: age line], use a Windows 11 Home or Pro PC that meets the system requirements, and set up and use the evaluation yourself or with your small team. {AI.ownKeyBilling ? "You use your own model key; your provider bills you for its usage. " : ""}You commit to using it on your own PC during the six-month program, sharing feedback and reporting problems in short working sessions, and sending a support bundle only when you choose to.
        </p>
      </Section>
      <Section title="System requirements">
        {/* CL-54 (RAM marker until W8; DEC-447: 23H2) */}
        <p className="max-w-[70ch]">
          The desktop edition runs on a Windows 11 version 23H2 or later (Home or Pro, 64-bit) PC with virtualization turned on, WSL 2, Docker Desktop and about 30 GB of free disk, with [RAM: CONFIRM AT W8]. One Windows user per PC in this release. Windows 10 is not supported: it is out of Microsoft support, and Docker Desktop supports only Windows versions within Microsoft&apos;s servicing timeline. The free Windows 11 upgrade is named where the PC qualifies.
        </p>
      </Section>
      <Section title="Model usage">
        {/* CL-55 */}
        <p className="max-w-[70ch]">Model usage is billed to you by your own provider; Tierra does not resell, bill or mark up model usage.</p>
        <p className="max-w-[70ch]">Free during the program. Founding partners get founding pricing, at least 30 days&apos; notice before any fee, and never an automatic charge.</p>
      </Section>
      <p className="mt-6"><Link href="/deployment/">Editions and deployment</Link> · <Link href="/design-partners/">Design partners</Link> · <Link href="/faq/">FAQ</Link></p>
    </Layout>
  );
}
