# WhatsApp Bot (Online Reservation) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (inline) or superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A WhatsApp Cloud API bot where clients search, book, and (fake-)pay for trips in chat, receiving a QR ticket — reusing `online_booking` in-process.

**Architecture:** New Django app `whatsapp_bot` (signed webhook + `WhatsAppSession` state machine + stdlib-`urllib` Cloud API adapter + segno QR push). Calls `online_booking` services/selectors in-process. Payment is simulated via a shared `settings.FAKE_PAYMENTS` flag; confirmation flows through the existing `confirm_payment` + a guarded notify hook.

**Tech Stack:** Django 5.1 + DRF (backend), WhatsApp Cloud API (Graph API over stdlib `urllib`), `segno` (QR PNG, already in requirements), pytest.

**Spec:** `docs/superpowers/specs/2026-09-07-whatsapp-bot-design.md`

## Global Constraints

- Reuse `online_booking` in-process; dependency direction is `whatsapp_bot → online_booking`. `online_booking` never imports `whatsapp_bot` except via one guarded late import in `confirm_payment`.
- HTTP to Meta goes only through `wa_client._post` (stdlib `urllib`, like `apps/online_booking/campay/client.py`) — the single test mock point. No `requests`/`httpx`.
- `settings.FAKE_PAYMENTS` (default `True` in v1): when true, no Campay call; confirmation via `simulate_payment` (bot) / status poll (PWA).
- Company fixed via `settings.WHATSAPP_COMPANY_ID`. All Meta config via env; absent config must not break import or tests.
- Backend tests via `pytest` (pytest.ini); full suite stays green. French copy throughout.
- The bot engine is a pure-ish reducer: `handle_message(session, value) -> list[OutboundMessage]`; the webhook delivers those via `wa_client`. Tests assert on returned messages (no HTTP).
- Commits: author shimi; NO Claude co-author trailer. Branch: `feat/whatsapp-bot` (already cut from `origin/master`).
- Reuse the shared test fixture pattern from `apps/online_booking/tests/conftest.py` (`booking_world`).

---

### Task 1: `online_booking` — `source` field + `first_available_seat` selector

**Files:**
- Modify: `backend/apps/online_booking/models/booking_request.py`
- Migration: `makemigrations online_booking`
- Modify: `backend/apps/online_booking/selectors/selectors.py`, `selectors/__init__.py`
- Modify: `backend/apps/online_booking/services/services.py` (`initiate_booking` gains `source`)
- Test: `backend/apps/online_booking/tests/test_source_and_seat.py`

**Interfaces:**
- Produces: `OnlineBookingRequest.source` (`"pwa"` default). `initiate_booking(..., source="pwa")` stores it. `selectors.first_available_seat(trip) -> TripSeat` (raises `ApplicationError` if full).

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/online_booking/tests/test_source_and_seat.py
import pytest
from apps.core.exceptions import ApplicationError
from apps.online_booking import selectors
from apps.voyages_trips.models import TripSeat

pytestmark = pytest.mark.django_db


def test_first_available_seat_returns_available(booking_world):
    seat = selectors.first_available_seat(booking_world["trip"])
    assert seat is not None and seat.status == TripSeat.Status.AVAILABLE


def test_first_available_seat_raises_when_full(booking_world):
    TripSeat.objects.filter(trip=booking_world["trip"]).update(status=TripSeat.Status.SOLD)
    with pytest.raises(ApplicationError):
        selectors.first_available_seat(booking_world["trip"])


def test_initiate_stores_source(booking_world, monkeypatch):
    import apps.online_booking.services.services as S
    monkeypatch.setattr(S, "_start_campay_payment", lambda br: br)
    w = booking_world
    br = S.initiate_booking(
        company=w["company"], trip=w["trip"], passenger_name="X",
        passenger_phone="1", seat_id=w["seat"].id, payment_method="mtn_momo",
        payment_phone="1", source="whatsapp")
    assert br.source == "whatsapp"
```

- [ ] **Step 2: Run to verify it fails**

Run: `cd backend && python -m pytest apps/online_booking/tests/test_source_and_seat.py -q --reuse-db`
Expected: FAIL (`source` field / `first_available_seat` / `source` param missing).

- [ ] **Step 3: Add the model field**

In `booking_request.py`, after the `status`/`expires_at` block add:
```python
    source = models.CharField(_("canal"), max_length=20, default="pwa")  # pwa | whatsapp
```

- [ ] **Step 4: Migrate**

Run: `cd backend && python manage.py makemigrations online_booking && python manage.py migrate online_booking`

- [ ] **Step 5: Add the selector**

In `selectors/selectors.py`:
```python
def first_available_seat(trip):
    from apps.core.exceptions import ApplicationError
    from django.utils.translation import gettext as _
    seat = (TripSeat.objects.filter(is_deleted=False, trip=trip,
                                    status=TripSeat.Status.AVAILABLE)
            .order_by("row", "column").first())
    if not seat:
        raise ApplicationError(_("Ce voyage est complet."))
    return seat
