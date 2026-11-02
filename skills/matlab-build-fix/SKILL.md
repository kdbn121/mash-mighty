---
name: matlab-build-fix
description: Fix MATLAB / Simulink build, type, lint and runtime errors with minimal changes. Use when a MATLAB / Simulink build or check fails.
---

# MATLAB / Simulink build fix

Check command: `runtests`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: growing arrays in loops, magic numbers, unsaved random seeds.

DONE: `runtests` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
