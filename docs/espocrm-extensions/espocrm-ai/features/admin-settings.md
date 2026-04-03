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

    Global AI Instructions are combined with the system prompt defined on each individual AI Profile. Profile-specific instructions take precedence where they conflict.

## Token Limit Period

The **Token Limit Period** (`aiTokenLimitPeriod`) controls the rolling window used when enforcing per-user token usage limits. Available options:

- **Daily** — resets at midnight each day
- **Weekly** — resets at the start of each week
- **Monthly** — resets at the start of each month

This works together with the token limit value set on AI Profiles to prevent excessive usage.

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

## AI Create Scopes

The **AI Create Scopes** field (`aiCreateScopes`) is a multi-select list of entity types. Any entity selected here will display a **Create with AI** button in its list view header.

To configure:

1. Navigate to **Administration** -> **AI Providers**.
2. Locate the **AI Create Scopes** field.
3. Select the entity types you want to enable.
4. Save.

See [AI Create from List View](ai-create.md) for details on how this feature works.
