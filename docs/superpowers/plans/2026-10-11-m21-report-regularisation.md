# M21 — Report & régularisation — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reporter un billet (même route, prix inchangé) et le régulariser (surclassement/destination, différence encaissée), avec historique. Déclassement et baisse de tarif refusés.

**Architecture:** Nouveau modèle `TicketAdjustment` (journal). Services `report_ticket` / `regularize_ticket` réutilisant `_pick_seat`/`_resolve_destination`/`resolve_fare`/`record_booking_payment`. Endpoints + historique + frontend.

**Tech Stack:** Django + DRF, pytest, Angular standalone + Transloco.

**Spec:** `docs/superpowers/specs/2026-10-11-m21-report-regularisation-design.md`

## Global Constraints

- Tests : `cd backend && ../env/bin/python -m pytest <chemin> -q` (`--create-db` après schéma).
- `makemigrations --check --dry-run` = « No changes detected » avant commit backend.
- Frontend : i18n via `python json.load/dump` + revérif ; gate `cd angular && npx ng build --configuration development`.
- Commits shimi, sans co-auteur Claude.
- Base rouge voyages_booking master : 4 tests (passenger_name, seat_assignment, list_bookings ×2) — baseline.
- Surclassement mesuré par `FareClass.rank` (≥ OK, < refusé). Report = même route (prix inchangé).

## Review Focus

- **Déclassement autorisé par erreur** : `regularize_ticket` vers une classe de rang inférieur doit lever. Test Task 1.
- **Baisse de tarif** : une régularisation qui réduirait le tarif doit lever (pas de remboursement). Test Task 1.
- **Report change le prix / autre route** : report vers une autre route doit lever ; même route → `amount` inchangé, aucun mouvement. Test Task 1.
- **Différence non encaissée** : un surclassement avec diff > 0 doit créer un mouvement INCOME de `diff`. Test Task 1.
- **Billet non vendu** : report/régularisation d'un billet annulé/embarqué/réservé → lève. Test Task 1.

---

## Task 1 : Backend — modèle + services report/régularisation

**Files:**
- Create: `backend/apps/voyages_booking/models/adjustment.py`
- Modify: `backend/apps/voyages_booking/models/__init__.py` (export)
- Create: `backend/apps/voyages_booking/services/adjustment_services.py`
- Modify: `backend/apps/voyages_booking/services/__init__.py` (exports)
- Create: `backend/apps/voyages_booking/test_m21_adjust.py`
- Migration auto

**Interfaces:**
- Produces: `TicketAdjustment` ; `report_ticket(ticket, *, new_trip, new_seat_id=None, reason="", user)` ; `regularize_ticket(ticket, *, new_fare_class=None, new_destination_id=None, payment_method, reason="", user)`.

- [ ] **Step 1 : Test rouge** — `test_m21_adjust.py`. Fixture : réutiliser `_setup` (route A→B, fareclass ECO, un voyage, tarif one_way) + créer une 2ᵉ FareClass VIP (rank 2) + un tarif VIP plus élevé + un 2ᵉ voyage même route (pour le report) + une caisse ouverte + un billet vendu (`_book`). Cas :
  - report vers voyage même route → `ticket.trip == new_trip`, ancien siège `AVAILABLE`, `ticket.amount` inchangé, un `TicketAdjustment(kind=report, price_difference=0)`, aucun mouvement INCOME de report.
  - report vers une autre route → `ApplicationError`.
  - report d'un billet annulé → `ApplicationError`.
  - régularisation ECO→VIP (tarif +X) → diff encaissée (Transaction INCOME de X), `ticket.fare_class==VIP`, `ticket.amount` augmenté, `TicketAdjustment(kind=regularisation, price_difference=X)`.
  - régularisation VIP→ECO → `ApplicationError` (déclassement).
  - régularisation qui baisserait le tarif → `ApplicationError`.

