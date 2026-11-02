---
name: react-build-fix
description: Fix React build, type, lint and runtime errors with minimal changes. Use when a React build or check fails.
---

# React build fix

Check command: `npm run build`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: effects used for derived data, missing effect dependencies, new object props each render.

DONE: `npm run build` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
