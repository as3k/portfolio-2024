"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatBlogDate } from "@/lib/blog-date";
import { filterPosts } from "@/lib/blog-filters";

const topics = [
  { label: "All articles", tags: ["all"] },
  { label: "AI systems", tags: ["ai-systems", "agentic-systems", "internal-tools"] },
  { label: "Design & product", tags: ["design", "product-design", "ux", "design-thinking"] },
  { label: "Engineering", tags: ["development", "cli", "infrastructure", "performance"] },
  { label: "Case studies", tags: ["case-study"] },
];

function PostVisual({ post }) {
  return (
    <Image
      src={post.meta.heroImage}
      alt={`Cover art for ${post.meta.title}`}
      width={1080}
      height={675}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
    />
  );
}

function PostMeta({ post }) {
  const { meta } = post;

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-microcopy-2 text-gray-400">
      <span className="text-zg-teal">{meta.tags?.[0] || "notes"}</span>
      <span aria-hidden="true">·</span>
      <time>{formatBlogDate(meta.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{meta.readingTime}</span>
    </div>
  );
}

function PostCard({ post, featured = false }) {
  const { slug, meta } = post;

  if (featured && meta.heroImage) {
    return (
      <article className="group overflow-hidden rounded-2xl border border-gray-800 bg-zg-dark-0 md:col-span-2">
        <Link href={`/blog/${slug}`} className="block aspect-[16/10] overflow-hidden">
          <PostVisual post={post} />
        </Link>
        <div className="p-7 sm:p-9 lg:p-10">
          <PostMeta post={post} />
          <h2 className="mt-4 text-heading-3-bold text-white transition-colors duration-300 group-hover:text-zg-teal">
            <Link href={`/blog/${slug}`}>{meta.title}</Link>
          </h2>
          <p className="mt-4 text-body-2 text-gray-400">{meta.excerpt}</p>
          <Link href={`/blog/${slug}`} className="mt-6 inline-flex w-fit items-center gap-2 text-body-2-semibold text-zg-teal hover:text-zg-teal-light">
            Read article <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-800 bg-zg-dark-0">
      <Link
        href={`/blog/${slug}`}
        className="block"
      >
        {meta.heroImage ? (
          <div className="aspect-[16/10] overflow-hidden bg-zg-dark-0">
            <PostVisual post={post} />
          </div>
        ) : null}
        <div className="p-6 sm:p-7">
          <PostMeta post={post} />
          <h2 className="mt-3 text-heading-5-semibold text-white transition-colors duration-300 group-hover:text-zg-teal">
            {meta.title}
          </h2>
          <p className="mt-3 text-body-2 text-gray-400">{meta.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-body-2-semibold text-zg-teal">
            Read article <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function BlogIndex({ posts }) {
  const [query, setQuery] = useState("");
  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const visiblePosts = filterPosts(posts, query, activeTopic.tags);

  return (
    <>
      <section className="border-b border-gray-800 bg-zg-dark-0/40">
        <div className="mx-auto w-full max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-20 lg:py-24">
          <h1 className="mx-auto max-w-2xl text-heading-2-bold text-white sm:text-display-1-bold">
            Designing products, systems, and the agents behind them.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-body-1 text-gray-400">
            Field notes on shipping better products, designing useful developer tools, and building AI systems people can actually use.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mb-8 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <p className="text-microcopy-1 text-zg-teal">LATEST WRITING</p>
            <h2 className="mt-2 text-heading-3-bold text-white">Read the latest.</h2>
            <p className="mt-3 text-body-2 text-gray-400">
              Practical lessons from design decisions, production systems, and the work behind what ships.
            </p>
          </div>
          <label className="relative mt-6 block w-full max-w-md lg:mt-0">
            <span className="sr-only">Search articles</span>
            <svg className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.75" />
              <path d="m16 16 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.75" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-xl border border-gray-700 bg-zg-dark-0 py-3 pl-11 pr-4 text-body-2 text-white placeholder:text-gray-500 transition-colors focus:border-zg-teal focus:outline-none"
            />
          </label>
        </div>

        <fieldset className="relative mb-9 flex gap-2 overflow-x-auto border-y border-gray-800 py-3 pr-8">
          <legend className="sr-only">Filter articles by topic</legend>
          {topics.map((topic) => {
            const isActive = activeTopic.label === topic.label;

            return (
              <button
                key={topic.label}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveTopic(topic)}
                className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-microcopy-2 transition-colors ${isActive ? "border-zg-teal bg-zg-teal text-zg-dark-1" : "border-gray-700 text-gray-400 hover:border-zg-teal/50 hover:text-white"}`}
              >
                {topic.label}
              </button>
            );
          })}
        </fieldset>

        {visiblePosts.length ? (
          <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
            {visiblePosts.map((post, index) => <PostCard key={post.slug} post={post} featured={index === 0} />)}
          </div>
        ) : (
          <div className="border-y border-gray-800 py-14 text-center">
            <h3 className="text-heading-5-semibold text-white">No articles found</h3>
            <p className="mt-2 text-body-2 text-gray-400">Try a different search or choose another topic.</p>
          </div>
        )}
      </section>
    </>
  );
}
