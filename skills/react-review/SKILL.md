---
name: react-review
description: Review React code for correctness, security, performance and idiom with severity labels. Use on any React change (react in package.json, .jsx/.tsx).
---

# React review

## Check first (common React faults)
- effects used for derived data
- missing effect dependencies
- new object props each render

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: components small and pure, derive state instead of syncing it, keys stable and unique.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
