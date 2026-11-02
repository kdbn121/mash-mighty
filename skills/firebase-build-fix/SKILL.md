---
name: firebase-build-fix
description: Fix Firebase build, type, lint and runtime errors with minimal changes. Use when a Firebase build or check fails.
---

# Firebase build fix

Check command: `firebase emulators:exec 'npm test'`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: open read/write rules, unbounded queries cost, admin SDK in client.

DONE: `firebase emulators:exec 'npm test'` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
