---
name: tailwind-build-fix
description: Fix Tailwind CSS build, type, lint and runtime errors with minimal changes. Use when a Tailwind CSS build or check fails.
---

# Tailwind CSS build fix

Check command: `npm run build`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: giant unreadable class strings, arbitrary values everywhere, dynamic class names purged.

DONE: `npm run build` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
