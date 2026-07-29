<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project conventions (AIDD process)

- Write a plan doc in `docs/plans/` (scope, gathered context, technical
  requirements, edge cases) before implementing any non-trivial feature.
  Get it approved before starting.
- Never leave a `<form>` without a submit handler that calls
  `event.preventDefault()`. A bare form with no `action`/`onSubmit` defaults
  to a `GET` on the current page, leaking its field values into the URL,
  browser history, and referrers — even if no backend exists yet.
- Never commit real personal contact info (emails, phone numbers) into
  docs or plan files. Use a role/username placeholder instead.