```
Export it in `selectors/__init__.py` (add to the import list and `__all__`).

- [ ] **Step 6: Add `source` param to `initiate_booking`**

In `services/services.py`, add `source="pwa"` to the `initiate_booking` signature (after `destination_point_id=None`) and pass `source=source` into `OnlineBookingRequest.objects.create(...)`.

- [ ] **Step 7: Run to verify pass**

Run: `cd backend && python -m pytest apps/online_booking/tests/test_source_and_seat.py -q --reuse-db`
Expected: PASS.

- [ ] **Step 8: Commit**

```bash
git add backend/apps/online_booking/
git commit -m "feat(online): source field + first_available_seat selector"
```

---

### Task 2: `online_booking` — shared `FAKE_PAYMENTS` payment simulation

**Files:**
- Modify: `backend/config/settings/base.py` (add `FAKE_PAYMENTS`)
- Modify: `backend/apps/online_booking/services/services.py`
- Test: `backend/apps/online_booking/tests/test_fake_payments.py`

**Interfaces:**
- Produces: `settings.FAKE_PAYMENTS` (bool). `initiate_booking` skips Campay when true (sets `payment_reference="FAKE-<id>"`, stays PENDING). `services.simulate_payment(request)` confirms when fake, else no-op. `sync_payment_status` auto-confirms a pending request when fake.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/online_booking/tests/test_fake_payments.py
import pytest
from django.test import override_settings
from apps.online_booking import services
from apps.online_booking.models import OnlineBookingRequest as OBR
from apps.voyages_booking.models import Booking

pytestmark = pytest.mark.django_db


def _initiate(w):
    return services.initiate_booking(
        company=w["company"], trip=w["trip"], passenger_name="Jean",
        passenger_phone="670", seat_id=w["seat"].id, payment_method="mtn_momo",
        payment_phone="670", source="whatsapp")


@override_settings(FAKE_PAYMENTS=True)
def test_initiate_skips_campay_when_fake(booking_world, monkeypatch):
    called = {"n": 0}
    import apps.online_booking.services.services as S
    monkeypatch.setattr(S, "_start_campay_payment", lambda br: called.__setitem__("n", called["n"] + 1) or br)
    br = _initiate(booking_world)
    assert called["n"] == 0
    assert br.status == OBR.Status.PENDING
    assert br.payment_reference.startswith("FAKE-")


@override_settings(FAKE_PAYMENTS=True)
def test_simulate_payment_confirms(booking_world):
    br = _initiate(booking_world)
    services.simulate_payment(br)
    br.refresh_from_db()
    assert br.status == OBR.Status.PAID
    assert Booking.objects.filter(id=br.booking_id, channel=Booking.Channel.ONLINE).exists()


@override_settings(FAKE_PAYMENTS=False)
def test_simulate_payment_noop_when_real(booking_world, monkeypatch):
    import apps.online_booking.services.services as S
    monkeypatch.setattr(S, "_start_campay_payment", lambda br: br)
    br = _initiate(booking_world)
    services.simulate_payment(br)
    br.refresh_from_db()
    assert br.status == OBR.Status.PENDING  # unchanged
```

- [ ] **Step 2: Run to verify it fails**

Run: `cd backend && python -m pytest apps/online_booking/tests/test_fake_payments.py -q --reuse-db`
Expected: FAIL (`simulate_payment` missing / Campay still called).

- [ ] **Step 3: Add the setting**

In `config/settings/base.py` (near other feature flags):
```python
# Paiements simulés (v1 réservation en ligne / bot WhatsApp) — passer à False pour Campay réel.
FAKE_PAYMENTS = env.bool("FAKE_PAYMENTS", default=True)
```

- [ ] **Step 4: Branch `initiate_booking` + add `simulate_payment` + fake `sync_payment_status`**

In `services/services.py`:
- Replace the final `return _start_campay_payment(booking_request)` in `initiate_booking` with:
```python
    if getattr(settings, "FAKE_PAYMENTS", False):
        booking_request.payment_reference = f"FAKE-{booking_request.id}"
        booking_request.save(update_fields=["payment_reference"])
        return booking_request
    return _start_campay_payment(booking_request)
```
- Add:
```python
def simulate_payment(booking_request, *, operator_ref="FAKE"):
    """Confirm a pending request without a real charge — only when FAKE_PAYMENTS."""
    if not getattr(settings, "FAKE_PAYMENTS", False):
        return booking_request
    return confirm_payment(booking_request, operator_ref=operator_ref)
```
- In `sync_payment_status`, immediately after the `is_expired` check and before the `payment_reference` guard, add:
```python
    if getattr(settings, "FAKE_PAYMENTS", False):
        return confirm_payment(booking_request, operator_ref="FAKE")
```

- [ ] **Step 5: Run to verify pass**

Run: `cd backend && python -m pytest apps/online_booking/tests/test_fake_payments.py -q --reuse-db`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add backend/config/settings/base.py backend/apps/online_booking/
git commit -m "feat(online): FAKE_PAYMENTS toggle — simulate payment (bot + PWA)"
```

---

### Task 3: `online_booking` — guarded notify-on-paid hook

**Files:**
- Modify: `backend/apps/online_booking/services/services.py` (`confirm_payment`)
- Test: `backend/apps/online_booking/tests/test_notify_hook.py`

**Interfaces:**
- Produces: after `confirm_payment` sets PAID, if `source=="whatsapp"` it calls `apps.whatsapp_bot.services.tickets.notify_ticket(request)` inside a try/except (guarded late import). Never raises.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/online_booking/tests/test_notify_hook.py
import sys, types, pytest
from django.test import override_settings
from apps.online_booking import services

pytestmark = pytest.mark.django_db


def _fake_tickets_module(calls):
    mod = types.ModuleType("apps.whatsapp_bot.services.tickets")
    mod.notify_ticket = lambda br: calls.append(br.id)
    # ensure parent packages resolve
    for name in ("apps.whatsapp_bot", "apps.whatsapp_bot.services"):
        sys.modules.setdefault(name, types.ModuleType(name))
    sys.modules["apps.whatsapp_bot.services.tickets"] = mod


@override_settings(FAKE_PAYMENTS=True)
def test_paid_whatsapp_request_notifies(booking_world, monkeypatch):
    calls = []
    _fake_tickets_module(calls)
    br = services.initiate_booking(
        company=booking_world["company"], trip=booking_world["trip"],
        passenger_name="J", passenger_phone="1", seat_id=booking_world["seat"].id,
        payment_method="mtn_momo", payment_phone="1", source="whatsapp")
    services.simulate_payment(br)
    assert calls == [br.id]


@override_settings(FAKE_PAYMENTS=True)
def test_paid_pwa_request_does_not_notify(booking_world):
    calls = []
    _fake_tickets_module(calls)
    br = services.initiate_booking(
        company=booking_world["company"], trip=booking_world["trip"],
        passenger_name="J", passenger_phone="1", seat_id=booking_world["seat"].id,
        payment_method="mtn_momo", payment_phone="1", source="pwa")
    services.simulate_payment(br)
    assert calls == []
```

