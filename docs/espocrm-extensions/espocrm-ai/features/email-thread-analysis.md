# Email Thread Analysis

The Email Thread Analysis panel appears on every email detail view and automatically analyzes the full email thread — delivering a summary, action items, a suggested reply, and recommended CRM actions without any manual trigger.

## How It Works

When you open an email detail view, the AI Analysis panel loads automatically in the background. The analysis is cached server-side, so repeat views of the same thread are instant and consume no additional AI tokens.

To **re-analyze** after a new reply arrives in the thread, click the **↻ refresh** button in the panel header.

## Analysis Sections

### Summary

A concise markdown overview of the full email conversation — what was discussed, key decisions, and current status.

### Action Items

A list of tasks identified in the thread, including who they are assigned to and any deadlines mentioned.

### Suggested Reply

A draft reply generated based on the thread context, ready to use or edit.

#### Use Reply

Click **Use Reply** to open the compose modal pre-filled with the suggested reply. You can edit it before sending.

#### Copy

Click **Copy** to copy the suggested reply text to your clipboard.

!!! tip

    The suggested reply is a starting point. Always review and personalize it before sending.

### Suggested CRM Actions

2–4 recommended CRM actions based on the email content — for example, scheduling a follow-up meeting, creating a task, or posting a note to the activity stream. Click any card or its action button to execute it immediately.

| Action type | What happens |
|-------------|-------------|
| **Create** | Opens a pre-filled quick-create modal for the suggested entity |
| **Edit** | Opens the existing record for editing with pre-filled attributes |
| **Post Note** | Posts a note directly to the email's activity stream |

## Thread Stats

The analysis covers the full thread:

- **Parents** — emails this message was replying to (walked back to the root)
- **Replies** — emails that came after the current one (walked forward)

!!! note

    Up to 20 emails in either direction are included to keep the analysis fast and focused.

## Caching

Analysis results are cached by content hash. Opening the same email again returns the cached result immediately — no AI call is made and no tokens are consumed. The cache respects the global **Response Cache TTL** setting (Administration → AI Providers → Response Cache).
