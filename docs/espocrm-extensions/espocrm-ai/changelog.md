# Changelog

All notable changes to the Ebla AI extension will be documented in this file.


## [Unreleased]

### Added
- Dependency updates for improved stability
- Enhanced model retrieval functionality across providers


## [2.5.0] - 2025-07-23

### Added
- **Email Translation**: Translate emails instantly to user's preferred language
- Translate button in email side-panel compose view for quick translation while composing
- Support for custom AI profiles for specialized translation contexts

### Fixed
- Placeholder replacement in AI prompts working correctly


## [2.4.0] - 2025-03-07

### Added
- **Smart Paste**: Extract structured data from unstructured text
- Enhanced schema generation supporting multiple field types:
  - Address fields (street, city, state, country, postal code)
  - Email and phone fields
  - Date and datetime fields
  - WYSIWYG/HTML fields
  - JSON arrays
- Smart paste confirmation dialog with data preview
- Contact tooltips for better field context
- AI generation support for new records (before saving)

### Improved
- Entity retrieval logic for better context awareness
- Field type handling in schema generation


## [2.3.0] - 2025-01-14

### Added
- Email translation feature with single-click translation
- Multi-language support based on user preferences
- Translation modal with copy-to-clipboard functionality

### Improved
- OpenAI model selection showing all available models


## [2.2.0] - 2024-12-30

### Improved
- Email reply generation with full-width preview section
- Preserved suggested text formatting
- Smart insertion replacing only reply portion while retaining signature and thread history


## [2.1.0] - 2024-10-01

### Added
- Support for EspoCRM 8.4 version compatibility


## [2.0.0] - 2024-09-11

### Changed
- Removed predefined prompts in favor of custom AI prompts management
- AI profile now logged with each interaction

### Fixed
- String concatenation issues in AI responses
- Model retrieval error handling
- Sandbox functionality improvements


## [1.9.0] - 2024-08-20

### Added
- **OpenRouter Provider**: Support for OpenRouter as AI provider
- Dynamic model fetching from AI providers
- Provider-specific API endpoints configuration

### Fixed
- 500 error when fetching models from certain providers
- Get models functionality before API key is set
- Gemini log saving issues


## [1.8.0] - 2024-07-15

### Added
- Quick generate text on varchar and text fields
- Field-level AI generation with dedicated UI
- Predefined prompt selection for quick generation

### Improved
- AI generation modal with better UX
- Field attribute handling in generation context


## [1.7.0] - 2024-06-10

### Added
- **Anthropic Provider**: Support for Claude models
- Provider factory pattern for extensibility
- Consistent API client interface across providers

### Fixed
- Anthropic integration when no profile specified
- Placeholder handling in all contexts


## [1.6.0] - 2024-05-20

### Added
- **Ollama Provider**: Support for self-hosted local AI models
- Custom endpoint configuration for Ollama
- Model retrieval from local Ollama instance

### Improved
- Library dependencies updated
- GPT-4o model support for OpenAI


## [1.5.0] - 2024-04-15

### Added
- AI logging with detailed request/response tracking
- Custom request detail template with chat-style display
- AI interaction history for audit and review

### Improved
- Enhanced error handling across all AI operations
- Better ACL integration for AI scope


## [1.4.0] - 2024-03-10

### Added
- **Gemini Provider**: Google AI integration
- Provider-specific model configuration
- Temperature and max tokens settings per profile


## [1.3.0] - 2024-02-01

### Added
- AI Profiles management for different use cases
- AI Prompts with variable support
- Profile selection in generation modals
- Context customization per profile


## [1.2.0] - 2024-01-15

### Added
- Stream comment generation with AI
- Previous comments context for better suggestions
- Extension support for stream panel


## [1.1.0] - 2023-12-20

### Added
- Email reply generation with AI
- Context-aware email responses
- Preview and insertion workflow


## [1.0.0] - 2023-11-30

### Added
- Initial release of Ebla AI extension
- OpenAI provider integration
- Basic AI text generation
- Formula function: `textGenerate()`
- AI Sandbox for testing
- Admin panel integration
- ACL-based access control


## Version Support

| Extension Version | EspoCRM Version | PHP Version |
|-------------------|-----------------|-------------|
| 2.5.x             | 9.1+            | 8.1+        |
| 2.4.x             | 9.0+            | 8.1+        |
| 2.1.x - 2.3.x     | 8.4+            | 8.0+        |
| 1.x - 2.0.x       | 8.3+            | 7.4+        |


## Upgrade Notes

### From 2.4.x to 2.5.x
- Email translation is disabled by default. Enable in Administration > Settings > Enable Email Translate
- No breaking changes

### From 2.3.x to 2.4.x
- Smart Paste does not support link/linkMultiple fields yet. Manual assignment required
- Schema generation excludes system fields automatically

### From 2.0.x to 2.1.x
- Predefined prompts removed. Migrate to custom AI Prompts if needed
- Check AI profiles are properly configured

### From 1.x to 2.x
- Major restructure of provider architecture
- Reconfigure AI providers in Integrations
- Review and update custom AI profiles if any


## Migration Guide

See [Installation & Setup](index.md#installation) for fresh installation instructions.

For upgrades, follow standard EspoCRM extension upgrade process:

1. Backup your instance
2. Upload new extension package
3. Run Administration > Upgrade
4. Clear cache
5. Rebuild


## Support

For issues, feature requests, or questions:

- Email: support@eblasoft.com.tr
- Documentation: [Ebla AI Docs](index.md)
