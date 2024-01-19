# Admin Pro <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-admin-pro" target="_blank" id="ext-version"></a>

> Limit admin user permissions is available
> in [Ebla Admin Pro](https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-admin-pro).

---
<iframe width="650" height="315" src="https://www.youtube.com/embed/gU2M3RjxOPs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

## Features

* [Limit admin user permissions.](limit-admin-user-permissions.md)
* [Max allowed logins.](max-allowed-logins.md)
* [Hide system scopes from admin UI.](hide-system-scopes-from-admin-ui.md)
* [Show permissions for specific (**user role**) calculated.](show-permissions-for-specific-user-calculated.md)

<br>

### <font color=gray> [ChangeLog](changelog.md) </font>

<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=636514b37aee0f43f';
    const response = await fetch(url);
    const data = await response.json();
    
    const {version} = data;
    const badgeUrl = `https://img.shields.io/badge/version-${version}-green`;
    
    const badgeImg = document.createElement("img");
    badgeImg.src = badgeUrl;
    badgeImg.style = "height: 22px; margin-left: 10px;";


    document.getElementById("ext-version").appendChild(badgeImg);
}
    fetchData();

</script>
