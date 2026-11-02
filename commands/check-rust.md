---
name: check-rust
description: Run a full Rust check - build, tests and review, then fix what fails.
---

Run on the current Rust project (or $ARGUMENTS):

1. Use skill rust-build-fix with `cargo clippy -- -D warnings`.
2. Use skill rust-testing to run and fill test gaps.
3. Use agent rust-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
