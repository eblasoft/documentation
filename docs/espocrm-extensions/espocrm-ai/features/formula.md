# Formula Functions

Ebla AI provides formula functions that can be used in workflows, BPM processes, and formula fields to run AI operations automatically.

## `eblaAi\textGenerate`

Generates text using AI based on a prompt. Useful for automating content generation in workflows.

**Format:** `eblaAi\textGenerate(prompt, profileId)`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prompt` | string | Yes | The prompt to send to the AI |
| `profileId` | string | No | ID of the AI Profile to use. Uses system default if omitted. |

**Returns:** The AI-generated text as a string.

!!! example

    ```
    $prompt = string\concatenate(
        'Calculate score of this profile,',
        ' name is: ', name,
        ' email is: ', emailAddress,
        ' industry is: ', industry,
        ' source is: ', source,
        ' country is: ', addressCountry,
        '. Provide result as number between 0-4 without explanations'
    );

    $profileId = '65d6f98d3d0f9f5f9';

    score = eblaAi\textGenerate($prompt, $profileId);
    ```

---

## `eblaAi\runPrompt`

Runs a saved **AI Prompt Template** by its ID. Variables in the template are resolved from the current entity context automatically.

**Format:** `eblaAi\runPrompt(promptId)`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `promptId` | string | Yes | The ID of the AI Prompt record to execute |

**Returns:** The AI-generated text as a string. If an error occurs, returns a string starting with `"Error:"`.

!!! tip

    To find a Prompt ID: navigate to **Administration** → **AI Prompts** → open the prompt → copy the ID from the URL.

!!! example

    ```
    $result = eblaAi\runPrompt('6720abc123def456');

    if (string\startsWith($result, 'Error:')) {
        description = 'Generation failed';
    } else {
        description = $result;
    }
    ```

!!! important

    If output is not as expected, review the prompt template in **Administration** → **AI Prompts** and adjust the context or variables.

---

## `eblaAi\analyzeImage`

Analyzes an image or file attachment using a vision-capable AI model. Returns a detailed description or analysis of the image.

**Format:** `eblaAi\analyzeImage(attachmentId, prompt, profileId)`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `attachmentId` | string | Yes | The ID of the Attachment record to analyze |
| `prompt` | string | No | Custom instruction for the analysis. Uses a default describe prompt if omitted. |
| `profileId` | string | No | ID of the AI Profile to use. Uses system default if omitted. |

**Returns:** The AI's analysis as a string. Returns a string starting with `"Error:"` on failure (safe for formula use).

!!! warning "Vision-capable providers only"

    This function requires a vision-capable AI provider. Supported: **OpenAI** (GPT-4o, GPT-4V), **Anthropic** (Claude 3.x), **Google Gemini**.
    If the configured profile's provider does not support vision, the function returns `"Error: Selected provider does not support image analysis."`.

!!! warning "Supported file types"

    Only image files are supported: **JPEG, PNG, GIF, WebP**. Other file types return an error string.

!!! example "Extract text from an image"

    ```
    $attachmentId = attachmentField;

    $result = eblaAi\analyzeImage($attachmentId, 'Extract all text visible in this image.');

    if (string\startsWith($result, 'Error:')) {
        description = 'Image analysis failed';
    } else {
        description = $result;
    }
    ```

!!! example "Auto-describe a product image"

    ```
    $description = eblaAi\analyzeImage(productImage, 'Describe this product for an e-commerce listing. Be concise.');
    productDescription = $description;
    ```
