# Findings report template

The output format for the **practice review** stage. Fill every section;
remove nothing. A field that cannot be filled is written as an honest null
("not verified — no screen reader available"), never left blank.

Replace the `<angle-bracket>` placeholders with real content. Keep the
source tags from `practice-checklists.md` — a finding without a source tag
is an opinion, not a review finding.

---

## Practice review — <task name>

- **Date:** <YYYY-MM-DD>
- **Standards checked:** <e.g. WCAG 2.2 (current W3C TR); ISO 9241-110; Nielsen/NN/g heuristics>
- **Conformance target:** <AA / AAA / custom>
- **Lenses run:** <workflow / accessibility / modularization / customizability / menus / settings / documentation>
- **Scope reviewed:** <files, screens, or components actually inspected>

### Summary

<Two or three plain sentences: what was reviewed and the overall state.
No verdict inflation.>

### Blockers

<One numbered entry per blocker, in this shape. "Blockers: none." is a
valid section.>

1. **<short title>**
   - Lens: <workflow / accessibility / modularization / customizability / surface>
   - Source: <tag from checklist, e.g. REQ — WCAG 2.2 SC 2.5.7>
   - Evidence: <what was actually observed, with file/line or screen>
   - Impact: <who is excluded or what task fails>
   - Smallest fix: <the concrete minimum change>

### Major

<Same shape as blockers. "Major: none." is valid.>

### Minor

<Same shape, may be a compact list.>

### Findings declined by the user

<Findings the user chose not to fix. Record them here — superseded
material stays, it is never deleted. If none: "none".>

### Not verified

<Checks that could not be run, each with the reason: "screen reader
behavior — no assistive tech in this environment". These are honest
unknowns, never counted as passes.>

### Checklist status

<Lens → sections → pass/fail/N/A (with reason). Example:>

- Workflow: pass (7/7)
- Accessibility: pass (10/10)
- Modularization: pass (6/6)
- Customizability: pass (5/5)
- Menus: pass (5/5)
- Settings: pass (5/5)
- Documentation: N/A (no documentation in scope this session)

### Decisions and versions

<One line per standard used: which version was checked, and any newer
version found. Example: "WCAG 2.2, current W3C TR — no newer published
version.">
