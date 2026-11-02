---
name: check-java-spring
description: Run a full Java + Spring Boot check - build, tests and review, then fix what fails.
---

Run on the current Java + Spring Boot project (or $ARGUMENTS):

1. Use skill java-spring-build-fix with `./mvnw verify`.
2. Use skill java-spring-testing to run and fill test gaps.
3. Use agent java-spring-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
