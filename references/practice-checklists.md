# Practice checklists

Normative for the **practice review** stage of `ux-practice-companion`.

## How to read this file

**Tags.** Two kinds:

- **[REQ]** — traceable to a published standard or first-party platform guidance (W3C,
  ISO, Apple, Google). These are the requirements.
- **[PRAC]** — consensus practice from usability research (Nielsen Norman Group, Weiser &
  Brown, Case) or long-standing convention. Advisory, but a deviation needs a reason.

**Evidence method.** Every item ends with the way it is established, after the finding:

- `MEASURED` — a number was computed or read from the running artifact (contrast ratio,
  computed size, elapsed time). Quote the number and the method.
- `INSPECTED` — the DOM, the rendered surface, or the flow was looked at directly.
- `READ` — the source, the copy, the specification text, or the documentation.
- `ASKED` — only the person can answer (their assistive technology, their environment,
  their intent).
- `NOT VERIFIED` — could not be established here. This is the default, not the failure
  case. A check that was not run is never reported as passed.

**Version discipline.** State at review time which version of each standard was checked.
If a newer version exists than the one cited here, use it and note the change. Never cite
a success criterion number you have not read in the current specification.

**Conformance target.** WCAG 2.2 AA is the craft ceiling — it clears the WCAG 2.1 AA legal
floor in the EU and US and prepares for the EN 301 549 v4.1.1 citation. The legal floor is
not the same everywhere, and "EAA = WCAG 2.2 AA" is wrong:

| Regime | References | Note |
|---|---|---|
| EU — European Accessibility Act (enforcement live 28 June 2025) | EN 301 549 v3.2.1 → **WCAG 2.1 AA** | v4.1.1 (which incorporates 2.2) is an OJ-citation target for late 2026 / 2027 |
| EU — Web Accessibility Directive (public sector) | EN 301 549 → WCAG 2.1 AA | Separate instrument from the EAA |
| US — ADA Title II (public entities) | **WCAG 2.1 AA** | The 2026 IFR moved the compliance dates; check current DOJ guidance rather than quoting a date from memory |
| US — Section 508 procurement | **WCAG 2.0 AA** as of the current published revision | Update in flight, not shipped |
| US — ADA Title III (private sector) | No technical standard; settlements cite **WCAG 2.1 AA** | Case-by-case |
| Global standard | **ISO/IEC 40500:2025** ratifies WCAG 2.2 verbatim (21 October 2025) | Does not by itself change the legal floors above |

Where a check does not apply, mark N/A with the reason. An untested check is never a pass.

## 1. Attention and calm

Theory and the attention-budget table: `references/calm-technology.md`.

- [ ] [PRAC — Case 2015 P1] Nothing takes focus without the user's action or opt-in:
      no auto-focus, no autoplay, no looping decorative motion, no sound on by default.
      `INSPECTED`
- [ ] [PRAC — Case 2015 P2; NN/g attention economy] No manufactured urgency: ordinary
      events are not red, not "!", not counted down, not framed as loss. `READ`
- [ ] [PRAC — Case 2015 P3; Weiser & Brown 1996] Each piece of state has a periphery form
      (label, dot, ambient region, title-bar state) and promotes to the centre only when it
      matters. Everything centred means no periphery. `INSPECTED`
- [ ] [PRAC — Case 2015 P4] The machine takes the tedious step and leaves the judgement
      that is the person's to make. Name both. `READ`
- [ ] [PRAC — Case 2015 P5] Quietest channel that still lands: text before sound, ambient
      before text; sound only where the eyes are provably busy and it can be turned off.
      `INSPECTED`
- [ ] [PRAC — Case 2015 P6] It degrades to a usable state: no network, expired session,
      empty data, refused permission. No spinner without a timeout; no dead end.
      `INSPECTED` (states), `ASKED` (environment that cannot be simulated)
- [ ] [PRAC — Case 2015 P7; Ockham] Every feature and every setting names the task it
      serves. No task, no feature; no reason, no setting. `READ`, `ASKED`
- [ ] [PRAC — Case 2015 P8; NN/g modal dialogs 2024] What this asks the user to accept,
      they agreed to. Nothing about their work changes without their asking. `READ`, `ASKED`
- [ ] [PRAC — Case 2015 P1; NN/g notifications 2018/2024] One channel per event. A
      notification earns its channel; it is not granted one by default. `INSPECTED`
