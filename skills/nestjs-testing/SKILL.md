---
name: nestjs-testing
description: Write and fix NestJS tests with Jest. Use when adding tests or raising coverage in NestJS projects.
---

# NestJS testing

Tool: Jest.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known NestJS faults: circular module imports, business logic in controllers, missing global validation pipe.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
