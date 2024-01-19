# Reactions Field <a href="https://www.eblasoft.com.tr/espocrm-extension-page/reactions" target="_blank" id="ext-version"></a>

> Reactions field is new field type for EspoCRM is available
> in [Ebla Reactions](https://www.eblasoft.com.tr/espocrm-extension-page/reactions).

---

![Reactions](../../_static/images/extensions/reactions/reactions.png)

---

1. Go to **Administration** -> **Entity Manager** -> **{Entity Type}** -> **Fields** -> **Create Field type Reactions(
   emoji)**.
2. Select **type** as **Emoji Reactions**.

---

![Reactions](../../_static/images/extensions/reactions/reactions-op.png)

<br>

**<font color=gray> [Changelog](changelog.md) </font>**

<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=636ce5a5c0c107e82';
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