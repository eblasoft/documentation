# Ebla Chat  <a href="https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-chat" target="_blank" id="ext-version"></a>

> Ebla Chat for dialog with users in internal system is available
> in [Ebla Chat](https://www.eblasoft.com.tr/espocrm-extension-page/espocrm-chat).

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/1gKOLniE9Xg?si=LgmgPSszstREs6jr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

![Ebla Chat](../../_static/images/extensions/ebla-chat/setting-up/ebla-chat.png)

---

go to **Roles** -> enable access to **Dialog**  .

![role](../../_static/images/extensions/ebla-chat/setting-up/role.png)


<br>

### <font color=gray> [ChangeLog](changelog.md) </font>


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=63495a03a58d3019b';
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