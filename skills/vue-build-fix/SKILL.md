---
name: vue-build-fix
description: Fix Vue build, type, lint and runtime errors with minimal changes. Use when a Vue build or check fails.
---

# Vue build fix

Check command: `npm run build`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: destructuring reactive objects loses reactivity, v-if with v-for on one element, mutating props.

DONE: `npm run build` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
