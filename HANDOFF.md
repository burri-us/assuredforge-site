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
