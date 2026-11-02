---
name: check-flask
description: Run a full Flask check - build, tests and review, then fix what fails.
---

Run on the current Flask project (or $ARGUMENTS):

1. Use skill flask-build-fix with `python -m pytest`.
2. Use skill flask-testing to run and fill test gaps.
3. Use agent flask-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
