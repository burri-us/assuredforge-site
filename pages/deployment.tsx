import Link from "next/link";
import { Layout, Section, Title } from "../components/Layout";
import { AI } from "../components/AiWording";
import { POSITION } from "../components/Positioning";
import { Bullets, ShotSlot, Status } from "../components/Blocks";

// DRAFT COPY. Desktop requirements come from DEC-430 (8) and DEC-432 (4), claims register CL-54 (DEC-439 P-4; RAM from W8). Edition status: CL-20 (desktop-only evaluation, DEC-439 P-6), CL-35.
export default function Deployment() {
  return (
    <Layout title="Editions and deployment | AssuredForge" description="The desktop edition is available to design partners for evaluation; system requirements and the install path in outline. The hosted edition is planned.">
      <Title lead="AssuredForge governs the delivery lifecycle (the steps from a requirement to its deployment: delivery, checks, approval, push and recorded deployment), not the place your software runs. Your deployment step reports each deployment back, and the Release's record shows where and when the approved change was deployed.">
        Editions and deployment
      </Title>

      <Section title="Desktop edition">
        {/* CLAIM-UNVERIFIED: availability for the design-partner evaluation (DEC-430). CL-35 (revised, DEC-469). */}
        <p><Status kind="partners" /> Available today for the design-partner evaluation. It runs on one workstation. One product, two editions: the desktop edition and the hosted edition (planned).</p>
        <p>{POSITION.desktop} {POSITION.hosted}{/* CL-51 */}</p>
        <p>One Windows user per PC for this release. Your records stay on your own PC, under your control. AssuredForge connects only to the services you set up: {AI.available ? "the model provider of the key you entered and, if you add them, " : "if you add them, "}your own git remote (the online copy of your code repository that you choose to connect), connectors (integrations to outside systems such as Jira or Azure DevOps) and sign-in provider. Tierra receives your installation id (a code that identifies your AssuredForge installation; it does not contain your records) when you ask for a license, and prompts or project content only in what you choose to send us: a support bundle (a short set of details you choose to send us when you ask for help), or feedback with files you attach.{/* CL-53 (DEC-446; feedback wording DEC-459) */}</p>
        {AI.modelPath && <p>{AI.modelPath}{/* CL-48; DEC-439 O-5: Editions and deployment is a technical page, so the provider may be named here */}</p>}
      </Section>

      <Section title="System requirements">
        {/* CL-54 (RAM stays a W8 marker, S-24). */}
        <Bullets items={[
          "Windows 11 version 23H2 or later (Home or Pro, 64-bit).",
          "Virtualization turned on in the firmware (BIOS or UEFI).",
          "WSL2 (Windows Subsystem for Linux 2).",
          "Docker Desktop, in a supported version: software from Docker, Inc. that runs the parts of AssuredForge on your Windows PC. You install it yourself; its own license terms apply.",
          "8 GB RAM minimum; 16 GB recommended.",
          "30 GB free disk space.",
        ]} />
        <p>Windows 10 is not supported: Microsoft no longer supports it, and Docker Desktop supports only Windows versions that Microsoft still supports. If your PC qualifies, the upgrade to Windows 11 is free (Settings &gt; Windows Update).{/* CL-54 (DEC-444) */}</p>
        <p>Windows 11 now; a Mac version is planned.{/* CL-56 (DEC-444): planned, no date */}</p>
        <p>
          Docker Desktop has its own license terms, which are yours to accept. Its free use covers organizations under 250 employees and USD 10 million in revenue; larger organizations need a paid Docker plan. Check Docker&apos;s current terms before you install.
        </p>
      </Section>

      <Section title="Install path, in outline">
        {/* CLAIM-UNVERIFIED: outline only; the Quick Start (W5/W10) is the authority once published. */}
        <ol className="list-decimal space-y-2 pl-6">
          <li>Check the requirements above and install WSL2 and Docker Desktop.</li>
          <li>Download the kit from the single link we send you, and check its SHA-256 fingerprint against the list in the Quick Start, to confirm that the file you downloaded is exactly the file we published.</li>
          <li>Start the launcher, the program in the kit that checks your PC, installs, starts, updates and stops AssuredForge. Until the kit is code-signed (signed digitally by its publisher), Windows shows its SmartScreen warning, shown before running a program it does not recognize; the Quick Start explains the steps.</li>
          <li>Enter your license and the one-time setup code, then sign in and complete two-step verification.</li>
          <li>{AI.installStep}</li>
        </ol>
        <ShotSlot title="The launcher and first sign-in" />
      </Section>

      <Section title="Where else AssuredForge runs">
        <ul className="list-disc space-y-2 pl-6">
          {/* CL-20 */}
          <li><strong className="text-ink">Hosted edition (planned, on Microsoft Azure)</strong> <Status kind="planned" /> AssuredForge&apos;s own internal pilot runs on Microsoft Azure. A hosted edition is planned; the design-partner evaluation is desktop only. IT checklists, proxies (company network servers that internet traffic must pass through), single sign-on and segregated approvers (where the governance requires it, the person who prepared a change cannot approve it; a different person must) are planned for the hosted edition.</li>{/* CL-20 verbatim; edition name: owner, sweep item 9. Guardrails sentence: DEC-436 (no CL entry), restored unchanged from the folded Regulated page (assessor, 2026-11-21); glossary H explanations (DEC-469) */}
        </ul>
        <p>Dedicated single-tenant hosting (an installation run for one organization only) and air-gapped operation (running with no connection to the internet) are future directions, not offers.</p>
        <p>See <Link href="/trust/product-privacy/">where data goes</Link> and the <Link href="/faq/">FAQ</Link>.</p>
      </Section>
    </Layout>
  );
}

// No client script: the page has no interactive features (page weight, A11Y-PERF-FINDINGS F-3).
export const config = { unstable_runtimeJS: false };