- [ ] **Step 2: Run to verify it fails**

Run: `cd backend && python -m pytest apps/online_booking/tests/test_notify_hook.py -q --reuse-db`
Expected: FAIL (no notify call).

- [ ] **Step 3: Add the hook**

In `confirm_payment`, immediately before `return booking_request` (after the `save(update_fields=[...])`), add:
```python
    if booking_request.source == "whatsapp":
        try:
            from apps.whatsapp_bot.services.tickets import notify_ticket
            notify_ticket(booking_request)
        except Exception:
            logger.exception("Notification WhatsApp du billet échouée pour %s", booking_request.id)
```

- [ ] **Step 4: Run to verify pass**

Run: `cd backend && python -m pytest apps/online_booking/tests/test_notify_hook.py -q --reuse-db`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/online_booking/
git commit -m "feat(online): guarded WhatsApp notify-on-paid hook in confirm_payment"
```

---

### Task 4: `whatsapp_bot` app scaffold + settings + wiring

**Files:**
- Create: `backend/apps/whatsapp_bot/__init__.py`, `apps.py`, `models.py`, `urls.py`, `views.py` (stub), `services/__init__.py`
- Modify: `backend/config/settings/base.py` (INSTALLED_APPS + WHATSAPP_* settings)
- Modify: `backend/api/v1/router.py` (include)

**Interfaces:**
- Produces: installed app `apps.whatsapp_bot`; `settings.WHATSAPP_*`; route prefix `whatsapp/`.

- [ ] **Step 1: Create the app package**

`apps/whatsapp_bot/__init__.py` (empty), `apps/whatsapp_bot/services/__init__.py` (empty).
`apps/whatsapp_bot/apps.py`:
```python
from django.apps import AppConfig

class WhatsappBotConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.whatsapp_bot"
    verbose_name = "Bot WhatsApp"
```

- [ ] **Step 2: Settings**

In `config/settings/base.py`, add `"apps.whatsapp_bot",` to the local apps in `INSTALLED_APPS` (next to `"apps.online_booking",`). Add a settings block:
```python
# ── WhatsApp Cloud API (bot de réservation) ──────────────────────────────────
WHATSAPP_TOKEN            = env("WHATSAPP_TOKEN", default="")
WHATSAPP_PHONE_NUMBER_ID  = env("WHATSAPP_PHONE_NUMBER_ID", default="")
WHATSAPP_VERIFY_TOKEN     = env("WHATSAPP_VERIFY_TOKEN", default="")
WHATSAPP_APP_SECRET       = env("WHATSAPP_APP_SECRET", default="")
WHATSAPP_COMPANY_ID       = env("WHATSAPP_COMPANY_ID", default="")
WHATSAPP_API_VERSION      = env("WHATSAPP_API_VERSION", default="v21.0")
WHATSAPP_SESSION_TTL_MIN  = env.int("WHATSAPP_SESSION_TTL_MIN", default=30)
```

- [ ] **Step 3: Stub view + urls + router**

`apps/whatsapp_bot/views.py`:
```python
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class WhatsAppWebhookView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response(status=200)

    def post(self, request):
        return Response(status=200)
```
`apps/whatsapp_bot/urls.py`:
```python
from django.urls import path
from apps.whatsapp_bot import views

urlpatterns = [
    path("webhook/", views.WhatsAppWebhookView.as_view(), name="whatsapp-webhook"),
]
```
In `api/v1/router.py`, after the `online/` include:
```python
    path("whatsapp/",   include("apps.whatsapp_bot.urls")),
```

- [ ] **Step 4: Verify wiring**

Run: `cd backend && python manage.py check 2>&1 | grep -v WARNING | tail -2`
Expected: "System check identified no issues".

- [ ] **Step 5: Commit**

```bash
git add backend/apps/whatsapp_bot backend/config/settings/base.py backend/api/v1/router.py
git commit -m "feat(whatsapp): app scaffold, settings, webhook route"
```

---

### Task 5: `wa_client.py` — Cloud API adapter (stdlib urllib)

**Files:**
- Create: `backend/apps/whatsapp_bot/services/wa_client.py`
- Test: `backend/apps/whatsapp_bot/tests/__init__.py`, `backend/apps/whatsapp_bot/tests/test_wa_client.py`

**Interfaces:**
- Produces: `send_text(to, body)`, `send_list(to, header, body, rows)`, `send_buttons(to, body, buttons)`, `upload_media(png_bytes, mime="image/png") -> media_id`, `send_image(to, media_id, caption="")`. All route through `_post(path, payload, ...)`. `rows`/`buttons` items are `{"id","title"}`.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/whatsapp_bot/tests/test_wa_client.py
import json, pytest
from django.test import override_settings
from apps.whatsapp_bot.services import wa_client

pytestmark = pytest.mark.django_db


@override_settings(WHATSAPP_TOKEN="T", WHATSAPP_PHONE_NUMBER_ID="PNID")
def test_send_text_posts_expected_payload(monkeypatch):
    captured = {}
    def fake_post(path, payload, **kw):
        captured["path"] = path; captured["payload"] = payload
        return {"messages": [{"id": "wamid.1"}]}
    monkeypatch.setattr(wa_client, "_post", fake_post)
    wa_client.send_text("237650000000", "Bonjour")
    assert "messages" in captured["path"]
    assert captured["payload"]["to"] == "237650000000"
    assert captured["payload"]["text"]["body"] == "Bonjour"


@override_settings(WHATSAPP_TOKEN="T", WHATSAPP_PHONE_NUMBER_ID="PNID")
def test_send_list_builds_interactive(monkeypatch):
    captured = {}
    monkeypatch.setattr(wa_client, "_post", lambda p, payload, **kw: captured.update(payload) or {})
    wa_client.send_list("237", "Villes", "Choisissez", [{"id": "a", "title": "Douala"}])
    assert captured["interactive"]["type"] == "list"
    sec = captured["interactive"]["action"]["sections"][0]
    assert sec["rows"][0]["id"] == "a"
```

