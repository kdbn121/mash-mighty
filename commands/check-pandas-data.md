---
name: check-pandas-data
description: Run a full pandas data work check - build, tests and review, then fix what fails.
---

Run on the current pandas data work project (or $ARGUMENTS):

1. Use skill pandas-data-build-fix with `python -m pytest`.
2. Use skill pandas-data-testing to run and fill test gaps.
3. Use agent pandas-data-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
