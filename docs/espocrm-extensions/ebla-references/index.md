---
icon: fa-hashtag
title: Ebla Reference Numbers
description: Auto-generate unique reference codes and link them across EspoCRM.
---

# Ebla Reference Numbers <a href="https://www.eblasoft.com.tr/espocrm-extension-page/ebla-references" data-id="ebla-references"></a>

> Create custom auto-generated reference numbers for any entity and link them automatically when mentioned.

<!-- DOC:OVERVIEW START -->
The **Ebla Reference Numbers** extension allows you to generate unique, readable reference codes (e.g., `REF-1234`) for any entity in EspoCRM. These codes serve as identifiers that are easier to communicate than standard database IDs.

Beyond generation, the extension integrates these references into the stream. When a reference number is mentioned in a post (e.g., "Regarding #REF-1234"), it is automatically converted into a link to the related record.
<!-- DOC:OVERVIEW END -->

<!-- DOC:USE-CASES START -->
## Use Cases

1. **Support Tickets** – Generate ticket IDs (e.g., `TKT-001`) to easily reference customer issues in emails and chats.
2. **Project Task Codes** – Assign short codes to tasks for quick reference during meetings.
3. **Internal Documents** – Tag documents with unique IDs to cross-reference them in notes and discussions.
4. **Order Tracking** – Create human-readable order numbers for sales processing.
<!-- DOC:USE-CASES END -->

<!-- DOC:FEATURES START -->
## Key Features

- **Custom Reference Field**: Adds a new `NumberPlus` field type to Entity Manager.
- **Flexible Formatting**: Configure prefix, length, and character patterns (Digits, Letters, or Mixed).
- **Auto-Linking**: Automatically detects reference numbers mentioned in Stream posts, converting them to links.
- **Autocomplete**: Type `#` in Stream to search and insert reference numbers.
- **Copy to Clipboard**: One-click copy button next to the reference number in detail views.
<!-- DOC:FEATURES END -->

<!-- DOC:CONFIGURATION START -->
## Configuration

To start using reference numbers, you need to add the special field to an entity layout.

### Adding a Reference Field

1. Go to **Administration** > **Entity Manager**.
2. Select the entity you want to add a reference to (e.g., *Case* or *Task*).
3. Click **Fields** and then **Add Field**.
4. Select **NumberPlus** as the type.
5. Configure the field parameters:
    - **Prefix**: The string to appear before the number (e.g., `ABC-`).
    - **Pad Length**: The number of characters for the random part (e.g., `4` results in `0123`).
    - **Pattern**: Choose the character set for the random part:
        - `0-9` (Digits only)
        - `A-Z` (Letters only)
    - **Copy to clipboard**: Enable to show a copy button next to the field value.
6. Click **Save**.
7. Add the new field to the entity's **Layouts** (Detail and List views).

### Using References

- **Generation**: A unique number is automatically generated when a new record is saved.
- **Mentioning**: In a Stream Post, type `#` followed by the prefix or number to search references.
- **Linking**: Posting a comment containing a reference number will automatically link that post to the referenced record.
- **Viewing Related Posts**: Click on any reference number in the stream (e.g. `[#REF-1234]`) to open a modal showing all stream posts mentioning that reference.
<!-- DOC:CONFIGURATION END -->

---

## Support

If you need help with this extension, please contact Eblasoft Support.

## Changelog

<div class="change-log-wrapper" data-id="ebla-references"></div>
