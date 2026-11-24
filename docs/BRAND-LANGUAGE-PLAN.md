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
