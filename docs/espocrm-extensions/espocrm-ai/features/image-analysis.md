# Image & Attachment Analysis

Analyze images and attachments directly inside EspoCRM using AI vision capabilities. The AI can describe image content, extract visible text, identify objects and colors, and answer specific questions about an attachment — all without leaving the record view.

## Overview

The Image & Attachment Analysis feature (also referred to as **AI Vision**) works on two types of fields:

- **Image fields** — a single uploaded image attached to a record.
- **Attachment Multiple fields** — one or more files attached to a record.

When vision analysis is available on a field, an **Analyze** button appears in the UI. Clicking it opens the Attachment Analysis modal where you can optionally provide a prompt and receive an AI-generated response about the file.

## Access Control

!!! info

    Users must have the **AiVision** scope enabled in their Role to use this feature. By default, regular and portal users do not have access.

To grant access:

1. Navigate to **Administration** → **Roles** → select the relevant role.
2. In the **Scope** section, find **AiVision** and set it to **Enabled**.
3. Save.

## Supported File Types

| Format | MIME Type         |
|--------|-------------------|
| JPEG   | `image/jpeg`      |
| PNG    | `image/png`       |
| GIF    | `image/gif`       |
| WebP   | `image/webp`      |

!!! note

    The maximum supported file size is **10 MB**. Files exceeding this limit cannot be analyzed.

## Compatible AI Providers

Vision analysis requires an AI provider that supports image input. The following providers and models are supported:

| Provider  | Supported Models              |
|-----------|-------------------------------|
| OpenAI    | GPT-4V, GPT-4o                |
| Anthropic | Claude 3.x (all variants)     |
| Google    | Gemini (vision-capable models)|

!!! warning

    If the configured AI profile uses a provider or model that does not support vision, the analysis will return an error. Make sure the selected AI profile is backed by a vision-capable model.

## Using Image Analysis

### On Image Fields

In **detail** or **edit** mode, image fields with vision enabled display a camera / analyze button overlaid on the image thumbnail.

1. Open a record containing an image field.
2. Click the **Analyze** button (camera icon) on the image.
3. The Attachment Analysis modal opens.
4. Optionally enter a custom prompt (e.g., *"Does this document contain a signature?"*).
5. Click **Analyze**.
6. The AI result appears in the modal. Click **Copy** to copy the response to the clipboard.

### On Attachment Multiple Fields

In **detail** mode, each individual file listed in an attachment-multiple field gets its own **Analyze** button.

1. Open a record containing an attachment-multiple field.
2. Find the attachment you want to analyze in the list.
3. Click the **Analyze** button next to that attachment.
4. Follow steps 3–6 from the image field workflow above.

!!! tip

    You can analyze each attachment independently. Use different prompts per attachment to ask targeted questions about each file.

## The Attachment Analysis Modal

The modal provides:

- A **prompt input** — optional; leave blank to use the default prompt.
- An **Analyze** button — sends the request to the AI.
- A **result area** — displays the AI response after analysis.
- A **Copy** button — copies the AI response to the clipboard.

### Default Prompt

If no prompt is entered, the following prompt is used automatically:

> Analyze this image and describe what you see in detail. Include any text, objects, colors, and notable details.

!!! tip

    Provide a specific prompt to get more focused answers. For example: *"List all line items and totals visible in this invoice."* or *"What language is this document written in?"*

## Formula Function

Image analysis can be triggered programmatically in **Workflows** and **BPM processes** using the following formula function:

**Format:** `eblaAi\analyzeImage(attachmentId, prompt, profileId)`

| Parameter      | Type   | Required | Description                                                                 |
|----------------|--------|----------|-----------------------------------------------------------------------------|
| `attachmentId` | string | Yes      | The ID of the attachment to analyze.                                        |
| `prompt`       | string | No       | A custom prompt. Uses the default description prompt if omitted or empty.   |
| `profileId`    | string | No       | ID of the AI Profile to use. Uses the system default if omitted.            |

**Returns:** The AI-generated analysis as a string. On failure, returns a string starting with `"Error:"`.

!!! example

    ```
    $attachmentId = contractScanId;
    $prompt = 'Extract the contract start date and end date from this document.';

    $result = eblaAi\analyzeImage($attachmentId, $prompt);

    if (string\startsWith($result, 'Error:')) {
        description = 'Analysis failed';
    } else {
        description = $result;
    }
    ```

!!! tip

    Because errors are returned as plain strings starting with `"Error:"`, you can safely use `string\startsWith($result, 'Error:')` to branch your formula logic on failure without throwing exceptions.

## Error Handling

| Situation                              | Error Message Returned                                      |
|----------------------------------------|-------------------------------------------------------------|
| File type not supported                | `Error: Unsupported file type for vision analysis.`         |
| AI provider does not support vision    | `Error: The selected AI provider does not support vision.`  |
| Attachment not found                   | `Error: Attachment not found.`                              |

All errors are returned as plain strings, making them safe to handle in both the UI and formula contexts.

## Limitations

- Only **image** files can be analyzed. PDF, Word, Excel, and other non-image attachment types are not supported.
- Files larger than **10 MB** will not be processed.
- Analysis quality depends on image resolution and the capabilities of the configured AI model.
- GIF files are analyzed as a still image (first frame); animated content is not processed frame-by-frame.

## Troubleshooting

### Analyze Button Not Visible

**Cause:** The user's role does not have the **AiVision** scope enabled.

**Solution:** Grant **AiVision** scope access in **Administration** → **Roles** → select role → Scope section.

### Error: Unsupported File Type

**Cause:** The attachment is not a JPEG, PNG, GIF, or WebP image.

**Solution:** Convert the file to a supported format before uploading, or use a different AI feature (such as Smart Paste) for text-based documents.

### Error: Provider Does Not Support Vision

**Cause:** The AI profile in use is backed by a text-only model.

**Solution:** Switch to an AI profile that uses a vision-capable model (e.g., GPT-4o, Claude 3 Opus, or Gemini).

### Analysis Result Is Inaccurate or Incomplete

**Cause:** Low image quality, complex layout, or a vague prompt.

**Solution:**
- Use a higher-resolution image.
- Provide a specific, targeted prompt instead of relying on the default.
- Try a different AI profile with a more capable vision model.

## Related Features

- [Formula Functions](formula.md) — Use AI operations in workflows and BPM.
- [Field Text Generation](field-text-generation.md) — Generate text for any field using AI.
- [AI Profiles](ai-profiles.md) — Configure which AI provider and model is used.
- [Access Control](access-control.md) — Manage user permissions for AI features.
