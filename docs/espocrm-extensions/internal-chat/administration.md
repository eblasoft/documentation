---
icon: material/cog
title: Administration - Internal Chat
description: Access modes, feature toggles, limits, integrations, and user settings for Internal Chat.
---

# Administration

Most extension behavior is controlled from `Administration => Internal Chat`.

[Image placeholder: Administration settings]

---

## Settings Layout

The administration screen is organized into these areas:

- Access
- Editing & Deletion
- Polling
- User Search
- Limits
- Conversation Features
- Message Features
- General Features

This keeps access rules, limits, and feature toggles in one place without spreading configuration across multiple screens.

---

## What You Can Control

From `Administration => Internal Chat`, administrators can control:

- who can access the chat internally and in the portal
- whether user and team lookups follow EspoCRM ACL or use the extension's ignore-ACL lookup mode
- edit and delete grace periods
- room and room-list polling intervals
- message length and attachment limits
- allowed attachment types and insert-from-source options
- conversation features such as pinning, hiding, muting, deleting, and team-based group creation
- message features such as reactions, reply, forward, stars, threads, quick reactions, and broadcast mentions
- general features such as emoji button, attachments, GIF picker, custom statuses, typing indicators, read receipts, polls, scheduled messages, record previews, and portal support

---

## Access and Permissions

If **Access Mode** or **Portal Access Mode** is left on EspoCRM ACL, access follows the `InternalChat` scope permission in roles.

The lookup settings also matter for how the new conversation screen behaves:

- internal user lookup
- portal user lookup
- team lookup

These options determine whether chat selection follows normal EspoCRM ACL visibility or uses the extension's ignore-ACL lookup mode.

---

## User Settings

Users can open the chat settings screen and adjust:

- sound notifications
- popup notification mode
- floating widget visibility
- notification badge pulsation
- conversation list mode
- emoji skin tone

These are personal preferences, separate from the admin feature toggles.

---

## Integrations and Operational Notes

- `Administration => Integrations => Klipy` is used only for the GIF picker.
- The installer creates the required Internal Chat scheduled jobs automatically.
- Scheduled jobs must be running if you want scheduled messages and automatic custom-status expiry to work.
- The Event action depends on both the chat setting and the user's calendar create permission.

---

## See Also

- [Internal Chat Overview](index.md)
- [Conversations & Messaging](conversations-and-messaging.md)
- [Collaboration Features](collaboration-features.md)
