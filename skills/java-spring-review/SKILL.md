---
name: java-spring-review
description: Review Java + Spring Boot code for correctness, security, performance and idiom with severity labels. Use on any Java + Spring Boot change (pom.xml or build.gradle with spring).
---

# Java + Spring Boot review

## Check first (common Java + Spring Boot faults)
- field injection
- lazy loading outside transactions
- exposing entities as API models

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: constructor injection, layered controller/service/repository, configuration properties classes.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
