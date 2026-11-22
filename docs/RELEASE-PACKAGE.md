# assuredforge.com redesign: release package (after the W8 dry run)

Author: Burri. 2026-11-21. For the owner, who approves the release and its single push, and for Kit Notices. Branch
`w11-site-redesign`. The live site is `main` at 38082b2 (the OI-619 fix). Nothing here has been run against the live site
except read-only checks.

**Who runs the release (owner, 2026-11-22, DEC-510):** the **Site Brand window** runs this release end to end (gates, push, deploy, live checks); the Site Redesign window that wrote this package is archived.

## 1. Release notes

**What changes for visitors**
- **New pages:**
  - Product: AI-assisted delivery, Governance and approvals, Traceability, Audit and evidence, Integrations.
  - Individuals and small teams; Industries (8 industries, CL-IND-00..08); Works with (toolchains and connectors with Supported
    / Being validated / Planned badges, CL-WW-00..03).
  - Demo, Resources, FAQ, Contact.
  - Trust Center, with product privacy notice, AI use policy, subprocessors and model providers, responsible disclosure and
    accessibility.
  - Interim legal pages: evaluation licence, acceptable use, design-partner agreement summary.
  - Third-party notices for the self-hosted fonts.
- **Pages removed:**
  - Manufacturing: /manufacturing/ forwards to /industries/#manufacturing (DEC-468 (12)).
  - The planned Regulated and quality-driven teams page, folded into Industries: /solutions/regulated/ forwards to
    /industries/ (DEC-472 (2)). Its hosted-edition guardrails sentence now sits on Editions and deployment.
- **Wording:**
  - Two edition names only, "Desktop edition" and "Hosted edition (planned)".
  - General-purpose positioning: no industry editions and no compliance claims.
  - Plain-language explanations at first use (glossary section H, DEC-469).
  - Claims from claims register 0.4 (DEC-470).
- **AI:** while the AI switch is off (today), AI is described as being validated, and the model-source group on Works with is
  hidden (WR-01). See §4 for the change after Monday's rehearsal.
- **Menu and header:**
  - "Industries" added to the menu.
  - From 1024 px up, the header has two rows: wordmark and call to action, then the menu.
  - **Between 640 and 1023 px (tablets), the call to action and Menu sit on a second row under the wordmark** (from the
    OI-621 fix, accepted by AF).
  - Below 1024 px, the open Menu pushes the page down instead of covering it.
- **Accessibility:**
  - OI-621 fixed: the open phone menu no longer hides the focused link (WCAG 2.4.11).
  - The licence text on /third-party-notices/ wraps, with no sideways-scrolling region.
  - Scan, keyboard walk and contrast check are clean (`docs/A11Y-PERF-FINDINGS.md`).
- **Speed:** no page loads script any more. Pages weigh 96 to 119 KB instead of 231 to 329 KB, with 7 to 8 requests instead
  of 18 to 46.
- **Removed files:** `/brand/assuredforge-mark.svg` and `/brand/assuredforge-mark-reversed.svg` are no longer served. Nothing
  in the Tierra site or the architecture repo links to them.
