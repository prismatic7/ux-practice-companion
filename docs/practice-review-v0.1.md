# Practice review — ux-practice-companion v0.1.0

A review of the plugin against its own report shape, run before the v0.2.0 alignment.
Kept in the repo as the record of what changed and why. Superseded findings are not
deleted; they are answered in the column at the end.

- **Date:** 2026-11-09
- **Standards checked:** WCAG 2.2 (W3C Recommendation, 5 October 2023; editorial update
  12 December 2024; ISO/IEC 40500:2025), ISO 9241-110:2020, ISO 24495-1:2023,
  Nielsen's ten heuristics, NN/g published research, Apple HIG, Material 3,
  Weiser & Brown (1996), Case (2015), OpenDesign craft references
  (`accessibility-baseline`, `laws-of-ux`, `state-coverage`, `animation-discipline`,
  `form-validation`, `anti-ai-slop`), OpenDesign plugin spec v1
- **Conformance target:** WCAG 2.2 AA as craft ceiling; jurisdiction floors noted separately
- **Lenses run:** workflow, accessibility, modularization, customizability, calm/attention,
  practice, menus, settings, documentation, plus the OpenDesign contribution contract
- **Scope reviewed:** every file in the repository at commit `d3dbcd7`

Line references in this review point at that commit; read them with
`git show d3dbcd7:references/practice-checklists.md` and so on. The files have since been
rewritten, which is the point of keeping this document.

## Summary

The instrument is well-shaped: four lenses, source tags, severity, honest nulls, declined
findings, a normative checklist and a report template. Its structure is better than most
UX checklists in circulation.

Its evidence discipline is not yet real. No check says how to establish the answer, so
every item can be marked "pass" without being run — which makes the report a
certificate-shaped object rather than a review. And the ideology it claims (non-visual UX)
omits the part that *is* the non-visual field: attention. Calm technology, interruption
cost, periphery, failure posture and feature restraint are absent. The result is an audit
tool with no theory of attention and no permission for work in progress.

## Blockers

1. **Checks have no evidence method, so the review can self-certify**
   - Lens: accessibility / workflow / practice
   - Source: PRAC — the plugin's own Conduct rule, "Honest nulls"; REQ — the review's
     purpose is to prevent exclusion, which a false pass defeats
   - Evidence: `references/practice-checklists.md` lines 21–132. Every item is a
     `- [ ]` line naming a threshold, none names how to establish it. `SKILL.md` lines
     101–122 requires a "practice review" pass with no instruction to measure anything,
     inspect anything, or declare anything unverified beyond a generic clause.
   - Impact: an agent can produce "Contrast: pass. Keyboard: pass. Targets: pass." without
     computing a ratio, tabbing anything, or opening a rendered surface. The report then
     tells a maker a surface is accessible when nobody checked — the exact exclusion the
     checklist exists to prevent, now carrying a citation.
   - Smallest fix: attach an evidence method to every check (`MEASURED` / `INSPECTED` /
     `READ` / `ASKED` / `NOT VERIFIED`), make `NOT VERIFIED` the default, and require the
     method in each finding. → `references/evidence-methods.md`, checklist rewritten.

## Major

1. **Attention and calm are missing from a "non-visual UX" companion**
   - Lens: workflow / customizability
   - Source: PRAC — Weiser & Brown (1996); Case (2015) eight principles; NN/g "The
     Attention Economy" (2019); NN/g "Five Mistakes in Designing Mobile Push
     Notifications" (2018)
   - Evidence: the only attention-adjacent line in the whole plugin is checklist item 7
     ("Interruptions … exist only where the user opted in. Presence beats pressure.",
     line 37). Nothing on attention budget, periphery→centre movement, interruption
     classes, feature restraint, or the cost of the review report itself.
   - Impact: the plugin will pass a surface that fires a badge, a toast, a sound and a
     modal in the same minute, because none of those is a WCAG failure. Users are not
     excluded; they are exhausted. That is the failure mode the lens is for and it is
     invisible to the current checklist.
   - Smallest fix: a calm technology reference file and a checklist section, with an
     attention-budget table. → `references/calm-technology.md`, §1.

