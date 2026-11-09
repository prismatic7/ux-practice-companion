# OpenDesign submission

What OpenDesign asks of a contributed plugin, rule by rule, with this plugin's status after
0.2.0 — and the draft PR body to send with it.

Rules read on 2026-11-09 from `nexu-io/open-design@main`:

- `CONTRIBUTING.md`
- `plugins/README.md` and `plugins/AGENTS.md`
- `plugins/spec/SPEC.md` — the compact contributor contract
- `plugins/spec/AGENT-DEVELOPMENT.md` — the agent handoff, including the Quality Bar
- `plugins/spec/PUBLISHING-REGISTRIES.md` — the safety checklist
- `docs/publishing-a-plugin.md` — the registry flow
- `docs/schemas/open-design.plugin.v1.json` — the manifest schema
- `.github/pull_request_template.md`

Also read for shape, not for rules: the first-party scenarios (`plugins/_official/scenarios/`)
and two accepted community plugins (`clone-audit-*`, `hallmark`).

## Rule by rule

| # | Rule | Source | Status |
|---|---|---|---|
| 1 | Folder, `SKILL.md` name and manifest `name` agree; lowercase id from `[a-z0-9._-]`, starting with a letter | SPEC §1 | Pass — `ux-practice-companion` |
| 2 | `SKILL.md` with `name` and `description` frontmatter | SPEC §1 | Pass |
| 3 | `SKILL.md` + `open-design.json` + `README.md` at the folder root | AGENT-DEVELOPMENT §Build Procedure | Pass |
| 4 | Description written for activation, "Use this plugin when…" | SPEC §5 | Pass |
| 5 | `SKILL.md` under 500 lines; long material in `references/` | SPEC §5 | Pass — 173 lines |
| 6 | `SKILL.md` portable; no OD marketplace metadata in the body | plugins/AGENTS | Pass — frontmatter carries `od.scenario`/`od.mode`, matching the first-party scenarios |
| 7 | `specVersion` present and current (`1.0.0`); `version` semver and bumped on behaviour change | SPEC §6 | Pass — 0.2.0 |
| 8 | `compat.agentSkills[0].path` points at `./SKILL.md` | SPEC §6 | Pass |
| 9 | `od.taskKind` one of the four | SPEC §6 | Pass — `new-generation` |
| 10 | Pipeline atoms are known; a repeated stage declares `until` | SPEC §6 | Pass — `discovery-question-form`, `todo-write`, `file-write`, `live-artifact`, `critique-theater` |
| 11 | Capabilities minimal; restricted installs get `prompt:inject` | SPEC §6 | Pass — `prompt:inject` only |
| 12 | Inputs typed, labelled, with defaults where useful | SPEC §7 | Pass — four inputs, six locales |
| 13 | `evals/evals.json` | SPEC §9 | Pass — five evals, one adversarial |
| 14 | `evals/trigger-queries.json` where the description could over-broaden | SPEC §9 | Pass |
| 15 | Preview or concrete example output | SPEC §8 | Pass — `examples/sample-session.md`; a non-visual plugin needs no `preview/` |
| 16 | `license`, `author` with URL, source URL, version, changelog | PUBLISHING-REGISTRIES safety list | Pass — MIT, `author.url`, `homepage`, `plugin.repo`, `CHANGELOG.md` |
| 17 | No hidden install scripts, no credential collection, no network calls, no destructive shell without confirmation | PUBLISHING-REGISTRIES safety list | Pass — the folder is Markdown, one JSON manifest and one dependency-free validator |
| 18 | Validation output included with the submission | SPEC §10 | Partial — `node scripts/validate.mjs` runs here; `od plugin validate`, `od plugin pack` and `pnpm guard` cannot |
| 19 | README install for OpenDesign *and* generic Agent Skills clients | PUBLISHING-REGISTRIES §Release Order | Pass |
| 20 | PR body: plugin id, spec version, version, lane, trigger, files, validation, capabilities, registry links | SPEC §10, AGENT-DEVELOPMENT §PR Output | Drafted below |
| 21 | One concern per PR; no squash during review; no force-push | CONTRIBUTING §Commits | Applies at submission time |
| 22 | Bilingual mirrors (`*.zh-CN.md`) for contribution-facing docs | plugins/AGENTS | N/A — those mirrors are for files inside the OD repo (`plugins/README.md`, `SPEC.md`, `CONTRIBUTING.md`), not for a contributed plugin folder |

