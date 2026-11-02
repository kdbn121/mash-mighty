---
name: go-review
description: Review Go code for correctness, security, performance and idiom with severity labels. Use on any Go change (go.mod).
---

# Go review

## Check first (common Go faults)
- ignored errors
- goroutine leaks
- data races on maps

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: return errors, wrap with context, small interfaces at the consumer, context passed first.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
