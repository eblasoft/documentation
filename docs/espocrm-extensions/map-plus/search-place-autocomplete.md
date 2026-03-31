---
icon: material/map-search
title: Place Search Autocomplete - Ebla Map Plus
description: Search for addresses using Google Places autocomplete in EspoCRM address fields, with configurable country restrictions, language, and stored place data.
---

# Place Search Autocomplete

Address fields in EspoCRM gain a Google Places-powered search input. Start typing a place name or street address, select a suggestion, and the extension fills the address components automatically while also storing coordinates and place data.

![Place search autocomplete in an EspoCRM address field](../../_static/images/espocrm-extensions/map-plus/search-place-auto.png)
![address field new options](../../_static/images/espocrm-extensions/map-plus/address-field-new-options.png)
---

## Prerequisites

- Ebla Map Plus installed with a valid Google Maps API key.
- **Maps JavaScript API** and **Places API** enabled in Google Cloud.
- The address field must not have **Places API Disabled** enabled.

---

## What Gets Filled Automatically

When a user selects a Google Places suggestion, the extension can populate:

- Street
- City
- State / Province
- Country
- Postal Code
- Latitude
- Longitude
- Address `data` JSON with Google place details
- `geocodeType` as exact place data from the Places response

---

## How It Works

1. Open any record in edit mode.
2. Focus the address field and use the search bar shown above the address inputs.
3. Type a place name, street, or establishment.
4. Select a suggestion from Google Places.
5. Review the populated values and save the record.

The extension can also use the browser's geolocation API through the location button to detect the user's current position and reverse-fill the address field.

---

## Address Field Parameters

The enhanced address field includes these extension-specific parameters:

| Parameter | Description |
| --- | --- |
| `placesApiDisabled` | Disables the autocomplete and Google Places enhancements for that address field. |
| `showCoordinates` | Shows the latitude and longitude inputs directly in the address editor and in read mode. |
| `geocodeButton` | Adds a manual geocode button in read mode so users can fetch or refresh geocoded data for that address. |

![Address field parameters in the field editor](../../_static/images/espocrm-extensions/map-plus/adress-field-params.png)
---

## Google Maps Integration Settings

These global integration options directly affect autocomplete behavior:

| Setting | Description |
| --- | --- |
| `language` | Forces the response language for Places and other Google requests. |
| `autocompleteRestrictedCountries` | Limits autocomplete results to specific ISO country codes. |
| `countryName` | Stores country values in short or long format. |
| `stateName` | Stores state values in short or long format. |
| `cityName` | Stores city values in short or long format. |
| `restrictCountrySelection` | Validates the selected country against the configured country restriction list. |

---

## Restricting Autocomplete by Country

To limit suggestions to specific countries:

1. Navigate to **Administration** -> **Integrations** -> **Google Maps**.
2. Set **Autocomplete Restricted Countries** to the ISO 3166-1 alpha-2 country codes you want to allow, for example `tr`, `us`, or `de`.
3. Save.

If **Restrict Country Selection** is enabled, users can only save country values that belong to this allowed list.

---

## Additional Address Actions

- **Locate Current Position**: Uses browser geolocation to fill the address from the user's current location.
- **Pull from Google**: When coordinates already exist, the field can pull address components back from Google and overwrite the current street, city, state, country, and postal code values.

---

## See Also

- [Latitude and Longitude (Geocoding)](latitude-and-longitude.md)
- [Map View](map-view.md)
- [Select on Map](select-on-map.md)
