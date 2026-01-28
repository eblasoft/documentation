---
icon: material/message-processing
title: EspoCRM SMS - Ebla SMS Documentation 
description: Send SMS messages directly from records detail & list views using integrated SMS gateways and more.
---

# Ebla SMS for EspoCRM <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-ebla-sms" target="_blank" id="ext-version" data-id="64a6d717d1ec80e20"></a>

## Overview
**Ebla SMS** is an extension for EspoCRM that allows users to send SMS messages from record detail and list views, manage SMS communications, and create SMS campaigns using various supported SMS gateways.

!!! note
    Read more about [EspoCRM SMS Sending](https://docs.espocrm.com/administration/sms-sending/).


## Features

### Enable SMS Entity
Ability to manage SMS entity within EspoCRM entity manager. Some projects may require customizations or additional relationships.

### Mass SMS Sending
Mass action on list views to send SMS messages to multiple records at once (Contacts, Leads, Accounts, etc.).

![Mass SMS Send](../../_static/images/espocrm-extensions/sms/mass-sms.png )

### SMS Templates
Same as Email Templates, you can create SMS templates to reuse them while sending messages.

### Add SMS in Activity Panel
Ability to send SMS in the Activity panel of records. Similar to calls and emails.

![SMS Activity Panel](../../_static/images/espocrm-extensions/sms/activity-panel.png )

### View SMS messages in History panel

![SMS History Panel](../../_static/images/espocrm-extensions/sms/history-panel.png )

### Create Sms Button in SMS Entity
Enables a "Create Sms" button in the SMS list view to quickly send a new SMS to a specific number.

![Create SMS Button](../../_static/images/espocrm-extensions/sms/create-sms-button.png )

### Campaigns of type "Message"
Ability to create campaigns of type "Message" to send SMS messages to a target list And schedule jobs to send messages to target lists within SMS campaigns.

![SMS Campaign](../../_static/images/espocrm-extensions/sms/sms-campaign.png )

### Reply Button for Incoming Messages
A "Reply" button is available for incoming messages in the SMS entity, allowing users to respond directly from the SMS record view.

![SMS Reply Button](../../_static/images/espocrm-extensions/sms/reply-button.png )


## Installation
1. **Administration -> Integration** – Configure your SMS provider by entering required credentials.
2. Go to **Administration -> SMS** – Select the SMS provider and specify the **From Number** if needed.

![SMS Provider](../../_static/images/espocrm-extensions/sms/sms-provider.png )

Supported SMS Providers:
> - Twilio
> - Spryng
> - sms77
> - smstools
> - SerwerSms
> - Verimor


## ChangeLog

<div class="change-log-wrapper" data-id="64a6d717d1ec80e20"></div>