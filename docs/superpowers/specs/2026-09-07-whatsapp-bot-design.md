# WhatsApp Bot (Online Reservation Channel) — Design Spec

**Date:** 2026-09-07
**Status:** Approved (design), pending implementation plan
**Author:** shimi

## 1. Goal

Let clients search, book, and pay for trips entirely inside WhatsApp — a
conversational channel over the existing `online_booking` backend, using the
**WhatsApp Cloud API** (Meta, official). Confirmed tickets (with a QR image) are
pushed back to the user in-chat.

**v1 uses a simulated ("fake") payment**, controlled by a shared
`settings.FAKE_PAYMENTS` flag on `online_booking`, so the whole flow works end
to end without Campay/Mobile Money credentials. The conversation is identical to
the real flow (the user "approves" by replying **PAYER**, which stands in for the
Mobile Money phone prompt), so going live later is a one-setting flip — no
conversation or code-shape change.

## 2. Context & Motivation

`online_booking` (`/api/v1/online/`) already implements the full anonymous,
per-company booking flow on the modern `voyages_*` stack, with Campay Mobile
Money payment and a webhook/poll confirmation. The PWA reuses it; the WhatsApp
bot is simply a **second client** of the same in-process services — no booking
logic is rebuilt.

Reused building blocks (called in-process, same as the PWA):
- `online_booking.selectors`: `get_served_towns`, `search_trips`,
  `get_public_trip`, `trip_price`, `get_seat_map`.
- `online_booking.services`: `initiate_booking`, `confirm_payment`,
  `sync_payment_status` (+ the Campay orchestration).
- `voyages_booking.services.create_booking` (channel-aware).

## 3. Scope

### In scope (v1)
- A new Django app **`whatsapp_bot`** in this backend.
- Cloud API webhook (verification GET + inbound POST, signed).
- Conversation state machine: search → select trip → passenger name → payment
  number → confirm → **simulated payment (reply PAYER)**.
- **Auto-assigned seat** (next available).
- **Payment number always asked** (defaults offered as the user's WhatsApp
  number in copy, but the step is always shown).
- **Simulated payment** via a shared `FAKE_PAYMENTS` toggle (skips Campay;
  confirms on the PAYER step).
- Push **confirmed ticket + QR image** on payment success.
- Single fixed company (`settings.WHATSAPP_COMPANY_ID`).

### Out of scope (v1)
- Multi-company routing / institution picker.
- Manual seat picking (auto-assign only).
- Status lookup ("where is my booking") and cancellations/refunds via chat.
- Multi-passenger bookings (one seat / one ticket per conversation).
- Languages other than French.
- **Real Mobile Money charge (Campay)** — deferred; the code path stays intact
  and is re-enabled by setting `FAKE_PAYMENTS = false`.

## 4. Architecture

### 4.1 New app: `whatsapp_bot`
```
apps/whatsapp_bot/
  urls.py                 # /whatsapp/webhook/
  views.py                # WhatsAppWebhookView (GET verify, POST inbound)
  models.py               # WhatsAppSession
  services/
    engine.py             # state machine (handle_message)
    wa_client.py          # Cloud API adapter (send_text/list/buttons/image, upload_media)
    tickets.py            # QR PNG (segno) + ticket push
  selectors.py            # (thin, if needed)
```
Wired in `api/v1/router.py`: `path("whatsapp/", include("apps.whatsapp_bot.urls"))`.

### 4.2 Webhook `WhatsAppWebhookView` (`AllowAny`)
- **GET**: Meta verification — if `hub.mode == "subscribe"` and
  `hub.verify_token == settings.WHATSAPP_VERIFY_TOKEN`, return `hub.challenge`
  (raw text, 200); else 403.
