---
date: 2026-06-22
title: "v0.0.3: Facebook Cleanup & Path Refactoring"
type: "Minor"
---

This update introduces automated Facebook sharing cleanup utilities, fixes Graph API deprecations, aligns auto-share paths, and consolidates the core pipeline documentation.

### 📲 Facebook Sharing & Ledgers
- **Automated Cleaner Tool:** Introduced [clean_fb.py](file:///home/phxlm/Work/websites/theHmars/theHmars/scripts/clean_fb.py) to recursively match active website articles, clean up orphaned records in local JSON ledgers (`shared.json`, `pending_shares.json`, `articles.json`), and automatically delete matching posts from the Facebook Page feed and schedule queue.
- **Graph API Deprecation Fix:** Resolved `deprecate_post_aggregated_fields_for_attachement` errors by querying the Graph API's `attachments` nested fields instead of the deprecated `link` parameter.

### ️ Auto-Share Refactoring
- **Partitioned News Paths:** Aligned [facebook_publisher.py](file:///home/phxlm/Work/websites/theHmars/theHmars/scripts/facebook_publisher.py) and [scrape_news.py](file:///home/phxlm/Work/websites/theHmars/theHmars/scripts/scrape_news.py) to read and write articles dynamically from the new partitioned directory structures (`src/content/news/[scope]/`) instead of the deprecated `src/content/blog/` path.
- **Trigger Alignment:** Updated `.github/workflows/facebook_share.yml` to trigger deployments and staggered sharing workflows on changes under `src/content/news/**`.

### 📚 Documentation & Orchestrator Sync
- **Engine Doc Consolidation:** Moved detailed phase design guides (`phase_1.md` through `phase_5.md`) and `ARCHITECTURE.md` to the core `infra` engine repository under `docs/` and integrated links in the engine's main README.
- **Worker Scope Isolation:** Rewrote `SOURCES.md` in each worker repository (`theHmars-local`, `theHmars-national`, `theHmars-global`) to exclusively document feed registries belonging to that worker's active geographic tier.
- **Run Schedule Exposure:** Documented the central pipeline orchestrator cron run schedule (executing daily at `05:53`, `13:53`, and `21:53` IST) in both the website and engine README files.
