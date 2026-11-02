---
name: angular-build-fix
description: Fix Angular build, type, lint and runtime errors with minimal changes. Use when a Angular build or check fails.
---

# Angular build fix

Check command: `npx ng build`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: subscriptions never unsubscribed, logic in templates, huge shared modules.

DONE: `npx ng build` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
