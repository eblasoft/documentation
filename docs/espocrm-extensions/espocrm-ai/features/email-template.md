# Email Template Generation

Ebla AI can generate complete email templates from a plain-language description. Instead of writing the template manually, you describe what you want and the AI produces the name, subject line, and full HTML body with EspoCRM placeholders already inserted.

## Generating an Email Template with AI

1. Navigate to **Email Templates** in the navigation menu.
2. Click **Create with AI** in the list view header.
3. The AI generation modal opens.

### Modal Options

Fill in the following fields:

- **Description** — Describe the purpose and content of the email template. Be specific about the tone, audience, and what the email should accomplish.
- **Entity Type** — Select the entity this template will be used with (e.g. Contact, Lead, Account). The AI uses this to insert the correct field placeholders.
- **Format** — Choose whether to generate plain text or HTML output.
- **Style** — Select a visual style for the generated HTML:

| Style | Description |
|-------|-------------|
| Plain | No styling, plain text layout |
| Simple | Minimal formatting with basic structure |
| Professional | Clean business layout with header and footer |
| Rich | Detailed layout with sections and visual hierarchy |
| Newsletter | Multi-column newsletter-style layout |

4. Click **Generate**.
5. The AI generates the template name, subject line, and full body.
6. A preview of the generated content is shown in the modal.
7. Click **Continue** to open the standard Email Template create form pre-filled with the AI-generated values.
8. Review and adjust any fields as needed, then click **Save**.

## Tips for Better Results

- Be specific in your description. For example: "A follow-up email sent three days after a demo, addressed to the contact by first name, reminding them of key benefits and including a call to action to schedule a next meeting."
- Specify the tone if it matters: formal, friendly, urgent, etc.
- The AI inserts EspoCRM placeholders (e.g. `{firstName}`, `{accountName}`) based on the entity type you select. Always review the generated placeholders before saving.

!!! note

    The AI-generated template opens in the standard create form, where you can make any adjustments before saving. Nothing is saved automatically.
