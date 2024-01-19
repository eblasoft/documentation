# Infinity Scroll  <a href="https://www.eblasoft.com.tr/espocrm-extension-page/infinity-scroll" target="_blank" id="ext-version"></a>


> Auto show more when scroll end on list records screens in EspoCRM is available in [Ebla Infinity Scroll](https://www.eblasoft.com.tr/espocrm-extension-page/infinity-scroll).


---


![Infinity Scroll](../../_static/images/extensions/infinity-scroll/infinity-scroll.png)


---

**<font color=gray> [Changelog](changelog.md) </font>**


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=64b2dc6b829bca7bf';
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