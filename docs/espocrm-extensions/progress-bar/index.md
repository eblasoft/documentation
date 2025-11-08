---
status: new
icon: material/progress-clock
title: Ebla Progress Bar - EspoCRM
description: Display dynamic progress indicators based on field values or calculated logic for better visual tracking.
---

# Espocrm Progress Bar <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-progress-bar" target="_blank" id="ext-version" data-id="644bee41b754077c2"></a>

## Overview
**Ebla Progress Bar** helps in displaying **Integer, Float, and Currency** fields as progress bars in both **List and Detail** views.

!!! note "Note"
    Edit views will never be affected and only detail & list views will be affected. 


![Progress Bar](../../_static/images/espocrm-extensions/progress-bar/espocrm-progress-bar-overview.png)

## Field Options:
In field manager options of **Integer, Float, and Currency** fields you will see new options like in the screenshot:

![Progress Bar Configuration](../../_static/images/espocrm-extensions/progress-bar/progress-bar-field-options.png)

### Color
Allow to select the color for the progress bar.

### Label Layout
Control what to show inside the progress bar: rate only, value only or all.

### Reference Types
- **$this / $fixedValue**.
- **$other / $this**.
- **$this / $other**.

!!! note "Note"
    - **$this** refers to the target field value.
    - **$fixedValue** will come from `Reference Value` in field options.
    - **$other** will come from `Reference Field` in field options.  

## How to Enable Progress Bar

1. Navigate to **Administration** → **Entity Manager**.
2. Select the desired **Entity Type**.
3. Go to the **Fields** section.
4. Create a new field of type **Integer, Float, or Currency**.
5. Enable the option **Display As Progress Bar**.

## Change Log

<div class="change-log-wrapper" data-id="644bee41b754077c2"></div>