2. **No register distinction between making and shipping**
   - Lens: practice / workflow
   - Source: PRAC — premature audit kills work in progress; the plugin's own premise is
     "the user decides, the companion structures"
   - Evidence: `SKILL.md` applies the full checklist to "any design or build task"
     (line 11) with no notion of a draft. Stage 3 finishes and Stage 4 immediately
     audits, regardless of whether the artifact is a sketch.
   - Impact: a first-pass prototype returns 9 majors and 14 minors. The maker reads it as
     "the work is bad" rather than "the work is early", and either polishes before
     thinking or abandons the direction. Creative work is audited before it exists.
   - Smallest fix: two named registers. In *making*, only the exclusion floor binds;
     in *shipping*, the full checklists bind. → `SKILL.md` §1.

3. **A deliberate break is indistinguishable from a defect**
   - Lens: practice / modularization
   - Source: PRAC — authorial intent; Case (2015) P8 (respect social norms, leverage
     familiar behaviours)
   - Evidence: findings carry severity and a smallest fix. There is no path for "this
     breaks the convention on purpose and should stay". Declining a finding records it in
     a "declined" list, which frames it as debt.
   - Impact: the tool normalises work toward the checklist. A practice companion that
     cannot tell craft from error is a slop machine with better citations.
   - Smallest fix: a `Deliberate breaks` section, and a rule to ask before calling
     intent a defect. → `SKILL.md` §2, report template.

4. **Stage 4 requires a template the manifest never injects**
   - Lens: workflow / modularization
   - Source: PRAC — the plugin's own instruction; OpenDesign `od.context.skills`
   - Evidence: `SKILL.md` lines 104–107 requires "the exact structure in
     `references/findings-report-template.md`"; `open-design.json` lines 48–57 injects
     only `./SKILL.md` and `./references/practice-checklists.md`.
   - Impact: the agent is told to follow a document it was not given. Either it invents a
     shape or it reaches for a file path that may not resolve in the run's staging
     directory.
   - Smallest fix: add the template to `od.context.skills`.
   - Status: answered in v0.2.0.

5. **Citations are wrong in four places, against the plugin's own credibility rule**
   - Lens: accessibility / documentation
   - Source: REQ — Nielsen's ten heuristics (H2 is match between system and the real
     world; H7 is flexibility and efficiency of use); ISO 9241-110:2020 (principles are
     suitability for the task, self-descriptiveness, conformity with user expectations,
     learnability, controllability, use error robustness, user engagement —
     "suitability for individualization" is the 2006 wording); WCAG 2.2 SC 3.3.4 (legal,
     financial or data submissions, not every destructive action); WCAG 2.2 SC 3.2.6
     (consistent *location* of help mechanisms, not "help where the decision is made")
   - Evidence: checklist lines 23, 28, 100, 116–117.
   - Impact: a plugin whose conduct rule is "never cite a success criterion number you
     have not read" ships four mis-citations. A reader who checks one loses trust in all.
   - Smallest fix: correct each in place, map every cited SC to the verified anchor table.

6. **No evals, so nothing regresses observably**
   - Lens: practice / modularization
   - Source: REQ — OpenDesign `plugins/spec/SPEC.md` §9; `AGENT-DEVELOPMENT.md` Quality Bar
   - Evidence: no `evals/` directory.
   - Impact: the plugin's behaviour is a claim, not a tested property. The failure mode in
     Major 1 (confident unmeasured passes) cannot be detected without an eval that tries
     to provoke it.
   - Smallest fix: three evals including an adversarial one that offers an artifact with a
     keyboard trap and no measurable contrast.

7. **The report has no attention budget of its own**
   - Lens: calm / documentation
   - Source: PRAC — Case (2015) P1 (smallest possible attention); NN/g "Indicators,
     Validations, and Notifications" (2024)
   - Evidence: template requires every blocker, major and minor in full shape, with no cap
     and no guidance on order beyond "blockers first".
   - Impact: a 30-finding wall is an interruption wearing the costume of thoroughness. It
     is also unread, which returns us to Major 1 by another route.
   - Smallest fix: cap the report body, order by stakes, move the rest behind a summary
     count, and state the report's own length rule. → template.

## Minor