- **Already live, not part of this release:** OI-619 (Windchill sentence removed, PR #8, 2026-11-21).

**Removed owner actions:** none. The release adds no step for the owner beyond approving it.

## 2. Go / no-go before the push (all must be true)

| # | Condition | How to check |
|---|---|---|
| G-1 | The owner has said the W8 dry run has ended and approves this release and its push | Owner message |
| G-2 | OI-608 closed: the W8 media are on the pages (`docs/W8-MEDIA-LIST.md` §6) and the RAM figures are set (`components/Measured.tsx`) | `SITE_PUBLISH=1 npm run build` passes: no marker, placeholder or `[RAM: CONFIRM AT W8]` left |
| G-3 | Indexing is set back on for publication, from the right source. Indexing has **two sources**: `site.json` `"indexing": true` and the pages workflow's `index` input (it sets `SITE_INDEX=1`; `scripts/seo.mjs` indexes when either is on). The release uses `site.json` only: `"indexing": true`, as live today (2464f94, D1-11); the branch has it off (57131f4) for previews, and **merging without this change would remove the live site from search engines**. The deploy passes `-f index=false`, so the input adds nothing; a run with `index=true` (for example a preview) would index whatever it builds | `site.json`; the built `robots.txt` says `Allow: /`; the dispatch command in step 7 says `index=false`, and the run's "Build and check" log shows `SITE_INDEX: 0` and `robots.txt: indexing ON` (`gh run view <run-id> --log | grep -E "SITE_INDEX|robots.txt: indexing"`) |
| G-4 | The deploy refuses placeholders: `.github/workflows/pages.yml` "Build and check" sets `SITE_PUBLISH: "1"`. Neither workflow sets it today, so markers are only warnings in CI | Diff of `pages.yml` in the release pull request |
| G-5 | AI switch and Works with state decided: either unchanged (AI off), or after a passed rehearsal both `AI_DELIVERY_AVAILABLE` (`components/AiWording.tsx`) and `ANTHROPIC_SUPPORTED_SINCE` (§4) set in their own approved commit | `npm run check:switch` passes |
| G-6 | Local checks pass on the release head: `npm run build`, `npm run check:switch`, `npm audit --audit-level=high` (0 found on 2026-11-21) | Command output |
| G-7 | CI budget: about 4 billed Actions minutes for the release (pull request "build" about 1 to 2, pages build 1, deploy 1), and the same again if a rollback is needed | Usage page |
| G-8 | Brand refresh done (OI-689): both sites on design system 6920, E-1 and E-2 fixed, checks re-run (owner, DEC-510) | Both sites build with the 6920 tokens, the self-hosted brand faces and the Logos-set favicon and share image; G-2 and G-6 re-run on the refreshed head |

## 3. Deploy steps (one push, one deploy)

Repository rules, read 2026-11-21:
- `main` is protected: a pull request is required, the "build" status check must pass, the branch must be up to date with
  `main` (strict), and admins are included.
- The `github-pages` environment deploys from `main` only.
- The pages workflow runs only when started by hand. Use the **custom-domain** target only: "preview" breaks the live site.

1. **Save the live copy (before anything changes):**
   `node scripts/live-check.mjs save <scratch>/live-before`. 2026-11-21 baseline: 9 pages plus robots.txt, sitemap.xml and
   security.txt.
2. **Prepare the release head on `w11-site-redesign`** (local commits, noreply author):
   - a. Merge `origin/main` into the branch (it is 2 commits behind: PR #8). One conflict, `pages/manufacturing.tsx`: keep the
     branch's forwarding page (the Windchill sentence is gone either way).
   - b. G-3: `site.json` `"indexing": true`.
   - c. G-4: `SITE_PUBLISH: "1"` in `pages.yml` "Build and check" `env`.
   - d. Run the G-2 and G-6 checks locally; all must pass.
3. **Push the branch** (the approved push): `git push -u origin w11-site-redesign`.
4. **Open the pull request:** `gh pr create --base main --head w11-site-redesign --title "assuredforge.com redesign (W11)"`,
   with §1 as the body.
5. **Wait for the required check:** `gh pr checks <n> --watch`. "build" must pass; no admin override.
6. **Merge:** `gh pr merge <n> --merge`. Record the merge commit.
7. **Deploy once:** `gh workflow run pages.yml --ref main -f target=custom-domain -f index=false` (indexing comes from
   `site.json`; never `index=true`, see G-3). Then `gh run watch <run-id> --exit-status`, and confirm in the log
   `SITE_INDEX: 0` and `robots.txt: indexing ON` (G-3).
8. **Verify live** (allow a minute for the CDN):
   - `node scripts/live-check.mjs compare out` against the same build that passed G-2. Every page must match the build
     (build-hash asset paths ignored), both forwarding pages must forward to a page that answers 200, and every old address
     must answer 200.
   - `node scripts/live-check.mjs save <scratch>/live-after`, then `diff <scratch>/live-before <scratch>/live-after`. The
     differences are the release itself; keep the list with the release record.
   - A spot check in a browser at 390 px and 1440 px, light and dark: Home, Industries, Works with, FAQ, the menu.
9. **Report:** merge commit, run id, the compare result and the Actions minutes. Then delete the branch on GitHub only if the
   owner wants it gone (it is the source of the redesign record).

## 4. After Monday's rehearsal: Anthropic API "Supported" (prepared, not applied)

Prepared in 4b65e8a (no visible change while unset). When the W8 model-path rehearsal has passed on the current kit and the
owner approves:
- In `components/Registered.ts`, set `export const ANTHROPIC_SUPPORTED_SINCE: string | null = "<date it passed, e.g. 23 November 2026>";`.
- Result on /works-with/ (tested 2026-11-21 with the AI switch on): the "Anthropic API key" row gets the **Supported** badge and
  the note "Supported since <date>, after a recorded live run on the current kit.", and the model-source status line reads
  "Status as of <date>, …". Other rows unchanged.
- The group is visible only while `AI_DELIVERY_AVAILABLE` is on. Turning that on is its own approval, normally in the same
  commit.
- Run `npm run build` and `npm run check:switch`; both passed in the trial.
- For Kit Notices: CL-48 and CL-WW-02 in the register move from "Being validated" to "Supported" for the Anthropic API source.
  The FAQ and Editions and deployment use CL-48's sentence "(being validated)"; they follow the register's new wording in the
  same commit.

## 5. Addresses to verify after go-live

| Address | Expected | Checked by |
|---|---|---|
| /manufacturing/ | Forwarding page (meta refresh, noindex, no canonical URL) to /industries/#manufacturing | `compare` (forward ok) and a browser |
| /solutions/regulated/ | Forwarding page to /industries/ | `compare` |
| /, /about/, /deployment/, /design-partners/, /platform/, /privacy/, /security/, /terms/ | 200, new content | `compare` (old addresses) |
| A page that does not exist, e.g. /no-such-page/ | 404 with the site's 404 page (noindex) | Browser |
| /robots.txt | `Allow: /` with the sitemap line (indexing on, G-3) | `compare` (matches the build) |
| /sitemap.xml | 30 pages; neither forwarding page listed | `compare` |
| /.well-known/security.txt, /favicon.ico, /icon.svg, /apple-touch-icon.png, /og.png | 200 | `compare` (old addresses) |
| /brand/assuredforge-mark.svg, /brand/assuredforge-mark-reversed.svg | 404 (removed; nothing known links to them) | Browser; note only |

GitHub Pages cannot send HTTP redirects, so the two moves use forwarding pages; search engines treat them as soft moves. Both are
noindex and out of the sitemap.

## 6. Rollback

The `github-pages` environment deploys from `main` only, so a rollback is a revert through the same protected path (about 3 to
5 minutes and about 4 Actions minutes):
1. `git switch -c rollback-w11 origin/main`, then `git revert -m 1 <merge commit>`, committed with the noreply author.
2. `git push -u origin rollback-w11`; `gh pr create --base main --head rollback-w11 --title "Roll back the redesign"`.
3. Wait for "build" (`gh pr checks <n> --watch`), then `gh pr merge <n> --merge` (no admin override).
4. `gh workflow run pages.yml --ref main -f target=custom-domain -f index=false`, then watch the run.
5. `node scripts/live-check.mjs save <scratch>/live-rollback`, then
   `node scripts/live-check.mjs diff <scratch>/live-before <scratch>/live-rollback`: no differences expected.
6. A rollback push and deploy need the owner's approval like the release, unless the owner pre-approves it with the release.

## 7. tierra-llc.com release (same window, after assuredforge.com's live check passes)

Owner, 2026-11-22: tierra-llc.com is released in the same window, **only after §3 step 8 (assuredforge.com live check) has
passed**. Nothing is pushed until the owner approves this push on the day; the approval for §3 does not cover it.

**What changes** (branch `ds-6920` in `C:\dev\AssuredForge\tierra-site-p2`, from `w12-phase2` = live `main` 744b56f; 7 local
commits, noreply author): design system 6920 tokens (control-border, accent-hover, viz-5, side-by-side layouts stack below 720 px
instead of 768 px); E-1 (JetBrains Mono 400 added for the notices page; OFL licence text next to the font files); E-2 (favicon,
32 px favicon, 180 px touch icon and share image from the Logos v2 Tierra drawing); notices page "Licenses" and "license text";
home product card "a hosted edition for organizations is planned"; `tools/live_check.py`.

**Repository facts, read 2026-11-22:** `burri-us/tierra-site`; `main` is **not** protected (no required check, no required
review); GitHub Pages "legacy" build from `main` /, custom domain tierra-llc.com, HTTPS enforced. Every push to `main` starts
"pages build and deployment" (about 1 billed Actions minute). There is no CI build check, so the build gate is the local check.

### 7.1 Go / no-go

| # | Check | Evidence |
|---|---|---|
| T-1 | The owner approves this push on the day, after assuredforge.com's live check passed | Owner message |
| T-2 | `origin/main` is still 744b56f (`git fetch origin`); otherwise merge it into `ds-6920` and re-run T-3 | `git log -1 origin/main` |
| T-3 | `python tools/check.py` and `python tools/check.py --publish` pass on the `ds-6920` head (5 pages, 0 problems on 2026-11-22) | Command output |
| T-4 | Accessibility scan and screenshots on the head: 0 violations at 390 and 1440, light and dark; no overflow at 320 px (25 runs, 0 on 2026-11-22; evidence in `C:\Users\burri\AF-backups\site-brand-2026-11-22\laneB\final`) | Scan summary |
| T-5 | CI budget: about 1 minute (pages build), the same again for a rollback | Usage page |

### 7.2 Steps

1. **Save the live copy:** `python tools/live_check.py save <scratch>/tierra-before` (23 served files; on 2026-11-22 the five files
   new in this release answered 404, as expected).
2. **Push the branch** (approved push): `git push -u origin ds-6920`.
3. **Pull request:** `gh pr create --repo burri-us/tierra-site --base main --head ds-6920 --title "tierra-llc.com: design system 6920, brand faces and Logos v2 icons"`, with the "What changes" paragraph as the body.
4. **Build gate:** there is no CI check; re-run T-3 on the exact pushed head (`git rev-parse HEAD` equals the PR head) and record
   the output in the PR as a comment.
5. **Merge:** `gh pr merge <n> --repo burri-us/tierra-site --merge` (no squash; keeps the commit record). Record the merge commit.
6. **Deploy:** automatic on the merge. `gh run list --repo burri-us/tierra-site --workflow "pages build and deployment" -L 1`,
   then `gh run watch <run-id> --repo burri-us/tierra-site --exit-status`.
7. **Live check** (allow a minute for the CDN):
   - `git switch main && git pull` in a clean checkout of the merge commit (or stay on `ds-6920` if `main` equals it), then
     `python tools/live_check.py compare`: every served file must be live byte for byte; `/no-such-page/` must answer 404.
   - `python tools/live_check.py save <scratch>/tierra-after`, then `python tools/live_check.py diff <scratch>/tierra-before <scratch>/tierra-after`:
     the differences are the release (16 files expected: 5 pages, site.css, tokens.css, favicon.svg, favicon-32.png, og.svg,
     og.png, apple-touch-icon.png, JetBrains Mono woff2 and the three OFL texts).
   - Browser spot check at 390 and 1440 px, light and dark: Home, About, Contact, the notices page; the tab icon and a link
     preview of the home page.
8. **Report:** PR number, merge commit, run id, compare result, Actions minutes.

### 7.3 Rollback

`main` deploys on every push, so a rollback is a revert through a pull request (about 2 to 3 minutes, about 1 Actions minute):
1. `git switch -c rollback-ds-6920 origin/main`, then `git revert -m 1 <merge commit>`, committed with the noreply author.
2. `git push -u origin rollback-ds-6920`; `gh pr create --repo burri-us/tierra-site --base main --head rollback-ds-6920 --title "Roll back the 6920 brand refresh"`.
3. Run `python tools/check.py` on the rollback head; `gh pr merge <n> --repo burri-us/tierra-site --merge`; watch the pages run.
4. `python tools/live_check.py save <scratch>/tierra-rollback`, then `diff <scratch>/tierra-before <scratch>/tierra-rollback`: no
   differences expected except the files new in this release, which stay 404.
5. A rollback push needs the owner's approval like the release, unless the owner pre-approves it with the release.