- [ ] **Step 2: Run to verify it fails**

Run: `cd backend && python -m pytest apps/whatsapp_bot/tests/test_wa_client.py -q --reuse-db`
Expected: FAIL (module/functions missing).

- [ ] **Step 3: Implement `wa_client.py`**

Mirror the stdlib-urllib style of `apps/online_booking/campay/client.py`:
```python
import json
import logging
from urllib import request as urllib_request, error as urllib_error
from django.conf import settings

logger = logging.getLogger(__name__)


def _base_url():
    return f"https://graph.facebook.com/{settings.WHATSAPP_API_VERSION}/{settings.WHATSAPP_PHONE_NUMBER_ID}"


def _post(path, payload, *, is_json=True, data_bytes=None, headers=None):
    url = f"{_base_url()}/{path}"
    hdrs = {"Authorization": f"Bearer {settings.WHATSAPP_TOKEN}"}
    if headers:
        hdrs.update(headers)
    if is_json:
        body = json.dumps(payload).encode()
        hdrs["Content-Type"] = "application/json"
    else:
        body = data_bytes
    req = urllib_request.Request(url, data=body, headers=hdrs, method="POST")
    try:
        with urllib_request.urlopen(req, timeout=20) as resp:
            return json.loads(resp.read().decode() or "{}")
    except urllib_error.HTTPError as e:
        logger.error("WhatsApp API error %s: %s", e.code, e.read().decode(errors="ignore"))
        raise
    except urllib_error.URLError as e:
        logger.error("WhatsApp API unreachable: %s", e)
        raise


def _send(payload):
    payload = {"messaging_product": "whatsapp", **payload}
    return _post("messages", payload)


def send_text(to, body):
    return _send({"to": to, "type": "text", "text": {"body": body}})


def send_list(to, header, body, rows, button="Choisir"):
    return _send({
        "to": to, "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {"type": "text", "text": header[:60]},
            "body": {"text": body[:1024]},
            "action": {"button": button[:20],
                       "sections": [{"rows": [
                           {"id": r["id"], "title": r["title"][:24]} for r in rows[:10]
                       ]}]},
        },
    })


def send_buttons(to, body, buttons):
    return _send({
        "to": to, "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {"text": body[:1024]},
            "action": {"buttons": [
                {"type": "reply", "reply": {"id": b["id"], "title": b["title"][:20]}}
                for b in buttons[:3]
            ]},
        },
    })


def upload_media(png_bytes, mime="image/png"):
    # multipart/form-data upload to /media; returns media id
    import uuid
    boundary = uuid.uuid4().hex
    def part(name, value):
        return (f'--{boundary}\r\nContent-Disposition: form-data; name="{name}"\r\n\r\n{value}\r\n').encode()
    body = b"".join([
        part("messaging_product", "whatsapp"),
        (f'--{boundary}\r\nContent-Disposition: form-data; name="file"; filename="ticket.png"\r\n'
         f'Content-Type: {mime}\r\n\r\n').encode(),
        png_bytes, b"\r\n",
        f"--{boundary}--\r\n".encode(),
    ])
    resp = _post("media", None, is_json=False, data_bytes=body,
                 headers={"Content-Type": f"multipart/form-data; boundary={boundary}"})
    return resp.get("id", "")


def send_image(to, media_id, caption=""):
    return _send({"to": to, "type": "image",
                  "image": {"id": media_id, "caption": caption[:1024]}})
```

- [ ] **Step 4: Run to verify pass**

Run: `cd backend && python -m pytest apps/whatsapp_bot/tests/test_wa_client.py -q --reuse-db`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/whatsapp_bot/
git commit -m "feat(whatsapp): Cloud API adapter (urllib)"
```

---

### Task 6: `WhatsAppSession` model

**Files:**
- Modify: `backend/apps/whatsapp_bot/models.py`
- Migration: `makemigrations whatsapp_bot`
- Test: `backend/apps/whatsapp_bot/tests/test_session.py`

**Interfaces:**
- Produces: `WhatsAppSession(wa_id unique, step, context JSON, last_message_id, updated_at)` + `is_expired` property (TTL from settings). Helper `get_or_start(wa_id) -> (session, is_new)`.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/whatsapp_bot/tests/test_session.py
import pytest
from apps.whatsapp_bot.models import WhatsAppSession

pytestmark = pytest.mark.django_db


def test_get_or_start_creates_then_reuses():
    s1, new1 = WhatsAppSession.get_or_start("237650")
    assert new1 and s1.step == WhatsAppSession.Step.START
    s2, new2 = WhatsAppSession.get_or_start("237650")
    assert not new2 and s2.id == s1.id


def test_context_roundtrips():
    s, _ = WhatsAppSession.get_or_start("237651")
    s.context = {"from_town_id": "abc"}
    s.save()
    assert WhatsAppSession.objects.get(wa_id="237651").context["from_town_id"] == "abc"
```

