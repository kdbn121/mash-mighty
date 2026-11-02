---
name: nuxt-review
description: Review Nuxt code for correctness, security, performance and idiom with severity labels. Use on any Nuxt change (nuxt.config.*).
---

# Nuxt review

## Check first (common Nuxt faults)
- window access during SSR
- duplicate fetching on client
- secrets in public runtime config

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: useFetch/useAsyncData for data, server/api for endpoints, runtimeConfig for env.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
