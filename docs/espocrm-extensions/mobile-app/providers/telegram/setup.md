### Telegram Integration Setup

#### Bot Setup

1. Go to [BotFather](https://t.me/BotFather) on Telegram.

2. Create a new bot by following the on-screen instructions from BotFather.

   ![img.png](../../../../_static/images/extensions/mobile-app/telegram/setup-0.png)

3. Copy the Bot ID and Bot URL provided by BotFather.

   ![img.png](../../../../_static/images/extensions/mobile-app/telegram/setup-1.png)

4. Open your newly created bot on Telegram and press "Start" to initialize the bot.

5. Go to [@myidbot](https://t.me/myidbot) and press "Start" to get your Telegram ID. Copy the Telegram ID.

#### EspoCRM Setup

1. Navigate to **Integrations** -> **Telegram**.

   ![img.png](../../../../_static/images/extensions/mobile-app/telegram/setup-2.png)

2. Paste the Bot ID and Bot URL obtained from BotFather.

   ![img.png](../../../../_static/images/extensions/mobile-app/telegram/setup-3.png)

3. Go to **Administration** -> **Mobile App** -> **Notifications Settings**.

4. Set the "Default Notification Provider" to "**Telegram**."

   ![img.png](../../../../_static/images/extensions/mobile-app/telegram/setup-4.png)

5. Ensure your Telegram bot is open by visiting the Bot URL and pressing "Start."

6. Go to **Notification Preferences**.

   ![img.png](../../../../_static/images/extensions/mobile-app/telegram/setup-5.png)

7. Paste your Telegram ID in the "Telegram Chat ID" field.

   ![img.png](../../../../_static/images/extensions/mobile-app/telegram/setup-6.png)

Now, your EspoCRM instance is configured to use Telegram for push notifications.


### Troubleshooting:

- Double-check the Bot ID, Bot URL, and Telegram ID for accuracy.
- Review your server logs for any error messages related to Telegram integration.
