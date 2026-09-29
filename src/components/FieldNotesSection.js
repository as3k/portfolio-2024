import Image from "next/image";
import Link from "next/link";
import { formatBlogDate } from "@/lib/blog-date";

function PostDate({ date }) {
  return (
    <time dateTime={date} className="text-microcopy-2 text-gray-400">
      {formatBlogDate(date)}
    </time>
  );
}

function ArrowLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-body-1-semibold text-zg-teal transition-colors hover:text-zg-teal-light"
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

function PostImage({ post, sizes }) {
  if (!post.meta.heroImage) return null;

  return (
    <Image
      src={post.meta.heroImage}
      alt=""
      fill
      sizes={sizes}
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export default function FieldNotesSection({ featured, recent }) {
  return (
    <section className="order-4 mt-24 lg:mt-32" aria-labelledby="field-notes-heading">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-microcopy-1-semibold text-zg-teal">FIELD NOTES</p>
          <h2 id="field-notes-heading" className="mt-2 text-heading-3-bold">
            Field Notes
          </h2>
        </div>
        <Link
          href="/blog"
          className="text-body-1-semibold text-gray-400 transition-colors hover:text-zg-teal"
        >
          Read all notes <span aria-hidden="true">→</span>
        </Link>
      </div>

      {featured ? (
        <article className="group overflow-hidden rounded-2xl border border-zg-teal/30 bg-zg-dark-0 lg:grid lg:grid-cols-2">
          <Link
            href={`/blog/${featured.slug}`}
            className="relative block aspect-[16/10] overflow-hidden bg-zg-dark-1 lg:aspect-auto lg:min-h-full"
            aria-label={`Read ${featured.meta.title}`}
          >
            <PostImage post={featured} sizes="(max-width: 1024px) 100vw, 50vw" />
          </Link>
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-microcopy-2-semibold text-zg-teal">Featured note</span>
              <span aria-hidden="true" className="text-gray-600">·</span>
              <PostDate date={featured.meta.date} />
            </div>
            <h3 className="mt-3 max-w-3xl text-heading-4-semibold text-white">
              <Link href={`/blog/${featured.slug}`} className="transition-colors hover:text-zg-teal">
                {featured.meta.title}
              </Link>
            </h3>
            <p className="mt-3 max-w-3xl text-body-1 text-gray-400">{featured.meta.excerpt}</p>
            <div className="mt-5">
              <ArrowLink href={`/blog/${featured.slug}`}>Read the note</ArrowLink>
            </div>
          </div>
        </article>
      ) : null}

      {recent.length ? (
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {recent.map((post) => (
            <article key={post.slug} className="group overflow-hidden rounded-2xl border border-gray-800 bg-zg-dark-0">
              <Link
                href={`/blog/${post.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-zg-dark-1"
                aria-label={`Read ${post.meta.title}`}
              >
                <PostImage post={post} sizes="(max-width: 768px) 100vw, 33vw" />
              </Link>
              <div className="border-t border-gray-700 p-5">
                <PostDate date={post.meta.date} />
                <h3 className="mt-2 text-heading-6-semibold text-white">
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-zg-teal">
                    {post.meta.title}
                  </Link>
                </h3>
                <div className="mt-3">
                  <ArrowLink href={`/blog/${post.slug}`}>Read</ArrowLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
