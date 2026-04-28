# Admin Settings

Global AI settings are managed from **Administration** -> **AI Providers**. These settings affect all AI features across the extension.

## Global AI Instructions

The **Global AI Instructions** field (`aiSystemInstructions`) lets you define a block of text that is automatically prepended to the system prompt for every AI request, across all features.

Use this to set company-wide rules that should apply to all AI responses, such as:

- Writing language or locale (e.g. "Always respond in formal English.")
- Tone and style guidelines (e.g. "Be concise and professional.")
- Formatting preferences (e.g. "Use bullet points where appropriate.")
- Restrictions (e.g. "Do not make assumptions about pricing.")

!!! note

    Global AI Instructions are combined with the system prompt defined on each individual AI Profile. Both are sent to the AI for every request — global instructions first, then the profile context, then the service-specific prompt.

### Variable Substitution

Global AI Instructions (and AI Profile context fields) support `{varName}` placeholders that are replaced with live values before the message is sent to the AI.

**Always available:**

| Variable | Replaced with |
|----------|---------------|
| `{userName}` | The current user's full name |
| `{userRole}` | `Administrator` or `User` |
| `{companyName}` | The CRM company name (from Settings) |
| `{today}` | Today's date in `YYYY-MM-DD` format |
| `{language}` | The current user's language code |

**Available when chatting on a record:**

| Variable | Replaced with |
|----------|---------------|
| `{entityType}` | The entity type (e.g. `Contact`, `Opportunity`) |
| `{entityName}` | The record's name field value |
| `{entityId}` | The record's ID |

**Example usage:**

```
You are an AI assistant for {companyName}.
You are talking to {userName}, a {userRole}.
Today is {today}. Always respond in a tone appropriate for a {userRole}.
```

Unknown placeholders (e.g. `{nonExistent}`) are left as-is.

## Token Limits

### Default Token Limit

The **Default Token Limit** (`aiDefaultTokenLimit`) sets a system-wide token quota that applies to all users who do not have a personal override. Set to `0` for no global default (unlimited).

### Token Limit Period

The **Token Limit Period** (`aiTokenLimitPeriod`) controls the rolling window used when enforcing token usage limits. Available options:

- **Daily** — resets at midnight each day
- **Weekly** — resets at the start of each week
- **Monthly** — resets at the start of each month

**Resolution order for non-admin users:**

1. User's own **AI Monthly Token Limit** (if > 0) — personal override
2. System **Default Token Limit** (if > 0) — global fallback
3. Both are `0` — unlimited

!!! note

    Administrators are never blocked by token limits, regardless of the values set.

### Max Tool-Call Iterations

The **Max Tool-Call Iterations** (`aiMaxToolIterations`, default `10`, max `50`) limits how many consecutive tool calls the AI Chat assistant can make in a single response. Increase this for complex agentic tasks; lower it to reduce API cost.

!!! tip

    Most conversational queries complete in 1–3 tool calls. Only raise this limit if you use the AI Admin Assistant for complex multi-step CRM changes.

## Response Cache

The response cache avoids redundant AI calls by storing and reusing responses to identical requests.

### Enabling the Cache

1. Navigate to **Administration** -> **AI Providers**.
2. Enable the **Response Cache** toggle (`aiCacheEnabled`).
3. Set the **Cache TTL** in days (`aiCacheTtlDays`). The default is 7 days.
4. Save.

### How Caching Works

When caching is enabled:

- Each request is identified by a SHA-256 hash of the provider, model, system prompt, and user message.
- If an identical request was made recently (within the TTL), the cached response is returned immediately without calling the AI.
- Cache hits are recorded in the AI Log with a `cacheHit` flag and 0 tokens consumed.

### Cache Exclusions

The following requests are never cached:

- Requests that use AI tools (e.g. AI Chat panel with CRM data access)

### Cache Benefits

- Reduces token consumption for repeated or similar requests.
- Speeds up response time for cached queries.
- Particularly useful for AI Summary panels where many users view the same records.

## AI Features

The **AI Features** tab in Administration → AI Providers lets you set the default AI Profile for each individual feature. These override the global default profile for that specific feature only.

| Setting | Feature |
|---------|---------|
| AI Chat Default Profile | AI Chat panel on records |
| AI Summary Default Profile | Record Summary panel |
| AI Email Composer Default Profile | Email reply/compose AI |
| AI Field Action Default Profile | Field text generation |
| AI Smart Paste Default Profile | Smart Paste |
| AI Vision Default Profile | Image analysis |
| AI Email Translate Default Profile | Email translation |
| AI Admin Assistant Default Profile | Admin AI Assistant |

### Enable AI Admin Assistant

The **Enable AI Admin Assistant** toggle (`enableAdminAssistant`, default enabled) controls whether the Admin AI Assistant is available. When disabled, any attempt to open the assistant returns a Forbidden error even for admin users.

## AI Create Scopes

The **AI Create Scopes** field (`aiCreateScopes`) is a multi-select list of entity types. Any entity selected here will display a **Create with AI** button in its list view header.

To configure:

1. Navigate to **Administration** -> **AI Providers**.
2. Locate the **AI Create Scopes** field.
3. Select the entity types you want to enable.
4. Save.

See [AI Create from List View](ai-create.md) for details on how this feature works.
