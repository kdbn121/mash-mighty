---
name: check-postgres
description: Run a full PostgreSQL check - build, tests and review, then fix what fails.
---

Run on the current PostgreSQL project (or $ARGUMENTS):

1. Use skill postgres-build-fix with `psql -c 'EXPLAIN ANALYZE ...'`.
2. Use skill postgres-testing to run and fill test gaps.
3. Use agent postgres-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
