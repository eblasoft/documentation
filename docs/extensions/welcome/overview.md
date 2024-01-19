# Welcome Message <a href="https://www.eblasoft.com.tr/espocrm-extension-page/welcome-user-on-navbar" target="_blank" id="ext-version"></a>

>  To display translatable welcome message on the top navbar in EspoCRM is available in [Ebla Welcome Message](https://www.eblasoft.com.tr/espocrm-extension-page/welcome-user-on-navbar).

---

![Welcome Message](../../_static/images/extensions/welcome/welcome.png)


---
For edit welcome message go to **Administration** -> **Label Manager** -> **Global** -> **labels** -> **welcomeMessage**.

---
![Welcome Message](../../_static/images/extensions/welcome/welcome-op.png)


<br>

**<font color=gray> [Changelog](changelog.md) </font>**


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=63495a03a32782774';
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