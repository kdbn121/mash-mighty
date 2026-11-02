---
name: check-fastapi
description: Run a full FastAPI check - build, tests and review, then fix what fails.
---

Run on the current FastAPI project (or $ARGUMENTS):

1. Use skill fastapi-build-fix with `python -m pytest`.
2. Use skill fastapi-testing to run and fill test gaps.
3. Use agent fastapi-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
