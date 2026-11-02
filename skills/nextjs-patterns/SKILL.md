---
name: nextjs-patterns
description: Idiomatic Next.js patterns and structure. Use when writing or designing Next.js code (next.config.*, app/ or pages/).
---

# Next.js patterns

Apply when writing new Next.js code.

## Do
- server components by default
- fetch on the server, cache deliberately
- route handlers for APIs

## Avoid
- client-only code in server components
- hydration mismatch from Date or random
- secrets exposed via NEXT_PUBLIC_

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with Vitest + Playwright.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
