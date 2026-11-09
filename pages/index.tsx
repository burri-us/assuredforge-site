import Link from "next/link";
import { Layout, Section } from "../components/Layout";
import { CheckIcon, GateIcon, ShieldCheckIcon, ThreadIcon } from "../components/Icons";

// Trust strip: phrases taken from existing page text only (home, Security and Privacy pages); no new claims.
const SAFEGUARDS = [
  "Signed approvals by named people",
  "Tamper-evident audit chain you can verify and export",
  "Scoped, role-based authority enforced by the platform",
  "No cookies or tracking on this site",
];

const PILLARS = [
  {
    title: "Govern",
    Icon: GateIcon,
    text: "Gates, signed approvals by named people in scoped roles, and release governance enforced by the platform, not by convention.",
  },
  {
    title: "Trace",
    Icon: ThreadIcon,
    text: "One connected record from requirement to deployment and back. Optional connectors can link the work items and pull requests in your own tools.",
  },
  {
    title: "Prove",
    Icon: ShieldCheckIcon,
    text: "Every governed action in a tamper-evident audit chain that you can verify and export.",
  },
];

const button =
  "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 font-semibold no-underline transition-colors";
const primary = `${button} bg-accent text-accent-ink hover:bg-ink`;
const secondary = `${button} border-2 border-accent text-accent hover:bg-surface-alt`;

export default function Home() {
  return (
    <Layout
      title="AssuredForge: Software Delivery Governance Platform"
      description="Governed software delivery with full traceability, approvals and auditability."
    >
      <div className="pb-12 sm:pb-16 sm:pt-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Software Delivery Governance Platform
          <span aria-hidden="true" className="mt-2 block h-[3px] w-10 bg-gold" />
        </p>
        <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          <span className="sm:block">Build anywhere.</span> <span className="sm:block">Deploy anywhere.</span>{" "}
          <span className="sm:block">Govern everywhere.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink">
          Software delivery governance and audit-ready traceability for manufacturing and quality-driven organizations.
        </p>
        <p className="mt-4 max-w-[65ch] text-lg leading-relaxed text-ink-muted">
          AssuredForge makes every requirement, approval, release and deployment traceable and attributable to a named
          person, with optional integrations for the tools you already use.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="mailto:info@assuredforge.com" className={primary}>
            Talk to us
          </a>
          <Link href="/design-partners/" className={secondary}>
            Become a design partner
          </Link>
        </div>
        <p className="mt-3 text-sm text-ink-muted">
          <a href="mailto:info@assuredforge.com">info@assuredforge.com</a> · We reply personally
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-x-6 gap-y-4 border-y border-rule py-6 text-sm text-ink min-[420px]:grid-cols-2 md:grid-cols-4">
        {SAFEGUARDS.map((s) => (
          <li key={s} className="flex items-start gap-2">
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <span>{s}</span>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PILLARS.map(({ title, Icon, text }) => (
          <div key={title} className="rounded-md border-t-[3px] border-gold bg-surface-alt p-6">
            <Icon className="h-8 w-8 text-accent" />
            <h2 className="mt-4 text-xl font-semibold text-ink">{title}</h2>
            <p className="mt-2 text-ink-muted">{text}</p>
          </div>
        ))}
      </div>

      <Section title="People decide">
        <p className="max-w-[70ch]">
          AssuredForge is the system of governance. It remains fully usable without third-party connectors and without an
          assistant. Connectors and assistants extend the platform but are not required for operation.
        </p>
        <p className="max-w-[70ch]">
          AI assistance is planned as a configurable extension: it may recommend and prepare, and it never approves, accepts
          risk or authorizes a release. Its design keeps providers interchangeable, does not retain prompts by default and
          never uses customer data for training.
        </p>
      </Section>

      <section className="mt-12 rounded-md border-l-4 border-gold bg-surface-alt p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">Working with our first design partners</h2>
        <p className="mt-3 max-w-[65ch] text-ink-muted">
          AssuredForge is looking for a small founding cohort of manufacturing organizations as design partners.
        </p>
        <p className="mt-5">
          <Link href="/design-partners/" className={secondary}>
            Learn about the program
          </Link>
        </p>
      </section>
    </Layout>
  );
}
