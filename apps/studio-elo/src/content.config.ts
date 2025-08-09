import { defineCollection, z } from 'astro:content';

const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});

const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
        photo: z.string(),
        bio: z.string(),
      })
    ),
  }),
});

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    members: z.array(
      z.object({
        name: z.string(),
        photo: z.string(),
        bio: z.string(),
      })
    ),
  }),
});

const scheduleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    schedule: z.array(
      z.object({
        day: z.string(),
        classes: z.array(
          z.object({
            type: z.string(),
            time: z.string(),
            teacher: z.string(),
          })
        ),
      })
    ),
  }),
});

const navigationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    links: z.array(
      z.object({
        href: z.string(),
        label: z.string(),
      })
    ),
  }),
});

export const collections = {
  faqs: faqCollection,
  testimonials: testimonialsCollection,
  team: teamCollection,
  schedule: scheduleCollection,
};
