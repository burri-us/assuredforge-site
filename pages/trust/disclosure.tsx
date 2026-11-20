import { useRouter } from "next/router";
import { Layout, Section, Title } from "../../components/Layout";

// Responsible disclosure: contact per CL-29 (security@ for vulnerability reports and incidents only). Not a legal text, so no banner.
export default function Disclosure() {
  const { basePath } = useRouter();
  return (
    <Layout title="Responsible disclosure | AssuredForge" description="How to report a vulnerability in AssuredForge.">
      <Title lead="If you believe you found a vulnerability, tell us before you tell others.">Responsible disclosure</Title>
      <Section title="How to report">
        <p>Email <a href="mailto:security@assuredforge.com">security@assuredforge.com</a> with the steps to reproduce. This address is for vulnerability reports and security incidents only; for support write to <a href="mailto:support@assuredforge.com">support@assuredforge.com</a>.</p>
        <p>Details: <a href={`${basePath}/.well-known/security.txt`}>security.txt</a>.</p>
      </Section>
      <Section title="What we ask">
        <ul className="list-disc space-y-1 pl-6">
          <li>Give us reasonable time to fix the issue before you publish it.</li>
          <li>Do not access, change or delete data that is not yours.</li>
          <li>Do not run denial-of-service or social-engineering tests.</li>
        </ul>
        <p>We acknowledge reports and keep you informed. We do not offer a bounty.</p>
      </Section>
    </Layout>
  );
}
