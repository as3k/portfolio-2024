import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogAudioPlayer from "@/components/BlogAudioPlayer";
import BlogTableOfContents from "@/components/BlogTableOfContents";
import { FadeIn } from "@/components/FadeIn";
import JsonLd, { createBreadcrumbSchema } from "@/components/JsonLd";
import MDXComponents from "@/components/MDXComponents";
import { getBlogAudioManifest } from "@/lib/blog-audio";
import { formatBlogDate } from "@/lib/blog-date";
import { extractBlogHeadings } from "@/lib/blog-outline";
import { getAllPosts, getBlogBySlug } from "@/lib/content";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post || post.meta.draft) {
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
      images: meta.heroImage ? [{ url: meta.heroImage, width: 1080, height: 675, alt: meta.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta.excerpt,
      images: meta.heroImage ? [meta.heroImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post || post.meta.draft) {
    notFound();
  }

  const { meta, content } = post;
  const headings = extractBlogHeadings(content);
  const audioManifest = getBlogAudioManifest(slug);

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
    image: meta.heroImage ? `https://zacharyguerrero.com${meta.heroImage}` : undefined,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        {/* Back link */}
        <FadeIn>
          <div className="mx-auto max-w-5xl">
            <Link
              href="/blog"
              className="mb-10 inline-flex items-center gap-2 text-microcopy-2 text-gray-400 transition-colors hover:text-zg-teal"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.1}>
          <header className="mx-auto mb-10 max-w-5xl lg:mb-12">
            <div className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-microcopy-2 text-gray-400">
              <span className="text-zg-teal">Zachary Guerrero</span>
              <span aria-hidden="true">·</span>
              <span>Design Engineer</span>
              <span aria-hidden="true">·</span>
              <time dateTime={meta.date}>{formatBlogDate(meta.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{meta.readingTime}</span>
            </div>
            <h1 className="max-w-3xl text-heading-2-bold text-white md:text-display-2-bold">{meta.title}</h1>
            <p className="mt-5 max-w-2xl text-body-2 text-gray-400">{meta.excerpt}</p>
          </header>
        </FadeIn>

        {audioManifest ? (
          <FadeIn delay={0.12}>
            <BlogAudioPlayer contentSlug={slug} manifest={audioManifest} />
          </FadeIn>
        ) : null}

        {meta.heroImage ? (
          <FadeIn delay={0.15}>
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-gray-800">
              <Image
                src={meta.heroImage}
                alt={`Cover art for ${meta.title}`}
                width={1080}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
          </FadeIn>
        ) : null}

        {(meta.tags?.length > 0 || meta.links?.length > 0) ? (
          <FadeIn delay={0.18}>
            <div className="mx-auto mb-12 flex max-w-5xl flex-col gap-5 border-b border-gray-800 pb-7 pt-6 lg:mb-16 lg:flex-row lg:items-center lg:justify-between">
              {meta.tags?.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-800 px-3 py-1 text-microcopy-2 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
              {meta.links?.length > 0 ? (
                <div className="lg:text-right">
                  <p className="text-microcopy-1 text-zg-teal">LINKS</p>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
                    {meta.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-body-2-semibold text-zg-teal transition-colors hover:text-zg-teal-light"
                      >
                        {link.label}
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M6 3h7v7M13 3 3 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </FadeIn>
        ) : null}

        {/* Article content */}
        <FadeIn delay={0.2}>
          <div>
            {headings.length > 0 ? (
              <details className="mx-auto mb-10 max-w-3xl border-y border-gray-800 py-4 xl:hidden">
                <summary className="cursor-pointer text-microcopy-1 text-zg-teal">ON THIS PAGE</summary>
                <nav aria-label="Table of contents" className="mt-4">
                  <BlogTableOfContents headings={headings} />
                </nav>
              </details>
            ) : null}

            <div className="mx-auto max-w-6xl xl:grid xl:grid-cols-[minmax(0,42rem)_10rem] xl:justify-center xl:gap-10">
            <article className="prose prose-invert max-w-none
              prose-headings:font-semibold prose-headings:text-white
              prose-h2:mb-4 prose-h2:mt-10 prose-h2:text-2xl prose-h2:lg:text-3xl
              prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-xl
              prose-p:mb-5 prose-p:text-base prose-p:leading-relaxed prose-p:text-gray-400 prose-p:lg:text-lg
              prose-strong:font-semibold prose-strong:text-white
              prose-a:text-zg-teal prose-a:no-underline hover:prose-a:underline
              prose-ul:mb-5 prose-ul:text-gray-400
              prose-ol:mb-5 prose-ol:text-gray-400
              prose-li:text-base prose-li:lg:text-lg
              prose-blockquote:my-8 prose-blockquote:border-l-zg-teal prose-blockquote:pl-5 prose-blockquote:text-lg prose-blockquote:italic prose-blockquote:text-gray-300
              prose-code:rounded prose-code:bg-zg-dark-0 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:text-zg-teal
              prose-pre:mb-5 prose-pre:rounded-lg prose-pre:bg-zg-dark-0 prose-pre:p-4
              prose-hr:my-10 prose-hr:border-gray-700"
            >
              <MDXRemote source={content} components={MDXComponents} />
            </article>

            {headings.length > 0 ? (
              <aside className="hidden xl:block">
                <div className="sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto border-l border-gray-800 pl-5">
                  <p className="text-microcopy-1 text-zg-teal">ON THIS PAGE</p>
                  <nav aria-label="Table of contents" className="mt-4">
                    <BlogTableOfContents headings={headings} />
                  </nav>
                </div>
              </aside>
            ) : null}
            </div>
          </div>
        </FadeIn>

        {/* Footer navigation */}
        <FadeIn>
          <footer className="mx-auto mt-16 max-w-6xl border-t border-gray-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group text-left"
                >
                  <span className="text-microcopy-2 text-gray-400 block mb-1">Next Post</span>
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
                  <span className="text-microcopy-2 text-gray-400 block mb-1">Previous Post</span>
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
