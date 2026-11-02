---
name: mysql-review
description: Review MySQL code for correctness, security, performance and idiom with severity labels. Use on any MySQL change (mysql connection config).
---

# MySQL review

## Check first (common MySQL faults)
- implicit type conversion killing indexes
- latin1 tables
- huge OFFSET pagination

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: InnoDB with foreign keys, utf8mb4 everywhere, covering indexes for hot queries.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
