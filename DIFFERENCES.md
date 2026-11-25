# Differences from the Tierra design system (before this change)

Measured at f7ded39 against `tokens.json` v1 and the brand book (README sections 4 to 9, 13). Paths are in this repository.

| # | Area | Site today (file:line) | Design system | Fix |
|---|---|---|---|---|
| 1 | Colour source | Hex values typed by hand in `styles/globals.css:7-14` and `:20-27` | Section 13: generated from `tokens.json`, never typed | Generated file plus a check |
| 2 | Colour, dark gold | `styles/globals.css:26` keeps light gold `#b77a2f` in dark mode | gold dark `#d29a52` | Generated |
| 3 | Colour, names | `--color-ink-muted` (`globals.css:10`, 26 uses in `pages/`, `components/`) | token `muted` | Renamed |
| 4 | Colour, missing tokens | No `accent-soft`, `gold-ink`, status, `danger` or `viz-*` tokens | All defined | Generated (available) |
| 5 | Meta colour | `pages/_document.tsx:33` hex in markup | no raw hex | From generated module |
| 6 | Fonts | System stack `globals.css:15` | Space Grotesk display, Inter text, JetBrains Mono code, self-hosted (E-1: due this release) | Self-hosted woff2 |
| 7 | Headings | h1 `Layout.tsx:184` text-4xl, tracking -0.025em; home h1 `pages/index.tsx` text-4xl/5xl, leading 1.1; h2 `Layout.tsx:175` | display-lg 36/42 700 -0.01em; heading-2 24/30 600; heading-3 18/26 600; display face | Base styles from tokens |
| 8 | Body text | `globals.css:32` 17px / line-height 1.7 (28.9px) | body-lg 17/28 | Token |
| 9 | Radius | `rounded-md` 6px on buttons (`Blocks.tsx:194`, `Layout.tsx:30,94`, `design-partners.tsx:7`), cards (`index.tsx:96,131`, `design-partners.tsx:40`), frame (`Blocks.tsx:211`); `rounded` 4px on status chips (`Blocks.tsx:202`, `manufacturing.tsx:8`, `regulated.tsx:9`) | buttons 8px (radius-md), cards 12px (radius-lg), badges 6px (radius-sm) | Token radii |
| 10 | Cards | Surface-alt fill, no border, no shadow, 24px padding (`index.tsx:96,131`, `design-partners.tsx:40`, `Blocks.tsx:287`) | surface, 1px rule border, radius-lg, shadow-1, padding space-5 / space-4 | Card class |
| 11 | Buttons | `Blocks.tsx:194-196`, `Layout.tsx:29-30`: primary hover turns ink; secondary 2px border; padding px-5 py-3 | 44px min, radius-md, label 15px 600, secondary 1px accent border | Button classes |
| 12 | Tierra bar | None at f7ded39; SITE-A added a surface-alt strip with an img | 48px `bar` strip in both themes, `bar-ink` text, reversed Tierra wordmark (README 4, 5; TierraBar) | Done in SITE-V2: inline reversed wordmark on `bar` |
| 13 | Wordmark | `Layout.tsx:33-42`: system face, "Assured" regular and "Forge" bold | mark plus "AssuredForge" in display 700 | One weight |
| 14 | Endorsement | `Layout.tsx:159` sentence with a link on "Tierra LLC" | "A product of Tierra LLC" linked to tierra-llc.com | Link text |
| 15 | Spacing | Tailwind steps used freely (`py-12`, `p-6`, `gap-8`); all on the 4px grid | space-* tokens | On grid; main padding space-12 |
| 16 | Contrast | Light pairs listed in `globals.css:3-5` meet 4.5:1; dark gold is the only token pair not re-derived | 4.5:1 text, 3:1 graphics | Ratios in HANDOFF.md |
| 17 | Third-party notices | None (no fonts shipped) | Licence text of each face in a notices page | `/third-party-notices/` |
| 18 | Mark files | `public/brand/*.svg` carried fixed hex | Websites draw the marks inline (README 4, v2) | Done in SITE-V2: `public/brand/` removed; `public/icon.svg` and the rasters stay (exception E-2) |

## SITE-V2 (design system 1795242812-8f35)

Source: the records copy `assuredforge-architecture/design/tierra-design-system/` (tokens.json, assets/Logos/README.md and drawings), read-only.

Closed: E-A (the header and footer mark is the v2 drawing, inline, ink and gold from tokens; no file needed) and E-B (the Tierra bar is `bar` with `bar-ink` and the reversed wordmark in both themes). The brand files that carried fixed colours are removed. Remaining: E-2 (favicon.ico, icon.svg, apple-touch-icon.png, og.png unchanged) and E-C (latin subset, weights 400/600/700 for Space Grotesk).
