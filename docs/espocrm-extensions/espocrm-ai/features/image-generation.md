# AI Image Generation

Generate images using AI directly from EspoCRM record fields. The generated image is saved as an Attachment and can be linked to any image or attachment-multiple field.

## Overview

AI Image Generation adds a **Generate with AI** button to image fields and attachment-multiple fields in edit mode. Clicking it opens a modal where you describe the image you want, choose a size, and preview the result before attaching it to the record.

## Access Control

!!! info

    Users must have both the **Ai** and **AiVision** scopes enabled in their Role.

## Supported Providers

| Provider | Model | Output |
|----------|-------|--------|
| OpenAI | DALL-E 3 | 1024x1024 (square), 1792x1024 (landscape), 1024x1792 (portrait) |
| Google Gemini | Imagen 3 | 1:1 (square), 16:9 (landscape), 9:16 (portrait) |

!!! warning

    Anthropic and Ollama do not support image generation. Ensure the selected AI profile uses a supported provider.

## Enabling the Generate Button on a Field

The AI image generation button is **opt-in per field**. It is hidden by default and must be explicitly enabled in Entity Manager.

1. Navigate to **Administration → Entity Manager → {Entity} → Fields → {field}**.
2. Check **Enable AI Image Generation**.
3. Save, then clear the cache.

This works for both **image** and **attachment-multiple** field types.

## Using Image Generation

### On Image Fields

1. Open a record in **edit** mode.
2. Click the **Generate with AI** button on the image field.
3. In the modal, enter a text prompt describing the desired image.
4. Select a size: **Square**, **Landscape**, or **Portrait**.
5. Click **Generate**. A preview of the generated image appears.
6. Click **Use Image** to attach it to the field.

### On Attachment-Multiple Fields

1. Open a record in **edit** mode.
2. Click the **Generate Image** button on the attachment-multiple field.
3. Follow the same prompt, size, and preview flow as above.
4. The generated image is appended to the attachment list.

## The Image Generation Modal

The modal provides:

- A **prompt textarea** for describing the image.
- **Size radio buttons**: Square, Landscape, Portrait.
- A **Generate** button to submit the request.
- An **image preview** area showing the generated result.
- A **Use Image** button to attach the generated image to the record field.

## Formula Function

Image generation can be used in Workflows and BPM via formula:

```
eblaAi\generateImage(PROMPT, SIZE, PROFILE_ID)
```

See [Formula Functions](formula.md#eblaaigenerateimage) for full documentation.

## Related Features

- [Image & Attachment Analysis](image-analysis.md) — Analyze existing images with AI vision.
- [AI Voice Generation](voice-generation.md) — Generate speech audio from text.
- [AI Video Generation](video-generation.md) — Generate short videos from text prompts.
- [Formula Functions](formula.md) — Use AI operations in workflows.
