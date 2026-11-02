---
name: c-cpp-patterns
description: Idiomatic C / C++ patterns and structure. Use when writing or designing C / C++ code (CMakeLists.txt, .c/.cpp).
---

# C / C++ patterns

Apply when writing new C / C++ code.

## Do
- RAII and smart pointers
- const correctness
- warnings as errors

## Avoid
- buffer overruns
- use after free
- undefined behaviour from signed overflow

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with GoogleTest or Catch2.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
