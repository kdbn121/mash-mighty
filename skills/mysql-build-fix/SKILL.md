---
name: mysql-build-fix
description: Fix MySQL build, type, lint and runtime errors with minimal changes. Use when a MySQL build or check fails.
---

# MySQL build fix

Check command: `mysqlcheck`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: implicit type conversion killing indexes, latin1 tables, huge OFFSET pagination.

DONE: `mysqlcheck` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
