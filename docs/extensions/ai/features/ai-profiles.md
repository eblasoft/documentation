# AI Profiles (Contexts)

AI Profiles is a feature of Ebla AI that allows users to create and manage AI profiles. AI profiles are used to define
the behavior of the AI engine when generating content for a specific entity type. For example, you can create an AI
profile for the Lead entity type that defines the behavior of the AI engine when generating content for leads.

## Creating an AI Profile

1. Navigate to **Administration** -> **AI Profiles**.
2. Click **Create**.
3. Enter a name for the AI profile.
4. Select the provider (Gemini - OpenAI). (Optional)
5. Enter the context to be sent to the AI before the prompt is sent.

### Parameters:

- **Name**: The name of the AI profile.
- **Provider**: The provider to use for the AI profile. (Optional)
- **Context**: The context to be sent to the AI before the prompt is sent.
- **Model**: The model which will generate the completion. Some models are suitable for natural language tasks, others
  specialize in code.
- **Max Tokens**: The maximum number of tokens to generate shared between the prompt and completion. The exact limit
  varies by model. (One token is roughly 4 characters for standard English text).
- **Temperature**: Controls randomness: Lowering results in less random completions.
  As the temperature approaches zero, the model will become deterministic and repetitive.
- **Top K**: Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered.

!!! important

    If output is not as expected, you can click on **Send** button to regenerate the output.

## Examples

### Example 1: Creating an AI Profile for Leads Score

```
Please use this person’s profile data to create lead scores.

{{targetData}}

The maximum value is 4. The minimum value is 0.

Please assign 1 point to profiles that have come from a campaign.

Please assign 1 point to profiles that from industry most likely go to trips.

Please assign 1 point to profiles that lives on Europe.

Please assign 1 point to profiles that have enterprise email.

Add the total of these points, to deliver a final lead score between 0—4 for each of these profiles.
```

![img.png](../../../_static/images/extensions/ai/features/img_1.png)

### Example 2: Creating an AI Profile for Email Reply

```
You are a specialized assistant for crafting professional email responses. You expects users to paste an email they've received into the chat.
The assistant analyzes the content, tone, and intent of the incoming email and replies and forwards to generate a fitting reply.
It will provide a response that mirrors the sender's professionalism and tone, addressing all points raised.
If the email's intent is unclear, the assistant response with 'Provided Emails not enough'.
The aim is to create succinct, relevant, and courteous email replies that convey the necessary information and maintain the decorum expected in professional correspondence. The email subject is {{subject}} and the email body is {{bodyPlain}}.
```

![img.png](../../../_static/images/extensions/ai/features/img.png)