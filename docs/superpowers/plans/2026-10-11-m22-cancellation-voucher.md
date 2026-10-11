# M22 — Annulation + bon d'annulation — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Motif d'annulation obligatoire + bon d'annulation imprimable (motif, montant remboursé, auteur, date) + vue filtrable des réservations annulées.

**Architecture:** Additif sur l'annulation existante (`cancel_booking` rembourse déjà). Champs d'annulation sur `Booking` ; bon rendu via l'infra `resolve_doc_template`/ticket_render ; liste via `list_bookings(status=cancelled)` étendue.

**Tech Stack:** Django + DRF, pytest, Angular standalone + Transloco.

**Spec:** `docs/superpowers/specs/2026-10-11-m22-cancellation-voucher-design.md`

## Global Constraints

- Tests : `cd backend && ../env/bin/python -m pytest <chemin> -q` (`--create-db` après schéma).
- `makemigrations --check --dry-run` = « No changes detected » avant commit backend.
- Frontend : i18n via `python json.load/dump` + revérif ; gate `cd angular && npx ng build --configuration development`.
- Commits shimi, sans co-auteur Claude.
- Base rouge voyages_booking master : 4 tests (passenger_name, seat_assignment, list_bookings ×2) — baseline.
- **Ne pas changer le calcul du taux de remboursement** (`refund_rate`, existant) ; M22 est additif.

## Review Focus

- **Motif contournable** : `cancel_booking` sans `reason` → doit lever (avant toute mutation). Test Task 1.
- **Montant remboursé faux** : `refund_amount` doit refléter le(s) remboursement(s) réellement effectués. Test Task 1.
- **Non-régression annulation** : sièges toujours libérés + remboursement émis. Test Task 1.
- **Fuite liste inter-société / non-annulés** : la liste n'affiche que les annulés de la société. Test Task 2.
- **Bon vide** : le HTML du bon contient réf + motif + montant. Test Task 2.

---

## Task 1 : Backend — champs d'annulation + motif + montant remboursé

**Files:**
- Modify: `backend/apps/voyages_booking/models/booking.py` (4 champs)
- Modify: `backend/apps/voyages_booking/services/booking_services.py` (`cancel_booking(reason=…)` + capture refund)
- Modify: `backend/apps/voyages_booking/config_api/views.py` (`BookingCancelView`, `BookingDetailView.delete` passent le motif)
- Create: `backend/apps/voyages_booking/test_m22_cancel.py`
- Migration auto

**Interfaces:**
- Produces: `Booking.cancellation_reason/cancelled_at/cancelled_by/refund_amount` ; `cancel_booking(booking, *, user, reason="")`.

- [ ] **Step 1 : Test rouge** — `test_m22_cancel.py`. Réutiliser `_setup` + `_book` de `tests_integration_treasury` (booking payé) + ouvrir une caisse + configurer un taux de remboursement > 0 (sinon refund_amount=0). Cas :
  - `cancel_booking(b, user=admin, reason="")` → `ApplicationError`.
  - `cancel_booking(b, user=admin, reason="erreur")` → `b.status == cancelled`, `cancellation_reason=="erreur"`, `cancelled_by==admin`, `cancelled_at` non nul, sièges libérés (TripSeat AVAILABLE).
  - avec un taux refund configuré, `refund_amount` == montant remboursé (> 0).

  Config du taux : `from apps.treasury.services.refund_config import set_refund_rate` (ou set_refund_rates) — vérifier la signature ; sinon créer la config refund directement. Ouvrir la caisse via `create_cash_register` + `open_session` (le refund décaisse).

- [ ] **Step 2 : rouge** `../env/bin/python -m pytest apps/voyages_booking/test_m22_cancel.py -q --create-db`

