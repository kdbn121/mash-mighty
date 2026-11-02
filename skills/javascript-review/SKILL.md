---
name: javascript-review
description: Review JavaScript code for correctness, security, performance and idiom with severity labels. Use on any JavaScript change (package.json, .js/.mjs files).
---

# JavaScript review

## Check first (common JavaScript faults)
- == instead of ===
- unhandled promise rejections
- mutating shared objects

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: const by default, async/await over raw promise chains, small pure functions.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
