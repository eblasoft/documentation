---
icon: fontawesome/regular/window-maximize
title: Ebla Iframe Field - EspoCRM
description: Embed external pages, dashboards, widgets, and internal tools directly inside record detail views.
---

# Espocrm Iframe Documentation <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-i-frame-field" target="_blank" id="ext-version" data-id="636cc88fe277a3f69"></a>

## Overview
**Ebla Iframe** adds new field type to EspoCRM "Iframe Field". It allows you to embed external web content into EspoCRM detail views.

![Iframe Field](../../_static/images/espocrm-extensions/iframe/espocrm-iframe-field-type.png)

## Edit View
Just like `url` field type, you will be able to input the URL of the page you want to embed. URL also can be set by a formula.

![Iframe Field](../../_static/images/espocrm-extensions/iframe/espocrm-iframe-edit-mode.png)

## Detail View
Based on the [mode](#modes) you selected, the iframe will be displayed in different ways.

## Options
- **Height**: Height of the iframe in pixels.
- **Button Label**: Label of the button, this only needed if mode is set to `popup` or `new-tab`.
- **[Mode](#modes)**.

## Modes
See this video for a quick overview of the modes:

<iframe width="560" height="315" src="https://www.youtube.com/embed/n7S4V7DdW-8?si=sHcA15zTk9A" title="Eblasoft | Espocrm Shared Filter" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Inline
Display the iframe directly in the detail view.
![Iframe Field](../../_static/images/espocrm-extensions/iframe/espocrm-iframe-view-mode.png)

### Popup Window
Display as button, click to open the iframe in a modal window inside EspoCRM.
![Iframe Field](../../_static/images/espocrm-extensions/iframe/espocrm-iframe-popup-window.png)

### New Tab
Display as button, click to open the iframe in a new tab.

## Change Log

<div class="change-log-wrapper" data-id="636cc88fe277a3f69"></div>
