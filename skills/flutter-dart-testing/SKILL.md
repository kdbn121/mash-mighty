---
name: flutter-dart-testing
description: Write and fix Flutter / Dart tests with flutter_test. Use when adding tests or raising coverage in Flutter / Dart projects.
---

# Flutter / Dart testing

Tool: flutter_test.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Flutter / Dart faults: setState after dispose, heavy work in build, missing keys in lists.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
