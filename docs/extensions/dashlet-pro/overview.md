# Dash Pro <a href="https://www.eblasoft.com.tr/espocrm-extension-page/dash-pro" target="_blank" id="ext-version"></a>

> It is a new Dashlet in EspoCRM **Wysiwyg  (free html)**
> Dash Pro is available in [Ebla Dash Pro](https://www.eblasoft.com.tr/espocrm-extension-page/dash-pro).

---

![Dash Pro](../../_static/images/extensions/dashlet-pro/dash-pro.png)

<br>

![Dash Pro](../../_static/images/extensions/dashlet-pro/dash-pro-op.png)


<br>

**<font color=gray> [Changelog](changelog.md) </font>**


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=64be3b2a63390fb0a';
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