- [ ] [PRAC — Case 2015 P1] Interruption is capped by count, not by tone: a minor thing
      repeated is worse than a major thing once. The attention budget from the plan is
      filled in and nothing outside it interrupts. `INSPECTED`
- [ ] [REQ — WCAG 2.2 SC 2.2.2] Any motion, blink or auto-update running longer than 5 s
      has pause, stop or hide. `INSPECTED`
- [ ] [PRAC — Case 2015 P6; NN/g push notifications 2018] No engagement pressure:
      badges that only grow, streak loss, "come back" prompts, irrelevant interruption to
      raise a metric. `READ`

## 2. Workflow and recovery

- [ ] [PRAC — Nielsen H1 visibility of system status] Every task has a complete path:
      entry, progress, exit, and recovery. Traced in the plan, verified in the artifact.
      `INSPECTED`
- [ ] [PRAC — ISO 9241-110:2020 suitability for the task] Task order matches the person's
      real sequence, not the system's internal model. `READ`, `ASKED`
- [ ] [REQ — WCAG 2.2 SC 3.3.4 (legal, financial, data submissions); PRAC — Nielsen H5]
      Destructive or irreversible actions confirm, and undo where undo is genuinely
      possible. Note the narrow scope of 3.3.4: it covers legal commitments, financial
      transactions and data deletion — general destructive-action confirmation is practice
      (H5) and platform guidance, not a WCAG requirement. `INSPECTED`
- [ ] [REQ — WCAG 2.2 SC 3.3.1, 3.3.3] Errors say what happened, where, and the next step,
      in plain language. "Something went wrong" fails. `READ` (copy), `INSPECTED` (state)
- [ ] [PRAC — NN/g empty states 2021] All five states exist for every surface that fetches,
      transforms or accepts data: loading, empty, error, populated, edge. Edge means extreme
      volume, very long strings, missing optional fields, mixed direction, partial network.
      `INSPECTED`
- [ ] [PRAC — OpenDesign state-coverage craft] Loading indicator chosen by duration, not by
      component library: none under 300 ms; skeleton or subtle spinner 300 ms–2 s; labelled
      skeleton 2–10 s; determinate bar with cancel 10–60 s; stop and offer retry past 60 s.
      `INSPECTED`, `MEASURED`
- [ ] [PRAC — Nielsen H7 flexibility and efficiency] Repeated actions have shortcuts; rare
      actions stay findable. `INSPECTED`
- [ ] [REQ — WCAG 2.2 SC 3.3.7] Nothing is asked twice in one process; existing data is
      reused or offered as a selectable shortcut. Autofill does not satisfy this. `INSPECTED`

## 3. Accessibility (WCAG 2.2 AA baseline)

Contrast and the thresholds below follow OpenDesign's `accessibility-baseline` craft rules.

- [ ] [REQ — WCAG 2.2 SC 1.4.3, 1.4.11] Text contrast ≥ 4.5:1; large text and non-text UI
      ≥ 3:1. "Large" means 18 pt (≈24 px) regular or 14 pt bold (≈18.5 px) — 18 px regular
      needs 4.5:1. Thresholds are inclusive; do not round up. `MEASURED` (ratio + method)
- [ ] [REQ — WCAG 2.2 SC 2.1.1, 2.4.3, 2.4.7, 2.4.11] Everything operable by keyboard, in
      a logical focus order, with a visible indicator that is not obscured. Removing the
      outline without a replacement is a triple failure: SC 1.4.11, 2.4.7 and 2.4.13 (AAA).
      `INSPECTED`
- [ ] [REQ — WCAG 2.2 SC 2.1.2] No keyboard trap. A modal that contains focus until Escape
      or the close control is correct behaviour, not a violation — do not flag it.
      `INSPECTED`
- [ ] [REQ — WCAG 2.2 SC 2.5.8] Pointer targets ≥ 24×24 CSS px, or one of the five
      exceptions applies: spacing, equivalent, inline within a sentence, user-agent control,
      essential (e.g. a map pin). Touch surfaces aim for 44 pt (iOS) / 48 dp (Material 3).
      `MEASURED`, `INSPECTED`
