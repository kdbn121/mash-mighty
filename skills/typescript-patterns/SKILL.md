---
name: typescript-patterns
description: Idiomatic TypeScript patterns and structure. Use when writing or designing TypeScript code (tsconfig.json, .ts files).
---

# TypeScript patterns

Apply when writing new TypeScript code.

## Do
- strict mode on
- narrow unions with type guards
- prefer readonly and const assertions

## Avoid
- any leaking through APIs
- non-null assertions hiding bugs
- unchecked JSON parse results

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with Vitest or Jest.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
