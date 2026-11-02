---
name: react-native-patterns
description: Idiomatic React Native patterns and structure. Use when writing or designing React Native code (react-native in package.json).
---

# React Native patterns

Apply when writing new React Native code.

## Do
- FlatList for long lists
- platform files for differences
- typed navigation

## Avoid
- inline functions in big lists
- unhandled permissions
- secrets in the bundle

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with Jest + RN Testing Library.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
