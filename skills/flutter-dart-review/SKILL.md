---
name: flutter-dart-review
description: Review Flutter / Dart code for correctness, security, performance and idiom with severity labels. Use on any Flutter / Dart change (pubspec.yaml).
---

# Flutter / Dart review

## Check first (common Flutter / Dart faults)
- setState after dispose
- heavy work in build
- missing keys in lists

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: const widgets, one state approach used consistently, small widget trees.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
