---
icon: material/source-branch
title: Contributing to the Documentation
description: How to contribute new or improved documentation for Eblasoft EspoCRM extensions.
---

# Contribution Guide

Thank you for your interest in improving our documentation. Clear, consistent docs help users evaluate, install, and succeed with Eblasoft extensions.

This guide explains the end‑to‑end workflow for adding or updating documentation and how to keep style, structure, and navigation consistent.

---
## 1. Quick Start Checklist

1. Fork the repo on GitHub (or create a feature branch if you have write access).
2. Create a branch: `git checkout -b docs/<extension-or-topic>` (examples below).
3. Copy the template: `docs/espocrm-extensions/_template/index.md` → new folder.
4. Write or update content (follow the structure & style rules below).
5. Add images to: `docs/_static/images/espocrm-extensions/<extension-name>/`.
6. Optimize images (lossless, keep width reasonable; prefer PNG/SVG for UI, JPG for photos).
7. Update navigation in `mkdocs.yml` (keep alphabetical grouping + existing patterns).
8. Build / preview locally (optional but recommended): `mkdocs serve`.
9. Run self‑review using the Quality Checklist (section below).
10. Commit & open a Pull Request (PR) with a clear summary.

---
## 2. Branch Naming

Use one of these patterns:
- New extension docs: `docs/<extension-slug>` e.g. `docs/calendar-sync`
- Update existing: `docs/update-<extension-slug>`
- Generic improvement: `docs/improve-images` or `docs/typos`
- Issue based: `docs/123-add-ai-examples`

---
## 3. File & Directory Structure

Each extension lives under: `docs/espocrm-extensions/<extension-slug>/`

Common files (only create what you need):
- `index.md` (always) – overview landing page
- `features/<feature>.md` – optional, for large extensions (see AI example)
- `providers/<provider>.md` – optional, for integration/provider setup guides
- Extra topic pages directly under the extension folder if few in number

Images: `docs/_static/images/espocrm-extensions/<extension-slug>/`

Do NOT place images inside `site/` (that folder is a build artifact).

---
## 4. Front Matter Conventions

Use YAML front matter at the top of main pages when you need metadata:

```
---
status: featured        # optional: featured | new | deprecated
icon: material/web      # any Material icon (see material design icons)
title: Espocrm | Ebla Public Form Documentation
description: Short sentence (max ~140 chars) used for SEO & social cards.
---
```

Fields:
- `status` – surfaces badges (see `mkdocs.yml` extra.status map)
- `icon` – shows icon in some Material features
- `title` – aim for: `Espocrm | <Extension Name> Documentation`
- `description` – single sentence, active voice

If a page doesn’t need metadata, you may omit front matter (example: some feature pages).

---
## 5. Standard Section Order (Main Extension Page)

Recommended layout for `index.md`:

1. H1: Extension Name (+ optional external link anchor with `data-id` for changelog integration)
2. Overview (succinct value proposition, 2–4 sentences)
3. (Optional) Extension video (YouTube iframe) or hero screenshot
4. Key Features (bullet list or links to deeper feature pages)
5. Use Cases (if adds clarity)
6. Installation / Setup (if required – keep minimal; link to feature/provider pages if detailed)
7. Configuration (settings, environment variables, Espo config snippets)
8. Usage / How It Works (screenshots, short guided steps)
9. Security / Limitations / Compatibility notes (as admonitions: note, warning, info)
10. Additional Sections (Integration notes, Performance tips, etc.)
11. Change Log (dynamic container `<div class="change-log-wrapper" data-id="...">`)
12. Support & Feedback

Use the Public Form, AI, and Link Multiple Pro docs as “gold” examples.

---
## 6. Admonition Usage

Use thoughtfully — don’t over-saturate.

| Type | Purpose | Example |
|------|---------|---------|
| `!!! note` | Helpful neutral info | Clarify requirements |
| `!!! tip` | Productivity or optimization | Faster setup hints |
| `!!! warning` | Risk or data loss | Breaking config changes |
| `!!! danger` | Severe risk | Security exposure |

Inside admonitions keep paragraphs short. Avoid nesting lists more than one level deep.

---
## 7. Images & Media

- File naming: `feature-short-name.png` (kebab-case)
- Prefer consistent UI zoom level
- Crop to essential UI area
- Avoid embedding extremely large raw screenshots
- Use Markdown syntax or `<img>` if custom sizing needed
- Provide alt text (accessibility)

Example:
```
![Additional List Layouts](../../_static/images/espocrm-extensions/link-multiple-pro/add-layout.png)
```

---
## 8. Code & Configuration Blocks

Always specify language when possible (for highlighting):

````markdown
```php
'clientXFrameOptionsHeaderDisabled' => true,
```
````

Use titled blocks for clarity when helpful:
````markdown
``` title="Example URL Pre-fill"
https://your-crm.com/ebla-form/xxxxxxxx?website=example.com
```
````

---
## 9. Linking & Cross References

- Use relative links: `../../_static/images/...`
- Link to sibling feature pages with relative paths
- External links: always add `target="_blank"` only when embedding anchors in raw HTML
- Avoid bare URLs; wrap in descriptive link text

---
## 10. Version / Changelog Integration

Where supported, add an anchor tag after the H1 with attributes:
```
# Extension Name <a href="https://www.eblasoft.com.tr/espocrm-extension-page/<slug>" target="_blank" id="ext-version" data-id="<ID>"></a>
```
`data-id` is used by the injected JS (`change-log-wrapper`) to dynamically load changelog content.

Changelog container:
```
## Changelog <a ... same anchor ...></a>
<div class="change-log-wrapper" data-id="<ID>"></div>
```

Reuse the same `<ID>`.

---
## 11. Commit Message Style

Follow a lightweight conventional style:
- `docs: add <extension> initial documentation`
- `docs(<extension>): update configuration section`
- `docs: fix typos in public form guide`

Multiple related small fixes can be squashed before merging.

---
## 12. Pull Request Requirements

A PR is ready when:
- [ ] Follows directory & naming rules
- [ ] Navigation updated in `mkdocs.yml`
- [ ] No broken relative links
- [ ] Images load locally
- [ ] Front matter present where needed
- [ ] Headings start at H1 only once per page
- [ ] No trailing whitespace / obvious lint issues
- [ ] Spell check done (spot check proper nouns)
- [ ] Changelog container added (if extension supports it)

---
## 13. Review Guidelines (For Maintainers)

Reviewers should check:
- Clarity: Would a new user understand what this extension does quickly?
- Accuracy: Do screenshots match described UI?
- Consistency: Follows style (terminology, heading levels, formatting)
- Scope: PR stays focused
- Security or sensitive info not accidentally exposed (API keys, internal URLs)

Suggest edits via GitHub suggestions where possible.

---
## 14. Code of Conduct (Docs-Specific)

Be respectful. Prefer constructive phrasing. Disagreements are fine; hostility is not. Content must not include personal data or internal-only information.

---
## 15. FAQ

**Q: Do I have to add front matter to every page?**  
No, only main landing pages and where metadata is useful.

**Q: Can I embed large GIFs?**  
Avoid unless essential. Prefer static annotated images or short video links.

**Q: How do I test locally?**  
Install: `pip install mkdocs-material` then run `mkdocs serve`.

---
## 16. Need Help?
Open a GitHub issue with the label `documentation` or start a draft PR early for feedback.

Thanks again for contributing — your improvements help the whole community.

