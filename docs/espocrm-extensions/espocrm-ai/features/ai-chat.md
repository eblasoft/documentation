# AI Chat Panel

The AI Chat Panel provides an interactive assistant directly on any entity detail view. You can ask questions in natural language and the AI will respond with access to your CRM data, making it possible to query records, count results, and explore relationships without leaving the page.

## Enabling AI Chat for an Entity

To show the AI Chat panel on a specific entity:

1. Navigate to **Administration** -> **Entity Manager** -> select the entity.
2. Ensure the entity has `aiChat` enabled in its scope configuration.

!!! note

    This is typically configured by your administrator or during extension setup. Once enabled, the panel appears automatically on the entity's detail view.

## Using the AI Chat Panel

1. Open any record detail view for an entity that has AI Chat enabled.
2. Locate the **AI Chat** panel on the side of the record.
3. Type your message in the input field at the bottom of the panel.
4. Press **Send** or hit Enter to submit your message.
5. The AI will respond below your message, using live CRM data where relevant.

### Context Awareness

When you open the AI Chat panel on a record, the AI automatically knows:

- The current entity type (e.g. Contact, Lead, Account)
- The record ID
- The record name

You do not need to tell the AI which record you are looking at — it already has that context.

### Multi-Turn Conversations

The AI Chat panel maintains full conversation history across multiple messages. You can ask follow-up questions and the AI will remember what was said earlier in the same conversation.

Conversation history is stored per user per record and persists across page refreshes. When you return to a record, the previous conversation is automatically loaded.

### Clearing the Conversation

Click the **Clear** (trash) button in the panel header to remove all messages from the current conversation. This cannot be undone.

## What the AI Can Access

The AI has read access to your CRM data and can answer questions such as:

- "How many open opportunities does this account have?"
- "What was the last activity on this contact?"
- "List the related cases for this record."
- "How many leads came from the Web Site source this month?"

The level of data access is controlled by the **Tool Tier** setting on the AI Profile assigned to the entity. A tier of `read` or higher is required for the AI to query records.

### Available Tools

The AI can use the following data tools internally to answer your questions:

| Tool | Description |
|------|-------------|
| `record__count` | Count records matching a filter |
| `record__findOne` | Find a single record by filter |
| `record__findMany` | Find multiple records by filter |
| `record__attribute` | Read a specific field value from a record |
| `record__fetch` | Fetch a full record by ID |
| `record__findRelatedOne` | Find one related record |
| `record__findRelatedMany` | Find multiple related records |
| `entity__attribute` | Read entity-level metadata |
| `entity__countRelated` | Count related records |
| `metadata__entityFields` | Inspect entity field definitions |
| `metadata__scopes` | Inspect available entity types |

!!! important

    The AI uses these tools automatically based on your question. You do not need to reference them directly.

## Configuration Notes

- The AI Profile assigned to the entity determines the model, temperature, and tool access level.
- Conversation history is stored as JSON files on the server under `data/ebla-ai/conversations/`.
- History is scoped per user per record — different users have separate conversation threads for the same record.
