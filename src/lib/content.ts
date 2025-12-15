import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const workDirectory = path.join(process.cwd(), 'src/content/work');

export interface ProjectMetrics {
  label: string;
  value: string | number;
  unit?: string;
  type: 'count' | 'percentage' | 'multiplier' | 'speed' | 'rating' | 'qualitative' | 'testimonial';
}

export interface ProjectFrontMatter {
  title: string;
  slug: string;
  client: string;
  year: number;
  featured: boolean;
  order: number;
  excerpt: string;
  category: string;
  tags: string[];
  heroImage: string;
  images: string[];
  beforeImage?: string;
  metrics: ProjectMetrics[];
  colors: {
    primary: string;
    accent: string;
  };
  technologies: string[];
  roles: string[];
  location?: string;
  status?: string;
  links?: {
    [key: string]: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface Project {
  slug: string;
  frontMatter: ProjectFrontMatter;
  content: string;
}

/**
 * Get all work/case study slugs
 */
export function getWorkSlugs(): string[] {
  const fileNames = fs.readdirSync(workDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

/**
 * Get all work/case studies
 */
export function getAllWork(): Project[] {
  const fileNames = fs.readdirSync(workDirectory);
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(workDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontMatter: data as ProjectFrontMatter,
        content,
      };
    });

  // Sort by order field
  return allProjects.sort((a, b) => a.frontMatter.order - b.frontMatter.order);
}

/**
 * Get a single work/case study by slug
 */
export function getWorkBySlug(slug: string): Project | undefined {
  const fullPath = path.join(workDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontMatter: data as ProjectFrontMatter,
    content,
  };
}

/**
 * Get only featured work/case studies
 */
export function getFeaturedWork(): Project[] {
  return getAllWork().filter((project) => project.frontMatter.featured);
}

/**
 * Get work by category
 */
export function getWorkByCategory(category: string): Project[] {
  return getAllWork().filter((project) => project.frontMatter.category === category);
}

/**
 * Get work by tag
 */
export function getWorkByTag(tag: string): Project[] {
  return getAllWork().filter((project) => project.frontMatter.tags.includes(tag));
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const allWork = getAllWork();
  const categories = allWork.map((project) => project.frontMatter.category);
  return Array.from(new Set(categories)).sort();
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const allWork = getAllWork();
  const tags = allWork.flatMap((project) => project.frontMatter.tags);
  return Array.from(new Set(tags)).sort();
}