1. "at least 24×24 CSS px, or spacing-equivalent" omits the other four 2.5.8 exceptions
   (equivalent, inline, user-agent control, essential) — invites false blockers on map
   pins and inline links.
2. Touch guidance cited as "Apple HIG / Material" with 44 px; iOS is 44×44 **pt**, Material
   3 is 48×48 **dp**. Unit drift becomes a wrong number on a different display.
3. "Larger text ≥3:1" without the definition. 18 **pt** (≈24 px) regular or 14 pt bold
   (≈18.5 px); 18 px regular needs 4.5:1. This is the single most common contrast error.
4. Modal focus containment treated as possible violation by omission — it is correct
   behaviour (2.1.2), not a keyboard trap.
5. Motion item conflates 2.3.3 (AAA, vestibular) with 2.2.2 (A, pause/stop/hide for any
   motion over 5 s). Also missing: the focus-outline triple failure (1.4.11 + 2.4.7 +
   2.4.13) and 2.4.11 focus-not-obscured.
6. State coverage stops at "empty, loading, error, success". OpenDesign craft requires
   five: loading, empty, error, populated, edge — plus loading thresholds by duration and
   three extra form states.
7. No RTL or bidi check. Credibility problem in the Gulf, and OpenDesign ships
   `craft/rtl-and-bidi.md`.
8. No ARIA discipline: native-first, "never invent ARIA", and the WebAIM Million evidence
   that ARIA pages average *more* errors (59.1 vs 42.0, 2026 crawl).
9. `[PRAC]` items point at "NN/g articles on empty states, defaults, and settings" with no
   URLs. Two of those articles exist and are checkable; the settings one does not exist in
   that form.
10. README documents a `generated-plugin/` folder that is not this repository, and calls
    the plugin "publish-ready" at 0.1.0 with no validation run recorded.
11. Manifest: `author` is `techne-tools` with no `url`, no `homepage`, no `plugin.repo`;
    no `od.context.craft`; no `od.preview`; `focusLenses` input never referenced by the
    use-case query; input named `wCagLevel` in a manifest whose other keys are lowerCamel.

## Calm technology — principle by principle

| # | Principle (Case, 2015) | v0.1.0 |
|---|---|---|
| 1 | Smallest possible amount of attention | **Absent.** No attention budget. |
| 2 | Inform and create calm | **Partial.** Status text is required; urgency decoration is not forbidden. |
| 3 | Make use of the periphery | **Absent.** No centre/periphery distinction. |
| 4 | Amplify the best of technology and humanity | **Absent.** No position on what the machine decides vs the person. |
| 5 | Can communicate, but doesn't need to speak | **Absent.** No channel guidance (sound, haptic, ambient, text). |
| 6 | Works even when it fails | **Partial.** Error recovery and empty states required; no degraded-mode posture. |
| 7 | Minimum technology to solve the problem | **Absent.** No feature-restraint check; Occam is not in the list. |
| 8 | Respect social norms | **Absent.** No consent, no pace-of-change, no dark-pattern check. |

Score: 0 met, 2 partial, 6 absent.

## Creative practice / PaR register

| Property | v0.1.0 |
|---|---|
| Work in progress is legitimate | **No.** Full audit applies at any stage. |
| Placeholders allowed if honest | **No.** "Screenshots match current interface", "no placeholders" in spirit. |
| Authorial intent recorded | **No.** Only "declined findings". |
| Trace of what was tried and learned | **No.** No practice note in the output contract. |
| Iteration is cheap and attributable | **No.** No "change few things at a time" rule. |
| No slop in the advice itself | **Partial.** "Smallest concrete fix" helps; nothing forbids generic advice or invented evidence. |
| Maker's judgement is primary | **Partial.** "The user proposes and disposes" is stated but not operationalised. |

## OpenDesign contribution contract

Rules read from `CONTRIBUTING.md`, `plugins/AGENTS.md`, `plugins/spec/SPEC.md`,
`plugins/spec/AGENT-DEVELOPMENT.md`, `docs/publishing-a-plugin.md`,
`docs/schemas/open-design.plugin.v1.json` at `nexu-io/open-design@main` on 2026-11-09.

