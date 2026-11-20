import Link from "next/link";
import { Layout, Section, Title } from "../components/Layout";
import { POSITION } from "../components/Positioning";

// Same button look as the homepage's primary button.
const primary =
  "inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 py-3 font-semibold text-accent-ink no-underline transition-colors hover:bg-ink";

const MAILTO = "mailto:info@assuredforge.com?subject=Founding%20Design%20Partner%20Program";

export default function DesignPartners() {
  return (
    <Layout
      title="Founding Design Partner Program | AssuredForge"
      description="Join a small founding cohort, as an individual or small team on the desktop edition or as an organization for the planned hosted edition, shaping governed software delivery with AssuredForge."
    >
      <Title lead="AssuredForge is looking for a small founding cohort of design partners. Work with us on real deliveries and help shape the platform around what you need. {POSITION.desktop} {POSITION.hosted}">
        Founding Design Partner Program
      </Title>
      <p className="mt-4 font-medium text-ink">
        Applications open now. First cohort begins once participating organizations have been selected.
      </p>
      <Section title="What founding partners get">
        <ul className="list-disc space-y-2 pl-6">
          <li>No software license fee during the program.</li>
          <li>Early access: the desktop edition now, and AssuredForge for Manufacturing as it is shaped.</li>
          <li>Direct influence on the roadmap and on the Manufacturing Edition: your priority use cases shape what we build next.</li>
          <li>Regular working sessions and priority support from the team building the platform.</li>
        </ul>
      </Section>
      {/* WR-03, option B (DEC-436 W11 (1)): two tracks. Wording lives in components/Positioning.tsx; the owner confirms B later. */}
      <Section title="Two tracks">
        <p>Choose the track that fits you. Both run for six months, with no software license fee during the program.</p>
      </Section>
      {[POSITION.trackIndividual, POSITION.trackOrganization].map((t) => (
        <section key={t.title} className="mt-8 rounded-md border-l-4 border-gold bg-surface-alt p-6">
          <h2 className="text-2xl font-semibold">{t.title}</h2>
          <h3 className="mt-4 text-lg font-semibold text-ink">Who we are looking for</h3>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-ink-muted">
            {t.eligibility.map((e) => <li key={e}>{e}</li>)}
          </ul>
          <h3 className="mt-4 text-lg font-semibold text-ink">What we ask of you</h3>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-ink-muted">
            {t.commitments.map((e) => <li key={e}>{e}</li>)}
          </ul>
        </section>
      ))}
      <Section title="How it works">
        <ol className="list-decimal space-y-2 pl-6">
          <li>Email us with a short description of yourself or your organization, which track fits, and what you deliver.</li>
          <li>An introductory call with the founder, including a walkthrough of the platform.</li>
          <li>Together we confirm fit and agree the scope of your first deliveries.</li>
          <li>Onboarding follows a written design partner agreement.</li>
        </ol>
      </Section>
      <Section title="Get in touch">
        <p>
          Email <a href={MAILTO}>info@assuredforge.com</a> and tell us about your organization, the software you deliver
          and the tools you use. We reply personally.
        </p>
        <p className="pt-2">
          <a href={MAILTO} className={primary}>
            Email us about the program
          </a>
        </p>
        <p className="pt-2">
          See how AssuredForge works <Link href="/manufacturing/">for manufacturing</Link> and on the{" "}
          <Link href="/platform/">platform</Link> page.
        </p>
      </Section>
    </Layout>
  );
}
