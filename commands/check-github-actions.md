---
name: check-github-actions
description: Run a full GitHub Actions CI check - build, tests and review, then fix what fails.
---

Run on the current GitHub Actions CI project (or $ARGUMENTS):

1. Use skill github-actions-build-fix with `actionlint`.
2. Use skill github-actions-testing to run and fill test gaps.
3. Use agent github-actions-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
