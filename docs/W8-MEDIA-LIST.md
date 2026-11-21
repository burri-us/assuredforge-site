# W8 media list: every placeholder on assuredforge.com and the asset it needs

Author: Burri. Draft for OI-608, 2026-11-21. For the owner, to capture right after the W8 dry run. Site branch `w11-site-redesign`.

The publish build (`SITE_PUBLISH=1 npm run build`) refuses these 6 pages while their placeholders remain: `/`, `/demo/`,
`/deployment/`, `/product/audit/`, `/product/governance/`, `/product/traceability/`. This list covers each slot on them
(15 in all), plus 2 slots that appear only when AI delivery is switched on (section 5).

## 1. Rules for every asset

- **Data:** the demo Tenant `Corner Oven Bakery (demo)` on the desktop kit, seeded as in `SYNTHETIC-DEMO-TENANT.md`
  (architecture repo, `research/design-partners/materials/`). Invented data only: names and addresses on `example.invalid`,
  presenter identities Demo Author, Demo Release Manager and Demo Auditor. Never the pilot, a partner installation, or real
  people, businesses or customers.
- **Nothing private on screen:**
  - no real email addresses, licence keys, setup codes, installation ids, model keys, tokens or file paths with a real user name;
  - no browser bookmarks, extensions or other tabs (use a clean browser profile, full screen or app window);
  - no Windows notifications or taskbar.
- **AI:** not shown while AI delivery is off on the site (`AI_DELIVERY_AVAILABLE = false`, DEC-436 W11 (2)). The demo PC has
  no model key (SYNTHETIC-DEMO-TENANT, "AI-assisted work: Not shown").
- **What the picture shows must match the claim next to it** (the claim id is in each row). If the kit at W8 does not show
  it, do not capture a substitute: note it, and the slot stays a placeholder.
- **Themes:** capture each screenshot and loop in the Portal's light theme and, if the W8 kit has one, its dark theme. The
  site shows the dark file to visitors whose system is set to dark. If the kit has no dark theme, capture light only; the
  site then shows the light file in both themes (open question Q1).
- **The site adds its own browser frame** (`BrowserFrame`), so capture the Portal page only: no browser chrome.

## 2. Formats and sizes (measured on the current build)

Each slot is 16:10, except the walkthrough, which is 16:9. Measured slot widths in CSS pixels:

| Slot type | Desktop (1440 px window) | Phone (390 px) |
|---|---|---|
| Full-width screenshot (product pages, Editions and deployment) | 1086 × 679 | 356 × 223 |
| Demo screenshot (two-column grid) | 530 × 331 | 356 × 223 |
| Home loop (two-column step list) | 526 × 329 | 356 × 223 |
| Walkthrough video | 1086 × 611 | 356 × 200 |

| Asset | Capture | Files the site needs (under `public/media/`) | Budget per file |
|---|---|---|---|
| Screenshot | Browser window 1440 × 900 CSS px at 2× scale (a 2880 × 1800 PNG master; keep the master outside the repo) | `<name>-light.webp` and `<name>-dark.webp` at 2176 × 1360, plus `-1088` versions at 1088 × 680 for the demo grid and phones | 250 KB at 2176, 100 KB at 1088 |
| Loop | Screen recording of a 1440 × 900 window, 6 to 12 seconds, no sound, no cursor jumps, starts and ends on the same frame | `<name>-light.mp4` (H.264) and `.webm` (VP9) at 1088 × 680, 24 to 30 fps; `<name>-light.webp` poster (a clear frame); a `<name>.vtt` with one cue describing what it shows; the same set for dark | 1.5 MB per video, 80 KB per poster |
| Walkthrough | Screen recording of a 1920 × 1080 window, about 3 minutes, with narration | `walkthrough.mp4` and `.webm` at 1920 × 1080; `walkthrough.webp` poster; `walkthrough.vtt` captions of the full narration; a plain-text transcript for the page | 30 MB per video, 120 KB per poster |

The home page weight check allows 1500 KB and the page is at 548 KB now. The four loop posters add at most 320 KB; the
videos themselves load only when a visitor presses play (`preload="none"`), so they do not count.

## 3. Screenshots

| # | Page and slot | Shows (in the Portal, signed in as) | Claim | File name |
|---|---|---|---|---|
| S1 | `/deployment/`, "Get started", after the five install steps: "The launcher and first sign-in" | The launcher window after `launcher check` passed and the Portal sign-in page next to it, before any password is typed. Crop or blur the installation id and the setup code. Windows desktop allowed here (the only screenshot that is not a Portal page); clean wallpaper, no taskbar icons other than the launcher | CL-19, CL-54 | `deploy-launcher` |
| S2 | `/product/audit/`, end of page: "The audit chain check and the export" | Audit page with the chain check result "Intact" and the export action visible (Demo Auditor or tenant administrator). Demo script step 11 | CL-07, CL-34 | `audit-chain` |
| S3 | `/product/governance/`, end of page: "The approval record" | The signed approval of Release uat-1.0: signed by, role, approver key, audit entry (Demo Release Manager). Demo script step 8 | CL-05 | `governance-approval` |
| S4 | `/product/traceability/`, end of page: "The Digital Thread for one Release" | The Release's Digital Thread tab: the Feature, its Requirement, the Delivery, the Release and the deployment record. Demo script step 12 | CL-03, CL-11 | `traceability-thread` |
| S5 | `/demo/`, Screenshots 1: "Requirement and Feature with the Digital Thread" | The Feature "opening hours and order form" with its linked Requirement and the Thread panel (Demo Author). Demo script step 2 | CL-03 | `demo-requirement` |
| S6 | `/demo/`, Screenshots 2: "A Release with Deliveries and test results" | The Release page, "Where this Release stands", with the recorded Delivery and the integration's test result (Demo Release Manager). Demo script steps 4 and 5 | CL-36 | `demo-release` |
| S7 | `/demo/`, Screenshots 3: "The signed approval" | The approval result after **Approve and sign**: the signed statement and its audit entry. May be the same capture as S3 at the 1088 size | CL-05 | `demo-approval` |
| S8 | `/demo/`, Screenshots 4: "The audit chain check" | The audit chain check "Intact" with the list of the actions from the demo as sentences. May share the capture with S2 | CL-34 | `demo-audit` |
| S9 | `/demo/`, Screenshots 5: "The evidence export" | The Tenant export started or finished, and its offline verification result. If the kit at W8 shows the offline verification only in a terminal, capture that terminal window with the command and the "verified" line (no user name in the prompt) | CL-07 | `demo-export` |

