### WebPush Setup

1. Navigate to **Integrations** -> **Web Push**.

   ![Web Push](../../../../_static/images/espocrm-extensions/mobile-app/webpush/setup-0.png)

2. Add VAPID (Voluntary Application Server Identification) public and private keys. If you don't have keys, you can
   press the "Generate" button to create them.

   ![img.png](../../../../_static/images/espocrm-extensions/mobile-app/webpush/setup-1.png)

3. Go to **Administration** -> **Mobile App** -> **Push Notifications Configuration**.

   ![img.png](../../../../_static/images/espocrm-extensions/mobile-app/webpush/setup-2.png)

4. In the Push Notifications Configuration, find the "Default Provider" setting and change it to "WebPush."

   ![img.png](../../../../_static/images/espocrm-extensions/mobile-app/webpush/setup-3.png)

5. Setup Notification Icon and Badge by uploading a PNG images.
   ![img.png](../../../../_static/images/espocrm-extensions/mobile-app/webpush/setup-4.png)

6. Users can subscribe and unsubscribe to push notifications from **Push Notification Preferences**.

   ![img.png](../../../../_static/images/espocrm-extensions/mobile-app/webpush/setup-5.png)

> Now, your EspoCRM instance is configured to use WebPush for push notifications.

### Note:

- Ensure that your [browser supports](https://developer.mozilla.org/en-US/docs/Web/API/Push_API#browser_compatibility)
  WebPush.
- Users need to grant permission to receive push notifications when prompted by the browser.

<br>

![img.png](../../../../_static/images/espocrm-extensions/mobile-app/webpush/setup-6.png)

### Troubleshooting:

- If users are not receiving push notifications, double-check the VAPID keys and ensure that the WebPush provider is
  correctly set as the default in the Push Notifications Configuration.
- Review your server logs for any error messages related to push notifications.
