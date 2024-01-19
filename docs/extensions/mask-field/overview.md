# Mask Field  <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-mask-field" target="_blank" id="ext-version"></a>


> Ability set mask input for any existing varchar field (Phone & Varchar) in addition to the new fields in EspoCRM.
> is available in [Ebla Mask Field](https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-mask-field).

---

<iframe width="650" height="315" src="https://www.youtube.com/embed/q1HM6IPTw_w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<br>

**<font color=gray> [Changelog](changelog.md) </font>**


![mask field](../../_static/images/extensions/mask-field/mask-field.png)



---

Go to **Administration** -> **Entity Manager** -> **{Entity Type}** -> **Fields(Varchar & Phone)**.

![mask field op](../../_static/images/extensions/mask-field/mask-field-op.png)


<br>

### <font color=gray> [ChangeLog](changelog.md) </font>


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=63495a03a6ca8d16c';
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






