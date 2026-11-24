# After-rehearsal release plan: assuredforge.com, tierra-llc.com and the Portal copy branch

Author: Burri. 2026-11-23 (night). Local only; nothing pushed. For the owner. No release step before the owner says "the rehearsal has
ended". This plan extends `docs/RELEASE-PACKAGE.md` (the steps there stay in force); it only adds the DEC-577 copy round and its order.

## 1. What is released

| Surface | Release head (local) | Built on | Changes added by DEC-577 |
|---|---|---|---|
| assuredforge.com | `dec577-copy-round` 5a42fd0 (+ fix F-1 below) | `w11-site-redesign` 020dae4 (2 commits on top) | 7 page and component files: no "AI" in headlines, names and navigation; disclosure pages unchanged (DEC-577, DEC-592) |
| tierra-llc.com | `dec577-copy-round` 6f8008f | `ds-6920` 763dbfd (1 commit on top) | `about/index.html`: "with software they can trust" (3 places) |
| Portal | `af-sb-577-names` 8698b76f | origin/af-next ebf68af8 (3 commits on top) | `packages/web/lib/messages/en.ts` (70 lines) and 4 test files |

Both site copy branches are fast-forwards of the branches the release package already names, so the package's steps run unchanged
after one local fast-forward (step A2, B2).

## 2. Order

1. **Preconditions (all):** the owner has said the rehearsal has ended; the claims rows reworded under DEC-592 (CL-04, CL-19, CL-40R,
   CL-46, CL-50, the hold wording, CL-11 for tierra-llc.com) are on architecture main (read-only check of the register); fixes F-1 and
   F-2 are applied or explicitly deferred by the owner.
2. **assuredforge.com** (Wednesday to Friday), per RELEASE-PACKAGE §3.
3. **tierra-llc.com**, only after assuredforge.com's live check passed (RELEASE-PACKAGE §7).
4. **Portal branch**, independent of the site days: after rc-next, b3's overlap check, then b3 integrates. It is not deployed by this
   window. Until it lands, the Portal keeps "AI-assisted planning and delivery is being validated" where the site says
   "Agent-assisted ..."; same meaning, different word, for a few days. Acceptable; no claim changes state.

## 3. Steps and checks

### A. assuredforge.com
- A1. Save the live copy (§3 step 1).
- A2. In `site-w11`: `git merge --ff-only dec577-copy-round` on `w11-site-redesign` (no new commit). Update §1 release notes: "AI-assisted
  delivery" becomes "Agent-prepared delivery"; add one wording bullet for DEC-577.
- A3. §3 step 2 (merge `origin/main`, PR #8 conflict in `pages/manufacturing.tsx`; `site.json` indexing on; `SITE_PUBLISH: "1"` in
  `pages.yml`), then G-2, G-6, `npm audit`, fonts, author-email check from a full clone of the exact head (K-33 equivalent).
- A4. Owner approval in this window; push, pull request, "build", merge, one deploy with `target=custom-domain -f index=false`, live
  compare (§3 steps 3 to 9). About 4 Actions minutes.

### B. tierra-llc.com
- B1. Save the live copy (§7.2 step 1). T-2: refresh `origin/main` (still 744b56f in the local ref, 2026-11-23).
- B2. In `tierra-site-p2`: `git merge --ff-only dec577-copy-round` on `ds-6920`.
- B3. T-3 on the exact head; **T-4 re-run is needed**: the head changed from 763dbfd (scanned) to 6f8008f (About text only).
- B4. Owner approval on the day; push `ds-6920`, pull request, T-3 again on the pushed head, merge, automatic deploy, live compare
  (16 files from the 6920 release, plus `about/index.html` already counted). About 1 Actions minute.

### C. Portal (`af-sb-577-names`)
- C1. Fix F-2 (Help guide) on the branch, with its own plan first (DEC-575).
- C2. b3's overlap check against rc-next. Files to compare: `packages/web/lib/messages/en.ts` (70 lines; high-traffic file),
  `test/fix9.test.mjs`, `test/insights.test.mjs`, `test/proposals.test.mjs`, `test/runsummary.test.mjs`, and `help/how-to.md` once F-2
  is applied. No migration and no cross-Tenant change, so no DB test slot is needed (DEC-555).
