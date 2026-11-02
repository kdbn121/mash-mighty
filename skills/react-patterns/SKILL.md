---
name: react-patterns
description: Idiomatic React patterns and structure. Use when writing or designing React code (react in package.json, .jsx/.tsx).
---

# React patterns

Apply when writing new React code.

## Do
- components small and pure
- derive state instead of syncing it
- keys stable and unique

## Avoid
- effects used for derived data
- missing effect dependencies
- new object props each render

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with React Testing Library.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
