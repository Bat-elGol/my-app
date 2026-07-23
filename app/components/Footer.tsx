// app/components/Footer.tsx
import type { ReactElement } from 'react';
import Link from 'next/link';

const footerSections = {
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
  ] as const,
  social: [
    { href: 'https://github.com', label: 'GitHub' },
    { href: 'https://linkedin.com', label: 'LinkedIn' },
    { href: 'https://twitter.com', label: 'Twitter' },
  ] as const,
} as const;

export function Footer(): ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-900">
              About
            </h3>
            <p className="text-sm text-zinc-600">
              A personal portfolio showcasing projects and expertise in web
              development.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerSections.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-600 transition hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 focus:ring-offset-zinc-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Social
            </h3>
            <ul className="space-y-2">
              {footerSections.social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-600 transition hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 focus:ring-offset-zinc-50"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-zinc-200" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-zinc-600">
            © {currentYear} My Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500">
            Built with{' '}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 focus:ring-offset-zinc-50"
            >
              Next.js
            </a>{' '}
            and{' '}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 focus:ring-offset-zinc-50"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
