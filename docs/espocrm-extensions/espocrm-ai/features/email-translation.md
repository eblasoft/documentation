# Email Translation

Translate emails instantly into your preferred language using AI-powered translation. This feature helps users communicate effectively across language barriers by providing accurate translations with a single click.


## Overview

The Email Translation feature allows users to translate incoming or existing emails into their preferred language. The translation respects the user's language settings and can be customized using AI profiles for specialized translation contexts (e.g., technical documentation, formal correspondence).


## Translating an Email

### From Email Detail View

1. Open the email you want to translate.
2. Click the **Translate** button in the detail view header.

   ![Translate Button](../../../_static/images/espocrm-extensions/ai/features/email-translate-button.png)

3. Wait for the AI to process the translation (a notification will appear).
4. Review the translated content in the popup modal.
5. Click **Copy** to copy the translation to your clipboard, or **Cancel** to close.

   ![Translation Modal](../../../_static/images/espocrm-extensions/ai/features/email-translate-modal.png)


### From Email Side Panel (Quick Detail)

When viewing an email in a side panel or quick detail view:

1. Click the **Translate** button in the side panel header.
2. The translation modal will appear with the translated content.
3. Copy the translation as needed.


### From Compose View Side Panel

While composing an email, you can translate a received email for reference:

1. Open the email in the side panel while in compose mode.
2. Click the **Translate** button.
3. Use the translation to inform your reply.


## Translation Behavior

### Target Language

The translation automatically uses:

1. **User's language preference** (from user preferences settings) if set, OR
2. **System default language** (from Administration > Settings) as fallback

This ensures each user receives translations in their own language without additional configuration.


### Translation Context

By default, the AI uses a professional translation context:

- Maintains formal tone and accuracy
- Preserves the original meaning and intent
- Keeps technical terms appropriate
- Avoids unnecessary conversational phrases


### Custom AI Profiles

You can configure a custom AI profile for translations to handle specific scenarios:

- **Technical documentation**: Use specialized terminology
- **Legal correspondence**: Maintain formal language
- **Marketing content**: Preserve persuasive tone
- **Multilingual support teams**: Consistent terminology


## Configuration

### Enable Email Translation

1. Navigate to **Administration** → **Settings** → **AI Settings** section.
2. Ensure **Default AI Provider** is configured (OpenAI, Gemini, Anthropic, Ollama, or OpenRouter).
3. Enable the **Enable Email Translate** option.

   ![Enable Email Translation](../../../_static/images/espocrm-extensions/ai/features/email-translate-config.png)

4. Save the settings.


### Custom Translation Profile (Optional)

To use a specialized AI profile for translations:

1. Create an AI Profile with translation-specific context:
   - Navigate to **AI Profiles** (in AI admin panel)
   - Create a new profile with appropriate context, for example:
     ```
     You are a professional translator specializing in business communications.
     Translate emails maintaining formal tone and preserving technical terms.
     Ensure accuracy and cultural appropriateness.
     Respond only with the translated text, no explanations.
     ```

2. Set the custom profile in **Administration** → **Settings**:
   - Locate **Custom AI Profile** field
   - Select your translation profile
   - Save

When a custom profile is set, it overrides the default translation context.


### Custom Translation Prompt (Optional)

For advanced control over translation instructions:

1. Create an AI Prompt in **AI Prompts** admin panel.
2. Define your translation instructions with variables:
   ```
   Translate the following email to {targetLanguage}.
   Maintain {tone} tone and preserve formatting.
   
   Email content:
   {emailBody}
   ```

3. Set the prompt in **Administration** → **Settings** → **Custom AI Prompt** field.


## Access Control

### Required Permissions

Users must have:

- **Read** access to Email entity
- **Access** permission to Ai scope (set in Roles)

If a user lacks these permissions, the Translate button will not appear.


### Configuring AI Access

1. Navigate to **Administration** → **Roles** → Select role.
2. In **Scope** section, find **Ai**.
3. Set access level:
   - **Enabled** - Users can access all AI features including translation
   - **Not Set** / **Disabled** - Translation button will be hidden

4. Save the role.


## Use Cases

### Multilingual Support Teams

Support teams working with customers across different regions can:

- Quickly understand customer inquiries in any language
- Provide accurate responses based on clear understanding
- Maintain professional communication quality

### International Business Communications

Sales and account managers dealing with international clients can:

- Read and understand contracts, proposals, and correspondence
- Respond appropriately with cultural awareness
- Build stronger relationships through clear communication

### Executive Email Management

Assistants managing executive inboxes can:

- Screen and prioritize emails regardless of language
- Provide accurate summaries of foreign language correspondence
- Flag urgent communications for immediate attention


## Best Practices

1. **Verify Critical Translations**: For legal or binding communications, always have translations verified by a professional translator.

2. **Context Matters**: Create custom profiles for different types of translations (technical, legal, casual) to improve accuracy.

3. **Review Before Acting**: Always review translations for context and accuracy before basing business decisions on them.

4. **Protect Sensitive Data**: Be aware that email content is sent to the AI provider for translation. Ensure your AI provider's privacy policy aligns with your data handling requirements.


## Limitations

- Translation quality depends on the AI provider and model selected
- Very long emails may be truncated based on the AI model's token limits
- Highly specialized technical or legal terminology may require custom profiles for accuracy
- HTML formatting in emails is preserved but may affect translation accuracy
- Attachments and embedded images are not translated


## Troubleshooting

### Translate Button Not Visible

**Cause**: User lacks required permissions or feature is disabled.

**Solution**:
- Verify **Enable Email Translate** is enabled in Administration → Settings
- Check user role has **Ai** scope access enabled
- Ensure a default AI provider is configured

### Translation Takes Too Long

**Cause**: Large email content or slow API response.

**Solution**:
- Check your internet connection
- Verify AI provider API is responding (test in AI Sandbox)
- Consider increasing timeout settings if using self-hosted Ollama

### Translation Quality Poor

**Cause**: Default context not suitable for content type.

**Solution**:
- Create a custom AI profile with specialized context
- Try a different AI model (some models excel at translation)
- Provide more context in the AI profile instructions

### Error: "AI not enabled"

**Cause**: No default AI provider configured or API key missing.

**Solution**:
- Navigate to Administration → Integrations
- Configure your chosen AI provider (OpenAI, Gemini, etc.)
- Set API key and test connection
- Set as default provider in Settings


## Related Features

- [AI Profiles](ai-profiles.md) - Create specialized translation profiles
- [AI Prompts](ai-prompts.md) - Define custom translation instructions
- [Email Reply](email-reply.md) - Generate AI-powered email responses
- [Provider Setup](../providers/openai-setup.md) - Configure AI providers
