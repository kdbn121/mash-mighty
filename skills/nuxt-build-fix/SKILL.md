---
name: nuxt-build-fix
description: Fix Nuxt build, type, lint and runtime errors with minimal changes. Use when a Nuxt build or check fails.
---

# Nuxt build fix

Check command: `npx nuxi build`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: window access during SSR, duplicate fetching on client, secrets in public runtime config.

DONE: `npx nuxi build` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
