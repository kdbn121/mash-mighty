---
name: electron-build-fix
description: Fix Electron desktop build, type, lint and runtime errors with minimal changes. Use when a Electron desktop build or check fails.
---

# Electron desktop build fix

Check command: `npm run make`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: nodeIntegration in renderer, remote content loaded with privileges, unsigned installers.

DONE: `npm run make` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
