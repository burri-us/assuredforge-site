import { Layout, Section, Title } from "../components/Layout";

export default function About() {
  return (
    <Layout title="About | AssuredForge" description="AssuredForge is developed and operated by Tierra LLC, a Michigan-based software company focused on software delivery governance.">
      <Title>About</Title>
      <Section title="Who we are">
        {/* DEC-271 D-10 company identity, verbatim. */}
        <p>
          AssuredForge is developed and operated by <a href="https://tierra-llc.com/">Tierra LLC</a>, a Michigan-based software company focused on software
          delivery governance, traceability and release records you can export.
        </p>
        <p>In plain words: software that records who approved each change, how it was checked and where it was deployed.</p>{/* CL-28 plain line (DEC-470 (9)) */}
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

// No client script: the page has no interactive features (page weight, A11Y-PERF-FINDINGS F-3).
export const config = { unstable_runtimeJS: false };
