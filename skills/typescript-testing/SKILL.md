---
name: typescript-testing
description: Write and fix TypeScript tests with Vitest or Jest. Use when adding tests or raising coverage in TypeScript projects.
---

# TypeScript testing

Tool: Vitest or Jest.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known TypeScript faults: any leaking through APIs, non-null assertions hiding bugs, unchecked JSON parse results.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
