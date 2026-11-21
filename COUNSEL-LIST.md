# Lane LEG handoff (site-legal-review, from w11-site-redesign b3bdb8d). Not pushed, not deployed.
Not served: root file, not under public/ or pages/.

## Done (factual fixes only)
- product-privacy: added CL-53 "connects only to services you set up" sentence (same wording as Editions/FAQ).
- ai-use-policy: AI-on intro now says AI is being validated (AI claims are Being validated, not proven).
- design-partner-agreement: cohort wording now matches CL-23/O-3 (individuals and small teams on desktop; organizations on a waitlist, hosted planned); exit "exported then deleted" labelled hosted (planned), desktop per CL-22D.
- evaluation-licence: termination clause no longer says data is exported then deleted (desktop records stay on the PC, CL-22D/CL-53).
- manufacturing, solutions/regulated: added "waitlist, not a current offer" line; manufacturing heading "What it gives you today" -> "What the platform does today".
- privacy, terms, subprocessors, acceptable-use: no factual mismatch found (GitHub Pages, IONOS, no cookies/scripts verified in code).
- Build: npm ci + npm run build pass (31 pages, site check passed).

## Marker convention
All eight legal pages use LegalPage, which shows the banner "DRAFT — COUNSEL REVIEW" (components/Blocks.tsx). scripts/check.mjs exempts DRAFT and [Counsel...] items only on pages with that exact banner text; so the legal pages do NOT block publish. Not renamed ("Draft for counsel review" would break the check regex). SITE_PUBLISH=1 would still fail on 15 markers on 7 non-legal pages (placeholders/W8 on home and product pages, "[RAM: CONFIRM AT W8]" and "[counsel review: age line]" on solutions/individuals): outside this lane.

## Next step
Counsel review of the list below; then remove banner and set effective date.

## For counsel (page: exact text)
- privacy: "[Counsel to confirm the rights text for the jurisdictions we serve.]"; email retention "24 months"; "tell design partners by email" for changes; no children/age statement (CL-52 age line is under counsel review).
- privacy/product-privacy: CL-53 says desktop connects to services the user sets up; privacy notice and subprocessors not yet aligned (DEC-447 S-98, counsel pack). Support-bundle 90-day deletion vs "deletes" not in notice.
- terms: "[Counsel to set the exact limit and the carve-outs the law requires.]"; "[Counsel to confirm venue and any consumer-law exceptions.]"; "continued use after that date means you accept it".
- subprocessors: "[Counsel to set the notice period.]"; AI.modelPath names Anthropic on this trust page (CL-48 limits naming to technical pages, quick start, FAQ; comment says kept as-is) - owner/counsel to confirm if AI switch goes on; whether user-chosen providers/git remotes/connectors are subprocessors.
- ai-use-policy: "Tierra does not train models on your data. [Counsel and owner to confirm...]" (no register claim); "You can set a run budget and a monthly limit..." (CL-49, Being validated).
- acceptable-use: "[Counsel to set notice and cure terms.]"; "We may suspend access that breaks this policy."
- evaluation-licence: confidentiality, feedback rights, "as is" warranty, "[Counsel to set the limit and carve-outs.]", Michigan law/venue, and my new termination text.
- design-partner-agreement: "[Owner decision: pricing intent is not stated here.]" (DEC-438 pricing wording exists: free during programme, founding pricing, 30 days' notice); "production data needs separate written authorization"; desktop-exit CL-22D text needs counsel (T-508).
- All eight: "Effective date: to be set when counsel approves. Draft of 2026-11-20." (LegalPage).
