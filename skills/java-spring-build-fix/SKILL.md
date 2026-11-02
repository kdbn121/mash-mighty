---
name: java-spring-build-fix
description: Fix Java + Spring Boot build, type, lint and runtime errors with minimal changes. Use when a Java + Spring Boot build or check fails.
---

# Java + Spring Boot build fix

Check command: `./mvnw verify`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: field injection, lazy loading outside transactions, exposing entities as API models.

DONE: `./mvnw verify` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
