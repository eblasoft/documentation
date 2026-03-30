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
