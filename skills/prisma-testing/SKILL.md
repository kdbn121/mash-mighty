---
name: prisma-testing
description: Write and fix Prisma ORM tests with Vitest with test DB. Use when adding tests or raising coverage in Prisma ORM projects.
---

# Prisma ORM testing

Tool: Vitest with test DB.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Prisma ORM faults: new client per request, N+1 via loops, destructive migrations unreviewed.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
