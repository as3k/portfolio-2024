import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn';
import JsonLd, { createBreadcrumbSchema, createCaseStudySchema } from '@/components/JsonLd';
import MDXComponents from '@/components/MDXComponents';
import { ProjectBackLink, ProjectCTAButtons, ProjectNavLink } from '@/components/ProjectNavigation';
import { getAllWork, getWorkBySlug, getWorkSlugs } from '@/lib/content';

export async function generateStaticParams() {
  const slugs = getWorkSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return { title: 'Not Found' };
  }

  const title = work.meta.seo?.metaTitle || `${work.meta.title} | Zachary Guerrero`;
  const description = work.meta.seo?.metaDescription || work.meta.excerpt;

  return {
    title,
    description,
    keywords: work.meta.seo?.keywords,
    openGraph: {
      title,
      description,
      url: `https://zacharyguerrero.com/projects/${slug}`,
      siteName: 'Zachary Guerrero',
      locale: 'en_US',
      type: 'article',
      publishedTime: `${work.meta.year}-01-01T00:00:00.000Z`,
      authors: ['Zachary Guerrero'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

function MetricCard({ metric }) {
  return (
    <div className="bg-zg-dark-0 rounded-lg p-4 text-center hover:shadow-lg hover:shadow-zg-teal/5 hover:-translate-y-1 transition-all duration-300">
      <div className="text-heading-4-bold text-zg-teal">
        {metric.value}
        {metric.unit && <span className="text-heading-6">{metric.unit}</span>}
      </div>
      <div className="text-microcopy-2 text-gray-400 mt-1">{metric.label}</div>
    </div>
  );
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  const { meta, content } = work;

  // Get all projects for next/prev navigation
  const allProjects = getAllWork();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  // Create schema data
  const caseStudySchema = createCaseStudySchema({ slug, meta });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Projects", url: "https://zacharyguerrero.com/projects" },
    { name: meta.title, url: `https://zacharyguerrero.com/projects/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={caseStudySchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
      {/* Back link */}
      <FadeIn>
        <ProjectBackLink currentSlug={slug} />
      </FadeIn>

      {/* Hero section */}
      <FadeIn delay={0.1}>
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-utility-micro-2-semibold text-zg-teal uppercase tracking-wider">
              {meta.category}
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-microcopy-2 text-gray-400">{meta.year}</span>
            {meta.status && (
              <>
                <span className="text-gray-600">•</span>
                <span className="text-microcopy-2 text-zg-coral">{meta.status}</span>
              </>
            )}
          </div>
          <h1 className="text-heading-2-bold md:text-heading-1-bold mb-4">{meta.title}</h1>
          <p className="text-body-2 text-gray-400 max-w-3xl">{meta.excerpt}</p>
        </header>
      </FadeIn>

      {/* Hero image */}
      <FadeIn delay={0.2}>
        <div className="relative aspect-video rounded-lg overflow-hidden mb-16 group">
          <Image
            src={meta.heroImage}
            alt={meta.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
        </div>
      </FadeIn>

      {/* Project info grid */}
      <FadeIn delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 mb-8 border-b border-gray-800">
          <div>
            <h3 className="text-utility-micro-2-semibold text-gray-500 uppercase tracking-wider mb-2">
              Client
            </h3>
            <p className="text-body-1 text-white">{meta.client}</p>
          </div>
          <div>
            <h3 className="text-utility-micro-2-semibold text-gray-500 uppercase tracking-wider mb-2">
              Role
            </h3>
            <p className="text-body-1 text-white">{meta.roles?.join(', ')}</p>
          </div>
          <div>
            <h3 className="text-utility-micro-2-semibold text-gray-500 uppercase tracking-wider mb-2">
              Technologies
            </h3>
            <p className="text-body-1 text-white">{meta.technologies?.join(', ')}</p>
          </div>
        </div>
      </FadeIn>

      {/* Metrics */}
      {meta.metrics && meta.metrics.length > 0 && (
        <FadeIn delay={0.4}>
          <section className="mb-12">
            <h2 className="text-heading-5-semibold mb-6">Key Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">
              {meta.metrics.slice(0, 4).map((metric) => (
                <MetricCard key={metric.label} metric={metric} />
              ))}
            </div>
          </section>
        </FadeIn>
      )}

      {/* MDX Content */}
      <FadeIn delay={0.5}>
        <article className="max-w-3xl mx-auto px-4 sm:px-0">
          <MDXRemote source={content} components={MDXComponents} />
        </article>
      </FadeIn>

      {/* Image gallery */}
      {meta.images && meta.images.length > 0 && (
        <FadeIn>
          <section className="mt-16">
            <h2 className="text-heading-5-semibold mb-6">Project Gallery</h2>
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" staggerDelay={0.1}>
              {meta.images.map((image) => (
                <FadeInStaggerItem key={image}>
                  <div className="relative aspect-video rounded-lg overflow-hidden group">
                    <Image
                      src={image}
                      alt={`${meta.title} screenshot`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </section>
        </FadeIn>
      )}

      {/* Before/After comparison */}
      {meta.beforeImage && (
        <FadeIn>
          <section className="mt-16">
            <h2 className="text-heading-5-semibold mb-6">Before & After</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              <div>
                <p className="text-microcopy-2 text-gray-400 mb-2">Before</p>
                <div className="relative aspect-video rounded-lg overflow-hidden group">
                  <Image
                    src={meta.beforeImage}
                    alt={`${meta.title} - Before`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div>
                <p className="text-microcopy-2 text-gray-400 mb-2">After</p>
                <div className="relative aspect-video rounded-lg overflow-hidden group">
                  <Image
                    src={meta.heroImage}
                    alt={`${meta.title} - After`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      )}

      {/* Tags */}
      <FadeIn>
        <footer className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap gap-2 mb-12">
            {meta.tags?.map((tag) => (
              <span
                key={tag}
                className="text-microcopy-2 bg-zg-dark-0 text-gray-300 px-3 py-1.5 rounded hover:bg-zg-teal/10 hover:text-zg-teal transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Navigation */}
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {prevProject ? (
              <ProjectNavLink
                href={`/projects/${prevProject.slug}`}
                direction="previous"
                fromProject={slug}
                toProject={prevProject.slug}
              >
                <span className="text-microcopy-2 text-gray-500 block mb-1">Previous Project</span>
                <span className="text-body-1-semibold text-white group-hover:text-zg-teal transition-colors">
                  {prevProject.meta.title}
                </span>
              </ProjectNavLink>
            ) : (
              <div />
            )}
            {nextProject && (
              <ProjectNavLink
                href={`/projects/${nextProject.slug}`}
                direction="next"
                fromProject={slug}
                toProject={nextProject.slug}
              >
                <span className="text-microcopy-2 text-gray-500 block mb-1">Next Project</span>
                <span className="text-body-1-semibold text-white group-hover:text-zg-teal transition-colors">
                  {nextProject.meta.title}
                </span>
              </ProjectNavLink>
            )}
          </nav>

          {/* CTA */}
          <ProjectCTAButtons />
        </footer>
      </FadeIn>
      </div>
    </>
  );
}
