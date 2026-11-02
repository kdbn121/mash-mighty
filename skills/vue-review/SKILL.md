---
name: vue-review
description: Review Vue code for correctness, security, performance and idiom with severity labels. Use on any Vue change (vue in package.json, .vue files).
---

# Vue review

## Check first (common Vue faults)
- destructuring reactive objects loses reactivity
- v-if with v-for on one element
- mutating props

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: Composition API with script setup, computed for derived state, props down, events up.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