- C3. b3 runs the merge checks (DEC-419: tools suite and throwaway image builds; Docker is b3's). This window does no Docker.
- C4. Final owner approval of the diff; b3 integrates.

## 4. Checks run tonight (local, exact heads, clean worktrees)

| Head | Check | Result | Log |
|---|---|---|---|
| site 5a42fd0 | `SITE_PUBLISH=1 npm run build` (G-2) | rc 0; 34 pages, no marker | `scratchpad/relplan/site.log` |
| site 5a42fd0 | `npm run check:switch` (G-6) | rc 0; 34 pages each, off and on | same |
| site 5a42fd0 | `npm audit --audit-level=high` | rc 0; 0 vulnerabilities | same |
| site 5a42fd0 | `check-fonts` | rc 0; 0 problems | same |
| tierra 6f8008f | `tools/check.py` and `--publish` (T-3) | rc 0 both; 5 pages, 0 problems | `scratchpad/relplan/tierra.log` |
| Portal 8698b76f | `npm run build` (CSP, accessibility, plain language) and `npm test` | passed; 832 pass, 0 fail (earlier tonight) | in the branch commit record |

Not run tonight: the release-day steps (merge of `origin/main`, indexing, `pages.yml`), K-33 from a full clone, tierra T-4 scan.

## 5. Rollback

- assuredforge.com: RELEASE-PACKAGE §6 (revert of the merge through a pull request; about 4 Actions minutes). The copy round goes back
  with the redesign; reverting only the copy is `git revert` of 5a42fd0 and its parent copy commit on a rollback branch.
- tierra-llc.com: §7.3. Reverting only the mission sentence: `git revert 6f8008f`.
- Portal: b3 reverts the three commits on af-next; text and tests only, no data effect.
- Recommendation: pre-approve both site rollbacks with the release approval (§6 step 6, §7.3 step 5).

## 6. Findings (DEC-373: Fix Now by default)

| # | Finding | Class | Fix |
|---|---|---|---|
| F-1 | `pages/platform.tsx:35` links to the renamed page with the old text "AI-assisted delivery"; the footer already says "Agent-prepared delivery" | Fix Now; one line | Link text "Agent-prepared delivery"; G-2 and G-6 again |
| F-2 | Portal Help guide `packages/web/help/how-to.md` still names the old panels: "Generate with AI" (720, 821, 1079), "Deliver with the AI pipeline" (864, 1079), "AI use and cost" (1222, 1230), "AI actions" (936), "AI action records" (945), "AI model" (928) and the old hold wording (784, 891, 1053). After the rename the Help points to names that no longer exist (DEC-273, docs track migration) | Fix Now; about 12 lines, same branch | Own plan first (DEC-575); keep the Help answer header and model-setup lines |

## 7. ORPH-031 and the site rows in "later" (BACKLOG-DECISIONS.csv, records-consolidation f814565)

| Row | Verdict | Evidence |
|---|---|---|
| ORPH-031 font budget (F-1 of lane b2-e1r) | **Close: done** | Option A (variable fonts) merged with TOK-2: three files, 110,948 bytes; `packages/web/test/tokens.test.mjs:92-103` on af-next ebf68af8 enforces at most 4 files and 200 KB; part of the 832 passing tests |
| ORPH-031 secondary-button edge (F-7) | **Close: done, README reading** | af-next `components/ui.tsx:20` secondary = `border-primary`; `design/tokens.json:13` maps primary to `accent`; matches the Button README ("accent border and label"). No af-next commit to `ui.tsx` ever added `border-control-border`. Note for Kit Notices: the `control-border` usage text in the design system `tokens.json:65` still lists "secondary buttons"; drop those two words |
| OI-608 placeholders | **Keep (later), narrowed** | Release part done: `components/Measured.tsx:14` `SHOW_PLACEHOLDERS = false`, G-2 passes with no marker (DEC-532 (3)). Still needed: place the W8 media in the 15 slots (`docs/W8-MEDIA-LIST.md`) after capture |
| OI-689 brand refresh 6920 | **Close at the release** | Both sites on tokens 6920 (site `styles/tokens.generated.css` from SHA-256 57451ddd...; tierra `ds-6920`); G-8 met; closes when both live compares pass |
| ORPH-055 site screenshots image mode | **Close as duplicate of OI-608** | Same work: the screenshot slots after W8 capture |
| T-704a public website v1 (informational) | **Close at the release** | The W11 redesign is that site |
| T-704b public website v2 (commercial) | **Keep (later)** | Commercial work is deferred (program re-baseline); not started |

The search found five site rows marked "later". T-704a and T-704b may have been counted as one.
