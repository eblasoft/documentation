# Email Composer AI Toolbar

The Email Composer AI Toolbar adds AI-powered action buttons directly inside the email compose and reply editor. These buttons help you draft, improve, and refine email content without leaving the composer.

## Requirements

The AI toolbar buttons are visible when:

- The user has **Ai** scope access (set in Roles)
- A default AI provider is configured in Administration

## Toolbar Buttons

| Button | Icon | Action |
|--------|------|--------|
| AI Draft | ✨ Wand (purple) | Generate a full email draft from a short description |
| AI Reply | ↩ Reply (blue) | Instantly generate a reply based on the current email body |
| AI Polish | 💎 Gem (orange) | Improve writing quality of your draft |

## AI Draft

Use this when you want to write an email from scratch.

1. Click the **AI Draft** button (✨ wand icon).
2. A dialog will appear asking: *"What should the email be about?"*
3. Enter a short description of your email.
4. Click **Generate**.
5. The AI will write the full email body for you.

## AI Reply

Generates a reply automatically based on the email content currently in the body — no prompt needed.

1. Click the **AI Reply** button (↩ reply icon).
2. The AI reads the existing email body and generates an appropriate reply immediately.
3. The reply is inserted above the quoted thread.

!!! tip

    Use **AI Reply** when you want a quick first draft. The AI uses the sender information and email content as context — no additional input is required.

## AI Polish

Improves the clarity, flow, and professionalism of your draft.

1. Type your draft in the email body.
2. Click the **AI Polish** button (💎 gem icon).
3. The AI will rewrite your draft with improved phrasing and structure.

!!! important

    **Polish** only processes your typed draft — it does not modify the quoted reply thread below your message. The quoted thread is preserved and re-appended automatically.

!!! tip

    The AI writes in your CRM system language or your user language preference by default.
