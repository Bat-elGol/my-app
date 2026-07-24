// app/components/HeroSection.tsx
import type { ReactElement } from 'react';
import Link from 'next/link';

export function HeroSection(): ReactElement {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-4xl">
        <div className="space-y-8 text-center">
          {/* Eyebrow text */}
          <div className="inline-flex items-center rounded-full bg-zinc-800 px-4 py-1.5">
            <span className="text-sm font-medium text-blue-400">
              Welcome to my portfolio
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building Digital Experiences
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              That Inspire
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg text-zinc-400 sm:text-xl">
            {
              "I'm a passionate web developer specializing in creating beautiful, functional, and accessible web applications. Let's bring your ideas to life."
            }
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              View My Projects
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-8 py-3 font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              Learn More
            </Link>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-3 gap-4 border-t border-zinc-700 pt-12 sm:gap-8">
            <div>
              <div className="text-2xl font-bold text-white sm:text-3xl">
                50+
              </div>
              <p className="mt-1 text-sm text-zinc-400 sm:text-base">
                Projects Completed
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white sm:text-3xl">
                5+
              </div>
              <p className="mt-1 text-sm text-zinc-400 sm:text-base">
                Years Experience
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white sm:text-3xl">
                100%
              </div>
              <p className="mt-1 text-sm text-zinc-400 sm:text-base">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
