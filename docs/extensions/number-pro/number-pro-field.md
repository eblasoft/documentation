# Number Pro Field <a href="https://www.eblasoft.com.tr/espocrm-extension-page/number-pro" target="_blank" id="ext-version"></a>

> Auto Increment (**Number Pro field**) available
> in [Ebla Number Pro](https://www.eblasoft.com.tr/espocrm-extension-page/number-pro).


---

![Number Pro Field](../../_static/images/extensions/number-pro/number-pro-field.png)

---

1. Go to **Administration** -> **Entity Manager** -> **{Entity Type}** -> **Fields** .
2. Create a new field with type **Number Pro**.

![Number Pro Field](../../_static/images/extensions/number-pro/number-pro-field-op.png)


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=64c26b6e0a7a7f3f7';
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