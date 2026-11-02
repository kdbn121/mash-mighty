---
name: tailwind-testing
description: Write and fix Tailwind CSS tests with visual check. Use when adding tests or raising coverage in Tailwind CSS projects.
---

# Tailwind CSS testing

Tool: visual check.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Tailwind CSS faults: giant unreadable class strings, arbitrary values everywhere, dynamic class names purged.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
