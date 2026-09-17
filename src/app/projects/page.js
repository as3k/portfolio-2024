import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn';
import JsonLd, { createBreadcrumbSchema, createCollectionPageSchema } from '@/components/JsonLd';
import ProjectCard from '@/components/ProjectCard';
import { getArchivedProjects, getProjectsPageProjects } from '@/lib/content';

export const metadata = {
  title: 'Case Studies | Zachary Guerrero',
  description: 'Full-stack product engineering case studies. Features owned from concept to production across B2B SaaS, infrastructure, and personal projects.',
  openGraph: {
    title: 'Case Studies | Zachary Guerrero',
    description: 'Solving problems through thoughtful design, research, and development.',
    url: 'https://zacharyguerrero.com/projects',
    siteName: 'Zachary Guerrero',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Zachary Guerrero',
    description: 'Solving problems through thoughtful design, research, and development.',
  },
};

function ProjectSection({ title, projects, children }) {
  if (projects.length === 0) return null;

  return (
    <section className="mb-16">
      <FadeIn>
        <h2 className="text-heading-4-bold mb-6">{title}</h2>
      </FadeIn>
      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" staggerDelay={0.1}>
        {projects.map((project) => (
          <FadeInStaggerItem key={project.slug}>
            <ProjectCard project={project} />
          </FadeInStaggerItem>
        ))}
      </FadeInStagger>
      {children}
    </section>
  );
}

function WorkInProgressCard({ slug, title, excerpt, tags, image, status = "In Development" }) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block bg-zg-dark-0 rounded-lg overflow-hidden hover:ring-2 hover:ring-zg-teal hover:shadow-xl hover:shadow-zg-teal/10 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zg-teal/5 to-zg-dark-1 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-12 h-12 rounded-full bg-zg-teal/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-zg-teal/20 transition-colors">
                <svg className="w-6 h-6 text-zg-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-microcopy-2 text-zg-teal">Project overview</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zg-dark-1/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <span className="flex items-center gap-2 text-white text-body-1-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-microcopy-2 text-gray-400">{status}</span>
          <span className="text-gray-600">&bull;</span>
          <span className="text-microcopy-2 text-gray-400">2026</span>
        </div>
        <h2 className="text-heading-5-semibold text-white mb-3 group-hover:text-zg-teal transition-colors duration-300">
          {title}
        </h2>
        <p className="text-body-1 text-gray-400 line-clamp-2">{excerpt}</p>
        <div className="flex flex-wrap gap-x-2 gap-y-3 mt-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-microcopy-1 bg-zg-dark-1 text-gray-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function SideProjectLink({ emoji, title, description, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 p-5 bg-zg-dark-0 rounded-lg hover:ring-1 hover:ring-zg-teal/50 hover:-translate-y-0.5 transition-all duration-300"
    >
      <span className="text-2xl flex-shrink-0 mt-0.5">{emoji}</span>
      <div>
        <h3 className="text-body-1-semibold text-white mb-1 group-hover:text-zg-teal transition-colors">{title}</h3>
        <p className="text-body-1 text-gray-400">{description}</p>
      </div>
      <svg className="w-4 h-4 text-gray-500 flex-shrink-0 mt-1.5 group-hover:text-zg-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
}

