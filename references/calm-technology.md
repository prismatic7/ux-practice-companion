# Calm technology

Normative for the **attention and calm** section of `references/practice-checklists.md`.

Non-visual UX is not only "works without looking". It is also the cost of looking, and the
cost of being pulled away. This file is the theory of that cost. It is short on purpose.

## Origin

Mark Weiser and John Seely Brown, *The Coming Age of Calm Technology* (Xerox PARC,
5 October 1996), following *Designing Calm Technology* (1995): a calm technology "engages
both the center and the periphery of our attention, and in fact moves back and forth
between the two."

Amber Case, *Calm Technology: Principles and Patterns for Non-Intrusive Design*
(O'Reilly, 2015) turned that into eight principles. They are quoted below as published at
calmtech.com, each with what it forbids in an interface and how a reviewer checks it
without guessing.

## The eight principles

### 1. Technology should require the smallest possible amount of attention

*What it forbids:* anything that takes focus the user did not spend. Auto-focus, auto-play,
modals for non-events, badges that accumulate, motion that loops for decoration, sound on
by default.

*How to check:* list every element that can pull focus without a user action — toast,
badge, bounce, sound, vibration, cursor change. Check each one: did the person opt in, and
is the event worth the interruption class it uses? ([INSPECTED])

### 2. Technology should inform and create calm

*What it forbids:* urgency decoration. Red for ordinary errors, "!" for ordinary news,
countdowns, streak loss warnings, "your account will be…" for things that will not happen.

*How to check:* read the surface as a tired person at the end of a day. Does any element
promise a consequence that is not real? ([READ] the copy, [INSPECTED] the styling)

### 3. Technology should make use of the periphery

*What it forbids:* forcing a decision into the centre of attention when it only needs to be
available. A status light that could be ambient and instead interrupts.

*How to check:* for each piece of state, is there a periphery form — a persistent label, a
dot, an ambient region, a title-bar state — and does it promote to the centre only when it
matters? A surface where everything is centred has no periphery and therefore no calm.
([INSPECTED])

### 4. Technology should amplify the best of technology and the best of humanity

*What it forbids:* making the person do the machine's work (transcribing, retyping,
reconciling), and making the machine do the person's work (deciding what only they can
decide — what their document means, whether a take is good, what the piece is about).

*How to check:* name the tedious step the machine removes, and the judgement it leaves
alone. If a feature removes the judgement, it is the wrong feature, however convenient.
([READ] the flow)

### 5. Technology can communicate, but doesn't need to speak

*What it forbids:* sound as the default channel. Voice for status. Audio that plays in a
shared or quiet room.

*How to check:* for every message, which channels are used, and could a quieter one carry
it? Text before sound; ambient before text; sound only when the eyes are provably busy and
the user can turn it off. In performance, rehearsal and studio contexts this matters more
than anywhere: a room already full of sound has the least tolerance for a UI that talks.
([INSPECTED])

### 6. Technology should work even when it fails

*What it forbids:* a dead end. A spinner with no timeout. An error that discards input. A
mode that cannot be exited. A dependency on a service that is not there.

*How to check:* break it on purpose, in the mind and in the artifact: no network, expired
session, empty data, full disk, refused permission. Does it fall back to a usable state, or
stop being usable? ([INSPECTED] states, [ASKED] where the environment cannot be simulated)

### 7. The right amount of technology is the minimum needed to solve the problem

*What it forbids:* the feature that exists because it was easy. Settings nobody changes.
Onboarding that explains the interface instead of the task.

*How to check:* for each feature and each setting, name the task it serves. No task, no
feature. The minimum is not minimalism as style — it is the fewest moving parts that still
solve the problem. ([READ] the plan, [ASKED] the maker)

### 8. Technology should respect social norms

*What it forbids:* dark patterns, manufactured urgency, engagement streaks, sharing by
default, changing behaviour silently, taking a decision the user believes they still hold.

*How to check:* what does this ask the user to accept, and did they agree? What changes
about their work without their asking? Familiar behaviours should carry the new ones, and
new behaviours should arrive slowly enough to be noticed. ([READ], [ASKED])

## The attention budget

A table the plan must fill in before building. An interruption class that is not listed is
not allowed.

| Class | Examples | Allowed mechanism | Cap |
|---|---|---|---|
| Blocking | Keyboard trap resolution, irreversible loss, security warning | Modal, focus moved | Only when the action cannot proceed |
| Action required, soon | Payment failed, session expiring | Inline banner, one live-region announcement | Once per event; no repeat on dismissal |
| Informational | Saved, exported, synced | `role="status"`, quiet text | Batch within 2 s |
| Ambient | Job progress, connection state, presence | Periphery: label, dot, title bar | Always available, never interrupting |
| Silence | Everything else | Nothing | Default |

Rules that fall out of the table:

- The default channel is silence. A notification earns its channel; it is not granted one
  by default.
- Never two channels for one event. Sound **and** toast **and** badge is three times the
  attention for one fact.
- Anything that loops must be stoppable (WCAG 2.2.2 applies at 5 s), and anything ambient
  must be removed on route change.
- Frequency beats severity for irritation: a minor thing repeated is worse than a major
  thing once. Cap by count, not by tone.

## Calm is not

- **Not "no feedback".** A person needs to know their work landed. Calm is the smallest
  amount of signal that reliably lands, not the absence of signal.
- **Not "no information".** It is information placed where it can be ignored until needed.
- **Not minimalism as style.** White space does not make a product calm if it still pings
  four times an hour.
- **Not neutrality.** Naming a dark pattern is a judgement, and the companion should make
  it plainly.

## Applying it to the review itself

The companion is a surface. If the review is a wall of thirty findings, it has failed
principle 1 and principle 7 at once. Blockers first, at most three majors in full, the rest
as counts. No urgency decoration, no re-asking, no closing pressure.

## Sources

- Weiser, M. & Brown, J. S. (1996). *The Coming Age of Calm Technology*. Xerox PARC,
  5 October 1996.
- Weiser, M. & Brown, J. S. (1995). *Designing Calm Technology*.
- Case, A. (2015). *Calm Technology: Principles and Patterns for Non-Intrusive Design*.
  O'Reilly Media. Principles as published at https://calmtech.com/
- Nielsen Norman Group. *The Attention Economy* (2019).
  https://www.nngroup.com/articles/attention-economy/
- Nielsen Norman Group. *Five Mistakes in Designing Mobile Push Notifications* (2018).
  https://www.nngroup.com/articles/push-notification/
- Nielsen Norman Group. *Indicators, Validations, and Notifications* (2024).
  https://www.nngroup.com/articles/indicators-validations-notifications/
- Nielsen Norman Group. *Modal & Nonmodal Dialogs* (2024).
  https://www.nngroup.com/articles/modal-nonmodal-dialog/
- Nielsen Norman Group. *Banner Blindness Revisited: Users Dodge Ads on Mobile and
  Desktop* (2018). https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/
