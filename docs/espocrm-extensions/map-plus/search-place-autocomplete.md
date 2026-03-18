---
icon: material/map-search
title: Place Search Autocomplete - Ebla Map Plus
description: Search for addresses using Google Places autocomplete in EspoCRM address fields, with automatic field population and coordinate capture.
---

# Place Search Autocomplete

Address fields in EspoCRM gain a Google Places-powered search input. Start typing a location name or street address, select from the suggestions, and all address components fill in automatically — including latitude and longitude.

![Place search autocomplete in an EspoCRM address field](../../_static/images/espocrm-extensions/map-plus/search-place-auto.png)

---

## Prerequisites

- Ebla Map Plus installed with a valid Google Maps API key.
- **Places API** enabled in your Google Cloud project.
- Latitude/longitude enabled on the address field (see [Latitude and Longitude](latitude-and-longitude.md)) if you want coordinates stored on selection.

---

## How It Works

1. In any record's edit view, click into an address field.
2. A search input appears above the standard address fields.
3. Type a place name, street, or city. Google Places suggestions appear in a dropdown.
4. Select a result.
5. The extension fills in:
   - Street address
   - City
   - State / Province
   - Country
   - Postal code
   - Latitude and longitude (if enabled on the field)
6. You can adjust any field manually before saving.

!!! note
    The "Pull from Google" button on the address field lets you re-fetch place data from Google for the currently stored address, overwriting the existing field values with the latest data from Google Places.

---

## Restricting Autocomplete by Country

To limit suggestions to specific countries:

1. Navigate to **Administration** → **Integrations** → **Google Maps**.
2. Enter ISO 3166-1 alpha-2 country codes in the **Country Restrictions** field, separated by commas (e.g. `tr,us,de`).
3. Save. The autocomplete will now only show results from those countries.

---

## Address Format Settings

Control how country, state, and city values are stored:

- **Country Format**: `short` stores the 2-letter code (`TR`); `long` stores the full name (`Turkey`).
- **State Format**: `short` stores the abbreviation; `long` stores the full name.
- **City Format**: `short` or `long` format for city names where applicable.

Configure these in **Administration** → **Integrations** → **Google Maps**.

---

## Country as Dropdown

When the **Country as Dropdown** setting is enabled, the country sub-field within the address edit view displays as a structured dropdown populated from EspoCRM's countries list — instead of the Google autocomplete text input.

This is useful when you want users to select from a controlled list rather than free-typing.

Enable it in **Administration** → **Integrations** → **Google Maps** → **Country as Dropdown**.

---

## See Also

- [Latitude and Longitude (Geocoding)](latitude-and-longitude.md) — auto-populate coordinates when saving
- [Map View](map-view.md) — show geocoded records on an interactive map
