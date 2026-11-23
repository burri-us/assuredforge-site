// WS-01 (website review 2026-11-20): how the site describes AI.
//
// ONE SWITCH. Every sentence on the site that says whether AI assistance is available today comes from this file (WR-01:
// that includes the home proof strip, the FAQ, the Editions requirements, the demo slots, the privacy and policy drafts and
// the Security data-flow paragraph). No page may state an AI fact of its own: it reads it from `AI`.
//   false (default, HOLD)  the wording in force on main: AI assistance is being validated for the desktop design-partner evaluation
//                          (hold wording per DEC-439 O-4: "being validated for the desktop design-partner evaluation", CL-40R, CL-46). No page names a model key, a model source or a provider.
//   true  (new wording)    the kit ships an AI delivery pipeline; the wording below describes it.
// The owner approves or holds the new wording at publish time. The `true` branch rests on claims register 0.3 (CL-19, CL-40R, CL-46,
// CL-47, CL-49, CL-50; all Being validated until the W8 rehearsal). Change only this constant.
// Wording rules from the claims-conflict brief (2026-11-21): "You use your own model key" (never "You choose the model source");
// no "every result independently tested" (CL-36 covers integration only); no "people approve every gate" (a must-not row): say
// "the approvals the governance requires". Naming scope (CL-48): Anthropic only on technical pages, quick start and FAQ.
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
        "AI-assisted planning and delivery runs under human governance: people set the governance, give the approvals it requires and handle every exception, and AI never approves, accepts risk or authorizes a release. This is being validated.", // CL-40R, CL-46 (OI-474 WS-3, DEC-559)
      deliverTile:
        "AI-assisted planning and delivery runs on your own PC with your own model key. Every run has a run budget and a monthly limit, with defaults you change in Setup. Model execution stays off until an administrator turns it on.", // CL-19, CL-49
      deliverStatus: "Being validated", // CL-46 (one label for AI everywhere)
      productLead:
        "AI-assisted planning and delivery runs under human governance: people set the governance, give the approvals it requires and handle every exception, and AI never approves, accepts risk or authorizes a release.", // CL-40R
      proof4: "Use your own AI model key", // CL-47 (Being validated)
      dataModel: "Your data, your model key",
      dataModelSentence: "You use your own model key. Every run has a run budget and a monthly limit, with defaults you change in Setup. ", // CL-47, CL-49
      // CL-48: technical pages, FAQ and quick start only.
      modelPath: "The evaluation kit works with your own Anthropic API key. Other model sources appear in Setup only once they are supported for your installed version.",
      // WR-04: how it works, in plain words.
      how: [
        { t: "AI builds", d: "AI-assisted planning and delivery prepares the work for a Feature, under human governance." }, // CL-40R
        { t: "Independent tests check", d: "Each AI-built delivery is checked by an independent test suite written from the requirements, which stays fixed across reworks." }, // CL-50
      ],
      flow: ["Requirement", "AI builds", "Independent tests", "Your approval", "Release and proof"],
      flowAlt: "Five steps in order: a requirement is recorded, AI builds the work, independent tests check it, you approve it, and it is released with the proof recorded.",
      demoShot: "Model key, run budget and monthly limit (Setup)",
      installStep: "Create your Tenant, then enter your own model key in Setup. Model execution stays off until an administrator turns it on.",
      securityFlow:
        "You bring your own model source and credentials. Prompts and project content for a run go to the provider you chose, under your own agreement with that provider; Tierra does not receive them unless you send us a support bundle that includes them.", // CL-47 (final, DEC-438 (1))
      faqModels: "Which keys work?", // DEC-437; CL-48
      faqCost: "Model usage is billed to you by your own provider; Tierra does not resell, bill or mark up model usage.", // CL-55
      ownKeyBilling: "You use your own model key; your provider bills you for its usage.", // CL-52 (DEC-439)
      productPoints: [
        "AI-assisted planning and delivery runs on your own PC with your own model source and credentials.", // CL-19
        "Each AI-built delivery is checked by an independent test suite written from the requirements, which stays fixed across reworks.", // CL-50
        "You use your own model key.", // CL-47
        "Every run has a run budget and a monthly limit, with defaults you change in Setup. Model execution stays off until an administrator turns it on in Setup as a signed, recorded decision.", // CL-49, CL-19
        "A named person gives the approvals the governance requires before anything is released.", // CL-40R
      ],
      available: true,
    }
  : {
      // ---- HOLD WORDING (DEC-439 O-4; CL-40R, CL-46) ----
      tag: "Software delivery governance platform",
      heroTitle: "Governed software delivery, where only people approve.",
      heroLead:
        "AssuredForge governs software delivery under your rules: every requirement traced, every release approved and signed by a named person, every action in a tamper-evident audit chain.",
      homeBlock:
        "AI-assisted planning and delivery is being validated for the desktop design-partner evaluation. It may recommend and prepare, and it never approves, accepts risk or authorizes a release.", // CL-40R, CL-46 (Being validated)
      deliverTile: "AI-assisted planning and delivery is being validated for the desktop design-partner evaluation. It may recommend and prepare; people decide.", // CL-46
      deliverStatus: "Being validated",
      productLead:
        "AI-assisted planning and delivery is being validated for the desktop design-partner evaluation. It may recommend and prepare, and it never approves, accepts risk or authorizes a release.", // CL-40R, CL-46
      proof4: "Works on its own, without third-party connectors", // CL-16
      dataModel: "Your data",
      dataModelSentence: "",
      modelPath: null as string | null,
      how: [
        { t: "Work is delivered", d: "Work is delivered against a Feature (an individual functional unit that is built, tested and delivered), with each Delivery (the commits that implement it) recorded." }, // CL-03; explanations: glossary (Feature), site text (platform)
        { t: "Independent checks run", d: "Tests run on the combined changes in an isolated suite runner (a disposable place used only for that test run), apart from whoever wrote the change." }, // CL-36; explanations: glossary (Suite Runner), site text (governance)
      ],
      flow: ["Requirement", "Work delivered", "Independent checks", "Your approval", "Release and proof"],
      flowAlt: "Five steps in order: a requirement is recorded, the work is delivered, independent checks run on the combined changes, you approve it, and it is released with the proof recorded.",
      demoShot: null as string | null,
      installStep: "Create your Tenant (your organization's account) and sign in.",
      securityFlow: "",
      faqModels: null as string | null,
      faqCost: "",
      ownKeyBilling: "",
      productPoints: [] as string[],
      available: false,
    };
