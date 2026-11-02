---
name: firebase-testing
description: Write and fix Firebase tests with Firebase emulator tests. Use when adding tests or raising coverage in Firebase projects.
---

# Firebase testing

Tool: Firebase emulator tests.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Firebase faults: open read/write rules, unbounded queries cost, admin SDK in client.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
