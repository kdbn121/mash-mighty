---
name: rust-testing
description: Write and fix Rust tests with cargo test. Use when adding tests or raising coverage in Rust projects.
---

# Rust testing

Tool: cargo test.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Rust faults: unwrap in library code, needless clones, unsafe without proof.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
