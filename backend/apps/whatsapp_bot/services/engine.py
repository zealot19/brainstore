"""Conversation state machine for the WhatsApp booking bot.

Pure-ish reducer: `handle_message(wa_id, value) -> list[OutboundMessage]`.
`value` is the inbound text OR an interactive reply id. No HTTP here — the
webhook delivers the returned messages via wa_client.
"""
from dataclasses import dataclass, field
from datetime import date, timedelta

from django.conf import settings
from django.utils import timezone

from apps.core.exceptions import ApplicationError
from apps.online_booking import selectors, services
from apps.online_booking.models import OnlineBookingRequest
from apps.whatsapp_bot.models import WhatsAppSession

Step = WhatsAppSession.Step

_RESTART_WORDS = {"bonjour", "salut", "menu", "start", "recommencer", "hi", "hello", "bonsoir"}


@dataclass
class OutboundMessage:
    kind: str            # "text" | "list" | "buttons"
    to: str
    body: str
    header: str = ""
    rows: list = field(default_factory=list)      # [{"id","title"}]
    buttons: list = field(default_factory=list)   # [{"id","title"}]

    @classmethod
    def text(cls, to, body):
        return cls("text", to, body)

    @classmethod
    def list(cls, to, header, body, rows):
        return cls("list", to, body, header=header, rows=rows)

    @classmethod
    def buttons(cls, to, body, buttons):
        return cls("buttons", to, body, buttons=buttons)


def _company():
    from apps.system_config.models import Company
    return Company.objects.get(id=settings.WHATSAPP_COMPANY_ID, is_deleted=False)


def _present_choices(to, header, body, items, session, key):
    """items: [(id, title)]. Store ids for resolution; list if <=10 else numbered text."""
    ids = [i for i, _ in items]
    session.context[f"{key}_ids"] = ids
    if len(items) <= 10:
        rows = [{"id": i, "title": t} for i, t in items]
        return OutboundMessage.list(to, header, body, rows)
    lines = [body] + [f"{n}. {t}" for n, (_, t) in enumerate(items, 1)]
    return OutboundMessage.text(to, "\n".join(lines))


def _resolve_choice(session, value, key):
    ids = session.context.get(f"{key}_ids", [])
    v = value.strip()
    if v in ids:
        return v
    if v.isdigit() and 1 <= int(v) <= len(ids):
        return ids[int(v) - 1]
    return None


def _parse_date(text):
    t = text.strip()
    for fmt in ("%Y-%m-%d", "%d/%m/%Y", "%d-%m-%Y"):
        try:
            from datetime import datetime
            return datetime.strptime(t, fmt).date()
        except ValueError:
            continue
    return None


# ── Step builders ────────────────────────────────────────────────────────────

def _ask_from(to, company, session):
    session.step = Step.ASK_FROM
    towns = list(selectors.get_served_towns(company.id))
    items = [(str(t.id), t.name) for t in towns]
    greet = OutboundMessage.text(to, "Bonjour 👋 Bienvenue au service de réservation.")
    return [greet, _present_choices(to, "Départ", "D'où partez-vous ?", items, session, "from")]


def _ask_to(to, company, session, from_id):
    session.step = Step.ASK_TO
    towns = [t for t in selectors.get_served_towns(company.id) if str(t.id) != from_id]
    items = [(str(t.id), t.name) for t in towns]
    return [_present_choices(to, "Destination", "Vers quelle ville ?", items, session, "to")]


def _ask_date(to, session):
    session.step = Step.ASK_DATE
    today = timezone.localdate()
    tomorrow = today + timedelta(days=1)
    return [OutboundMessage.buttons(to, "Quel jour voyagez-vous ?", [
        {"id": f"date:{today.isoformat()}", "title": "Aujourd'hui"},
        {"id": f"date:{tomorrow.isoformat()}", "title": "Demain"},
        {"id": "date:other", "title": "Autre date"},
    ])]


def _show_trips(to, company, session, travel_date):
    trips = selectors.search_trips(
        company.id,
        from_town_id=session.context["from_town_id"],
        to_town_id=session.context["to_town_id"],
        travel_date=travel_date,
    )
    if not trips:
        return [OutboundMessage.text(to, "Aucun voyage disponible ce jour-là. Essayez une autre date.")] \
            + _ask_date(to, session)
    session.step = Step.SHOW_TRIPS
    items = []
    for t in trips:
        fare = selectors.trip_price(t)
        price = f"{fare.amount:g} XAF" if fare else "tarif n/d"
        hhmm = timezone.localtime(t.scheduled_departure).strftime("%H:%M")
        items.append((str(t.id), f"{hhmm} · {price}"))
    return [_present_choices(to, "Voyages", "Choisissez votre voyage :", items, session, "trip")]


def _summary_and_confirm(to, company, session):
    session.step = Step.CONFIRM
    ctx = session.context
    trip = selectors.get_public_trip(ctx["trip_id"], company.id)
    fare = selectors.trip_price(trip) if trip else None
    price = f"{fare.amount:g} XAF" if fare else "n/d"
    when = timezone.localtime(trip.scheduled_departure).strftime("%d/%m/%Y %H:%M") if trip else "?"
    body = (
        "Veuillez confirmer :\n"
        f"Trajet : {trip.origin.town.name} → {trip.destination.town.name}\n"
        f"Date : {when}\n"
        f"Passager : {ctx['passenger_name']}\n"
        f"Paiement : {ctx['payment_method']} ({ctx['payment_phone']})\n"
        f"Montant : {price} (siège attribué automatiquement)"
    )
    return [OutboundMessage.buttons(to, body, [
        {"id": "confirm:yes", "title": "Confirmer"},
        {"id": "confirm:no", "title": "Annuler"},
    ])]


