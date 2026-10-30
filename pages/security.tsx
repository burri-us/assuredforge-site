import { useRouter } from "next/router";
import { Layout, Section, Title } from "../components/Layout";

export default function Security() {
  const { basePath } = useRouter();   // a plain file, not a page, so next/link doesn't apply
  return (
    <Layout title="Security | AssuredForge" description="How AssuredForge approaches security, and how to report a vulnerability.">
      <Title lead="AssuredForge is built for organisations that must prove how their software was delivered, and we hold ourselves to the same standard.">
        Security
      </Title>
      <Section title="In the platform">
        <ul className="list-disc space-y-2 pl-6">
          <li>Signed approvals and a tamper-evident audit chain.</li>
          <li>Scoped, role-based authorization enforced by the platform.</li>
          <li>Dependency and container image scanning.</li>
        </ul>
      </Section>
      <Section title="Reporting a vulnerability">
        <p>
          Email <a href="mailto:security@assuredforge.com">security@assuredforge.com</a> with the steps to reproduce. We
          acknowledge reports and keep you informed. Our{" "}
          <a href={`${basePath}/.well-known/security.txt`}>security.txt</a> has the details.
        </p>
      </Section>
      <Section title="Trust Center">
        <p>A Trust Center with our privacy, subprocessor and data-handling commitments will follow.</p>
      </Section>
    </Layout>
  );
}
