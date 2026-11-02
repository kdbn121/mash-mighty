---
name: kotlin-android-testing
description: Write and fix Kotlin Android tests with JUnit + Turbine. Use when adding tests or raising coverage in Kotlin Android projects.
---

# Kotlin Android testing

Tool: JUnit + Turbine.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Kotlin Android faults: GlobalScope launches, context leaks, work on main thread.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
