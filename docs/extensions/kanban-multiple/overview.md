# Kanban Multiple  <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-kanban-multiple" target="_blank" id="ext-version"></a>


> Ability of switching between fields in kanban view in EspoCRM is available
> in [Ebla Kanban Multiple](https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-kanban-multiple).


---

![Kanban Multiple](../../_static/images/extensions/kanban-multiple/kanban.png)


---

1. go to **Admin** -> **Entity Manager** -> **{Entity Type}** -> **Kanban Status Fields** .

![Kanban Multiple](../../_static/images/extensions/kanban-multiple/kanban-op.png)



**<font color=gray> [Changelog](changelog.md) </font>**

<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=6362632594cb80dd7';
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