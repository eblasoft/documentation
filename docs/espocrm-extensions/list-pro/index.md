# Espocrm List Pro Documentation <a href="https://www.eblasoft.com.tr/espocrm-extension-page/ebla-list-pro" target="_blank" id="ext-version" data-id="65eab79bd308f0633"></a>

## Overview
**Ebla List Pro** for Espocrm streamlines field editing by allowing updates directly in the list view. No more opening separate pages for each item—enabling a faster, more efficient workflow.

- [Inline Editing](#1-inline-editing)
- [Escape and Save Shortcuts](#2-escape-and-save-shortcuts)
- [Entity-Level Disabling](#3-entity-level-disabling)
- [Field-Level Disabling](#4-field-level-disabling)
- [Intuitive Keyboard Navigation](#5-intuitive-keyboard-navigation)
- [List Card View](#6-list-card-view)
- [Real Estate Custom Advanced Card Style](#7-real-estate-custom-advanced-card-style)
- [Property Card No-Image Placeholder](#8-property-card-no-image-placeholder)



Below is a quick video demonstration:

<iframe width="560" height="315" src="https://www.youtube.com/embed/4ucBksByszA" title="Eblasoft | Espocrm Shared Filter" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 1. Inline Editing

Inline editing enables you to modify field values directly in the list view. Simply hover over a field and click the pencil icon that appears to activate editing.

<!-- Placeholder for inline editing screenshot -->
<!-- Screenshot suggestion: Display a list view with one field highlighted on hover showing the pencil icon -->

## 2. Escape and Save Shortcuts

Quickly manage your inline edits with these keyboard shortcuts:

- **Esc**: Discards any changes made during inline editing.
- **Ctrl+Enter**: Saves your changes immediately.

<!-- Placeholder for keyboard shortcuts screenshot -->
<!-- Screenshot suggestion: Show an inline editing state with overlay hints for the "Esc" and "Ctrl+Enter" shortcuts -->

## 3. Entity-Level Disabling

Disable inline editing entirely for a specific entity by adding the following property to its JSON configuration file located at `Resources/metadata/clientDefs/{YourEntityName}.json`:

```json
{
  "inlineEditListDisabled": true
}
```
## 4. Field-Level Disabling
To turn off inline editing for individual fields, use the Field Manager to toggle the "inline edit" option off for that field.

<!-- Placeholder for field-level disabling screenshot --> <!-- Screenshot suggestion: Show the Field Manager interface with the inline edit option disabled for a specific field -->
!!! note "Note" Inline editing adheres to field permissions and won’t work for fields that are read-only or restricted.

!!! warning "Warning" Inline editing is not supported for fields that use dynamic logic.

## 5. Intuitive Keyboard Navigation
Enhance your editing workflow by navigating between cells with your keyboard. Use the arrow keys (up, down, left, right) to move seamlessly between fields—similar to working in a spreadsheet.

<!-- Placeholder for keyboard navigation screenshot --> <!-- Screenshot suggestion: Illustrate a focused cell in the list view with arrows indicating navigation between cells -->

## 6. List Card View
This feature allows you to display the list view in card view. You can add custom fields to the card view and display them in a card view.

## 7. Real Estate Custom Advanced Card Style
This feature allows you to customize the advanced card style for real estate entities. You can add custom fields to the advanced card and display them in a card view.


![Ebla List Pro](../../_static/images/espocrm-extensions/list-pro/espocrm-list-pro-real-estate-custom-advanced-card-style.png){ width=500px }


## 8. Property Card No-Image Placeholder
When a property card doesn't have an image, a placeholder image will be displayed. This feature enhances the visual appeal of your list view and provides a consistent user experience.


![Ebla List Pro](../../_static/images/espocrm-extensions/list-pro/espocrm-list-pro-property-card-no-image-placeholder.png){ width=500px }






Change Log
<div class="change-log-wrapper" data-id="65eab79bd308f0633"></div>