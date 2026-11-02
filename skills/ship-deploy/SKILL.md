---
name: ship-deploy
description: Prepare and run a safe production deploy.
---

# Ship Deploy

Category: engineering.

## Steps
1. Build, tests, lint pass.
2. Env vars and secrets set.
3. Reversible DB changes.
4. Deploy.
5. Smoke test and know the rollback.

## SELECT check
If an installed skill, plugin or connected tool does this job better (real generator, editor, connector), use it and keep these steps as the quality gate.

DONE: Live, smoke-tested, rollback ready.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
