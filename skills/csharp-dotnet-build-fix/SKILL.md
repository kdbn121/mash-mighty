---
name: csharp-dotnet-build-fix
description: Fix C# / .NET build, type, lint and runtime errors with minimal changes. Use when a C# / .NET build or check fails.
---

# C# / .NET build fix

Check command: `dotnet build && dotnet test`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: async void, .Result deadlocks, disposables not disposed.

DONE: `dotnet build && dotnet test` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
