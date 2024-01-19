# Work Log  <a href="https://www.eblasoft.com.tr/espocrm-extension-page//work-log" target="_blank" id="ext-version"></a>

> Recording the user's daily working hours in EspoCRM.
> Modify user status to online/offline.
> Work Log is available in [Ebla Work Log](https://www.eblasoft.com.tr/espocrm-extension-page/work-log).


---

<iframe width="650" height="315" src="https://www.youtube.com/embed/kg95tBnObAI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

**<font color=gray> [Changelog](changelog.md) </font>**

<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=64a5599f1767c748d';
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