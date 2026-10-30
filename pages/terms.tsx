import { Layout, Section, Title } from "../components/Layout";

export default function Terms() {
  return (
    <Layout title="Terms of use | AssuredForge" description="Terms of use for the AssuredForge website.">
      <Title>Terms of use</Title>
      <p className="mt-4 text-sm text-ink-muted">Last updated: 2026-10-30</p>
      <Section title="This website">
        <p>This website is provided by Tierra LLC for information about AssuredForge. Content is provided &quot;as is&quot; without warranties and may change without notice.</p>
      </Section>
      <Section title="No offer or commitment">
        <p>Nothing on this website is an offer, a commitment to features or dates, or a contract. Use of the AssuredForge product is governed by separate agreements.</p>
      </Section>
      <Section title="Content">
        <p>The AssuredForge name and the content of this website belong to Tierra LLC. You may link to the website, but may not reproduce its content beyond fair use without permission.</p>
      </Section>
    </Layout>
  );
}
