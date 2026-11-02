---
name: nextjs-testing
description: Write and fix Next.js tests with Vitest + Playwright. Use when adding tests or raising coverage in Next.js projects.
---

# Next.js testing

Tool: Vitest + Playwright.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Next.js faults: client-only code in server components, hydration mismatch from Date or random, secrets exposed via NEXT_PUBLIC_.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
