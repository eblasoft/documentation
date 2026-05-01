# AI Voice Generation

Voice Generation is currently available as an API and formula capability, not as a user-facing field action in the installed build.

In other words:

- The backend can generate speech attachments
- Formula can call speech generation
- There is no current text-field or modal UI for end users

## Current Availability

Use cases today are mainly:

- Workflow automation
- Formula-driven generation
- Custom integrations

## Formula Support

Speech generation is available through:

```text
eblaAi\generateSpeech(TEXT, VOICE, SPEED, PROFILE_ID)
```

The function creates an attachment and returns its ID.

See [Formula](formula.md) for usage examples.

## Provider Notes

The current extension includes provider-specific speech generation support for selected providers such as OpenAI and Gemini.

Actual voice names and audio formats depend on the provider behind the resolved profile.

## Important Note

The older documentation flow that described a built-in **Text to Speech** button in field menus does not match the current UI and should not be relied on.

## Related Features

- [Formula](formula.md)
- [AI Profiles](ai-profiles.md)
- [Image Generation](image-generation.md)
