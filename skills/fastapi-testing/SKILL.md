---
name: fastapi-testing
description: Write and fix FastAPI tests with pytest + httpx. Use when adding tests or raising coverage in FastAPI projects.
---

# FastAPI testing

Tool: pytest + httpx.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known FastAPI faults: blocking calls inside async routes, missing response_model leaks fields, DB sessions not closed.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
