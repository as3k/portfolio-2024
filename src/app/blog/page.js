"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import JsonLd, { createBreadcrumbSchema } from "@/components/JsonLd";

export default function BlogPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zacharyguerrero.com" },
    { name: "Blog", url: "https://zacharyguerrero.com/blog" },
  ]);

  const blogPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://zacharyguerrero.com/blog",
    name: "Blog | Zachary Guerrero",
    description: "Thoughts on design, development, and building better products.",
    url: "https://zacharyguerrero.com/blog",
  };

  // TODO: Replace with actual blog posts from MDX files
  const posts = [];

  return (
    <>
      <JsonLd data={blogPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="container my-16 lg:my-24">
        <FadeIn>
          <div className="mb-12">
            <h1 className="text-heading-2-bold lg:text-heading-1-bold mb-4">Blog</h1>
            <p className="text-body-2 text-gray-400 max-w-2xl">
              Thoughts on design, development, and building better products.
            </p>
          </div>
        </FadeIn>

        {posts.length === 0 ? (
          <FadeIn delay={0.1}>
            <div className="max-w-2xl mx-auto text-center py-24">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-zg-dark-0 mb-6">
                  <svg
                    className="w-10 h-10 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <h2 className="text-heading-4-bold text-white mb-3">
                  Nothing here yet
                </h2>
                <p className="text-body-1 text-gray-400 mb-2">
                  I'm building this section the same way I build products—testing the idea first.
                </p>
                <p className="text-body-2 text-gray-500">
                  (Translation: I'm working on it. Check back soon.)
                </p>
              </div>
              <div className="pt-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-body-1-semibold text-zg-teal hover:text-zg-coral transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  View my work instead
                </Link>
              </div>
            </div>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog post cards will go here */}
          </div>
        )}
      </div>
    </>
  );
}
