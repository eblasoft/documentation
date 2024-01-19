# SMS <a href="https://www.eblasoft.com.tr/espocrm-extension-page/sms" target="_blank" id="ext-version"></a>

> This extension enables SMS Entity.
> Read more about SMS [EspoCRM SMS Sending](https://docs.espocrm.com/administration/sms-sending/).
> is available in [Ebla SMS](https://www.eblasoft.com.tr/espocrm-extension-page/sms).


---

![Overview](../../_static/images/extensions/sms/sms.png )

1. **Enable** SMS Entity.
2. **Mass** SMS sending.
3. SMS **templates**.
4. Add SMS in **Activity panel**.

---

![Features](../../_static/images/extensions/sms/features.jpg )

![Features](../../_static/images/extensions/sms/activity-panel.jpg )

1. **Administration -> Integration** open the needed SMS provider and entered required credentials.
2. go to **Administration -> SMS** select the needed SMS provider. Specify **From Number** (if needed).

![SMS Provider](../../_static/images/extensions/sms/sms-provider.png )

Supported SMS Providers:
> - Twilio
> - Spryng
> - sms77
> - smstools
> - SerwerSms
> - Verimor

---

**<font color=gray> [Changelog](changelog.md) </font>**


<script>
    async function fetchData() {
    const url = 'https://crm.eblasoft.com.tr/api/v1/Docs?id=64a6d717d1ec80e20';
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


