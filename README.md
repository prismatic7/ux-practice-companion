# UX practice companion

A conversational OpenDesign plugin that embeds non-visual UX best practice —
workflow, accessibility, modularization, customizability — into any design or
build task, and audits menus, settings, and documentation against cited,
current best practice.

It does not add visual polish. It makes sure the work is usable, reachable,
composable, and shaped by the person who will live with it. Every checklist
item carries a source tag (`[REQ]` for published standards, `[PRAC]` for
research-based consensus), so every finding can be traced to its authority.

## What it does

Four lenses on every task, plus a surface pass:

1. **Workflow** — task paths, entry points, error recovery.
2. **Accessibility** — WCAG 2.2 AA baseline (configurable).
3. **Modularization** — composable components with stable contracts.
4. **Customizability** — settings that map to real tasks, reversible defaults.

Surface pass: **menus**, **settings**, **documentation**.

The review stage outputs a findings report (severity + source + smallest
fix) built from `references/findings-report-template.md`.

## Folder contents

```text
generated-plugin/
  README.md                              ← this file
  SKILL.md                               ← canonical agent behavior
  open-design.json                       ← plugin manifest (schema v1)
  references/practice-checklists.md      ← normative checklists, source-mapped
  references/findings-report-template.md ← review-stage output template
  examples/sample-session.md             ← example conversational session
```

## Install (local, My plugins)

1. Keep the `generated-plugin/` folder somewhere permanent — the plugin
   loads from this folder, so it should not live in a temp directory.
2. In OpenDesign, open the **Integration view** and go to **My plugins**.
3. Add a local plugin and point it at the `generated-plugin/` folder.
4. Reload if the plugin does not appear immediately, then start a session
   with the plugin active.

No marketplace publishing, enterprise trust setup, or team catalog
configuration is required — the plugin is fully local-user friendly.

## Using it

Start any design or build task with the plugin active. It opens by
clarifying users, tasks, and constraints before designing, then plans,
builds, and runs the practice review against the checklists.

Inputs it accepts (set in the manifest or by conversation):

- **uxTask** (required) — the task to apply UX practice to.
- **wCagLevel** (default `AA`) — WCAG conformance target; raise to AAA for
  stricter motion and flash criteria.
- **focusLenses** — which lenses to prioritize, e.g.
  `accessibility, customizability`.

## Customizing it

- **Edit the checklists** (`references/practice-checklists.md`) to match
  your team's bar. Keep the source tags: an item without a citation is an
  opinion and the review will label it as one.
- **Edit the report template** (`references/findings-report-template.md`)
  to match your team's tracking format (issue ID, owner, due date).
- **Edit `SKILL.md`** to change the conduct rules and stage flow — it is the
  canonical behavior description; the manifest only describes how
  OpenDesign installs and presents it.

## Keeping it honest

The checklists cite WCAG 2.2, ISO 9241-110, ISO 24495-1, Nielsen/NN/g, and
platform HIGs, with a "keeping the sources current" rule: at review time,
state the version checked and prefer the newest published standard. If a
citation cannot be verified, the review says so instead of guessing.

## Publishing

The folder is publish-ready as a standalone repository:

1. Initialize a git repository inside `generated-plugin/`, commit, and push
   to your hosting of choice.
2. CI runs on every push and PR: `.github/workflows/validate.yml` executes
   `scripts/validate.mjs`, which checks the manifest against the plugin.v1
   schema shape (required fields, name parity with `SKILL.md`, every
   referenced file present, no unfilled placeholders). Run it locally any
   time with `node scripts/validate.mjs`.
3. For an OpenDesign plugin catalog PR, follow the catalog's contributing
   guide and include the validation passing as part of the submission; the
   plugin requires no marketplace publishing or trust setup to be usable
   locally, so the catalog listing is optional, not a dependency.

## Acknowledgments

Thank you to the OpenDesign team — for the product itself, and for their
generous, responsive support while this plugin was being built. The plugin
follows OpenDesign's plugin spec and skill conventions, and would not exist
without the care put into both.

## License

MIT.
