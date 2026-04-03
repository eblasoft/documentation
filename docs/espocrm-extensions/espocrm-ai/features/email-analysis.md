# Email Analysis Panel

The Email Analysis Panel provides an AI-powered analysis of an email thread directly on the Email detail view. It breaks down the conversation into structured sections to help you quickly understand the situation and decide on next steps.

## Using the Email Analysis Panel

1. Open any Email record detail view.
2. Locate the **AI Analysis** panel on the side of the record.
3. Click the **Analyze** button in the panel header.
4. The AI will process the full email thread and return a structured analysis.

## Analysis Sections

The panel displays the analysis in the following sections:

**Summary**
A concise overview of the email thread, including the main topic and the parties involved.

**Key Insights**
Important observations extracted from the thread, such as deadlines mentioned, commitments made, or open questions.

**Suggested Actions**
A set of recommended next steps displayed as icon cards. Each action card includes a colored icon that indicates the action type (e.g. reply, follow up, escalate, schedule meeting). Click an action card to use it as a starting point for your response.

**Sentiment**
An assessment of the overall tone and sentiment of the thread (e.g. positive, neutral, concerned, urgent).

## Notes

- The analysis covers the full email thread, not just the most recent message.
- Each click of the **Analyze** button generates a fresh analysis by calling the AI.
- Analysis results are not cached — running it again may produce slightly different results depending on the model's temperature setting.

!!! important

    Make sure the AI Profile assigned to the Email entity has sufficient context defined to produce accurate analysis for your use case.
