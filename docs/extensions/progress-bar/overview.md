# Progress Bar <a href="https://www.eblasoft.com.tr/espocrm-extension-page/progress-bar" target="_blank" id="ext-version"></a>

> Progress bar is a simple extension that allows you to display a progress bar in your fields type(**Integer , Float ,
> Currency**) in the (**List, Detail**)  view in EspoCRM is available
> in [Ebla Progress Bar](https://www.eblasoft.com.tr/espocrm-extension-page/progress-bar).

---

![Progress Bar](../../_static/images/extensions/progress-bar/progress-bar.png)

---

1. Go to **Administration** -> **Entity Manager** -> **{Entity Type}** -> **Fields** -> **Create Field type (Integer ,
   Float , Currency)** -> **Display As Progress Bar**.

![Progress Bar](../../_static/images/extensions/progress-bar/progress-bar-op.png)

<br>

**<font color=gray> [Changelog](changelog.md) </font>**


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=644bee41b754077c2';
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