# Iframe Field <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-i-frame-field" target="_blank" id="ext-version"></a>

> Iframe field available in [Ebla Iframe](https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-i-frame-field).
> It allows you to embed external web pages into EspoCRM.
---

![Iframe Field](../../_static/images/extensions/iframe/iframe-field.png)

---

1. Go to **Administration** -> **Entity Manager** -> **{Entity Type}** -> **Fields** .
2. Create a new field with type **Iframe**.


![Iframe Field](../../_static/images/extensions/iframe/iframe-field-op.png)


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=636cc88fe277a3f69';
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