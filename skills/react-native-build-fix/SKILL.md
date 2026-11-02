---
name: react-native-build-fix
description: Fix React Native build, type, lint and runtime errors with minimal changes. Use when a React Native build or check fails.
---

# React Native build fix

Check command: `npx tsc --noEmit`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: inline functions in big lists, unhandled permissions, secrets in the bundle.

DONE: `npx tsc --noEmit` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
