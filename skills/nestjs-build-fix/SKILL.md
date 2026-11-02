---
name: nestjs-build-fix
description: Fix NestJS build, type, lint and runtime errors with minimal changes. Use when a NestJS build or check fails.
---

# NestJS build fix

Check command: `npm run build`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: circular module imports, business logic in controllers, missing global validation pipe.

DONE: `npm run build` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
