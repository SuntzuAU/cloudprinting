import { defineCollection, z } from 'astro:content';

const learn = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    type: z.enum(['article', 'guide', 'video', 'tip']).default('article'),
    youtubeId: z.string().optional(),
    context: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    heroPrompt: z.string().optional(),
    breakImage1: z.string().optional(),
    breakImage1Alt: z.string().optional(),
    breakPrompt1: z.string().optional(),
    breakImage2: z.string().optional(),
    breakImage2Alt: z.string().optional(),
    breakPrompt2: z.string().optional(),
    internalLinks: z.array(z.object({
      to: z.string(),
      anchor: z.string()
    })).optional(),
    externalLinks: z.array(z.object({
      to: z.string(),
      anchor: z.string(),
      url: z.string()
    })).optional()
  })
});

export const collections = { learn };
