import BlogIndex from "@/components/BlogIndex";
import { FadeIn } from "@/components/FadeIn";
import JsonLd, { createBreadcrumbSchema } from "@/components/JsonLd";
import { getAllPosts } from "@/lib/content";

export const metadata = {
  title: "Blog | Zachary Guerrero",
  description: "Thoughts on design, development, and building better products.",
};

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

  const posts = getAllPosts();

  return (
    <>
      <JsonLd data={blogPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <FadeIn>
        <BlogIndex posts={posts} />
      </FadeIn>
    </>
  );
}
