# UX practice companion

A conversational OpenDesign plugin — and a portable agent skill — that holds design and
build work to the parts of usability that are not on the screen: the path a person takes,
what their attention costs, whether they can reach it, whether they can change it, and
whether it survives failing.

It adds no visual polish. It makes the work usable, reachable, composable and steerable,
and it audits menus, settings and documentation against cited, current practice. Every
checklist item carries a source tag (`[REQ]` for published standards, `[PRAC]` for
research-based consensus) and an evidence method, so a finding can be traced to its
authority *and* to the thing that was actually done to establish it.

## The three commitments

**Non-visual UX.** Workflow, accessibility, modularization and customizability are the
structural half of usability, and they fail silently in visual review. This plugin is the
second pair of eyes on that half only.

**Calm.** Attention is a finite resource and most products spend it without asking. The
plugin carries the eight principles of calm technology — Weiser & Brown's periphery and
centre, Amber Case's smallest-possible-attention — as checkable items with an attention
budget, and it applies them to itself: the report is capped, the questions are batched, and
nothing interrupts without consent.

**Practice.** Creative and research work is allowed to be unfinished. The plugin has two
registers. In **making**, standards are hypotheses and only the exclusion floor binds — a
sketch is not a defect. In **shipping**, the full checklist binds. Deliberate breaks are
recorded with their reasons, not corrected toward the checklist, and every session ends with
a practice note: what was tried, what was learned.

## What it refuses to do

- Choose visual direction. Colour, type, composition and brand belong to the design system
  and to other tools.
- Invent evidence. A check that was not run is reported as not run — and every finding
  names its method: `MEASURED`, `INSPECTED`, `READ`, `ASKED` or `NOT VERIFIED`.
- Certify compliance. A practice review is not an audit against EN 301 549, ADA Title II or
  Section 508. It says so, in the report.

## Folder contents

```text
ux-practice-companion/
  SKILL.md                               ← canonical agent behaviour (portable)
  open-design.json                       ← OpenDesign manifest (plugin spec v1)
  README.md
  references/
    practice-checklists.md               ← normative, source-tagged, method-tagged
    calm-technology.md                   ← attention rules + attention budget
    evidence-methods.md                  ← how each kind of claim gets established
    findings-report-template.md          ← review-stage output shape
  examples/sample-session.md             ← one session, shipping register
  evals/
    evals.json                           ← behavioural checks, including an adversarial one
    trigger-queries.json                 ← activation and non-activation probes
  docs/
    practice-review-v0.1.md              ← the review of v0.1.0 that produced v0.2.0
    od-submission.md                     ← contribution rules, rule by rule
    pr-body.md                           ← the draft PR body, ready to send
  CHANGELOG.md
  scripts/validate.mjs                   ← offline validator, no dependencies
  .github/workflows/validate.yml         ← runs it on push and PR
```

## Install

**OpenDesign, local.** Integration view → **My plugins** → add a local plugin → point at this
folder. No marketplace publishing, enterprise trust setup or team catalog is required.

**OpenDesign, from the repo.**

```bash
od plugin install https://github.com/prismatic7/ux-practice-companion
```

**Any Agent Skills client.** The folder is a plain skill:

```bash
npx skills add prismatic7/ux-practice-companion
```

Copy the folder into the client's skills directory if it does not use `npx skills`. The
`SKILL.md` is the whole contract; `open-design.json` is additive and can be ignored.

## Using it

Start a design or build task with the plugin active and say what the work is and whether it
is a draft or going out. It opens by clarifying users, tasks, constraints, language
direction and register — at most five questions, once — then plans, builds, and runs the
practice review.

Inputs:

| Input | Default | Meaning |
|---|---|---|
| `uxTask` | required | the task to apply UX practice to |
| `register` | `making` | `making` (draft, only the exclusion floor binds) or `shipping` (full checklist) |
| `conformance` | `AA` | WCAG target; AAA raises the motion and focus criteria |
| `focusLenses` | attention, workflow, accessibility, composable, steerable | which lenses to prioritise |

## Customising

- **The checklists** (`references/practice-checklists.md`) are the bar. Edit them to match
  your team, and keep the tags and methods: an item without a citation is an opinion and an
  item without a method is a guess.
- **The report template** (`references/findings-report-template.md`) is the tracking shape.
  Add issue IDs, owners or due dates there, not in the checklists.
- **`SKILL.md`** is the behaviour. The manifest only describes how OpenDesign installs,
  applies and presents it.

## Keeping it honest

The checklists cite WCAG 2.2 (W3C Recommendation, 5 October 2023; editorial update
12 December 2024; ISO/IEC 40500:2025), ISO 9241-110:2020, ISO 24495-1:2023, Nielsen's ten
heuristics, NN/g published research, Apple HIG, Material 3, Weiser & Brown (1996) and
Case (2015). Each cited success criterion is anchored in the current TR and the anchors are
checked. At review time the companion states the version it checked and prefers the newest
published standard. If a citation cannot be verified, the review says so instead of guessing.

The plugin also pulls OpenDesign's own craft references — `accessibility-baseline`,
`state-coverage`, `animation-discipline`, `form-validation`, `rtl-and-bidi` and `laws-of-ux`
— so its findings agree with the rules the rest of OD already enforces rather than
duplicating them at a lower standard. The purely visual craft files (typography, colour,
anti-AI-slop) are deliberately not pulled: this plugin does not review visual design.

## Validation

```bash
node scripts/validate.mjs
```

Checks the manifest against the plugin.v1 shape (required fields, enums, id pattern), name
parity with `SKILL.md`, that every referenced path exists, that every cited success criterion
appears in the anchor table, that the report template and the checklist sections agree, that
the evals parse, and that no placeholder or template text survived. No dependencies; runs in
CI on push and PR.

The manifest was also validated against the official schema with `ajv` (draft 2020-12) during
development. `od plugin validate`, `od plugin pack` and `pnpm guard` require the OpenDesign
CLI and monorepo, neither of which is installed here — see `docs/od-submission.md` for what
remains unverified.

## Status

0.2.0. The pre-alignment review is in `docs/practice-review-v0.1.md`; the OpenDesign
contribution rules, rule by rule, and the draft PR body are in `docs/od-submission.md`.

Not yet verified in this repository: a real run inside OpenDesign against a real artifact
(the manifest is validated, the behaviour is not exercised), and any screen-reader behaviour
on any surface this plugin has reviewed.

## Acknowledgments

Thank you to the OpenDesign team — for the product, for the plugin and craft specifications,
and for the responsiveness while this plugin was built. It follows OpenDesign's plugin spec
and skill conventions, and borrows its accessibility and state-coverage baselines rather than
inventing rival ones.

## License

MIT. See `LICENSE`.
