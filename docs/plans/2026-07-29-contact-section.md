# Plan: Contact Section (Phase 4)

## Scope
Add a Contact section to the homepage, following the same pattern as Hero and
Projects: a self-contained section component rendered directly in `app/page.tsx`
(no new route). Broken into three units of work:

1. `ContactSection` component — heading, intro copy, contact form (name, email, message).
2. Wire it into `app/page.tsx`, after `ProjectsSection`.
3. A rendering test for the new component, mirroring `app/__tests__/page.test.tsx`.

Out of scope: a working form backend/API route, email delivery, spam protection.
This is a static personal site with no server/API layer today.

## Context (gathered from existing code before writing this plan)
- `app/components/HeroSection.tsx`, `ProjectsSection.tsx`, `Footer.tsx`,
  `NavigationBar.tsx` — all functional components typed `(): ReactElement`,
  no default export, named export matching the file name.
- Styling: Tailwind utility classes only, no CSS modules. Sections use
  `<section className="... px-4 py-20 sm:px-6 lg:px-8 lg:py-32">` with an
  inner `mx-auto max-w-*` wrapper.
- Accessibility: existing components consistently use
  `focus:outline-none focus:ring-2 focus:ring-blue-500` (or `zinc-950` on
  light backgrounds) on every interactive element, and real `<label>`/heading
  elements — no placeholder-only inputs.
- `ProjectsSection` uses `link: '#'` as a placeholder for destinations that
  don't exist yet (no real project URLs) — establishes the project's existing
  convention for "not wired up yet" rather than a fake working link.
- Tests live in `app/__tests__/` and use `@testing-library/react` +
  `screen.getByRole`, run via `vitest` (`vitest.config.ts`, `vitest.setup.ts`).
- `package.json` `check` script: `tsc --noEmit && eslint . && prettier --check . && vitest`.
- `.claude/settings.json` allowlists `npx vitest`, `npx eslint`, `npx next` —
  these are the commands to actually run before committing.

## Technical plan
- New file `app/components/ContactSection.tsx`:
  - `<section>` with heading "Get In Touch" (or similar), matching
    `ProjectsSection`'s light background (`bg-white`) since it directly
    follows a light section, for visual rhythm.
  - Form fields: Name (`text`), Email (`email`), Message (`textarea`), each
    with a visible `<label htmlFor>` (not sr-only) — no existing component
    in this repo hides form labels, so don't introduce that pattern here.
  - Submit button styled like the existing CTA buttons in `HeroSection`.
- Update `app/page.tsx`: add `<ContactSection />` after `<ProjectsSection />`.
- New test `app/__tests__/ContactSection.test.tsx`: renders the component,
  asserts the form fields and a submit control are present via
  `getByLabelText` / `getByRole`.
- Update `progress.md`: add a "Phase 4: Contact Section" block with a
  checkbox, matching the existing Phase 1-3 format.

## Failure points / edge cases to warn about
- **No real submit handler.** The form has no `action` and no client-side
  `onSubmit` that sends data anywhere (no API route exists in this project).
  Do not fake a "success" state that implies data was actually sent —
  matches the existing `link: '#'` placeholder convention rather than
  inventing new fake behavior.
- **Client-side validation only.** `required` + `type="email"` on inputs is
  sufficient (matches project scope); do not add a validation library —
  none exists in `package.json` and adding one is out of scope for this
  feature.
- **Accessibility regression risk.** Every input must have an associated
  `<label>` and visible focus ring — the two things every existing
  component in this repo enforces. A missing `htmlFor`/`id` pair is the
  most likely mistake here.
- **Test environment.** `vitest.setup.ts` uses `jsdom`; form interaction
  tests (typing into fields) are not required for this feature — a render +
  presence test is sufficient, consistent with the existing `page.test.tsx`
  which only checks for a heading.

## Approval
Plan reviewed and approved by the user (golzman1612@gmail.com) during a
planning session on 2026-07-29, before any implementation began.
