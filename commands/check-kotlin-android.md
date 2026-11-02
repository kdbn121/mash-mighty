---
name: check-kotlin-android
description: Run a full Kotlin Android check - build, tests and review, then fix what fails.
---

Run on the current Kotlin Android project (or $ARGUMENTS):

1. Use skill kotlin-android-build-fix with `./gradlew build`.
2. Use skill kotlin-android-testing to run and fill test gaps.
3. Use agent kotlin-android-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
