// WS-01 (website review 2026-11-20): how the site describes AI.
//
// ONE SWITCH. Every sentence on the site that says whether AI assistance is available today comes from this file (WR-01:
// that includes the home proof strip, the FAQ, the Editions requirements, the demo slots, the privacy and policy drafts and
// the Security data-flow paragraph). No page may state an AI fact of its own: it reads it from `AI`.
//   false (default, HOLD)  the wording in force on main: AI assistance is planned and is not part of the platform today
//                          (claims register 0.1, CL-19; DEC-257 AI-OD-4). No page names a model key, a model source or a provider.
//   true  (new wording)    the kit ships an AI delivery pipeline; the wording below describes it.
// The owner approves or holds the new wording at publish time (it conflicts with claims register 0.1 CL-19 until the
// register conflict with DEC-348/349 is resolved; register 0.2 is blocked, DEC-427 Amendment 2). Change only this constant.
// Wording rules from the claims-conflict brief (2026-11-21): "You use your own model key" (never "You choose the model source");
// no "every result independently tested" (CL-36 covers integration only); no "people approve every gate" (a must-not row): say
// "the approvals the governance requires". The `true` branch is CLAIM-UNVERIFIED until register 0.3 lands (CL-19, CL-40R, CL-46,
// CL-47, CL-48, CL-49 are the proposed entries).
//
// Both values are exercised by `npm run check:switch` (scripts/check-switch.mjs), which builds the site once per value. The
// environment variable below exists only for that check; a publish build (SITE_PUBLISH=1) refuses it.
export const AI_DELIVERY_AVAILABLE = false;
const ON = AI_DELIVERY_AVAILABLE || process.env.AF_SWITCH_CHECK_ON === "1";

export const AI = ON
  ? {
      // ---- NEW WORDING (needs the owner's decision) ----
      tag: "Design-partner evaluation",
      heroTitle: "Governed software delivery, with AI that never approves.",
      heroLead:
        "AssuredForge runs AI-assisted delivery under your rules: every requirement traced, the approvals the governance requires given by named people, and every action in an audit chain you can prove.",
      homeBlock:
        "AI assistance runs inside the platform's governance: it prepares work, runs agent runs and recommends. People set the governance and give the approvals it requires; AI never approves, accepts risk or authorizes a release.",
      deliverTile:
        "Agents prepare changes under the same gates as human work. You use your own model key, set run budgets and monthly limits, and an administrator turns model execution on.",
      deliverStatus: "Available to design partners",
      productLead:
        "AI-assisted delivery runs inside AssuredForge's gates. Agent runs plan, write and test changes; people give the approvals the governance requires.",
      proof4: "Use your own AI model key", // CLAIM-UNVERIFIED (CL-47 proposed; DEC-430 (6))
      dataModel: "Your data, your model key",
      dataModelSentence: "You use your own model key and set run budgets and monthly limits. ",
      // CL-48 (proposed): technical pages, FAQ and quick start only.
      modelPath: "The evaluation kit works with your own Anthropic API key. Other model sources appear in Setup only once they are supported for your installed version.",
      // WR-04: how it works, in plain words.
      how: [
        { t: "AI builds", d: "AI-assisted delivery prepares the work for a Feature, inside the same gates as human work." },
        { t: "Independent tests check", d: "Tests run on the integration in an isolated suite runner, apart from whoever wrote the change." }, // CL-36 (integration only)
      ],
      flow: ["Requirement", "AI builds", "Independent tests", "Your approval", "Release and proof"],
      flowAlt: "Five steps in order: a requirement is recorded, AI builds the work, independent tests check it, you approve it, and it is released with the proof recorded.",
      demoShot: "Model key, run budget and monthly limit (Setup)",
      installStep: "Create your Tenant, then enter your own model key in Setup. Model execution stays off until an administrator turns it on.",
      securityFlow:
        "If you turn on model execution, prompts go only to the model provider you configure, under your own agreement with it. Tierra does not receive them.",
      faqModels: "Which AI models does it work with?",
      faqCost: "Any model-provider charges are billed to your own account by that provider.",
      productPoints: [
        "Agent runs plan, write and test changes for a Feature, inside the same gates as human work.",
        "Tests run on the integration in an isolated suite runner, apart from whoever wrote the change.",
        "You use your own model key.",
        "You set a run budget and a monthly limit. An administrator turns model execution on or off in Setup as a signed decision.",
        "A person reviews, and a named person gives the approvals the governance requires, before anything is released.",
      ],
      available: true,
    }
  : {
      // ---- HOLD WORDING (matches the live site and claims register 0.1) ----
      tag: "Software Delivery Governance Platform",
      heroTitle: "Governed software delivery, where only people approve.",
      heroLead:
        "AssuredForge governs software delivery under your rules: every requirement traced, every release approved and signed by a named person, every action in a tamper-evident audit chain.",
      homeBlock:
        "AI assistance is planned as an optional extension under the same governance: it may recommend and prepare, and it never approves, accepts risk or authorizes a release. It is not part of the platform available today.",
      deliverTile: "AI assistance is planned as an optional extension under the same governance. It may recommend and prepare; people decide.",
      deliverStatus: "Planned",
      productLead:
        "AI assistance is planned as an optional extension under the same governance: it may recommend and prepare, and it never approves, accepts risk or authorizes a release. It is not part of the platform available today.",
      proof4: "Works on its own, without third-party connectors", // CL-16
      dataModel: "Your data",
      dataModelSentence: "",
      modelPath: null as string | null,
      how: [
        { t: "Work is delivered", d: "Work is delivered against a Feature, with each Delivery recorded." }, // CL-03
        { t: "Independent checks run", d: "Tests run on the integration in an isolated suite runner, apart from whoever wrote the change." }, // CL-36
      ],
      flow: ["Requirement", "Delivery", "Independent checks", "Your approval", "Release and proof"],
      flowAlt: "Five steps in order: a requirement is recorded, the work is delivered, independent checks run on the integration, you approve it, and it is released with the proof recorded.",
      demoShot: null as string | null,
      installStep: "Create your Tenant and sign in.",
      securityFlow: "",
      faqModels: null as string | null,
      faqCost: "",
      productPoints: [] as string[],
      available: false,
    };
