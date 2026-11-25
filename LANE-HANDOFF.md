# W11 lane handoff (website redesign draft, DEC-433)

Model: Sonnet 5.5. Branch `w11-site-redesign` (from main 540620e). Nothing pushed, deployed or published.

## 1. Commits
One commit on the branch (see `git log`): sitemap, home, editions, demo, FAQ, Trust Center, mega-footer, legal set, WS-01 switch.

## 2. Pages (all DRAFT copy; screenshots and video are placeholders until after W8)
- Home `/`: built. Hero, proof strip, 4 how-it-works steps (slots), 4 tiles, data and model, design partner band.
- Product: `/platform/` (overview, updated), `/product/ai-assisted-delivery|governance|traceability|audit|integrations/`: built.
- Solutions: `/manufacturing/` (updated), `/solutions/regulated/`: built.
- `/deployment/` (Editions): desktop "available today" to design partners, requirements, install outline, cloud, customer-hosted.
- `/demo/`: slots for 6 screenshots and a self-hosted MP4 (no player); walkthrough by mailto.
- `/design-partners/`, `/about/`: unchanged. `/contact/`, `/resources/`, `/faq/` (8 questions, native details): built. Quick start, Docs, Release notes are named on Resources without links; they ship with the kit.
- Trust: `/trust/` hub, `/security/` (data-flow section added), `/privacy/` (draft update), `/trust/product-privacy|ai-use-policy|subprocessors|accessibility/` (draft), `/trust/disclosure/`.
- Legal: `/terms/` (draft update), `/legal/evaluation-licence|acceptable-use|design-partner-agreement/` (draft). Every legal page carries "DRAFT — COUNSEL REVIEW".
- Mega-footer in `components/Layout.tsx`: Product, Solutions, Resources, Trust, Company, Legal.

## 3. Claims
Every claim has a JSX comment naming its entry: `grep -rn "CL-[0-9]\|CLAIM-UNVERIFIED" pages components`. Register 0.1 only.
- Cited (0.1): CL-02, 03, 04, 05, 06, 07, 08, 10, 11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 29, 30, 31, 33, 34, 35, 36, 39, and the "must not claim" list (no certification, no SLA, no prices).
- CLAIM-UNVERIFIED: desktop runs on your PC and data stays there; Tierra receives nothing without a support bundle; own model key; desktop availability for the evaluation; the requirements (DEC-430 (8), DEC-432 (4)); the install outline; the product privacy notice facts; the AI use policy points (Tierra does not train, budgets, admin switch); the whole AI-available branch; the data-flow paragraph on Security.

## 4. WS-01 block and owner decisions
All AI wording is in `components/AiWording.tsx`, constant `AI_DELIVERY_AVAILABLE`. Default `false` (HOLD: current wording, CL-19; hero is "where only people approve"). `true` gives the new wording (hero "Governed software delivery, with AI that never approves."). Both builds pass the checks. Decisions needed:
1. Approve or hold the new AI wording (conflicts with register 0.1 CL-19 until DEC-348/349 resolves; 0.2 not used).
2. Provide: email provider name, retention periods, licence check online or offline, support-bundle contents.
3. Whether to name example model providers on the subprocessors page (kept generic, per AD-010).
4. Pricing after the program (left unstated).
5. Counsel: liability limits, venue, training wording, all legal pages.
Note: `site.json` has indexing true on main; do not publish these drafts as they are.

## 5. Local preview
`npm ci`, then `npm run build`, then serve `out/` on a free port, e.g. `npx serve@14.2.4 out -l 4173`, open http://localhost:4173/. Or `npm run dev` (port 3000). Stop it afterwards.

## 6. Accessibility checks
Build check passes (lang, one h1, no skipped heading, main, alt, link targets, no inline script/style, no other origins). Skip link, 44px targets, visible focus (existing), text status labels (not colour only), placeholders have aria-labels, native details for FAQ (keyboard), no motion added. Not done: real browser view at wide and narrow widths (only a headless fetch: 6 pages return 200), contrast re-check of new elements (they reuse existing tokens), screen reader pass.

## 7. Usage
Sonnet 5.5; about 75k tokens by my estimate (about 110k allowing for the 45% undercount). Ended well under the ceiling.
Note: `next build` printed a Next.js upgrade nudge (with a command to run); I ignored it as out of scope. It stops the first build and passes on retry. Next 16.4.1 is pinned by main.

---

# W11b lane handoff (website follow-up; DEC-436 W11 decisions; assessor review WR-01..WR-07)

Model: Sonnet 5.5. Nothing pushed, deployed or published. `site.json` indexing stays `false`; `AI_DELIVERY_AVAILABLE` stays `false`.

## Status of WR-01..WR-07
- WR-01 done. All AI-dependent text is in `components/AiWording.tsx` (home proof strip, how it works, data section, FAQ, Editions, AI-assisted delivery, demo slot, Security data flow, product privacy, subprocessors, AI use policy). `npm run check:switch` builds both values into `.build-switch-off|on` and tests the rendered text; it passes for both.
- WR-02 done. `scripts/check.mjs` lists visible markers as warnings (preview); `SITE_PUBLISH=1` makes them fail. Tested in both modes.
- WR-03 done (option B working assumption). Wording in `components/Positioning.tsx`; design-partner page has two tracks; FAQ, Editions, regulated and manufacturing pages reframed.
- WR-04 done (plain four steps, no-AI variant). WR-05 done (details/summary menu, CTA visible on narrow screens). WR-06: the 2 unreached pages are `/404/` and `/404.html` (the error page, intentionally unlinked). WR-07 done (`components/FlowDiagram.tsx`, inline SVG, theme tokens, title/desc, no-AI variant).
- Media plan: browser frames, `VideoSlot` (native video, MP4/WebM, VTT, poster, no autoplay; placeholder until files exist), home page weight check (about 540 KB of 1500 KB).

## Owner inputs still needed
`[OWNER: email provider]` (privacy, subprocessors), `[OWNER: pricing wording]` (FAQ), confirm option B, counsel items on legal pages, screenshots and video after W8.
