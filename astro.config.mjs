import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
// NOTE: @astrojs/sitemap 3.2 has a known incompat with Astro 4.16 (reduce-of-undefined
// in astro:build:done). Will re-enable in Phase 3 polish once the upstream fix lands
// or we bump versions.
export default defineConfig({
  site: 'https://nikkyamresh.github.io',
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
