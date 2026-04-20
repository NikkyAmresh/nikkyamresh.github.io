import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    stack: z.array(z.string()),
    status: z.enum(['shipped', 'active', 'archived']),
    featured: z.boolean().default(false),
    order: z.number(),
    links: z
      .object({
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
        marketplace: z.string().url().optional(),
        openvsx: z.string().url().optional(),
      })
      .default({}),
    cover: z
      .object({
        src: z.string().optional(),
        placeholder: z.string().optional(),
      })
      .default({}),
    date: z.date().optional(),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
