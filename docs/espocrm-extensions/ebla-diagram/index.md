---
icon: fontawesome/solid/share-nodes
title: Ebla Diagram - EspoCRM
description: View record relationships as an interactive diagram in EspoCRM.
---

# Ebla Diagram

## Overview

**Ebla Diagram** adds a Diagram mode to record detail pages so users can understand record relationships visually.

From a record, users can switch between **Detail** and **Diagram** and navigate related records directly from the graph.

---

## What users can do

- Open relationship diagrams from supported record detail views.
- Click relationship branches to open related lists.
- Click related nodes to open related records.
- Use quick actions from node context menu.
- Print the current diagram.

---

## Quick Start

1. Go to **Administration -> Entity Manager -> {Entity} -> Diagram**.
2. Enable diagram mode for the entity and save.
3. Open a record and click **Diagram** in the top-right actions.

---

## Configure Diagram

### Open the settings page

1. Go to **Administration -> Entity Manager**.
2. Open the entity you want to configure.
3. Click **Diagram**.

### Settings

#### Diagram Enabled

Turn this on to allow Diagram mode for the entity.

#### Hierarchical Layout

Controls the default layout when users open Diagram mode.

#### Hide Empty Children

Use this to reduce noise in the graph by limiting unnecessary branches.

#### Diagram Excluded Links

Select links you do not want to show in the diagram.

### Recommended setup

1. Enable diagram mode for key entities first.
2. Keep hierarchical layout enabled for easier reading.
3. Exclude large, noisy links.
4. Save and test with real records.

### Permission note

Only administrators can save Diagram settings from Entity Manager.

---

## Use Diagram View

### Open Diagram mode

1. Open a record where diagram mode is enabled.
2. Click **Diagram** from record actions.
3. Click **Detail** any time to return to standard detail view.

### Navigate in the graph

- Click a relationship branch to open the related list.
- Click a related record node to open that record.
- Right-click a record node for quick actions.

### Toolbar actions

#### Change Layout

Switch between hierarchical and free layout.

#### Change Direction

Rotate the diagram direction to improve readability.

#### Print

Print the current diagram as an image snapshot.

### Tips

- Start with records that have meaningful related data.
- If the graph is too dense, ask your admin to exclude extra links.
- Use diagram mode for relationship understanding, then return to detail mode for editing fields.

---

## FAQ and Limitations

### Why do I not see the Diagram button?

Diagram mode is likely disabled for that entity. Ask an administrator to enable it in **Entity Manager -> Diagram**.

### Why are some links missing from the graph?

Your administrator may have excluded those links in Diagram settings.

### Why is the graph crowded?

Ask your administrator to exclude high-volume links and keep the default hierarchical layout enabled.

### Can users edit settings?

No. Diagram settings are managed by administrators.

### Does it work for every relation type?

It depends on how entity links are modeled. If needed, your technical team can review advanced behavior in the developer documentation.

---

## Changelog

<div class="change-log-wrapper" data-id="65c5dc38694d1da71"></div>

