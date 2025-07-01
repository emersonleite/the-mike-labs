import { z, defineCollection } from 'astro:content';

export const collections = {
  config: defineCollection({
    type: 'data',
    schema: z.discriminatedUnion('id', [
      z.object({
        id: z.literal('site-colors'),
        primary: z.string(),
        secondary: z.string(),
        highlight: z.string().optional(),
        background: z.string().optional(),
      }),
      z.object({
        id: z.literal('nav-menu'),
        items: z.array(
          z.object({
            label: z.string(),
            href: z.string(),
          })
        ),
      }),
    ]),
  }),
};
