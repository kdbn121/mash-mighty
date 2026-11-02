---
name: javascript-build-fix
description: Fix JavaScript build, type, lint and runtime errors with minimal changes. Use when a JavaScript build or check fails.
---

# JavaScript build fix

Check command: `npx eslint .`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: == instead of ===, unhandled promise rejections, mutating shared objects.

DONE: `npx eslint .` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
