# AI Voice Generation

Voice Generation is currently available as a formula capability only.

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

The extension includes provider-specific speech generation support for selected providers such as OpenAI and Gemini.

Actual voice names and audio formats depend on the provider behind the resolved profile.

## Related Features

- [Formula](formula.md)
- [AI Profiles](ai-profiles.md)
- [Image Generation](image-generation.md)
