---
name: check-redis
description: Run a full Redis check - build, tests and review, then fix what fails.
---

Run on the current Redis project (or $ARGUMENTS):

1. Use skill redis-build-fix with `redis-cli ping`.
2. Use skill redis-testing to run and fill test gaps.
3. Use agent redis-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
