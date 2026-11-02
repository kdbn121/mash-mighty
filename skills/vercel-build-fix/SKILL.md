---
name: vercel-build-fix
description: Fix Vercel deploys build, type, lint and runtime errors with minimal changes. Use when a Vercel deploys build or check fails.
---

# Vercel deploys build fix

Check command: `vercel build`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: missing env vars in production, large serverless bundles, uncached heavy pages.

DONE: `vercel build` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
