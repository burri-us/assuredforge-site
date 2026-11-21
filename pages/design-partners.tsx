import Link from "next/link";
import { Layout, Section, Title } from "../components/Layout";
import { POSITION } from "../components/Positioning";

// Same button look as the homepage's primary button.
const primary =
  "btn btn-primary";

const MAILTO = "mailto:info@assuredforge.com?subject=Founding%20Design%20Partner%20Program";

export default function DesignPartners() {
  return (
    <Layout
      title="Founding Design Partner Program | AssuredForge"
      description="Join a small founding cohort (the first design partners admitted to the program), as an individual or small team on the desktop edition or as an organization for the planned hosted edition, shaping governed software delivery with AssuredForge."
    >
      <Title lead={`AssuredForge is looking for design partners for a small founding cohort (the first design partners admitted to the program). Work with us on deliveries of your own projects in the evaluation and help shape the platform around what you need. ${POSITION.desktop} ${POSITION.hosted}`}>
        Founding Design Partner Program
      </Title>
      {/* CL-27 (both audiences named, DEC-439 O-1) */}
      <p className="mt-4 font-medium text-ink">
        Applications open now. First cohort begins once participants have been selected.
      </p>
      <Section title="What founding partners get">
        {/* CL-23 (no license fee), CL-25 (early access, priority support, roadmap influence, working sessions). */}
        <ul className="list-disc space-y-2 pl-6">
          <li>No software license fee during the program.</li>
          <li>Early access: the desktop edition now.</li>
          <li>Direct influence on the roadmap: your priority use cases shape what we build next.</li>
          <li>Regular working sessions and priority support.</li>
        </ul>
      </Section>
      {/* WR-03, option B (DEC-436 W11 (1)): two tracks. Wording lives in components/Positioning.tsx; the owner confirms B later. */}
      <Section title="Two tracks">
        {/* CL-23 (six months); CL-51, CL-52 (DEC-439 P-1, P-2); organization track is a waitlist, planned (O-3). */}
        <p>The program runs for six months with no software license fee. The individual and small-team track is open now on the desktop edition. The organization track is a waitlist, planned for the hosted edition.</p>
      </Section>
      {/* CL-24 (commitments for the organization track); individual track: CL-52 */}
      {[POSITION.trackIndividual, POSITION.trackOrganization].map((t: typeof POSITION.trackOrganization | typeof POSITION.trackIndividual) => (
        <section key={t.title} className="mt-8 card border-l-4 border-l-gold">
          <h2>{t.title}</h2>
          <h3 className="mt-4 text-ink">Who we are looking for</h3>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-muted">
            {t.eligibility.map((e) => <li key={e}>{e}</li>)}
          </ul>
          <h3 className="mt-4 text-ink">What we ask of you</h3>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-muted">
            {t.commitments.map((e) => <li key={e}>{e}</li>)}
          </ul>
          {"offers" in t && (
            <>
              <h3 className="mt-4 text-ink">Planned for waitlist partners</h3>
              <ul className="mt-2 list-disc space-y-2 pl-6 text-muted">
                {t.offers.map((e) => <li key={e}>{e}</li>)}
              </ul>
              <p className="mt-4 text-muted">See how AssuredForge works <Link href="/industries/#manufacturing">for manufacturing (planned)</Link>.</p>
            </>
          )}
        </section>
      ))}
      <Section title="How it works">
        {/* Admission procedure steps (organization track is a waitlist, DEC-439 O-3); CL-26 NDA wording not used here. */}
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
          See how AssuredForge works on the <Link href="/platform/">platform</Link> page.
        </p>
      </Section>
    </Layout>
  );
}
