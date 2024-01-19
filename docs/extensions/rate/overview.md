# Ebla Rate. <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-rate-field" target="_blank" id="ext-version"></a>

> adding new field type **Rate Field**, to allow EspoCRM users easily seat and read rates,
> is available in [Ebla Rate](https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-rate-field).

---

<iframe width="650" height="315" src="https://www.youtube.com/embed/C505B7OBZmM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![Rate Field](../../_static/images/extensions/ebla-rate/rate.png)


---

1. go to **Admin** -> **Entity Manager** -> **{Entity Type}** -> **Fields** -> **Add Field** -> **Rate field**.

![Rate Field](../../_static/images/extensions/ebla-rate/rate-op.png)

<br>

### <font color=gray> [ChangeLog](changelog.md) </font>


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=63495a03a877d5a9a';
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