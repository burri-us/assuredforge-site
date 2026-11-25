import Link from "next/link";
import { useRouter } from "next/router";
import { Layout, Section, Title } from "../components/Layout";
import { AI } from "../components/AiWording";

export default function Security() {
  const { basePath } = useRouter();   // a plain file, not a page, so next/link doesn't apply
  return (
    <Layout title="Security | AssuredForge" description="How AssuredForge approaches security, and how to report a vulnerability.">
      <Title lead="AssuredForge is built for individuals, teams and organizations that must show how their software was delivered, and we hold ourselves to the same standard.">
        Security
      </Title>
      <Section title="In the platform">
        <ul className="list-disc space-y-2 pl-6">
          <li>Signed approvals and a tamper-evident audit chain (a record of every governed action, whose entries cannot be updated or deleted by any role) you can verify.</li>
          <li>Roles are granted for the whole Tenant (your organization&apos;s account), a Workspace (a separate space inside it, for example for one client) or a Portfolio (a long-lived product line or initiative), and enforced by the platform; a revoked role is refused at once.</li>{/* CL-13 */}
          <li>Two-step verification that an organization can require for all its members.</li>
          <li>Each Tenant&apos;s (organization account&apos;s) data is kept separate from every other Tenant&apos;s.</li>
          <li>Dependency and container image scanning (automatic checks of the third-party software AssuredForge is built with, and of its container images, for known security problems) on every change to the platform.</li>
        </ul>
      </Section>
      <Section title="Reporting a vulnerability">
        <p>
          Email <a href="mailto:security@assuredforge.com">security@assuredforge.com</a> with the steps to reproduce. We
          acknowledge reports and keep you informed. Our{" "}
          <a href={`${basePath}/.well-known/security.txt`}>security.txt</a> (a standard file on a website that tells security researchers how to report a vulnerability) has the details.
        </p>
        <p>
          This address is for vulnerability reports and security incidents only. For questions and support, write to{" "}
          <a href="mailto:support@assuredforge.com">support@assuredforge.com</a>.
        </p>
      </Section>
      <Section title="Data flow of the desktop edition">
        {/* CL-53 (Being validated until W8), replacing the earlier unverified statement (assessor, sweep item 4). */}
        <p>
          In the desktop edition your records stay on your own PC, under your control. {AI.securityFlow}{" "}
          Tierra receives your installation id (a code that identifies your AssuredForge installation; it does not contain your records) when you ask for a license, and prompts or project content only in what you choose to send us: a support bundle (a short set of details you choose to send us when you ask for help), or feedback with files you attach. This is being validated.
        </p>
      </Section>
      <Section title="Trust Center">
        <p>
          Privacy, the AI use policy, subprocessors and responsible disclosure are in the <Link href="/trust/">Trust Center</Link>. The
          legal texts there are interim versions, pending formal legal review.
        </p>
      </Section>
    </Layout>
  );
}

// No client script: the page has no interactive features (page weight, A11Y-PERF-FINDINGS F-3).
export const config = { unstable_runtimeJS: false };
