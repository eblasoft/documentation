# Switch <a href="https://www.eblasoft.com.tr/espocrm-extension-page/switch" target="_blank" id="ext-version"></a>

> Bool fields as toggle buttons in EspoCRM is available in [Ebla Switch](https://www.eblasoft.com.tr/espocrm-extension-page/switch).

---

![Switch](../../_static/images/extensions/switch/switch.png)

---

1. Go to **Administration** -> **Entity Manager** -> **{Entity Type}** -> **Fields** -> **Create Field type (Bool)** -> **Display As Switch**.

![Switch](../../_static/images/extensions/switch/switch-op.png)

<br>

**<font color=gray> [Changelog](changelog.md) </font>**


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=63903277397107cc5';
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