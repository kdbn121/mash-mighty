---
name: angular-review
description: Review Angular code for correctness, security, performance and idiom with severity labels. Use on any Angular change (angular.json).
---

# Angular review

## Check first (common Angular faults)
- subscriptions never unsubscribed
- logic in templates
- huge shared modules

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: standalone components, signals for state, OnPush change detection.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
