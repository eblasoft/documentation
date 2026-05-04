# Formula

Ebla AI adds AI-oriented formula functions that can be used in workflows, before-save formulas, and other automation scenarios inside EspoCRM.

## Access Control

To use these functions, the user or process context must have access to the **AiFormula** scope.

## Available Formula Functions

The current build exposes the following functions:

- `eblaAi\textGenerate`
- `eblaAi\runPrompt`
- `eblaAi\getPrompt`
- `eblaAi\analyzeImage`
- `eblaAi\generateImage`
- `eblaAi\generateSpeech`

---

## eblaAi\textGenerate

Generates text from a prompt using the AI service.

### Syntax

```
eblaAi\textGenerate(PROMPT, PROFILE_ID)
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `PROMPT` | The prompt text to send to AI |
| `PROFILE_ID` | Optional AI Profile ID |

### Example

```text
$prompt = string\concatenate(
    'Create a short lead summary for: ',
    name,
    ', industry: ',
    industry,
    ', source: ',
    source
);

description = eblaAi\textGenerate($prompt, $profileId);
```

---

## eblaAi\runPrompt

Runs a saved **AI Prompt** by ID. If the prompt is linked to a profile, that profile can be used during execution.

### Syntax

```
eblaAi\runPrompt(PROMPT_ID)
```

### Example

```text
notes = eblaAi\runPrompt('65d6f98d3d0f9f5f9');
```

### Notes

- The current entity is used as the target context when the formula runs on a saved record
- This is a practical way to reuse prompt templates in formulas

---

## eblaAi\getPrompt

Returns a rendered prompt string from a saved prompt template so it can be reused in formula logic.

### Syntax

```
eblaAi\getPrompt(PROMPT_ID)
```

or

```
eblaAi\getPrompt(PROMPT_ID, SCOPE, RECORD_ID)
```

### Example

```text
$prompt = eblaAi\getPrompt($promptId, 'Contact', contactId);
description = eblaAi\textGenerate($prompt, $profileId);
```

### Notes

- This function returns prompt text only
- It does not call the AI by itself
- If the prompt cannot be resolved, the function returns an empty string

---

## eblaAi\analyzeImage

Analyzes an image attachment using a vision-capable provider and returns the result as text.

### Syntax

```
eblaAi\analyzeImage(ATTACHMENT_ID, PROMPT, PROFILE_ID)
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `ATTACHMENT_ID` | Attachment record ID |
| `PROMPT` | Optional custom analysis prompt |
| `PROFILE_ID` | Optional vision-capable AI Profile |

### Example

```text
$result = eblaAi\analyzeImage(contractScanId, 'Extract the contract dates.');
```

### Notes

- Returns a string
- On failure, returns a string starting with `Error:`

---

## eblaAi\generateImage

Generates an image and saves it as an Attachment record.

### Syntax

```
eblaAi\generateImage(PROMPT, SIZE, PROFILE_ID)
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `PROMPT` | Image description |
| `SIZE` | `square`, `landscape`, or `portrait` |
| `PROFILE_ID` | Optional AI Profile |

### Example

```text
photoId = eblaAi\generateImage(
    'Professional product image on a white background',
    'square',
    $profileId
);
```

### Provider Support

Image generation is currently supported by:

- **OpenAI**
- **Google Gemini**

---

## eblaAi\generateSpeech

Converts text to speech and saves the result as an Attachment record.

### Syntax

```
eblaAi\generateSpeech(TEXT, VOICE, SPEED, PROFILE_ID)
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `TEXT` | Text to convert |
| `VOICE` | Optional provider-specific voice |
| `SPEED` | Optional speed multiplier |
| `PROFILE_ID` | Optional AI Profile |

### Example

```text
$audioId = eblaAi\generateSpeech(
    'Welcome to our company.',
    'nova',
    1.0,
    $profileId
);
```

### Notes

- OpenAI produces MP3 output
- Gemini produces WAV output
- Maximum text length is limited by the API endpoint used by the service

## Related Features

- [AI Prompts](ai-prompts.md)
- [Image Analysis](image-analysis.md)
- [Image Generation](image-generation.md)
- [Voice Generation](voice-generation.md)
