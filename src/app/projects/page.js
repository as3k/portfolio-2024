import Link from 'next/link';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn';
import JsonLd, { createBreadcrumbSchema, createCollectionPageSchema } from '@/components/JsonLd';
import ProjectCard from '@/components/ProjectCard';
import { getProjectsByCategory, getProjectsPageProjects } from '@/lib/content';

export const metadata = {
  title: 'Project Showcase | Zachary Guerrero',
  description: 'UX design case studies and projects by Zachary Guerrero. Explore my portfolio of web design, branding, and product design work.',
  openGraph: {
    title: 'Project Showcase | Zachary Guerrero',
    description: 'Solving problems through thoughtful design, research, and development.',
    url: 'https://zacharyguerrero.com/projects',
    siteName: 'Zachary Guerrero',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Showcase | Zachary Guerrero',
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

export default function ProjectsPage() {
  const allProjects = getProjectsPageProjects();

  // Separate projects by category
  const featured = allProjects.filter(p => p.meta.featured);
  const b2bTech = allProjects.filter(p => p.meta.category === 'B2B Tech' && !p.meta.featured);
  const personalProjects = allProjects.filter(p => p.meta.category === 'Personal Project' && !p.meta.featured);
  const localBusiness = getProjectsByCategory('Local Business');

  // Additional work combines non-featured B2B and personal projects
  const additionalWork = [...b2bTech, ...personalProjects];

  const collectionSchema = createCollectionPageSchema(allProjects);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Projects", url: "https://zacharyguerrero.com/projects" },
  ]);

  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
        <FadeIn>
          <section className="mb-16">
            <h1 className="text-heading-2-bold md:text-heading-1-bold mb-4">Project Showcase</h1>
            <p className="text-body-2 text-gray-400 max-w-2xl">
              A collection of UX design case studies showcasing my approach to solving problems
              through thoughtful design, research, and development. Want to know more about how I work? Check out my{' '}
              <Link href="/process" className="text-zg-teal hover:text-zg-coral transition-colors">
                design process
              </Link>.
            </p>
          </section>
        </FadeIn>

        {/* Featured Work */}
        <ProjectSection title="Featured Work" projects={featured} />

        {/* Additional Work */}
        <ProjectSection title="Additional Work" projects={additionalWork} />

        {/* Past Client Work - Local Business */}
        <ProjectSection title="Past Client Work" projects={localBusiness}>
          <FadeIn delay={0.2}>
            <p className="text-body-1 text-gray-500 mt-6">
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

        {/* Archive Link */}
        <FadeIn delay={0.3}>
          <div className="flex justify-center mb-16">
            <Link
              href="/projects/archive"
              className="group text-body-1-semibold text-gray-500 hover:text-gray-300 transition-colors duration-300 inline-flex items-center gap-2"
            >
              View Archived Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn delay={0.4}>
          <section className="p-6 md:p-8 lg:p-12 bg-zg-dark-0 rounded-lg text-center">
            <h2 className="text-heading-5-semibold mb-4">Interested in working together?</h2>
            <p className="text-body-1 text-gray-400 mb-6 max-w-xl mx-auto">
              I'm currently looking for product design roles at B2B SaaS companies.
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
      </div>
    </>
  );
}
