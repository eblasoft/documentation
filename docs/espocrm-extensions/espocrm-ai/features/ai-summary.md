# AI Summary Panel

The AI Summary Panel displays an AI-generated summary of the current record directly on the detail view. It automatically loads when you open the panel and presents a structured, readable overview of the record's key information.

## Enabling AI Summary for an Entity

To show the AI Summary panel on a specific entity:

1. Navigate to **Administration** -> **Entity Manager** -> select the entity.
2. Ensure the entity has `aiSummary` enabled in its scope configuration.

!!! note

    Once enabled, the panel appears on the entity's detail view and loads automatically without any user action.

## Using the AI Summary Panel

1. Open any record detail view for an entity that has AI Summary enabled.
2. Locate the **AI Summary** panel on the side of the record.
3. The panel loads the most recent cached summary automatically — no button click required.

### Regenerating a Summary

To force a fresh summary:

- Click the **Regenerate** (refresh icon) button in the panel header.
- The AI will re-analyze the record and generate a new summary.
- The panel updates in place once the new summary is ready.

### Summary Footer

Each summary displays a footer showing:

- The AI model that generated the summary
- The date and time the summary was generated

This helps you know how recent the information is and which model produced it.

## Summary Format

Summaries are rendered as formatted markdown, which may include:

- **Bold** highlights for key values
- Tables for structured data
- Bullet lists for multiple items
- Headers to separate sections
- Links where applicable

The exact structure of the summary depends on the AI Profile's system prompt configured for the entity.

## Caching Behavior

Summaries are cached on the backend using AI Log entries. When you open a record:

- If a cached summary exists, it is displayed immediately without calling the AI.
- The summary remains cached until you click **Regenerate**.
- Cached summaries count against your token usage only at generation time, not on repeated views.

!!! note

    Regenerating a summary always calls the AI and consumes tokens, even if the record has not changed.
