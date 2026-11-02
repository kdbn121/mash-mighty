---
name: check-react-native
description: Run a full React Native check - build, tests and review, then fix what fails.
---

Run on the current React Native project (or $ARGUMENTS):

1. Use skill react-native-build-fix with `npx tsc --noEmit`.
2. Use skill react-native-testing to run and fill test gaps.
3. Use agent react-native-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
