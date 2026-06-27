export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type CategoryInfo = {
  slug: string;
  summary: string;
  description: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type Badge = {
  label: string;
  tone?: "muted" | "solid" | "accent";
};
