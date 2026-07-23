// app/components/NavigationBar.tsx
import type { ReactElement } from 'react';
import Link from 'next/link';

type NavigationItem = {
  href: string;
  label: string;
};

const navigationItems: readonly NavigationItem[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export function NavigationBar(): ReactElement {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-zinc-950 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-950"
        >
          My Portfolio
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-4 text-sm font-medium text-zinc-600">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
