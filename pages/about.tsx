import { Layout, Section, Title } from "../components/Layout";

export default function About() {
  return (
    <Layout title="About | AssuredForge" description="AssuredForge is developed and operated by Tierra LLC, a Michigan-based software company focused on software delivery governance.">
      <Title>About</Title>
      <Section title="Who we are">
        {/* DEC-271 D-10 company identity, verbatim. */}
        <p>
          AssuredForge is developed and operated by Tierra LLC, a Michigan-based software company focused on software
          delivery governance, traceability and audit-ready release management.
        </p>
      </Section>
      <Section title="Contact">
        <ul className="space-y-1">
          <li>General: <a href="mailto:info@assuredforge.com">info@assuredforge.com</a></li>
          <li>Support: <a href="mailto:support@assuredforge.com">support@assuredforge.com</a></li>
          <li>Security reports: <a href="mailto:security@assuredforge.com">security@assuredforge.com</a></li>
          <li>Billing: <a href="mailto:billing@assuredforge.com">billing@assuredforge.com</a></li>
        </ul>
      </Section>
    </Layout>
  );
}
