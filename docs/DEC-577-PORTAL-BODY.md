# DEC-577: the remaining "AI" lines in the Portal text (draft for the owner's review; not applied)

Source: `packages/web/lib/messages/en.ts` on `af-sb-577-names` 3fc7bce9 (from origin/af-next ebf68af8). 39 lines contain "AI".
Rule (owner, 2026-11-23): keep "AI" where it discloses that AI is used; usage and cost figures may drop it only where the meaning stays clear.

## Not changed

| Line | Text | Why |
|---|---|---|
| 10, 951, 1206, 3998, 4117, 4666, 4812 | Code comments ("AI Factory Portal parity", ...) | Not shown to anyone |
| 237 | "AI answer from Help. Check the sources." | Help disclosure (owner, DEC-579 (2)) |
| 1393 | "... references to model vendors, model ids and AI tool names" | Describes the check for third-party AI tool names; "AI" is the subject |
| 4101 | "runtime, database, ORM and AI services" | Matches the Environment Definition field name. Rename only with the field |
| 5054 | "(Run, AI actions)" | Already changed on the branch to "(Run, Agent actions)", to match P-4 |

## Proposed

| Line | Key | Before | After |
|---|---|---|---|
| 12 | `AI_BEING_VALIDATED` | "AI-assisted planning and delivery is being validated for the desktop design-partner evaluation, and planned for the hosted edition." | "Agent-assisted planning and delivery is being validated ..." (same as the site's hold wording, after the CL-46 rewording) |
| 203 | delivery map, requirements | "The AI reads the Feature and checks it against the requirements already accepted." | "An agent reads the Feature and checks it against the requirements already accepted." |
| 205 | architecture | "The AI designs the solution and a second AI reviews the design." | "An agent designs the solution and a second agent reviews the design." (no "different model": CL-64 is Draft) |
| 207 | code | "The AI writes the code and describes how it is used." | "An agent writes the code and describes how it is used." |
| 208 | independent tests | "A separate AI writes the tests without seeing the code, ..." | "A separate agent writes the tests without seeing the code, ..." |
| 209 | test run | "... by fixed rules, with no AI involved." | "... by fixed rules, with no agent or model involved." |
| 210 | quality check | "A second AI reviews the code against the requirements." | "A second agent reviews the code against the requirements." |
| 1305 | generation | "AI generation is not configured in this installation." | "Drafting with agents is not configured in this installation." (matches P-1) |
| 6155 | generation | "AI generation is not configured in this installation: nothing was started." | "Drafting with agents is not configured in this installation: nothing was started." |
| 3333 | Tenant suspended | "... connector requests and AI execution until it is reactivated." | "... connector requests and model execution until it is reactivated." (the site's term) |
| 5205 | accept delivery | "An AI wrote the code; a separate AI wrote the tests ...; both suites ran in the sandbox. AI-assisted delivery is being validated." | "An agent wrote the code; a separate agent wrote the tests ...; both suites ran in the sandbox. Agent-assisted delivery is being validated." |
| 5324 | delivery start | "... an architecture reviewed by a second AI, ..." | "... an architecture reviewed by a second agent, ..." |
| 6516 | run evidence | "... the AI action records, ..." | "... the agent action records, ..." (matches P-4) |
| 4237 | cost subtitle | "AI spend and use this period, against your limit." | "Model spend and use this period, against your limit." |
| 4238 | cost loading | "Loading AI use and cost" | "Loading usage and cost" (matches P-3) |
| 4365 | cost series | "AI working" | "Agents working" |
| 4429 | cost source | "AI on your own computer" | "Models on your own computer" |
| 4449 | cost sources | "... spread over n sources of AI." | "... spread over n model sources." |
| 4456 | no use | "No AI use yet" | "No model use yet" |
| 4457 | no use body | "Spend appears here once runs use an AI model in this period." | "Spend appears here once runs use a model in this period." |
| 4458 | test source | "Test models (not real AI)" | "Test models (no real model calls)" |
| 4467 | details note | "Each AI model with its source, calls and tokens." | "Each model with its source, calls and tokens." |
| 4468 | column | "AI model" | "Model" |
| 4877 | run cost note | "Each stage and AI model with its calls, ..." | "Each stage and model with its calls, ..." |
| 4878 | run cost note | "The same figures for each AI model across the run." | "The same figures for each model across the run." |
| 4880 | caption | "Cost by AI model" | "Cost by model" |
| 4881 | caption | "Cost by stage and AI model" | "Cost by stage and model" |
| 4885 | run summary | "No AI calls yet" / "1 AI call" / "n AI calls" | "No model calls yet" / "1 model call" / "n model calls" (the test `runsummary.test.mjs` changes with it) |

Unsure:
- Line 4365, "Agents working" against "Waiting for people": "Agents working" is clear, but the series counts model time. "Models working" is the alternative.
- Lines 12, 5205 and 5324 follow the claims rewording (CL-40R, CL-46, CL-50); they wait for Kit Notices' rows.
