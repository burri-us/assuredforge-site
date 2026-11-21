# X8 shot list: marketing images of the b2 "Experience" release (draft)

Author: Burri. Draft, 2026-11-21. Source: `program/reviews/B2-EXPERIENCE-PLAN-2026-11-22.md` §10 (architecture repo), with
DEC-456, DEC-459 (2) and DEC-463. Not yet reviewed. For the owner or the assessor, who capture the shots (plan §13 (4), S-81).

**Status: nothing here can be captured yet.** These are b2 screens. b2 is built after the partner handover (DEC-450), and its
lanes are still open. This list is ready for when the b2 release candidate runs. It is separate from the W8 media list
(`docs/W8-MEDIA-LIST.md`), which covers the release the site describes today.

## 1. Rules for every shot

- **Sample project only:** "Corner Oven Bakery (sample)", the b2 sample project (plan §6): names on `example.invalid`, no
  secrets, no real data. The Portal's own "Sample" label must be visible in the frame. A run from the sample is the
  pre-recorded one, labelled "Sample (recorded)" (DEC-456 Q2).
- **Marked "sample data":** every caption ends with "Sample data." and the "Sample" label in the image stays readable at
  the phone size.
- **Sizes:** each shot at two widths, 1366 px (window 1366 × 854, 16:10, to fit the site's slots) and 390 px (window
  390 × 844), both at 2× scale. 390 px is the owner's width for all phone shots (2026-11-21); it replaces the plan's 375 px.
- **Themes:** light and dark, from the Tierra design system tokens (DEC-454). So each shot is 4 images, and the list is 24.
- **Nothing private on screen:** no keys, tokens, installation ids, real email addresses or file paths with a user name;
  clean browser profile; no notifications.
- **File names:** `x8-<shot>-<1366|390>-<light|dark>.png` as masters (outside the repo); the site files follow
  `docs/W8-MEDIA-LIST.md` §2 (WebP, two widths).

## 2. The shots

| # | Shot | What is on screen | State to set up first | Plain-language names (DEC-453, DEC-463) |
|---|---|---|---|---|
| X8-1 | Insights overview | The Overview dashboard of the sample Portfolio: the tiles (open runs, approvals waiting, spend this month against the limit, releases in progress, traceability gaps) and one chart with its table view link visible | The sample run recorded, one approval waiting, one traceability gap, so no tile is empty. Sample totals: the sample is excluded from Insights totals by default (plan §6), so turn on its inclusion for the shot if the build offers it, or the tiles show zero (open question Q1) | "Waiting for people" with "N for you"; "AI use and cost"; "Planning coverage" |
| X8-2 | Run console | The recorded sample run: the run pipeline (the 9 phases, steps under details), the time split bar and the cost. At 390 px the pipeline is vertical (below 720 px, DEC-463 Q1) | The "Sample (recorded)" run open; one phase's details expanded | "Sample (recorded)" label in view |
| X8-3 | Traceability | The coverage matrix for the sample Portfolio: requirements by evidence column, one gap cell highlighted with its pattern and label, the gap count per column | The sample's third Requirement left without an independent test, so the gap shows | |
| X8-4 | Getting started checklist | Home with the checklist: two-step verification and the model key done, "Try the sample project" next | A new Person who has done the first two steps | Steps as named in plan §6 |
| X8-5 | Help assistant | The assistant panel answering a question about a Help page, with the "AI answer; check the sources" label, the source links and the cost of the answer | The assistant turned on in installation Setup (off by default, DEC-456 Q3, DEC-463 OQ-2 A); a model key set; a question such as "How do I approve a Release?" | |
| X8-6 | Feedback | The "Send feedback" form: rating, category, free text, "Include technical details" unticked, the "Include a screenshot" guide open | Any Portal page; nothing sent | |

## 3. Alt texts (drafts)

| # | Alt text |
|---|---|
| X8-1 | The Insights overview of a sample Portfolio, with tiles for open runs, approvals waiting, AI use against the monthly limit, releases in progress and traceability gaps. |
| X8-2 | A recorded sample run in the run console, showing its phases, the time split between automation and waiting for a person, and its cost. |
| X8-3 | A traceability matrix of a sample Portfolio's requirements against their evidence, with one missing independent test marked as a gap. |
| X8-4 | The Getting started checklist on Home, with two steps done and "Try the sample project" next. |
| X8-5 | The Help assistant panel with an answer labelled as AI, links to the Help pages it used, and the answer's cost. |
| X8-6 | The Send feedback form with a rating, a category, a text box and the guide for adding a screenshot. |

## 4. Captions (drafts, each to pass the Opus claim check in plan §10)

Each caption names its claim basis. "No register entry yet" means the caption only describes the screen; it states no
claim until the register owner adds an entry for the b2 feature.

| # | Caption | Basis and status wording |
|---|---|---|
| X8-1 | Insights: what is running, what waits for a person, and AI use against your monthly limit, on one read-only page. Sample data. | No register entry yet (X2). The monthly limit: CL-49, keep "Being validated" until W8 has made it Current |
| X8-2 | The run console shows each phase of a run, where time went and what it cost. Sample data. | No register entry yet (X3). Any wording about AI delivery: CL-46 and CL-50, with their status wording |
| X8-3 | Traceability: each requirement against its evidence, with gaps marked. Sample data. | CL-03 (Current) for traceability; the matrix itself has no register entry yet |
| X8-4 | Getting started: a short checklist on Home, built from what you have done. Sample data. | No register entry yet (X4) |
| X8-5 | The Help assistant answers from the Help pages, is labelled as AI and links its sources; each answer shows its cost. It never approves, signs, starts or changes anything. Sample data. | The proposed X5 entries (plan §7), narrowed by DEC-459 (2): **Help pages only** in b2, not your records. Planned until b2 ships, then Being validated until the release test. Must-not (plan §7): "AI support agent", "learns from your data", "approves for you", any time-saved figure |
| X8-6 | Send feedback from any page. It opens your own email app; AssuredForge sends nothing itself. Sample data. | CL-53 (feedback with files you attach); the X6 entry when the register owner adds it |

**Claim check rules (plan §10):** CL-46..CL-50 keep their status wording; CL-53 for anything about connections; the new X5
and X6 entries; no invented metrics (no times, counts or savings that are not measured; the "15 minutes" claim only if
measured, DEC-456 Q7).

## 5. Where they would go on the site (proposals, not built)

| # | Proposed page |
|---|---|
| X8-1, X8-3 | `/product/traceability/` and a new Insights section on `/product/` once X2 has a register entry |
| X8-2 | `/product/ai-assisted-delivery/` (only while AI delivery is on, `AI_DELIVERY_AVAILABLE`) |
| X8-4, X8-6 | `/solutions/individuals/` ("what using it looks like") |
| X8-5 | `/product/ai-assisted-delivery/` or the FAQ, with its AI label in the caption |

The X8 lane writes these page changes; colours stay the design-system tokens (DEC-454).

## 6. Open questions

1. **Q1, sample in Insights totals** (decided when b2 runs): can the sample be included in the totals for the shot, or does X8-1 need a second
   sample Portfolio that counts?
2. **Q2, assistant cost** (decided when b2 runs): X8-5 needs a model key and spends a little; who provides the key for the capture.
3. **Q3, phone width:** answered by the owner (2026-11-21): 390 px for all phone shots.
