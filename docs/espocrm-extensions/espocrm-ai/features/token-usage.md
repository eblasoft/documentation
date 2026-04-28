# Token Usage Statistics

Ebla AI automatically tracks token consumption for every AI request, giving administrators full visibility into how AI resources are being used across the system — broken down by user, per day.

## Overview

Every time a user triggers an AI action (chat, summary, smart paste, field generation, email analysis, etc.), the extension records:

- **Input tokens** — tokens sent to the AI model (prompt)
- **Output tokens** — tokens returned by the AI model (response)
- **Total tokens** — combined input + output
- **Request count** — number of AI calls made

Usage is aggregated into daily buckets: one `AiTokenUsage` record per user per day. This keeps the data compact and easy to query over time.

Token counting is automatic — no configuration is needed to enable it.

!!! note

    Token data is also stored on each individual `AiLog` record, so you can trace token consumption back to a specific AI call. See [AI Log relationship](#ai-log-relationship) below.

## Viewing Token Usage

1. Navigate to **Administration** → **AI Token Usage**.
2. The list view shows all daily usage records, including the user, date, input tokens, output tokens, total tokens, and request count.
3. Use the search/filter bar to narrow results by user or date range.

## Setting a System-Wide Default Token Limit

You can set a system-wide default token limit that applies to all users who do not have a personal override:

1. Navigate to **Administration** → **AI Providers** → **Token Limits** tab.
2. Set the **Default Token Limit** field (e.g. `50000`).
3. Set the **Token Limit Period** (Daily, Weekly, or Monthly).
4. Save.

Setting **Default Token Limit** to `0` means no system-wide limit is applied (existing per-user limits still apply).

## Setting Per-User Token Limit Overrides

Each user account has an **AI Monthly Token Limit** field that overrides the system default for that specific user.

### How to Set a Per-User Limit

1. Navigate to **Administration** → **Users**.
2. Open the user record you want to configure.
3. Locate the **AI Monthly Token Limit** field (in the AI panel).
4. Enter the maximum number of tokens allowed for the period (e.g. `100000`).
5. Save.

!!! tip

    Set the per-user limit to `0` to fall back to the system default. If the system default is also `0`, the user is unlimited.

### How Limits Are Enforced

- At the start of each AI API request, the system calculates the user's token consumption for the current period.
- If the total meets or exceeds the effective limit, the request is rejected with a **403 Forbidden** error and no AI call is made.
- The rejection applies to all AI endpoints: chat, summary, smart paste, field generation, email analysis, image analysis, and all others.

!!! note

    Administrators are never blocked by token limits, regardless of the values set.

### Limit Resolution Order

| User limit | System default | Result |
|------------|---------------|--------|
| > 0 | any | User's own limit applies |
| `0` | > 0 | System default applies |
| `0` | `0` | Unlimited |

## Token Usage Dashlets

Two built-in dashboard dashlets give you a live view of token consumption without navigating to the admin panel.

### My AI Token Usage (all users)

Displays your own token usage for the current period as a progress bar with colour coding:

- **Green** — under 70% of the limit used
- **Yellow** — 70–90% used
- **Red** — 90%+ used (approaching or at limit)

Also shows raw numbers (used / limit) and the total request count for the period.

**To add:**

1. Go to your **Home** dashboard.
2. Click **Add Dashlet**.
3. Select **My AI Token Usage**.

### AI Token Usage — All Users (admin only)

Displays a table of all users with their token usage for the current period, sorted by highest usage. Each row includes a progress bar.

**To add:**

1. Go to your **Home** dashboard (admin account).
2. Click **Add Dashlet**.
3. Select **AI Token Usage — All Users**.

!!! note

    This dashlet is only available to administrators. Non-admin users will not see it in the dashlet list.

Both dashlets support the **Refresh** action to reload data without a page reload.

## AI Log Relationship

Each `AiLog` record (one per individual AI call) stores a `tokenUsageId` field that references the corresponding daily `AiTokenUsage` aggregate record. This means you can:

- View the exact token cost of any single AI operation from the AI Log list.
- Trace a daily total back to the individual calls that contributed to it.

!!! note

    The fields on `AiLog` are `inputTokens`, `outputTokens`, and `totalToken`. The daily aggregate on `AiTokenUsage` rolls these up across all calls made by the same user on the same date.

## Data Model Reference

| Entity | Key Fields | Description |
|--------|------------|-------------|
| `AiTokenUsage` | `date`, `inputTokens`, `outputTokens`, `totalTokens`, `requestCount`, `createdBy` | One record per user per day — the daily aggregate |
| `AiLog` | `inputTokens`, `outputTokens`, `totalToken`, `tokenUsageId` | One record per AI call — links to the daily aggregate |

## Related Features

- [Access Control](access-control.md) — control which users and roles can access AI features
- [AI Profiles](ai-profiles.md) — configure AI providers and models
