---
icon: material/vector-polygon
title: Polygon Map - Ebla Map Plus
description: Draw and store polygon shapes on a map directly within EspoCRM records using the Ebla Map Plus polygon field type.
---

# Polygon Map

The **Polygon Map** field type lets users draw a custom polygon shape directly on a Google Map inside an EspoCRM record. The polygon coordinates are stored on the record and can be used in workflows, exports, or integrations.

![Polygon drawn on a map inside an EspoCRM record](../../_static/images/espocrm-extensions/map-plus/polygon-map.png)

---

## Use Cases

- Define delivery zones or service coverage areas on a customer record.
- Mark geographic territories for sales regions.
- Capture property boundaries on a real estate record.

---

## Adding a Polygon Map Field

1. Navigate to **Administration** → **Entity Manager**.
2. Select the entity type (e.g. Account, Territory).
3. Click **Fields** → **Add Field**.
4. Set **Type** to **Map** (the polygon map field type).
5. Enter a **Name** and **Label** (e.g. `serviceArea` / "Service Area").
6. Click **Save**.
7. Add the field to the entity's **Detail** and **Edit** layouts via **Layout Manager**.
8. Clear cache.

![Polygon Map field configuration in Entity Manager](../../_static/images/espocrm-extensions/map-plus/polygon-map-op.png)

---

## Drawing a Polygon

1. Open a record in edit mode.
2. The Polygon Map field displays an interactive Google Map.
3. Use the drawing toolbar to draw a polygon:
   - Click on the map to place each vertex of the polygon.
   - Close the shape by clicking the first point again, or double-clicking the last point.
4. Adjust the shape by dragging vertices.
5. Save the record to persist the polygon coordinates.

!!! tip
    To redraw a polygon, delete the existing shape using the remove button on the field, then draw a new one.

---

## See Also

- [Map Route](map-route.md) — calculate routes between address fields
- [Map View](map-view.md) — display records as pins on an interactive map