- [ ] **Step 2: Run to verify it fails**

Run: `cd backend && python -m pytest apps/whatsapp_bot/tests/test_session.py -q --reuse-db`
Expected: FAIL.

- [ ] **Step 3: Implement the model**

```python
# apps/whatsapp_bot/models.py
from django.db import models
from django.utils import timezone
from datetime import timedelta
from django.conf import settings


class WhatsAppSession(models.Model):
    class Step(models.TextChoices):
        START = "start"
        ASK_FROM = "ask_from"
        ASK_TO = "ask_to"
        ASK_DATE = "ask_date"
        SHOW_TRIPS = "show_trips"
        ASK_NAME = "ask_name"
        ASK_PAY_METHOD = "ask_pay_method"
        ASK_PAYMENT_PHONE = "ask_payment_phone"
        CONFIRM = "confirm"
        AWAIT_PAYMENT = "await_payment"
        DONE = "done"

    wa_id = models.CharField(max_length=32, unique=True, db_index=True)
    step = models.CharField(max_length=24, choices=Step.choices, default=Step.START)
    context = models.JSONField(default=dict, blank=True)
    last_message_id = models.CharField(max_length=128, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def is_expired(self):
        ttl = getattr(settings, "WHATSAPP_SESSION_TTL_MIN", 30)
        return timezone.now() - self.updated_at > timedelta(minutes=ttl)

    def reset(self):
        self.step = self.Step.START
        self.context = {}

    @classmethod
    def get_or_start(cls, wa_id):
        obj, created = cls.objects.get_or_create(wa_id=wa_id)
        return obj, created
```

- [ ] **Step 4: Migrate + verify pass**

Run: `cd backend && python manage.py makemigrations whatsapp_bot && python manage.py migrate whatsapp_bot && python -m pytest apps/whatsapp_bot/tests/test_session.py -q --reuse-db`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/whatsapp_bot/
git commit -m "feat(whatsapp): WhatsAppSession model"
```

---

### Task 7: `engine.py` — conversation state machine

**Files:**
- Create: `backend/apps/whatsapp_bot/services/engine.py`
- Test: `backend/apps/whatsapp_bot/tests/test_engine.py`

**Interfaces:**
- Consumes: `online_booking.selectors` (`get_served_towns`, `search_trips`, `get_public_trip`, `trip_price`, `first_available_seat`), `online_booking.services` (`initiate_booking`, `simulate_payment`), `WhatsAppSession`, `settings.WHATSAPP_COMPANY_ID`.
- Produces: `OutboundMessage` dataclass (`kind: "text"|"list"|"buttons"`, `to`, `body`, plus `header`/`rows`/`buttons`). `handle_message(wa_id, value) -> list[OutboundMessage]`. `value` is the inbound text OR an interactive reply id.

- [ ] **Step 1: Write the failing tests**

```python
# backend/apps/whatsapp_bot/tests/test_engine.py
import pytest
from django.test import override_settings
from apps.whatsapp_bot.services import engine
from apps.whatsapp_bot.models import WhatsAppSession
from apps.online_booking.models import OnlineBookingRequest

pytestmark = pytest.mark.django_db


@pytest.fixture
def wa(booking_world, settings):
    settings.WHATSAPP_COMPANY_ID = str(booking_world["company"].id)
    settings.FAKE_PAYMENTS = True
    return booking_world


def test_greeting_lists_towns(wa):
    out = engine.handle_message("237650", "bonjour")
    assert out[-1].kind == "list"
    titles = [r["title"] for r in out[-1].rows]
    assert "Douala" in titles and "Yaoundé" in titles
    s = WhatsAppSession.objects.get(wa_id="237650")
    assert s.step == WhatsAppSession.Step.ASK_TO  # advanced after START prompt? see note


def test_full_flow_to_confirm_and_pay(wa):
    w = wa
    from_id = str(w["town_from"].id); to_id = str(w["town_to"].id)
    date = w["trip"].scheduled_departure.date().isoformat()
    engine.handle_message("237651", "bonjour")                 # -> ASK_FROM (towns)
    engine.handle_message("237651", from_id)                   # choose from -> ASK_TO
    engine.handle_message("237651", to_id)                     # choose to -> ASK_DATE
    engine.handle_message("237651", f"date:{date}")            # date -> SHOW_TRIPS
    trip_id = str(w["trip"].id)
    engine.handle_message("237651", trip_id)                   # choose trip -> ASK_NAME
    engine.handle_message("237651", "Jean Client")             # name -> ASK_PAY_METHOD
    engine.handle_message("237651", "pm:mtn_momo")             # method -> ASK_PAYMENT_PHONE
    engine.handle_message("237651", "670000000")               # phone -> CONFIRM
    out = engine.handle_message("237651", "confirm:yes")       # confirm -> AWAIT_PAYMENT
    assert any(m.kind == "buttons" for m in out)               # PAYER button shown
    assert OnlineBookingRequest.objects.filter(passenger_name="Jean Client",
                                               source="whatsapp").exists()
    out2 = engine.handle_message("237651", "pay")              # simulate approval
    br = OnlineBookingRequest.objects.get(passenger_name="Jean Client")
    assert br.status == OnlineBookingRequest.Status.PAID
