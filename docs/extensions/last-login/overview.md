# Last Login  <a href="https://www.eblasoft.com.tr/espocrm-extension-page/last-login" target="_blank" id="ext-version"></a>


 > Add date-time column to user entity show last login time in EspoCRM is available
> in [Ebla Last Login](https://www.eblasoft.com.tr/espocrm-extension-page/last-login).


---

![Last Login](../../_static/images/extensions/last-login/last-login.png)


<br>

**<font color=gray> [Changelog](changelog.md) </font>**


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=64ef04e1cce6f0281';
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