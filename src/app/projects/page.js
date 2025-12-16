import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn';
import { getAllWork } from '@/lib/content';

export const metadata = {
  title: 'Project Showcase | Zachary Guerrero',
  description: 'UX design case studies and projects by Zachary Guerrero. Explore my portfolio of web design, branding, and product design work.',
};

function ProjectCard({ project }) {
  const { slug, meta } = project;

  return (
    <Link
      href={`/projects/${slug}`}
      className="group block bg-zg-dark-0 rounded-lg overflow-hidden hover:ring-2 hover:ring-zg-teal hover:shadow-xl hover:shadow-zg-teal/10 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={meta.heroImage}
          alt={meta.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {meta.featured && (
          <span className="absolute top-3 right-3 bg-zg-teal text-zg-dark-1 text-microcopy-1-semibold px-2 py-1 rounded">
            Featured
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zg-dark-1/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <span className="flex items-center gap-2 text-white text-body-1-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-microcopy-2 text-gray-400">{meta.category}</span>
          <span className="text-gray-600">•</span>
          <span className="text-microcopy-2 text-gray-400">{meta.year}</span>
        </div>
        <h2 className="text-heading-5-semibold text-white mb-2 group-hover:text-zg-teal transition-colors duration-300">
          {meta.title}
        </h2>
        <p className="text-body-1 text-gray-400 line-clamp-2">{meta.excerpt}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {meta.tags?.slice(0, 3).map((tag) => (
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

export default function ProjectsPage() {
  const allProjects = getAllWork();

  return (
    <div className="container my-12 lg:my-16">
      <FadeIn>
        <section className="mb-12">
          <h1 className="text-heading-2-bold md:text-heading-1-bold mb-4">Project Showcase</h1>
          <p className="text-body-2 text-gray-400 max-w-2xl">
            A collection of UX design case studies showcasing my approach to solving problems
            through thoughtful design, research, and development.
          </p>
        </section>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.15}>
        {allProjects.map((project) => (
          <FadeInStaggerItem key={project.slug}>
            <ProjectCard project={project} />
          </FadeInStaggerItem>
        ))}
      </FadeInStagger>
    </div>
  );
}
