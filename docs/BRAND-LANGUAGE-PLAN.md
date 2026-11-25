# AF and Tierra brand language (DEC-637): plan, checks and proposed copy for the owner's review

Author: Burri (Site Brand window). 2026-11-24. Plan only (DEC-575); no page changed, nothing built or pushed. Branch
`brand-language-plan` from `dec577-copy-round` 6a88584 (local). Live site changes only after a preview and the owner's review (DEC-637).

**Source (corrected 2026-11-24):** the owner's brand-language direction given in this window on 2026-11-24. DEC-637 (Kit Notices,
held) records part of it: the positioning, the tagline, the one-liner, the four rules and the one-language rule. The vocabulary,
personality, visual feel, the Tierra line and themes, and the pillars with their states come from the same owner direction and are not
yet in a DEC.

Checked against: `design/BRAND-DIRECTION.md` (architecture main, blob 290bbc2), Tierra Design System README §3 "Voice and language",
DEC-577 (AI wording rule), DEC-592 (copy round, in tomorrow's release), the claims register (architecture main 41cbc9d1, 2026-11-24
18:28), DEC-608 (tierra-llc.com content refresh) and the released copy on `dec577-copy-round`.

## 1. Check results: each adopted element

| # | Element (owner direction) | Result | Record it meets or conflicts with | Recommendation |
|---|---|---|---|---|
| 1 | Positioning / hero B: "From Goals to Execution" / "Turn business objectives into governed, evidence-backed outcomes." | **Pass with two fixes** | DEC-577: no "AI" in headlines (pass). Design system §3: sentence case for headings. Brand note: "do not widen AF's product scope through marketing words" | Headline "From goals to execution" (sentence case). Lead needs a register row; "evidence-backed" rests on CL-03, CL-06; "business objectives" is wider than software delivery, so the next line names it: "Starting with software delivery." |
| 2 | AF tagline "Build. Govern. Operate." | **Conflict** | Brand note, words to avoid: "Operate, run agents in production: AF prepares; a person deploys. AF does not run customers' production systems." CL-08 records deployments; it does not operate them | Owner choice: (a) "Build. Govern. Prove." (all three true today: CL-08, CL-04/05, CL-06; recommended); (b) keep "Operate" and amend the brand note, with a register row defining "operate" as operating the delivery process, never the customer's production |
| 3 | One-liner "... turns business goals into governed, evidence-backed execution — combining skills, knowledge, policies and AI capabilities under human approval, starting with software delivery." | **Conflict (two parts)** | DEC-577: no "AI" in pitch material (one-liner is pitch). Claims: "skills" is roadmap (pillar 5 below), "knowledge" has no row; "combining" states them as present | Website and decks: "AssuredForge turns business goals into governed, evidence-backed execution under human approval, starting with software delivery." The full sentence with skills, knowledge and AI capabilities waits for the Skills pillar and a register row; "AI capabilities" only in disclosure places (DEC-577) |
| 4 | Vocabulary: capabilities not agents | **Conflict with records of yesterday** | DEC-592 reworded the site and the register to "agents" (CL-04, CL-40R, CL-46, CL-50, hold wording); 28 uses in 6 files on the release head. DEC-577 keeps origin disclosure honest | Split: headlines, page and section names, pillars use the new vocabulary; claim sentences that state who does the work and who approves keep "agents" (verbatim register text) until Kit Notices rewords those rows. Portal names unchanged (DEC-637) |
| 5 | Business operations not workflows; organizational expertise not prompts | **Pass** | No conflict; "prompts" appears only in privacy and Help texts, which are disclosure places and stay | Use in marketing and decks |
| 6 | Workforce coordination not orchestration; pillar "Workforce Governance" | **Conflict** | Brand note, words to avoid: "AI workforce, digital workforce: reads as replacing people"; visual themes: "drop the workforce framing" | Owner choice: (a) "Capability governance" and "capability coordination" (recommended; keeps the people-decide message); (b) keep "workforce" and amend the brand note |
| 7 | Never "autonomous execution"; use "governed execution" | **Pass** | Brand note already avoids "autonomous". Neither site uses "autonomous" or "workforce" today (checked) | Adopt |
| 8 | Personality: trusted, intelligent, disciplined, professional, innovative, operational; avoid playful, experimental, flashy, cryptic, overly futuristic | **Pass** | Matches the brand note's voice ("intelligent, calm, precise, trustworthy, operational, modern") | Merge the two lists |
| 9 | "Michigan-inspired" internal only | **Pass** | Brand note: Maize and Blue not used | Internal only; no site use |
| 10 | Visual feel: mission control, operations hub, engineering platform, executive dashboard; not chat app or prompt playground | **Partial conflict** | Brand note: avoid "mission control" and "real-time telemetry": AF does not watch production; "command center" only for the governance dashboard | Visual feel only, never as wording; scoped to AF's own runs, never the customer's production |
| 11 | Tierra line "Builds systems that transform expertise into scalable digital execution" | **Pass with fix** | No "AI" (DEC-577). DEC-608 (2) keeps the tierra-llc.com headline this round | Full sentence: "Tierra builds systems that turn expertise into scalable digital execution." Used as the Home lead, not the headline |
| 12 | Tierra themes: applied AI, enterprise execution, digital workforce technologies, governance-first innovation, engineering excellence, trusted automation | **Conflict (two themes)** | DEC-577 (no "AI" in taglines or headlines) for "applied AI"; brand note for "digital workforce" | Themes are internal and deck positioning, never site headlines. On the sites: "enterprise execution", "governance-first innovation", "engineering excellence", "trusted automation" |
| 13 | Six pillars | **Five listed** | | Which is the sixth? (Owner. The brand note's four, Plan, Build, Decide, Prove, may be the source of it, for example "Evidence and audit", CL-06) |

## 2. Pillars and their true-now status (draft rows for the claims register)

| Pillar (owner direction) | Owner's status | Register today | Proposed row state | On the site |
|---|---|---|---|---|
| Workforce Governance and Observability (name per decision 6) | True now | Governance: **Current** (CL-03, CL-04, CL-05, CL-06, CL-08). Seeing agent work (run console, agent action records): **Being validated** (CL-40R, CL-46, until the W8 model-path rehearsal is recorded) | Split: governance Current; observability of agent runs Being validated | Governance as fact; observability marked "being validated" until W8 is recorded. "Observability" means AF's own runs, never production (brand note) |
| Model Independence | True for supported sources | CL-WW-00 Decided (not tied to one provider); **no source is Supported yet**: Anthropic API and enterprise gateway Being validated (CL-48, CL-WW-02) | Being validated; no "all clouds" claim | "Being validated" until a source is Supported; then fact for that source only |
| Goal Alignment | Partial | No row. Brand note pillar Plan: requirements drawn from the product's Vision | New row, Being validated (partial: Vision to requirements; business goals beyond that not built) | Held, or "coming" |
| Cost Governance | Starting (OI-718) | CL-49 (run budget and monthly limit) Being validated; OI-718 open (provider, model, tier on every cost record) | Being validated for budgets; the rest Planned | "Coming" |
| Skills & Expertise | Roadmap | No row | Planned | Held |
| (sixth, to name) | | | | |

Publish as fact only what is Current: today, the governance part of the first pillar. Everything else shows "being validated" or
"coming", or is held (DEC-637 rule).

## 3. Proposed framework and design-system text (for Kit Notices to apply in the records)

These files live in the records tree, which this window never edits; the text below is the proposal.

**Brand note, "Positioning and headline":** replace the headline list with: positioning "From goals to execution"; lead "Turn business
objectives into governed, evidence-backed outcomes."; tagline per decision 2; one-liner per section 1 row 3; Tierra line per row 11.
**"Words to avoid":** add "autonomous execution" (use "governed execution"); keep or remove "Operate" and "workforce" per decisions 2
and 6; keep "mission control" for wording, allowed as visual feel (row 10). **Voice:** merge the personality lists (row 8). **Pillars:**
the five (six) pillars with their states (section 2), replacing Plan / Build / Decide / Prove or mapped onto them (decision 5).

**Design system README §3, a new table "Marketing vocabulary (websites, decks, documents; not Portal screen names)":** capabilities
(not agents) · business operations (not workflows) · organizational expertise (not prompts) · coordination (not orchestration) ·
governed execution (never autonomous execution). Plus one rule: "Claim sentences keep the register's wording; who does the work is
always disclosed."

## 4. Proposed copy diff (preview branch only; live after the owner's review)

### assuredforge.com (on top of the release head, after the release)

| File | Before | After |
|---|---|---|
| `components/AiWording.tsx` heroTitle (switch off) | "Governed software delivery, where only people approve." | "From goals to execution" |
| same (switch on) | "Governed software delivery, where agents prepare and people decide." | "From goals to execution" |
| heroLead (both) | current lead | "Turn business objectives into governed, evidence-backed outcomes, starting with software delivery." (new row) then the existing switch sentence |
| `pages/index.tsx` meta description | "Governed software delivery with traceability, ..." | One-liner (row 3, website form) |
| `pages/platform.tsx:31` section title | "Agents prepare, people decide" | "Governed execution, human approval" |
| `pages/platform.tsx:35`, `components/Layout.tsx:22`, `pages/product/ai-assisted-delivery.tsx:9-10` page name | "Agent-prepared delivery" | "Governed execution" (address unchanged) |
| `components/AiWording.tsx` how / flow step title (switch on) | "Agents build" | "Capabilities build" |
| Footer brand line (new) | | Tagline per decision 2 |
| Home pillars section (new) | | The pillars from section 2, each with its state badge (Available today / Being validated / Planned), as the Works with page shows states |
| Unchanged | FAQ "Do agents approve releases?", "Are agents part of AssuredForge today?"; CL-04, CL-40R, CL-46, CL-50 sentences; the hold wording; AI use policy, privacy, subprocessors | Claim sentences and disclosure places (row 4) |

### tierra-llc.com (folded into the approved content refresh, DEC-608: one preview, one release)

| File | Before | After |
|---|---|---|
| `index.html` lead | "Tierra LLC builds software that makes decisions visible, work accountable and results provable, without unnecessary complexity." | "Tierra builds systems that turn expertise into scalable digital execution." |
| `index.html` product card | CL-70 wording (Draft) | One-liner (website form) and the tagline |
| `about/index.html` How we work | Three principles (+ CL-71) | Unchanged, plus the themes allowed on the sites (row 12) as one line |
| Headline, mission | Kept (DEC-608 (2), DEC-579 (2)) | Unchanged |

## 5. Rows Kit Notices adds first (Draft)

Hero lead; one-liner (website form); tagline (if "Prove", rests on CL-06); Tierra line; each pillar (section 2), with its state.
If the owner keeps "agents" out of claim sentences too, Kit Notices rewords CL-04, CL-40R, CL-46, CL-50 and the hold wording again.

## 6. Order, preview, effort

1. Tomorrow's release ships the approved DEC-592 copy unchanged (recommended: its gates and checks are set; decision 7).
2. Owner decisions (section 7) and Kit Notices' rows.
3. Preview branch from the released `main`; the copy diff above; release build, AI switch check, fonts, accessibility runs (light and
   dark, 1440 and 390 px, 320 px overflow); Draft rows stay behind pending markers, so a release build refuses them.
4. Screenshots and the diff to the owner for review; live release as its own owner gate.

Effort: assuredforge.com about 4 hours; tierra-llc.com about 1 hour on top of the content refresh; framework text for Kit Notices about
1 hour. Routine copy work (DEC-428: Sonnet).

## 7. Decisions for the owner

1. Tagline: "Build. Govern. Prove." (recommended, true today) or "Build. Govern. Operate." with the brand note amended.
2. "Workforce": "capability governance" and "capability coordination" (recommended) or keep "workforce" and amend the brand note.
3. One-liner on the sites: the short website form now (recommended); the full form when Skills has a row.
4. "Capabilities not agents": headlines and names only, claim sentences keep "agents" (recommended), or reword the register rows too.
5. The sixth pillar, and whether the pillars replace or map onto Plan / Build / Decide / Prove.
6. Pillars on the site: the governance part as fact, the rest with state badges (recommended), or held until more are true.
7. Tomorrow's release: ship the approved copy unchanged and apply this as the next preview round (recommended), or hold the release.

## 8. Owner decisions (DEC-637, amended; records ffd6906f, held) and the preview copy

**Decided:** (1) tagline "Build. Govern. Prove."; (2) "capability governance" and "capability coordination" instead of "workforce"
(until FD-93); (3) the short one-liner on the sites now, the full form when Skills is more than Planned; (4) "capabilities" in headlines
and names only, claim sentences keep "agents" (DEC-592 stands); (5) six pillars mapped onto Plan / Build / Decide / Prove, not replacing
them; (6) Governance as fact, the others with their state labels; (7) the release ships the DEC-592 copy unchanged; this is the next
preview round. Rows CL-74 to CL-85, all Draft until this preview round passes the owner's review.

**Preview copy on this branch** (wording verbatim from CL-74 to CL-85; one source, `components/Brand.tsx`):

| Place | Change | Row |
|---|---|---|
| Home hero | Headline "From goals to execution"; lead "Turn business objectives into governed, evidence-backed outcomes, starting with software delivery."; the existing switch lead stays under it | CL-74, CL-75 |
| Home meta description | One-liner | CL-77 |
| Home, new section "Plan, build, decide, prove" | Plan: Goal alignment (Being validated). Build: Skills and expertise (Planned), Model independence (Being validated). Decide: Governance (Available today), Cost governance (Being validated). Prove: Observability (Being validated) | CL-79 to CL-84 |
| Every page footer | "Build. Govern. Prove." under the wordmark | CL-76 |
| Footer, Platform link and section title, product page title | "Agent-prepared delivery" → "Governed execution"; "Agents prepare, people decide" → "Governed execution, human approval" | CL-85 |
| How it works step title (AI switch on) | "Agents build" → "Governed build" (pre-review tweak 2) | CL-85 |
| Unchanged | Claim sentences with "agents", FAQ, hold wording, disclosure pages; tierra-llc.com (CL-78 goes with the content refresh, DEC-608) | |

WR-01: the Observability, Cost governance and Model independence sentences (CL-81, CL-83, CL-84) state AI facts, so they show only with
the AI switch on; with it off (today) those three pillars show their name and state only. The AI switch check found this on the first
build and passes now.

**Checks on the preview build (2026-11-24):** preview build passed (34 pages; token, plain-language and site checks); AI switch check
passed for both values; fonts 0 problems; accessibility (axe, WCAG 2.2 AA) on Home, Platform and the Governed execution page, light and
dark at 1440 and 390 px, plus 320 px overflow: 15 runs, 0 problems. The release build (`SITE_PUBLISH=1`) **refuses** every page, as
intended: each carries the pending marker for CL-76 in the footer, and Home also for CL-74, CL-75, CL-77 and CL-79 to CL-85. Home
screenshots (light and dark, 1440 and 390 px) were taken for the review and are sent on request; they are not committed.

**For the owner at the preview review:** the pillar-to-step mapping (Goal alignment to Plan; Skills and Model independence to Build;
Governance to Decide, with its "recorded and verifiable" half also proving; Cost governance to Decide; Observability to Prove); the
three switch-dependent pillars showing no sentence while the AI switch is off; then the rows move from Draft and the markers come out.

## 9. Pre-review tweaks (owner, 2026-11-24)

1. "Plan, build, decide, prove": with the AI switch off, only "Available today" pillars are full cards (today: Governance, CL-79). The
   other five are one compact line beneath, by state label: "Being validated: Goal alignment, Model independence, Cost governance,
   Observability" and "Planned: Skills and expertise". No card appears without a sentence. With the switch on, the six cards show by
   step as before.
2. The step title "Capabilities build" is now "Governed build" (switch on only; short enough for the flow drawing; vocabulary from CL-85).

**Checks after the tweaks:** preview build passed (34 pages); AI switch check passed both ways; fonts 0 problems; accessibility (axe,
WCAG 2.2 AA) on Home, Platform and Governed execution at 1440 and 390 px, light and dark, plus 320 px overflow: 15 runs, 0 problems
with the switch off and 15 runs, 0 problems with it on. Screenshots refreshed for both switch values (not committed). The release build
still refuses through the Draft markers.

**Seen in the screenshots, for the review:** (a) Home also has the older four tiles "Govern / Trace / Prove / Build" further down, so
it now shows two pillar sets; one of them could go, or the tiles could become the step headings. (b) With the switch off, the one
Governance card sits alone in a four-column row at 1440 px, leaving the rest of the row empty.

## 10. Layout changes before the 08:30 review (owner, 2026-11-24)

1. **One set of pillars.** The older Home tiles "Govern / Trace / Prove / Build" are removed. Their sentences are not needed on Home by
   the claims register: CL-03's home wording (DEC-235) stays in "Who approved what, and why?", CL-06 and CL-07 stay in the proof strip,
   CL-04 in "People decide", the hold wording (CL-40R, CL-46) in "People decide"; CL-05 and CL-13 stay on Governance and approvals. Their
   "Read more" links move into the pillar section as one line: Governance and approvals · Traceability · Audit and evidence · Governed
   execution. `AI.deliverTile` is no longer shown on Home.
2. **No lone card.** With the AI switch off, the Governance card and the two state lines (Being validated; Planned) sit side by side
   from desktop width and stack on phones. With the switch on, the six cards by step stay.

**Checks:** preview build passed (34 pages); AI switch check passed both ways; fonts 0 problems; accessibility (axe, WCAG 2.2 AA) on
Home, Platform and Governed execution at 1440 and 390 px, light and dark, plus 320 px overflow: 15 runs, 0 problems with the switch off
and 15 runs, 0 problems with it on. Screenshots refreshed for both switch values (not committed). The release build still refuses
through the Draft markers.
