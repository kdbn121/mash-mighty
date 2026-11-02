---
name: check-c-cpp
description: Run a full C / C++ check - build, tests and review, then fix what fails.
---

Run on the current C / C++ project (or $ARGUMENTS):

1. Use skill c-cpp-build-fix with `cmake --build build`.
2. Use skill c-cpp-testing to run and fill test gaps.
3. Use agent c-cpp-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
