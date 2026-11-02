---
name: swift-ios-patterns
description: Idiomatic Swift iOS patterns and structure. Use when writing or designing Swift iOS code (*.xcodeproj, Package.swift).
---

# Swift iOS patterns

Apply when writing new Swift iOS code.

## Do
- value types by default
- async/await with actors
- SwiftUI state ownership clear

## Avoid
- retain cycles in closures
- UI updates off main actor
- force unwraps

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with XCTest.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
