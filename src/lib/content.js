import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const workDirectory = path.join(process.cwd(), 'src/content/work');
const blogDirectory = path.join(process.cwd(), 'src/content/blog');

/**
 * Get all work (case study) slugs
 * @returns {string[]} Array of slugs
 */
export function getWorkSlugs() {
  if (!fs.existsSync(workDirectory)) return [];
  return fs.readdirSync(workDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

/**
 * Get a single work item by slug
 * @param {string} slug - The slug to look up
 * @returns {{ slug: string, meta: object, content: string } | null}
 */
export function getWorkBySlug(slug) {
  const fullPath = path.join(workDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    meta: data,
    content,
  };
}

/**
 * Get all work items sorted by order
 * @returns {Array<{ slug: string, meta: object, content: string }>}
 */
export function getAllWork() {
  const slugs = getWorkSlugs();
  const work = slugs
    .map((slug) => getWorkBySlug(slug))
    .filter(Boolean)
    .sort((a, b) => (a.meta.order || 0) - (b.meta.order || 0));

  return work;
}

/**
 * Get featured work items
 * @returns {Array<{ slug: string, meta: object, content: string }>}
 */
export function getFeaturedWork() {
  return getAllWork().filter((item) => item.meta.featured);
}

/**
 * Get all blog slugs
 * @returns {string[]} Array of slugs
 */
export function getBlogSlugs() {
  if (!fs.existsSync(blogDirectory)) return [];
  return fs.readdirSync(blogDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

/**
 * Get a single blog post by slug
 * @param {string} slug - The slug to look up
 * @returns {{ slug: string, meta: object, content: string } | null}
 */
export function getBlogBySlug(slug) {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    meta: data,
    content,
  };
}

/**
 * Get all blog posts sorted by date (newest first)
 * @returns {Array<{ slug: string, meta: object, content: string }>}
 */
export function getAllPosts() {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogBySlug(slug))
    .filter(Boolean)
    .sort((a, b) => {
      const dateA = new Date(a.meta.date || 0);
      const dateB = new Date(b.meta.date || 0);
      return dateB - dateA;
    });

  return posts;
}

/**
 * Get all projects for the projects page
 * @returns {Array<{ slug: string, meta: object, content: string }>}
 */
export function getProjectsPageProjects() {
  return getAllWork();
}

/**
 * Get projects by category
 * @param {string} category - The category to filter by
 * @returns {Array<{ slug: string, meta: object, content: string }>}
 */
export function getProjectsByCategory(category) {
  return getAllWork().filter((item) => item.meta.category === category);
}
