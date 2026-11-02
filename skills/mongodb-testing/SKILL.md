---
name: mongodb-testing
description: Write and fix MongoDB tests with app tests with memory server. Use when adding tests or raising coverage in MongoDB projects.
---

# MongoDB testing

Tool: app tests with memory server.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known MongoDB faults: unbounded arrays in documents, missing indexes, no transactions where needed.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
