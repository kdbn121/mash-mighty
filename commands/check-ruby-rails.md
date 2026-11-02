---
name: check-ruby-rails
description: Run a full Ruby on Rails check - build, tests and review, then fix what fails.
---

Run on the current Ruby on Rails project (or $ARGUMENTS):

1. Use skill ruby-rails-build-fix with `bin/rails test`.
2. Use skill ruby-rails-testing to run and fill test gaps.
3. Use agent ruby-rails-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