| Rule | Source | v0.1.0 |
|---|---|---|
| Folder, `name`, manifest `name` agree, lowercase id | SPEC §1 | Pass |
| `SKILL.md` + `open-design.json` + `README.md` present | AGENT-DEVELOPMENT §2 | Pass |
| Description written for activation ("Use this plugin when…") | SPEC §5 | **Fail** — descriptive, not activation-shaped |
| `SKILL.md` under 500 lines | SPEC §5 | Pass (136) |
| `SKILL.md` portable, no marketplace metadata in body | plugins/AGENTS | Pass |
| `od.taskKind` in the allowed four | SPEC §6 | Pass |
| Declared atoms are known first-party atoms | SPEC §6, AGENT-DEVELOPMENT Quality Bar | Pass with a note — `file-write` and `live-artifact` have no folder under `plugins/_official/atoms/`, but every first-party scenario (`od-default`, `od-new-generation`, `od-figma-migration`) declares them and SPEC's create-lane table lists them, so they are runtime atoms rather than folder atoms |
| Repeated stage carries `until` | SPEC §6 | Pass |
| Capabilities minimal | SPEC §6 | Pass (`prompt:inject` only) |
| Inputs typed and labelled | SPEC §7 | Pass |
| `evals/evals.json` | SPEC §9 | **Fail** |
| `evals/trigger-queries.json` where the description could over-broaden | SPEC §9 | **Fail** |
| Preview or concrete example output | SPEC §8 | Pass (`examples/`) |
| `license`, `author`, source URL, version, changelog | PUBLISHING-REGISTRIES safety list | **Fail** — no `author.url`, `homepage`, `plugin.repo` or changelog |
| No hidden install scripts, no credential collection, no network calls | PUBLISHING-REGISTRIES safety list | Pass |
| Validation recorded in the submission | SPEC §10 | **Fail** — validator exists, no run recorded |
| README install for OpenDesign *and* generic Agent Skills clients | PUBLISHING-REGISTRIES §Recommended Release Order | **Fail** — OpenDesign only |
| PR body carrying capabilities, validation, lane, trigger | SPEC §10, AGENT-DEVELOPMENT §PR Output | **Fail** — none drafted |

## Not verified

- `od plugin validate` — not run. The `od` binary on this machine's `PATH` is the BSD
  octal-dump tool; OpenDesign ships no CLI in the app bundle, and the monorepo is not
  checked out. `pnpm guard` and `pnpm --filter @open-design/plugin-runtime typecheck` are
  equally unavailable outside the monorepo.
- Screen-reader behaviour, real touch targets, real device reflow: no assistive technology
  or device matrix in this environment. The plugin is *about* these; this review does not
  claim to have observed them.
- Calm-technology outcomes with real users: no study. The claims are design-posture claims
  from published principles, not measured effects.

## Checklist status (v0.1.0, against the v0.2.0 checklist)

- Calm and attention: N/A — section did not exist
- Workflow: 5/7 pass, 1 partial, 1 fails on evidence method
- Accessibility: 6/10 pass, 4 need correction or evidence method
- Composable: 6/6 pass as written, 0/6 runnable
- Steerable: 4/5 pass, 1 mis-cited (ISO 9241-110:2006 wording)
- Menus: 4/5 pass, 1 mis-cited (H2)
- Settings: 3/5 pass, 1 mis-cited (3.2.6)
- Documentation: 4/6 pass, 1 mis-cited, 1 not applicable
- Practice: N/A — section did not exist

## Decisions and versions

- WCAG 2.2, W3C Recommendation 5 October 2023 (editorial update 12 December 2024).
  No newer WCAG version published; WCAG 3 is a Working Draft and does not replace it.
  Ratified as ISO/IEC 40500:2025 on 21 October 2025.
- ISO 9241-110:2020 — seven interaction principles as published; 2006 wording retired.
- ISO 24495-1:2023, June 2023.
- Nielsen's ten heuristics, NN/g; H-numbers mapped to their published titles.
- Calm technology: Weiser & Brown, "The Coming Age of Calm Technology", Xerox PARC,
  5 October 1996; Case, *Calm Technology* (O'Reilly, 2015), eight principles as published
  at calmtech.com.
- OpenDesign craft references as bundled in Open Design 0.27.0 (2026-11).
