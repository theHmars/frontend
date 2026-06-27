---
date: 2026-06-13
title: "thehmars: News Portal V1 & Strategic Rebrand"
type: "Major"
---

The project has transitioned from a personal journal to a high-volume, professional news outlet named **thehmars**. This update introduces a hierarchical news architecture, automated content pipelines, and a complete design overhaul.

### 🌿 Rebranding & Identity
- **Identity Shift:** Rebranded from BatchNode to **thehmars**, a news portal dedicated to global and Northeast Indian reporting.
- **Visual Identity:** Deployed a "White & Red" editorial theme.
- **Custom Assets:** Created a new "TH" SVG favicon and social sharing assets.
- **Branding Logic:** Unified all components to use the `the<span class="text-red-600">hmars</span>` branding pattern.

### News Portal Architecture
- **Hierarchical Taxonomy:** Reorganized content into `International`, `National`, `Local`, and `Editorial` categories.
- **Regional Desks:** Implemented a segmented Local news system covering 8 Northeast India states (Manipur, Mizoram, Assam, etc.) with dedicated hubs.
- **Flat Routing:** Optimized SEO by removing the `/blog` prefix; articles now reside at `/[id]` and hubs at `/[category]`.
- **Headline Mosaic:** Deployed a dynamic, non-duplicating grid system for homepage and category hubs.
- **Topic Discovery:** Introduced a new `/topics` system for cross-category reporting.

### Content Intelligence
- **Article Sidebar:** Added a sticky dual-column layout for reports featuring Source Desk identification and Related Content discovery.
- **Dynamic TOC:** Implemented an automatic Table of Contents for long-form news reports.
- **SEO & Schema:** Integrated JSON-LD `NewsArticle` structured data and optimized `robots.txt`.
- **Archive System:** Unified historical records under `/archives` with advanced filtering by category, region, and tag.

### Automation & Backend
- **News Scraper Pipeline:** Migrated 130+ high-quality reports from major outlets (BBC, The Hindu, EastMojo) to seed the portal.
- **GitHub Actions Roadmap:** Laid groundwork for `.github/workflows/scrape.yml` to automate 4x daily updates.
- **Supabase Sync:** Confirmed integration with Supabase Free Tier for supporter tracking and dynamic metadata.
- **Razorpay Live:** Finalized technical configuration for live payment processing.

### 🎨 UI & Design System
- **Editorial Crimson Theme:** Applied a sophisticated red accent system (`#DC2626`) across the interface.
- **UI Symmetry:** Achieved vertical and horizontal symmetry between navigation elements and content feeds.
- **Rounded UI Patterns:** Updated Sub-Header and card components with rounded-pill and ultra-tight alignment styles.
- **Contact Refinement:** Updated the contact system with Formspree AJAX integration and custom success modals.
