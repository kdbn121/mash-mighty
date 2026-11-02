---
name: flutter-dart-build-fix
description: Fix Flutter / Dart build, type, lint and runtime errors with minimal changes. Use when a Flutter / Dart build or check fails.
---

# Flutter / Dart build fix

Check command: `flutter analyze`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: setState after dispose, heavy work in build, missing keys in lists.

DONE: `flutter analyze` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
