---
name: nuxt-patterns
description: Idiomatic Nuxt patterns and structure. Use when writing or designing Nuxt code (nuxt.config.*).
---

# Nuxt patterns

Apply when writing new Nuxt code.

## Do
- useFetch/useAsyncData for data
- server/api for endpoints
- runtimeConfig for env

## Avoid
- window access during SSR
- duplicate fetching on client
- secrets in public runtime config

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with Vitest + @nuxt/test-utils.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
