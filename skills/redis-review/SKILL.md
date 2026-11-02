---
name: redis-review
description: Review Redis code for correctness, security, performance and idiom with severity labels. Use on any Redis change (redis client config).
---

# Redis review

## Check first (common Redis faults)
- KEYS in production
- no eviction policy
- cache stampede

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: TTL on cache keys, clear key naming scheme, pipelines for batches.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
