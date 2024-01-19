# Category Tree <a href="https://www.eblasoft.com.tr/espocrm-extension-page/category-tree" target="_blank" id="ext-version"></a>

> **Category Tree** is a new template entity that allows you to create a tree of categories and subcategories.
> It is a very useful entity for creating a tree of categories and subcategories for any entity in the system in EspoCRM.
> Is available in [Ebla Category Tree](https://www.eblasoft.com.tr/espocrm-extension-page/category-tree).


---

![Category Tree](../../_static/images/extensions/category-tree/category-tree.png)

---

1. Go to **Administration** -> **Entity Manager** -> **Create Entity** -> **Category Tree**.


![Category Tree](../../_static/images/extensions/category-tree/category-tree-op.png)



<br>


**<font color=gray> [Changelog](changelog.md) </font>**



<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=65487e0be0f573008';
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