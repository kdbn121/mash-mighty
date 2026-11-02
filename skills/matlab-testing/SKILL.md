---
name: matlab-testing
description: Write and fix MATLAB / Simulink tests with matlab.unittest. Use when adding tests or raising coverage in MATLAB / Simulink projects.
---

# MATLAB / Simulink testing

Tool: matlab.unittest.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known MATLAB / Simulink faults: growing arrays in loops, magic numbers, unsaved random seeds.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
