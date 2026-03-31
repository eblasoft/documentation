---
icon: material/cog
title: Settings - Ebla Open Street Map
description: Configure the map provider and measurement format for Ebla Open Street Map.
---

# Settings

The extension adds a settings page under **Administration -> Ebla Extensions -> Ebla Open Street Map Settings**.

## How to Open It

1. Go to **Administration**.
2. Open **Ebla Open Street Map Settings**.

![Map Provider](../../_static/images/espocrm-extensions/ebla-open-street-map/setting-map-provider.png)

## Added Settings

| Setting | Description |
| --- | --- |
| `mapProvider` | Selects the active map provider. For this extension, choose `OpenStreetMap`. |
| `measurementFormat` | Controls how route distance is displayed: `Kilometers` or `Miles`. |

## How to Activate OpenStreetMap

1. Open the settings page.
2. Set **Map Provider** to `OpenStreetMap`.
3. Save.

This activates the OpenStreetMap geolocation hook for address fields and makes the extension behave as the active provider.

## How the Settings Affect Features

- `mapProvider`
  Activates the OpenStreetMap-based address geocoding logic before record save.
- `measurementFormat`
  Changes how **Map Route** distance is displayed in the generated distance field.

## See Also

- [Address Field Features](address-field.md)
- [Map Route](map-route.md)
