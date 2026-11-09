# Findings report template

The output format for the **practice review** stage. Fill every section; remove nothing. A
field that cannot be filled is written as an honest null ("not verified — no screen reader
available"), never left blank.

Replace the `<angle-bracket>` placeholders with real content. Keep the source tags and the
evidence method from `practice-checklists.md` — a finding without a source tag is an
opinion, and a finding without a method is a guess.

**Length rule.** The report is a surface. Blockers and up to three majors appear in full.
Beyond three majors, the report lists counts and the titles, and expands only the ones the
maker asks for. Minors are a compact list. A report longer than one screen has already cost
more attention than most of its findings are worth — say so and compress.

---

## Practice review — <task name>

- **Date:** <YYYY-MM-DD>
- **Register:** <making / shipping>
- **Standards checked:** <e.g. WCAG 2.2 (ed. 12 Dec 2024); ISO 9241-110:2020; Nielsen/NN/g;
  Case (2015)>
- **Conformance target:** <AA / AAA / jurisdictional floor / custom>
- **Lenses run:** <attention / workflow / accessibility / composable / steerable / menus /
  settings / documentation / practice>
- **Scope reviewed:** <files, screens, or components actually inspected>
- **Not in scope:** <what the maker excluded, and why>

### Summary

<Two or three plain sentences: what was reviewed and the overall state. No verdict
inflation. If the register is making, say what is expected to be unfinished.>

### Blockers

<One numbered entry per blocker, in this shape. "Blockers: none." is a valid section.>

1. **<short title>**
   - Lens: <attention / workflow / accessibility / composable / steerable / surface /
     practice>
   - Source: <tag from checklist, e.g. REQ — WCAG 2.2 SC 2.1.2>
   - Method: <MEASURED / INSPECTED / READ / ASKED, with the instrument or the thing seen>
   - Evidence: <what was actually observed, with file/line or screen>
   - Impact: <who is excluded or what task fails>
   - Smallest fix: <the concrete minimum change>

### Major

<Same shape as blockers. Show at most three in full; beyond that, list counts and titles.>

### Minor

<Compact list. One line each: title — source — smallest fix.>

### Deliberate breaks

<Deviations the maker chose on purpose, with the reason they gave. These are not defects
and are not counted in the checklist status. If none: "none".>

### Findings declined by the user

<Findings the maker chose not to fix. Record them here — superseded material stays, it is
never deleted. If none: "none".>

### Observations

<Opinions and judgement calls, labelled as such, with no severity. This is where a
[PRAC]-tagged disagreement the maker overruled belongs. Nothing here counts toward the
checklist status. If none: "none".>

### Not verified

<Checks that could not be run, each with the missing instrument: "screen reader behaviour —
no assistive technology in this environment". These are honest unknowns, never counted as
passes.>

### Checklist status

<Lens → sections → pass/fail/N/A (with reason). Example:>

- Attention and calm: pass (12/12)
- Workflow and recovery: 6 pass, 1 not verified (real-device error recovery)
- Accessibility: fail (2 blockers), 7 pass, 2 not verified
- Composable: pass (6/6)
- Steerable: pass (5/5)
- Menus: N/A (no menus in scope)
- Settings: pass (5/5)
- Documentation: N/A (no documentation in scope this session)
- Practice: pass (7/7)

### Practice note

<One or two lines: what this session tried, and what it learned. This is the trace. It is
the part that makes the next session cheaper.>

### Decisions and versions

<One line per standard used: which version was checked, and any newer version found.
Example: "WCAG 2.2, W3C Recommendation 5 Oct 2023 (ed. 12 Dec 2024); ratified as
ISO/IEC 40500:2025 — no newer published version.">
