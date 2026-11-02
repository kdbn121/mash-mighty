---
name: node-express-build-fix
description: Fix Node.js + Express build, type, lint and runtime errors with minimal changes. Use when a Node.js + Express build or check fails.
---

# Node.js + Express build fix

Check command: `npm test`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: blocking the event loop with sync work, missing await in handlers, stack traces sent to clients.

DONE: `npm test` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
