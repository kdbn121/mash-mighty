---
name: matlab-patterns
description: Idiomatic MATLAB / Simulink patterns and structure. Use when writing or designing MATLAB / Simulink code (.m and .slx files).
---

# MATLAB / Simulink patterns

Apply when writing new MATLAB / Simulink code.

## Do
- vectorise loops
- functions over scripts
- units and parameters in one config

## Avoid
- growing arrays in loops
- magic numbers
- unsaved random seeds

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with matlab.unittest.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