## 4. Home loops and the walkthrough

| # | Page and slot | Shows | Claim | File name |
|---|---|---|---|---|
| L1 | `/`, "How it works", step 1 "Work is delivered": "A Feature with its linked Requirement and Deliveries" | Open the Feature, scroll to its Requirement link and its recorded Deliveries; hover the latest Delivery. No AI run | CL-03 | `home-step1` |
| L2 | `/`, step 2 "Independent checks run": "A Release with its Deliveries and test results" | **Integrate** started on the Release; the status moves to the isolated suite runner's result (cut the waiting time; the loop must not suggest a duration) | CL-36 | `home-step2` |
| L3 | `/`, step 3 "You approve": "The approval record with a signature" | **Approve and sign**: the confirmation, then the signed record with the role and the key. Do not show typing a password or a key passphrase | CL-05 | `home-step3` |
| L4 | `/`, step 4 "You can prove it": "The Release record and the evidence export" | The Release record with the deployment recorded against it, then the export started | CL-07, CL-11 | `home-step4` |
| V1 | `/demo/`, "3-minute video": "Three-minute walkthrough: a requirement to a signed, recorded release" | Demo script steps 2, 3, 4, 5, 8, 11 and 12 in about 3 minutes, narrated by the owner. Every spoken sentence stays within the claims register (the script's "Questions: answers within the claims register"); no AI, no figures that are not in the register, no future features. Step 9 (push to main) only if the W8 kit offers it | CL-03, CL-05, CL-07, CL-08, CL-11, CL-34, CL-36 | `walkthrough` |

## 5. Slots that appear only with AI delivery on

Not needed for OI-608 while `AI_DELIVERY_AVAILABLE` is false. Capture them only after the W8 model-path rehearsal and the
owner's WS-01 decision, on a PC that has the model key.

| # | Page and slot | Shows | Claim |
|---|---|---|---|
| A1 | `/product/ai-assisted-delivery/`, "See it": "An agent run with its test results" | A completed run on the run console with the independent test suite's result | CL-46, CL-50 (Being validated) |
| A2 | `/demo/`, Screenshots 6: "Model key, run budget and monthly limit (Setup)" | Setup with the key masked, the run budget and the monthly limit | CL-48, CL-49 (Being validated) |

## 6. After capture: what the site needs (not built yet)

1. **Screenshots:** `ShotSlot` gains an image mode, a `<picture>` with a `(prefers-color-scheme: dark)` source, the light
   file as fallback, `srcset` for the two widths, and the alt text from section 7. No script.
2. **Loops:** each loop slot gets its `media` value (`{ base, poster }`). The video element should keep the slot's 16:10
   shape for loops (it uses 16:9 for every video today; fix with the image mode). Dark files follow the same
   `prefers-color-scheme` rule.
3. **Walkthrough:** the transcript goes on `/demo/` below the video.
4. The served-file allow-list in `scripts/check.mjs` gains `media/<name>.(webp|mp4|webm|vtt)`; today it refuses any file
   under `media/`, so the first real asset fails the build until then.
5. The publish check then passes these pages, and the home page weight check confirms the budget.
6. The assessor checks each picture against its claim before the publish (the claims rule above).

## 7. Alt texts (drafts, to check against the captured image)

| # | Alt text |
|---|---|
| S1 | The AssuredForge launcher after its system check passed, next to the Portal sign-in page. |
| S2 | The audit page showing the chain check result "Intact" and the Tenant export action. |
| S3 | A signed Release approval showing who signed, their role, the approver key and the audit entry. |
| S4 | The Digital Thread of one Release, from the Requirement and Feature through the Delivery to the recorded deployment. |
| S5 | A Feature with its linked Requirement and its Digital Thread. |
| S6 | A Release page showing its recorded Delivery and the integration test result. |
| S7 | The signed approval of a Release and its audit entry. |
| S8 | The audit chain check result "Intact" with the recorded actions listed as sentences. |
| S9 | A Tenant export and the result of verifying it offline. |
| L1-L4 | The step's own title, as in section 4 (the video's `aria-label` is the slot title). |

## 8. Open questions

1. **Q1, dark theme:** does the W8 kit's Portal have a dark theme? If not, light only (section 1).
2. **Q2, export verification (S9):** where the offline verification shows at W8 (Portal or terminal).
3. **Q3, push to main (V1):** whether the W8 kit offers it (demo script step 9).
4. **Q4, narration:** the owner's voice, or captions only with no narration. Captions are required either way.
