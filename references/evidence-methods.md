# Evidence methods

Normative for every finding the companion reports.

The failure this file exists to prevent: a review that certifies compliance nobody checked.
A checklist that names a threshold but not a way to establish it invites an agent to write
"pass" beside it. That pass then carries a citation, and the citation makes it worse, not
better.

## The five methods

Every finding names one. If none applies, the item is `NOT VERIFIED` and goes in that
section of the report — never in the pass column.

### MEASURED

A number was produced in this environment, and the report carries the number and how it was
obtained.

Use for: contrast ratios, computed element sizes, target spacing, animation duration,
flash rate, reflow width.

Rules:

- Quote the number, the pair measured, and the instrument: `4.62:1, #1f2933 on #ffffff,
  computed from the rendered styles`.
- Reading a hex value out of a stylesheet and doing the arithmetic in your head is not a
  measurement. Compute it, or report `NOT VERIFIED`.
- A screenshot is not a measurement. Pixels read off an image are `INSPECTED`.
- Thresholds are inclusive and not rounded: 4.499:1 fails 4.5:1.

### INSPECTED

The artifact itself was looked at: the DOM, a rendered surface, the focus path, the states.

Use for: keyboard operability, focus order and visibility, accessible names, live regions,
state coverage, layout under long strings, menus, settings grouping.

Rules:

- Say what was inspected: `tab order walked through the three-step form`; `empty state
  reached by clearing the filter`.
- "Looks fine" is not an inspection. Name the thing you saw.
- If the artifact could not be opened or rendered here, the method is `NOT VERIFIED`, not
  `INSPECTED`.

### READ

The claim is established by reading a text: the specification, the source, the copy, the
documentation, the plan.

Use for: citation accuracy, plain-language quality, documentation structure, feature
inventory, settings descriptions, whether an error message says what happened.

Rules:

- Cite the line or section you read.
- Reading the code is reading. It cannot establish behaviour — for that, inspect or
  measure.

### ASKED

Only the person can answer.

Use for: which assistive technology they actually use, the physical context (noisy room,
shared screen, one hand free), what their users do, which deviations are deliberate, whether
the second encounter is faster than the first.

Rules:

- Ask one thing at a time, in prose, after discovery.
- Record the answer as the evidence: `ASKED — maker confirms VoiceOver on macOS, Arabic
  primary`.
- An assumption about the user is not an answer. If it matters, ask.

### NOT VERIFIED

The check could not be run here. This is an honest null and a normal outcome, not a failure
of the review.

Use for: screen-reader behaviour with no assistive technology present, real touch targets on
a device, real reflow in a browser that is not available, anything needing real users, any
standard whose current text could not be read, and any check whose evidence depends on an
environment this run does not have.

Rules:

- Name the missing instrument: `screen-reader announcement order — no AT in this
  environment`.
- Never convert `NOT VERIFIED` into a pass, and never into a `[PRAC]` finding.
- A review with no `NOT VERIFIED` items is suspicious. It usually means the methods were
  assumed.

## Applying a method to a checklist item

The checklist gives the method after each item. When the method shown is not available:

1. Try the next legitimate method for that claim — an `INSPECTED` check of the DOM often
   substitutes for a `MEASURED` check of the rendered surface, as long as you say which you
   did.
2. If no method is available, report `NOT VERIFIED` with the missing instrument.
3. Do not soften the item into an opinion. An opinion is allowed in the report, under
   *Observations*, labelled as one, and it is not counted in the checklist status.

## What the review may not do

- Report a pass for an item it did not run.
- Present a checklist result as a legal certification. A practice review is not an audit
  against EN 301 549, ADA Title II or Section 508; a conformance claim of that kind needs a
  published accessibility statement and, where the regime requires it, an external audit.
- Quote a success criterion number without having read it in the current specification.
- Attribute a number to a source that does not contain it.
- Move a finding from `NOT VERIFIED` to pass because the maker says it is fine. The maker's
  say-so moves it to `ASKED`, which is a different thing and is recorded as such.

## Cost of a wrong pass

A false positive in this review is not a neutral error. It transfers the exclusion from the
maker's screen to somebody else's day, and it does so with the authority of a citation. The
asymmetry is the reason the method is required: a missed finding annoys a maker, a false
pass excludes a user and teaches everyone downstream to trust the certificate.
