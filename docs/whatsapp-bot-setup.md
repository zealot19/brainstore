# WhatsApp Bot — Meta Cloud API Setup

The booking bot is a channel over `online_booking`. Payment is simulated while
`FAKE_PAYMENTS=True`, so you only need the **Meta Cloud API** configured to test
it end to end.

## 1. Meta app + WhatsApp product
1. Create a **Meta app** (type *Business*) at <https://developers.facebook.com/>.
2. Add the **WhatsApp** product to the app.
3. In *App settings → Basic*, copy the **App Secret** → `WHATSAPP_APP_SECRET`.

## 2. Number, token, ids
4. In *WhatsApp → API Setup*, note the **Phone number ID** → `WHATSAPP_PHONE_NUMBER_ID`.
5. Create a **permanent access token** (via a *System User* in Business Settings
   with the `whatsapp_business_messaging` permission) → `WHATSAPP_TOKEN`.
   (The temporary 24h token on the API Setup page works for a quick test.)
6. Choose any string as your webhook **verify token** → `WHATSAPP_VERIFY_TOKEN`.

## 3. App settings (env)
Set these in the backend environment (`.env` / deploy config):
```
FAKE_PAYMENTS=True
WHATSAPP_TOKEN=<permanent access token>
WHATSAPP_PHONE_NUMBER_ID=<phone number id>
WHATSAPP_VERIFY_TOKEN=<your verify token>
WHATSAPP_APP_SECRET=<app secret>
WHATSAPP_COMPANY_ID=<served company UUID>   # a company with submitted trips + fares
WHATSAPP_API_VERSION=v21.0
```
`WHATSAPP_COMPANY_ID` must be a company that has **submitted (`pending`) trips
with materialised seats and a one-way fare** — otherwise search returns nothing.
(The demo seed created for the PWA works: `5abe2cf0-a2cc-4524-a2f0-a1029590528b`.)

## 4. Configure the webhook
7. The backend must be reachable over **public HTTPS**. In dev, tunnel localhost:
   `ngrok http 8000` → use the `https://…ngrok…` URL.
8. In *WhatsApp → Configuration → Webhook*, set:
   - **Callback URL:** `https://<host>/api/v1/whatsapp/webhook/`
   - **Verify token:** the same `WHATSAPP_VERIFY_TOKEN`.
   - **Subscribe** to the **messages** field.
   Meta calls `GET …/webhook/` and expects the challenge echoed — the view does
   this automatically.

## 5. Test
9. Add the test recipient **+237 652005451** to the app's allowed numbers (until
   the number is published / the app is live).
10. From that handset, send **bonjour** to the WhatsApp number.
11. Flow: choose town → destination → date → trip → passenger name → payment
    method → payment number → **Confirmer** → **PAYER** (simulated approval) →
    you receive the **ticket + QR image**.

## 6. Going live with real payments
Set `FAKE_PAYMENTS=False` and configure Campay (`CAMPAY_*` settings + the
`/api/v1/online/webhooks/campay/` webhook). The conversation is unchanged — the
"PAYER" simulation is replaced by the real Mobile Money phone prompt, and the
Campay webhook drives confirmation (which pushes the same ticket).
