---
name: github-actions-testing
description: Write and fix GitHub Actions CI tests with act or test runs. Use when adding tests or raising coverage in GitHub Actions CI projects.
---

# GitHub Actions CI testing

Tool: act or test runs.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known GitHub Actions CI faults: secrets printed in logs, pull_request_target misuse, no timeout on jobs.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
