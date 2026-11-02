---
name: typescript-build-fix
description: Fix TypeScript build, type, lint and runtime errors with minimal changes. Use when a TypeScript build or check fails.
---

# TypeScript build fix

Check command: `npx tsc --noEmit`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: any leaking through APIs, non-null assertions hiding bugs, unchecked JSON parse results.

DONE: `npx tsc --noEmit` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
