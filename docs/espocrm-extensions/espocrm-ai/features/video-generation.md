# AI Video Generation

Generate short videos from text prompts using AI. The generated video is saved as an MP4 Attachment that can be previewed and attached to a record.

## Overview

AI Video Generation adds a **Generate Video** button to attachment-multiple fields in edit mode. It opens a modal where you describe the video, choose aspect ratio and duration, and watch the result before attaching it.

## Access Control

!!! info

    Users must have both the **Ai** and **AiVision** scopes enabled in their Role.

## Supported Providers

| Provider | Model | Duration | Aspect Ratios |
|----------|-------|----------|---------------|
| Google Gemini | Veo 2 | 5-8 seconds | 16:9, 9:16, 1:1 |

!!! warning

    Video generation is currently only supported by **Google Gemini**. OpenAI, Anthropic, and Ollama do not support video generation.

## Using Video Generation

1. Open a record in **edit** mode with an attachment-multiple field.
2. Click the **Generate Video** button.
3. In the modal:
    - Enter a text prompt describing the desired video.
    - Select an **aspect ratio**: 16:9 (landscape), 9:16 (portrait), or 1:1 (square).
    - Choose a **duration** (5-8 seconds).
4. Click **Generate**. An animated progress bar shows while the video is being created.
5. A `<video>` player appears for preview once generation completes.
6. Click **Use Video** to attach it to the record.

## Technical Notes

- Video generation uses an asynchronous pipeline (`predictLongRunning`) with a polling loop (5-second intervals, max 5 minutes).
- The AJAX request has a 6-minute timeout to accommodate the long generation time.
- Generated videos are downloaded from the Gemini Files API and saved as MP4 attachments.

## Formula Function

Video generation can be used in Workflows and BPM via formula:

```
eblaAi\generateVideo(PROMPT, ASPECT_RATIO, DURATION, PROFILE_ID)
```

See [Formula Functions](formula.md#eblaaigeneratevideo) for full documentation.

## Related Features

- [AI Image Generation](image-generation.md) — Generate images from text prompts.
- [AI Voice Generation](voice-generation.md) — Generate speech audio from text.
- [Image & Attachment Analysis](image-analysis.md) — Analyze existing images with AI vision.
