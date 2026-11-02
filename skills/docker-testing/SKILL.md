---
name: docker-testing
description: Write and fix Docker tests with container smoke test. Use when adding tests or raising coverage in Docker projects.
---

# Docker testing

Tool: container smoke test.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Docker faults: secrets baked into images, huge images from build tools, latest tag drift.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
