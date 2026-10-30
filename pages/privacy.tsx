import { Layout, Section, Title } from "../components/Layout";

export default function Privacy() {
  return (
    <Layout title="Privacy notice | AssuredForge" description="How the AssuredForge website handles personal data: no forms, no analytics, no cookies.">
      <Title lead="This notice covers the website assuredforge.com. It does not cover the AssuredForge product, which has its own terms and privacy commitments.">
        Privacy notice
      </Title>
      <p className="mt-4 text-sm text-ink-muted">Last updated: 2026-10-30</p>
      <Section title="Who we are">
        <p>Tierra LLC (&quot;we&quot;). Contact: <a href="mailto:info@assuredforge.com">info@assuredforge.com</a>.</p>
      </Section>
      <Section title="What we collect on this website">
        <p>Nothing directly. The website has no forms, no accounts, no analytics and no cookies.</p>
      </Section>
      <Section title="Hosting">
        <p>
          The website is hosted by GitHub, Inc. (GitHub Pages). When you visit, GitHub processes technical data such as your
          IP address and browser information to deliver the pages and keep the service secure, as described in the GitHub
          Privacy Statement. We do not receive or use this data.
        </p>
      </Section>
      <Section title="Email">
        <p>If you email us, we use your message and address to reply, and keep the correspondence only as long as needed for that purpose.</p>
      </Section>
      <Section title="Cookies">
        <p>This website sets no cookies and uses no local storage, tracking pixels or third-party scripts. No consent banner is shown because nothing requires consent. If that changes, this notice will change first.</p>
      </Section>
      <Section title="Your rights">
        <p>Depending on where you live, you may have rights to access, correct or delete personal data we hold about you. Write to <a href="mailto:info@assuredforge.com">info@assuredforge.com</a>.</p>
      </Section>
      <Section title="Changes">
        <p>We update this notice when the website changes, for example before adding any form or analytics.</p>
      </Section>
    </Layout>
  );
}
