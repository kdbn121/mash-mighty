---
name: check-aws
description: Run a full AWS check - build, tests and review, then fix what fails.
---

Run on the current AWS project (or $ARGUMENTS):

1. Use skill aws-build-fix with `aws sts get-caller-identity`.
2. Use skill aws-testing to run and fill test gaps.
3. Use agent aws-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
