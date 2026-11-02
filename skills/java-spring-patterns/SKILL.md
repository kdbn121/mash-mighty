---
name: java-spring-patterns
description: Idiomatic Java + Spring Boot patterns and structure. Use when writing or designing Java + Spring Boot code (pom.xml or build.gradle with spring).
---

# Java + Spring Boot patterns

Apply when writing new Java + Spring Boot code.

## Do
- constructor injection
- layered controller/service/repository
- configuration properties classes

## Avoid
- field injection
- lazy loading outside transactions
- exposing entities as API models

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with JUnit 5 + Mockito.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