- [ ] **Step 2 : rouge** `../env/bin/python -m pytest apps/voyages_booking/test_m21_adjust.py -q --create-db`

- [ ] **Step 3 : Modèle** `adjustment.py` :

```python
from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class TicketAdjustment(BaseModel):
    class Kind(models.TextChoices):
        REPORT        = "report",        _("Report")
        REGULARISATION = "regularisation", _("Régularisation")

    company = models.ForeignKey("system_config.Company", on_delete=models.CASCADE, related_name="ticket_adjustments")
    ticket  = models.ForeignKey("voyages_booking.Ticket", on_delete=models.CASCADE, related_name="adjustments")
    booking = models.ForeignKey("voyages_booking.Booking", on_delete=models.CASCADE, related_name="ticket_adjustments")
    kind    = models.CharField(_("type"), max_length=15, choices=Kind.choices)
    from_trip = models.ForeignKey("voyages_trips.Trip", on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    to_trip   = models.ForeignKey("voyages_trips.Trip", on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    from_fare_class = models.ForeignKey("voyages_config.FareClass", on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    to_fare_class   = models.ForeignKey("voyages_config.FareClass", on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    from_destination = models.ForeignKey("voyages_config.ServicePoint", on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    to_destination   = models.ForeignKey("voyages_config.ServicePoint", on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    price_difference = models.DecimalField(_("différence"), max_digits=12, decimal_places=2, default=0)
    reason  = models.CharField(_("motif"), max_length=255, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("ajustement de billet")
        ordering = ["-created_at"]
```
Exporter dans `models/__init__.py`.

- [ ] **Step 4 : Migration** `makemigrations voyages_booking` (CreateModel).

- [ ] **Step 5 : Services** `adjustment_services.py` :

```python
from decimal import Decimal
from django.db import transaction
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.voyages_booking.models import Ticket, TicketAdjustment
from apps.voyages_booking.services import booking_services as B


def _assert_sold(ticket):
    if ticket.status != Ticket.Status.SOLD:
        raise ApplicationError(_("Seul un billet vendu peut être reporté ou régularisé."))


@transaction.atomic
def report_ticket(ticket, *, new_trip, new_seat_id=None, reason="", user=None):
    _assert_sold(ticket)
    if new_trip.route_id != ticket.trip.route_id:
        raise ApplicationError(_("Le report n'est possible que vers un voyage de la même route."))
    B._assert_bookable(new_trip)
    from apps.voyages_trips.models import TripSeat
    old_seat = ticket.trip_seat
    old_trip = ticket.trip
    new_seat = B._pick_seat(new_trip, new_seat_id)
    if old_seat:
        old_seat.status = TripSeat.Status.AVAILABLE
        old_seat.booking_id = None
        old_seat.updated_by = user
        old_seat.save(update_fields=["status", "booking_id", "updated_by", "updated_at"])
    ticket.trip = new_trip
    ticket.trip_seat = new_seat
    ticket.updated_by = user
    ticket.save(update_fields=["trip", "trip_seat", "updated_by", "updated_at"])
    new_seat.status = TripSeat.Status.SOLD
    new_seat.booking_id = ticket.booking_id
    new_seat.updated_by = user
    new_seat.save(update_fields=["status", "booking_id", "updated_by", "updated_at"])
    return TicketAdjustment.objects.create(
        company=ticket.booking.company, ticket=ticket, booking=ticket.booking,
        kind=TicketAdjustment.Kind.REPORT, from_trip=old_trip, to_trip=new_trip,
        price_difference=Decimal("0"), reason=reason, created_by=user)


@transaction.atomic
def regularize_ticket(ticket, *, new_fare_class=None, new_destination_id=None, payment_method="", reason="", user=None):
    _assert_sold(ticket)
    booking = ticket.booking
    company = booking.company
    target_class = new_fare_class or ticket.fare_class
    if target_class.rank < ticket.fare_class.rank:
        raise ApplicationError(_("Déclassement interdit : seul le surclassement est permis."))
    dest = (B._resolve_destination(ticket.trip, new_destination_id)
            if new_destination_id is not None else ticket.destination_point) or ticket.trip.destination
    from apps.voyages_pricing.selectors.fare_selectors import resolve_fare
    fare = resolve_fare(company, ticket.trip.route, ticket.trip.origin, dest, target_class,
                        trip_type=booking.trip_type)
    if not fare:
        raise ApplicationError(_("Aucun tarif défini pour cette régularisation."))
    diff = Decimal(str(fare.amount)) - (ticket.amount or Decimal("0"))
    if diff < 0:
        raise ApplicationError(_("La régularisation ne peut pas diminuer le tarif."))
    from_class = ticket.fare_class
    from_dest = ticket.destination_point
    if diff > 0:
        from apps.treasury.services import record_booking_payment
        record_booking_payment(company, booking=booking, amount=diff, payment_method=payment_method, user=user)
        booking.amount_due = (booking.amount_due or Decimal("0")) + diff
        booking.amount_paid = (booking.amount_paid or Decimal("0")) + diff
        booking.updated_by = user
        booking.save(update_fields=["amount_due", "amount_paid", "updated_by", "updated_at"])
    ticket.fare_class = target_class
    ticket.destination_point = dest
    ticket.fare = fare
    ticket.amount = fare.amount
    ticket.updated_by = user
    ticket.save(update_fields=["fare_class", "destination_point", "fare", "amount", "updated_by", "updated_at"])
    return TicketAdjustment.objects.create(
        company=company, ticket=ticket, booking=booking, kind=TicketAdjustment.Kind.REGULARISATION,
        from_fare_class=from_class, to_fare_class=target_class, from_destination=from_dest,
        to_destination=dest, price_difference=diff, reason=reason, created_by=user)
```
Exporter `report_ticket`, `regularize_ticket` dans `services/__init__.py`.

