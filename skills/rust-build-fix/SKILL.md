---
name: rust-build-fix
description: Fix Rust build, type, lint and runtime errors with minimal changes. Use when a Rust build or check fails.
---

# Rust build fix

Check command: `cargo clippy -- -D warnings`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: unwrap in library code, needless clones, unsafe without proof.

DONE: `cargo clippy -- -D warnings` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
