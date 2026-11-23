# DEC-577 plan: "AI" in headlines, taglines, navigation and Portal names (plan only)

| Field | Value |
|---|---|
| Date | 2026-11-23 |
| Rule | DEC-577 (1); glossary rule 5; claims register 0.3, section "Where the word AI may appear" |
| Reference | `design/BRAND-DIRECTION.md` on architecture main since c290bbd (blob 290bbc2f, byte-identical to the owner handbook copy) |
| Read from | assuredforge.com at 5effbab (rendered build, 34 pages, AI switch off); tierra-llc.com at 763dbfd; Portal at origin/af-next f8194aab (`packages/web`, read only) |
| Status | Approved by the owner 2026-11-23 for the round after the release, with the decisions in section 0. No copy, code or name changes before the release is done and the owner's go. Portal items go through b3's overlap check |

## 0. Owner decisions (2026-11-23)

- T-1 = (b) "with software they can trust"; Tierra CL-11 amended.
- S-3: fold into "How AF works". If that page is not ready in the same round, rename in place to "Agent-prepared delivery" as an interim.
- S-7 to S-12 go in the same round.
- P-7 has two states: "Drafted automatically · waiting for <name>" before the decision, "Drafted automatically · decided by <name>" after it. CL-62 is drafted before P-7 is built.
- The Help answer header keeps its AI mention, and the assistant also carries a one-line "automated assistant" disclosure (P-8).
- Portal items go through b3's overlap check.
- Recorded as DEC-579 (2): CL-11 amended in `program/reviews/VISION-REVIEW-DECISIONS.md`; CL-62 drafted in the claims
  register, usable only once P-7 is built and verified live; the P-8 disclosure line sits in the assistant panel itself, not
  only in the answer header. Portal items are af-next files: b3 integrates them. Before starting after the release, send Kit
  Notices the lane plan (ceiling and plan) and stop at the plan.
- DEC-579 (2b) (records a55b4ac, a1f98ef): CL-62 (P-7) and CL-63 (P-8) drafted; CL-WW-00 already reworded in the register
  (S-5); S-3 interim name and S-7 to S-12 recorded. Rows for "How AF works" and "Accounts and security" follow as CL-64
  onward (ids from Kit Notices).
- Draft rows for roadmap items 1 and 2 (Kit Notices, 2026-11-23; use only these wordings, each only once evidenced):
  CL-64 work drafted by one agent is reviewed by a second agent on a different model (general, no design step named);
  CL-65 signals back (Planned, FD-87); CL-66 the lifecycle drawing caption; CL-67 step-up for sensitive administrative
  actions (widens to gate decisions once OI-593 is verified live); CL-68 the Account security page (two-step verification,
  recovery codes; approver keys once OI-583 is verified). Item 2 says "Account security", not "My account" (no source yet).
| Not in scope | EU disclosure wording (CQ-4, with P2-04, counsel); the headline "Drafts prepared. People decide. Every decision recorded." (held for P2-04); texts approved for the 25 to 27 November release (DEC-559) |

## 1. assuredforge.com: what changes

What is visible today (AI switch off, as it will be released):

