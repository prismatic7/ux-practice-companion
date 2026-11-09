# Example session: ux-practice-companion

A condensed session in the **shipping** register. It shows the three things the plugin
changes: a register is named before work starts, evidence carries a method, and a deliberate
break is recorded rather than corrected.

---

**User:** Build an onboarding flow for a small data-export tool, then review it before we
put it in front of pilot users.

**Companion:** Understood as: a first-run path for analysts exporting from a small tool, and
a shipping review before it reaches pilot users. Five things decide the shape; two more can
wait until the plan.

1. Who runs this — analysts only, or mixed with non-technical colleagues?
2. Desktop web, desktop app, or CLI-adjacent?
3. Does anyone on the pilot use a screen reader, zoom, or a keyboard only? Please say which
   if you know; "not sure" is a real answer.
4. Is the interface English-only, or does it ship Arabic or Hebrew too?
5. Anything fixed — brand, content, deadline?

**User:** Analysts, some non-technical. Desktop web. One pilot user is a keyboard-only user
with low vision. English-only for now, Arabic later. No hard date.

**Companion:** Then the plan, in this order:

1. Path: sign in → connect a source → pick fields → preview → export, with recovery at each
   step and a real first-run empty state.
2. Parts and contracts: `source-picker`, `field-list`, `preview-table`, `export-summary`.
   Each owns its five states and works outside onboarding.
3. Accessibility: keyboard-completable end to end, focus order following the visual order,
   24 px targets minimum, 44 px on the toolbar, errors in text beside the field, status
   never by colour alone.
4. Attention budget: nothing interrupts in the flow. Export progress is ambient in the
   header, promotes to a banner on failure, never a modal — a modal would block the pilot
   user mid-task for something they can act on later.
5. Customizability: export defaults work untouched; column order and delimiter persist per
   user.

Building against that, then a full practice review. Screen-reader behaviour will come back
not verified — there is no assistive technology in this environment.

*(build happens)*

**Companion — practice review.** Reviewed against WCAG 2.2 (ed. 12 December 2024),
ISO 9241-110:2020 and the practice checklists v2. Blockers first.

1. **Preview table sorts by drag only**
   - Lens: accessibility
   - Source: REQ — WCAG 2.2 SC 2.5.7
   - Method: INSPECTED — walked the header row; the only pointer handler is `dragstart`
   - Evidence: `preview-table.tsx` headers expose drag handles, no button, no keyboard path
   - Impact: the keyboard-only pilot user cannot sort at all; sorting is on the primary path
   - Smallest fix: ascending/descending buttons in each header, drag kept as an alternative

2. **Column header text at 3.1:1 on the header fill**
   - Lens: accessibility
   - Source: REQ — WCAG 2.2 SC 1.4.3
   - Method: MEASURED — 3.14:1, `#6b7280` on `#f3f4f6`, computed from the rendered styles
   - Impact: header text is unreadable for the low-vision user at default zoom
   - Smallest fix: darken the header text token to at least 4.5:1 on that fill

Majors: 2 more (`delimiter resets on reload`; `export progress announced by colour only`).
Minors: 3 (`target size 22 px on the row menu`; `error text below the field is 6 px away from
it`; `empty state has no action`). Say the word and I will expand any of them.

**Deliberate breaks:** none recorded yet — I have one question before I record the third
minor. The empty state's shape is unusually bare. Is that a direction you chose, or an
unfinished placeholder?

**User:** Chosen. It's the same bare frame as the rest of the tool.

**Companion:** Recorded as a deliberate break with that reason — not counted as a defect, and
the empty state's missing action stands as a minor only if you want it to.

**Not verified:** screen-reader announcement order and live-region behaviour — no assistive
technology here. Reflow on a real 320 px viewport — no device matrix. Both need a pass with
the pilot user's actual setup before release.

**User:** Apply the two blockers and the delimiter fix.

**Companion:** Applied. Re-ran the affected sections: accessibility 1.4.3 and 2.5.7 pass
(header text now 4.71:1 measured; sort buttons reachable in the tab order and in the DOM
order); steerable passes for persistence.

- Checklist status: attention 12/12 · workflow 6 pass, 1 not verified · accessibility
  1 blocker closed, 2 not verified · composable 6/6 · steerable 5/5 · menus N/A ·
  settings 5/5 · documentation N/A · practice 7/7.
- Declined: none. Deliberate: bare empty state.
- **Practice note:** the flow's own progress handling was the hard part — an ambient
  header state was enough, and the modal we started with was solving our anxiety, not the
  analyst's task.
