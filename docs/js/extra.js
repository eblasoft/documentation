document.addEventListener("DOMContentLoaded", function () {
    updateWebLink();
    loadNavpane();
    loadChangeLog();
    fetchData();
    iframeClass();
});

function updateWebLink() {
    const linkMap = {
        'dynamic-logic-plus': 'espocrm-dynamic-logic-plus',
        'link-multiple-pro': 'espocrm-link-multiple-inline-form',
        'shared-filter': 'espocrm-shared-filter',
        'ebla-theme': 'espocrm-ebla-theme',
        'mobile-app': 'espocrm-mobile-app-push-notifications-pwa',
        'espocrm-ai': 'espocrm-ai-extension',
        'layout-pro': 'espocrm-layout-pro',
        'public-form': 'public-espocrm-forms',
        'list-pro': 'ebla-list-pro',
        'map-plus': 'espocrm-map-plus',
        // 'ebla-image-plus': 'ebla-image-plus',
        'nav-pro': 'espocrm-navigation-pro',
        'chat': 'espocrm-chat',
        'enum-plus': 'espocrm-enum-plus',
        'iframe-field': 'espocrm-iframe-field',
        'number-pro-field': 'number-pro',
        'sms': 'ebla-sms',
        'dashlet-pro': 'ebla-dash-pro',
        'work-log': 'espocrm-work-log',
        'event-plus': 'espocrm-event-plus',
        'mask-field': 'espocrm-mask-field',
        'admin-pro': 'espocrm-admin-pro',
        'generic-filter': 'espocrm-generic-filter',
        'kanban-multiple': 'espocrm-kanban-multiple',
        'labels-cells': 'labels-cells',
        'welcome': 'welcome-user-on-navbar',
        'stream-plus': 'stream-plus',
        // espocrm-wordpress-contact-7
        'rate': 'espocrm-rate-field',
    }

    const siteUrl = window.location.href;

    const linkParts = siteUrl.split('/');
    linkParts.forEach((part, index) => {
        if (part === 'espocrm-extensions') {
            const moduleName = linkParts[index + 1];
            const link = linkMap[moduleName];
            if (link) {
                const $webLink = document.createElement('a');
                $webLink.href = `https://www.eblasoft.com.tr/espocrm-extension-page/${link}`;
                $webLink.target = '_blank';
                $webLink.classList.add('see-in-website-btn');
                $webLink.innerText = 'See it on website';

                const $parent = document.querySelector('.md-sidebar.md-sidebar--secondary .md-sidebar__inner');

                $parent.insertBefore($webLink, $parent.firstChild);

                setTimeout(() => {
                    $webLink.classList.add('enabled');
                }, 300);
            }
        }
    });
}

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
