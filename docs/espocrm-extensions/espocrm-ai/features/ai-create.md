# AI Create from List View

The AI Create feature lets you create new CRM records by describing what you want in plain language. Instead of filling in each field manually, you describe the record and the AI suggests appropriate values, which you can then review before the create form opens.

## Enabling AI Create for an Entity

1. Navigate to **Administration** -> **AI Providers** (or AI Settings).
2. Locate the **AI Create Scopes** field.
3. Select the entity types for which you want to show the **Create with AI** button.
4. Save.

Once configured, the **Create with AI** button appears in the list view header for each selected entity.

## Creating a Record with AI

1. Navigate to the list view of an entity that has AI Create enabled.
2. Click **Create with AI** in the list view header.
3. A modal opens with a description field.
4. Describe the record you want to create in natural language.

!!! example

    "A new contact named Sarah Johnson, senior buyer at Acme Corp in New York, interested in our enterprise plan. Met at the trade show last week."

5. Click **Generate**.
6. The AI analyzes the entity's available fields and suggests values based on your description.
7. A preview of the suggested field values is displayed.
8. Review the suggested values. You can proceed or go back to adjust your description.
9. Click **Continue** to open the standard EspoCRM create/edit form pre-filled with the AI-generated values.
10. Make any final adjustments and click **Save**.

## Notes

- The AI only suggests values for fields that exist on the entity. It will not invent field names.
- The preview step lets you see exactly what will be pre-filled before any record is created.
- Nothing is saved automatically — the final save always goes through the standard EspoCRM create form.
- The quality of suggestions improves with more specific descriptions.

!!! note

    If the AI does not fill a field you expected, try including that information more explicitly in your description and generate again.
