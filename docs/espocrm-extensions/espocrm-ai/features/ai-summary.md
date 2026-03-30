# AI Record Summary

The AI Record Summary panel generates an intelligent summary of any CRM record. The summary is generated once and cached — so it loads instantly on future visits without repeated API calls.

## Enable AI Summary on an Entity

1. Navigate to **Administration** → **Entity Manager** → select your entity type.
2. In the **Panels** section, enable the **AI Summary** panel.
3. Save.

The AI Summary panel will now appear on the record detail view sidebar for that entity type.

## Viewing a Summary

1. Open a record.
2. Find the **AI Summary** panel in the sidebar.
3. The summary is generated automatically on first view.

   ![AI Summary panel](../../../_static/images/espocrm-extensions/ai/features/img_22.png)

The panel shows:

- The AI-generated summary text
- The AI model used
- Total token count

## Regenerating a Summary

If the record has been updated and you need a fresh summary:

1. Click the **Regenerate** button in the Summary panel.
2. The AI will generate a new summary using the latest record data.
3. The new summary replaces the cached version.

   ![Regenerate button](../../../_static/images/espocrm-extensions/ai/features/img_23.png)

!!! tip

    Regenerate after significant updates to the record to keep the summary accurate.

!!! note

    Regenerating will consume AI tokens. The cached summary is kept until you explicitly regenerate.