# ── Main reducer ─────────────────────────────────────────────────────────────

def handle_message(wa_id, value):
    session, _ = WhatsAppSession.get_or_start(wa_id)
    if session.is_expired:
        session.reset()
    value = (value or "").strip()
    low = value.lower()
    company = _company()

    # Global restart on greeting keywords (unless mid-payment).
    if low in _RESTART_WORDS and session.step != Step.AWAIT_PAYMENT:
        session.reset()

    try:
        out = _dispatch(wa_id, value, low, session, company)
    except ApplicationError as e:
        out = [OutboundMessage.text(wa_id, str(e))]

    session.save(update_fields=["step", "context", "updated_at"])
    return out


def _dispatch(to, value, low, session, company):
    step = session.step
    ctx = session.context

    if step in (Step.START, Step.DONE):
        return _ask_from(to, company, session)

    if step == Step.ASK_FROM:
        chosen = _resolve_choice(session, value, "from")
        if not chosen:
            return _ask_from(to, company, session)
        ctx["from_town_id"] = chosen
        return _ask_to(to, company, session, chosen)

    if step == Step.ASK_TO:
        chosen = _resolve_choice(session, value, "to")
        if not chosen:
            return _ask_to(to, company, session, ctx.get("from_town_id", ""))
        ctx["to_town_id"] = chosen
        return _ask_date(to, session)

    if step == Step.ASK_DATE:
        if value == "date:other":
            return [OutboundMessage.text(to, "Envoyez la date au format JJ/MM/AAAA.")]
        raw = value[5:] if value.startswith("date:") else value
        d = _parse_date(raw)
        if not d:
            return [OutboundMessage.text(to, "Date invalide.")] + _ask_date(to, session)
        ctx["travel_date"] = d.isoformat()
        return _show_trips(to, company, session, d)

    if step == Step.SHOW_TRIPS:
        chosen = _resolve_choice(session, value, "trip")
        if not chosen:
            return [OutboundMessage.text(to, "Voyage introuvable, choisissez dans la liste.")]
        ctx["trip_id"] = chosen
        session.step = Step.ASK_NAME
        return [OutboundMessage.text(to, "Nom complet du passager ?")]

    if step == Step.ASK_NAME:
        if not value:
            return [OutboundMessage.text(to, "Veuillez indiquer le nom du passager.")]
        ctx["passenger_name"] = value
        session.step = Step.ASK_PAY_METHOD
        return [OutboundMessage.buttons(to, "Mode de paiement ?", [
            {"id": "pm:mtn_momo", "title": "MTN MoMo"},
            {"id": "pm:orange_money", "title": "Orange Money"},
        ])]

    if step == Step.ASK_PAY_METHOD:
        if value not in ("pm:mtn_momo", "pm:orange_money"):
            return [OutboundMessage.buttons(to, "Choisissez le mode de paiement :", [
                {"id": "pm:mtn_momo", "title": "MTN MoMo"},
                {"id": "pm:orange_money", "title": "Orange Money"},
            ])]
        ctx["payment_method"] = value[3:]
        session.step = Step.ASK_PAYMENT_PHONE
        return [OutboundMessage.text(
            to, f"Numéro Mobile Money à débiter ? (par défaut votre numéro WhatsApp {to})")]

    if step == Step.ASK_PAYMENT_PHONE:
        phone = value or to
        ctx["payment_phone"] = phone
        return _summary_and_confirm(to, company, session)

    if step == Step.CONFIRM:
        if value == "confirm:no":
            session.reset()
            return _ask_from(to, company, session)
        if value != "confirm:yes":
            return _summary_and_confirm(to, company, session)
        trip = selectors.get_public_trip(ctx["trip_id"], company.id)
        if not trip:
            session.reset()
            return [OutboundMessage.text(to, "Ce voyage n'est plus disponible.")] \
                + _ask_from(to, company, session)
        seat = selectors.first_available_seat(trip)
        br = services.initiate_booking(
            company=company, trip=trip,
            passenger_name=ctx["passenger_name"], passenger_phone=to,
            seat_id=seat.id, payment_method=ctx["payment_method"],
            payment_phone=ctx["payment_phone"], source="whatsapp")
        ctx["request_id"] = str(br.id)
        session.step = Step.AWAIT_PAYMENT
        if getattr(settings, "FAKE_PAYMENTS", False):
            return [OutboundMessage.buttons(
                to, "✅ Demande envoyée. Répondez PAYER pour simuler l'approbation Mobile Money.",
                [{"id": "pay", "title": "Payer"}])]
        return [OutboundMessage.text(
            to, f"✅ Demande envoyée. Approuvez le paiement Mobile Money sur {ctx['payment_phone']}.")]

    if step == Step.AWAIT_PAYMENT:
        if getattr(settings, "FAKE_PAYMENTS", False) and low in ("pay", "payer"):
            br = OnlineBookingRequest.objects.filter(id=ctx.get("request_id")).first()
            if br:
                services.simulate_payment(br)   # notify hook pushes the ticket
            session.step = Step.DONE
            return [OutboundMessage.text(to, "Paiement reçu ✅ Votre billet vous a été envoyé.")]
        return [OutboundMessage.text(to, "En attente du paiement. Répondez PAYER pour confirmer.")]

    # Fallback
    session.reset()
    return _ask_from(to, company, session)
