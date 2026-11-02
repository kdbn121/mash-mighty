---
name: javascript-patterns
description: Idiomatic JavaScript patterns and structure. Use when writing or designing JavaScript code (package.json, .js/.mjs files).
---

# JavaScript patterns

Apply when writing new JavaScript code.

## Do
- const by default
- async/await over raw promise chains
- small pure functions

## Avoid
- == instead of ===
- unhandled promise rejections
- mutating shared objects

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with Vitest or Jest.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
