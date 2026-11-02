---
name: docker-build-fix
description: Fix Docker build, type, lint and runtime errors with minimal changes. Use when a Docker build or check fails.
---

# Docker build fix

Check command: `docker build .`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: secrets baked into images, huge images from build tools, latest tag drift.

DONE: `docker build .` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
