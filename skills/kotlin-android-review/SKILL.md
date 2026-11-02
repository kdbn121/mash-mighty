---
name: kotlin-android-review
description: Review Kotlin Android code for correctness, security, performance and idiom with severity labels. Use on any Kotlin Android change (build.gradle.kts with android).
---

# Kotlin Android review

## Check first (common Kotlin Android faults)
- GlobalScope launches
- context leaks
- work on main thread

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: ViewModel + StateFlow, coroutines with structured scopes, Compose for UI.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
