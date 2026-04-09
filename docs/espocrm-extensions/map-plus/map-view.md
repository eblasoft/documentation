---
icon: material/map-marker-multiple
title: Map View - Ebla Map Plus
description: Display EspoCRM entity records as interactive map pins from the list view with configurable address fields, layouts, and clustered markers.
---

# Map View

Map View adds an interactive Google Map mode to entity list views. Records are shown as markers, grouped with clustering, and can be opened through quick detail popups directly from the map.

---

<iframe width="650" height="315" src="https://www.youtube.com/embed/OW0f7vV0zxk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

![Map View](../../_static/images/espocrm-extensions/map-plus/map-view.jpg)

---

## Entity Parameters

At the entity level, Ebla Map Plus adds these options:

| Parameter                | Description |
|--------------------------| --- |
| `List Map View Enabled`  | Enables the map mode in list view. |
| `List Map Address Field` | Chooses which address field is used for marker placement. |
| `List Map Layout`        | Chooses the layout used beside the map list and for the map mode record rendering. |

---

## Enable Map View for an Entity

1. Navigate to **Administration** -> **Entity Manager**.
2. Open the entity you want to map.
3. Enable **Enable Map List View**.
4. Set **Address Field on Map List**.
5. Optionally set **Layout of Map List**.
6. Save and clear cache if needed.

![Map View Entity Manager Options](../../_static/images/espocrm-extensions/map-plus/map-view-op.png)

---

## Marker Rendering Behavior

Map View is more flexible than a coordinates-only map:

- If latitude and longitude exist, the record is placed directly on the map.
- If coordinates are missing but the chosen address contains enough text data, the browser geocoder can still place the marker from the address.
- Markers are **clustered** automatically for large result sets.
- Hovering a marker shows a popup layout with record details.
- Clicking a marker opens the record in a quick-view modal.

---

## Marker Popup Layouts

For marker popups, the extension uses:

- `Map Marker List` additional layout if the target entity defines it
- Otherwise `List Small`

This lets you control which fields appear when users hover over a marker.

---

## Global Map Behavior

The global Google Maps integration also affects Map View:

- **Scroll Wheel** controls mouse-wheel zooming on the map.

---

## See Also

- [Latitude and Longitude (Geocoding)](latitude-and-longitude.md)
- [Place Search Autocomplete](search-place-autocomplete.md)
- [Select on Map](select-on-map.md)
