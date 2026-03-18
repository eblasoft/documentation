---
status: featured
icon: material/map
title: EspoCRM | Ebla Map Plus Documentation
description: Add Google Maps integration to EspoCRM address fields with geocoding, place search autocomplete, map views, route planning, and polygon drawing.
---

# Map Plus <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-map-extension" target="_blank" id="ext-version" data-id="636c9732e830bebeb"></a>

<!-- DOC:OVERVIEW START -->

## Overview

**Ebla Map Plus** extends EspoCRM's native address field with a full suite of Google Maps capabilities. Once installed, every address field in your CRM gains geocoding, place search autocomplete, interactive map display, and advanced routing — without replacing or rebuilding any existing data.

The extension also introduces two new custom field types (**Map Route** and **Polygon Map**) and a dedicated **Location** entity for managing Google Places data directly inside EspoCRM.

<!-- DOC:OVERVIEW END -->

---

## Extension Video

<iframe width="650" height="315" src="https://www.youtube.com/embed/Cu9MdF8_LVM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

<!-- DOC:FEATURES START -->

## Key Features

- **Automatic Geocoding**: Converts address fields to latitude/longitude coordinates automatically on save. Supports manual geocoding and works across all entity types.

- **Place Search Autocomplete**: Address fields gain a Google Places-powered search input. Selecting a result fills all address components (street, city, country, postal code) and stores coordinates instantly.

- **Map View**: Display entity records as pins on an interactive Google Map from the list view. Configurable per entity type with custom marker clustering.

- **Map Route Field**: A new field type that plots a route between multiple address fields, showing distance and estimated travel time updated via the Directions API.

- **Polygon Map Field**: A new field type that lets users draw custom polygon shapes on a map and store the coordinates on the record.

- **Location Entity**: A full EspoCRM entity backed by Google Places data — stores name, address, rating, photos, opening hours, street view, and reviews. Supports automated sync via a scheduled job.

- **Formula Function**: Trigger geocoding from EspoCRM workflow formulas using `ext\eblaMapPlus\geocode(addressField, forceUpdate)`.

- **Country as Dropdown**: Optional setting that converts the country field in address edit mode from a text autocomplete into a structured dropdown.

<!-- DOC:FEATURES END -->

---

<!-- DOC:USE-CASES START -->

## Use Cases

### 1. Field Sales Team Routing
Sales reps visit multiple clients per day. Use the Map Route field on Accounts or Contacts to calculate driving distances and plan efficient visit routes directly from the CRM record.

### 2. Real Estate Portfolio Mapping
Agents manage properties with address fields. Enable Map View on the Property entity to see all listings on a single interactive map. Zoom and click markers to open records.

### 3. Service Area Management
Operations teams define delivery zones or service coverage areas using Polygon Map fields. Draw boundaries on a record and use the stored coordinates in workflows or exports.

### 4. Lead & Account Geocoding
Marketing needs clean lat/lng data for mapping campaigns. Auto-geocode runs silently on every address save, ensuring all records always have accurate coordinates without manual effort.

### 5. Location Intelligence with Google Places
Businesses track competitor locations, partner offices, or points of interest. The Location entity pulls live data from Google Places — ratings, photos, opening hours — and keeps it updated automatically.

<!-- DOC:USE-CASES END -->

---

<!-- DOC:INSTALLATION START -->

## Installation

