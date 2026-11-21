import Link from "next/link";
import { Layout, Section, Title } from "../../components/Layout";
import { Bullets, Status } from "../../components/Blocks";
import { AI } from "../../components/AiWording";
import { POSITION } from "../../components/Positioning";
import { ramWording } from "../../components/Measured";

// Wording is quoted from the claims register: CL-51, CL-52, CL-54, CL-55.
// CL-52 age line: "You must be at least 18", matching the interim design-partner agreement §2 (DEC-462); recorded in
// COUNSEL-LIST.md. CL-54 RAM: filled from the W8 measurement in components/Measured.tsx; until then the marker
// "[RAM: CONFIRM AT W8]" shows and blocks a publish build.
export default function Individuals() {
  return (
    <Layout title="Individuals and small teams | AssuredForge" description="The desktop edition for individuals and small teams, available to design partners.">
      <Title lead={POSITION.desktop}>Individuals and small teams</Title>
      <p className="mt-4"><Status kind="partners" /> The desktop edition is available to design partners.{/* CL-51 */}</p>
      <p className="mt-4 max-w-3xl text-muted">{POSITION.hosted}{/* CL-51 */}</p>
      <Section title="Who the program is for">
        {/* CL-52 (age line as in the interim agreement §2, DEC-462) */}
        <p className="max-w-[70ch]">
          The Founding Design Partner Program has a track for individuals and small teams on the desktop edition. You must be at least 18, use a Windows 11 Home or Pro PC that meets the system requirements, and set up and use the evaluation yourself or with your small team. {AI.ownKeyBilling ? "You use your own model key; your provider bills you for its usage. " : ""}You commit to using it on your own PC during the six-month program, sharing feedback and reporting problems in short working sessions, and sending a support bundle (a short set of details you choose to send us when you ask for help) only when you choose to.
        </p>
      </Section>
      <Section title="System requirements">
        {/* CL-54 (RAM from the W8 measurement, components/Measured.tsx; DEC-447: 23H2) */}
        <p className="max-w-[70ch]">
          The desktop edition runs on a Windows 11 version 23H2 or later (Home or Pro, 64-bit) PC with virtualization turned on (in the firmware, BIOS or UEFI), WSL 2 (Windows Subsystem for Linux 2), Docker Desktop and about 30 GB of free disk, with {ramWording()}. One Windows user per PC in this release. Windows 10 is not supported: it is out of Microsoft support, and Docker Desktop supports only Windows versions within Microsoft&apos;s servicing timeline. The free Windows 11 upgrade is named where the PC qualifies.
        </p>
      </Section>
      {AI.available && (
        <Section title="Model usage">
          {/* CL-55; shown only with the AI switch on (assessor, sweep item 11) */}
          <p className="max-w-[70ch]">Model usage is billed to you by your own provider; Tierra does not resell, bill or mark up model usage.</p>
        </Section>
      )}
      <Section title="Cost">
        <p className="max-w-[70ch]">Free during the program. Founding partners get founding pricing, at least 30 days&apos; notice before any fee, and never an automatic charge.</p>
      </Section>
      <p className="mt-6"><Link href="/deployment/">Editions and deployment</Link> · <Link href="/design-partners/">Design partners</Link> · <Link href="/faq/">FAQ</Link></p>
    </Layout>
  );
}

// No client script: the page has no interactive features (page weight, A11Y-PERF-FINDINGS F-3).
export const config = { unstable_runtimeJS: false };
