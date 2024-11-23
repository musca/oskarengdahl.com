import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const now = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { now };
