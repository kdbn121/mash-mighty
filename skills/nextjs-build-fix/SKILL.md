---
name: nextjs-build-fix
description: Fix Next.js build, type, lint and runtime errors with minimal changes. Use when a Next.js build or check fails.
---

# Next.js build fix

Check command: `npm run build`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: client-only code in server components, hydration mismatch from Date or random, secrets exposed via NEXT_PUBLIC_.

DONE: `npm run build` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
