import Link from "next/link";
import { Layout, Section } from "../components/Layout";
import { AI } from "../components/AiWording";
import { FlowDiagram } from "../components/FlowDiagram";
import { POSITION } from "../components/Positioning";
import { BRAND, PILLAR_GROUPS } from "../components/Brand";
import { primary, secondary, Status, VideoSlot } from "../components/Blocks";
import { CheckIcon } from "../components/Icons";

// DRAFT COPY (W11, DEC-433). Every claim carries the claims-register (0.3) entry it rests on, or CLAIM-UNVERIFIED.
// AI wording comes from components/AiWording.tsx (WS-01 switch; held by default).

// Proof strip: facts only, no logos, counts or certifications.
const PROOF = [
  "Release approvals signed by named people", // CL-05
  "Tamper-evident audit chain you can verify and export", // CL-06, CL-07 (explained in the Prove tile)
  "Desktop edition runs on your own PC", // CL-53 (Being validated)
  AI.proof4, // WR-01: behind the AI switch. On: CL-47. Off: CL-16 (the off wording is DEC-439 O-4).
];

// WR-04: four plain steps. The first two follow the AI switch (components/AiWording.tsx).
const STEPS = [
  { ...AI.how[0], shot: "A Feature with its linked Requirement and Deliveries" }, // CL-03; AI branch CLAIM-UNVERIFIED
  { ...AI.how[1], shot: "A Release with its Deliveries and test results" }, // CL-36 (isolated integration)
  { t: "You approve", d: "A named person with the required role approves, and the approval is signed and recorded.", shot: "The approval record with a signature" }, // CL-05
  {
    t: "You can prove it",
    d: "The push and the deployment are recorded against the approved Release (a deployable package of one or more Features), and your records can be exported and verified offline.",
    shot: "The Release record and the evidence export",
  }, // CL-07, CL-11
];

