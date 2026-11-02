---
name: redis-patterns
description: Idiomatic Redis patterns and structure. Use when writing or designing Redis code (redis client config).
---

# Redis patterns

Apply when writing new Redis code.

## Do
- TTL on cache keys
- clear key naming scheme
- pipelines for batches

## Avoid
- KEYS in production
- no eviction policy
- cache stampede

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with app tests.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
