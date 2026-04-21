# Stream Comment Reply

By using this feature you can generate and refine a stream comment using AI. The AI uses the record context and existing
stream activity to produce relevant, well-written replies.

## Using AI on a Stream Comment

1. Navigate to the record you want to comment on.
2. Click on the **Stream** section and focus the **Write your comment here** textarea.
3. Type your draft text (optional — can also start empty for generation).
4. Click the **bolt icon** dropdown button next to the comment area.

   ![img.png](../../../_static/images/espocrm-extensions/ai/features/img_8.png)

5. Choose an action from the dropdown:

| Action | Description |
|--------|-------------|
| **Undo Last Change** | Restores the previous comment text. Hidden until at least one AI action has been performed. |
| **Improve Writing** | Rewrites the comment for clarity and professionalism. |
| **Fix Grammar** | Corrects grammar and spelling without changing the meaning. |
| **Make Shorter** | Condenses the comment to its essential points. |
| **Make Longer** | Expands the comment with more detail and context. |
| **Translate** | Translates the comment. Shows a single button if one language is configured, or a sub-menu if multiple languages are configured. Hidden if no translation languages are set. |
| **Custom Prompt...** | Opens the AI Generate modal where you can enter a custom instruction or select a predefined prompt. |

6. The comment textarea is updated with the AI result automatically.
7. Click **Post** to submit the final comment.

!!! important

    If the output is not as expected, you can run the action again or use **Custom Prompt...** for more specific instructions.

## Undo

After any AI action, the **Undo Last Change** option becomes visible at the top of the dropdown. Clicking it restores
the comment text to what it was before the last AI action. The undo is session-only and is not persisted.
