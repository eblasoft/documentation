# AI Chat Panel

The AI Chat panel allows you to have a real-time conversation with AI about any CRM record. The AI has full context of the current record and can answer questions, help analyze data, and assist with tasks — all without leaving the record view.

## Enable AI Chat on an Entity

1. Navigate to **Administration** → **Entity Manager** → select your entity type.
2. In the **Panels** section, enable the **AI Chat** panel.
3. Save.

The AI Chat panel will now appear on the record detail view sidebar for that entity type.

## Starting a Conversation

1. Open a record (Contact, Lead, Opportunity, etc.).
2. Find the **AI Chat** panel in the sidebar.
3. Type your message in the input box at the bottom.
4. Press **Enter** or click the **Send** button.

   ![AI Chat panel](../../../_static/images/espocrm-extensions/ai/features/img_20.png)

The AI will respond with context-aware answers based on the current record's data.

!!! tip

    You can ask questions like:
    - "Summarize this contact's recent activity"
    - "What is the next best action for this lead?"
    - "Draft a follow-up email based on this deal"

## Conversation History

Conversations are saved per user per record. When you return to the same record, the previous conversation is loaded automatically, allowing you to continue where you left off.

![Conversation history](../../../_static/images/espocrm-extensions/ai/features/img_21.png)

## Copying a Message

Click the **copy** icon on any AI response to copy the text to your clipboard.

## Clearing the Conversation

1. Click the **Clear** button at the top of the chat panel.
2. A confirmation dialog will appear — click **Clear** to confirm.

!!! important

    Clearing the conversation is permanent. All previous messages for this record will be deleted.

## Selecting an AI Profile

If multiple AI profiles are configured, you can select which profile to use for the conversation. The selected profile controls the AI model, tone, and behavior.

1. Click the **profile selector** at the top of the chat panel.
2. Select the desired profile from the list.

!!! note

    If no profile is selected, the system default AI profile is used.
