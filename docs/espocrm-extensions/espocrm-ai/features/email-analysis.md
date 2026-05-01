# Email Analysis Panel

The Email Analysis panel appears on Email detail views and shows an AI-generated breakdown of the email thread.

## Requirements

Users need:

- `Ai` access
- Read access to Email
- A configured default AI provider

## How It Loads

In the current implementation, the panel loads analysis automatically when the Email detail view is opened.

Current behavior:

- No initial **Analyze** button is required to fetch the first result
- Cached analysis can appear immediately on repeat views
- The panel header includes a refresh button for re-analysis

![Email Analysis Panel](../../../_static/images/espocrm-extensions/ai/features/email-analysis-panel.png)

## Sections Shown in the Panel

The panel currently shows up to four sections:

### Summary

A concise overview of the thread.

### Action Items

Structured action items extracted from the conversation.

### Suggested Reply

A ready-to-edit reply draft with:

- **Use Reply**
- **Copy**

### Suggested Actions

Suggested CRM actions presented as clickable cards, such as:

- Create a related record
- Update a related record
- Post a note to the stream

## What It Analyzes

The analysis is based on the full thread context, not just the currently opened email body.

## Re-analyzing

Use the refresh icon in the panel header when:

- A new reply has arrived
- The thread changed
- You want to regenerate the analysis

## Notes

- The current panel does not expose separate **Sentiment** or **Key Insights** sections
- Cached responses help the panel load faster and avoid unnecessary repeat token usage
- **Use Reply** opens the compose modal with the suggested reply inserted above the original thread

## Related Features

- [Email Thread Analysis](email-thread-analysis.md)
- [Email Reply](email-reply.md)
- [AI Log](ai-log.md)
