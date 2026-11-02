---
name: vue-patterns
description: Idiomatic Vue patterns and structure. Use when writing or designing Vue code (vue in package.json, .vue files).
---

# Vue patterns

Apply when writing new Vue code.

## Do
- Composition API with script setup
- computed for derived state
- props down, events up

## Avoid
- destructuring reactive objects loses reactivity
- v-if with v-for on one element
- mutating props

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with Vitest + Vue Test Utils.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
