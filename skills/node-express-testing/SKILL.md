---
name: node-express-testing
description: Write and fix Node.js + Express tests with Vitest/Jest + Supertest. Use when adding tests or raising coverage in Node.js + Express projects.
---

# Node.js + Express testing

Tool: Vitest/Jest + Supertest.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Node.js + Express faults: blocking the event loop with sync work, missing await in handlers, stack traces sent to clients.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
