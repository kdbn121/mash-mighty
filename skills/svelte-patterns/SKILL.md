---
name: svelte-patterns
description: Idiomatic Svelte / SvelteKit patterns and structure. Use when writing or designing Svelte / SvelteKit code (svelte.config.js).
---

# Svelte / SvelteKit patterns

Apply when writing new Svelte / SvelteKit code.

## Do
- runes for state
- load functions for data
- form actions for mutations

## Avoid
- reactive statements with side effects
- server code imported in client
- stores never cleaned up

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with Vitest + Playwright.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
