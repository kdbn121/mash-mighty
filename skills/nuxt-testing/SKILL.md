---
name: nuxt-testing
description: Write and fix Nuxt tests with Vitest + @nuxt/test-utils. Use when adding tests or raising coverage in Nuxt projects.
---

# Nuxt testing

Tool: Vitest + @nuxt/test-utils.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Nuxt faults: window access during SSR, duplicate fetching on client, secrets in public runtime config.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
