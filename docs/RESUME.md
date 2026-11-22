# Resume: assuredforge.com site work (for the next window, after the W8 dry run)

Author: Burri. Written 2026-11-21, when this window was archived. It is the starting point; STATUS.md stays the running record.

## 1. Where things are

| Item | State |
|---|---|
| Branch | `w11-site-redesign` in worktree `C:\dev\AssuredForge\site-w11`. Not pushed: 61 commits ahead of `origin/main` and 2 behind (PR #8). Merge base 540620e |
| Live site | `main` at 38082b2 (PR #8, OI-619 Windchill sentence removed). Deployed 2026-11-21 (run 44919413386) and verified against a saved copy. `site.json` there has indexing **on** |
| Other site worktrees | `C:\dev\AssuredForge\assuredforge-site` (main, 540620e locally, behind origin/main; clean); `site-legal-review` (033f921, clean); `site-wave1` (`docs-wave1`, 3872505, clean). Not used by this work |
| Tierra site | `C:\dev\AssuredForge\tierra-site-p2` (branch `w12-phase2`, 744b56f, live, clean). Nothing pending: the accessibility re-scan passed with no change |
| Previews | Ports 4174 and 4175 free. Local tooling: `C:\dev\AssuredForge\ds-previews\a11y` (axe scan, keyboard walk, timing scripts and a gzip static server `serve.cjs`) |

## 2. Done and unpushed (on `w11-site-redesign`; latest first)

- **Records:** 2a4dc60 and 168fa0c (status: partner-materials checks).
- b1d2d09: release package (`docs/RELEASE-PACKAGE.md`) and `scripts/live-check.mjs` (read-only save, compare, diff).
- 4b65e8a: Works with "Supported" for the Anthropic API key, prepared behind `ANTHROPIC_SUPPORTED_SINCE` (null, no visible change).
- 7bad68e: design-partner agreement summary says "organizations" (DEC-475 (a)); counsel list.
- 4fc68da: no client script on any page; pages 96 to 119 KB.
- f0ae0b7, 4697624, dd6fcb0: OI-621 fixed (the open phone menu pushes the page down); live checked, unaffected.
- fba161b: accessibility and performance findings (`docs/A11Y-PERF-FINDINGS.md`).
- 0989652: hosted-edition guardrails sentence restored on Editions and deployment; licence text wraps on /third-party-notices/.
- b41a2a6: Regulated page folded into Industries (forwarding page); CL-30 on Platform (DEC-472 (2)).
- 8e90724: Industries and Works with filled from claims register 0.4 (DEC-470).
- **Earlier in the branch:**
  - The W11 redesign itself.
  - Plain-language decisions (f841d20; DEC-469, 764745e).
  - The Industries and Works with structure (c21a653).
  - The W8 media list, the RAM marker and the X8 shot list draft.

## 3. Still open

1. **OI-608 (blocks publication):** the W8 media and the RAM figures.
   - Media: 15 slots on 6 pages, captured after the dry run, light only, captions only (`docs/W8-MEDIA-LIST.md`, §6 lists the
     site changes, including the `media/` allow-list line in `scripts/check.mjs`).
   - RAM: set `RAM_W8` in `components/Measured.tsx`. The site check then requires the same figures on the FAQ and on Editions
     and deployment.
   - Until both are in, `SITE_PUBLISH=1 npm run build` fails on 14 markers on 7 pages.
2. **The release,** per `docs/RELEASE-PACKAGE.md`: go/no-go G-1 to G-7, then the deploy steps in §3. Above all:
   - G-3: set `site.json` indexing back to **true** before the merge, or the live site leaves search engines.
   - G-4: add `SITE_PUBLISH: "1"` to the pages workflow, so placeholders can't deploy.
   - Merge `origin/main` into the branch first: the one conflict is `pages/manufacturing.tsx`; keep the branch's forwarding page.
3. **After Monday's W8 model-path rehearsal passes, and only with owner approval:**
   - Set `ANTHROPIC_SUPPORTED_SINCE` in `components/Registered.ts` (RELEASE-PACKAGE §4). Turning on `AI_DELIVERY_AVAILABLE` is a
     separate approval.
   - The register (CL-48, CL-WW-02) follows via Kit Notices.
4. **Waiting on others:**
   - Counsel review of the interim legal text (`COUNSEL-LIST.md`).
   - A proposed register row for the hosted-edition guardrails sentence (Kit Notices).
   - CL-47 to align with CL-53's feedback clause: done in the register (DEC-477 (3)); the site change is item 5 below.
5. **Owner-approved wording changes (DEC-478 (c)); apply before the release.** Approved by the owner; the counsel package lists them.
   - Privacy wording, add "or feedback with files you attach" (CL-47 as amended, CL-53):
     - `pages/trust/product-privacy.tsx` "Your data stays on your machine": "...and prompts or project content only in a support bundle you
       choose to send." becomes "...and prompts or project content only in what you choose to send us: a support bundle, or feedback with
       files you attach."
     - Held wording (AI switch on) in `pages/trust/product-privacy.tsx`, `pages/trust/ai-use-policy.tsx` and `components/AiWording.tsx`:
       "...unless you send us a support bundle that includes them." becomes "...unless you send us a support bundle, or feedback with
       files you attach, that includes them." (the CL-47 register text).
     - Check: `grep -rn "support bundle" pages components` shows no remaining sentence without the feedback clause; `COUNSEL-LIST.md`
       quotes the old held text, so update that quote too.
   - `pages/trust/subprocessors.tsx`, held AI wording ("Desktop edition" section, `AI.available` branch): drop the sentence that names a
     model vendor; keep "If you turn on model execution, the provider of the model key you enter works under your own agreement with it
     and is not Tierra's subprocessor." (CL-48 naming scope).
   - Then run the site check and build; record the commit in Kit Notices.

## 4. Standing rules

- **Claims:** site text comes only from claims register 0.4 (`assuredforge-architecture/research/design-partners/materials/CLAIMS-REGISTER.md`)
  and glossary section H, verbatim or with a plain explanation alongside. Kit Notices owns the register and the glossary; ask it
  for any new wording. Never edit the architecture repo.
- **AI switch (WR-01):** every sentence about AI availability comes from `components/AiWording.tsx`.
  - While `AI_DELIVERY_AVAILABLE` is off, no page names a model key, a model source, Anthropic or an API key.
  - The model-source group on Works with stays hidden.
  - `npm run check:switch` must pass for both values.
- **Banned phrases:**
  - No compliance, certification or regulatory claim, and no "built for <industry>", industry edition or industry outcome (the
    site check fails on these on /industries/ and /works-with/).
  - No "secure sandbox" (say "isolated container").
  - No "gate" (say "the approvals the governance requires").
  - No ChatGPT or OpenAI naming.
  - No "choose the model source", "people approve every gate" or "every result independently tested".
  - Edition names: only "Desktop edition" and "Hosted edition (planned)", with "(planned, on Microsoft Azure)" only on the
    deployment page. No "cloud edition", "Azure editions" or "customer-hosted".
  - "Interim", never "(draft)", on legal and policy text.
- **Pushes:**
  - No push without the owner's explicit approval for that push. A relayed approval is not enough: ask the owner.
  - `main` is protected (pull request, required "build" check, branch up to date, admins included). Never use an admin override.
  - Deploy only through the pages workflow with the **custom-domain** target, from `main`. The "preview" target breaks the live
    site.
- **CI budget:** the owner caps CI spend at $36 in total, with $3 reserved for Kit Notices. Check current usage before any push.
  Verify locally first; push only at agreed checkpoints. A release costs about 4 billed minutes, and a rollback the same.
- **Commits:** author `Burri <311675388+burri-us@users.noreply.github.com>`. No AI attribution or trailers. No `git stash`.
  Commit with `git commit -- <files>` where other sessions share a tree.
- **Hands off:** the founder stack, the `dryrun-c68012b` kit and its folders, `af-int-w1`, `af-rel-b1`, the kit worktrees and
  Docker. Previews only on ports 4174 and 4175, stopped at handoff.

## 5. Read first

1. `STATUS.md`: the running record and the latest state.
2. `docs/RELEASE-PACKAGE.md`: release notes, go/no-go, deploy, verification and rollback.
3. `docs/A11Y-PERF-FINDINGS.md`: accessibility and performance results and the fixes made.
4. `COUNSEL-LIST.md`: interim legal wording waiting for counsel.
5. `docs/W8-MEDIA-LIST.md`: the 15 media slots and the site changes after capture.

Also useful: `docs/INDUSTRIES-WORKS-WITH-ENTRIES.md`, `docs/PLAIN-LANGUAGE-SWEEP.md` §7, and `components/Registered.ts`
(where the register text lives on the site).

## 6. First three actions in the new window

1. **Confirm the state:**
   - `git -C C:\dev\AssuredForge\site-w11 status` is clean, and the head is this commit or later.
   - `git fetch origin`, then confirm main is still 38082b2. If not, note what changed.
   - Run `npm run build` and `npm run check:switch`; both must pass.
   - Read the owner's word that the W8 dry run has ended, and any decisions since DEC-475.
2. **OI-608:**
   - Take the W8 media and RAM figures from the dry run.
   - Place them as `docs/W8-MEDIA-LIST.md` §6 says, and set `RAM_W8`.
   - Run `SITE_PUBLISH=1 npm run build` until it passes.
   - Commit only.
3. **Release decision:**
   - Prepare the release head (RELEASE-PACKAGE §3 step 2: merge main, indexing on, `SITE_PUBLISH` in the deploy workflow).
   - Run the local checks.
   - Send the owner the go/no-go table with each item's result and the expected CI minutes.
   - Push only after the owner approves that push.

## Added by Kit Notices, 2026-11-21 evening (DEC-481 (1))
- `pages/legal/design-partner-agreement.tsx`, "Desktop edition exit": replace the last sentence with CL-22D as amended: "`launcher
  uninstall --delete-data` removes AssuredForge's records, files and keys from your PC after you type a confirmation. Backups you
  created are kept; you delete them yourself (following the exit steps Tierra sends you)." Done 2026-11-21 evening on this branch. Recorded in COUNSEL-LIST.md.

## Added by Kit Notices, 2026-11-21 night (DEC-483 (12), OI-608)
- Placeholder blocks hidden: `SHOW_PLACEHOLDERS = false` in `components/Measured.tsx`. Screenshot and video slots without media
  render nothing, the Demo page drops its empty video section, and the RAM clause on /solutions/individuals/ is left out. When the
  W8 media and RAM figures exist: fill `RAM_W8` and each slot's `media`; set the switch back to true only for a preview.

## Added by Kit Notices, 2026-11-21 night (DEC-488 (2))
- **Release window: Wednesday 25 to Friday 27 November**, after Tuesday's dry run provides the W8 media. The interim Trust pages
  (security, product privacy notice, AI use policy, subprocessors, responsible disclosure) must be live before the cohort starts on
  Monday 30 November (OI-316 condition). The pilot pack carries the product privacy notice meanwhile (architecture
  `program/pilot-pack/09-PRODUCT-PRIVACY-NOTICE.md`, same text plus one sentence on backups: add that sentence to
  `pages/trust/product-privacy.tsx` "Retention and deletion" at the release, with the CL-22D reference).

## Added by Kit Notices, 2026-11-22 (DEC-510, OI-689): brand refresh before the release

- **Release prerequisite** for the new site (alongside G-1 to G-7 in `docs/RELEASE-PACKAGE.md`): refresh this redesign from design system 8f35 (1795242812-8f35) to 6920 (1795271938-6920), and refresh tierra-llc.com to 6920 in the same pass.
- **E-1** (self-hosted brand typefaces on both sites) and **E-2** (favicon and share image from the Logos set) are fixed in this pass; they are no longer exceptions (`assuredforge-architecture/design/tierra-design-system/README.md`, exceptions table).
- **E-3** (the dashed "More in development" card on tierra-llc.com) stays recorded unless the Site Brand window fixes it in passing.
- The Portal needs nothing (b2 is already at 6920; E-4, E-5 stay with the Portal).

## Site Brand window (opened 2026-11-22 01:24 EST)

Scope (owner, 2026-11-22): both sites from design system 8f35 to 6920 (control-border, accent-hover, viz-5, breakpoint-stack),
fix E-1 (self-hosted brand faces with fallback stack) and E-2 (favicon set and share image from the Logos group), re-run each
site's checks (build, site check, AI switch check, accessibility scan, visual check at phone and desktop width), and a brand
language audit (design system section 3 and US English): fix only obvious wording, bring the rest to the owner.
Rules: Sonnet lanes; site worktrees only (never af-next, af-hosted or the records tree; records go to Kit Notices); no Docker;
no push or publishing without owner approval; the release follows RELEASE-PACKAGE G-1 to G-7, Wednesday 25 to Friday 27.
**Stop before Tuesday 24 November 07:00 (rehearsal); resume only after the owner says the rehearsal has ended.**

Findings at start:
- Both sites pinned the same 8f35 tokens.json (SHA-256 2ed1bb14...). 6920 is 57451ddd...
- The design system (records copy and live artifact 6920) holds **no font files and no favicon or share image**: only tokens,
  READMEs and the four Logos v2 SVGs. E-1 is met with the pinned @fontsource woff2 files (both sites already self-host);
  E-2 is built from the exact Logos v2 reversed drawings on a `bar` tile. Kit Notices item: the Logos group should hold the
  favicon and share image so E-2 can close at the source, and the register's E-1 text ("live sites use the system font
  stack") is out of date for tierra-llc.com, which has self-hosted the faces since 744b56f.
- Tierra work is on a new local branch `ds-6920` in `tierra-site-p2` (from w12-phase2 = origin/main 744b56f).

Progress (latest last):
- Lanes A (this site), B (tierra-llc.com) and C (language audit, read-only) started.
- Lane C (language audit) done. Owner decisions, 2026-11-22:
  1. Fix now: "recognise" -> "recognize"; "licence" -> "license" on the deployment and third-party notices pages (both sites).
  2. Register text (CL-22D, CL-53 and the four pages repeating CL-53: home, FAQ, deployment, security): US spelling only
     after Kit Notices updates the claims register. List sent to Kit Notices.
  3. Legal pages, the footer "Evaluation licence" link and the legal date format: held for counsel (must match the signed
     agreement, which says "licence").
  4. Security lead: "AssuredForge is built for individuals, teams and organizations that must prove how their software was
     delivered, and we hold ourselves to the same standard."
  5. tierra-llc.com product card: "For individuals and small teams today; a hosted edition for organizations is planned."
  6. Footer "A product of Tierra LLC" unchanged; About page: "Tierra LLC" in the CL-28 sentence links to
     https://tierra-llc.com/, no wording change.
  Fonts (owner): confirm each face's licence allows commercial self-hosting and ship the licence text next to the font files.
  Kit Notices also receives the new favicon and share image files as Logos-group candidates, and the E-1 correction.
- Lanes A and B done; all three lanes closed. Heads: `w11-site-redesign` (this file's commit), `tierra-site-p2` `ds-6920` fe3c144.
  Both sites on 6920; E-1 and E-2 done (fonts with OFL texts beside them, checks require them; Logos v2 icons and share images);
  owner wording decisions 1, 4, 5, 6 applied. Checks on both heads: build, site check, check:switch (both values), npm audit 0,
  axe 0 violations (assuredforge.com 132 runs, tierra-llc.com 25 runs), no 320 px overflow. Layout change: side-by-side layouts
  now stack below 720 px (was 768). Report to Kit Notices: `docs/KIT-NOTICES-SITE-BRAND.md`.
- Open for the owner: Inter weight 500 (`font-medium`, two places) has no face and renders as 400; the home benefit list stays on 768.
- Next: the release (RELEASE-PACKAGE G-1 to G-8) from Wednesday, after the owner says the rehearsal has ended.
- Owner, 2026-11-22 (brand pass accepted): Inter 500 -> 600 (e554d95); E-6 recorded for Kit Notices and allowed explicitly by
  the token check; tierra-llc.com releases in the same window after assuredforge.com's live check (RELEASE-PACKAGE §7, with
  `tools/live_check.py` in tierra-site-p2, 44f55a4). Evidence copied to `C:\Users\burri\AF-backups\site-brand-2026-11-22\`
  (laneA and laneB, before and after, axe results; 75 files) for G-8.
- Kit Notices DEC-513/514: CL-53 in US spelling on the four pages (ae64f80); CL-22D and legal pages held (COUNSEL-LIST 27c2bf2,
  P1-26); tierra-llc.com release approved in principle (final go on the day); nine Logos candidates and E-6 handed to Kit Notices.
- Kit Notices DEC-515: the nine files are in the records copy of the Logos group (local 573dc97, out with its next record push); E-6 in the exceptions table. Nothing pending with Kit Notices.
- Website Pack findings (owner, 2026-11-22): (1) G-3 and step 7 name both indexing sources, site.json and the workflow's index
  input (94400b0); (2) tierra check.py checks the legal line by pattern, not exact address (ds-6920 62d1ed3); (3) font-face
  check on both sites: every weight applied to text needs a shipped file (here `scripts/check-fonts.mjs` in the build, babd283;
  tierra `tools/fontcheck.py` in check.py, 763dbfd). It found Inter 700 (legal-page label, strong) on both; now 600, no visible change.
- Logos: live upload by the assessor after both releases; until then the records copy keeps 573dc97's files (owner, OI-689).
- Backup push (owner, 2026-11-22): `ds-6920` 763dbfd and `w11-site-redesign` 23dc77a pushed as branches only. Before it, 79 commits
  were re-authored to the noreply address (13 had a personal email); hashes in this file before this line are the old ones:
  map in `docs/NOREPLY-REWRITE-2026-11-22.md`. No workflow ran (CI runs on main and pull requests only; Pages by hand or from
  main): 0 Actions minutes. This line's commit is local only.
