---
name: tailwind-review
description: Review Tailwind CSS code for correctness, security, performance and idiom with severity labels. Use on any Tailwind CSS change (tailwind.config.*).
---

# Tailwind CSS review

## Check first (common Tailwind CSS faults)
- giant unreadable class strings
- arbitrary values everywhere
- dynamic class names purged

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: design tokens in theme, components for repeated class sets, mobile-first breakpoints.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
