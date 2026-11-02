---
name: check-angular
description: Run a full Angular check - build, tests and review, then fix what fails.
---

Run on the current Angular project (or $ARGUMENTS):

1. Use skill angular-build-fix with `npx ng build`.
2. Use skill angular-testing to run and fill test gaps.
3. Use agent angular-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
