---
name: check-csharp-dotnet
description: Run a full C# / .NET check - build, tests and review, then fix what fails.
---

Run on the current C# / .NET project (or $ARGUMENTS):

1. Use skill csharp-dotnet-build-fix with `dotnet build && dotnet test`.
2. Use skill csharp-dotnet-testing to run and fill test gaps.
3. Use agent csharp-dotnet-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
