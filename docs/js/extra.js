document.addEventListener("DOMContentLoaded", function () {
    loadNavpane();
    loadChangeLog();
    fetchData();
    iframeClass();
});

function loadChangeLog() {
    const $changeLogWrapper = document.querySelector('div.change-log-wrapper');
    if (!$changeLogWrapper) {
        return;
    }

    const extId = $changeLogWrapper.getAttribute("data-id");
    const remoteUrl = `https://crm.eblasoft.com.tr/?entryPoint=changeLog&exId=${extId}`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', remoteUrl, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            $changeLogWrapper.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

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

    if (!$extVersion) {
        return;
    }

    const id = $extVersion.getAttribute("data-id");
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=' + id;
    const response = await fetch(url);
    const data = await response.json();

    const {version} = data;
    const badgeUrl = `https://img.shields.io/badge/version-${version}-green`;

    const badgeImg = document.createElement("img");
    badgeImg.src = badgeUrl;
    badgeImg.classList.add('ext-badge');

    $extVersion.appendChild(badgeImg);
}

function iframeClass() {
    // Check if the page is in an iframe, add class to body
    if (window.self !== window.top) {
        document.body.classList.add('in-iframe');
    }
}