export default function Home() {
  return (
    <Layout
      title="AssuredForge: Software delivery governance platform"
      description={BRAND.oneLiner}
    >
      <div className="grid items-center gap-10 pb-12 sm:pt-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {AI.tag}
            <span aria-hidden="true" className="mt-2 block h-[3px] w-10 bg-gold" />
          </p>
          <h1 className="mt-5 sm:text-display-xl">{BRAND.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink">{BRAND.heroLead}</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">{AI.heroLead}</p>
          <p className="mt-2 text-sm text-muted">{BRAND.heroPending}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/design-partners/" className={primary}>Become a design partner</Link>
            <Link href="/demo/" className={secondary}>Watch the demo</Link>
          </div>
          <p className="mt-3 text-sm text-muted">
            <a href="mailto:info@assuredforge.com">info@assuredforge.com</a> · We reply personally
          </p>
        </div>
        <FlowDiagram />
      </div>

      {/* Design system exception E-6: this four-item list goes to four columns at 768 px (md), not at breakpoint-stack (720 px);
          it is a list, not side-by-side panels, and four columns fit only from 768 px. scripts/check-tokens.mjs allows it here only. */}
      <ul className="grid grid-cols-1 gap-x-6 gap-y-4 border-y border-rule py-6 text-sm text-ink min-[420px]:grid-cols-2 md:grid-cols-4">
        {PROOF.map((s) => (
          <li key={s} className="flex items-start gap-2">
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <span>{s}</span>
          </li>
        ))}
      </ul>

      <Section title="Plan, build, decide, prove">
        {/* Six pillars (DEC-637; plan §7 (5), (6)): governance as fact; the others with their claims-register state. */}
        <p className="text-sm text-muted">{BRAND.pillarsPending}</p>
        {AI.available ? (
        <div className="grid gap-8 stack:grid-cols-2 lg:grid-cols-4">
          {PILLAR_GROUPS.map((g) => (
            <div key={g.step}>
              <h3 className="text-heading-3">
                {g.step}
                <span aria-hidden="true" className="mt-2 block h-[3px] w-8 bg-gold" />
              </h3>
              <ul className="mt-4 space-y-6">
                {g.pillars.map((p) => (
                  <li key={p.name}>
                    <p className="font-semibold text-ink">{p.name}</p>
                    <p className="mt-1"><Status kind={p.state} /></p>
                    {p.text ? <p className="mt-2 text-body-sm">{p.text}</p> : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        ) : (
          <>
            {/* AI switch off: only "Available today" pillars as full cards (owner, pre-review tweak 1); the others in one compact line
                with their state labels, so no card appears without a sentence (WR-01 hides CL-81, CL-83, CL-84 while the switch is off). */}
            {/* Layout (owner, pre-review change 2): the Governance card and the state lines side by side from desktop width (lg),
                stacked on phones, so the row never shows a lone card. */}
            <div className="grid items-start gap-8 lg:grid-cols-2">
              <ul>
                {PILLAR_GROUPS.flatMap((g) => g.pillars.filter((p) => p.state === "today").map((p) => (
                  <li key={p.name} className="card border-t-[3px] border-t-gold">
                    <p className="text-label uppercase tracking-wide text-muted">{g.step}</p>
                    <p className="mt-1 font-semibold text-ink">{p.name}</p>
                    <p className="mt-1"><Status kind={p.state} /></p>
                    <p className="mt-2 text-body-sm">{p.text}</p>
                  </li>
                )))}
              </ul>
              <ul className="space-y-4 text-body-sm">
                {(["validated", "planned"] as const).map((s) => {
                  const names = PILLAR_GROUPS.flatMap((g) => g.pillars).filter((p) => p.state === s).map((p) => p.name);
                  return names.length ? (
                    <li key={s}>
                      <Status kind={s} />
                      <p className="mt-2">{names.join(", ")}</p>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
          </>
        )}
        {/* The "Read more" links of the former Govern / Trace / Prove / Build tiles (owner, pre-review change 1: one set of pillars). */}
        <p className="mt-8 text-body-sm">
          Read more: <Link href="/product/governance/">Governance and approvals</Link> · <Link href="/product/traceability/">Traceability</Link> ·{" "}
          <Link href="/product/audit/">Audit and evidence</Link> · <Link href="/product/ai-assisted-delivery/">Governed execution</Link>
        </p>
      </Section>

      <Section title="Who approved what, and why?">
        {/* CL-03, CL-05, CL-06. The AI sentence follows the WS-01 switch. */}
        <p className="max-w-[70ch]">
          AssuredForge makes it provable: every requirement, approval, release and deployment is
          traceable and attributable to a named person, whether you are on your own or in a team.
        </p>
      </Section>

      <Section title="How it works">
        <ol className="mt-4 grid gap-8 stack:grid-cols-2">
          {STEPS.map((s, i) => (
            <li key={s.t}>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">Step {i + 1}</p>
              <h3 className="text-ink">{s.t}</h3>
              <p className="mb-3 mt-1">{s.d}</p>
              <VideoSlot kind="loop" title={s.shot} />
            </li>
          ))}
        </ol>
      </Section>

      <Section title="People decide">
        {/* CL-04, CL-16 */}
        <p className="max-w-[70ch]">
          Only named people approve: automation never does. AssuredForge is fully usable without third-party connectors.
        </p>
        <p className="max-w-[70ch]">{AI.homeBlock}</p>
      </Section>

      <Section title={AI.dataModel}>
        {/* CL-53 (Being validated until W8), CL-47, CL-49. */}
        <p className="max-w-[70ch]">
          In the desktop edition your records stay on your own PC, under your control.{" "}
          {AI.dataModelSentence}
          AssuredForge connects only to the services you set up: {AI.available ? "the model provider of the key you entered and, if you add them, " : "if you add them, "}your own git remote (the online copy of your code repository that you choose to connect), connectors (integrations to outside systems such as Jira or Azure DevOps) and sign-in provider. Tierra receives your installation id (a code that identifies your AssuredForge installation; it does not contain your records) when you ask for a license, and prompts or project content only in what you choose to send us: a support bundle (a short set of details you choose to send us when you ask for help), or feedback with files you attach. This is being validated.
        </p>
        <p><Link href="/deployment/">Editions and system requirements</Link></p>
      </Section>

      <Section title="Who it is for">
        {/* CL-51 (DEC-439 P-1, option B); CL-02 with both audiences named (O-1). Wording in components/Positioning.tsx. */}
        <p className="max-w-[70ch]">{POSITION.desktop} {POSITION.desktopWho}</p>
        <p className="max-w-[70ch]">{POSITION.hosted}</p>
        <p><Link href="/solutions/individuals/">Individuals and small teams</Link> · <Link href="/deployment/">Editions and deployment</Link> · <Link href="/industries/">Industries</Link></p>
      </Section>

      <section className="mt-12 card border-l-4 border-l-gold sm:p-8">
        <h2>Working with our first design partners</h2>
        {/* CL-23, CL-27 (both audiences, DEC-439 O-1) */}
        <p className="mt-3 max-w-[65ch] text-muted">
          A small founding cohort (the first design partners admitted to the program), six months, no software license fee during the program: individuals and small teams on the desktop
          edition, and organizations for the planned hosted edition. Applications open now.
        </p>
        <p className="mt-5"><Link href="/design-partners/" className={secondary}>Learn about the program</Link></p>
      </section>

      <Section title="Questions">
        <p>Answers on the desktop edition, agents and models, data and the design partner program are on the <Link href="/faq/">FAQ</Link>.</p>
      </Section>
    </Layout>
  );
}

// No client script: the page has no interactive features (page weight, A11Y-PERF-FINDINGS F-3).
export const config = { unstable_runtimeJS: false };
