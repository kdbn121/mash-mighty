---
name: svelte-review
description: Review Svelte / SvelteKit code for correctness, security, performance and idiom with severity labels. Use on any Svelte / SvelteKit change (svelte.config.js).
---

# Svelte / SvelteKit review

## Check first (common Svelte / SvelteKit faults)
- reactive statements with side effects
- server code imported in client
- stores never cleaned up

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: runes for state, load functions for data, form actions for mutations.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
