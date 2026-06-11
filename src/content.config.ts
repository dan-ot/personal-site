import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCategories = ['fiction', 'engineering', 'philosophy', 'personal'] as const;

const personal = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/personal' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional()
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    repoUrl: z.string().url(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false)
  })
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    categories: z.array(z.enum(blogCategories)).min(1),
    draft: z.boolean().default(false)
  })
});

export const BLOG_CATEGORIES = blogCategories;
export const collections = { personal, projects, blog };
