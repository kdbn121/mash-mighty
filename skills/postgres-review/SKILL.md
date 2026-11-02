---
name: postgres-review
description: Review PostgreSQL code for correctness, security, performance and idiom with severity labels. Use on any PostgreSQL change (.sql files, pg connection).
---

# PostgreSQL review

## Check first (common PostgreSQL faults)
- missing indexes on foreign keys
- long transactions holding locks
- SELECT * in hot paths

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: index for real query patterns, constraints in the database, EXPLAIN ANALYZE before tuning.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
