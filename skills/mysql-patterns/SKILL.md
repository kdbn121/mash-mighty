---
name: mysql-patterns
description: Idiomatic MySQL patterns and structure. Use when writing or designing MySQL code (mysql connection config).
---

# MySQL patterns

Apply when writing new MySQL code.

## Do
- InnoDB with foreign keys
- utf8mb4 everywhere
- covering indexes for hot queries

## Avoid
- implicit type conversion killing indexes
- latin1 tables
- huge OFFSET pagination

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with app tests.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