- [ ] [REQ — WCAG 2.2 SC 4.1.2, 2.5.3, 1.1.1] Every control has an accessible name that
      contains its visible label; icon-only buttons are labelled; content images have
      alternatives and decorative images are `alt=""`. `INSPECTED`
- [ ] [REQ — WCAG 2.2 SC 1.4.1, 4.1.3] Status changes are carried by text or a live region,
      never by colour or motion alone. The live region exists in the DOM before content is
      injected. `INSPECTED`
- [ ] [REQ — WCAG 2.2 SC 3.3.1, 3.3.2, 3.3.3, 1.3.5, 3.3.5 (AAA)] Forms: labels bound to
      fields, required state marked, error text next to the field with the cause and the
      fix, input purpose identified, contextual help where the decision is made.
      `INSPECTED`, `READ`
- [ ] [PRAC — OpenDesign form-validation craft] Validation timing: on blur, not on first
      keystroke; on submit, focus moves to the first invalid field; input is preserved on
      failure. Error wiring via `aria-describedby` (production default);
      `aria-errormessage` is progressive enhancement, not the baseline. `INSPECTED`
- [ ] [REQ — WCAG 2.2 SC 1.4.10] Content reflows at 320 px width and 400% zoom without
      two-dimensional scrolling. `INSPECTED`, `MEASURED`
- [ ] [REQ — WCAG 2.2 SC 2.2.2 (A); 2.3.1 (A); 2.3.2, 2.3.3 (AAA); PRAC —
      `prefers-reduced-motion`] Motion is safe: nothing flashes more than three times per
      second; nothing essential is carried by movement; reduced-motion strips translation,
      scale, rotation and parallax while keeping opacity crossfades. 2.2.2 is the legal
      floor for anything over 5 s; the vestibular concern is 2.3.3, which is AAA — do not
      present it as a compliance failure. `INSPECTED`, `MEASURED`
- [ ] [REQ — WCAG 2.2 SC 3.3.7, 3.3.8] No memory tests and no cognitive-function tests for
      authentication; paste and password managers are allowed; no redundant re-entry.
      `INSPECTED`
- [ ] [REQ — WCAG 2.2 SC 2.5.7] Any dragging has a single-pointer alternative. `INSPECTED`
- [ ] [REQ — WCAG 2.2 SC 3.1.1, 3.1.2; PRAC — OpenDesign rtl-and-bidi craft] Page language
      declared; language changes marked inline. For RTL: logical CSS properties rather than
      left/right, mirrored directional icons, bidi isolation around embedded LTR strings
      (numbers, code, URLs), and layout that survives a mixed-direction paragraph.
      `INSPECTED`, `READ`
- [ ] [REQ — WCAG 2.2 SC 1.2.2; PRAC] Prerecorded media carries captions; audio-only content
      has a transcript. In performance and studio contexts, check this before the first
      screening — retrofitting captions to a locked edit is expensive. `INSPECTED`
- [ ] [PRAC — ARIA APG; WebAIM Million 2026] Native element first; ARIA only when no native
      element fits, then an APG pattern verbatim. Never invent ARIA. Pages that use ARIA
      average more errors than pages that do not (59.1 vs 42.0 in the 2026 crawl), so
      "add ARIA" is not a fix — it is a risk to justify. `INSPECTED`
- [ ] [PRAC — platform parity] Web ARIA does not translate: use `accessibilityLabel` /
      `accessibilityTraits` (iOS), `contentDescription` / `Role` (Android), `Semantics`
      (Flutter), `accessibilityLabel` / `accessibilityRole` (React Native). `INSPECTED`

## 4. Composable

- [ ] [PRAC — DRY; design-system practice] Recurring patterns exist once as a named
      component, not copy-pasted. `INSPECTED`
- [ ] [PRAC — component API design] Each component has a contract: inputs, events, states.
      `READ`
- [ ] [PRAC] Components work outside the screen they were born on — no hidden context
      dependency, no assumption about a parent. `INSPECTED`
- [ ] [PRAC — W3C Design Tokens CG direction] Tokens for colour, spacing and type; no
      one-off literals. `INSPECTED`
- [ ] [PRAC] Composition over configuration: pieces compose below the task level, so the
      maker can build what the author did not anticipate. `READ`
- [ ] [PRAC] Shared logic lives in one place; a behaviour change propagates. `READ`

## 5. Steerable

