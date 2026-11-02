---
name: csharp-dotnet-testing
description: Write and fix C# / .NET tests with xUnit. Use when adding tests or raising coverage in C# / .NET projects.
---

# C# / .NET testing

Tool: xUnit.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known C# / .NET faults: async void, .Result deadlocks, disposables not disposed.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
