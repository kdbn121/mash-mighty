---
name: check-firebase
description: Run a full Firebase check - build, tests and review, then fix what fails.
---

Run on the current Firebase project (or $ARGUMENTS):

1. Use skill firebase-build-fix with `firebase emulators:exec 'npm test'`.
2. Use skill firebase-testing to run and fill test gaps.
3. Use agent firebase-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
