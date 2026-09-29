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
        <article className="rounded-2xl border border-zg-teal/30 bg-zg-dark-0 p-6 sm:p-8">
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
        </article>
      ) : null}

      {recent.length ? (
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {recent.map((post) => (
            <article key={post.slug} className="border-t border-gray-700 pt-4">
              <PostDate date={post.meta.date} />
              <h3 className="mt-2 text-heading-6-semibold text-white">
                <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-zg-teal">
                  {post.meta.title}
                </Link>
              </h3>
              <div className="mt-3">
                <ArrowLink href={`/blog/${post.slug}`}>Read</ArrowLink>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
