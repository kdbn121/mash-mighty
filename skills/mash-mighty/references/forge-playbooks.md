# FORGE playbooks

One playbook per intent. Each ends with a DONE check. If an installed skill does the same job better, SELECT picks it and the DONE check still applies.

## F1 Fix errors / build fails
1. Get the exact error text and the command that produced it.
2. Find the first real error, not the cascade after it.
3. Smallest change that fixes it. No redesign.
4. Re-run the same command.
- DONE: same command passes, nothing else changed.

## F2 Review code
Check in this order, label each finding HIGH / MEDIUM / LOW:
1. Correctness: logic, edge cases, null and empty input, off-by-one.
2. Security: see F3.
3. Errors: swallowed exceptions, silent fallbacks, missing error messages.
4. Types and contracts: wrong or loose types, broken interfaces.
5. Performance: repeated work, unbounded loops, N+1 queries, heavy renders.
6. Clarity: naming, dead code, duplication.
- DONE: every HIGH has a concrete fix with file and line.

## F3 Security check
1. Inputs validated and sanitised at every boundary.
2. Auth and permission checked on every protected action.
3. No secrets in code, logs or the client bundle.
4. Injection: SQL, shell, template, HTML.
5. Outbound requests cannot be pointed at internal addresses.
6. Dependencies: known vulnerable versions.
- DONE: each risk marked fixed, accepted (with reason) or not applicable.

## F4 Build a feature
1. Restate the requirement in 2 to 3 lines. Confirm if anything is unclear or the change is large.
2. Plan: files to touch, data flow, edge cases.
3. Write tests for the expected behaviour first.
4. Implement until tests pass.
5. Run F2 on the change.
- DONE: tests pass, review clean, requirement met.

## F5 Fix a bug
1. Reproduce it. Write a failing test that shows it.
2. Find the root cause, not the symptom.
3. Fix. The test turns green, all other tests stay green.
- DONE: regression test added and passing.

## F6 Refactor
1. Confirm tests pass before any change.
2. Change structure only, never behaviour.
3. Tests still pass after each step.
- DONE: same behaviour, cleaner code, all tests green.

## F7 Tests
1. Test behaviour, not internals.
2. Cover the happy path, edge cases and failure cases.
3. Target 80% coverage on changed code.
- DONE: new tests pass and fail when the behaviour is broken.

## F8 Ship / deploy
1. Clean build, tests pass, lint clean.
2. Environment variables and secrets set in the target.
3. Database changes reversible.
4. Rollback plan written down.
- DONE: deployed, smoke-tested, rollback known.

## F9 Research and academic writing
1. Define the question and scope.
2. Find primary sources, record each citation.
3. Weigh evidence: method quality, sample, recency.
4. Write claims only the sources support; mark gaps.
- DONE: every claim traced to a source.

## F10 Marketing and content
1. Audience, single main message, channel, call to action.
2. Draft in the brand voice; check facts and claims.
3. Adapt per channel (length, format, hashtags).
- DONE: one clear message and call to action per piece.

## F11 Presentations and documents
1. Audience and the one thing they must remember.
2. Outline first, then content, then design.
3. One idea per slide or section.
- DONE: outline holds up on its own; no slide without a point.

## F12 Anything else
Break the task into steps, pick the closest playbook above for each, and run SELECT for specialised skills.
