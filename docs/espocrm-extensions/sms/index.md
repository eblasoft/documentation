---
icon: material/message-processing
status: featured
title: Ebla SMS - EspoCRM
description: Send single, list, and campaign SMS messages from EspoCRM with templates, reply actions, and provider-based delivery.
---

# Ebla SMS for EspoCRM <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-ebla-sms" target="_blank" id="ext-version" data-id="64a6d717d1ec80e20"></a>

## Overview

**Ebla SMS** adds practical SMS flows directly into EspoCRM records and lists. Users can send from a single record, send in bulk from list views, send to Target Lists, and run SMS campaigns from Campaign records.

The extension also adds reply actions for inbound SMS records and supports template-based message bodies.

!!! note
    For platform-level behavior, see the official EspoCRM guide: [SMS Sending](https://docs.espocrm.com/administration/sms-sending/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/3h33dL8lhZM" title="Ebla SMS for EspoCRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

<!-- DOC:FEATURES START -->

## Key Features

- **Send SMS from record detail**: SMS compose is available from record detail (activity create menu and related actions), then it sends immediately.
- **Mass action from list view**: Use **Send SMS** in list mass actions for entity types that have a `phoneNumber` field.
- **Target List action**: Send SMS directly from a Target List using the detail action.
- **SMS entity quick create**: The SMS list includes a custom **Create** action that opens a lightweight `compose` form.
- **Reply actions for inbound SMS**: Reply from SMS detail and list row actions when the sender number exists.
- **Template-based content**: Pick an Email Template as an SMS template and inject parsed content into the body.
- **Campaign type `Sms`**: Campaigns support SMS setup with target lists, excluding target lists, template selection, and optional sent-SMS storage.

<!-- DOC:FEATURES END -->

---

<!-- DOC:CONFIGURATION START -->

## Configuration

### 1) Configure provider and sender defaults

1. Open **Administration -> Integrations** and configure the credentials for your SMS provider.
2. Open **Administration -> Settings**:
   - Set **SMS Provider** (`smsProvider`).
   - Set **Outbound SMS From Number** (`outboundSmsFromNumber`) if your provider requires a default sender number.

If no provider is configured, SMS sending will fail at runtime.

### 2) Supported providers in this branch

The current provider registry includes:

- Twilio
- Spryng
- Sms77
- Smstools
- SerwerSms
- Verimor
- GatewayAPI
- Eblasoft

### 3) Permissions

Users need **create** permission on the **Sms** scope to see and use send actions.

### 4) Where the Send SMS action is visible

The extension does **not** add a dedicated header button on Contact detail by default.

Available entry points and conditions:

- **Contact/Lead/Account/Case detail**: Use the **Activity panel create menu** (SMS item appears when SMS is enabled in activities and the user has SMS create permission).
- **Target List detail**: **Send SMS** detail action is shown only when:
  - `smsProvider` is not `none`, and
  - user has **create** permission on **Sms** scope.
- **List mass action**: **Send SMS** mass action is shown only when:
  - the entity has a `phoneNumber` field in metadata, and
  - user has **create** permission on **Sms** scope.

<!-- DOC:CONFIGURATION END -->

---

<!-- DOC:USAGE START -->

## Usage

### Send from a Contact detail record

1. Open a **Contact** record.
2. In the **Activities** panel, open the create dropdown and choose the SMS option.
3. Confirm **From**, **To**, template/body, then send.

!!! warning
    You may not see SMS on Contact detail if the user lacks **Sms:create** permission or if SMS is not present in Activities configuration.

### Send from a record

1. Open a record (Contact, Lead, Account, Case, or another entity with phone data).
2. Open SMS from an available record-level entry point.
3. Confirm **From**, **To**, template/body, then `send`.

The compose dialog can auto-fill mobile numbers from the parent record.

### Send from list mass action

1. Open a list view for an entity that has a `phoneNumber` field.
2. Select records and choose **Mass Actions -> Send SMS**.
3. Review detected phone numbers and send.

If no numbers are found, the UI shows a warning.

!!! note
    Mass send lookup only includes **valid Mobile** phone numbers.

### Send from Target List

1. Open a **Target List** record.
2. Use the **Send SMS** detail action.
3. Select template/body and send.

### Reply to incoming SMS

- On SMS detail, use **Reply**.
- On SMS list rows, use **Reply** row action.

Reply is shown only when the inbound sender number is available on the SMS record.

### Use template mode in compose

- Choose **Select Template** to inject processed template content.
- When a template is selected, the body is locked to prevent accidental edits.
- Clearing the template unlocks the body again.

<!-- DOC:USAGE END -->

---

<!-- DOC:ADVANCED START -->

## Advanced Features

### SMS campaign processing

- Campaign **Type** supports `Sms`.
- `targetLists` are required for `Sms` campaigns.
- Scheduled job **Process Mass Sms** runs at `10,30,50 * * * *`.
- Eligible campaigns are `Active`, `type = Sms`, and `startDate <= now`.
- Recipients are deduplicated by target and phone number; opted-out records are skipped.
- `storeSentSms` controls whether sent SMS entities are stored for campaign sends.

### SMS statuses in the extension

`Draft`, `Sending`, `Sent`, `Archived`, `Failed`, `Received`

<!-- DOC:ADVANCED END -->

---

<!-- DOC:CHANGELOG START -->

## Changelog

<div class="change-log-wrapper" data-id="64a6d717d1ec80e20"></div>

<!-- DOC:CHANGELOG END -->

---

<!-- DOC:SUPPORT START -->

## Support and Feedback

- Open a ticket via the [Eblasoft support portal](https://portal.eblasoft.com.tr) with license details.
- Include your provider name and sample error details when reporting SMS delivery issues.

<!-- DOC:SUPPORT END -->
