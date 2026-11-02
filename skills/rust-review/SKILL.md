---
name: rust-review
description: Review Rust code for correctness, security, performance and idiom with severity labels. Use on any Rust change (Cargo.toml).
---

# Rust review

## Check first (common Rust faults)
- unwrap in library code
- needless clones
- unsafe without proof

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: Result with ? for errors, borrow before clone, enums for state.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
