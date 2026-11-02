---
name: c-cpp-testing
description: Write and fix C / C++ tests with GoogleTest or Catch2. Use when adding tests or raising coverage in C / C++ projects.
---

# C / C++ testing

Tool: GoogleTest or Catch2.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known C / C++ faults: buffer overruns, use after free, undefined behaviour from signed overflow.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
