---
name: postgres-testing
description: Write and fix PostgreSQL tests with pgTAP or app tests. Use when adding tests or raising coverage in PostgreSQL projects.
---

# PostgreSQL testing

Tool: pgTAP or app tests.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known PostgreSQL faults: missing indexes on foreign keys, long transactions holding locks, SELECT * in hot paths.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
