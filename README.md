# Personal Site

An Astro-based personal site built with MDX + Tailwind, with:

- Personal section: About and Resume
- Projects section: repo-centered project writeups
- Blog section: posts in one or more categories (`fiction`, `engineering`, `philosophy`, `personal`)

## Tech Stack

- Astro
- MDX (`@astrojs/mdx`)
- Tailwind CSS (v4 via `@tailwindcss/vite`)
- Font Awesome (free solid + brands)

## Commands

Run from the repository root.

- `npm install`: install dependencies
- `npm run dev`: start local dev server
- `npm run build`: build static site to `dist`
- `npm run preview`: preview production build locally

## Content Model

Collections are defined in `src/content/config.ts`.

### `personal`

- `title`: string
- `description`: string (optional)

Entries:

- `src/content/personal/about.mdx`
- `src/content/personal/resume.mdx`

### `projects`

- `title`: string
- `description`: string
- `publishDate`: date
- `repoUrl`: valid URL
- `tags`: string[]
- `featured`: boolean

### `blog`

- `title`: string
- `description`: string
- `pubDate`: date
- `updatedDate`: date (optional)
- `categories`: one or more of:
	- `fiction`
	- `engineering`
	- `philosophy`
	- `personal`
- `draft`: boolean

Posts can belong to multiple categories and will appear in each corresponding category roll.

## Routes

- `/`: home
- `/about`: personal bio
- `/resume`: resume content
- `/projects`: projects index
- `/projects/[slug]`: project detail
- `/blog`: blog index with category links
- `/blog/[slug]`: post detail
- `/blog/category/[category]`: posts filtered by category

## Adding Content

1. Add a new project MDX file under `src/content/projects/`.
2. Add a new blog post MDX file under `src/content/blog/`.
3. For blog posts, set `categories` to one or more allowed values.
4. Rebuild with `npm run build` to verify schema and route generation.

## Scope Note

This iteration focuses on local scaffold and content architecture. Azure Static Web Apps provisioning and CI deployment workflow files are intentionally deferred.
