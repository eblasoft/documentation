---
icon: material/shield-lock-open
title: Ebla Admin Pro - EspoCRM
description: Ability to limit admin users permissions to only allow specific administrations functions.
---

# Admin Pro <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-admin-pro" target="_blank" id="ext-version" data-id = "636514b37aee0f43f"></a>

> Limit admin user permissions in EspoCEM is available
> in [Ebla Admin Pro](https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-admin-pro).

---
<iframe width="650" height="315" src="https://www.youtube.com/embed/QG-84UmxYw4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

**Features:**

---
### 1. Hide System Scopes from Admin UI
This feature provides the ability to declutter the administration interface or hide sensitive system scopes from view.

*   **Description**: Hide specific entity scopes (modules) from the Administration panel.
*   **Usage**:
    1.  Go to **Administration > Admin Pro settings**.
    2.  Locate the **Hide system scopes** option (likely a multi-select field).
    3.  Select the scopes you wish to hide from the UI.
    4.  Save the settings.

* ### [Hide system scopes from admin UI.](hide-system-scopes-from-admin-ui.md)


---
### 2. Limit Admin User Permissions
This feature allows you to restrict full administrative privileges for specific admin users. Instead of granting all-or-nothing admin access, you can define exactly which administration functions a user can access.

*   **Description**: Grant specific admin rights (e.g., only "Layout Manager" or "Entity Manager") to a user marked as an administrator.
*   **Usage**:
    1.  Go to **Administration > Users**.
    2.  Select a user and click **Edit**.
    3.  Ensure the user is set as an **Limted Admin**.
    4.  Locate the **Limited Admin Permissions**
    5.  Select the specific administration areas the user is allowed to access.

* ### [Limit admin user permissions.](limit-admin-user-permissions.md)

---

### 3. Max Allowed Logins
Enhance security and manage resource usage by limiting concurrent user sessions.

*   **Description**: Set a maximum number of active sessions allowed per user. If a user exceeds this limit, their oldest session is automatically terminated.
*   **Usage**:
    1.  Go to **Administration > Admin Pro settings**.
    2.  Locate the **Max allowed logins** field.
    3.  Enter a number (e.g., `3`).
    4.  **Note**: If set to `0` or left empty, no limitation is applied.


* ### [Max allowed logins.](max-allowed-logins.md)

---

### 4. Max User Count for Limited Admin

This feature allows you to control how many users a Limited Admin can create, helping prevent uncontrolled user growth and enforce organizational limits.

*   **Description**: Define the maximum number of users that a Limited Admin is allowed to create. Once the limit is reached, the Limited Admin will no longer be able to create new users.

*   **Usage**:

    1.  Go to Administration > Users.
    2.  Select a user with Limited Admin enabled.
    3.  Locate the Max User Count field.
    4.  Enter the maximum number of users this Limited Admin can create.
    5.  Save the user record.

*  **Note**:
    If the value is set to 0 or left empty, no limitation will be applied.

* ### [Max user count for limited admin.](max-user-count.md)

---

### 5. Import Scope for Limited Admin

This feature allows you to restrict which entity scopes a Limited Admin is allowed to import data into.

*  **Description**: Define specific scopes (entities) that a Limited Admin can perform import operations on. This ensures better data control and prevents unauthorized bulk imports.

*  **Usage**:

    1.  Go to Administration > Users.
    2.  Select a user with Limited Admin enabled.
    3.  Locate the Import Scope field.
    4.  Select the scopes that this Limited Admin is allowed to import data into.
    5.  Save the user record.

*  **Note**:
    If no scope is selected, the Limited Admin will not be able to perform any import operations.

* ### [Import scope for limited admin.](import-scope.md)

---

### 6. Allow Read Real Admins

This feature allows Limited Admin users to read (view) Real Admin users, which is useful in scenarios such as tagging administrators in the stream.

*  **Description**: Enable Limited Admins to view Real Admin user records. Without this permission, Real Admin users may not be visible to Limited Admins in certain contexts.

*  **Usage**:

    1.  Go to Administration > Users.
    2.  Select a user with Limited Admin enabled.
    3.  Locate the Limited Admin Permissions field.
    4.  Add Allow Read Real Admins to the permissions list.
    5.  Save the user record.


* ### [Allow read real admins.](read-real-admin.md)

---

## ChangeLog

<div class="change-log-wrapper" data-id="636514b37aee0f43f"></div>
