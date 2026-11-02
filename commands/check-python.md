---
name: check-python
description: Run a full Python check - build, tests and review, then fix what fails.
---

Run on the current Python project (or $ARGUMENTS):

1. Use skill python-build-fix with `python -m pytest && ruff check .`.
2. Use skill python-testing to run and fill test gaps.
3. Use agent python-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
