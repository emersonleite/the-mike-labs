import { defineCollection, z } from 'astro:content';

const navigation = defineCollection({
  type: 'data',
  schema: z.object({
    items: z.array(
      z.object({
        label: z.string(),
        href: z.string().url().or(z.string().startsWith('#')),
      })
    ),
  }),
});

export const collections = {
  navigation,
};
