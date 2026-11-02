---
name: redis-testing
description: Write and fix Redis tests with app tests. Use when adding tests or raising coverage in Redis projects.
---

# Redis testing

Tool: app tests.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Redis faults: KEYS in production, no eviction policy, cache stampede.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
