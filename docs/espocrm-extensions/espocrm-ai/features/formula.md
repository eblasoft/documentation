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