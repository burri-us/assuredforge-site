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