- [ ] [PRAC — ISO 9241-110:2020 conformity with user expectations] Settings map to real
      tasks: every setting names the situation it serves. `READ`, `ASKED`
- [ ] [PRAC — NN/g The Power of Defaults 2005] Sensible defaults; changing nothing yields a
      good experience. `INSPECTED`
- [ ] [PRAC — ISO 9241-110:2020 controllability] Density, motion and language adjust where
      the platform allows, and every adjustment is reversible with defaults restorable.
      `INSPECTED`
- [ ] [PRAC] The maker's arrangements — layouts, filters, ordering, open panels — persist
      and are not clobbered by updates or by a re-render. `INSPECTED`
- [ ] [PRAC — ISO 9241-110:2020 user engagement] Nothing in the product needs to be
      learned twice: the second encounter is faster than the first. `ASKED`, `INSPECTED`

## 6. Surface pass: menus

- [ ] [PRAC — Nielsen H4 consistency and standards; Apple HIG; Material 3] One convention:
      platform order for platform actions (Edit → Copy → Paste; View → Zoom), not invented
      order. `INSPECTED`
- [ ] [PRAC — NN/g menu-design checklist 2024] Items are verbs, short and parallel in form.
      `READ`
- [ ] [PRAC — Nielsen H6 recognition rather than recall] Nothing needed on a primary path
      is reachable only through a menu. `INSPECTED`
- [ ] [PRAC — platform HIG keyboard conventions] Shortcuts shown, conflict-free, and not
      required for a core task. Disabled items stay visible and inert; nothing vanishes
      mid-session. `INSPECTED`
- [ ] [PRAC — Nielsen H7 flexibility and efficiency] Flat enough that a core action is not
      three levels deep. `INSPECTED`

## 7. Surface pass: settings

- [ ] [PRAC — NN/g] Grouped by user task, not by internal feature boundary. `READ`
- [ ] [REQ — ISO 9241-110:2020 self-descriptiveness] Each setting has a label, a
      plain-language description, its current value visible, and immediate or clearly stated
      apply behaviour. `INSPECTED`
- [ ] [PRAC] Search or filter once the list passes roughly 20 settings. `INSPECTED`
- [ ] [REQ — WCAG 2.2 SC 3.3.5 (AAA); PRAC — SC 3.2.6] Help appears where the decision is
      made, not behind a link that leaves the page. Note the distinction: 3.2.6 is about
      *consistent location* of help mechanisms across pages; "help at the point of decision"
      is 3.3.5 (AAA) plus practice. `INSPECTED`
- [ ] [PRAC — Nielsen H5] Dangerous settings are separated, explained and confirmed.
      `INSPECTED`

## 8. Surface pass: documentation

- [ ] [PRAC — ISO 24495-1:2023] Task-oriented: organised by what the reader is trying to
      do, not by the feature tree. `READ`
- [ ] [REQ — ISO 24495-1:2023; PRAC — plainlanguage.gov guidelines] Plain language;
      jargon defined on first use; no idiom the reader may not share. `READ`
- [ ] [PRAC — Nielsen H9] Every procedure states its prerequisites, the steps in order, and
      the expected result. `READ`
- [ ] [PRAC] Screenshots and examples match the current interface version. `INSPECTED`
- [ ] [PRAC — Nielsen H10] Findable; related topics cross-linked; one purpose per page.
      `INSPECTED`
- [ ] [PRAC] Honest about limitations and known issues. A documentation page that promises
      what the artifact cannot do is a defect in the documentation. `READ`

## 9. Practice

The lens that keeps this a companion rather than an audit. It is not a standards lens; it
protects the making. Its provenance is practice-as-research in art and design (Schön's
reflective practitioner, Smith & Dean's *Practice-led Research, Research-led Practice*),
tagged `[PRAC — PaR]` to be explicit that it is a research-tradition consensus, not a
published requirement.

- [ ] [PRAC — PaR] The work is allowed to be unfinished. A draft's job is to exist and be
      looked at. In the making register, the only binding rules are the exclusion floor.
      `READ`
- [ ] [PRAC — PaR] Placeholders are named, not disguised: `TBD: pricing` and `lorem` are
      different things, and only one of them is honest. `INSPECTED`
- [ ] [PRAC — PaR] Each iteration changes few enough things that the maker can attribute
      cause to effect. `ASKED`
- [ ] [PRAC — PaR] Deliberate breaks are recorded with their reason, not corrected toward
      the checklist. `ASKED`
- [ ] [PRAC — PaR] The trace exists: what was tried, what was learned, what is still open.
      It belongs in the session output, not only in someone's memory. `MEASURED` (present or
      absent)
