# SITE-A handoff (branch w11-site-redesign)
Commits: f7ded39 counsel list renamed (COUNSEL-LIST.md), DIFFERENCES.md, 42d495a main change, final = HEAD (this file). Not pushed.
Author: configured email was not the noreply one, so commits use the noreply identity through environment variables only.
## Done
- DIFFERENCES.md (file:line). design/tokens.json copied, SHA-256 03fcc159...d8ef in design/tokens.sha256; scripts/tokens.mjs generates styles/tokens.generated.css (light on :root, dark under prefers-color-scheme, automatic only, no toggle/script/storage), components/tokens.generated.ts, notices json; runs in `npm run build`/`dev`.
- scripts/check-tokens.mjs fails the build on raw hex/rgb or font names outside generated files, or a stale generated CSS.
- Brand fonts self-hosted woff2 (latin; Inter 400/600, Space Grotesk 600/700, JetBrains Mono 400) from pinned @fontsource 5.3.0; OFL texts at /third-party-notices/ (footer, Legal). CSP unchanged (font-src 'self').
- Buttons, cards, headings, radii, Tierra bar, footer link "A product of Tierra LLC". Legal banner text unchanged.
- Logos: public/brand/assuredforge-mark.svg and tierra-wordmark.svg are byte copies (sha 39d629a2..., 569d9d8b... verified); Logos README in design/LOGOS-README.md. Old mark 533f9b8c -> approved 39d629a2: same paths, no visible change (adds size, label, metadata). Tierra bar uses the approved wordmark as an img.
- Build, check pass; SITE_PUBLISH=1 still 15 markers (unchanged).
## Contrast (light / dark), ratio
ink/surface 15.1/14.8; ink/surface-alt 13.9/13.4; muted/surface 8.0/9.3; muted/surface-alt 7.4/8.4; accent/surface 6.7/8.0; accent/surface-alt 6.2/7.3; button accent-ink on accent 6.7/6.9 (hover on ink 15.1/12.8); ink/accent-soft 12.9/11.9; focus ring accent/surface 6.7/8.0; draft banner text ink,muted on surface-alt as above; gold graphics only: gold/surface 3.6/7.1, gold/surface-alt 3.3/6.4 (>=3). Card rules 1.4/1.5 are decoration; the Menu control border now uses accent.
## Proposed exceptions (owner approval)
- E-A Mark: the approved mark SVG has fixed ink (no dark switch, unlike the Logos README), so the header/footer keep the inline mark (same paths, token colours). Reason: ink on dark invisible. Scope: header, footer. Review: next site release; better fix is a theme-aware approved file.
- E-B Tierra bar: surface-alt strip with rule border instead of ink. Reason: approved wordmark ink is fixed, vanishes on ink. Scope: all pages. Review: with E-A.
- E-C Fonts: latin subset only, weights as listed. Review: when non-latin content is added.
- public/brand/assuredforge-mark-reversed.svg: not approved, unused; propose remove (not removed).
- Rasters/icons untouched: og.png, apple-touch-icon.png, favicon.ico, icon.svg (fixed colours; browser/link-preview contexts, not page surfaces). No charts on the site.
## Open / next
- Before-screenshots at 390 are missing (first attempt was cropped; needs a build of 033f921). Wide before exist.
- Dark-mode screenshots: Chrome flag preferredColorScheme=0 gave dark, 1 light (opposite of the brief); files are named by what they show.
## Preview
`cd C:\dev\AssuredForge\site-w11; npm run build; npx serve out -l 4175` (stopped now).
Screenshots: C:\dev\AssuredForge\ds-previews\site-a\ (before-*-1440, after-{LIGHT,DARK}-*-1440 and -390).
