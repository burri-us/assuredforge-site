# SB2: site content from the claims register (assuredforge.com and tierra-llc.com)

Author: Site Brand window. 2026-11-25. Plan only (DEC-575, DEC-662); nothing built, nothing pushed. Branch `sb2-content-plan` from
released `main` 929ea361 (local). For the owner, through Kit Notices.

**Task (DEC-662, OI-775, DAG SB2, set 2, after SB1):**
1. Both sites get current-state content from the claims register.
2. Future-state content is written now, each piece tied to its claims row and held by the "claim pending" gate, so it ships in the
   next site release once its row is Available.
3. No content without a claims row.
4. Preview builds only; the owner reviews before any live release.

**Inputs:**
- Claims register `research/design-partners/materials/CLAIMS-REGISTER.md` on architecture main 9ad4c148 (read 2026-11-25 09:10;
  not the stale AI-Factory copies).
- DEC-655 (licence options, public download page, privacy, minimum PC requirements).
- DEC-656 (FD-12, learners).
- DEC-664 (sign-in only on assuredforge.com and the Portal).
- The approved plans this one absorbs: DEC-608 (tierra content refresh, `CONTENT-REFRESH-PLAN.md` eb945ec) and DEC-649 (brand
  language preview, `docs/BRAND-LANGUAGE-PLAN.md` 0ee9311). SB2 replaces their separate builds: one content round, one preview, one
  release decision per site.

## 1. What "current state" means on the sites (decision 1)

DEC-662 says current-state content uses rows in state **Current** only. The register has six states (0.4 update 7, DEC-518):

| State | Example rows | What the live sites do with them today |
|---|---|---|
| Current | CL-03..CL-13, CL-16, CL-30..CL-39 | Stated as fact |
| Decided / Approved wording | CL-01, CL-23..CL-29, CL-51, CL-52, CL-55, CL-57, CL-IND-00..08, CL-WW-00..03 | Stated as commitments, with their qualifier |
| Being validated | CL-19, CL-46..CL-50, CL-53, CL-54 | Shown with "being validated" (register rule, DEC-439 O-4) |
| Planned | CL-17 (part), CL-20 (hosted), CL-56 (Mac) | Shown with "planned" |
| Draft | CL-62..CL-85 | Not used |
| Withdrawn | CL-40 | Not used |

Read literally, "Current only" would remove the following from the live site:
- the editions sentence (CL-51, Decided);
- the system requirements (CL-54, Being validated);
- "a Mac version is planned" (CL-56);
- the design-partner program (CL-23..CL-27);
- the industries entries (CL-IND, Decided);
- the Works with badges.

**Recommended reading:**
- **Fact sentences** ("is", "does", "available today") come only from **Current** rows.
- **Commitments** come from **Decided / Approved wording** rows, with their qualifier.
- **Being validated** and **Planned** rows appear only as labelled state lines ("being validated", "planned"), never as fact.
- **Draft** rows stay held.

Every visible sentence still cites a row, so DEC-662's "no content without a row" holds. The alternative (strict) removes the
sentences above until their rows move to Current.

## 2. The gate: how held content ships once its row is Current

Today a held sentence carries `pending("CL-xx …")` (`components/Registered.ts`). The release build (`SITE_PUBLISH=1`, `scripts/check.mjs`)
refuses any page that shows one, so held content blocks a release until someone edits it out by hand. To make it ship by itself:

1. **A state snapshot in the site repository:** `content/claims-state.json`, one entry per row the site uses:
   `{ "CL-82": { "state": "Planned", "register": "<architecture commit>" } }`. It holds no wording; the wording stays in the components,
   each block naming its row.
2. **Refreshing the snapshot:** `scripts/claims-sync.mjs` reads the register from an architecture commit given on the command line
   (git `show`, read only). It maps each row's State cell to one of the six states and writes the snapshot.
   - A row whose cell starts with "**Draft" counts as Draft whatever else it says (CL-79 is "Current … Draft").
   - A cell the script cannot map fails the run and names the row; it never guesses.
   - The refresh is its own local commit; its diff is the list of content that will appear or disappear.
3. **One component, `<Claim row="CL-82" when="Current">…</Claim>`** (and `ClaimText` for strings in metadata), with three outcomes:
   - the row's state meets `when`: renders the block;
   - preview build (`AF_CLAIMS_PREVIEW=1`): renders the block with a visible "held: CL-82 (Planned)" marker, so the owner sees
     future content in place;
   - publish build: renders nothing.

   A held block therefore no longer blocks the release; it is simply absent.