- [ ] [PRAC — PaR] No slop in the advice itself: no invented metric, no invented evidence, no
      generic recommendation that would fit any product ("improve the UX", "check your
      contrast"). `READ`
- [ ] [PRAC — PaR] The maker's judgement is the primary instrument and the checklist is a
      second opinion. When they disagree and the rule is `[PRAC]`, the maker wins and the
      deviation is recorded. When the rule is `[REQ]`, the floor holds and the reason is
      explained once. `ASKED`

## Severity

- **Blocker** — a person cannot complete a task or is excluded: keyboard trap (2.1.2),
  unlabeled control (4.1.2), contrast failure (1.4.3), status by colour alone (1.4.1,
  4.1.3), destructive action with no confirm or undo (3.3.4 where it applies), lost work.
- **Major** — the task costs clearly more than it should, a part cannot be reused or
  adjusted where the tasks demand it, or attention is taken without consent and cannot be
  turned off.
- **Minor** — checklist polish; fix opportunistically.

A blocker in the making register is still a blocker. Nothing else is.

## Sources

- **WCAG 2.2** — W3C Recommendation, 5 October 2023 (editorial update 12 December 2024),
  https://www.w3.org/TR/WCAG22/. Ratified as ISO/IEC 40500:2025 on 21 October 2025.
  WCAG 3 is a Working Draft and does not replace it.
- **ISO 9241-110:2020** — Ergonomics of human–system interaction, interaction principles:
  suitability for the task, self-descriptiveness, conformity with user expectations,
  learnability, controllability, use error robustness, user engagement. The
  "suitability for individualization" principle is the 2006 edition's wording and is not
  in the current list. Paywalled; find via https://www.iso.org/ (search "9241-110").
- **ISO 24495-1:2023** — Plain language, Part 1: governing principles and guidelines
  (June 2023). Paywalled; find via https://www.iso.org/ (search "24495").
- **Nielsen's ten heuristics** — Nielsen Norman Group,
  https://www.nngroup.com/articles/ten-usability-heuristics/
  H1 visibility of system status · H2 match between system and the real world · H3 user
  control and freedom · H4 consistency and standards · H5 error prevention · H6 recognition
  rather than recall · H7 flexibility and efficiency of use · H8 aesthetic and minimalist
  design · H9 help users recognise, diagnose, recover from errors · H10 help and
  documentation.
- **NN/g articles cited above** —
  *Designing Empty States in Complex Applications: 3 Guidelines* (2021)
  https://www.nngroup.com/articles/empty-state-interface-design/ ·
  *The Power of Defaults* (2005) https://www.nngroup.com/articles/the-power-of-defaults/ ·
  *Menu-Design Checklist: 17 UX Guidelines* (2024)
  https://www.nngroup.com/articles/menu-design/ ·
  *Indicators, Validations, and Notifications* (2024)
  https://www.nngroup.com/articles/indicators-validations-notifications/ ·
  *Five Mistakes in Designing Mobile Push Notifications* (2018)
  https://www.nngroup.com/articles/push-notification/ ·
  *Modal & Nonmodal Dialogs* (2024) https://www.nngroup.com/articles/modal-nonmodal-dialog/ ·
  *The Attention Economy* (2019) https://www.nngroup.com/articles/attention-economy/
- **Calm technology** — Weiser & Brown, *The Coming Age of Calm Technology* (Xerox PARC,
  5 October 1996) and *Designing Calm Technology* (1995); Case, *Calm Technology*
  (O'Reilly, 2015), principles as published at https://calmtech.com/. See
  `references/calm-technology.md`.
- **Apple Human Interface Guidelines** — https://developer.apple.com/design/
- **Material Design 3** — https://m3.material.io/
- **ARIA Authoring Practices Guide** — https://www.w3.org/WAI/ARIA/apg/
- **WebAIM Million** — annual accessibility crawl, https://webaim.org/projects/million/
- **plainlanguage.gov** — US federal plain-language guidelines,
  https://www.plainlanguage.gov/guidelines/
- **W3C Design Tokens Community Group** — https://www.w3.org/community/design-tokens/
- **OpenDesign craft references** — `accessibility-baseline`, `state-coverage`,
  `animation-discipline`, `form-validation`, `rtl-and-bidi`, `laws-of-ux`, bundled with
  Open Design.

### WCAG 2.2 deep links

Every success criterion cited in this file, anchored in the current recommendation. All
anchors were checked against the published TR. If a criterion number above does not
resolve to one of these anchors, the citation is wrong — fix the citation, not the anchor.

| SC | Anchor | Cited for |
| --- | --- | --- |
| 1.1.1 | https://www.w3.org/TR/WCAG22/#non-text-content | text alternatives |
| 1.2.2 | https://www.w3.org/TR/WCAG22/#captions-prerecorded | captions |
| 1.3.1 | https://www.w3.org/TR/WCAG22/#info-and-relationships | structure |
| 1.3.5 | https://www.w3.org/TR/WCAG22/#identify-input-purpose | form input purpose |
| 1.4.1 | https://www.w3.org/TR/WCAG22/#use-of-color | status not by colour alone |
| 1.4.3 | https://www.w3.org/TR/WCAG22/#contrast-minimum | text contrast |
| 1.4.10 | https://www.w3.org/TR/WCAG22/#reflow | reflow at 320 px / 400% |
| 1.4.11 | https://www.w3.org/TR/WCAG22/#non-text-contrast | icon, border, focus contrast |
| 2.1.1 | https://www.w3.org/TR/WCAG22/#keyboard | keyboard operability |
| 2.1.2 | https://www.w3.org/TR/WCAG22/#no-keyboard-trap | keyboard trap |
| 2.2.2 | https://www.w3.org/TR/WCAG22/#pause-stop-hide | motion over 5 s |
| 2.3.1 | https://www.w3.org/TR/WCAG22/#three-flashes-or-below-threshold | flash safety (A) |
| 2.3.2 | https://www.w3.org/TR/WCAG22/#three-flashes | flash safety (AAA) |
| 2.3.3 | https://www.w3.org/TR/WCAG22/#animation-from-interactions | vestibular motion (AAA) |
| 2.4.3 | https://www.w3.org/TR/WCAG22/#focus-order | focus order |
| 2.4.7 | https://www.w3.org/TR/WCAG22/#focus-visible | visible focus |
| 2.4.11 | https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum | focus not obscured |
| 2.4.13 | https://www.w3.org/TR/WCAG22/#focus-appearance | focus appearance (AAA) |
| 2.5.3 | https://www.w3.org/TR/WCAG22/#label-in-name | label in name |
| 2.5.7 | https://www.w3.org/TR/WCAG22/#dragging-movements | dragging alternative |
| 2.5.8 | https://www.w3.org/TR/WCAG22/#target-size-minimum | target size |
| 3.1.1 | https://www.w3.org/TR/WCAG22/#language-of-page | page language |
| 3.1.2 | https://www.w3.org/TR/WCAG22/#language-of-parts | language of parts |
| 3.2.6 | https://www.w3.org/TR/WCAG22/#consistent-help | consistent help location |
| 3.3.1 | https://www.w3.org/TR/WCAG22/#error-identification | error identification |
| 3.3.2 | https://www.w3.org/TR/WCAG22/#labels-or-instructions | labels and instructions |
| 3.3.3 | https://www.w3.org/TR/WCAG22/#error-suggestion | error suggestion |
| 3.3.4 | https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data | legal, financial, data |
| 3.3.5 | https://www.w3.org/TR/WCAG22/#help | help (AAA) |
| 3.3.7 | https://www.w3.org/TR/WCAG22/#redundant-entry | redundant entry |
| 3.3.8 | https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum | authentication |
| 4.1.2 | https://www.w3.org/TR/WCAG22/#name-role-value | accessible names |
| 4.1.3 | https://www.w3.org/TR/WCAG22/#status-messages | status messages |

## Keeping the sources current

The citations above were accurate at the time of writing (checklist v2, WCAG 2.2 era,
2026-11). At review time: state the version of each standard checked; if a newer version
exists, use it and note the change. Never cite a success criterion number you have not read
in the current specification — if the number cannot be verified, cite the principle and mark
the finding honestly, or report it as not verified.
