---
name: typescript-review
description: Review TypeScript code for correctness, security, performance and idiom with severity labels. Use on any TypeScript change (tsconfig.json, .ts files).
---

# TypeScript review

## Check first (common TypeScript faults)
- any leaking through APIs
- non-null assertions hiding bugs
- unchecked JSON parse results

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: strict mode on, narrow unions with type guards, prefer readonly and const assertions.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