4. **Publish check:**
   - `check.mjs` fails if a page names a row that is missing from the snapshot, or if the snapshot is older than the register commit
     the release package names.
   - The existing `CLAIM-` and `pending` refusal stays for anything not yet converted.
5. **Release step (RELEASE-PACKAGE §2, new G-9):** refresh the snapshot from architecture main at release time and put its diff
   ("appears: …, disappears: …") in the release notes. The owner's release approval then covers exactly the content that changes
   state. Nothing goes live between releases: a row moving to Current changes nothing until the next approved release.

The AI switch (`AI_DELIVERY_AVAILABLE`, WR-01) stays as it is. AI blocks need both the switch and their row's state.

## 3. Current-state content, by page

The released pages (929ea361) already cite their rows inline. SB2 changes are listed below; unchanged pages are not listed.

**assuredforge.com**

| Page / section | Content | Rows | Held until |
|---|---|---|---|
| Home hero, meta description, footer tagline | "From goals to execution", hero lead, one-liner, "Build. Govern. Prove." (DEC-649 preview, branch `brand-language-plan` 0ee9311) | CL-74, CL-75, CL-76, CL-77 | Draft → owner's preview review |
| Share image `og.png` and `og:image:alt` (Layout.tsx:104) | New image and alt from the new headline and tagline; today both carry CL-01 "Build anywhere…" (assessor finding 2026-11-25) | CL-74, CL-76 (CL-01 retired with them) | Same as hero |
| Home pillars "Plan, build, decide, prove" | Governance as fact; Goal alignment, Observability, Cost governance, Model independence with state labels; Skills "planned" | CL-79 (fact); CL-80, CL-81, CL-83, CL-84 (being validated); CL-82 (planned) | Draft → preview review; AI-fact text also needs the switch |
| Who it is for (Home, Individuals) | Add learners (individuals learning the SDLC) to the desktop audience line | **New row needed** (DEC-656 / FD-12 is Future Discovery, not a claim) | Row from Kit |
| Editions and deployment | Unchanged (CL-35, CL-51, CL-54, CL-56, CL-57) | as listed | none |
| Trust: "No cookies, no tracking, no analytics on Tierra's sites" | One line on Security or Privacy | CL-73 | Draft; needs the live Set-Cookie check of both sites (DEC-608 plan §5) |

**tierra-llc.com** (absorbs the DEC-608 plan; no sign-in anywhere, DEC-664, OQ-029)

| Page / section | Content | Rows | Held until |
|---|---|---|---|
| Home lead | "Tierra builds systems that turn expertise into scalable digital execution." (headline stays, DEC-608 (2)) | CL-78 | Draft → preview review |
| Home product card | "named people make every governed decision, and every governed decision is recorded and verifiable." | CL-70 | Draft (DEC-608) |
| Home trust line | No cookies or tracking; desktop records stay on your PC | CL-69 (second half inherits CL-53, being validated) | Draft; CL-53 shown as "being validated" until W8 |
| About principles | "Prove: …"; privacy principle narrowed to the desktop edition | CL-71, CL-72 | Draft |
| New Trust page | The sections that need no counsel (DEC-608 (3)) | CL-73 | Draft; Set-Cookie check |

tierra-llc.com is plain HTML with no build step, so the gate there is simpler:
- each held block sits between `<!-- claim CL-xx -->` and `<!-- /claim -->`;
- `tools/check.py --publish` removes any block whose row is not Current in the same snapshot format (`claims-state.json` beside the
  pages, excluded by `_config.yml`) and refuses unknown rows;
- the preview shows the markers.

## 4. Future-state content, written now and held

