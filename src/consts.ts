import type { CategoryInfo, Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "thehmars",
  DESCRIPTION: "The independent news and culture hub for the Hmar community.",
  EMAIL: "contact@thehmars.com",
  NUM_POSTS_ON_HOMEPAGE: 12,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "The independent news and culture hub for the Hmar community and Northeast India.",
};

export const BLOG: Metadata = {
  TITLE: "Archive",
  DESCRIPTION: "Chronological record of all news reports and curated insights.",
};

export const RULES: Metadata = {
  TITLE: "Rules",
  DESCRIPTION: "Principles I live by.",
};

export const CATEGORY_INFO: Record<string, CategoryInfo> = {
  International: {
    slug: "international",
    summary: "Global Affairs",
    description: "International reports, geopolitics, and stories from across the globe.",
  },
  National: {
    slug: "national",
    summary: "Country Desk",
    description: "India-wide updates, national policy changes, and regional developments.",
  },
  Local: {
    slug: "local",
    summary: "Northeast India",
    description: "Breaking news and stories from Assam, Nagaland, Mizoram, and the region.",
  },
};

export const MAJOR_TAGS = [
  "Politics",
  "Sports",
  "Business",
  "Tech",
  "Science",
  "Culture",
  "Health"
] as const;

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/thehmars",
  },
  {
    NAME: "Instagram",
    HREF: "https://instagram.com/thehmars.news",
  },
  {
    NAME: "Facebook",
    HREF: "https://facebook.com/thehmars.news",
  },
  {
    NAME: "X",
    HREF: "https://x.com/thehmars.news",
  },
  {
    NAME: "YouTube",
    HREF: "https://youtube.com/@thehmars.news",
  },
  {
    NAME: "Email",
    HREF: "mailto:daiopch54@gmail.com",
  },
];

export const REGIONS = [
  "Arunachal Pradesh",
  "Assam",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Sikkim",
  "Tripura"
];