- **POST**: verify `X-Hub-Signature-256` = `sha256=` HMAC of the raw body with
  `settings.WHATSAPP_APP_SECRET`; reject mismatch (403). Parse the message,
  **dedupe by message id** (ignore already-seen ids), dispatch to
  `engine.handle_message(wa_id, text_or_interactive)`, and **always return 200**
  (so Meta doesn't retry). All outbound sending happens via `wa_client`.

### 4.3 Conversation engine + `WhatsAppSession`
`WhatsAppSession` (one row per `wa_id`):
- `wa_id` (unique), `step` (choice), `context` (JSON: from_town_id, to_town_id,
  travel_date, trip_id, passenger_name, payment_phone, request_id),
  `updated_at`. Sessions idle > `WHATSAPP_SESSION_TTL_MIN` (default 30) are
  treated as expired → restart.

Steps: `START → ASK_FROM → ASK_TO → ASK_DATE → SHOW_TRIPS → ASK_NAME →
ASK_PAY_METHOD → ASK_PAYMENT_PHONE → CONFIRM → AWAIT_PAYMENT → DONE`.

`handle_message` is a pure-ish reducer: given the current session + inbound
value, it validates, mutates `context`, advances `step`, and returns the list of
outbound messages to send. This keeps it unit-testable without real HTTP.

### 4.4 Cloud API adapter `wa_client.py`
Functions (POST to `https://graph.facebook.com/<v>/<PHONE_NUMBER_ID>/messages`
with `Authorization: Bearer <WHATSAPP_TOKEN>`):
- `send_text(to, body)`
- `send_list(to, header, body, rows)` — interactive list (≤10 rows; if more,
  caller falls back to `send_text` with a numbered prompt)
- `send_buttons(to, body, buttons)` — reply buttons (≤3)
- `upload_media(png_bytes, mime="image/png") -> media_id` (POST `/media`)
- `send_image(to, media_id, caption)`
All calls go through one `_post` helper; in tests this is the single mock point.

### 4.5 Booking, auto-assign seat, simulated payment
On `CONFIRM`, the engine calls
`initiate_booking(company, trip, passenger_name, passenger_phone=wa_id,
seat_id=<first_available>, payment_method, payment_phone, source="whatsapp")`.
Seat comes from a new selector `first_available_seat(trip)` (returns an
`AVAILABLE` TripSeat, or raises `ApplicationError` if the trip is full).

Payment method: the engine offers MTN / Orange via reply buttons before asking
the payment number (kept for realism even though the charge is simulated).

**Simulated payment.** `initiate_booking` checks `settings.FAKE_PAYMENTS`:
- **Fake (v1):** it does **not** call Campay; it stores a placeholder
  `payment_reference = "FAKE-<id>"` and leaves the request `PENDING`.
- **Real (later):** it calls `_start_campay_payment` exactly as today.

After initiate, the engine → step `AWAIT_PAYMENT` and prompts the user to
approve. In fake mode it shows a **PAYER** reply button (and accepts the text
"PAYER"); tapping it calls `services.simulate_payment(request)`, which — only
when `FAKE_PAYMENTS` is on — invokes `confirm_payment(request,
operator_ref="FAKE")`. Confirmation then flows through the **same notify hook**
(§4.6) that a real Campay webhook would trigger, so the ticket delivery path is
identical in both modes. In real mode the engine instead says "approuvez sur
votre téléphone" and the Campay webhook drives confirmation (no PAYER button).

### 4.6 Notify-on-paid hook
`confirm_payment` is the single choke point (called by the Campay webhook and by
`sync_payment_status`). After it sets status → PAID, it performs a **guarded**
notification:
```python
if booking_request.source == "whatsapp":
    try:
        from apps.whatsapp_bot.services.tickets import notify_ticket
        notify_ticket(booking_request)
    except Exception:
        logger.exception("WhatsApp ticket notify failed for %s", booking_request.id)
```
`notify_ticket` generates the QR PNG (segno, from the ticket number), uploads it
via `wa_client.upload_media`, and sends the ticket summary + image to
`booking_request.passenger_phone` (the user's WhatsApp number). The guard
guarantees a bot/Meta failure can never break payment confirmation.

## 5. Small additions to `online_booking`
- `OnlineBookingRequest.source` — CharField, default `"pwa"`, values
  `"pwa"|"whatsapp"` (migration).
- `initiate_booking(..., source="pwa")` — new param, stored on the request; and
  a `FAKE_PAYMENTS` branch: skip Campay + set `payment_reference="FAKE-<id>"`
  when the flag is on.
- `services.simulate_payment(booking_request)` — new; when `FAKE_PAYMENTS` is on,
  calls `confirm_payment(..., operator_ref="FAKE")`; otherwise a no-op (guarded,
  so it can never confirm real bookings).
- `sync_payment_status` — when `FAKE_PAYMENTS` is on and the request is still
  `PENDING`, auto-confirm (so the **PWA** status poll also completes in fake
  mode, without a "PAYER" action).
- `selectors.first_available_seat(trip)` — next `AVAILABLE` TripSeat.
- `confirm_payment` — the guarded notify hook above (unchanged for real mode).

Fake bookings are **real** `voyages_booking.Booking`s (they appear in the staff
list / reporting); only the **external Campay charge** is skipped. Confirmation
still runs `create_booking` exactly like a real online sale, including its normal
treasury recording (a no-op unless the company has a single bank account, as in
the demo). The PWA path is otherwise unaffected (defaults `source="pwa"`, sends
`seat_id` explicitly).

## 6. Conversation Flow (French)

1. Any inbound on a fresh/expired session → greeting + "D'où partez-vous ?" +
   **town list** (from `get_served_towns`).
2. `ASK_TO` → "Vers quelle ville ?" + town list (excluding the chosen origin).
3. `ASK_DATE` → buttons **Aujourd'hui / Demain / Autre date**; "Autre" → free
   text date (`DD/MM/YYYY` or `YYYY-MM-DD`, parsed; invalid → re-ask).
4. `SHOW_TRIPS` → `search_trips`; render a **list** (row = "HH:MM · <prix> XAF").
   None → "Aucun voyage ce jour-là." + offer another date. >10 → numbered text.
5. `ASK_NAME` → "Nom du passager ?"
6. Payment method → buttons **MTN MoMo / Orange Money**.
7. `ASK_PAYMENT_PHONE` → "Numéro Mobile Money à débiter ?" (copy suggests their
   WhatsApp number; they can send another).
8. `CONFIRM` → summary (trajet, date/heure, siège auto, prix, numéro) +
   buttons **Confirmer / Annuler**.
9. Confirmer → `initiate_booking` → session → `AWAIT_PAYMENT`. In **fake mode**:
   "✅ Demande envoyée. Répondez **PAYER** pour simuler l'approbation Mobile
   Money." + a **PAYER** button. (Real mode: "Approuvez sur votre téléphone
   `<numéro>`" and the Campay webhook confirms.)
10. User taps/says **PAYER** → `simulate_payment` → `confirm_payment` → the
    notify hook sends "🎫 Réservation confirmée" + ticket number + **QR image**.
    Cancel/expiry/backend error → clear French message + offer to restart.

## 7. Configuration (env / settings)
- `WHATSAPP_TOKEN` — permanent access token.
- `WHATSAPP_PHONE_NUMBER_ID` — sender number id.
- `WHATSAPP_VERIFY_TOKEN` — webhook verification token.
- `WHATSAPP_APP_SECRET` — for `X-Hub-Signature-256`.
- `WHATSAPP_COMPANY_ID` — the served company UUID.
- `WHATSAPP_API_VERSION` (default e.g. `v21.0`), `WHATSAPP_SESSION_TTL_MIN`
  (default 30).
- `FAKE_PAYMENTS` — bool (default **true** in v1). When true, `online_booking`
  skips Campay and confirms via `simulate_payment` (bot) / status poll (PWA).
  Set to `false` (and configure Campay) to go live with real Mobile Money.
All read via `settings` from env; nothing hard-coded. Absent config → the app
imports fine but the webhook logs and no-ops (so tests/dev don't require Meta).

## 8. Error Handling
- GET verify token mismatch → 403; POST signature mismatch → 403.
- Inbound after processing → 200 always (avoid Meta retries); dedupe by msg id.
- Unknown/expired session or unrecognised input → restart greeting.
- Backend `ApplicationError` (trip full, no fare, seat taken) → friendly French
  message, stay on the step or restart as appropriate.
- Notify hook fully guarded (never breaks payment).
- Outbound send failures are logged; the webhook still returns 200.

## 9. Testing
- **pytest**, all outbound HTTP mocked at `wa_client._post` (no real Meta):
  - GET verification returns `hub.challenge` on valid token, 403 otherwise.
  - POST rejects a bad signature; accepts a valid one.
  - State machine: each transition (`ASK_FROM`→…→`CONFIRM`) given crafted
    inbound values, asserting the next `step` and the outbound messages.
  - Confirm step calls `initiate_booking` with `source="whatsapp"`, auto seat,
    `passenger_phone == wa_id`.
  - `first_available_seat` returns an available seat / raises when full.
  - **Fake payment:** with `FAKE_PAYMENTS=true`, `initiate_booking` does not call
    Campay (no `_start_campay_payment`) and sets `payment_reference` to `FAKE-…`;
    `simulate_payment` confirms the request (status → PAID, booking created);
    with `FAKE_PAYMENTS=false`, `simulate_payment` is a no-op.
  - **PAYER step:** the engine's `AWAIT_PAYMENT` handler on "PAYER" calls
    `simulate_payment` and the notify hook fires once (ticket not double-sent).
  - `sync_payment_status` auto-confirms a pending request when `FAKE_PAYMENTS`.
  - Notify hook: `confirm_payment` on a `source="whatsapp"` request triggers
    `notify_ticket` (mocked); on `source="pwa"` it does not.
  - Message-id dedupe: a repeated id is ignored.
- Full backend suite stays green.
- New dependency: **`segno`** (pure-Python QR → PNG; avoids Pillow, which is
  intentionally omitted from requirements).

## 10. Units & Boundaries
- `whatsapp_bot.engine` — conversation state machine; depends on
  `online_booking` selectors/services + `wa_client`. No knowledge of Cloud API
  HTTP shapes beyond what `wa_client` exposes.
- `whatsapp_bot.wa_client` — the only place that talks HTTP to Meta; single mock
  point.
- `whatsapp_bot.tickets` — QR generation + ticket push; depends on `wa_client`.
- `online_booking` stays independent of `whatsapp_bot` (guarded late import in
  the notify hook only); dependency direction is `whatsapp_bot → online_booking`.

## 11. Operational Prerequisites (provided at deploy)
Meta Business account, a WhatsApp Business number, a permanent access token, the
`phone_number_id`, the app secret, and a verify token, plus the webhook URL
registered in the Meta app. Test recipient handset: **+237 652005451**.
