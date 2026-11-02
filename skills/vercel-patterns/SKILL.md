---
name: vercel-patterns
description: Idiomatic Vercel deploys patterns and structure. Use when writing or designing Vercel deploys code (vercel.json, .vercel).
---

# Vercel deploys patterns

Apply when writing new Vercel deploys code.

## Do
- env vars per environment
- preview deploys per branch
- edge only where needed

## Avoid
- missing env vars in production
- large serverless bundles
- uncached heavy pages

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with preview smoke test.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
