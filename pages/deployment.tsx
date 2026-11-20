import Link from "next/link";
import { Layout, Section, Title } from "../components/Layout";
import { AI } from "../components/AiWording";
import { POSITION } from "../components/Positioning";
import { Bullets, ShotSlot, Status } from "../components/Blocks";

// DRAFT COPY. Desktop requirements come from DEC-430 (8) and DEC-432 (4), claims register CL-54 (DEC-439 P-4; RAM from W8). Edition status: CL-20 (desktop-only evaluation, DEC-439 P-6), CL-35.
export default function Deployment() {
  return (
    <Layout title="Editions and deployment | AssuredForge" description="The desktop edition is available to design partners for evaluation; system requirements and the install path in outline. Cloud and customer-hosted editions.">
      <Title lead="AssuredForge governs the delivery lifecycle, not the place your software runs. Your deployment step reports each deployment back, and the Release's record shows where and when the approved change was deployed.">
        Editions and deployment
      </Title>

      <Section title="Desktop edition">
        {/* CLAIM-UNVERIFIED: availability for the design-partner evaluation (DEC-430). CL-35: one product, two editions, one shared test suite. */}
        <p><Status kind="partners" /> Available today for the design-partner evaluation. It runs on one workstation, from the same code as the cloud edition.</p>
        <p>{POSITION.desktop} {POSITION.hosted}{/* CL-51 */}</p>
        <p>One Windows user per PC for this release. Your records stay on your machine, under your control.</p>
        {AI.modelPath && <p>{AI.modelPath}{/* CL-48; DEC-439 O-5: Editions and deployment is a technical page, so the provider may be named here */}</p>}
      </Section>

      <Section title="System requirements">
        {/* CL-54 (RAM stays a W8 marker, S-24). */}
        <Bullets items={[
          "Windows 11 Home or Pro, 64-bit.",
          "Virtualization turned on in the firmware (BIOS or UEFI).",
          "WSL2 (Windows Subsystem for Linux 2).",
          "Docker Desktop, in a supported version.",
          "8 GB RAM minimum; 16 GB recommended.",
          "30 GB free disk space.",
        ]} />
        <p>Windows 10 is not supported: Microsoft no longer supports it, and Docker Desktop supports only Windows versions that Microsoft still supports. If your PC qualifies, the upgrade to Windows 11 is free (Settings &gt; Windows Update).{/* CL-54 (DEC-444) */}</p>
        <p>Windows 11 now; a Mac version is planned.{/* CL-56 (DEC-444): planned, no date */}</p>
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
          <li><strong className="text-ink">Cloud edition</strong> on Microsoft Azure <Status kind="today" /> It runs AssuredForge&apos;s own internal pilot today. A hosted edition is planned; the design-partner evaluation is desktop only.</li>
          <li><strong className="text-ink">Customer-hosted</strong> in your own cloud or data center, from the same images <Status kind="planned" /></li>
        </ul>
        <p>Dedicated single-tenant hosting and air-gapped operation are future directions.</p>
        <p>See <Link href="/trust/product-privacy/">where data goes</Link> and the <Link href="/faq/">FAQ</Link>.</p>
      </Section>
    </Layout>
  );
}
