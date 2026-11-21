import Link from "next/link";
import { Layout, Section, Title } from "../components/Layout";
import { Status } from "../components/Blocks";

export default function Resources() {
  return (
    <Layout title="Resources | AssuredForge" description="Quick start, documentation, FAQ and release notes for AssuredForge.">
      <Title lead="Where to find help and what is published.">Resources</Title>
      <Section title="For design partners">
        <ul className="space-y-3">
          {/* Not published yet: the Quick Start and release notes ship with the kit (W5, W10). No links until they exist. */}
          <li><strong className="text-ink">Quick start</strong> <Status kind="partners" /> Delivered with the evaluation kit (the download we send you a single link to), with the install steps and the SHA-256 list.</li>
          <li><strong className="text-ink">Documentation and Help</strong> <Status kind="today" /> {/* CL-31 */} Help is built into the Portal: task guides, role guides, troubleshooting, and &ldquo;Help for this page&rdquo;.</li>
          <li><strong className="text-ink">Release notes</strong> <Status kind="partners" /> Delivered with the kit.</li>
        </ul>
      </Section>
      <Section title="On this site">
        <ul className="list-disc space-y-1 pl-6">
          <li><Link href="/faq/">FAQ</Link></li>
          <li><Link href="/demo/">Demo</Link></li>
          <li><Link href="/security/">Security</Link> and the <Link href="/trust/">Trust Center</Link></li>
          <li><Link href="/deployment/">Editions and system requirements</Link></li>
        </ul>
        <p>Support: <a href="mailto:support@assuredforge.com">support@assuredforge.com</a>.</p>
      </Section>
    </Layout>
  );
}