- [ ] **Step 3 : Modèle** — `booking.py` : ajouter
```python
cancellation_reason = models.CharField(_("motif d'annulation"), max_length=255, blank=True)
cancelled_at = models.DateTimeField(_("annulée le"), null=True, blank=True)
cancelled_by = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("annulée par"),
                                 on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
refund_amount = models.DecimalField(_("montant remboursé"), max_digits=12, decimal_places=2, default=0)
```
(vérifier l'import `settings`.)

- [ ] **Step 4 : Migration** `makemigrations voyages_booking` (AddField ×4).

- [ ] **Step 5 : `cancel_booking`** — signature `(..., reason="")` ; en tête (avant toute mutation, après le garde BOARDED) :
  `if not (reason or "").strip(): raise ApplicationError(_("Le motif d'annulation est obligatoire."))`.
  Capturer les remboursements : `tkt = refund_on_cancel(...ticket...)` et `bg = refund_on_cancel(...bagage...)` (ils retournent le mouvement ou None) → `refund_total = (tkt.amount if tkt else 0) + (bg.amount if bg else 0)`.
  Avant le `return` : `booking.cancellation_reason = reason; booking.cancelled_at = timezone.now(); booking.cancelled_by = user; booking.refund_amount = refund_total; booking.save(update_fields=[...])`.

- [ ] **Step 6 : Vues** — `BookingCancelView.post` et `BookingDetailView.delete` : `reason = request.data.get("cancellation_reason", "")` → `services.cancel_booking(b, user=request.user, reason=reason)` ; `ApplicationError` → `error_response(str(e))`.

- [ ] **Step 7 : vert + non-régression + check**
Run: `../env/bin/python -m pytest apps/voyages_booking/test_m22_cancel.py -q --create-db` → PASS
Run: `../env/bin/python -m pytest apps/voyages_booking -q --reuse-db` → seuls les 4 rouges de base
Run: `makemigrations --check --dry-run` → No changes detected

- [ ] **Step 8 : Commit** `git commit -m "feat(voyages): cancellation reason + refund amount on booking (M22)"`

---

## Task 2 : Backend — bon d'annulation + liste des annulations

**Files:**
- Modify: `backend/apps/voyages_booking/config_api/views.py` (`render_cancellation_voucher_html`, `BookingCancellationVoucherView`, `CancelledBookingsView`)
- Modify: `backend/apps/voyages_booking/selectors/__init__.py` (`list_cancelled_bookings`)
- Modify: `backend/apps/voyages_booking/urls.py` (2 routes)
- Modify: `backend/apps/voyages_booking/config_api/serializers.py` si un sérialiseur liste dédié est utile (sinon réutiliser `BookingRead`)
- Create: `backend/apps/voyages_booking/test_m22_api.py`

**Interfaces:**
- Consumes: champs d'annulation (Task 1).
- Produces: `GET /voyages/booking/bookings/<uuid:pk>/cancellation-voucher/` → `{html}` ; `GET /voyages/booking/bookings/cancelled/?date_from&date_to&agency&trip&cashier`.

- [ ] **Step 1 : Test rouge** `test_m22_api.py` (APIClient) : annuler un booking (POST cancel avec motif), puis
  - GET cancellation-voucher → 200, `html` non vide contenant la référence + le motif.
  - GET bookings/cancelled/ → contient le booking annulé ; filtre `?trip=<outbound>` le garde, `?cashier=<autre>` l'exclut ; un booking non annulé n'apparaît pas.

- [ ] **Step 2 : rouge.**

- [ ] **Step 3 : Bon render** — `render_cancellation_voucher_html(request, b)` (à côté de `render_booking_tickets_html`) : réutiliser `resolve_doc_template` + tokens société ; produire un HTML avec en-tête société, référence booking, lignes billets (passager/trajet/siège), **motif** (`b.cancellation_reason`), **montant remboursé** (`b.refund_amount`), **auteur** (`b.cancelled_by`), **date** (`b.cancelled_at`). Vue `BookingCancellationVoucherView` (`GET`, perm `ticketing.ticket.view`) → `success_response({"html": ...})` (modèle de `BookingRenderTicketsView`).

- [ ] **Step 4 : Selector** `list_cancelled_bookings(company, *, date_from=None, date_to=None, agency_id=None, trip_id=None, cashier_id=None, user=None)` : `Booking.objects.filter(company=company, status=Booking.Status.CANCELLED, is_deleted=False)` + filtres (`cancelled_at__date__gte/lte`, `agency_id`, `outbound_trip_id`, `cancelled_by_id`) + scoping agence existant (`scope_by_agency`) ; `select_related` buyer/outbound_trip ; `order_by("-cancelled_at")`.

- [ ] **Step 5 : Vue liste + URLs** — `CancelledBookingsView` (`GET`, perm `ticketing.booking.cancel`) lit les query params → `list_cancelled_bookings` → `BookingRead(many=True)` (ou un sérialiseur léger avec refund_amount + cancellation_reason + cancelled_by name). URLs :
```python
    path("bookings/cancelled/", v.CancelledBookingsView.as_view()),
    path("bookings/<uuid:pk>/cancellation-voucher/", v.BookingCancellationVoucherView.as_view()),
```
  **Ordre** : placer `bookings/cancelled/` AVANT `bookings/<uuid:pk>/` dans `urls.py` (sinon « cancelled » serait capté comme un uuid → non, uuid ne matche pas « cancelled », mais placer avant par clarté). Vérifier que `BookingRead` expose `cancellation_reason`/`refund_amount`/`cancelled_*` (sinon les ajouter).

- [ ] **Step 6 : vert + non-régression + check.**

- [ ] **Step 7 : Commit** `git commit -m "feat(voyages): cancellation voucher render + cancelled list endpoint (M22)"`

---

## Task 3 : Frontend — motif à l'annulation + page « Tickets annulés »

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (endpoints voucher + cancelled)
- Modify: `angular/src/_api/services/voyages-booking/booking.service.ts` (`cancel(id, reason)`, `cancellationVoucher(id)`, `cancelledBookings(filters)`)
- Modify: lieux d'annulation (bookings list / booking-detail) : modale motif avant annulation
- Create: page `angular/src/_api/pages/voyages-booking/cancelled/cancelled.component.{ts,html}` + route + menu
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

- [ ] **Step 1 : Endpoints + service** — `bookingCancellationVoucher(id)`, `bookingsCancelled` ; `cancel(id, reason)` POST `{cancellation_reason: reason}` ; `cancelledBookings(params)` GET ; `cancellationVoucher(id)` GET `{html}`.
- [ ] **Step 2 : Motif à l'annulation** — là où l'annulation est déclenchée, ouvrir une modale « Motif d'annulation » (input requis) → appeler `cancel(id, reason)`. Toast erreur si motif vide (ou backend 400).
- [ ] **Step 3 : Page « Tickets annulés »** — tableau des réservations annulées (réf, passager, voyage, montant remboursé, caissier, date, motif) + filtres (date, agence, voyage, caissier) ; bouton **« Bon d'annulation »** → `cancellationVoucher(id)` → `printHtml(r.html)`.
- [ ] **Step 4 : Route + menu** — route `/voyages-booking/cancelled` + entrée menu Réservations « Tickets annulés » (perm `ticketing.booking.cancel`).
- [ ] **Step 5 : i18n** `booking.cancel.reason`, `booking.cancelled.title`, colonnes/filtres, `booking.cancelled.voucher` ×4.
- [ ] **Step 6 : Build** `npx ng build --configuration development` → complete.
- [ ] **Step 7 : Commit** `git commit -m "feat(voyages): motif d'annulation + page Tickets annulés + bon (frontend) (M22)"`

---

## Notes d'implémentation

- M22 est additif : l'annulation/remboursement existant reste ; on capture juste le motif +
  le montant remboursé et on expose bon + liste.
- `refund_on_cancel` retourne le mouvement (ou None) ; sommer `.amount` ticket + bagage.
- Pour le test du montant : configurer un taux de remboursement > 0 (sinon refund_amount=0 légitimement).
- Réutiliser `render_booking_tickets_html` comme modèle du bon (mêmes tokens/doc template).
- Le DELETE de `BookingDetailView` n'a pas toujours de corps ; le front annule via POST
  `bookings/<id>/cancel/` avec le motif. Le DELETE lira aussi `cancellation_reason` s'il est fourni.
