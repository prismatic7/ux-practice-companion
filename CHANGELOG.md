# Changelog

## 0.2.0 — 2026-11-09

Alignment to non-visual UX, calm technology and practice-as-research, and preparation for
OpenDesign submission. The review that produced this release is in
`docs/practice-review-v0.1.md`.

### Added

- **Two registers.** `making` and `shipping`. In making, only the exclusion floor binds;
  in shipping, the full checklists do. Auditing a draft at shipping standard is named as a
  failure mode rather than diligence.
- **Evidence methods.** Every checklist item now carries `MEASURED`, `INSPECTED`, `READ`,
  `ASKED` or `NOT VERIFIED`, and every finding must report which. `NOT VERIFIED` is the
  default. New file: `references/evidence-methods.md`.
- **Calm technology.** New file `references/calm-technology.md`: the eight principles
  (Case, 2015; Weiser & Brown, 1996) with what each forbids and how to check it, plus an
  attention budget table. New checklist section 1, twelve items.
- **Practice lens.** New checklist section 9: placeholders named not disguised, iteration
  with attributable cause, deliberate breaks recorded, the trace kept, no slop in the advice.
- **Deliberate breaks and observations** in the report template, separate from declined
  findings.
- **Practice note** in the output contract — the PaR trace, one or two lines.
- `evals/evals.json` (five behavioural evals, one adversarial) and
  `evals/trigger-queries.json`.
- `docs/od-submission.md` — the OpenDesign contribution rules, rule by rule, with the draft
  PR body.
- `docs/practice-review-v0.1.md` — the self-review of 0.1.0.

### Changed

- Manifest: `author` is now Chris Wenn with a URL, plus `homepage`, `plugin.repo`, tags,
  `od.context.skills` (the findings template is now actually injected), and
  `od.context.craft` (accessibility-baseline, state-coverage, animation-discipline,
  form-validation, rtl-and-bidi, laws-of-ux). Inputs are typed, labelled and localized;
  `wCagLevel` became `conformance`; `register` was added.
- `SKILL.md` rewritten around the two registers, conduct, attention discipline and the four
  stages. Description now opens "Use this plugin when…" per OpenDesign SPEC §5.
- Checklists carry corrected citations: Nielsen H2/H7 mapped to their published titles,
  ISO 9241-110:2020 principles replacing the 2006 "individualization" wording, SC 3.3.4
  scoped to legal/financial/data submissions, SC 3.2.6 distinguished from 3.3.5 (help at the
  point of decision), the 2.5.8 exceptions listed, "large text" defined as 18 pt/24 px, the
  2.2.2 / 2.3.3 distinction made explicit, modes' focus-trap behaviour exempted, five states
  and loading thresholds adopted from OpenDesign craft, RTL/bidi, ARIA discipline, native
  platform parity and captions added.
- Report template: length rule, method field, register field, deliberate breaks, practice
  note, not-in-scope.
- `scripts/validate.mjs` rewritten: schema-shape checks, atom and craft vocabularies,
  capability minimalism, localized query placeholders resolved against declared inputs,
  method and tag presence on every checklist item, cited-SC-to-anchor parity, template
  structure, eval parsing, version parity with this file.
- README rewritten for install at the repo root, both consumption modes, and what remains
  unverified.

### Fixed

- Stage 4 required `references/findings-report-template.md` while the manifest injected only
  `SKILL.md` and the checklists. The agent was told to follow a document it was not given.
- README documented a `generated-plugin/` folder that does not exist in this repository.

## 0.1.0 — 2026-11-09

Initial plugin: four lenses, surface passes on menus, settings and documentation, cited
checklists, findings report template, example session, validation script and CI.
