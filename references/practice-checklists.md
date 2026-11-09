# Practice checklists

Normative for the **practice review** stage of `ux-practice-companion`.

## How to read this file

Every item carries a source tag. Two kinds:

- **[REQ]** — traceable to a published standard or first-party platform
  guidance (W3C, ISO, Apple, Google). These are the requirements.
- **[PRAC]** — consensus practice from usability research (NN/g, Nielsen)
  or long-standing convention. Advisory, but deviations need a reason.

Base target: **WCAG 2.2 AA** unless the user set a different conformance
level. Where a check does not apply, mark N/A with the reason — an untested
check is never reported as passed. If newer versions of the standards exist
than the ones cited here (for example WCAG 2.3 or a revised ISO part), the
reviewer checks the current published version at review time and states
which version was used in the report.

## 1. Workflow

- [ ] [PRAC — Nielsen H7] Each primary task has a complete path: entry,
      progress, exit, and error recovery — traced in the plan, verified in
      the artifact.
- [ ] [PRAC — ISO 9241-110: suitability for the task] Task order matches the
      user's real sequence, not the system's internal model.
- [ ] [REQ — WCAG 2.2 SC 3.3.4; PRAC — Nielsen H5] Destructive or
      irreversible actions require explicit confirmation and are undoable
      where possible.
- [ ] [REQ — WCAG 2.2 SC 3.3.1, 3.3.3] Errors name what happened, where, and
      the next step — in plain language.
- [ ] [PRAC — NN/g empty states] Empty, loading, error, and success states
      are designed for every screen, not just the happy path.
- [ ] [PRAC — Nielsen H7] Repeated actions have shortcuts; rare actions are
      findable.
- [ ] [PRAC] Interruptions (pings, badges, alerts) exist only where the user
      opted in. Presence beats pressure.

## 2. Accessibility (WCAG 2.2 AA baseline)

- [ ] [REQ — WCAG 2.2 SC 1.4.3, 1.4.11] Text contrast ≥ 4.5:1 (≥ 3:1 for
      large text, icons, and UI borders).
- [ ] [REQ — WCAG 2.2 SC 2.1.1, 2.4.3, 2.4.7, 2.4.11] Everything operable by
      keyboard, in a logical focus order, with a visible focus indicator that
      is not obscured.
- [ ] [REQ — WCAG 2.2 SC 2.5.8] Pointer targets at least 24×24 CSS px, or
      have spacing-equivalent targets; touch surfaces aim for 44 px [PRAC —
      Apple HIG / Material touch guidance].
- [ ] [REQ — WCAG 2.2 SC 4.1.2, 2.5.3] Every control has an accessible name;
      icon-only buttons have labels.
- [ ] [REQ — WCAG 2.2 SC 1.4.1, 4.1.3] Status changes announced by text or
      `aria-live`, never color or motion alone.
- [ ] [REQ — WCAG 2.2 SC 3.3.1–3.3.4, 1.3.5] Forms: labels bound to fields,
      required state marked, errors identified in text next to the field,
      inputs identify their purpose.
- [ ] [REQ — WCAG 2.2 SC 1.4.10] Content reflows at 320 px width and 400%
      zoom without horizontal scrolling.
- [ ] [REQ — WCAG 2.2 SC 2.3.1 (A); SC 2.3.2, 2.3.3 (AAA); PRAC —
      `prefers-reduced-motion`] Motion is safe: no essential info by
      movement; respect reduced-motion preference; nothing flashes more than
      3×/second.
- [ ] [REQ — WCAG 2.2 SC 3.3.7, 3.3.8] Login and memory tests avoided; no
      redundant re-entry of the same data in one process.
- [ ] [REQ — WCAG 2.2 SC 2.5.7] Dragging has a single-pointer alternative.

## 3. Modularization

- [ ] [PRAC — DRY; design-system practice] Recurring patterns exist once as
      a named component, not copy-pasted.
