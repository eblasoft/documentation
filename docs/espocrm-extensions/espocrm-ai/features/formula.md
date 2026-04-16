# Formula

The Formula feature in Ebla AI allows you to create custom formula functions that can be used in various parts of the
CRM. These functions can be used to perform calculations, manipulate data, and automate tasks. Which enables you to
create complex and intelligent formulas that can be used to enhance your CRM operations.

## Using Formula

Format of function use: `eblaAi\textGenerate([propmt], profileId)`.

!!! example

    ```
        $prompt = string\concatenate('Calculate score of this profile,',
        ' name is: ', name,
        ' email is: ', emailAddress,
        ' industry is: ', industry,
        ' source is: ' , source,
        ' country is: ' , addressCountry,
        '. Provide result as number between 0-4 without explainations'
        );
        
        $profileId = '65d6f98d3d0f9f5f9';
        
        score = eblaAi\textGenerate($prompt, $profileId);
    ```

`Output Example: Calculate score of this profile, name is: Marry Coch email is: marry@gmail.com industry is: Banking source is: Web Site country is: Germany. Provide result as number between 0-4 without explainations`

!!! important

    If output is not as expected, you can click on **Send** button to regenerate the output.

---

## eblaAi\getPrompt

`eblaAi\getPrompt` fetches an AI Prompt record by its ID and renders its template with field values substituted in. This is useful in workflows, before-save hooks, and other formula contexts where you want to dynamically build a prompt from a saved template rather than constructing the string manually.

### Syntax

```
eblaAi\getPrompt(PROMPT_ID)
```

Renders the prompt template using the field values of the **current record** (the record the formula is running on).

```
eblaAi\getPrompt(PROMPT_ID, SCOPE, RECORD_ID)
```

Renders the prompt template using the field values of a **specific record** identified by its entity type and ID.

### Placeholder Formats

The AI Prompt template supports two placeholder formats — both are supported and can be mixed:

- `{{fieldName}}` — double curly braces
- `{fieldName}` — single curly braces

Each placeholder is replaced with the actual value of the corresponding field from the target record.

### Parameters

| Parameter | Description |
|-----------|-------------|
| `PROMPT_ID` | The ID of the AiPrompt record to use |
| `SCOPE` | The entity type of the target record (e.g. `'Contact'`) |
| `RECORD_ID` | The ID of the target record |

### Example

!!! example

    Fetch a prompt template and use it as input to `eblaAi\textGenerate` in a before-save formula:

    ```
    $promptId = '65d6f98d3d0f9f5f9';

    $prompt = eblaAi\getPrompt($promptId);

    description = eblaAi\textGenerate($prompt, $profileId);
    ```

!!! example

    Use the three-argument form to render a prompt against a related record:

    ```
    $promptId = '65d6f98d3d0f9f5f9';
    $relatedId = relatedContactId;

    $prompt = eblaAi\getPrompt($promptId, 'Contact', $relatedId);

    notes = eblaAi\textGenerate($prompt, $profileId);
    ```

!!! note

    `eblaAi\getPrompt` only renders the prompt text — it does not call the AI. Pass the result to `eblaAi\textGenerate` to get an AI response.

---

## eblaAi\generateImage

Generates an image using AI and saves it as an EspoCRM Attachment. Returns the attachment ID.

### Syntax

```
eblaAi\generateImage(PROMPT, SIZE, PROFILE_ID)
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `PROMPT` | string | Yes | Text description of the image to generate |
| `SIZE` | string | No | Image size: `'square'` (default), `'landscape'`, or `'portrait'` |
| `PROFILE_ID` | string | No | AI Profile ID. Uses system default if omitted |

**Returns:** The ID of the created Attachment record, or a string starting with `"Error:"` on failure.

!!! example

    ```
    $imageId = eblaAi\generateImage(
        'A professional headshot photo of a business executive',
        'square',
        $profileId
    );

    photoId = $imageId;
    ```

!!! note "Provider support"

    Image generation is supported by **OpenAI** (DALL-E 3) and **Google Gemini** (Imagen 3). Anthropic and Ollama do not support image generation.

---

## eblaAi\generateSpeech

Converts text to speech audio and saves it as an EspoCRM Attachment. Returns the attachment ID.

### Syntax

```
eblaAi\generateSpeech(TEXT, VOICE, SPEED, PROFILE_ID)
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `TEXT` | string | Yes | The text to convert to speech (max 4096 characters) |
| `VOICE` | string | No | Voice name. OpenAI: alloy, ash, coral, echo, fable, onyx, nova, shimmer. Gemini: Aoede, Charon, Fenrir, Kore, Puck |
| `SPEED` | float | No | Speech speed multiplier (default 1.0) |
| `PROFILE_ID` | string | No | AI Profile ID. Uses system default if omitted |

**Returns:** The ID of the created Attachment record (MP3 or WAV), or a string starting with `"Error:"` on failure.

!!! example

    ```
    $audioId = eblaAi\generateSpeech(
        'Welcome to our company. We are glad to have you.',
        'nova',
        1.0,
        $profileId
    );
    ```

!!! note "Provider support"

    Voice generation is supported by **OpenAI** (TTS-1, MP3 output) and **Google Gemini** (TTS Preview, WAV output). Anthropic and Ollama do not support voice generation.

---

## eblaAi\generateVideo

Generates a short video from a text prompt and saves it as an EspoCRM Attachment. Returns the attachment ID.

### Syntax

```
eblaAi\generateVideo(PROMPT, ASPECT_RATIO, DURATION, PROFILE_ID)
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `PROMPT` | string | Yes | Text description of the video to generate |
| `ASPECT_RATIO` | string | No | Aspect ratio: `'16:9'` (default), `'9:16'`, or `'1:1'` |
| `DURATION` | int | No | Duration in seconds (5-8) |
| `PROFILE_ID` | string | No | AI Profile ID. Uses system default if omitted |

**Returns:** The ID of the created Attachment record (MP4), or a string starting with `"Error:"` on failure.

!!! example

    ```
    $videoId = eblaAi\generateVideo(
        'A timelapse of a sunset over the ocean',
        '16:9',
        8,
        $profileId
    );
    ```

!!! warning "Provider support"

    Video generation is currently only supported by **Google Gemini** (Veo 2). OpenAI, Anthropic, and Ollama do not support video generation. Video generation may take up to 5 minutes due to the asynchronous processing pipeline.