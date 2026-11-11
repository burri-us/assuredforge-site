import Link from "next/link";
import { Layout, Section, Title } from "../components/Layout";

// Same button look as the homepage's primary button.
const primary =
  "inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 py-3 font-semibold text-accent-ink no-underline transition-colors hover:bg-ink";

const MAILTO = "mailto:info@assuredforge.com?subject=Founding%20Design%20Partner%20Program";

export default function DesignPartners() {
  return (
    <Layout
      title="Founding Design Partner Program | AssuredForge"
      description="Join a small founding cohort of manufacturing organizations shaping governed software delivery with AssuredForge."
    >
      <Title lead="AssuredForge is looking for a small founding cohort of manufacturing organizations as design partners. Work with us on real deliveries and help shape the platform around what you need.">
        Founding Design Partner Program
      </Title>
      <p className="mt-4 font-medium text-ink">
        Applications open now. First cohort begins once participating organizations have been selected.
      </p>
      <Section title="What founding partners get">
        <ul className="list-disc space-y-2 pl-6">
          <li>No software license fee during the program.</li>
          <li>Early access to AssuredForge for Manufacturing.</li>
          <li>Direct influence on the roadmap and on the Manufacturing Edition: your priority use cases shape what we build next.</li>
          <li>Regular working sessions and priority support from the team building the platform.</li>
        </ul>
      </Section>
      <Section title="What we ask of partners">
        <ul className="list-disc space-y-2 pl-6">
          <li>Product feedback and participation in working sessions.</li>
          <li>Validation of requirements against your real deliveries.</li>
          <li>Participation in a pilot.</li>
        </ul>
        <p>The program runs for six months.</p>
      </Section>
      <Section title="Who we are looking for">
        <ul className="list-disc space-y-2 pl-6">
          <li>Manufacturing organizations building internal software under quality or regulatory pressure.</li>
          <li>Jira, Azure DevOps or a similar tool for work items.</li>
          <li>Windchill or Creo in your engineering landscape is a plus.</li>
          <li>A sponsor who can give regular, structured feedback.</li>
        </ul>
      </Section>
      <Section title="How it works">
        <ol className="list-decimal space-y-2 pl-6">
          <li>Email us with a short description of your organization and what you deliver.</li>
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
