---
name: matlab-review
description: Review MATLAB / Simulink code for correctness, security, performance and idiom with severity labels. Use on any MATLAB / Simulink change (.m and .slx files).
---

# MATLAB / Simulink review

## Check first (common MATLAB / Simulink faults)
- growing arrays in loops
- magic numbers
- unsaved random seeds

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: vectorise loops, functions over scripts, units and parameters in one config.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
