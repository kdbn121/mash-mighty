---
name: svelte-testing
description: Write and fix Svelte / SvelteKit tests with Vitest + Playwright. Use when adding tests or raising coverage in Svelte / SvelteKit projects.
---

# Svelte / SvelteKit testing

Tool: Vitest + Playwright.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Svelte / SvelteKit faults: reactive statements with side effects, server code imported in client, stores never cleaned up.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
