import { Layout, Section, Title } from "../components/Layout";

export default function About() {
  return (
    <Layout title="About | AssuredForge" description="AssuredForge is developed by Tierra LLC.">
      <Title>About</Title>
      <Section title="Who we are">
        <p>AssuredForge is developed by Tierra LLC.</p>
      </Section>
      <Section title="Contact">
        <ul className="space-y-1">
          <li>General: <a href="mailto:info@assuredforge.com">info@assuredforge.com</a></li>
          <li>Sales: <a href="mailto:sales@assuredforge.com">sales@assuredforge.com</a></li>
          <li>Support: <a href="mailto:support@assuredforge.com">support@assuredforge.com</a></li>
          <li>Security: <a href="mailto:security@assuredforge.com">security@assuredforge.com</a></li>
        </ul>
      </Section>
    </Layout>
  );
}
