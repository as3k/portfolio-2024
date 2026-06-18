import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import JsonLd, { createBreadcrumbSchema } from "@/components/JsonLd";
import MDXComponents from "@/components/MDXComponents";
import { getBlogBySlug, getBlogSlugs, getAllPosts, getAllWork } from "@/lib/content";

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return { title: "Not Found" };
  }

  const { meta } = post;
  const title = `${meta.title} | Zachary Guerrero`;

  return {
    title,
    description: meta.excerpt,
    openGraph: {
      title,
      description: meta.excerpt,
      url: `https://zacharyguerrero.com/blog/${slug}`,
      siteName: "Zachary Guerrero",
      locale: "en_US",
      type: "article",
      publishedTime: new Date(meta.date).toISOString(),
      authors: ["Zachary Guerrero"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const { meta, content } = post;

  // Get all posts for next/prev navigation
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Blog", url: "https://zacharyguerrero.com/blog" },
    { name: meta.title, url: `https://zacharyguerrero.com/blog/${slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://zacharyguerrero.com/blog/${slug}`,
    headline: meta.title,
    description: meta.excerpt,
    author: {
      "@type": "Person",
      name: "Zachary Guerrero",
    },
    datePublished: meta.date,
    publisher: {
      "@type": "Person",
      name: "Zachary Guerrero",
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-12 lg:my-16">
        {/* Back link */}
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-microcopy-2 text-gray-500 hover:text-zg-teal transition-colors mb-12"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.1}>
          <header className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-4">
              <time className="text-microcopy-2 text-gray-500">{meta.date}</time>
              <span className="text-gray-700">·</span>
              <span className="text-microcopy-2 text-gray-500">{meta.readingTime}</span>
            </div>
            <h1 className="text-heading-2-bold md:text-heading-1-bold mb-4">{meta.title}</h1>
            <p className="text-body-2 text-gray-400 max-w-2xl">{meta.excerpt}</p>
            {meta.tags && meta.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-microcopy-2 bg-zg-dark-0 text-gray-400 px-3 py-1.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
        </FadeIn>

        {/* Article content */}
        <FadeIn delay={0.2}>
          <article className="max-w-3xl mx-auto px-4 sm:px-0">
            <MDXRemote source={content} components={MDXComponents} />
          </article>
        </FadeIn>

        {/* Footer navigation */}
        <FadeIn>
          <footer className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group text-left"
                >
                  <span className="text-microcopy-2 text-gray-500 block mb-1">Next Post</span>
                  <span className="text-body-1-semibold text-white group-hover:text-zg-teal transition-colors">
                    {nextPost.meta.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group text-left md:text-right"
                >
                  <span className="text-microcopy-2 text-gray-500 block mb-1">Previous Post</span>
                  <span className="text-body-1-semibold text-white group-hover:text-zg-teal transition-colors">
                    {prevPost.meta.title}
                  </span>
                </Link>
              ) : null}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-body-1-semibold text-zg-teal hover:text-zg-coral transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                All Posts
              </Link>
            </div>
          </footer>
        </FadeIn>
      </div>
    </>
  );
}