| # | Place | Kind | Current | Proposed | Claims row |
|---|---|---|---|---|---|
| S-1 | Home, fourth tile (`pages/index.tsx` TILES) | Headline | "Deliver with AI" | "Build" (matches the note's pillars: Plan, Build, Decide, Prove; the tile text stays as it is) | CL-19, CL-40R, CL-46 (tile text unchanged) |
| S-2 | Product overview, section title (`pages/platform.tsx`) | Headline | "AI assistance" | "Agents prepare, people decide" | CL-04, CL-40R |
| S-3 | `/product/ai-assisted-delivery/`: page title, H1, meta description, share title and description | Page name, headline, tagline | "AI-assisted delivery"; "How AI assistance fits inside AssuredForge's governance: AI prepares and recommends, independent checks test, and only named people approve." | Recommended: fold this page into roadmap item 1 "How AF works" (section 4), new path `/product/how-it-works/`, the old path kept as a forwarding page (as `/manufacturing/` does). Description: "How AssuredForge works: agents prepare, independent checks test, and only named people approve." The body keeps its plain AI disclosure, which the rule allows. Fallback if item 1 is not approved: rename the page "Agent-prepared delivery" in place, without moving it | CL-04, CL-36, CL-40R, CL-46 (no new sentence besides the description) |
| S-4 | Footer, Product column (`components/Layout.tsx` FOOTER) | Navigation | "AI-assisted delivery" | "How it works" (or "Agent-prepared delivery" with the S-3 fallback) | none (link name) |
| S-5 | Works with: lead and meta description (`components/Registered.ts` WORKS_WITH_PAGE) | Tagline | "Not tied to one technology or one AI provider." | "Not tied to one technology or one model provider." | CL-WW-00 (reworded: the register row changes) |
| S-6 | FAQ: meta and share description (`pages/faq.tsx`) | Tagline | "Answers about AI, data, the desktop edition, cost and the design partner program." | "Answers about agents and models, data, the desktop edition, cost and the design partner program." | none (page description) |

Visible only once the AI switch is turned on (`components/AiWording.tsx`, ON branch); changed in the same round so the switch never brings "AI" back into a headline:

| # | Field | Kind | Current (ON) | Proposed (ON) | Claims row |
|---|---|---|---|---|---|
| S-7 | `heroTitle` | Headline | "Governed software delivery, with AI that never approves." | "Governed software delivery, where agents prepare and people decide." | CL-04, CL-40R |
| S-8 | `proof4` (home proof strip) | Tagline | "Use your own AI model key" | "Use your own model key" | CL-47 |
| S-9 | `how[0].t` (home "How it works" step title) | Headline | "AI builds" | "Agents build" | CL-40R |
| S-10 | `flow[1]` (diagram step label; the alt text stays) | Label | "AI builds" | "Agents build" | CL-40R |
| S-11 | Product overview section title (ON) | Headline | "AI-assisted delivery" | same as S-2 | CL-40R |
| S-12 | Works with group title (`Registered.ts`, `aiOnly`) | Headline | "AI model sources" | "Model sources" | CL-WW-02 |

Unchanged body text: the home, FAQ, Editions and Security paragraphs that say "AI-assisted planning and delivery is being validated", the FAQ questions "Does AI approve releases?" and "Is AI part of AssuredForge today?", and the "AI makes that harder." sentence (ON). These are body text and disclosure, which the rule keeps.

## 2. tierra-llc.com: what changes

| # | Place | Kind | Current | Proposed | Claims row |
|---|---|---|---|---|---|
| T-1 | About: lead line, meta and share description (`about/index.html`) | Tagline (company mission) | "Help organizations and individuals build and run what matters with AI they can trust and evidence they can show." | Owner's choice: (a) keep it: it is the decided company mission (DEC-451), not a product headline; (b) "...with software they can trust and evidence they can show."; (c) "...with automation they can trust and evidence they can show." Recommended (b). (b) and (c) amend DEC-451 | Tierra CL-11 (DEC-451): the owner amends it, or keeps it |

Nothing else on tierra-llc.com names AI: home, Contact, 404 and the share image have no "AI".

## 3. Portal names (origin/af-next; each change agreed with b3 through its overlap check first)

No left-menu item, account-menu item or route name contains "AI" (`src/menu.ts`, `src/nav.ts`, `src/routes.ts`). The names that do are panel and tab names in `lib/messages/en.ts`:

| # | Key in `en.ts` | Kind | Current | Proposed | Claims row |
|---|---|---|---|---|---|
| P-1 | `generation.title` | Panel name | "Generate with AI" | "Draft with agents" | CL-40R, CL-46 |
| P-2 | pipeline `start.title` | Panel name | "Deliver with the AI pipeline" | "Deliver with the agent pipeline" | CL-40R, CL-50 |
| P-3 | insights `tabs.cost` | Tab (page) name | "AI use and cost" | "Usage and cost". The content keeps "AI" plainly, because usage and cost is a disclosure place | CL-49, CL-55 |
| P-4 | run console `actionsTitle` | Section name | "AI actions" | "Agent actions" | none (name) |
| P-5 | `kindsOfStep.agent`, `kindsOfStep.reviewed` | Labels | "AI agent", "AI agent with a second reviewer" | "Agent", "Agent with a second reviewer" | none (labels) |
| P-6 | delivery map `actors.ai` | Diagram label | "AI" | "Agent" | none (label) |

Each change also needs its web tests (`menu`, `nav`, plain-language, accessibility) and `npm test` plus the build in packages/web, run by b3.

New, through b3 (DEC-577 label):

| # | Place | Proposed | Claims row |
|---|---|---|---|
| P-7 | Each machine-made draft or recommendation: generation proposals under review, drafted delivery documents and release notes, the delivery-acceptance explanation | Short label, two states: "Drafted automatically · waiting for <name>" before the decision, "Drafted automatically · decided by <name>" after it | New row CL-62 (label wording), drafted by Kit Notices before it is built; EU wording after CQ-4 |
| P-8 | Help assistant | A one-line "automated assistant" disclosure in the assistant panel itself, in addition to the answer header "AI answer from Help. Check the sources.", which stays | CL-63 (drafted; usable once built and verified live; EU wording after CQ-4) |

## 4. Disclosure places that keep "AI" (no change)

| Site or Portal | Place | Why it stays |
|---|---|---|
| assuredforge.com | Trust > "AI use policy" (footer link, H1, H2s "Where AI may be used", "What AI never does", meta) | Policy text (legal) |
| assuredforge.com | Trust > "Subprocessors and model providers" (footer link, H1, meta) | Subprocessors |
| assuredforge.com | Trust Center description ("...AI use policy, subprocessors...") | Names the policy pages |
| assuredforge.com | Privacy, Product privacy notice, Acceptable use, Evaluation licence, Design partner agreement: body text on AI and models | Privacy and legal texts |
| assuredforge.com | Editions and FAQ model path (ON: "your own Anthropic API key"), FAQ cost line (CL-55), Security data flow (CL-47) | Model setup and cost, CL-48 naming scope |
| Portal | Insights > Usage and cost content: "AI spend and use", "AI model" column, sources ("AI on your own computer", "Test models (not real AI)") | Usage and cost |
| Portal | Run console cost tables ("Cost by AI model"), run evidence download text | Usage and cost; evidence of what ran |
| Portal | Help answer header: "AI answer from Help. Check the sources." plus the being-validated line | The one-line Help assistant disclosure |
| Portal | Help FAQ "Which AI source do I need?", Setup model source pages | Model setup |
| Portal | The "being validated" sentence (`AI_BEING_VALIDATED`) and step descriptions in the delivery map ("The AI writes the code...") | Body text and disclosure of who did what |

## 5. Website roadmap items 1 to 3 (from the brand note; proposals)

| # | Item | Proposal | Claims rows |
|---|---|---|---|
| 1 | "How AF works" (assuredforge.com) | New page `/product/how-it-works/`, replacing "AI-assisted delivery" (S-3). The lifecycle drawing: plan, build, review, decide, release, with signals back drawn dashed as planned; the two human decisions highlighted; each step marked Available today, Being validated or Planned. Product menu and footer link "How it works" | Existing: CL-03, CL-04, CL-08, CL-36, CL-40R, CL-46, CL-50. New rows needed: (a) the design step reviewed by a second agent; (b) "signals back" (Planned); (c) the drawing's caption |
| 2 | "Accounts and security" (assuredforge.com) | New page `/product/accounts-and-security/` under Product: sign-in, two-step verification, roles, signed approvals with step-up, the audit chain, My account. Linked from Security and the Trust Center | Existing: CL-05, CL-06, CL-12, CL-13, CL-14. New rows needed: (a) step-up before a signed decision; (b) My account (profile, sign-in and security, approver keys). Each "Supported" only with a recorded live run on the current kit (insider UAT evidence), otherwise "Being validated" |
| 3 | Vocabulary pass (both sites) | Sections 1 and 2 of this plan | As listed there |

## 6. Order of work after approval

1. Kit Notices drafts the new claims rows (CL-62, the item 1 and item 2 rows, the CL-WW-00 rewording) and the owner decides T-1.
2. Site Brand: S-1 to S-12 and T-1 on new branches from the released heads, then the release build, G-2, G-6 (both switch values), the font and accessibility checks, and a before-and-after page diff.
3. Pages for items 1 and 2 after their rows are in the register.
4. Portal P-1 to P-8: Site Brand prepares a branch from af-next only after b3's overlap check clears it, and hands it to b3. No push from this window.
5. Release: owner approval, as for 25 to 27 November.
