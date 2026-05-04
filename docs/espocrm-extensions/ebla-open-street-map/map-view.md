---
icon: material/map-marker-multiple
title: Map View - Ebla Open Street Map
description: Show entity records on an OpenStreetMap list view with configurable address and layout settings.
---

# Map View

The extension adds a **Map** view mode to entity list views.

![Map view example](../../_static/images/espocrm-extensions/ebla-open-street-map/map-list.png)

---
## Extension video

<iframe width="560" height="315" src="https://www.youtube.com/embed/TCAQxWudWcg" title="Eblasoft | AI Module for Espocrm" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Added Entity Parameters

| Parameter                | Description |
|--------------------------| --- |
| `List Map View Enabled`  | Enables the map view mode for the entity. |
| `List Map Address Field` | Selects which address field is used to place markers. |
| `List Map Layout`        | Selects which list layout is used with the map view. |

When **List Map View** is turned on, the other two settings become visible.

![Enable Map List](../../_static/images/espocrm-extensions/ebla-open-street-map/enable-map-list.png)

## How It Works

- The entity list gets a new **Map** view mode.
- Records with latitude and longitude on the selected address field are shown as markers.
- Clicking a marker opens the record.
- Hovering a marker shows the record name.
- The map automatically fits the visible markers.
- If the selected address field does not have coordinates, the record will not appear on the map.

## See Also

- [Address Field Features](address-field.md)
- [Address Map Features](address-map.md)