- [ ] **Step 6 : vert + non-régression + check**
Run: `../env/bin/python -m pytest apps/voyages_booking/test_m21_adjust.py -q --create-db` → PASS
Run: `../env/bin/python -m pytest apps/voyages_booking -q --reuse-db` → seuls les 4 rouges de base
Run: `makemigrations --check --dry-run` → No changes detected

- [ ] **Step 7 : Commit** `git commit -m "feat(voyages): ticket report + régularisation services + journal (M21)"`

---

## Task 2 : Backend — endpoints + sérialiseur + historique

**Files:**
- Modify: `backend/apps/voyages_booking/config_api/views.py` (`TicketReportView`, `TicketRegularizeView`, `AdjustmentListView`)
- Modify: `backend/apps/voyages_booking/config_api/serializers.py` (`TicketAdjustmentSerializer`)
- Modify: `backend/apps/voyages_booking/urls.py` (3 routes)
- Create: `backend/apps/voyages_booking/test_m21_api.py`

**Interfaces:**
- Consumes: services Task 1.
- Produces: `POST tickets/<pk>/report/`, `POST tickets/<pk>/regularize/`, `GET adjustments/?ticket&booking&kind&date_from&date_to`.

- [ ] **Step 1 : Test rouge** `test_m21_api.py` (APIClient) : vendre un billet, POST report (même route) → 200 + billet déplacé ; POST regularize (ECO→VIP) → 200 + diff ; GET adjustments → 2 entrées ; filtre `?kind=report` → 1.

- [ ] **Step 2 : rouge.**

- [ ] **Step 3 : Serializer** `TicketAdjustmentSerializer` (ModelSerializer) : id, kind, kind_display, from_trip/to_trip (number via SerializerMethodField ou source), from/to_fare_class (name), from/to_destination (name), price_difference, reason, created_by_name, created_at.

