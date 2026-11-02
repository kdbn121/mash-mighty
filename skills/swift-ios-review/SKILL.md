---
name: swift-ios-review
description: Review Swift iOS code for correctness, security, performance and idiom with severity labels. Use on any Swift iOS change (*.xcodeproj, Package.swift).
---

# Swift iOS review

## Check first (common Swift iOS faults)
- retain cycles in closures
- UI updates off main actor
- force unwraps

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: value types by default, async/await with actors, SwiftUI state ownership clear.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
