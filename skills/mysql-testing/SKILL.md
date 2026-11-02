---
name: mysql-testing
description: Write and fix MySQL tests with app tests. Use when adding tests or raising coverage in MySQL projects.
---

# MySQL testing

Tool: app tests.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known MySQL faults: implicit type conversion killing indexes, latin1 tables, huge OFFSET pagination.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
