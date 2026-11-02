---
name: c-cpp-review
description: Review C / C++ code for correctness, security, performance and idiom with severity labels. Use on any C / C++ change (CMakeLists.txt, .c/.cpp).
---

# C / C++ review

## Check first (common C / C++ faults)
- buffer overruns
- use after free
- undefined behaviour from signed overflow

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: RAII and smart pointers, const correctness, warnings as errors.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
