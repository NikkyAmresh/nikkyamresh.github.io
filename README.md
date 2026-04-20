# nikkyamresh.github.io

Personal portfolio of [Nikky Amresh](https://github.com/NikkyAmresh) — live at
**<https://nikkyamresh.github.io>**.

Built with [Astro](https://astro.build) + [Tailwind](https://tailwindcss.com) + MDX.
Deploys to GitHub Pages on every push to `main` via GitHub Actions.

## Local dev

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static output → ./dist
npm run preview      # preview built output
```

## Structure

```
src/
├── components/    # Astro components (Nav, Hero, ProjectCard, …)
├── content/
│   ├── config.ts  # Content-collection schemas (projects, writing)
│   └── projects/  # MDX case studies for each featured project
├── layouts/       # BaseLayout, CaseStudyLayout
├── lib/site.ts    # Site metadata, nav, socials
├── pages/         # Homepage, /projects/[slug], /writing, /404
└── styles/        # Tailwind + CSS custom properties (theme tokens)
```

## Adding a project

1. Create `src/content/projects/your-slug.mdx` with the standard frontmatter
   (see existing entries for the schema).
2. Set `featured: true` to show it on the homepage grid.
3. Put screenshot assets in `public/assets/projects/` and reference via absolute path.
4. Push to `main`.

## Adding a blog post

1. Create `src/content/writing/your-slug.mdx` with `title`, `description`, `date`.
2. Set `draft: false` when ready.
3. Push.

## The legacy site

The previous static-HTML portfolio lives on the `legacy-2022` branch
(`git checkout legacy-2022`). It was a "Hello World" placeholder from 2022.

## License

Content © Nikky Amresh. Code available under MIT if useful as a reference.
