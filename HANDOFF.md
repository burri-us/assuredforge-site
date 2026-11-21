# SITE-V2 handoff (branch w11-site-redesign, assuredforge.com). Not pushed, not published.
Sources (read-only records copy): C:/dev/AssuredForge/assuredforge-architecture/design/tierra-design-system/ (tokens.json SHA-256 2ed1bb14...3857; assets/Logos/README.md SHA 179e3702...; Logos SVG drawings verified identical to the inline drawings). Pinned to design system 1795242812-8f35 (architecture main 131e26c): tokens.json unchanged from 1795242441-3bd7; the light logo files now carry fixed colour attributes with the same drawings; theme switching happens only in the inline drawings (README section 4). Inline drawings use token variables only, no hex. Commits (noreply identity): see `git log` for the five commits below; the final one is this file.
1. Pin tokens.json v2 (SHA-256 2ed1bb14...3857, adds `bar`, `bar-ink`), Logos README (records copy, 179e3702...), generator emits fixed `--<token>-light/-dark` variables, Space Grotesk 400 self-hosted (OFL notice already covers the family).
2. Tierra bar: `bar` navy, `bar-ink`, 48 px, reversed wordmark drawn inline (viewBox 0 0 150 36, same paths and attributes as the v2 file; ink = bar-ink, gold = `--gold-dark`; text Space Grotesk 700 "Tierra" / 400 "LLC"). Link to https://tierra-llc.com/, accessible name "Tierra LLC". Rendered 150 px wide (min 120).
3. Removed public/brand/ (assuredforge-mark.svg, assuredforge-mark-reversed.svg, tierra-wordmark.svg) and the README reference.
4. DIFFERENCES.md and this file.
## Per page/component
- Layout.tsx TierraBar (all pages); globals.css `.tierra-bar*`, `.tw-*`. Header/footer mark (components/Logo.tsx) already identical to v2 assuredforge-mark.svg (viewBox 0 0 64 64, stroke 6, round caps/joins, path `M14 54L32 10l18 44` ink, `M20 37l8 8 26-21` gold; no change needed); product wordmark stays display 700. No page content changed; legal DRAFT banners untouched.
## Kept and why
public/favicon.ico, icon.svg, apple-touch-icon.png, og.png: exception E-2 (browser and link-preview contexts, fixed colours). No other logo file remains.
## Contrast (light / dark)
Text: ink/surface 15.1/14.8; ink/surface-alt 13.9/13.4; muted/surface 8.0/9.3; muted/surface-alt 7.4/8.4; accent/surface 6.7/8.0; accent/surface-alt 6.2/7.3; accent-ink/accent 6.7/6.9; ink/accent-soft 12.9/11.9; bar-ink/bar 12.8/12.8.
Graphics: gold/surface 3.6/7.1; gold/surface-alt 3.3/6.4; reversed-wordmark gold (#d29a52) on bar 6.1/6.1; mark ink/surface 15.1/14.8; wordmark ink bar-ink/bar 12.8.
Focus ring: accent on bar would be 2.3 (light) so the ring on the bar link uses bar-ink (12.8); elsewhere accent as before.
## Exceptions
Closed: E-A, E-B. Open: E-C (latin subset; Space Grotesk 400/600/700). No new exception proposed: the text fits the 150-wide viewBox in Space Grotesk (getBBox right edge 130.9 of 150).
## Checks
npm run build: tokens, check-tokens, next build, seo, check.mjs all pass (32 pages; home 547 KB). SITE_PUBLISH=1: still 15 markers on 7 pages (expected failures, unchanged). git diff --stat shows only intended files.
## Screenshots
C:\dev\AssuredForge\ds-previews\site-v2\assuredforge\{home|product|legal}-{light|dark}-{1440|390}.png (12). scrollWidth at 390: 390 on all six 390 shots (<= 390). Bar computed rgb(15,39,68) in both themes; mark stroke switches ink navy / light.
Script: ds-previews\site-v2\shoot-af.cjs. Server on 4175 stopped.

## Round 2 (assessor review of the SITE-V2 screenshots)
Not live; not pushed, not published.
- ecf3d90 Phone header (item 4): "Become a design partner" and "Menu" share one row under the wordmark on phones. The menu is still a details disclosure with no script. Its list opens as a panel below the header row, across the content width (surface, rule border, radius-lg, shadow-2). Desktop is unchanged. Measured at a true 390 px phone, light and dark: the button and Menu have the same top (y 102); the open panel spans x 16 to 374; scrollWidth is 390 on home, governance, platform, traceability and the evaluation licence.
- c446642 Plain language (item 3, DEC-453, individuals first). The claim wording stays exactly as in claims register 0.3; only explanations are added, and their wording comes from the glossary definitions (GLOSSARY.md Tenant, Workspace, Portfolio, Escalation):
  - product/governance (CL-08): "UAT (user acceptance testing)".
  - product/governance (CL-13): adds "(A Tenant is your organization's account, a Workspace is a separate space inside it (for example for one client), and a Portfolio is a long-lived product line or initiative inside a Workspace.)"
  - product/governance (CL-10): adds "(An escalation is raised when combining the delivered changes stops on something the platform must not resolve by itself, for example two changes that edit the same lines differently.)"
  - platform: "user acceptance test (UAT) result"; Tenant, Workspace and Portfolio explained in parentheses with the same wording.
  - product/traceability (CL-03): "user acceptance test (UAT) results".
- Checks: `npm run build` passes (tokens, check-tokens, next build, seo, check.mjs: 32 pages; vocabulary 0 warnings; home 548 KB). Markers are unchanged at 15 on 7 pages (SITE_PUBLISH=1 would fail on them, as before).
- Item 5, waiting for the owner: placeholders (wait for W8 media, or hide the placeholder blocks) and the legal pages (wait for counsel, or publish without them). Nothing is published before those decisions.
- Screenshots (true 390 px phone emulation and 1440, light and dark), in C:\dev\AssuredForge\ds-previews\site-v2\assuredforge\:
  - {home|product|platform|traceability|legal}-{light|dark}-{1440|390}.png (product = /product/governance/)
  - menu-open-{light|dark}-390.png
  - Script: ds-previews\site-v2\af-round2.cjs
- Ports 4174 and 4175 are stopped and free.

## Round 3: interim legal pages (owner decision DEC-462, OI-607)
Not pushed, not published. The assessor reviews the wording before any publish.

Commits:
- 0546313 Legal pages: interim wording in place of every counsel marker. The interim label replaces the "DRAFT — COUNSEL REVIEW" banner (components/Blocks.tsx InterimBanner). The date line reads "Effective 21 November 2026 (interim version)." The Trust Center and Security now say "interim" instead of "drafts awaiting counsel review".
- eed55cd scripts/check.mjs:
  - The interim label is the recognised legal-page state.
  - Every one of the nine legal pages must show it, in every build.
  - No page is exempt from markers any more: DRAFT, "COUNSEL REVIEW" and any "[Counsel ...]" or "[Owner ...]" item fail a publish build anywhere.
  - Negative test: a legal page without the label fails, and a "[Counsel ...]" item fails.
- 9050df1 COUNSEL-LIST.md: the LEG list is kept, plus every clause filled, with its page, exact wording, previous text, and the points counsel should confirm.

Pages: /terms/, /privacy/, /legal/evaluation-licence/, /legal/acceptable-use/, /legal/design-partner-agreement/, /trust/ai-use-policy/, /trust/subprocessors/, /trust/product-privacy/, /trust/accessibility/. All nine carry the label. Seven of them had markers to fill; product-privacy and accessibility only changed label and date.

Clauses filled (full text in COUNSEL-LIST.md):
- Evaluation licence: confidentiality (mutual), feedback licence (to improve the product), warranty disclaimer (as is), limit of liability (greater of amounts paid, none, and USD 100), termination (either party, written notice; exit per CL-22D), and Michigan law and courts with a consumer carve-out.
- Design partner agreement: details by the signed agreement, confidentiality, ending participation, a pointer to the licence for warranty, liability and law; the pricing bracket removed ("Pricing after the program is not set.").
- Acceptable use: notice and a reasonable time to fix, except for serious breaches.
- Terms: liability cap (USD 100) and Michigan law and courts.
- Privacy: rights answered within one month.
- Subprocessors: 30 days' notice.
- AI use policy: the unregistered training sentence is replaced by CL-47.

No new product claims: product statements on these pages come from CL-22D, CL-23, CL-26, CL-47 and CL-53.

Builds:
- `npm run build` passes (32 pages; 16 marker warnings on 7 pages, none on a legal page).
- `SITE_PUBLISH=1`: 0 markers on the nine legal pages. It still fails, as expected, on markers outside this decision:
  - W8 placeholders on home, demo, deployment, product/audit, product/governance and product/traceability (OI-608).
  - solutions/individuals: "[RAM: CONFIRM AT W8]" (CL-54) and "[counsel review: age line]" (CL-52, claims-register text).

Screenshots (true 390 px phone and 1440, light and dark; label present, 0 markers, scrollWidth 390 or 1440), in C:\dev\AssuredForge\ds-previews\site-v2\assuredforge\:
- legal-licence-{light|dark}-{1440|390}.png
- legal-agreement-{light|dark}-{1440|390}.png
- Script: ds-previews\site-v2\af-legal.cjs

Ports 4174 and 4175 are stopped and free.

## Round 4: OI-608 preparation (owner, 21 November 2026). Not pushed, not published.

1. **W8 media list:** `docs/W8-MEDIA-LIST.md`. Covers all 15 placeholder slots on the 6 blocked pages (9 screenshots, 4 home loops, the 3-minute walkthrough), plus 2 slots that appear only with AI delivery on. For each slot: page and slot, image or loop, size, what it shows, its claim, file name. Also: demo Tenant `Corner Oven Bakery (demo)` with invented data only, light and dark, the formats and budgets, the alt texts, and the site changes needed after capture. Slot sizes were measured on the current build: 1086 × 679 full width, 530 × 331 in the demo grid, 526 × 329 for the home loops, 356 px wide on a 390 px phone.
2. **/solutions/individuals/:**
   - The age line now reads "You must be at least 18, use a Windows 11 Home or Pro PC ...", matching the interim agreement §2 (DEC-462). It is recorded in COUNSEL-LIST.md, with a note that the claims register's CL-52 still carries the marker.
   - The RAM line reads from `components/Measured.tsx` (`RAM_W8`, null until W8). While it is null, the marker "[RAM: CONFIRM AT W8]" shows and blocks a publish build. Set to `{ minGB, recommendedGB }`, the line reads "with N GB RAM minimum (M GB recommended)".
   - `scripts/check.mjs` then requires the FAQ and Editions and deployment to state the same figures. Tested three ways: the marker passes; 8/16 passes; 12/16 fails on the FAQ and deployment. The constant is back to null.
3. **X8 shot list (draft):** `docs/X8-SHOT-LIST-DRAFT.md`, from B2-EXPERIENCE-PLAN §10 with DEC-456, DEC-459 (2) and DEC-463. It has 6 shots (Insights overview, run console, traceability, checklist, Help assistant, feedback) at 1366 and 375 px, light and dark, each marked "Sample data", with alt texts, captions with their claim basis, proposed placements and open questions. None of these can be captured until b2 runs.

Points for the owner:
- The FAQ and Editions and deployment already state "8 GB RAM minimum; 16 GB recommended" (DEC-444), while /solutions/individuals/ shows the W8 marker. If W8 measures something else, all three change together; the check enforces this.
- The served-file allow-list refuses anything under `media/` today. Adding the real assets needs one allow-list line (media list §6, step 4).

Builds: `npm run build` passes (32 pages). `SITE_PUBLISH=1` still fails on the W8 placeholders on the 6 pages and on the RAM marker on /solutions/individuals/; the age line no longer blocks.
Port 4175 was used for the slot measurement and is stopped.
