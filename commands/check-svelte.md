---
name: check-svelte
description: Run a full Svelte / SvelteKit check - build, tests and review, then fix what fails.
---

Run on the current Svelte / SvelteKit project (or $ARGUMENTS):

1. Use skill svelte-build-fix with `npm run build`.
2. Use skill svelte-testing to run and fill test gaps.
3. Use agent svelte-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