- [ ] [PRAC — component API design] Each component has a clear contract:
      inputs, events, states.
- [ ] [PRAC] Components work outside the screen they were born on (no hidden
      context dependencies).
- [ ] [PRAC — W3C Design Tokens CG direction] Tokens for color, spacing, and
      type — no one-off literals.
- [ ] [PRAC] Composition over configuration: pieces compose below the task
      level so users can build what the author did not anticipate.
- [ ] [PRAC] Shared logic lives in one place; behavior changes propagate.

## 4. Customizability

- [ ] [REQ — ISO 9241-110: suitability for individualization] Settings map
      to real user tasks — every setting names the situation it serves.
- [ ] [PRAC — NN/g defaults] Sensible defaults; changing nothing yields a
      good experience.
- [ ] [REQ — ISO 9241-110: suitability for individualization] Density,
      motion, and language adjust where the platform allows.
- [ ] [PRAC — Nielsen H3] Every adjustment is reversible; defaults can be
      restored.
- [ ] [PRAC] The user's arrangements (layouts, filters, ordering) persist
      without being clobbered by updates.

## 5. Surface pass: menus

- [ ] [PRAC — Apple HIG / Material menus; Nielsen H4] One convention: actions
      in menus follow platform order (Edit → Copy → Paste; View → Zoom), not
      invented order.
- [ ] [PRAC] Menu items are verbs, short, and parallel in form.
- [ ] [PRAC — Nielsen H2, match with the real world] Nothing reachable only
      in a menu that is needed on a primary path.
- [ ] [PRAC — platform HIG keyboard conventions] Keyboard shortcuts shown and
      conflict-free; disabled items are visible but inert, never hidden
      mid-session.
- [ ] [PRAC — Nielsen H4] Flat navigation; no burying core actions three
      levels deep.

## 6. Surface pass: settings

- [ ] [PRAC — NN/g settings research] Grouped by user task, not by internal
      feature boundary.
- [ ] [REQ — ISO 9241-110: self-descriptiveness] Each setting has a label, a
      plain-language description, its current value visible, and immediate or
      clearly stated apply behavior.
- [ ] [PRAC] Search or filter when the list exceeds ~20 settings.
- [ ] [REQ — WCAG 2.2 SC 3.2.6] Help appears where the decision is made, not
      behind a link that leaves the page.
- [ ] [PRAC — Nielsen H5] Dangerous settings are separated, explained, and
      confirmed.

## 7. Surface pass: documentation

- [ ] [PRAC — ISO 24495-1 plain language] Task-oriented: organized by what
      the reader is trying to do, not by feature tree.
- [ ] [REQ — ISO 24495-1; US plainlanguage.gov guidelines] Plain language;
      jargon defined on first use.
- [ ] [PRAC — Nielsen H9] Every procedure states prerequisites, steps in
      order, and the expected result.
- [ ] [PRAC] Screenshots and examples match the current interface version.
- [ ] [REQ — WCAG 2.2 SC 3.2.6] Searchable; related topics cross-linked;
      each page has one purpose; help is consistent across entry points.
- [ ] [PRAC] Honest about limitations and known issues.

## Severity reminders

- **Blocker:** exclusion or an impossible task — a keyboard trap (WCAG
  2.1.2), an unlabeled control (SC 4.1.2), contrast failure (SC 1.4.3),
  destructive action without confirmation (SC 3.3.4).
- **Major:** a task takes clearly more effort than it should, or a component
  cannot be reused or adjusted where the tasks demand it.
- **Minor:** checklist polish; fix opportunistically.

## Sources

- **WCAG 2.2** — W3C Recommendation, https://www.w3.org/TR/WCAG22/
  (check for the current published version at review time; WCAG 3 is in
  draft and does not yet replace it).
