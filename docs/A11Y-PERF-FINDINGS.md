# Accessibility and performance check: assuredforge.com and tierra-llc.com (item 4)

Author: Burri. 2026-11-21. Report only; nothing is fixed here except item F-2, which the owner asked for. For the owner.

**Scope.** Local builds of both sites:
- assuredforge.com: branch w11-site-redesign at 0989652.
- tierra-llc.com: tierra-site-p2, the live content.

Both were served by a local gzip static server that behaves like GitHub Pages. The checks:
- An automated WCAG 2.2 AA scan (axe-core 4.14.1) of every page, light and dark, at 1440 and 390 px, plus a 320 px reflow check.
- A scripted keyboard-only walk of every page at 1440 and 390 px.
- A manual contrast check of the results the scan could not decide.
- Page weight and load timing under throttled mobile conditions (Slow 4G: 150 ms latency, about 1.4 Mbit/s down; CPU 4× slower; 390 px phone viewport).

Neither site has a form.

**Limits.**
- Headless Chrome only: no Firefox, no Safari, no screen reader.
- The timings come from a local server, not the GitHub Pages CDN. They compare pages with each other; they do not predict field numbers.

## Ranked findings

| # | Severity | Site | Finding | Where | Proposed fix (not applied) |
|---|---|---|---|---|---|
| F-1 | Serious (WCAG 2.4.11 Focus Not Obscured, AA) | AF | At phone width the menu (a `<details>` panel laid over the content) stays open when keyboard focus moves past its last item. On /404/ and /faq/ the next focused link sits completely under the open panel. The other pages pass only because their next link happens to be lower down | Phone width, menu open, then Tab past the menu | Lay the panel in the normal page flow, so that it pushes the content down instead of covering it (CSS only, no script). Or close the menu when focus leaves it, which needs a small script |
| F-2 | Serious (WCAG 2.1.1 Keyboard, via axe `scrollable-region-focusable`), **fixed** | AF | The licence text on /third-party-notices/ formed a sideways-scrolling region at 390 px that a keyboard user could not reach | /third-party-notices/ | **Fixed in 0989652:** the text wraps anywhere and there is no scroll region. Re-scan clean on both sites at 1440, 390 and 320 px, light and dark. Tierra already wrapped, so no change there |
| F-3 | Moderate (performance) | AF | Every page loads about 130 to 175 KB of compressed JavaScript and 20 to 46 requests, for pages with no interactive features. Next.js also fetches linked pages ahead of time: /contact/ and /404/ make 46 requests. The pages are still fast (F-7), but most of the weight is script nobody needs | All pages | Turn off link prefetching, or export the pages without client script. Revisit when the W8 media arrives, because video adds weight |
| F-4 | Minor (best practice, not a WCAG failure) | AF | The phone menu does not close with Escape (native `<details>` behaviour) | Phone menu | Comes with the F-1 fix if a script is used; otherwise leave as is |
| F-5 | Minor (best practice) | AF, Tierra | The skip link moves to `#main`, but `<main>` has no `tabindex="-1"`. Chrome continues from the main area, as checked on every page. Some older browsers and screen readers do not | All pages | Add `tabindex="-1"` to `<main>` on both sites |
| F-6 | Info | AF, Tierra | Fonts are the largest asset: 73 to 107 KB per page on both sites (about 95% of Tierra's page weight) | All pages | Optional: subset the fonts to the characters the sites use |
| F-7 | Info (passes) | AF, Tierra | Load timing under Slow 4G and a 4× CPU: largest content paint 1.0 to 1.4 s on AF (median of 3 on Home 1.45 s) and 0.7 to 0.9 s on Tierra. Layout shift at most 0.056 (/resources/). All under the "good" thresholds (2.5 s; 0.1). One first reading of 3.1 s on /product/audit/ measured 1.1 to 1.2 s on three repeats | All pages | None |
| F-8 | Info (passes) | AF, Tierra | Colour-contrast items axe could not decide, checked by hand: the Tierra wordmark 12.8:1 on the AF bar and 15.1:1 (light) or 14.8:1 (dark) on Tierra; the AF home flow-diagram labels 13.9:1 (light) and 13.4:1 (dark). Minimum 4.5:1 | Header bar, AF Home | None |
| F-9 | Info (passes) | AF, Tierra | Keyboard walk: a skip link is the first stop on every page; every focused element shows a visible focus style and is on screen and not covered (except F-1); no focus traps. On 7 pages (AF product pages and third-party notices; Tierra About and notices) the main area has no links, so after the skip link the next Tab goes to the footer, as expected. The phone menu opens and closes with Enter and Space, and Tab goes through its items in order | All pages | None |
| F-10 | Info (passes) | AF, Tierra | Automated scan: no violation left on either site after F-2. No page scrolls sideways at 320 px | All pages | None |

## Page weight (compressed, as transferred; 390 px, cache off)

| Site | Pages | Weight per page | Requests | Largest content paint (Slow 4G, CPU ×4) |
|---|---|---|---|---|
| tierra-llc.com | 4 | 78 to 93 KB | 7 to 8 | 0.68 to 0.89 s |
| assuredforge.com | 32 (plus 2 forwarding pages) | 222 to 329 KB (Home 237 KB) | 18 to 46 | 1.0 to 1.45 s |

AF Home stays within the site check's 1.5 MB limit (551 KB uncompressed on disk). Raw results: `C:\dev\AssuredForge\ds-previews\a11y\out\perf.json`
and `out\axe.json`; scripts `scan.cjs`, `rescan.cjs`, `kbd.cjs`, `kbd2.cjs`, `kbd3.cjs`, `perf.cjs`, `svgc2.cjs` in the same folder.
