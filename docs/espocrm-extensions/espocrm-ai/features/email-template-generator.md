# AI Email Template Generator

Generate ready-to-use email templates from a plain-language description. The AI Email Template Generator writes both the subject line and the full body of a template in one step, automatically inserting the correct `{placeholders}` for the entity type you choose.

## Where to Find It

The feature lives inside the **Email Template** edit form.

1. Navigate to **Administration** → **Email Templates**.
2. Click **Create Email Template**, or open an existing template and click **Edit**.
3. A **Generate with AI** button appears in the form header.

## How It Works

1. Click **Generate with AI** in the Email Template edit form header.
2. A modal dialog opens with three fields:
   - **Entity Type** — choose the entity the template is for (e.g. Contact, Lead, Account, Opportunity).
   - **Description** — describe what the template should do in plain language.
   - **Profile** *(optional)* — select a specific AI profile to use for generation.
3. Fill in the entity type and description, then click **Generate**.
4. The AI produces a subject line and a full email body.
5. Both fields are filled automatically into the Email Template form — the **Subject** and **Body** fields are populated instantly.
6. Review the result, make any manual adjustments, and save the template.

!!! tip

    Be specific in your description to get better results. Instead of "Welcome email", try "Welcome email for a new Contact after their first purchase, mentioning their name and our support contact details."

## Understanding Placeholders

EspoCRM email templates use `{placeholders}` — tokens that are replaced with real record values when the template is sent. For example, `{name}` becomes the contact's full name, `{emailAddress}` becomes their email address, and `{account.name}` becomes the name of their linked account.

The AI automatically knows all available placeholders for the entity type you select. It reads the field definitions for that entity and uses the correct placeholder syntax throughout the generated subject and body. You do not need to look up or type placeholders manually.

!!! note

    Placeholder availability depends on the selected **Entity Type**. Switching entity types in the modal changes which placeholders the AI can use. Always select the entity type that matches how the template will be used in EspoCRM (e.g. select **Contact** for templates used in Contact mass emails).

## HTML vs. Plain-Text Templates

The generator respects the template's **Is HTML** setting:

- **HTML templates** — the AI produces a rich HTML body suitable for the WYSIWYG editor.
- **Plain-text templates** — the AI produces clean, unformatted text without HTML markup.

The setting is read from the template form before the request is sent, so no extra configuration is needed.

## Body Field AI Toolbar

In addition to the Generate with AI button, the Body field has its own AI toolbar for refining the generated (or manually written) content after generation:

| Button | Action |
|--------|--------|
| **Improve** | Rewrites the body for better clarity and professionalism |
| **Grammar** | Fixes grammar and spelling errors without changing meaning |
| **Shorter** | Condenses the body while preserving the key message |

- On **HTML templates** the toolbar appears inside the WYSIWYG toolbar strip.
- On **plain-text templates** the toolbar appears above the textarea.

!!! tip

    Use **Generate with AI** first to get a complete draft, then use the toolbar buttons to fine-tune tone or length without starting over.

## Requirements

- The user must have access to the **AiEmailComposer** scope (configured in **Administration** → **Roles**).
- At least one AI provider must be configured in Administration.

## Related Features

- [Email Composer AI Toolbar](email-composer.md) — AI actions inside the email compose and reply window
- [AI Email Reply](email-reply.md) — Generate and refine replies to incoming emails
- [AI Profiles](ai-profiles.md) — Configure and manage AI profiles used for generation
- [AI Prompt Templates](ai-prompts.md) — Reusable prompt building blocks for AI actions