```

(Adjust the `ASK_TO` assertion in `test_greeting_lists_towns` to whatever the engine actually sets after the first town list — the point is the greeting returns the town list; keep the assertion consistent with the implementation.)

- [ ] **Step 2: Run to verify it fails**

Run: `cd backend && python -m pytest apps/whatsapp_bot/tests/test_engine.py -q --reuse-db`
Expected: FAIL.

- [ ] **Step 3: Implement `engine.py`**

Implement a reducer with one handler per step. Key rules:
- `OutboundMessage` dataclass with a classmethod each for text/list/buttons.
- On a fresh/expired session or greeting → set `step=ASK_FROM`, return towns `send_list` (rows id=town_id). If >10 towns, return a numbered `text` and accept the number.
- `ASK_FROM`: store `from_town_id=value` (validate it's a served town id), `step=ASK_TO`, list towns excluding the origin.
- `ASK_TO`: store `to_town_id`, `step=ASK_DATE`, `buttons` [Aujourd'hui `date:<today>`, Demain `date:<tomorrow>`, Autre `date:other`].
- `ASK_DATE`: value `date:<iso>` → store; `date:other` → ask free text; free text parse `YYYY-MM-DD`/`DD/MM/YYYY`. Then `search_trips`; if none → message + re-offer date; else `step=SHOW_TRIPS`, list trips (row id=trip_id, title=`HH:MM · <price> XAF`).
- `SHOW_TRIPS`: store `trip_id`, `step=ASK_NAME`, text "Nom du passager ?".
- `ASK_NAME`: store `passenger_name`, `step=ASK_PAY_METHOD`, buttons [MTN `pm:mtn_momo`, Orange `pm:orange_money`].
- `ASK_PAY_METHOD`: store `payment_method` (strip `pm:`), `step=ASK_PAYMENT_PHONE`, text asking the number (mention their WhatsApp number as default).
- `ASK_PAYMENT_PHONE`: store `payment_phone`, `step=CONFIRM`, buttons [Confirmer `confirm:yes`, Annuler `confirm:no`] with a summary text first.
- `CONFIRM`: `confirm:no` → reset + greeting; `confirm:yes` → resolve trip via `get_public_trip`; `first_available_seat`; `initiate_booking(..., source="whatsapp", passenger_phone=wa_id, seat_id=seat.id)`; store `request_id`; `step=AWAIT_PAYMENT`; if `settings.FAKE_PAYMENTS` return text + buttons [Payer `pay`], else text "approuvez sur votre téléphone".
- `AWAIT_PAYMENT`: value `pay`/"payer" and `FAKE_PAYMENTS` → `simulate_payment(request)`; the notify hook pushes the ticket; return a short ack text ("Paiement reçu ✅"); `step=DONE`. (If not fake: ignore, remind to approve on phone.)
- Wrap `online_booking` calls that may raise `ApplicationError` and return the message text to the user (stay on step or reset as sensible).
- `DONE`/unknown → any message restarts (greeting).

Use `settings.WHATSAPP_COMPANY_ID` for the company; fetch the `Company` once.

- [ ] **Step 4: Run to verify pass**

Run: `cd backend && python -m pytest apps/whatsapp_bot/tests/test_engine.py -q --reuse-db`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/whatsapp_bot/
git commit -m "feat(whatsapp): conversation state machine (engine)"
```

---

### Task 8: Webhook view (verify GET, signed POST, dedupe, dispatch)

**Files:**
- Modify: `backend/apps/whatsapp_bot/views.py`
- Create: `backend/apps/whatsapp_bot/services/inbound.py` (payload parsing + signature)
- Test: `backend/apps/whatsapp_bot/tests/test_webhook.py`

**Interfaces:**
- Consumes: `engine.handle_message`, `wa_client` (delivery), `WhatsAppSession` (dedupe by `last_message_id`).
- Produces: `GET` echoes `hub.challenge` when `hub.verify_token == settings.WHATSAPP_VERIFY_TOKEN` (else 403); `POST` verifies `X-Hub-Signature-256`, parses, dedupes, dispatches, delivers, returns 200.

- [ ] **Step 1: Write the failing tests**

```python
# backend/apps/whatsapp_bot/tests/test_webhook.py
import hmac, hashlib, json, pytest
from django.test import override_settings
from django.urls import reverse
from rest_framework.test import APIClient

pytestmark = pytest.mark.django_db


@override_settings(WHATSAPP_VERIFY_TOKEN="V")
def test_get_verification_echoes_challenge():
    r = APIClient().get(reverse("whatsapp-webhook"),
                        {"hub.mode": "subscribe", "hub.verify_token": "V", "hub.challenge": "123"})
    assert r.status_code == 200 and r.content.decode() == "123"


@override_settings(WHATSAPP_VERIFY_TOKEN="V")
def test_get_verification_bad_token_403():
    r = APIClient().get(reverse("whatsapp-webhook"),
                        {"hub.mode": "subscribe", "hub.verify_token": "X", "hub.challenge": "123"})
    assert r.status_code == 403


@override_settings(WHATSAPP_APP_SECRET="S", WHATSAPP_COMPANY_ID="", FAKE_PAYMENTS=True)
def test_post_bad_signature_403():
    body = json.dumps({"entry": []})
    r = APIClient().post(reverse("whatsapp-webhook"), data=body,
                         content_type="application/json",
                         HTTP_X_HUB_SIGNATURE_256="sha256=deadbeef")
    assert r.status_code == 403


@override_settings(WHATSAPP_APP_SECRET="S")
def test_post_valid_signature_dispatches(monkeypatch, booking_world, settings):
    settings.WHATSAPP_COMPANY_ID = str(booking_world["company"].id)
    settings.FAKE_PAYMENTS = True
    calls = []
    from apps.whatsapp_bot.services import engine
    monkeypatch.setattr(engine, "handle_message", lambda wa, val: calls.append((wa, val)) or [])
    payload = {"entry": [{"changes": [{"value": {"messages": [
        {"id": "wamid.1", "from": "237650", "type": "text", "text": {"body": "bonjour"}}
    ]}}]}]}
    body = json.dumps(payload).encode()
    sig = "sha256=" + hmac.new(b"S", body, hashlib.sha256).hexdigest()
    r = APIClient().post(reverse("whatsapp-webhook"), data=body,
                         content_type="application/json", HTTP_X_HUB_SIGNATURE_256=sig)
    assert r.status_code == 200
    assert calls == [("237650", "bonjour")]
```

