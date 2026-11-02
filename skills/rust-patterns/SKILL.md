---
name: rust-patterns
description: Idiomatic Rust patterns and structure. Use when writing or designing Rust code (Cargo.toml).
---

# Rust patterns

Apply when writing new Rust code.

## Do
- Result with ? for errors
- borrow before clone
- enums for state

## Avoid
- unwrap in library code
- needless clones
- unsafe without proof

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with cargo test.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