- **ISO 9241-110** — Ergonomics of human–system interaction, interaction
  principles (task suitability, self-descriptiveness, controllability,
  individualization, error tolerance). Paywalled; find the current part
  via https://www.iso.org/ (search "9241-110").
- **ISO 24495-1** — Plain language, Part 1: governing principles.
  Paywalled; find via https://www.iso.org/ (search "24495").
- **Nielsen's 10 usability heuristics** — Nielsen Norman Group,
  https://www.nngroup.com/articles/ten-usability-heuristics/
- **NN/g** — articles on empty states, defaults, and settings
  (https://www.nngroup.com/).
- **Apple Human Interface Guidelines** — https://developer.apple.com/design/
- **Material Design** — https://m3.material.io/
- **plainlanguage.gov** — US federal plain-language guidelines.
- **W3C Design Tokens Community Group** — https://www.w3.org/community/design-tokens/

### WCAG 2.2 deep links

Every success criterion cited in this file, anchored in the current
recommendation. If a criterion number above does not resolve to one of
these anchors, the citation is wrong — fix the citation, not the anchor.

| SC | Anchor | Cited for |
| --- | --- | --- |
| 1.3.5 | https://www.w3.org/TR/WCAG22/#identify-input-purpose | form input purpose |
| 1.4.1 | https://www.w3.org/TR/WCAG22/#use-of-color | status not by color alone |
| 1.4.3 | https://www.w3.org/TR/WCAG22/#contrast-minimum | text contrast |
| 1.4.10 | https://www.w3.org/TR/WCAG22/#reflow | reflow at 320 px / 400% |
| 1.4.11 | https://www.w3.org/TR/WCAG22/#non-text-contrast | icon and border contrast |
| 2.1.1 | https://www.w3.org/TR/WCAG22/#keyboard | keyboard operability |
| 2.1.2 | https://www.w3.org/TR/WCAG22/#no-keyboard-trap | blocker definition |
| 2.3.1 | https://www.w3.org/TR/WCAG22/#three-flashes-or-below-threshold | flash safety (A) |
| 2.3.2 | https://www.w3.org/TR/WCAG22/#three-flashes | flash safety (AAA) |
| 2.3.3 | https://www.w3.org/TR/WCAG22/#animation-from-interactions | motion (AAA) |
| 2.4.3 | https://www.w3.org/TR/WCAG22/#focus-order | focus order |
| 2.4.7 | https://www.w3.org/TR/WCAG22/#focus-visible | visible focus |
| 2.4.11 | https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum | focus not obscured |
| 2.5.3 | https://www.w3.org/TR/WCAG22/#label-in-name | label in name |
| 2.5.7 | https://www.w3.org/TR/WCAG22/#dragging-movements | dragging alternative |
| 2.5.8 | https://www.w3.org/TR/WCAG22/#target-size-minimum | target size |
| 3.2.6 | https://www.w3.org/TR/WCAG22/#consistent-help | consistent help |
| 3.3.1 | https://www.w3.org/TR/WCAG22/#error-identification | error identification |
| 3.3.2 | https://www.w3.org/TR/WCAG22/#labels-or-instructions | labels and instructions |
| 3.3.3 | https://www.w3.org/TR/WCAG22/#error-suggestion | error suggestion |
| 3.3.4 | https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data | irreversible actions |
| 3.3.7 | https://www.w3.org/TR/WCAG22/#redundant-entry | redundant entry |
| 3.3.8 | https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum | accessible authentication |
| 4.1.2 | https://www.w3.org/TR/WCAG22/#name-role-value | accessible names |
| 4.1.3 | https://www.w3.org/TR/WCAG22/#status-messages | status messages |

## Keeping the sources current

The citations above were accurate when written (checklist v1, WCAG 2.2
era). At review time: state the version of each standard you checked
against; if a newer version of a standard exists, use it and note the
change. Never cite a success criterion number you have not read in the
current spec — if the number cannot be verified, cite the principle and
mark the finding honestly.