| Topic | Content to write | Rows | State today | Ships when |
|---|---|---|---|---|
| Skills and expertise | Home pillar text, a Platform section "Organizational expertise" | CL-82 | Planned | CL-82 Current |
| Value statement (full one-liner) | "…combining skills, knowledge, policies and capabilities under human approval…" | CL-77 full form (held by CL-82, DEC-637 (3)(c)) | Draft / held | CL-82 past Planned and CL-77 approved |
| Cost governance | Pillar text; a Platform paragraph on run budgets and monthly limits | CL-83, CL-49 | Being validated | Rows Current and the AI switch on |
| Observability, model independence | Pillar texts | CL-81, CL-84 | Being validated | Same |
| Hosted edition | Editions page section "Hosted edition" in present tense; Home audience line for organizations | CL-20, CL-35, CL-46 (hosted part), CL-51, CL-57 | Planned | Hosted rows Current (go-live, DEC-631) |
| Learner routes (DEC-656) | Individuals page section "Learning with AssuredForge": own student cloud, campus editions, later a free tier | **New rows** (one per route) | none yet | Rows created and Current |
| Licence options, download page, privacy summary, minimum PC requirements (DEC-655) | Plans section (Free individual or student, Team, Enterprise); public `/download/` page; plain privacy block; requirements before download | **New rows** (OI-755, OI-756); requirements reuse CL-54 | none yet | Rows Current and commercialization (DEC-631). The register's must-not row "Self-service sign-up, trials or a customer portal" must be revised first |
| Docker Desktop licence note (DEC-655) | One line on Editions: whether Docker Desktop's terms allow the user's case | **New row** after the licence check | none yet | Row Current |
| Sign-in and account links | SB1's chooser and footer group (assuredforge.com only, DEC-664) | SB1's three rows | not yet created | SB1's go-live (OI-694) |

Writing them now means the wording goes to Kit Notices as row proposals in the same batch. A block is written only once its row exists
(at least as Draft or Planned): DEC-662 "no content without a row".

## 5. Rows requested from Kit Notices (one batch, all Draft)

1. **Learners as an audience:** one line for the desktop audience (DEC-656).
2. **Learner routes:** three rows (own student cloud; campus editions; Tierra-hosted free tier), Planned.
3. **Licence options:** one row (DEC-655, OI-755).
4. **Public download page:** one row covering the page and its privacy summary (OI-756).
5. **Docker Desktop licence note:** one row, after the licence check.
6. **SB1's three rows** (already planned): chooser hosted part, chooser desktop part, Create account.
7. **Mapping table:** a mapping for rows whose State cell mixes states (CL-15, CL-17, CL-20, CL-35, CL-46, CL-79), so the sync
   script maps each to one state without guessing.

## 6. Checks (each preview round)

- Release build with the snapshot: every visible sentence cites a row in a state its wording allows.
- `check:switch` both values; token, font, audit and plain-language checks.
- The DEC-577 "AI" placement rule (no "AI" in headlines, taglines or navigation).
- axe at 1440 and 390 px, light and dark, plus 320 px overflow, on the changed pages of both sites.
- **Two preview builds:**
  - "today": only rows as they stand;
  - "all held shown": `AF_CLAIMS_PREVIEW=1`, every held block visible with its marker. The owner reviews both.
- **Guard tests:**
  - a publish build with a row moved to Planned drops its block;
  - an unknown row fails;
  - a stale snapshot fails.

## 7. Effort and order

| Step | Effort |
|---|---|
| Rows from Kit Notices (section 5) | Kit Notices |
| Gate: snapshot, sync script, `Claim` component, publish checks and tests (assuredforge.com) | 4 hours |
| Gate on tierra-llc.com (`check.py` blocks and snapshot) | 2 hours |
| Current-state content (section 3), folding in the DEC-649 branch and the DEC-608 plan | 3 hours |
| Future-state content (section 4), once rows exist | 3 hours |
| New share image and alt text | 1 hour |
| Checks, two preview builds per site, screenshots for the owner | 2 hours |

About two days (DEC-428: Sonnet for content, Opus for the gate scripts). Order: after SB1 (DAG). Local branches only. Each site's
release is its own owner decision.

## 8. Decisions for the owner

1. **"Current only":**
   - (recommended) facts from Current rows; commitments from Decided / Approved wording rows; Being validated and Planned only as
     labelled state lines; Draft held.
   - Or strict Current only, which removes the editions, requirements, program and industries sentences until their rows move.
2. **Gate:**
   - (recommended) a state snapshot refreshed at each release, with its diff in the release notes, so held content appears only in a
     release the owner approves.
   - Or read the register live at every build. Not recommended: a build would change without a commit.
3. **One content round:**
   - (recommended) SB2 absorbs the DEC-608 tierra refresh and the DEC-649 brand preview: one preview, then one release decision per
     site.
   - Or keep them as three separate releases.
4. **The share image and its alt text** (old line, CL-01):
   - (recommended) replace them with the new headline in the SB2 release, retiring CL-01 with CL-74 and CL-76.
   - Or keep CL-01 for the image.
