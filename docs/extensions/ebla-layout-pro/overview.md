# <a href="https://www.eblasoft.com.tr/espocrm-extension-page/ebla-layout-pro" target="_blank" id="ext-version"></a>

> This extension enhances the capabilities of EspoCRM's layout manager by incorporating the
> robust [Bootstrap 12-column](https://getbootstrap.com/docs/3.3/css/#grid-example-basic) grid system
> into the detail view.

<iframe width="650" height="315" src="https://www.youtube.com/embed/ROrpILorBZk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

### <font color=gray> [ChangeLog](changelog.md) </font>

<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=63495a03a8d5865fe';
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