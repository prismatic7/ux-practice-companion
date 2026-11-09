## Why

A plugin contribution, not a code change: `plugins/community/ux-practice-companion/`.

Use case: I review interface work before handover, and the non-visual half of UX keeps
getting skipped in visual review — keyboard paths, error recovery, what an interruption
costs, whether a setting can be undone. OD's craft references state the rules precisely;
what was missing was a plugin that runs them as a conversation, in the order a maker needs
them, with a citation and an evidence method on every finding.

Pain addressed: a review that says "accessibility: pass" without measuring anything. This
plugin makes `NOT VERIFIED` the default and requires `MEASURED` / `INSPECTED` / `READ` /
`ASKED` on every finding, so a pass is a claim someone can check.

## What users will see

- A new scenario in the plugin picker: *UX practice companion*.
- Applying it asks up to five questions once (users, tasks, platform, language direction,
  conformance target, register), then plans, builds and reviews.
- The review produces a findings report: blockers first, severity, source tag, evidence
  method, smallest fix, deliberate breaks, not-verified, and a practice note.
- Two registers: `making` (draft; only the exclusion floor binds) and `shipping` (full
  checklist). Auditing a sketch at shipping standard is named as a failure mode, not
  diligence.

## Surface area

- [x] **Extension point** — new entry under `plugins/community/`
- [ ] UI / keyboard shortcut / CLI / API / i18n keys / new dependency / default behaviour change

No code, no dependency, no network call, no install script. `prompt:inject` only.

## Screenshots

Not a visual plugin; it produces no artifact of its own. Example output and the report shape
are in `examples/sample-session.md` and `references/findings-report-template.md`.

## Bug fix verification

Not a bug fix.

## Validation

- Plugin id: `ux-practice-companion`
- Spec version: `1.0.0` · Plugin version: `0.2.0` · Lane: create (`new-generation`), scenario mode
- Trigger: "review this before we ship it", "is this usable by keyboard", "audit our menus
  and settings", "the app pings people a lot"
- Capabilities requested: `prompt:inject`
- Files added: 12 (SKILL.md, open-design.json, README.md, CHANGELOG.md, LICENSE, four
  references, one example, two eval files)
- Canonical source: https://github.com/prismatic7/ux-practice-companion
- `node scripts/validate.mjs`: pass (author-side validator; not part of the contributed folder)
- Manifest against `docs/schemas/open-design.plugin.v1.json` with ajv (draft 2020-12): pass
- `od plugin validate`: **not run** — no OD CLI in this environment; please run it in CI or
  locally before merge
- Craft opted into: `accessibility-baseline`, `state-coverage`, `animation-discipline`,
  `form-validation`, `rtl-and-bidi`, `laws-of-ux`. Deliberately not `typography`, `color` or
  `anti-ai-slop` — this plugin does not review visual design.
- Trust: the plugin reads no files, runs nothing, and writes nothing outside the OD run it is
  applied to.

## Licensing

The source repository is MIT. Included `LICENSE` preserves that provenance; the contributed
folder is offered under this repository's Apache-2.0 per CONTRIBUTING.
