import Link from "next/link";
import type { ReactNode } from "react";
import { Layout, Title } from "../components/Layout";
import { AI } from "../components/AiWording";

// DRAFT COPY. Native details/summary: no script. Each answer names its claim source in a comment.
const QA: { q: string; a: ReactNode }[] = [
  {
    q: "Does AI approve releases?",
    a: <>No. Only named people approve; automation and AI never approve, accept risk or authorize a release.{/* CL-04 */}</>,
  },
  {
    q: "Is AI part of AssuredForge today?",
    a: <>{AI.homeBlock}{/* CL-19 (hold) / CLAIM-UNVERIFIED (new wording), WS-01 switch */}</>,
  },
  {
    q: "Where does my data live?",
    a: <>On the desktop edition, on your own PC. Tierra receives nothing unless you send a support bundle.{/* CLAIM-UNVERIFIED (kit facts, DEC-430) */} See the <Link href="/trust/product-privacy/">product privacy notice</Link> (draft).</>,
  },
  {
    q: "What do I need to run the desktop edition?",
    a: <>Windows 11 Home or Pro (64-bit), virtualisation, WSL2, Docker Desktop, 8 GB RAM minimum (16 GB recommended) and 30 GB free disk.{/* CLAIM-UNVERIFIED, DEC-430 (8), DEC-432 (4) */} Details on <Link href="/deployment/">Editions and deployment</Link>.</>,
  },
  {
    q: "What does it cost?",
    a: <>There is no software license fee during the six-month design-partner program.{/* CL-23 */} Pricing after the program is not set yet, and we will not guess here. Any model-provider charges are billed to your own account by that provider.{/* CLAIM-UNVERIFIED (own key, DEC-430 (6)) */}</>,
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
