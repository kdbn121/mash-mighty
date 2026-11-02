---
name: react-native-review
description: Review React Native code for correctness, security, performance and idiom with severity labels. Use on any React Native change (react-native in package.json).
---

# React Native review

## Check first (common React Native faults)
- inline functions in big lists
- unhandled permissions
- secrets in the bundle

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: FlatList for long lists, platform files for differences, typed navigation.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
