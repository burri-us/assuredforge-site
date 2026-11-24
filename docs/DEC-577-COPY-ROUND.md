# DEC-577 copy round: drafted changes (local only, plan for the owner's review)

| Field | Value |
|---|---|
| Date | 2026-11-23 |
| Asked | Remove "AI" from headline and body copy everywhere except the admin AI-model setup screens; check against CL-62 to CL-68 and `design/BRAND-DIRECTION.md` |
| Branches (local, not pushed) | assuredforge.com: `dec577-copy-round` from w11-site-redesign 020dae4 (this file); tierra-llc.com: `dec577-copy-round` 6f8008f from ds-6920 763dbfd; Portal: `af-sb-577-names` 5112e245 from origin/af-next ebf68af8 (worktree `lane-sb-577`, for b3's overlap check) |
| Checks | assuredforge.com: release build (SITE_PUBLISH=1) passed, 34 pages, 0 markers; AI switch check passed for both values; fonts 0 problems. tierra-llc.com: `tools/check.py` 5 pages, 0 problems. Portal: `npm test` 832 pass, 0 fail; build with CSP, accessibility and plain-language checks passed (71 pages) |

## 1. assuredforge.com

| File | Before | After |
|---|---|---|
| `pages/index.tsx` tile | "Deliver with AI" | "Build" (brand pillar) |
| `pages/index.tsx` (switch on only) | "AI makes that harder." | "Agent-built work makes that harder." |
| `pages/index.tsx` Questions | "Answers on the desktop edition, AI, data and..." | "Answers on the desktop edition, agents and models, data and..." |
| `pages/platform.tsx` section title | on: "AI-assisted delivery"; off: "AI assistance" | "Agents prepare, people decide" (both values) |
| `pages/product/ai-assisted-delivery.tsx` title, H1 | "AI-assisted delivery" | "Agent-prepared delivery" (owner's interim name; "How AF works" is on `dec577-pages-draft`) |
| same, description | "How AI assistance fits inside AssuredForge's governance: AI prepares and recommends, ..." | "How agents fit inside AssuredForge's governance: agents prepare and recommend, ..." |
| same, rule | "Automation and AI may recommend and prepare; ..." | "Automation and agents may recommend and prepare; ..." |
| same, off | "AI-assisted planning and delivery is being validated ..." | "Agent-assisted planning and delivery is being validated ..." |
| same, off | "... the rules for when AI assistance becomes available." | "... the rules for when agent assistance becomes available." |
| `pages/faq.tsx` | "Does AI approve releases?"; "... automation and AI never approve, ..." | "Do agents approve releases?"; "... automation and agents never approve, ..." |
| `pages/faq.tsx` | "Is AI part of AssuredForge today?" | "Are agents part of AssuredForge today?" |
| `pages/faq.tsx` description | "Answers about AI, data, ..." | "Answers about agents and models, data, ..." |
| `components/Layout.tsx` footer | "AI-assisted delivery" | "Agent-prepared delivery" |
| `components/Registered.ts` Works with | "Not tied to one technology or one AI provider." (lead and description) | "... one model provider." (CL-WW-00 as reworded, DEC-579 (2b)) |
| `components/Registered.ts` group (on) | "AI model sources" | "Model sources" |
| `components/AiWording.tsx` (off, hold wording) | homeBlock, deliverTile, productLead: "AI-assisted planning and delivery is being validated ..." | "Agent-assisted planning and delivery is being validated ..." |
| `components/AiWording.tsx` (on) heroTitle | "Governed software delivery, with AI that never approves." | "Governed software delivery, where agents prepare and people decide." |
| same (on) heroLead | "AssuredForge runs AI-assisted delivery under your rules: ..." | "AssuredForge runs agent-assisted delivery under your rules: ..." |
| same (on) homeBlock, productLead | "AI-assisted planning and delivery ... and AI never approves, accepts risk or authorizes a release." | "Agent-assisted planning and delivery ... and agents never approve, accept risk or authorize a release." |
| same (on) deliverTile, productPoints | "AI-assisted planning and delivery runs on your own PC ..." | "Agent-assisted planning and delivery runs on your own PC ..." |
| same (on) proof4 | "Use your own AI model key" | "Use your own model key" |
| same (on) how | "AI builds" / "AI-assisted planning and delivery prepares ..." / "Each AI-built delivery ..." | "Agents build" / "Agent-assisted planning and delivery prepares ..." / "Each agent-built delivery ..." |
| same (on) flow, flowAlt | "AI builds"; "... AI builds the work, ..." | "Agents build"; "... agents build the work, ..." |

## 2. tierra-llc.com

| File | Before | After |
|---|---|---|
| `about/index.html` lead, meta and share description | "... build and run what matters with AI they can trust and evidence they can show." | "... with software they can trust and evidence they can show." (T-1 (b), CL-11 amended, DEC-579 (2)) |

## 3. Portal (`packages/web/lib/messages/en.ts`; tests follow)

| Key | Before | After |
|---|---|---|
| `generation.title` | "Generate with AI" | "Draft with agents" |
| pipeline `start.title` | "Deliver with the AI pipeline" | "Deliver with the agent pipeline" |
| insights `tabs.cost` | "AI use and cost" | "Usage and cost" |
| run console `actionsTitle` | "AI actions" | "Agent actions" |
| `kindsOfStep` | "AI agent", "AI agent with a second reviewer" | "Agent", "Agent with a second reviewer" |
| delivery map `actors.ai` | "AI" | "Agent" |

Tests changed with them: `test/insights.test.mjs` (tab name, two assertions) and `test/runsummary.test.mjs` (section name).

## 4a. Owner decisions (2026-11-23)

1. Keep "AI" where it discloses that AI is used: the AI use policy page and its links, and the Security, subprocessors, privacy and acceptable-use pages. Also keep the Help FAQ "Which AI source do I need?" (model setup). Usage and cost figures may drop "AI" only where the meaning stays clear. The 39 Portal lines are drafted separately for review: `docs/DEC-577-PORTAL-BODY.md`.
2. CL-04 reads "Automation, including agents, may recommend ..." (product page; FAQ: "automation, including agents, never approves, accepts risk or authorizes a release.").
3. "Agent-built work makes that harder." is dropped.
4. Kit Notices rewords CL-04, CL-19, CL-40R, CL-46, CL-50 and the hold wording.
5. P-7 and P-8 get their own plan later. The Portal branch waits for b3's overlap check after rc-next. The budget remedy now says "(Run, Agent actions)" to match P-4 (3fc7bce9).

Nothing is pushed until the owner approves the final diff.

## 4. Unsure: for the owner (answered in 4a)

1. **Scope.** "Everywhere except the admin AI-model setup screens" is wider than DEC-577, the brand note and DEC-579. Those keep "AI" in privacy, subprocessors and legal texts, on usage and cost pages, and in the Help answer header. I left these unchanged. Which way?
   - assuredforge.com: the AI use policy page (name, headings "Where AI may be used", "What AI never does", "AI never approves." bullets, review duties); its footer link and Trust Center entry; the Security line naming it; the Subprocessors page; both privacy notices; Acceptable use.
   - Portal: usage and cost figures ("AI spend and use", "AI model", "2 AI calls"); the Help answer header (the owner kept it, DEC-579 (2)); the Help FAQ "Which AI source do I need?"; `AI_BEING_VALIDATED` and the delivery-map step descriptions ("The AI writes the code ..."); about 35 body lines in `en.ts`; the Help guides (`help/how-to.md` 21 hits).
   - Changing the legal and policy texts also needs counsel (CQ-4, P2-04).
2. **Claims wording.** The register holds these wordings verbatim with "AI": CL-04, CL-19, CL-40R, CL-46, CL-50 and the hold wording (DEC-439 O-4). The drafts swap "AI" for "agent(s)". Kit Notices would amend these rows before release. CL-62 to CL-68 are not used: they are Draft until built or evidenced, and the two new pages are on `dec577-pages-draft`.
3. **Meaning of "agents".** "Automation and agents may recommend ..." (CL-04) may read narrower than "AI". Alternative: "Automation, including agents, may recommend ...".
4. **New sentence without a row.** "Agent-built work makes that harder." (switch on only). Alternative: drop the sentence.
5. **Address.** The page keeps the address `/product/ai-assisted-delivery/`. Moving it waits for the fold into "How AF works" (S-3), with the old address forwarding.
6. **Portal labels P-7 and P-8.** The two-state label and the assistant's disclosure line are new builds (CL-62, CL-63), not removals. They are not in this draft and need their own lane plan.
7. **Same title for both switch values.** The platform section title no longer follows the switch. Its text still does.
