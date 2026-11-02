---
name: check-mongodb
description: Run a full MongoDB check - build, tests and review, then fix what fails.
---

Run on the current MongoDB project (or $ARGUMENTS):

1. Use skill mongodb-build-fix with `npm test`.
2. Use skill mongodb-testing to run and fill test gaps.
3. Use agent mongodb-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
