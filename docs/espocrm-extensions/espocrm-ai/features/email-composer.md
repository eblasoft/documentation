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
| AI Reply | ↩ Reply (blue) | Draft a reply to the current email body |
| AI Polish | 💎 Gem (orange) | Improve writing quality of your draft |
| AI Grammar | ✓ Spell-check (green) | Fix grammar and spelling errors |
| AI Tone | 🎭 Masks (red) | Change the tone of your draft |

   ![AI Toolbar](../../../_static/images/espocrm-extensions/ai/features/img_26.png)

## AI Draft

Use this when you want to write an email from scratch.

1. Click the **AI Draft** button (✨ wand icon).
2. A dialog will appear asking: *"What should the email be about?"*
3. Enter a short description of your email.
4. Click **Generate**.
5. The AI will write the full email body for you.

   ![AI Draft dialog](../../../_static/images/espocrm-extensions/ai/features/img_27.png)

## AI Reply

Use this to draft a reply based on the email you received.

1. Click the **AI Reply** button (↩ reply icon).
2. The AI will analyze the current email content and generate a reply.
3. The reply is inserted above the quoted thread.

## AI Polish

Improves the clarity, flow, and professionalism of your draft.

1. Type your draft in the email body.
2. Click the **AI Polish** button (💎 gem icon).
3. The AI will rewrite your draft with improved phrasing and structure.

## AI Grammar

Fixes grammar, spelling, and punctuation errors in your draft.

1. Type your draft in the email body.
2. Click the **AI Grammar** button (✓ spell-check icon).
3. The AI will correct all errors while preserving your original style and meaning.

## AI Tone

Changes the tone of your draft to match a specific communication style.

1. Type your draft in the email body.
2. Click the **AI Tone** dropdown (🎭 masks icon).
3. Select one of the available tones:

   - **Formal** — Proper, structured language
   - **Casual** — Relaxed, conversational
   - **Friendly** — Warm and approachable
   - **Professional** — Clear, direct, business-appropriate
   - **Empathetic** — Understanding and compassionate
   - **Urgent** — Action-oriented, conveys importance
   - **Concise** — Minimal, to-the-point

   ![Tone dropdown](../../../_static/images/espocrm-extensions/ai/features/img_28.png)

!!! important

    **Polish**, **Grammar**, and **Tone** only process your typed draft — they do not modify the quoted reply thread below your message. The quoted thread is preserved and re-appended automatically.

!!! tip

    The AI writes in your CRM system language or your user language preference by default.
