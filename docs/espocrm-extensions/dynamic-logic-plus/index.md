---
icon: material/function-variant
title: Ebla Dynamic Logic Plus - EspoCRM
description: Associated links for auto-fill & filtering, cascade remove links, prevent deletion when links not empty, and automatic formula recalculation.
---

# Ebla Dynamic Logic Plus <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-dynamic-logic-plus" target="_blank" id="ext-version" data-id="637e00a0087ede84b"></a>

> Advanced relationship logic and data integrity controls for EspoCRM

<!-- DOC:OVERVIEW START -->

## Overview

**Ebla Dynamic Logic Plus** extends EspoCRM's relationship management capabilities with intelligent auto-fill, cascade operations, deletion protection, and automatic formula recalculation. Define sophisticated relationship rules without custom code, ensuring data consistency and improving user productivity through automated workflows.

<!-- DOC:OVERVIEW END -->

<iframe width="560" height="315" src="https://www.youtube.com/embed/bkz9Wwbsh7c?si=CzitRzJtPzl7G7ZG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!-- DOC:USE-CASES START -->

## Use Cases

1. **Automated Account Filling** – Select a Contact and automatically populate the related Account field, reducing data entry time.

2. **Project Data Cleanup** – Delete a Project and automatically remove all linked Tasks, preventing orphaned records.

3. **Data Integrity Protection** – Prevent deletion of Accounts with active Contacts, ensuring critical relationships aren't accidentally broken.

4. **Order Total Recalculation** – Update an Order Item's quantity and automatically recalculate the parent Order's total through formula execution.

5. **Customer Hierarchy Management** – Filter Opportunities by selected Account's parent company, maintaining proper organizational structure.

6. **Invoice Processing** – Delete a parent Invoice and cascade remove all associated Line Items and Payment records automatically.

<!-- DOC:USE-CASES END -->

<!-- DOC:FEATURES START -->

## Key Features

- **Associated Links**: Define relationship conditions that auto-fill related fields based on link selections, with optional hidden filters for seamless UX.
- **Cascade Remove**: Automatically delete linked child records when parent entities are removed, maintaining database cleanliness.
- **Deletion Protection**: Enforce data integrity by preventing record deletion when specific relationships contain linked items.
- **Cascade Updaters**: Trigger automatic formula recalculation on parent entities when child entity fields are modified.

<!-- DOC:FEATURES END -->

## Configuration

Access Dynamic Logic Plus settings via **Administration** → **Entity Manager** → select entity → **Dynamic Logic Plus** button.

![Dynamic Logic Plus Configuration](../../_static/images/espocrm-extensions/dynamic-logic-plus/dynamic-logic-plus-button.png)

### Associated Links

Define relationship conditions to auto-populate fields based on link selections. When selecting a Contact, automatically fill the Account field with the Contact's associated Account.

![Associated Links Configuration](../../_static/images/espocrm-extensions/dynamic-logic-plus/dynamic-logic-plus-associated-links.png)

!!! note
    Enable "Hidden Filter" option to auto-fill without showing filter UI to users.

### Cascade Remove

Configure automatic deletion of child records when parent entities are removed. When a Project is deleted, all linked Tasks are automatically removed.

![Cascade Remove Configuration](../../_static/images/espocrm-extensions/dynamic-logic-plus/dynamic-logic-plus-cascade-remove.png)

### Deletion Protection

Prevent entity deletion when specified relationships contain linked records. Block Account deletion if any Contacts are still linked.

![Links Must Be Empty Configuration](../../_static/images/espocrm-extensions/dynamic-logic-plus/dynamic-logic-plus-links-must-be-empty-before-remove.png)

### Cascade Updaters

Trigger parent entity formula recalculation when child records change. When Order Item quantity changes, automatically recalculate the Order total.

![Cascade Updaters Configuration](../../_static/images/espocrm-extensions/dynamic-logic-plus/dynamic-logic-plus-cascade-updaters.png)

**Example**: Order entity has a `total` formula field that sums linked Order Items. Configure Cascade Updater to recalculate Order formula when Order Item's `quantity`, `unitPrice`, or `lineTotal` fields are modified.

See [detailed configuration example](./dynamic-logic-plus-example.md) for step-by-step setup instructions.

---

## Support and Feedback

Need assistance or have suggestions? Contact us through our [support portal](https://portal.eblasoft.com.tr/) or email support@eblasoft.com.tr.

---

## Changelog <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-dynamic-logic-plus#changelog" target="_blank"></a>

<div class="change-log-wrapper" data-id="637e00a0087ede84b"></div>