- [ ] **Step 4 : Vues** :
  - helper `_ticket(company, pk, user)` : récupère un Ticket de la société (via booking scoping) ; 404 sinon.
  - `TicketReportView` (`POST`, perm `ticketing.booking.create`) : résout `new_trip` (`_trip`), `services.report_ticket(ticket, new_trip=…, new_seat_id=request.data.get("new_seat_id"), reason=…, user=…)` ; `ApplicationError` → `error_response`.
  - `TicketRegularizeView` (`POST`, perm `ticketing.booking.create`) : résout `new_fare_class` (FareClass company-scoped si `new_fare_class_id`), `services.regularize_ticket(ticket, new_fare_class=…, new_destination_id=request.data.get("new_destination_id"), payment_method=request.data.get("payment_method",""), reason=…, user=…)`.
  - `AdjustmentListView` (`GET`, perm `ticketing.ticket.view`) : filtre `TicketAdjustment` par société + query params (ticket, booking, kind, date range) → sérialisé.

- [ ] **Step 5 : URLs** :
```python
    path("tickets/<uuid:pk>/report/", v.TicketReportView.as_view()),
    path("tickets/<uuid:pk>/regularize/", v.TicketRegularizeView.as_view()),
    path("adjustments/", v.AdjustmentListView.as_view()),
```

- [ ] **Step 6 : vert + non-régression + check.**

- [ ] **Step 7 : Commit** `git commit -m "feat(voyages): report/regularize endpoints + adjustments history (M21)"`

---

## Task 3 : Frontend — actions report/régularisation + historique

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (endpoints)
- Modify: `angular/src/_api/services/voyages-booking/booking.service.ts` (`reportTicket`, `regularizeTicket`, `adjustments`)
- Modify: `booking-detail.component.{ts,html}` (actions par billet + historique des ajustements)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

- [ ] **Step 1 : Endpoints + service** — `ticketReport(id)`, `ticketRegularize(id)`, `bookingAdjustments` ; méthodes `reportTicket(id, {new_trip_id, new_seat_id?, reason})`, `regularizeTicket(id, {new_fare_class_id?, new_destination_id?, payment_method, reason})`, `adjustments(params)`.
- [ ] **Step 2 : Report UI** — sur un billet vendu (booking-detail) : bouton **« Reporter »** → modale : choisir un voyage **même route** (réutiliser `bookableTrips` filtré par la route du billet) + siège (seatMap) + motif → `reportTicket`.
- [ ] **Step 3 : Régularisation UI** — bouton **« Régulariser »** → modale : choisir classe (fareClasses) et/ou destination (destinations du voyage) + mode de paiement + motif ; afficher la différence (recalcul via le tarif si dispo) ; messages d'erreur backend (déclassement/baisse) via toast.
- [ ] **Step 4 : Historique** — section « Ajustements » sur la réservation listant les `TicketAdjustment` (type, de→vers, différence, motif, auteur, date).
- [ ] **Step 5 : i18n** `booking.adjust.report`, `booking.adjust.regularize`, `booking.adjust.history`, colonnes/messages ×4.
- [ ] **Step 6 : Build** `npx ng build --configuration development` → complete.
- [ ] **Step 7 : Commit** `git commit -m "feat(voyages): report/régularisation + historique (frontend) (M21)"`

---

## Notes d'implémentation

- **Recompute du tarif** : utiliser `resolve_fare(..., target_class, trip_type=booking.trip_type)` — PAS `_price` (qui prend la classe du voyage).
- Report = même route → aucun mouvement de trésorerie ; ne pas toucher `amount`.
- La différence de régularisation s'encaisse via `record_booking_payment` (INCOME lié au booking, validé immédiat) ; caisse ouverte requise (sinon l'erreur « ouvrez une caisse » remonte).
- `_assert_sold` : seuls les billets `SOLD` (pas réservés/embarqués/annulés).
- Vérifier la base rouge voyages_booking (4) avant d'imputer une régression.
