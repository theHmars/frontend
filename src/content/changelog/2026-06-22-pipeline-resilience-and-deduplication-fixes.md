---
date: 2026-06-22
title: "v0.0.2: Pipeline Resilience & Duplicate Resolution"
type: "Minor"
---

This update introduces critical stability fixes to the automated crawling, deduplication, and production pipelines, and resolves content duplication issues.

### Content & Deduplication
- **Duplicate Clean Up:** Inspected and removed 13 duplicate markdown posts from the news archive to maintain high editorial quality.
- **Improved Deduplication Sorting:** Updated the deduplication agent logic to sort posts alphabetically before checking historical content.
- **Log Persistence:** Updated `.gitignore` to track url logs in `data/1/3` across scopes to persist crawled URL histories across workflows.

### Workflow & Pipeline Optimization
- **Actions Execution Order:** Reordered GitHub workflows to checkout the website repository before running the curation engine, ensuring deduplication runs against accurate live state.
- **Production Limiter:** Modified the writer agent with a `--limit` option to allow controlled production targets (e.g. 1 article limit).
- **Preflight Tooling Fixes:** Added automatic start-time reset to prevent timeouts on delayed runs and resolved missing `assembler.py` file copy errors.
