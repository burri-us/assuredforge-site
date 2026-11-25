import { Layout, Section, Title } from "../components/Layout";

// CL-29 / DEC-271 D-6.
export default function Contact() {
  return (
    <Layout title="Contact | AssuredForge" description="How to reach AssuredForge: general, support and security contacts.">
      <Title lead="We reply personally.">Contact</Title>
      <Section title="Addresses">
        <ul className="space-y-1">
          <li>General and design partners: <a href="mailto:info@assuredforge.com">info@assuredforge.com</a></li>
          <li>Support: <a href="mailto:support@assuredforge.com">support@assuredforge.com</a></li>
          <li>Vulnerability reports and security incidents only: <a href="mailto:security@assuredforge.com">security@assuredforge.com</a></li>
        </ul>
      </Section>
    </Layout>
  );
}

// No client script: the page has no interactive features (page weight, A11Y-PERF-FINDINGS F-3).
export const config = { unstable_runtimeJS: false };
