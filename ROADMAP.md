# theHmars - Frontend Roadmap & TODO

This repository is strictly the Astro SSG frontend for theHmars news portal. 
It pulls content dynamically at build time from the `content` repository and relies on the `engine` repository for automated news aggregation.

## 📚 Technical Documentation
For all architectural rules, system prompts, and technical specifications regarding this frontend repository, please refer to the overarching workspace audits directory:
`../audits/frontend/`

## 🚀 Upcoming Tasks & Upgrades
*(Add future frontend-specific tasks, UI/UX improvements, or responsive design QA items here)*

- [ ] **Monetization Strategy (Razorpay/Supabase):** Re-implement the Supabase edge functions for Razorpay. Since Razorpay prohibits open "donations", we need to identify a specific digital product, membership tier, or editorial subscription strategy to classify the transactions legally.
- [ ] **Cloudflare Pages Migration & Incremental Builds:** Migrate hosting from Render to Cloudflare Pages to take advantage of unlimited bandwidth and persistent caching. Enable Astro 5.0's "Incremental Builds" so that 15,000+ archived articles remain permanently built for long-tail SEO, while the build process only regenerates the 50 new daily articles in a matter of seconds.
