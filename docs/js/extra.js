document.addEventListener("DOMContentLoaded", function () {
    loadNavpane();
});

function loadNavpane() {
    var width = window.innerWidth;
    if (width <= 1200) {
        return;
    }

    var activeEls = document.getElementsByClassName('md-nav__item--active');

    for (var i = 0; i < activeEls.length; i++) {
        var navEl = activeEls.item(i);
        var toggleEl = navEl.getElementsByClassName('md-nav__toggle')[0] || null;
        if (toggleEl) {
            toggleEl.checked = true;
        }
    }
}

async function fetchData() {
    const $extVersion = document.getElementById("ext-version");

    // get id from  $extVersion
    const id = $extVersion.getAttribute("data-id");
    console.log($extVersion);
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=' + id;
    const response = await fetch(url);
    const data = await response.json();

    const {version} = data;
    const badgeUrl = `https://img.shields.io/badge/version-${version}-green`;

    const badgeImg = document.createElement("img");
    badgeImg.src = badgeUrl;
    badgeImg.style = "height: 22px; margin-left: 10px;";


    $extVersion.appendChild(badgeImg);
}

fetchData();