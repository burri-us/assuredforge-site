# Status: assuredforge.com (branch w11-site-redesign)

Updated: Saturday 2026-11-21.

- **Done (items 1-3, OI-608 preparation):**
  - the W8 media list (`docs/W8-MEDIA-LIST.md`), updated with the owner's answers: light only, S9 in the terminal, captions only;
  - /solutions/individuals/: the age line and the RAM line ready to fill (`components/Measured.tsx`);
  - the X8 shot list draft (`docs/X8-SHOT-LIST-DRAFT.md`), phone shots at 390 px.
  - All parked questions are answered (PARKED.md). Not pushed, not published.
- **Still blocks a publish (OI-608):** the W8 media placeholders on 6 pages, and the RAM marker until W8 measures it.
- **Items 4-5 (report only), held until the W8 dry run has ended, as the owner sequenced them:**
  - 4. Accessibility and performance check of both sites. Done so far: the automated WCAG 2.2 AA scan of every page (187 runs, light and dark, 1440 and 390 px, a 320 px reflow check); raw results are in `C:\dev\AssuredForge\ds-previews\a11y\out\axe.json`. Still to do: the keyboard-only walk, page weight and load timing (timings taken during the dry run would not be reliable), then the ranked findings list.
  - 5. Plain-language sweep, outside the legal pages: in progress, report-only, to `docs/PLAIN-LANGUAGE-SWEEP.md`.
- **Paused** until the owner says the W8 dry run has ended (stop time Saturday 23:30). Ports 4174 and 4175 are free.
