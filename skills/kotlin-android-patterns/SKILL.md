---
name: kotlin-android-patterns
description: Idiomatic Kotlin Android patterns and structure. Use when writing or designing Kotlin Android code (build.gradle.kts with android).
---

# Kotlin Android patterns

Apply when writing new Kotlin Android code.

## Do
- ViewModel + StateFlow
- coroutines with structured scopes
- Compose for UI

## Avoid
- GlobalScope launches
- context leaks
- work on main thread

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with JUnit + Turbine.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
