import Link from "next/link";
import { Layout, Section, Title } from "../components/Layout";
import { AI } from "../components/AiWording";
import { POSITION } from "../components/Positioning";
import { Bullets, ShotSlot, Status } from "../components/Blocks";

// DRAFT COPY. Desktop requirements come from DEC-430 (8) and DEC-432 (4), not from claims register 0.1 (CLAIM-UNVERIFIED
// until a register entry exists). Edition status for cloud and customer-hosted: CL-20, CL-35.
export default function Deployment() {
  return (
    <Layout title="Editions and deployment | AssuredForge" description="The desktop edition is available to design partners for evaluation; system requirements and the install path in outline. Cloud and customer-hosted editions.">
      <Title lead="AssuredForge governs the delivery lifecycle, not the place your software runs. Your deployment step reports each deployment back, and the Release's record shows where and when the approved change was deployed.">
        Editions and deployment
      </Title>

      <Section title="Desktop edition">
        {/* CLAIM-UNVERIFIED: availability for the design-partner evaluation (DEC-430). CL-35: one product, two editions, one shared test suite. */}
        <p><Status kind="partners" /> Available today for the design-partner evaluation. It runs on one workstation, from the same code as the cloud edition.</p>
        <p>{POSITION.desktop} {POSITION.hosted}{/* WR-03 option B (DEC-436), owner to confirm */}</p>
        <p>One Windows user per PC for this release. Your records stay on your machine, under your control.</p>
        {AI.modelPath && <p>{AI.modelPath}{/* CL-48 (proposed) */}</p>}
      </Section>

      <Section title="System requirements">
        {/* CLAIM-UNVERIFIED: DEC-430 (8), DEC-432 (4). */}
        <Bullets items={[
          "Windows 11 Home or Pro, 64-bit.",
          "Virtualisation turned on in the firmware (BIOS or UEFI).",
          "WSL2 (Windows Subsystem for Linux 2).",
          "Docker Desktop, in a supported version.",
          "8 GB RAM minimum; 16 GB recommended.",
          "30 GB free disk space.",
        ]} />
        <p>
          Docker Desktop has its own licence terms, which are yours to accept. Its free use covers organizations under 250 employees and USD 10 million in revenue; larger organizations need a paid Docker plan. Check Docker&apos;s current terms before you install.
        </p>
      </Section>

      <Section title="Install path, in outline">
        {/* CLAIM-UNVERIFIED: outline only; the Quick Start (W5/W10) is the authority once published. */}
        <ol className="list-decimal space-y-2 pl-6">
          <li>Check the requirements above and install WSL2 and Docker Desktop.</li>
          <li>Download the kit from the single link we send you, and check its SHA-256 against the list in the Quick Start.</li>
          <li>Start the launcher. The Quick Start explains the Windows SmartScreen steps; the kit is not code-signed during the evaluation.</li>
          <li>Enter your licence and the one-time setup code, then sign in and complete two-step verification.</li>
          <li>{AI.installStep}</li>
        </ol>
        <ShotSlot title="The launcher and first sign-in" />
      </Section>

      <Section title="Where else AssuredForge runs">
        <ul className="list-disc space-y-2 pl-6">
          {/* CL-20 */}
          <li><strong className="text-ink">Cloud edition</strong> on Microsoft Azure <Status kind="today" /> It runs AssuredForge&apos;s own internal pilot today; a hosted environment for design partners is planned in a US region.</li>
          <li><strong className="text-ink">Customer-hosted</strong> in your own cloud or data center, from the same images <Status kind="planned" /></li>
        </ul>
        <p>Dedicated single-tenant hosting and air-gapped operation are future directions.</p>
        <p>See <Link href="/trust/product-privacy/">where data goes</Link> and the <Link href="/faq/">FAQ</Link>.</p>
      </Section>
    </Layout>
  );
}