Two rules worth flagging because they are easy to get wrong:

- **`od.mode`.** The SPEC's create-mode table lists `prototype`, `deck`, `live-artifact` and
  so on, and its manifest-rules section leaves `od.mode` unconstrained. Every first-party
  scenario uses `od.mode: "scenario"` with `od.kind: "scenario"`, which is what this plugin
  does. If a reviewer reads the mode table as exhaustive, the fix is one field, not a
  restructure.
- **Community plugin names.** Some accepted community plugins carry an imported id
  (`community-hallmark` in a `hallmark/` folder; `clone-audit-mrlv3nl4`). That breaks rule 1,
  not this plugin — this one keeps folder, `SKILL.md` name and manifest name identical.

## The folder as it lands in the OD repo

Straight copy, no restructuring:

```text
plugins/community/ux-practice-companion/
  SKILL.md
  open-design.json
  README.md
  CHANGELOG.md
  LICENSE
  references/practice-checklists.md
  references/calm-technology.md
  references/evidence-methods.md
  references/findings-report-template.md
  examples/sample-session.md
  evals/evals.json
  evals/trigger-queries.json
```

`docs/`, `scripts/` and `.github/` stay in this repository. They are author-side: the review
that produced 0.2.0, this submission note, and the validator. A catalog folder needs neither.

## How to submit

**Status: held (2026-11-09). The PR has not been opened.** Decision taken deliberately, not
by omission. Revisit when there is one real run inside OpenDesign against an actual project —
that converts the "unverified" list below into evidence, and it is the first thing a reviewer
asks for. The command sequence is ready and needs no edits when that happens.

Why it is worth doing at all, and why not to wait on it: measured on 2026-11-09, plugin PRs
get their first review activity in 2–7 days but merge slowly — 22 "Add … plugin" PRs open,
oldest since 2026-07-16, last community plugin merge 2026-07-29. Open it for the review and
the provenance, not for the catalogue entry.

Three paths, in the order the OpenDesign UI offers them on the plugin-folder card:

1. **Add to My plugins** — satisfied already in the product: Integration view → My plugins →
   add local plugin → this folder.
2. **Publish repo** — done: https://github.com/prismatic7/ux-practice-companion (public, MIT).
3. **OpenDesign PR** — a PR against `nexu-io/open-design` adding the folder above. Open it
   non-draft: engagement follows normal PRs within days, and OD's own button creates a draft,
   which in a backlogged lane can sit unrequested.

Without the OD CLI, the PR is the manual route:

```bash
gh repo clone nexu-io/open-design /tmp/open-design
cp -R "$PWD" /tmp/open-design/plugins/community/ux-practice-companion
cd /tmp/open-design
git checkout -b plugin/ux-practice-companion
# remove author-only material from the copied folder
rm -rf plugins/community/ux-practice-companion/{docs,scripts,.github}
git add plugins/community/ux-practice-companion
git commit -m "feat(plugins): add ux-practice-companion community plugin"
gh pr create --draft --title "feat(plugins): add ux-practice-companion community plugin" \
  --body-file "$OLDPWD/docs/pr-body.md"
```

If the OD CLI is installed instead, `od plugin validate ./plugins/community/ux-practice-companion`
then `od plugin pack` before opening the PR, and paste both outputs into the Validation section.

**Licensing at the boundary.** This repository is MIT. A folder contributed to
`nexu-io/open-design` is licensed under that repository's Apache-2.0 per its CONTRIBUTING
("your contribution is licensed under the same"). Keep `LICENSE` in the folder so the MIT
provenance travels with it, and say so in the PR body — reviewers ask.

## Remaining unverified

Stated plainly, because the plugin's own conduct rule is "honest nulls":

- `od plugin validate` — not run. The `od` binary on this machine's `PATH` is the BSD
  octal-dump tool; OpenDesign ships no CLI in the app bundle; the monorepo is not checked out.
- `od plugin pack` — not run, same reason.
- `pnpm guard` and `pnpm --filter @open-design/plugin-runtime typecheck` — need the monorepo.
- A real run inside OpenDesign against a real artifact. The manifest validates against the
  published schema (ajv, draft 2020-12) and the folder is internally consistent; the
  behaviour in an actual session is untested here.
- Screen-reader, real-device and real-user checks — the plugin reviews these; this repository
  has not observed them.

## Draft PR body

Uses the sections of `.github/pull_request_template.md`, plus the items SPEC §10 asks a plugin
PR to carry.

```markdown
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
```
