---
name: csharp-dotnet-review
description: Review C# / .NET code for correctness, security, performance and idiom with severity labels. Use on any C# / .NET change (*.csproj).
---

# C# / .NET review

## Check first (common C# / .NET faults)
- async void
- .Result deadlocks
- disposables not disposed

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: async all the way, dependency injection, nullable reference types on.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