1. Obtain the Ebla Map Plus extension package from the [Eblasoft customer portal](https://portal.eblasoft.com.tr).
2. Navigate to **Administration** → **Extensions**.
3. Upload the `.zip` package and click **Install**.
4. Clear cache and rebuild when prompted.

!!! note
    Requires EspoCRM 8.0.0 or higher.

<!-- DOC:INSTALLATION END -->

---

<!-- DOC:CONFIGURATION START -->

## Configuration

### Google Maps API Key

All features require a valid Google Maps API key with the following APIs enabled in your Google Cloud project:

- Maps JavaScript API
- Places API
- Geocoding API
- Directions API

**To configure:**

1. Navigate to **Administration** → **Integrations** → **Google Maps**.
2. Paste your API key into the **API Key** field.
3. Save.

![Google Maps Integration Settings](../../_static/images/espocrm-extensions/map-plus/api-key.png)

### Available Settings

- **API Key**: Your Google Cloud API key. Required for all features.
- **Country Restrictions**: Comma-separated list of ISO 3166-1 alpha-2 country codes to restrict autocomplete results (e.g. `tr,us,gb`). Leave empty for global search.
- **Country Format**: Controls whether country values are stored in short (`TR`) or long (`Turkey`) format.
- **State Format**: Controls whether state values are stored in short or long format.
- **City Format**: Controls whether city values are stored in short or long format.
- **Country as Dropdown** (default: `false`): When enabled, the country field in address edit mode displays as a structured dropdown instead of a text autocomplete input. Detail and list views are not affected.

!!! tip
    Restrict autocomplete to your target countries to reduce irrelevant suggestions and minimize API quota usage.

<!-- DOC:CONFIGURATION END -->

---

<!-- DOC:USAGE START -->

## Features

### [Place Search Autocomplete](search-place-autocomplete.md)

Address fields display a search input powered by the Google Places API. Start typing a location name or street address and select from the dropdown. All address components fill automatically.

### [Latitude and Longitude (Geocoding)](latitude-and-longitude.md)

Address fields gain latitude and longitude inputs. Geocoding runs automatically when an address is saved. Coordinates can also be triggered manually from the field or via formula.

### [Map View](map-view.md)

Display entity records as interactive map pins from the list view. Enable per entity type from the Entity Manager and configure which address field to use for pin placement.

### [Map Route](map-route.md)

A custom field type that plots a route between addresses. Add a Map Route field to any entity, link it to address fields, and the extension calculates distance and duration via the Directions API.

### [Polygon Map](polygon-map.md)

A custom field type for drawing polygon shapes on a map. Users draw boundaries directly on the record and the coordinates are stored for use in workflows or integrations.

<!-- DOC:USAGE END -->

---

<!-- DOC:ADVANCED START -->

## Formula Function

Use the geocode formula function to trigger geocoding from EspoCRM workflows, BPM processes, or formula scripts.

**Syntax:**
```
ext\eblaMapPlus\geocode(addressField)
ext\eblaMapPlus\geocode(addressField, forceUpdate)
```

**Parameters:**

- `addressField` — The name of the address field to geocode (e.g. `'billingAddress'`).
- `forceUpdate` *(optional, default: `false`)* — When `true`, re-geocodes even if coordinates already exist.

**Examples:**

```
// Geocode the billing address field
ext\eblaMapPlus\geocode('billingAddress')

// Force re-geocode (overwrite existing coordinates)
ext\eblaMapPlus\geocode('billingAddress', true)
```

!!! note
    The formula function respects the same validation rules as auto-geocoding: the address must include at least a city or postal code to trigger a geocode request.

## Location Entity

The **Location** entity stores rich Google Places data inside EspoCRM. Each record maps to a real-world place and can hold:

- Name, address, website, email, phone
- Google rating and rating history
- Photos gallery
- Opening hours
- Street view
- Customer reviews (via related Review entity)

A scheduled job (**GooglePlacesCrawler**) can automatically pull updated data from the Places API to keep records current.

<!-- DOC:ADVANCED END -->

---

<!-- DOC:SECURITY START -->

## Limitations & Security Notes

!!! warning
    The Google Maps API key is included in the page source when loading map-enabled views. Restrict your API key in the Google Cloud Console to your CRM's domain to prevent unauthorized usage.

!!! note
    Auto-geocoding is skipped during silent operations such as mass updates and imports (`skipAutoGeocode` option). Trigger geocoding manually or via formula after bulk data loads.

<!-- DOC:SECURITY END -->

---

<!-- DOC:SUPPORT START -->

## Support and Feedback

For any inquiries, support, or feedback regarding the **Ebla Map Plus** extension, please reach out through our portal and create a ticket. We are committed to ensuring a seamless experience and are here to assist you with any questions or concerns.

**Support Portal:** [https://portal.eblasoft.com.tr](https://portal.eblasoft.com.tr)

<!-- DOC:SUPPORT END -->

---

## Changelog

<div class="change-log-wrapper" data-id="636c9732e830bebeb"></div>
