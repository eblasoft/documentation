# Event Plus <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-event-plus" target="_blank" id="ext-version"></a>

> New Entity Template "Event Plus" that have Event and BasePlus features together is available
> in [Ebla Event Plus](https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-ebla-event-plus).

---

![Event Plus](../../_static/images/extensions/event-plus/event-plus.png)

---

1. Go to **Administration** -> **Entity Manager** -> **Create Entity** -> **Event Plus**.

![Event Plus](../../_static/images/extensions/event-plus/event-plus-op.png)

<br>

**<font color=gray> [Changelog](changelog.md) </font>**



<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=638eecaa872b85729';
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