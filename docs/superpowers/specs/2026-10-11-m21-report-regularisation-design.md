# M21 — Report & régularisation des tickets — Design

**Date :** 2026-10-11 · **Module :** `apps/voyages_booking` · **Référence cahier :** M21 (dictée 30)

## Intention

- **Report** : change la date/le voyage d'un billet, **sans impact sur le prix**.
- **Régularisation** : change la catégorie tarifaire et/ou la destination.
  **Déclassement interdit** (VIP → Classique refusé) ; seul le **surclassement** est permis.
  **Encaissement de la différence** si le nouveau tarif est plus élevé.
- **Historique** de tous les reports et régularisations.

## Décisions actées (brainstorm)

- **Report** : uniquement vers un autre voyage **de la même route** (tarif identique → prix inchangé).
- **Régularisation** : si le nouveau tarif serait **inférieur** → **refus** (aucun remboursement ici).
- **Différence** : encaissée **immédiatement** en recette (caisse ouverte requise, comme une vente).

## État existant (réutilisé)

- `Ticket` : `trip`, `trip_seat`, `origin_point`, `destination_point`, `fare_class`, `fare`,
  `amount`, `status`, `direction`.
- `FareClass.rank` (ECO=1, VIP=2, LOC=3) → **rang plus élevé = classe supérieure**.
  Surclassement = `new_rank >= old_rank`.
- Helpers billetterie : `_pick_seat(trip, seat_id)`, `_lock_seat`, `_resolve_destination(trip, id)`,
  `_price(company, trip, dest, trip_type)` (→ `resolve_fare`), `_ticket_number`.
- Recette : `record_booking_payment(company, booking=…, amount=…, payment_method=…, user=…)`
  (mouvement INCOME lié au booking) — réutilisable pour la différence.

## Architecture

### 1. Modèle `TicketAdjustment` (`apps/voyages_booking/models/`)

Journal d'un report ou d'une régularisation.

| Champ | Type |
|-------|------|
| `company` | FK Company CASCADE |
| `ticket` | FK Ticket CASCADE, related_name="adjustments" |
| `booking` | FK Booking CASCADE, related_name="ticket_adjustments" (confort requêtes) |
| `kind` | `report` \| `regularisation` |
| `from_trip` / `to_trip` | FK voyages_trips.Trip SET_NULL null |
| `from_fare_class` / `to_fare_class` | FK FareClass SET_NULL null |
| `from_destination` / `to_destination` | FK ServicePoint SET_NULL null |
| `price_difference` | Decimal (0 pour un report) |
| `reason` | CharField(255, blank) |

`created_by`/`created_at` via `BaseModel`. Ordering `-created_at`.

### 2. Service `report_ticket(ticket, *, new_trip, new_seat_id=None, reason="", user)`

- Billet doit être `SOLD` (ni annulé/embarqué/réservé) — sinon `ApplicationError`.
- `new_trip` **même route** que `ticket.trip` (sinon erreur « report possible uniquement sur la même route »)
  et **bookable** (`_assert_bookable`).
- Libère l'ancien siège (`AVAILABLE`), prend un siège sur `new_trip` (`_pick_seat`).
- `ticket.trip = new_trip` ; `ticket.trip_seat = new_seat` ; **amount/fare/fare_class/destination inchangés**.
- Pas de mouvement de trésorerie.
- Journalise `TicketAdjustment(kind=report, from_trip, to_trip, price_difference=0, reason)`.

### 3. Service `regularize_ticket(ticket, *, new_fare_class=None, new_destination_id=None, payment_method, reason="", user)`

- Billet `SOLD`.
- Classe cible = `new_fare_class or ticket.fare_class` ; **refus si `target.rank < ticket.fare_class.rank`**
  (`ApplicationError("Déclassement interdit : seul le surclassement est permis.")`).
- Destination cible = `_resolve_destination(ticket.trip, new_destination_id)` si fourni, sinon l'actuelle.
- Nouveau tarif = `_price(company, ticket.trip, dest, booking.trip_type)` (classe = target via un
  recompute dédié — le prix dépend de la classe du voyage ; **ruling plan** : recomputer avec la
  classe cible, pas celle du voyage). `diff = new_fare.amount − ticket.amount`.
- **`diff < 0` → refus** (« la régularisation ne peut pas diminuer le tarif »).
- `diff > 0` → **encaisser** `diff` (recette, caisse ouverte requise) via `record_booking_payment`
  (ou `create_transaction` INCOME lié au booking) ; mettre à jour `booking.amount_due/amount_paid += diff`.
- Mettre à jour le billet : `fare_class`, `destination_point`, `fare`, `amount = new_fare.amount`.
- Journalise `TicketAdjustment(kind=regularisation, from/to fare_class + destination, price_difference=diff, reason)`.

### 4. Endpoints (`config_api/views.py` + `urls.py`)

- `POST /voyages/booking/tickets/<uuid:pk>/report/` `{new_trip_id, new_seat_id?, reason}` (perm `ticketing.booking.create` ou un `ticketing.ticket.update` si présent — sinon `booking.create`).
- `POST /voyages/booking/tickets/<uuid:pk>/regularize/` `{new_fare_class_id?, new_destination_id?, payment_method, reason}`.
- `GET /voyages/booking/adjustments/?ticket&booking&date_from&date_to&kind` → historique filtrable.

### 5. Sérialiseurs

`TicketAdjustmentSerializer` : kind (+display), from/to trip (number), from/to fare_class (name),
from/to destination (name), price_difference, reason, created_by name, created_at.

### 6. Frontend (Angular)

- Sur un billet vendu (booking-detail / bookings) : actions **« Reporter »** (choisir voyage même
  route + siège + motif) et **« Régulariser »** (choisir classe/destination + mode de paiement pour
  la différence + motif) ; afficher la différence calculée avant confirmation.
- Un **historique des ajustements** (sur la réservation et/ou une vue dédiée), filtrable.
- i18n fr/en/es/pt. Messages clairs pour déclassement refusé / tarif inférieur refusé.

## Tests (backend)

1. **report même route, prix inchangé** : report vers un voyage de la même route → billet sur le
   nouveau voyage, ancien siège libéré, `amount` inchangé, adjustment `report` (diff 0), aucun mouvement.
2. **report autre route refusé** : `ApplicationError`.
3. **report d'un billet non vendu refusé**.
4. **régularisation surclassement** : ECO→VIP (rank 1→2) avec tarif plus élevé → diff encaissée (INCOME),
   billet en VIP, `amount` mis à jour, adjustment `regularisation` (diff > 0).
5. **déclassement refusé** : VIP→ECO → `ApplicationError`.
6. **tarif inférieur refusé** : une régularisation qui baisserait le tarif → `ApplicationError`.
7. **historique** : l'endpoint liste les ajustements, filtrable par billet/booking/kind.

## Hors périmètre

- Pas de remboursement en régularisation (seule la différence positive est encaissée).
- Report limité à la même route (pas de re-tarification).
- Pas de report/régularisation sur billet embarqué/annulé/réservé.

## Points tranchés (rulings)

- Surclassement mesuré par `FareClass.rank` (≥ autorisé, < refusé).
- Report = même route → prix identique → aucun mouvement de trésorerie.
- Différence encaissée immédiatement (caisse ouverte) comme une vente (INCOME, lié au booking).
- Recompute du tarif avec la **classe cible** (pas la classe du voyage) pour la régularisation.
