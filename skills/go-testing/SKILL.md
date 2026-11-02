---
name: go-testing
description: Write and fix Go tests with go test. Use when adding tests or raising coverage in Go projects.
---

# Go testing

Tool: go test.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Go faults: ignored errors, goroutine leaks, data races on maps.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
