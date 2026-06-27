import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "src/content/news" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    category: z.preprocess((val) => val === "Global" ? "International" : val, z.enum(["International", "National", "Local", "Editorial"])).default("Local"),
    region: z.enum([
      "Arunachal Pradesh",
      "Assam",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Sikkim",
      "Tripura",
      "Northeast",
      "N/A"
    ]).optional(),
    majorTag: z.enum(["Politics", "Sports", "Business", "Tech", "Science", "Culture", "Health", "Education", "Weather", "Entertainment", "Environment", "Celebrity", "Uncategorized"]).default("Uncategorized"),
    score: z.number().min(0).max(10).optional(),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
    imageCollections: z.array(z.object({
      title: z.string().optional(),
      images: z.array(z.string()),
      ratio: z.enum(["square", "landscape", "portrait", "wide", "auto"]).optional().default("portrait")
    })).optional(),
    toc: z.boolean().optional().default(false),
    featured: z.boolean().optional().default(false),
    type: z.enum(["post", "course"]).default("post"),
    language: z.enum(["en", "hmar", "mizo"]).default("en"),
    tags: z.array(z.string()).optional(),
    redacted: z.boolean().optional(),
    private: z.boolean().optional(),
    is_locked: z.boolean().default(false),
    isAgentGenerated: z.boolean().optional().default(false),
    isVerified: z.boolean().optional().default(true),
  }),
});

const changelog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "src/content/changelog" }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string().optional(),
    type: z.enum(["Major", "Minor", "Content", "Technical"]).default("Technical"),
  }),
});

export const collections = { blog, changelog };