export default function ProjectsPage() {
  const allProjects = getProjectsPageProjects();

  // Separate projects by category.
  // Client work matches the `Local Business` tag or category so a B2B-tagged client
  // project like High Rapid Networks (which carries a Local Business tag) lands in
  // Client Projects while its factual `category` stays "B2B Tech".
  const featured = allProjects.filter(p => p.meta.featured);
  const clientProjects = allProjects.filter(
    (project) =>
      project.meta.category === 'Local Business' ||
      (project.meta.tags || []).includes('Local Business'),
  );
  const supportingWork = allProjects.filter(
    (project) => !project.meta.featured && !clientProjects.includes(project),
  );
  const archived = getArchivedProjects();

  const collectionSchema = createCollectionPageSchema(allProjects);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Projects", url: "https://zacharyguerrero.com/projects" },
  ]);

  const inProgress = [
    {
      slug: "ren",
      title: "Ren",
      image: "/images/projects/ren-cover.webp",
      excerpt: "An active React Native prototype for turning messy brain dumps into useful memory and accountability context.",
      tags: ["React Native", "Memory", "Prototype"],
    },
    {
      slug: "launchbook",
      title: "LaunchBook",
      image: "/images/projects/lb-cover.webp",
      excerpt: "A paused PWA proof of concept for local business owners to manage services, availability, and shareable appointment links.",
      tags: ["Booking", "PWA", "Exploration"],
      status: "Paused",
    },
  ];

  const sideProjects = [
    {
      emoji: "\uD83C\uDFB2",
      title: "Othello",
      description: "Multiplayer Reversi game. Built for fun, shipped live.",
      href: "https://othello.zkg.io",
    },
    {
      emoji: "\uD83D\uDC89",
      title: "Sliding Scale",
      description: "Blood glucose sliding scale calculator. Solved a specific clinical problem, shipped as a web tool.",
      href: "https://units.zkg.io",
    },
  ];

  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
        <FadeIn>
          <section className="mb-16">
            <h1 className="text-heading-2-bold md:text-heading-1-bold mb-4">Case Studies</h1>
            <p className="text-body-2 text-gray-400 max-w-2xl">
              Design engineering case studies across B2B SaaS, enterprise UX, infrastructure, and independent product work. Want to know how I approach problems? Check out my{' '}
              <Link href="/process" className="text-zg-teal hover:text-zg-coral transition-colors">
                design process
              </Link>.
            </p>
          </section>
        </FadeIn>

        {/* Featured Work */}
        <ProjectSection title="Featured Case Studies" projects={featured} />

        {/* Supporting Work */}
        <ProjectSection title="Supporting Work" projects={supportingWork} />

        {/* Past Client Work - Local Business */}
        <ProjectSection title="Client Projects" projects={clientProjects}>
          <FadeIn delay={0.2}>
            <p className="text-body-1 text-gray-400 mt-6">
              I also do freelance work for local businesses. If you're interested in that type of work, feel free to{' '}
              <Link href="/lets-talk" className="text-zg-teal hover:text-zg-coral transition-colors">
                reach out
              </Link>{' '}
              or visit{' '}
              <a
                href="https://beetleandfrog.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zg-teal hover:text-zg-coral transition-colors"
              >
                Beetle & Frog Design
              </a>.
            </p>
          </FadeIn>
        </ProjectSection>

        {/* Work in Progress */}
        <section className="mb-16">
          <FadeIn>
            <h2 className="text-heading-4-bold mb-6">In Development and Explorations</h2>
            <p className="text-body-1 text-gray-400 mb-8 max-w-2xl">
              Current projects and documented explorations. These pages share product direction and implementation decisions, with each project&apos;s status stated clearly.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" staggerDelay={0.1}>
            {inProgress.map((project) => (
              <FadeInStaggerItem key={project.slug}>
                <WorkInProgressCard {...project} />
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </section>

        {/* Archive Link */}
        {archived.length > 0 && (
          <FadeIn delay={0.3}>
            <div className="flex justify-center mb-16">
              <Link
                href="/projects/archive"
                className="group text-body-1-semibold text-gray-400 hover:text-gray-300 transition-colors duration-300 inline-flex items-center gap-2"
              >
                View Archived Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        )}

        {/* CTA Section */}
        <FadeIn delay={0.4}>
          <section className="p-6 md:p-8 lg:p-12 bg-zg-dark-0 rounded-lg text-center mb-16">
            <h2 className="text-heading-5-semibold mb-4">Interested in working together?</h2>
            <p className="text-body-1 text-gray-400 mb-6 max-w-xl mx-auto">
              I&apos;m looking for Design Engineer and UX Engineer roles where product design and implementation work closely together. Also open to consulting engagements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/lets-talk"
                className="rounded-md text-white bg-zg-teal hover:bg-zg-coral active:scale-95 active:brightness-90 transition-all duration-300 px-5 py-3 text-body-1-bold"
              >
                Get in Touch
              </Link>
              <Link
                href="/about"
                className="rounded-md text-white ring-2 ring-gray-600 hover:ring-zg-teal hover:bg-zg-teal/10 active:scale-95 active:bg-zg-teal/20 transition-all duration-300 px-5 py-3 text-body-1-bold"
              >
                About Me
              </Link>
            </div>
          </section>
        </FadeIn>

        {/* Side Projects */}
        <FadeIn delay={0.45}>
          <section>
            <div className="mb-8">
              <h2 className="text-heading-4-bold mb-2">Side Projects</h2>
              <p className="text-body-1 text-gray-400">
                Quick builds, weekend experiments, tools I needed that didn't exist. More on the{' '}
                <Link href="/blog" className="text-zg-teal hover:text-zg-coral transition-colors">blog</Link>.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sideProjects.map((project) => (
                <SideProjectLink key={project.title} {...project} />
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
