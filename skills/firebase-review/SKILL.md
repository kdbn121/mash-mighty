---
name: firebase-review
description: Review Firebase code for correctness, security, performance and idiom with severity labels. Use on any Firebase change (firebase.json).
---

# Firebase review

## Check first (common Firebase faults)
- open read/write rules
- unbounded queries cost
- admin SDK in client

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: security rules tested, least-privilege rules, batched writes.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
