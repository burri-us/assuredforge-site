import Link from "next/link";
import { Layout, Section } from "../components/Layout";

export default function Home() {
  return (
    <Layout
      title="AssuredForge: Software Delivery Governance Platform"
      description="Governed, AI-assisted software delivery with full traceability, for teams that answer to auditors."
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">Software Delivery Governance Platform</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Build anywhere. Deploy anywhere. Govern everywhere.</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
        AssuredForge makes every requirement, approval, release and deployment traceable and attributable to a named
        person, whatever tools, clouds and AI providers you use.
      </p>
      <p className="mt-8 flex flex-wrap gap-4">
        <a href="mailto:info@assuredforge.com" className="rounded bg-accent px-5 py-3 font-semibold text-accent-ink no-underline">
          Talk to us
        </a>
        <Link href="/design-partners/" className="rounded border border-accent px-5 py-3 font-semibold no-underline">
          Become a design partner
        </Link>
      </p>

      <div className="mt-14 grid gap-8 sm:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold">Govern</h2>
          <p className="mt-2 text-ink-muted">Gates, signed approvals by named people in scoped roles, and release governance enforced by the platform, not by convention.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Trace</h2>
          <p className="mt-2 text-ink-muted">One connected record from requirement to deployment and back, including the work items and pull requests in your own tools.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Prove</h2>
          <p className="mt-2 text-ink-muted">Every governed action in a tamper-evident audit chain that you can verify and export.</p>
        </div>
      </div>

      <Section title="AI that accelerates, people who decide">
        <p>
          AI in AssuredForge recommends, generates and validates. It never approves, accepts risk or authorizes a release.
          Bring your own AI provider. Prompts are not retained by default, and customer data is never used for training.
        </p>
      </Section>

      <Section title="Working with our first design partners">
        <p>
          AssuredForge is looking for its first design partners in manufacturing.{" "}
          <Link href="/design-partners/">Learn about the program</Link>.
        </p>
      </Section>
    </Layout>
  );
}
