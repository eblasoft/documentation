# Smart Paste

Automatically extract and populate structured data from unstructured text using AI. Smart Paste saves time by intelligently parsing copied text (like business cards, email signatures, or document excerpts) and filling in the appropriate entity fields.


## Overview

Smart Paste leverages AI to understand unstructured text and map it to your entity fields. Instead of manually copying information field by field, paste the entire text block and let the AI extract relevant data points, matching them to appropriate fields based on context and field types.


## How It Works

The Smart Paste feature:

1. Analyzes your entity's field structure and types
2. Generates a schema including field names, types, constraints, and descriptions
3. Sends the schema and pasted text to the AI
4. Receives structured data matching your field definitions
5. Populates fields automatically while preserving data integrity


## Using Smart Paste

### Basic Usage

1. Copy text containing information you want to capture (e.g., from an email, website, or document).

2. Navigate to the entity record you want to populate:
   - **For new records**: Click **Create {Entity}** button
   - **For existing records**: Open the record in edit mode

3. Look for the **Smart Paste** icon or button (typically near the form header).

4. Click **Smart Paste**.

5. Paste your copied text into the text area that appears.

   ![Smart Paste Modal](../../../_static/images/espocrm-extensions/ai/features/smart-paste-modal.png)

6. Click **Parse** or **Generate**.

7. Review the extracted data shown in the confirmation dialog.

   ![Smart Paste Preview](../../../_static/images/espocrm-extensions/ai/features/smart-paste-preview.png)

8. Click **Apply** to populate the fields, or **Cancel** to discard.

9. Review and adjust any fields as needed, then save the record.


### Example: Creating a Contact from Business Card

Given this copied text:
```
John Smith
Senior Sales Manager
Acme Corporation
john.smith@acme.com
+1 (555) 123-4567
123 Business Ave, Suite 100
New York, NY 10001
```

Smart Paste will extract:

- **First Name**: John
- **Last Name**: Smith
- **Job Title**: Senior Sales Manager
- **Account Name**: Acme Corporation
- **Email**: john.smith@acme.com
- **Phone**: +1 (555) 123-4567
- **Address Street**: 123 Business Ave, Suite 100
- **Address City**: New York
- **Address State**: NY
- **Address Postal Code**: 10001


### Example: Opportunity from Email

Given this email excerpt:
```
We're interested in purchasing your Enterprise Software Solution.
Our budget is $50,000 and we'd like to close by Q2 2025.
We expect this will increase our efficiency by 40%.
Decision maker: Sarah Johnson, CTO
```

Smart Paste will extract:

- **Name**: Enterprise Software Solution
- **Amount**: 50000
- **Close Date**: 2025-06-30 (interprets Q2 2025)
- **Description**: Increase efficiency by 40%
- **Stage**: (Uses most appropriate based on context)


## Supported Field Types

Smart Paste intelligently handles various field types:

### Text & String Fields

- **Text**: Extracts multi-line content, respects maxLength
- **Varchar**: Single-line strings with length constraints
- **Email**: Validates email format
- **Phone**: Extracts phone numbers in various formats

### Numeric Fields

- **Int**: Whole numbers (quantities, counts)
- **Float**: Decimal numbers (amounts, percentages, measurements)

### Date & Time

- **Date**: Parses various date formats (MM/DD/YYYY, DD-MM-YYYY, etc.)
- **DateTime**: Parses date and time combinations

### Structured Fields

- **Enum**: Matches text to predefined options (intelligently selects closest match)
- **Address**: Parses address components (street, city, state, country, postal code)
- **Bool**: Interprets yes/no, true/false, enabled/disabled

### Rich Content

- **Wysiwyg**: HTML content preservation
- **Markdown**: Markdown-formatted text


## Field Matching Intelligence

### Enum Field Matching

For enum fields with predefined options, the AI:

- Analyzes the context of the pasted text
- Compares against available enum options
- Selects the most appropriate match
- Falls back to the first option if uncertain

Example: For an Opportunity Stage field with options [Prospecting, Qualification, Proposal, Negotiation, Closed Won], the text "They're interested and asked for a quote" would likely map to "Proposal".


### Smart Field Descriptions

The AI uses field tooltips and labels to understand context:

- Field labels provide basic naming context
- Tooltips (if defined) offer additional guidance
- Entity type provides domain context


### Handling Ambiguity

When data is ambiguous:

- The AI attempts best-guess matching based on context
- You can review and correct in the preview step
- Empty fields remain empty if no clear match exists


## Configuration

Smart Paste works out-of-the-box with minimal configuration:


### Entity-Level Setup

No specific configuration required. Smart Paste automatically:

- Discovers all fields in the entity
- Excludes system fields (id, createdAt, modifiedAt, etc.)
- Skips non-storable fields
- Generates appropriate schema for each field type


### AI Profile Selection

Smart Paste uses the default AI profile unless overridden:

1. **Default behavior**: Uses system default AI profile
2. **Custom profile**: Set entity-specific AI profile in entity metadata (advanced)

