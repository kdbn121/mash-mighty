---
name: redis-build-fix
description: Fix Redis build, type, lint and runtime errors with minimal changes. Use when a Redis build or check fails.
---

# Redis build fix

Check command: `redis-cli ping`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: KEYS in production, no eviction policy, cache stampede.

DONE: `redis-cli ping` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
