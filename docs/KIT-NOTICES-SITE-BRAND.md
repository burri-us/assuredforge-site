# Report to Kit Notices: Site Brand window, 2026-11-22

Author: Burri. From the Site Brand window (DEC-510, OI-689). Nothing here is pushed or live; both sites change at the release
(Wednesday 25 to Friday 27 November, `docs/RELEASE-PACKAGE.md` G-1 to G-8). Kit Notices owns the register, the glossary and the
design system records; this window does not edit them.

## 1. Claims register: US spelling (owner decision 2, 2026-11-22)

The owner wants US spelling ("license") in register text. The site changes only after the register does.

| Register entry | Current text (excerpt) | Change |
|---|---|---|
| CL-22D (`CLAIMS-REGISTER.md` line 36) | "...licence..." in the Desktop edition exit sentence | licence -> license |
| CL-53 (`CLAIMS-REGISTER.md` line 70) | "...when you ask for a licence, and prompts or project content only in what you choose to send us..." | licence -> license |

The register already uses "license" in CL-23 (line 37), so it is mixed today.

Site pages that repeat CL-53 and follow the register change: `pages/index.tsx`, `pages/faq.tsx`, `pages/deployment.tsx`,
`pages/security.tsx`. When the register is updated, tell this window; the four pages change in one commit.

## 2. Held for counsel (owner decision 3): must match the signed agreement, which says "licence"

No change on the site until counsel decides. About 20 uses:

| Page | Uses |
|---|---|
| `pages/trust/product-privacy.tsx` | heading "Licence check" and about 4 more (one of them is the CL-53 sentence) |
| `pages/legal/evaluation-licence.tsx` | title "Evaluation licence (EULA)", description and about 10 in the body; the URL `/legal/evaluation-licence/` would need a forwarding page if renamed |
| `pages/legal/design-partner-agreement.tsx` | 3 ("successor licence", "the evaluation licence" twice) |
| `pages/legal/acceptable-use.tsx` | 2 ("new or renewed licences", "Share your licence") |
| `components/Layout.tsx` footer, every page | link label "Evaluation licence" (kept equal to the page title) |
| `components/Blocks.tsx` lines 106 and 140, all 9 legal pages | date format "21 November 2026" (US style would be "November 21, 2026"); `scripts/check.mjs` matches the label, so it changes in the same edit |

Suggest adding these to `COUNSEL-LIST.md` as one item: "US spelling and date format on the legal pages, once the agreement allows".

## 3. Design system: E-1 and E-2

**E-1 correction for the exceptions table.** The register text says the live sites use the system font stack. That is out of date
for tierra-llc.com: it has self-hosted Inter and Space Grotesk since 744b56f (live). After this pass both sites self-host all three
brand faces, with the token fallback stacks, and ship each licence text next to the font files (the site checks require them):

| Font | Licence | Package and version (assuredforge.com) | Package and version (tierra-llc.com) |
|---|---|---|---|
| Inter | SIL OFL 1.1 | @fontsource/inter 5.3.0 | @fontsource/inter 5.1.1 (400, 600; files verified byte-identical against the npm package) |
| Space Grotesk | SIL OFL 1.1 | @fontsource/space-grotesk 5.3.0 | @fontsource/space-grotesk 5.1.1 (400, 600, 700; verified the same way) |
| JetBrains Mono | SIL OFL 1.1 | @fontsource/jetbrains-mono 5.3.0 | @fontsource/jetbrains-mono 5.3.0 (400; new on tierra-llc.com, used by the notices page) |

The design system holds no font files (the records copy and the live artifact 6920 were both checked). Suggestion: README section 6
could name the source as "the @fontsource packages, latin subset, woff2", so the next product takes the same files.

**E-1 and E-2 can be closed at the release** (owner, DEC-510), once both sites are live with this pass.

## 4. Logos-group candidates (owner, 2026-11-22: reuse by the next product)

Built from the exact Logos v2 reversed drawings on a `bar` (#0f2744) tile, rx 14, paths unchanged (scaled as one group), token
colours (#e8edf2, #d29a52), no C2PA block. The Logos group has no favicon or share image today; these are proposed for it.

| File | Source | SHA-256 |
|---|---|---|
| assuredforge.com `public/icon.svg` | AssuredForge mark, reversed, group scaled 0.7 and centred | 0c0a07ff6ba2dadcf58f08b2980e3f30f97f37b99605d22ad23f6f7508bca765 |
| assuredforge.com `public/favicon.ico` (16, 32, 48) | rendered from icon.svg | badc20dc001ce7dd7c032d71512fb4b7e61320fd6393ba62550bf60cfaec6791 |
| assuredforge.com `public/apple-touch-icon.png` (180, square, opaque) | rendered from icon.svg | bda5ababb111acbedb3458cd7630ae9e54c470f49bdc28a7fe2abf17236da758 |
| assuredforge.com `public/og.png` (1200x630) | mark and wordmark, Space Grotesk and Inter | 7b65759692e8fec75df20588041cb2dc3257684373ba6cfb199d23ac317a3dd6 |
| tierra-llc.com `assets/favicon.svg` | Tierra T and base line, reversed, group scaled 1.5 | c2a6dde7d5a3801b5f5ffb13d78f0aa158f8b24d26a245d14f1b89892ccc750d |
| tierra-llc.com `assets/favicon-32.png` | rendered from favicon.svg | 60a19d4458cb803a51cedc3da2efad1ffde4aaf4d440d3b15af319f525c5b8c5 |
| tierra-llc.com `assets/apple-touch-icon.png` (180) | rendered from favicon.svg | b5f474fcca164a0bf56485a0ec2517a38a36f72b42d36377f8f217aa42a7bca1 |
| tierra-llc.com `assets/og.svg` and `og.png` (1200x630) | Tierra wordmark v2, Space Grotesk and Inter | 6556f59a9bbf7187dbc1a29989521d83d0ecaf580542aa6674b173f3ecb90833 / 84f6b6706bfa3bb3e458659dac716d9de268d555b0607af57893a0d144526b91 |

Files: `C:\dev\AssuredForge\site-w11` (branch w11-site-redesign) and `C:\dev\AssuredForge\tierra-site-p2` (branch ds-6920).

## 5. For the record

- Both sites are on tokens 6920 (SHA-256 57451ddd...). Both had been on 8f35 (2ed1bb14...).
- E-3 (dashed card on tierra-llc.com) unchanged.
- tierra-llc.com work is on a new local branch `ds-6920`; its push and deploy need their own owner approval (not covered by
  RELEASE-PACKAGE, which is for assuredforge.com).
