---
name: check-mysql
description: Run a full MySQL check - build, tests and review, then fix what fails.
---

Run on the current MySQL project (or $ARGUMENTS):

1. Use skill mysql-build-fix with `mysqlcheck`.
2. Use skill mysql-testing to run and fill test gaps.
3. Use agent mysql-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
