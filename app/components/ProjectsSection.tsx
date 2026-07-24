// app/components/ProjectsSection.tsx
import type { ReactElement } from 'react';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: readonly string[];
  link: string;
};

const projects: readonly Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with product catalog, shopping cart, and checkout system built with Next.js and TypeScript.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    link: '#',
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, user authentication, and team workspace features.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    link: '#',
  },
  {
    id: '3',
    title: 'Analytics Dashboard',
    description:
      'An interactive analytics dashboard that visualizes business metrics with charts, filters, and export capabilities.',
    technologies: ['Next.js', 'Chart.js', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  },
];

export function ProjectsSection(): ReactElement {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            A selection of projects I{"'"}ve built to showcase my skills and
            experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-lg border border-zinc-200 bg-white p-6 transition hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-500"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-zinc-900">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="mt-3 flex-1 text-sm text-zinc-600">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              <Link
                href={project.link}
                className="mt-6 inline-flex items-center font-medium text-blue-600 transition hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View Project
                <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-lg bg-zinc-50 px-6 py-12 text-center sm:px-12">
          <h3 className="text-2xl font-bold text-zinc-900">
            {'Want to see more?'}
          </h3>
          <p className="mt-2 text-zinc-600">
            Check out my GitHub profile for more projects and contributions.
          </p>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-lg bg-zinc-900 px-6 py-3 font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
          >
            Visit GitHub
            <span className="ml-2">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
