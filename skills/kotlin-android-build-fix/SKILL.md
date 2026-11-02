---
name: kotlin-android-build-fix
description: Fix Kotlin Android build, type, lint and runtime errors with minimal changes. Use when a Kotlin Android build or check fails.
---

# Kotlin Android build fix

Check command: `./gradlew build`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: GlobalScope launches, context leaks, work on main thread.

DONE: `./gradlew build` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
