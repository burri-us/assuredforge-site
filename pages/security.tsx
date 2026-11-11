import { useRouter } from "next/router";
import { Layout, Section, Title } from "../components/Layout";

export default function Security() {
  const { basePath } = useRouter();   // a plain file, not a page, so next/link doesn't apply
  return (
    <Layout title="Security | AssuredForge" description="How AssuredForge approaches security, and how to report a vulnerability.">
      <Title lead="AssuredForge is built for organizations that must prove how their software was delivered, and we hold ourselves to the same standard.">
        Security
      </Title>
      <Section title="In the platform">
        <ul className="list-disc space-y-2 pl-6">
          <li>Signed approvals and a tamper-evident audit chain you can verify.</li>
          <li>Scoped, role-based authorization enforced by the platform.</li>
          <li>Two-step verification that an organization can require for all its members.</li>
          <li>Each Tenant&apos;s data is kept separate from every other Tenant&apos;s.</li>
          <li>Dependency and container image scanning on every change to the platform.</li>
        </ul>
      </Section>
      <Section title="Reporting a vulnerability">
        <p>
          Email <a href="mailto:security@assuredforge.com">security@assuredforge.com</a> with the steps to reproduce. We
          acknowledge reports and keep you informed. Our{" "}
          <a href={`${basePath}/.well-known/security.txt`}>security.txt</a> has the details.
        </p>
        <p>
          This address is for vulnerability reports and security incidents only. For questions and support, write to{" "}
          <a href="mailto:support@assuredforge.com">support@assuredforge.com</a>.
        </p>
      </Section>
      <Section title="Trust Center (planned)">
        <p>A Trust Center with our privacy, subprocessor and data-handling commitments is planned.</p>
      </Section>
    </Layout>
  );
}
