---
icon: material/file-document-edit-outline
title: Documentation Style & Formatting Guidelines
description: Shared style, formatting, tone, and structural rules for Eblasoft EspoCRM extension docs.
---

# Documentation Guidelines

This document defines the shared writing style, formatting standards, and structural patterns used across all Eblasoft EspoCRM extension docs. It complements the higher‑level workflow in `contributing.md`.

Use the following three extensions as canonical reference models:
- Public Form (`espocrm-extensions/public-form/index.md`)
- AI (`espocrm-extensions/espocrm-ai/index.md` + its feature subpages)
- Link Multiple Pro (`espocrm-extensions/link-multiple-pro/index.md`)

---
## 1. Tone & Voice

Principles:
- Clear, direct, helpful
- Avoid marketing fluff beyond a concise value statement
- Prefer active voice: “Enable file uploads by…” not “File uploads can be enabled by…”
- Short paragraphs (1–4 lines)
- Use lists for multi-step or multi-item concepts

Avoid:
- Overusing exclamation marks
- Subjective claims without context (e.g. “This is the best way”)

---
## 2. Headings & Structure

Rules:
- Exactly one `H1` (`#`) per page – the page title
- Subsequent levels: `##`, `###`; avoid going deeper than `####`
- Title case only for the H1, sentence case for section headers is acceptable; keep consistent within a page

Extension main page order (recommended):
1. Title (H1)
2. Overview
3. (Optional) Media (video, hero image)
4. Features (links or bullets)
5. Use Cases / Scenarios (optional)
6. Installation / Setup (if not trivial)
7. Configuration
8. Usage / Walkthrough
9. Advanced / Integrations (optional)
10. Security / Limitations / Compatibility
11. Changelog container
12. Support & Feedback / Contact

---
## 3. Front Matter Metadata

When needed (main extension landing pages):
```
---
status: featured
icon: material/link-box-variant
title: Espocrm | Link Multiple Pro Documentation
description: Concise 1-sentence summary (< ~140 chars)
---
```

Do not duplicate front matter across minor feature subpages unless necessary.

---
## 4. Feature Pages (Large Extensions)

For complex extensions (e.g. AI), create subpages under `features/` or `providers/`.
Each subpage should:
- Start with a `#` heading naming the feature
- Provide a focused scope (don’t restate full extension intro)
- Include minimal prerequisites if required
- End with optional “See also” links to related features

---
## 5. Admonitions

Use sparingly to highlight important context.

Recommended mapping:
- `!!! note` – clarifications, neutral info
- `!!! tip` – optimization / shortcuts
- `!!! warning` – risky configuration, data impact
- `!!! danger` – security or irreversible actions

Bad practice: stacking >2 admonitions without prose between them.

---
## 6. Media & Images

Placement:
- Place immediately after the concept they illustrate
- Centering is unnecessary unless readability suffers

Filenames:
- Kebab case: `form-op.png`, `select-layout.png`
- No spaces or uppercase

Paths:
```
../../_static/images/espocrm-extensions/<extension-slug>/<image-file>
```

Sizing:
- Avoid embedding hi‑res full screen if a cropped area suffices
- Use `<img ... style="width:300px;" />` only when scaling down is essential

Accessibility:
- Always provide alt text

---
## 7. Code Blocks

Rules:
- Always use language fences when possible: ` ```php`, ` ```bash`, ` ```nginx` etc.
- Keep examples minimal but copy‑paste ready
- Title important examples with an info label:
````markdown
``` title="Example: Nginx Rule"
location /ebla-form {
  try_files $uri $uri/ /ebla-form/index.php?$args;
}
```
````

Inline code for single identifiers: ``entityManager``, ``allowEblaFormUpload``.

---
## 8. Lists & Formatting

- Use numbered lists for sequences (installation steps)
- Use bullets for unordered conceptual lists (features)
- Use `<br>` only when breaking inside a list item for a second paragraph that must stay grouped
- Avoid deeply nested lists (>2 levels)

---
## 9. Links

- Prefer descriptive link text: `[Read the many-to-many guide](https://...)`
- Relative links for internal docs: `../features/ai-profiles.md`
- External links only when they add value (official references, product pages)
- Avoid repeating the same external link multiple times on the same page

---
## 10. SEO & Readability

- First 160 characters (front matter description + first paragraph) should succinctly describe value
- Use keywords naturally (EspoCRM, extension name, feature category)
- Avoid keyword stuffing

---
## 11. Consistency Rules

| Item | Preferred | Avoid |
|------|-----------|-------|
| Product name | EspoCRM | Espo CRM / ESPOCRM |
| Company | Eblasoft | Ebla Soft / EblaSoft |
| Extension naming | Public Form | Public form / public Form |
| Field names | bold or code | ALL CAPS |

---
## 12. Changelog Integration

Where supported add:
```
<div class="change-log-wrapper" data-id="<ID>"></div>
```
Under a `## Changelog` heading. Reuse the same `data-id` as in the version anchor near the top.

---
## 13. Common Sections Templates

### Configuration Table (Optional)
Use bullet list if only a few options, e.g.:
```
- **allowEblaFormUpload**: (default: `false`) Enables file uploads.
- **eblaFormClientPath**: Relative path to root (default: `../../`).
```

### Use Cases
Short, benefit-driven statements supported by context.

### Security / Limitations
Describe constraints transparently, e.g. why a field isn’t supported (Public Form’s link field explanation).

---
## 14. Quality Bar Before PR

The page should:
- Render without broken images
- Contain no obvious spelling mistakes
- Respect heading hierarchy
- Avoid redundancy with existing feature pages
- Provide at least one real screenshot if describing UI behavior

---
## 15. Anti-Patterns

| Anti-pattern | Better Approach |
|--------------|-----------------|
| Dumping 12 screenshots sequentially | Interleave explanation + images |
| Embedding raw JSON configs without context | Add a short intro + highlight key fields |
| Using future tense everywhere | Prefer present tense ("The extension adds…") |
| Linking to marketing pages repeatedly | Link once near top |

---
## 16. Example Micro Patterns

Inline setting: ``allowEblaFormUpload``  
Menu path: **Administration** → **Entity Manager** → **{Entity Type}** → **Fields**  
Emphasis levels: UI labels in bold, code/config in backticks.

---
## 17. When to Split a Page

Split when:
- Section > ~120 lines and can stand alone
- Distinct audience or lifecycle (e.g. provider setup vs user feature usage)
- Repeated deep anchors make navigation noisy

Don’t split purely for word count if the flow reads better combined.

---
## 18. Future Improvements (Meta)
(You may suggest in PRs):
- Add automated broken link check
- Introduce spell checking CI
- Establish image compression pipeline

---
## 19. Questions
If unclear, open an issue tagged `question` or reference an example page that shows the desired pattern.

---
## 20. Summary
Consistent docs reduce support friction and improve adoption. Follow this guide alongside the contribution workflow to keep quality high.

