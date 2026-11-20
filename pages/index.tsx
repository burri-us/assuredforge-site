import Link from "next/link";
import { Layout, Section } from "../components/Layout";
import { AI } from "../components/AiWording";
import { primary, secondary, ShotSlot } from "../components/Blocks";
import { CheckIcon, GateIcon, ShieldCheckIcon, ThreadIcon } from "../components/Icons";

// DRAFT COPY (W11, DEC-433). Every claim carries the claims-register (0.1) entry it rests on, or CLAIM-UNVERIFIED.
// AI wording comes from components/AiWording.tsx (WS-01 switch; held by default).

// Proof strip: facts only, no logos, counts or certifications.
const PROOF = [
  "Every approval signed by a named person", // CL-05
  "Tamper-evident audit chain you can verify and export", // CL-06, CL-07
  "Desktop edition runs on your own PC", // CLAIM-UNVERIFIED (kit facts, DEC-430; no register entry)
  "Bring your own AI model key", // CLAIM-UNVERIFIED (DEC-430 (6); no register entry)
];

const STEPS = [
  { t: "Requirement", d: "A requirement is recorded and linked to the work that answers it.", shot: "A Requirement with its linked Feature" }, // CL-03
  {
    t: AI.step2,
    d: AI.available
      ? "Work is prepared with AI assistance and checked by tests that run independently of the author."
      : "Work is delivered and integrated in an isolated suite runner, with tests run on the integration.",
    shot: "A Release with its Deliveries and test results",
  }, // CL-36 (isolated integration); the AI branch is CLAIM-UNVERIFIED
  { t: "Signed human approval", d: "A named person with the required role approves, and the approval is signed and recorded.", shot: "The approval record with a signature" }, // CL-05
  {
    t: "Release and evidence export",
    d: "The push and the deployment are recorded against the approved Release, and the Tenant's records can be exported and verified offline.",
    shot: "The Release record and the evidence export",
  }, // CL-07, CL-11
];

const TILES = [
  { title: "Govern", Icon: GateIcon, href: "/product/governance/", status: "Available today", text: "Gates, signed approvals by named people in scoped roles, and release governance enforced by the platform, not by convention." }, // CL-04, CL-05, CL-13
  { title: "Trace", Icon: ThreadIcon, href: "/product/traceability/", status: "Available today", text: "One connected record from requirement to Release, approval, push and recorded deployment, and back." }, // CL-03
  { title: "Prove", Icon: ShieldCheckIcon, href: "/product/audit/", status: "Available today", text: "Every governed action in a tamper-evident audit chain that you can verify and export." }, // CL-06, CL-07
  { title: "Deliver with AI", Icon: CheckIcon, href: "/product/ai-assisted-delivery/", status: AI.deliverStatus, text: AI.deliverTile }, // CL-19 (hold) / CLAIM-UNVERIFIED (new wording)
];

export default function Home() {
  return (
    <Layout
      title="AssuredForge: Software Delivery Governance Platform"
      description="Governed software delivery with full traceability, signed approvals and an audit chain, for manufacturing and quality-driven teams."
    >
      <div className="grid items-center gap-10 pb-12 sm:pt-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {AI.tag}
            <span aria-hidden="true" className="mt-2 block h-[3px] w-10 bg-gold" />
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">{AI.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink">{AI.heroLead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/design-partners/" className={primary}>Become a design partner</Link>
            <Link href="/demo/" className={secondary}>Watch the demo</Link>
          </div>
          <p className="mt-3 text-sm text-ink-muted">
            <a href="mailto:info@assuredforge.com">info@assuredforge.com</a> · We reply personally
          </p>
        </div>
        <ShotSlot title="Release record with signed approvals" />
      </div>

      <ul className="grid grid-cols-1 gap-x-6 gap-y-4 border-y border-rule py-6 text-sm text-ink min-[420px]:grid-cols-2 md:grid-cols-4">
        {PROOF.map((s) => (
          <li key={s} className="flex items-start gap-2">
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <span>{s}</span>
          </li>
        ))}
      </ul>

      <Section title="Auditors ask who approved what, and why">
        {/* CL-03, CL-05, CL-06. The AI sentence follows the WS-01 switch. */}
        <p className="max-w-[70ch]">
          {AI.available ? "AI makes that harder. " : ""}AssuredForge makes it provable: every requirement, approval, release and deployment is
          traceable and attributable to a named person.
        </p>
      </Section>

      <Section title="How it works">
        <ol className="mt-4 grid gap-8 md:grid-cols-2">
          {STEPS.map((s, i) => (
            <li key={s.t}>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">Step {i + 1}</p>
              <h3 className="text-xl font-semibold text-ink">{s.t}</h3>
              <p className="mb-3 mt-1">{s.d}</p>
              <ShotSlot title={s.shot} />
            </li>
          ))}
        </ol>
      </Section>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TILES.map(({ title, Icon, text, href, status }) => (
          <div key={title} className="rounded-md border-t-[3px] border-gold bg-surface-alt p-6">
            <Icon className="h-8 w-8 text-accent" />
            <h2 className="mt-4 text-xl font-semibold text-ink">{title}</h2>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink">{status}</p>
            <p className="mt-2 text-ink-muted">{text}</p>
            <p className="mt-3"><Link href={href}>Read more<span className="sr-only"> about {title}</span></Link></p>
          </div>
        ))}
      </div>

      <Section title="People decide">
        {/* CL-04, CL-16 */}
        <p className="max-w-[70ch]">
          Only named people approve: automation never does. AssuredForge is fully usable without third-party connectors.
        </p>
        <p className="max-w-[70ch]">{AI.homeBlock}</p>
      </Section>

      <Section title="Your data, your model">
        {/* CLAIM-UNVERIFIED: the whole block; desktop-kit facts (DEC-430, DEC-432) are not in claims register 0.1. */}
        <p className="max-w-[70ch]">
          The desktop edition runs on your own PC, so your records stay on your machine.{" "}
          {AI.available ? "You choose the model provider and bring your own key, and you set run budgets and monthly limits. " : ""}
          Tierra receives nothing unless you send a support bundle.
        </p>
        <p><Link href="/deployment/">Editions and system requirements</Link></p>
      </Section>

      <Section title="Built for manufacturing and quality-driven teams">
        {/* CL-02 */}
        <p className="max-w-[70ch]">
          Software delivery governance and audit-ready traceability for manufacturing and quality-driven organizations.
        </p>
        <p><Link href="/manufacturing/">AssuredForge for manufacturing</Link> · <Link href="/solutions/regulated/">Regulated and quality-driven teams</Link></p>
      </Section>

      <section className="mt-12 rounded-md border-l-4 border-gold bg-surface-alt p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">Working with our first design partners</h2>
        {/* CL-23, CL-27 */}
        <p className="mt-3 max-w-[65ch] text-ink-muted">
          A small founding cohort of manufacturing organizations, six months, no software license fee during the program.
          Applications open now.
        </p>
        <p className="mt-5"><Link href="/design-partners/" className={secondary}>Learn about the program</Link></p>
      </section>

      <Section title="Questions">
        <p>Answers on the desktop edition, AI, data and the design partner program are on the <Link href="/faq/">FAQ</Link>.</p>
      </Section>
    </Layout>
  );
}