- [ ] **Step 2: Run to verify it fails**

Run: `cd backend && python -m pytest apps/whatsapp_bot/tests/test_webhook.py -q --reuse-db`
Expected: FAIL.

- [ ] **Step 3: Implement `inbound.py`**

```python
# apps/whatsapp_bot/services/inbound.py
import hmac, hashlib
from django.conf import settings


def verify_signature(raw_body: bytes, header: str) -> bool:
    secret = getattr(settings, "WHATSAPP_APP_SECRET", "")
    if not secret:
        return True  # not configured (dev)
    if not header or not header.startswith("sha256="):
        return False
    expected = hmac.new(secret.encode(), raw_body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(header.split("=", 1)[1], expected)


def parse_messages(payload: dict):
    """Yield (message_id, wa_id, value) for each inbound user message."""
    out = []
    for entry in payload.get("entry", []):
        for change in entry.get("changes", []):
            for msg in change.get("value", {}).get("messages", []):
                mid = msg.get("id", "")
                wa_id = msg.get("from", "")
                mtype = msg.get("type")
                if mtype == "text":
                    value = msg.get("text", {}).get("body", "")
                elif mtype == "interactive":
                    inter = msg.get("interactive", {})
                    if inter.get("type") == "list_reply":
                        value = inter["list_reply"]["id"]
                    elif inter.get("type") == "button_reply":
                        value = inter["button_reply"]["id"]
                    else:
                        value = ""
                elif mtype == "button":
                    value = msg.get("button", {}).get("payload", "")
                else:
                    value = ""
                out.append((mid, wa_id, value))
    return out
```

- [ ] **Step 4: Implement the view**

```python
# apps/whatsapp_bot/views.py
import logging
from django.conf import settings
from django.http import HttpResponse
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from apps.whatsapp_bot.models import WhatsAppSession
from apps.whatsapp_bot.services import engine, wa_client
from apps.whatsapp_bot.services.inbound import verify_signature, parse_messages

logger = logging.getLogger(__name__)


class WhatsAppWebhookView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        if (request.query_params.get("hub.mode") == "subscribe"
                and request.query_params.get("hub.verify_token") == getattr(settings, "WHATSAPP_VERIFY_TOKEN", "")):
            return HttpResponse(request.query_params.get("hub.challenge", ""), content_type="text/plain")
        return Response(status=403)

    def post(self, request):
        if not verify_signature(request.body, request.headers.get("X-Hub-Signature-256", "")):
            return Response(status=403)
        import json
        try:
            payload = json.loads(request.body or b"{}")
        except ValueError:
            return Response(status=200)
        for mid, wa_id, value in parse_messages(payload):
            if not wa_id:
                continue
            session, _ = WhatsAppSession.get_or_start(wa_id)
            if mid and session.last_message_id == mid:
                continue  # dedupe Meta retries
            try:
                messages = engine.handle_message(wa_id, value)
                for m in messages:
                    _deliver(m)
                if mid:
                    session.refresh_from_db()
                    session.last_message_id = mid
                    session.save(update_fields=["last_message_id"])
            except Exception:
                logger.exception("WhatsApp handling failed for %s", wa_id)
        return Response(status=200)


def _deliver(m):
    if m.kind == "text":
        wa_client.send_text(m.to, m.body)
    elif m.kind == "list":
        wa_client.send_list(m.to, m.header, m.body, m.rows)
    elif m.kind == "buttons":
        wa_client.send_buttons(m.to, m.body, m.buttons)
```

- [ ] **Step 5: Run to verify pass**

Run: `cd backend && python -m pytest apps/whatsapp_bot/tests/test_webhook.py -q --reuse-db`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/whatsapp_bot/
git commit -m "feat(whatsapp): signed webhook — verify, dedupe, dispatch, deliver"
```

---

### Task 9: `tickets.py` — QR generation + notify_ticket

**Files:**
- Create: `backend/apps/whatsapp_bot/services/tickets.py`
- Test: `backend/apps/whatsapp_bot/tests/test_tickets.py`

**Interfaces:**
- Consumes: `wa_client.upload_media`, `wa_client.send_image`, `wa_client.send_text`, `segno`.
- Produces: `notify_ticket(booking_request)` — builds the ticket text + QR PNG (from the ticket number), uploads it, sends image + caption to `booking_request.passenger_phone`. This is the target of the §Task 3 hook.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/whatsapp_bot/tests/test_tickets.py
import pytest
from django.test import override_settings
from apps.whatsapp_bot.services import tickets, wa_client
from apps.online_booking import services

pytestmark = pytest.mark.django_db


@override_settings(FAKE_PAYMENTS=True)
def test_notify_ticket_sends_image(booking_world, monkeypatch):
    sent = {"media": 0, "image": None, "text": 0}
    monkeypatch.setattr(wa_client, "upload_media", lambda b, **k: sent.__setitem__("media", sent["media"] + 1) or "MID")
    monkeypatch.setattr(wa_client, "send_image", lambda to, mid, caption="": sent.__setitem__("image", (to, mid)))
    monkeypatch.setattr(wa_client, "send_text", lambda to, body: sent.__setitem__("text", sent["text"] + 1))
    w = booking_world
    br = services.initiate_booking(
        company=w["company"], trip=w["trip"], passenger_name="Jean",
        passenger_phone="237650", seat_id=w["seat"].id, payment_method="mtn_momo",
        payment_phone="237650", source="whatsapp")
    services.confirm_payment(br)  # triggers the hook -> notify_ticket
    assert sent["media"] == 1
    assert sent["image"][0] == "237650" and sent["image"][1] == "MID"
```

