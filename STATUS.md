# Status: assuredforge.com (branch w11-site-redesign)

Updated: Saturday 2026-11-21.

- **Done (items 1-3, OI-608 preparation):**
  - the W8 media list (`docs/W8-MEDIA-LIST.md`), updated with the owner's answers: light only, S9 in the terminal, captions only;
  - /solutions/individuals/: the age line and the RAM line ready to fill (`components/Measured.tsx`);
  - the X8 shot list draft (`docs/X8-SHOT-LIST-DRAFT.md`), phone shots at 390 px.
  - All parked questions are answered (PARKED.md). Not pushed, not published.
- **Plain-language decisions applied** (assessor; owner for edition names): the sweep's §6 decisions 1-13 and the findings table's wording, in 21 files. Build, site check and AI switch check pass. Record: `docs/PLAIN-LANGUAGE-SWEEP.md` §7. Glossary drafts for Kit Notices: `docs/GLOSSARY-PROPOSALS.md`. The marker check now also catches "(draft)".
  - For the assessor: "gate" remains in two interim legal pages (acceptable use, AI use policy); not changed.
  - For the owner: the deployment page keeps "Customer-hosted ... Planned" as a deployment option.
  - Kit Notices (architecture, local commits; pushes stopped while the owner is away):
    - Done: the Founding Design Partner Program glossary entry (fdb0a23) and the Edition entry with the owner's two names (DEC-467, 3b32362).
    - Parked for the owner: CL-30 and CL-35. The Regulated-page sentence stays unchanged until the owner decides.
    - Parked for the assessor: the 20 draft definitions. The site sentences stay unchanged until they are accepted.
    - Noted for the assessor: "gate" on the two legal pages.
- **Industries and Works with (owner decision 2026-11-21): structure built, text waiting for Kit Notices.**
  - /industries/ (8 industries, same card structure), /works-with/ (3 groups with Supported / Being validated / Planned badges; the model-source group shows only with the AI switch on, WR-01), and /manufacturing/ forwarding to /industries/#manufacturing (noindex, not in the sitemap).
  - Menu: "Industries" added. With nine items the desktop header is now two rows (wordmark and call to action, then the menu). Links from Platform and the FAQ to Works with.
  - Every text slot shows a `[CLAIM- entry pending: …]` marker until Kit Notices approves the entries; a publish build refuses them. The site check fails on compliance terms on both pages.
  - What is needed, the candidates in the register and 4 questions: `docs/INDUSTRIES-WORKS-WITH-ENTRIES.md`. Seven of the eight industries have no register basis.
  - Checks: build and site check pass (34 pages; 31 in the sitemap); the AI switch check passes for both values; the WCAG scan finds no new violation on either site (light and dark, 1440, 1024 and 390 px).
- **Still blocks a publish (OI-608):** the W8 media placeholders on 6 pages, and the RAM marker until W8 measures it.
- **Items 4-5 (report only), held until the W8 dry run has ended, as the owner sequenced them:**
  - 4. Accessibility and performance check of both sites. Done so far: the automated WCAG 2.2 AA scan of every page (187 runs, light and dark, 1440 and 390 px, a 320 px reflow check); raw results are in `C:\dev\AssuredForge\ds-previews\a11y\out\axe.json`. Still to do: the keyboard-only walk, page weight and load timing (timings taken during the dry run would not be reliable), then the ranked findings list.
  - 5. Plain-language sweep, outside the legal pages: done, report only, `docs/PLAIN-LANGUAGE-SWEEP.md` (57 findings on 20 pages plus the header and footer; 13 items need an owner or register-owner decision). Nothing changed on the site.
- **Paused** until the owner says the W8 dry run has ended (stop time Saturday 23:30). Ports 4174 and 4175 are free.
