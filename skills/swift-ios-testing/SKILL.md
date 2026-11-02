---
name: swift-ios-testing
description: Write and fix Swift iOS tests with XCTest. Use when adding tests or raising coverage in Swift iOS projects.
---

# Swift iOS testing

Tool: XCTest.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Swift iOS faults: retain cycles in closures, UI updates off main actor, force unwraps.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
