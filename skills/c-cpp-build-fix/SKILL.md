---
name: c-cpp-build-fix
description: Fix C / C++ build, type, lint and runtime errors with minimal changes. Use when a C / C++ build or check fails.
---

# C / C++ build fix

Check command: `cmake --build build`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: buffer overruns, use after free, undefined behaviour from signed overflow.

DONE: `cmake --build build` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