The AI profile's context should emphasize accuracy and structured data extraction.


### Excluded Fields

The following field types are automatically excluded:

- System fields: id, createdAt, modifiedAt, createdBy, modifiedBy, deleted
- Flag fields: isFollowed, isStarred
- Relationship fields: link, linkMultiple, linkParent (currently not supported)
- Non-storable fields marked in entity definitions


## Access Control

### Required Permissions

Users must have:

- **Create** or **Edit** access to the entity (depending on whether creating or editing)
- **Access** permission to Ai scope in their role

### Configuring Access

1. Navigate to **Administration** → **Roles** → Select role.
2. Ensure entity has appropriate **Create** or **Edit** permission.
3. In **Scope** section, ensure **Ai** is enabled.
4. Save.


## Use Cases

### Sales Team: Quick Lead Capture

Sales representatives receiving business cards or contact information via email can:

- Copy contact details from any source
- Create a lead or contact record in seconds
- Focus on relationship building instead of data entry

### Support: Fast Case Creation

Support agents can:

- Copy issue descriptions from emails or chat
- Extract key details (customer name, issue type, severity)
- Create cases with accurate information instantly

### Data Migration: Bulk Import Preparation

When importing data from external sources:

- Copy records from spreadsheets or documents
- Create structured records quickly
- Validate data before bulk import


### Event Management: Attendee Registration

Event coordinators can:

- Copy attendee information from registration forms
- Quickly create contact records
- Associate attendees with events


## Best Practices

1. **Provide Context**: Include descriptive field tooltips in entity definitions to improve AI accuracy.

2. **Review Before Saving**: Always review the extracted data in the preview step before applying.

3. **Structured Input Works Best**: While Smart Paste handles unstructured text, semi-structured input (like business cards or email signatures) yields best results.

4. **Use for Initial Population**: Smart Paste is ideal for initial data capture. Fine-tune details manually after applying.

5. **Test with Your Data**: Try Smart Paste with typical data formats you encounter to understand its behavior with your entity structure.


## Limitations

### Unsupported Field Types

Currently, Smart Paste does not extract:

- **Link fields**: Relationships to other entities (e.g., assigned user, account)
- **LinkMultiple**: Multiple relationships (e.g., teams, contacts)
- **LinkParent**: Polymorphic relationships
- **Attachments**: File uploads

These fields should be set manually after using Smart Paste.


### Data Accuracy

- AI interpretation may not be 100% accurate for complex or ambiguous text
- Always review extracted data before saving
- Specialized terminology may require custom AI profiles for better accuracy


### Text Length Limits

- Very large text blocks may be truncated based on AI model token limits
- Best results with focused, relevant text (under 2000 words)


### Language Support

- Extraction quality depends on the AI model's language capabilities
- English text generally yields best results
- Non-English text accuracy varies by AI provider and model


## Troubleshooting

### Smart Paste Button Not Visible

**Cause**: User lacks AI scope access or entity permissions.

**Solution**:
- Check user role has **Ai** scope enabled
- Verify user has **Create** or **Edit** permission for the entity
- Ensure AI provider is configured in Administration

### Extracted Data Is Inaccurate

**Cause**: Ambiguous text or unclear field context.

**Solution**:
- Add descriptive tooltips to entity fields (Administration → Entity Manager → {Entity} → Fields)
- Provide more structured input text
- Consider creating a custom AI profile with entity-specific context
- Review and correct data in preview step before applying

### Some Fields Not Populated

**Cause**: AI couldn't confidently match text to fields.

**Solution**:
- Check if the information exists in the pasted text
- Ensure field types are appropriate (e.g., enum options match expected values)
- Manually fill in missing fields after applying

### Error: "Invalid parameters"

**Cause**: Missing entity type or text content.

**Solution**:
- Ensure text is pasted in the Smart Paste dialog
- Try with a different entity type
- Check browser console for detailed errors

### Timeout or Slow Response

**Cause**: Large text or slow AI provider response.

**Solution**:
- Reduce the amount of pasted text
- Check AI provider API status
- Try a different AI model with faster response times


## Advanced Usage

### Custom Schema Generation

Developers can extend Smart Paste by modifying the schema generation logic in:
```
custom/Espo/Modules/EblaAi/Tools/Ai/Service.php
```

The `convert()` and `convertField()` methods define how entity fields map to JSON schema.


### Entity-Specific AI Profiles

For entities requiring specialized extraction logic, configure custom AI profiles with enhanced context:

```
You are a data extraction specialist for CRM systems.
Extract information from unstructured text and map it accurately to the provided JSON schema.
Pay special attention to:
- Industry-specific terminology
- Date formats (prefer ISO 8601)
- Currency amounts (extract numbers only)
Respond only with valid JSON matching the schema.
```


## Related Features

- [Field Text Generation](field-text-generation.md) - Generate content for individual fields
- [AI Profiles](ai-profiles.md) - Configure custom AI behavior
- [AI Sandbox](sandbox.md) - Test Smart Paste logic
