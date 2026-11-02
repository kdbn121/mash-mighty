---
name: vue-testing
description: Write and fix Vue tests with Vitest + Vue Test Utils. Use when adding tests or raising coverage in Vue projects.
---

# Vue testing

Tool: Vitest + Vue Test Utils.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Vue faults: destructuring reactive objects loses reactivity, v-if with v-for on one element, mutating props.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
