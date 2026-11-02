---
name: mongodb-build-fix
description: Fix MongoDB build, type, lint and runtime errors with minimal changes. Use when a MongoDB build or check fails.
---

# MongoDB build fix

Check command: `npm test`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: unbounded arrays in documents, missing indexes, no transactions where needed.

DONE: `npm test` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
