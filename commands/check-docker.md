---
name: check-docker
description: Run a full Docker check - build, tests and review, then fix what fails.
---

Run on the current Docker project (or $ARGUMENTS):

1. Use skill docker-build-fix with `docker build .`.
2. Use skill docker-testing to run and fill test gaps.
3. Use agent docker-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
