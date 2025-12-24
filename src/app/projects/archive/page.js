
import Link from 'next/link';
import ArchiveProjectCard from '@/components/ArchiveProjectCard';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn';
import JsonLd, { createBreadcrumbSchema } from '@/components/JsonLd';
import { getArchivedProjects } from '@/lib/content';

export const metadata = {
  title: 'Project Archive | Zachary Guerrero',
  description: "Older projects and work that's no longer representative of my current focus, but they're part of my journey.",
};

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
                <ArchiveProjectCard project={project} />
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
