import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn';
import { getArchivedProjects } from '@/lib/content';
import JsonLd, { createBreadcrumbSchema } from '@/components/JsonLd';

export const metadata = {
  title: 'Project Archive | Zachary Guerrero',
  description: "Older projects and work that's no longer representative of my current focus, but they're part of my journey.",
};

function ProjectCard({ project }) {
  const { slug, meta } = project;

  return (
    <Link
      href={`/projects/${slug}`}
      className="group block bg-zg-dark-0 rounded-lg overflow-hidden hover:ring-2 hover:ring-gray-600 hover:shadow-xl hover:shadow-gray-900/20 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={meta.heroImage}
          alt={meta.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <span className="absolute top-3 right-3 bg-gray-700 text-gray-300 text-microcopy-1-semibold px-2 py-1 rounded">
          Archived
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-zg-dark-1/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <span className="flex items-center gap-2 text-white text-body-1-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-microcopy-2 text-gray-500">{meta.category}</span>
          <span className="text-gray-700">•</span>
          <span className="text-microcopy-2 text-gray-500">{meta.year}</span>
        </div>
        <h2 className="text-heading-5-semibold text-gray-300 mb-3 group-hover:text-white transition-colors duration-300">
          {meta.title}
        </h2>
        <p className="text-body-1 text-gray-500 line-clamp-2">{meta.excerpt}</p>
      </div>
    </Link>
  );
}

export default function ArchivePage() {
  const archivedProjects = getArchivedProjects();

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zkg.io" },
    { name: "Projects", url: "https://zkg.io/projects" },
    { name: "Archive", url: "https://zkg.io/projects/archive" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
        <FadeIn>
          <section className="mb-16">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-gray-400 hover:text-zg-teal transition-colors mb-6"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Projects
            </Link>
            <h1 className="text-heading-2-bold md:text-heading-1-bold mb-4">Project Archive</h1>
            <p className="text-body-2 text-gray-400 max-w-2xl">
              These are older projects or work that's no longer representative of my current focus,
              but they're part of my journey. Some were never launched, others have evolved beyond
              my initial work.
            </p>
          </section>
        </FadeIn>

        {archivedProjects.length > 0 ? (
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" staggerDelay={0.15}>
            {archivedProjects.map((project) => (
              <FadeInStaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        ) : (
          <FadeIn>
            <div className="text-center py-16">
              <p className="text-body-1 text-gray-500">No archived projects yet.</p>
            </div>
          </FadeIn>
        )}

        {/* Back to Projects CTA */}
        <FadeIn delay={0.3}>
          <div className="flex justify-center mt-12">
            <Link
              href="/projects"
              className="group text-body-1-semibold text-gray-400 hover:text-zg-teal transition-colors duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to all projects
            </Link>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
