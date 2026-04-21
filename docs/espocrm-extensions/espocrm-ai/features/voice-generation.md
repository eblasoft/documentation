# AI Voice Generation (Text-to-Speech)

Convert text to natural-sounding speech audio using AI. The generated audio is saved as an EspoCRM Attachment that can be previewed, downloaded, or attached to a record.

## Overview

AI Voice Generation adds a **Text to Speech...** option to text field AI dropdown menus. It opens a modal where you can choose a voice, adjust speed, preview the audio, and optionally attach it to the current record.

## Access Control

!!! info

    Users must have the **Ai** scope enabled in their Role.

## Supported Providers

| Provider | Model | Output Format | Available Voices |
|----------|-------|---------------|-----------------|
| OpenAI | TTS-1 | MP3 | alloy, ash, coral, echo, fable, onyx, nova, shimmer |
| Google Gemini | TTS Preview | WAV | Aoede, Charon, Fenrir, Kore, Puck |

!!! warning

    Anthropic and Ollama do not support voice generation.

## Using Voice Generation

1. Open a record containing a text field with AI enabled.
2. Click the AI dropdown on the text field.
3. Select **Text to Speech...**.
4. In the modal:
    - The current field text is pre-filled (or enter custom text).
    - Select a **voice** from the dropdown (voices are grouped by provider).
    - Adjust the **speed** slider (default 1.0).
5. Click **Generate**.
6. An `<audio>` player appears for preview. A download link is also provided.
7. Click **Attach to Record** to save the audio as an attachment on the record.

## Limitations

- Maximum text length: **4096 characters**.
- Gemini TTS output is PCM converted to WAV with a generated header.

## Formula Function

Voice generation can be used in Workflows and BPM via formula:

```
eblaAi\generateSpeech(TEXT, VOICE, SPEED, PROFILE_ID)
```

See [Formula Functions](formula.md#eblaaigeneratespeech) for full documentation.

## Related Features

- [AI Image Generation](image-generation.md) — Generate images from text prompts.
- [AI Video Generation](video-generation.md) — Generate short videos from text prompts.
- [Field Text Generation](field-text-generation.md) — AI actions on text fields.
