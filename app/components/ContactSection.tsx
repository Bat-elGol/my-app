// app/components/ContactSection.tsx
'use client';

import type { FormEvent, ReactElement } from 'react';

export function ContactSection(): ReactElement {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    // No backend exists yet (see docs/plans/2026-07-29-contact-section.md) —
    // prevent the native GET submission, which would otherwise leak the
    // name/email/message into the URL, browser history, and referrers.
    event.preventDefault();
  }

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-32 dark:bg-zinc-950">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {
              "Have a project in mind? Send me a message and I'll get back to you."
            }
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          aria-label="Contact form"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-zinc-900 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-offset-zinc-950"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-zinc-900 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-offset-zinc-950"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-zinc-900 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-offset-zinc-950"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto dark:focus:ring-offset-zinc-950"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
