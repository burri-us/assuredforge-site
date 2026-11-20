import Link from "next/link";
import type { ReactNode } from "react";
import { Layout, Title } from "../components/Layout";
import { AI } from "../components/AiWording";
import { POSITION } from "../components/Positioning";

// DRAFT COPY. Native details/summary: no script. Each answer names its claim source in a comment.
const QA: { q: string; a: ReactNode }[] = [
  {
    q: "Does AI approve releases?",
    a: <>No. Only named people approve; automation and AI never approve, accept risk or authorize a release.{/* CL-04 */}</>,
  },
  {
    q: "Is AI part of AssuredForge today?",
    a: <>{AI.homeBlock}{/* CL-19, CL-40R, CL-46 (on) / hold wording DEC-439 O-4 */}</>,
  },
  {
    q: "Where does my data live?",
    a: <>On the desktop edition, on your own PC, under your control. To get a licence you send Tierra your installation id. Tierra receives your prompts or project content only in a support bundle you choose to send, and we delete a support bundle 90 days after the issue it was sent for is closed. This is being validated.{/* CL-53 (Being validated until W8 and its network check) */} See the <Link href="/trust/product-privacy/">product privacy notice</Link> (draft).</>,
  },
  {
    q: "What do I need to run the desktop edition?",
    a: <>Windows 11 Home or Pro (64-bit), virtualization, WSL2, Docker Desktop, 8 GB RAM minimum (16 GB recommended) and 30 GB free disk.{/* CL-54 (RAM: W8 marker, S-24) */} Details on <Link href="/deployment/">Editions and deployment</Link>.</>,
  },
  {
    q: "What does it cost?",
    a: <>Free during the programme. Founding partners get founding pricing, at least 30 days' notice before any fee, and never an automatic charge.{/* DEC-438: owner-approved pricing wording */} {AI.faqCost}{/* AI switch; CL-55 */}</>,
  },
  ...(AI.faqModels ? [{ q: AI.faqModels, a: <>{AI.modelPath}{/* CL-48 (FAQ is a permitted page) */} Model execution is off until an administrator turns it on in Setup.</> }] : []),
  {
    q: "Who is the desktop edition for?",
    a: <>{POSITION.desktop} {POSITION.hosted}{/* CL-51 (DEC-439 P-1) */}</>,
  },
  {
    q: "Which tools does it connect to?",
    a: <>It works on its own. Optional connectors for Jira, Confluence, Bitbucket and Azure DevOps exist; GitHub, GitLab and PTC Windchill are planned.{/* CL-16, CL-17 */} See <Link href="/product/integrations/">Integrations</Link>.</>,
  },
  {
    q: "Is it certified?",
    a: <>No certification (such as SOC 2 or ISO 27001) and no external penetration test is claimed. Security practice is described on the <Link href="/security/">Security</Link> page.{/* CL-39; register &quot;must not claim&quot; list */}</>,
  },
  {
    q: "How do I become a design partner?",
    a: <>Email us; see the <Link href="/design-partners/">program page</Link>. Applications are open; the first cohort begins once organizations have been selected.{/* CL-23, CL-27 */}</>,
  },
];

export default function Faq() {
  return (
    <Layout title="FAQ | AssuredForge" description="Answers about AI, data, the desktop edition, cost and the design partner program.">
      <Title>Frequently asked questions</Title>
      <div className="mt-8 divide-y divide-rule border-y border-rule">
        {QA.map(({ q, a }) => (
          <details key={q} className="py-3">
            <summary className="min-h-11 cursor-pointer py-2 font-semibold text-ink">{q}</summary>
            <div className="max-w-[70ch] pb-2 text-ink-muted">{a}</div>
          </details>
        ))}
      </div>
    </Layout>
  );
}
