# Labels Cells  <a href="https://www.eblasoft.com.tr/espocrm-extension-page/labels-cells" target="_blank" id="ext-version"></a>


> add 2 new types of fields to the field manager **Header Text** and **Rich Text Label** in EspoCRM.
> Is available in [Ebla Labels Cells](https://www.eblasoft.com.tr/espocrm-extension-page/labels-cells).

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WNv7JVXK_tQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

1- [**Header Text**](header-text.md) .

2- [**Rich Text Label**](rich-text-label.md).

!!! note "Note"

        Those fields are **not storable**, means that no database space will losed.


<br>

**<font color=gray> [Changelog](changelog.md) </font>**


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=63495a03a2759db51';
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