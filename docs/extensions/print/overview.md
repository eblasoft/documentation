# Print <a href="https://www.espocrm.com/extensions/print/" target="_blank"><img src="../../../docs/assets/extension.png" height="20px;" /></a>

> A new PDF print engine with [gotenberg](https://gotenberg.dev/) in EspoCRM is available
> in [Ebla Print](https://www.eblasoft.com.tr/espocrm-extension-page/print).
> Full support for HTML5 & css3

---

**<font color=gray> [Changelog](changelog.md) </font>**


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=636b5e37ac9967036';
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