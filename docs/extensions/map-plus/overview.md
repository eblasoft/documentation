# Map Field <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-map-extension" target="_blank" id="ext-version"></a>

> This extension enhances the existing **address** field type in EspoCRM.
> is available in [Ebla Map Plus](https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-map-extension).


<br>
<iframe width="650" height="315" src=" https://www.youtube.com/embed/Cu9MdF8_LVM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>

---

### Setup

1. You need to [get your API Key](https://developers.google.com/maps/documentation/places/web-service/get-api-key) .

2. Go to **Administration** -> **Integrations** -> **Google Maps**.

![API Key](../../_static/images/extensions/map-plus/api-key.png)

<br>

### <font color=gray> [ChangeLog](changelog.md) </font>


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=636c9732e830bebeb';
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

