import { getAllWork, getAllPosts } from '@/lib/content';

// Use Node.js runtime for file system access
export const runtime = 'nodejs';

/**
 * Generates sitemap for Next.js
 * @returns {Array} Sitemap URL entries
 */
export default function sitemap() {
  const baseUrl = 'https://zacharyguerrero.com';

  // Static pages with their priorities
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/now`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/lets-talk`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Get all case studies/projects
  const work = getAllWork();
  const workPages = work.map((item) => ({
    url: `${baseUrl}/projects/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Get all blog posts (if any exist)
  const posts = getAllPosts();
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.meta.date || new Date()),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Add blog listing page if posts exist
  const blogListingPage = posts.length > 0 ? [{
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }] : [];

  return [...staticPages, ...workPages, ...blogListingPage, ...blogPages];
}
