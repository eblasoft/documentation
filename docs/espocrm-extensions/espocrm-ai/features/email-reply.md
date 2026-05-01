# Email Reply

AI Reply helps users generate a reply draft inside the email composer.

The current reply flow is simpler than older documentation versions: there is no profile selector and no prompt-selection modal in the normal reply UI.

## Requirements

Users need:

- `Ai` access
- `AiEmailComposer` access
- A configured default AI provider

## Using AI Reply

1. Open an email.
2. Click **Reply**.
3. In the composer, click **AI Reply**.
4. Ebla AI generates a reply from the current email body and sender context.
5. Review the inserted text.
6. Edit if needed and send the email normally.

![Email Reply Toolbar](../../../_static/images/espocrm-extensions/ai/features/email-composer-toolbar.png)

## Current Behavior

The generated reply is inserted above the quoted thread.

This is important because:

- The original message stays visible
- The user can edit the AI reply before sending
- The quoted thread remains intact

## When to Use AI Draft Instead

If you need more control, use **AI Draft** instead of **AI Reply**.

AI Draft is better when you want to:

- Give a custom instruction
- Choose tone explicitly
- Choose target length
- Create a reply from a short brief instead of directly from the thread

## Undo

AI reply generation participates in the composer undo stack.

That means:

- The previous body is stored before the reply is inserted
- You can undo the change during the current editing session

## Related Features

- [Email Composer AI Toolbar](email-composer.md)
- [Email Analysis Panel](email-analysis.md)
