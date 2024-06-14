import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: ({ image }) =>
      z.object({
        image: image(),
        imageMobile: image(),
        title: z.string(),
        description: z.string(),
        liveDemo: z.string().optional(),
        githubRepo: z.string().optional(),
      }),
  }),
};
