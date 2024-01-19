# Add Custom Links with Tabs <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-navigation-pro" target="_blank" id="ext-version"></a>

>Ability to add custom links to navigation menu in EspoCRM is available
in [Ebla Navigation Pro](https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-navigation-pro).

---

![custom-link](../../_static/images/extensions/nav-pro/custom-link.png)

---

go to **Administration** -> **User Interface** -> **Navbar** -> **Add Custom Link** .

![custom link op](../../_static/images/extensions/nav-pro/custom-link-op.png)


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=6368dc68d112fabca';
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