---
name: postgres-build-fix
description: Fix PostgreSQL build, type, lint and runtime errors with minimal changes. Use when a PostgreSQL build or check fails.
---

# PostgreSQL build fix

Check command: `psql -c 'EXPLAIN ANALYZE ...'`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: missing indexes on foreign keys, long transactions holding locks, SELECT * in hot paths.

DONE: `psql -c 'EXPLAIN ANALYZE ...'` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
