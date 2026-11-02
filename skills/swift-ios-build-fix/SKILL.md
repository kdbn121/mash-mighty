---
name: swift-ios-build-fix
description: Fix Swift iOS build, type, lint and runtime errors with minimal changes. Use when a Swift iOS build or check fails.
---

# Swift iOS build fix

Check command: `xcodebuild test`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: retain cycles in closures, UI updates off main actor, force unwraps.

DONE: `xcodebuild test` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