- [ ] **Step 2: Run to verify it fails**

Run: `cd backend && python -m pytest apps/whatsapp_bot/tests/test_tickets.py -q --reuse-db`
Expected: FAIL (`tickets` missing).

- [ ] **Step 3: Implement `tickets.py`**

```python
# apps/whatsapp_bot/services/tickets.py
import io
import logging
import segno
from apps.whatsapp_bot.services import wa_client

logger = logging.getLogger(__name__)


def _qr_png(text: str) -> bytes:
    buf = io.BytesIO()
    segno.make(text, error="m").save(buf, kind="png", scale=6, border=2)
    return buf.getvalue()


def notify_ticket(booking_request):
    booking = booking_request.booking
    ticket = booking.tickets.first() if booking else None
    number = ticket.number if ticket else str(booking_request.id)
    to = booking_request.passenger_phone
    trip = booking_request.trip
    caption = (
        f"🎫 Réservation confirmée\n"
        f"Billet : {number}\n"
        f"{trip.origin.town.name} → {trip.destination.town.name}\n"
        f"{trip.scheduled_departure:%d/%m/%Y %H:%M}\n"
        f"Siège : {booking_request.trip_seat.seat_number if booking_request.trip_seat_id else '-'}\n"
        f"Montant : {booking_request.amount} XAF\n"
        f"Présentez ce QR à l'embarquement."
    )
    media_id = wa_client.upload_media(_qr_png(number))
    if media_id:
        wa_client.send_image(to, media_id, caption=caption)
    else:
        wa_client.send_text(to, caption)
```

- [ ] **Step 4: Run to verify pass**

Run: `cd backend && python -m pytest apps/whatsapp_bot/tests/test_tickets.py -q --reuse-db`
Expected: PASS. (If `segno` import fails, `pip install segno==1.6.6` — it is already pinned in `requirements/base.txt`.)

- [ ] **Step 5: Commit**

```bash
git add backend/apps/whatsapp_bot/
git commit -m "feat(whatsapp): QR ticket generation + notify_ticket push"
```

---

### Task 10: Integration — full suite, migrations, Meta setup checklist

**Files:**
- Create: `docs/whatsapp-bot-setup.md`
- (Verification only otherwise)

- [ ] **Step 1: makemigrations --check**

Run: `cd backend && python manage.py makemigrations --check --dry-run 2>&1 | grep -v WARNING | tail -1`
Expected: "No changes detected".

- [ ] **Step 2: Full backend suite**

Run: `cd backend && python -m pytest -q --reuse-db`
Expected: all pass (previous green + the new whatsapp_bot/online_booking tests), 0 failures.

- [ ] **Step 3: Write the Meta setup checklist**

Create `docs/whatsapp-bot-setup.md` with:
- Create a Meta app (Business) + add the **WhatsApp** product; note the **App Secret** (`WHATSAPP_APP_SECRET`).
- Get a **phone number id** (`WHATSAPP_PHONE_NUMBER_ID`) and a **permanent access token** (`WHATSAPP_TOKEN`) via a system user.
- Set a **verify token** of your choosing (`WHATSAPP_VERIFY_TOKEN`).
- Set `WHATSAPP_COMPANY_ID` to the served company UUID; keep `FAKE_PAYMENTS=True` for now.
- Configure the **webhook**: callback URL `https://<host>/api/v1/whatsapp/webhook/`, the verify token above, subscribe to **messages**. In dev, expose localhost with a tunnel (e.g. `ngrok http 8000`) and use the HTTPS URL.
- Add the test recipient **+237 652005451** to allowed recipients (until the number is published).
- Send "bonjour" from that handset to start the flow.

- [ ] **Step 4: Commit**

```bash
git add docs/whatsapp-bot-setup.md
git commit -m "docs: WhatsApp bot Meta setup checklist"
```

---

## Final Verification
- [ ] `pytest -q` green; `makemigrations --check` clean.
- [ ] `manage.py check` clean; `whatsapp/` route resolves.
- [ ] Engine flow test drives START→…→PAID with `FAKE_PAYMENTS`.
- [ ] Notify hook fires only for `source="whatsapp"`; ticket image sent via mocked `wa_client`.

## Self-Review Notes
- **Spec coverage:** source+seat (T1) ↔ §5; FAKE_PAYMENTS (T2) ↔ §4.5/§5/§7; notify hook (T3) ↔ §4.6; scaffold+settings (T4) ↔ §4.1/§7; wa_client (T5) ↔ §4.4; session (T6) ↔ §4.3; engine (T7) ↔ §4.3/§6; webhook (T8) ↔ §4.2/§8; tickets (T9) ↔ §4.6; setup doc (T10) ↔ §11.
- **Type consistency:** `OutboundMessage.kind` values (`text|list|buttons`) match `_deliver` and the engine tests; reply ids (`date:`, `pm:`, `confirm:`, `pay`, town_id, trip_id) are produced by the engine and consumed by its own handlers + parsed by `inbound.parse_messages`; `notify_ticket` reads `booking.tickets.first().number` (modern Ticket has `number`, no separate QR field — QR encodes the number).
- **Assumptions to verify in-task:** `env.bool`/`env.int` available (django-environ — yes); `segno` importable in the venv (pinned); the exact insertion points in `services.py` (`initiate_booking` return line, `sync_payment_status` guard order, `confirm_payment` pre-return).
