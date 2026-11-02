---
name: angular-patterns
description: Idiomatic Angular patterns and structure. Use when writing or designing Angular code (angular.json).
---

# Angular patterns

Apply when writing new Angular code.

## Do
- standalone components
- signals for state
- OnPush change detection

## Avoid
- subscriptions never unsubscribed
- logic in templates
- huge shared modules

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with Jasmine/Karma or Jest.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
