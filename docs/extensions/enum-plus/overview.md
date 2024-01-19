# Enum Plus <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-enum-plus" target="_blank" id="ext-version"></a>

Enhancing (Enum Multi-Enum) field functionality with additional features in EspoCRM.

---

<iframe width="650" height="315" src="https://www.youtube.com/embed/v4LZkH17A2k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

**<font color=gray> [Changelog](changelog.md) </font>**


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=638999ce6d3bbcd76';
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