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

## Setting Per-User Monthly Token Limits

Each user account has an **AI Monthly Token Limit** field that controls how many tokens they are allowed to consume in a calendar month.

### How to Set a Limit

1. Navigate to **Administration** → **Users**.
2. Open the user record you want to configure.
3. Locate the **AI Monthly Token Limit** field.
4. Enter the maximum number of tokens allowed per month (e.g. `100000`).
5. Save.

!!! tip

    Set the limit to `0` to grant unlimited token usage for that user. This is the default for all users.

### How Limits Are Enforced

- At the start of each AI API request, the system calculates the user's total token consumption for the current calendar month.
- If the user's monthly total meets or exceeds their configured limit, the request is rejected with a **403 Forbidden** error and no AI call is made.
- The rejection applies to all AI endpoints: chat, summary, smart paste, field generation, email analysis, image analysis, and all others.

!!! note

    Administrators are never blocked by monthly token limits, regardless of the value set on their account.

### Limit Reference

| AI Monthly Token Limit value | Behaviour |
|------------------------------|-----------|
| `0` | Unlimited — no restriction applied |
| Any positive integer | User is blocked once monthly usage reaches this number |

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
