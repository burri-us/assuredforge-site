import Link from "next/link";
import { Layout, Section, Title } from "../components/Layout";
import { Status } from "../components/Blocks";

const ITEMS: [string, string, string, boolean][] = [
  ["Security", "/security/", "How we approach security.", false],
  ["Privacy (website)", "/privacy/", "What the website collects: nothing directly.", true],
  ["Product privacy notice", "/trust/product-privacy/", "Where desktop-edition data lives and what leaves your machine.", true],
  ["AI use policy", "/trust/ai-use-policy/", "Where AI may be used and what it never does.", true],
  ["Subprocessors and model providers", "/trust/subprocessors/", "Who may process data.", true],
  ["Responsible disclosure", "/trust/disclosure/", "How to report a vulnerability.", false],
  ["Accessibility", "/trust/accessibility/", "Our accessibility target: we aim for this website to meet WCAG 2.2 level AA.", true],
];

export default function Trust() {
  return (
    <Layout title="Trust Center | AssuredForge" description="Security, privacy, AI use policy, subprocessors, responsible disclosure and accessibility in one place.">
      <Title lead="Our commitments, in one place. Items marked interim are pending formal legal review.">Trust Center</Title>
      <Section title="Contents">
        <ul className="divide-y divide-rule border-y border-rule">
          {ITEMS.map(([name, href, note, interim]) => (
            <li key={href} className="py-3">
              <Link href={href} className="font-semibold">{name}</Link>{interim && <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-ink">Interim</span>}
              <p className="text-sm">{note}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Not claimed">
        <p>No certification, no external penetration test (a security test in which an outside company tries to break into a system), no uptime or support-hour commitment.</p>
        <p><Status kind="today" /> {/* CL-39 */} Dependency and container image scanning (automatic checks of the third-party software AssuredForge is built with, and of its container images, for known security problems), and a structured internal security review.</p>
      </Section>
    </Layout>
  );
}
