# Quick Assign <a href="https://www.eblasoft.com.tr/espocrm-extension-page/quick-assign" target="_blank" id="ext-version"></a>

> It is a tool that allows you to assign multiple record to a user in one click.
> Quick Assign It is available in [Ebla Quick Assign](https://www.eblasoft.com.tr/espocrm-extension-page/quick-assign).


---


![Quick Assign](../../_static/images/extensions/quick-assign/quick-assign.png)

<br>

![Quick Assign](../../_static/images/extensions/quick-assign/quick-assign-1.png)

---

1. new action **Assign to User**.
2. new action **Assign to Me**.

![Quick Assign](../../_static/images/extensions/quick-assign/quick-assign-op.png)

<br>

**<font color=gray> [Changelog](changelog.md) </font>**


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=64be50a26090b021e';
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