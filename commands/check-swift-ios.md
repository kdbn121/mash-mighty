---
name: check-swift-ios
description: Run a full Swift iOS check - build, tests and review, then fix what fails.
---

Run on the current Swift iOS project (or $ARGUMENTS):

1. Use skill swift-ios-build-fix with `xcodebuild test`.
2. Use skill swift-ios-testing to run and fill test gaps.
3. Use agent swift-ios-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
