# M22 — Annulation de tickets + bon d'annulation — Design

**Date :** 2026-10-11 · **Module :** `apps/voyages_booking` · **Référence cahier :** M22 (dictées 31, 42)

## Intention

Toute **annulation** génère un **bon d'annulation** imprimable (références, **motif**,
**montant remboursé**, auteur, date). Une **vue dédiée** liste les annulations, filtrable
(date, agence, voyage, caissier), avec lien vers le bon.

## État existant (réutilisé)

- `cancel_booking(booking, *, user)` : annule les billets (sièges libérés), annule les
  bagages liés, et **rembourse** via `refund_on_cancel` (taux configuré `refund_rate%`,
  mouvement EXPENSE catégorie REFUND). `refund_on_cancel` **retourne le mouvement**
  (`.amount`) → on peut capturer le montant remboursé.
- Rendu documentaire existant : `render_booking_tickets_html` + `ticket_render` /
  `resolve_doc_template` / `ManifestTemplate` → à réutiliser pour le bon.
- Permission `ticketing.booking.cancel` (annulation) ; `ticketing.ticket.view`.

**Manquant (M22)** : motif d'annulation, bon d'annulation, vue des annulations.

## Décisions actées (brainstorm)

- **Motif** : texte libre **obligatoire** à l'annulation.
- **Vue** : liste des **réservations annulées** (une ligne par booking, avec ses billets),
  lien vers le bon.

## Architecture

### 1. Modèle `Booking` — champs d'annulation

```python
cancellation_reason = CharField(max_length=255, blank=True)
cancelled_at        = DateTimeField(null=True, blank=True)
cancelled_by        = FK(User, SET_NULL, null, blank, related_name="+")
refund_amount       = DecimalField(max_digits=12, decimal_places=2, default=0)
```
Migration (AddField ×4, pas de RunPython).

### 2. `cancel_booking(booking, *, user, reason="")`

- Ajouter `reason` ; `if not reason.strip(): raise ApplicationError("Le motif d'annulation est obligatoire.")`
  (placé **avant** toute mutation).
- Après les remboursements : `refund_amount = (refund ticket .amount or 0) + (refund bagage .amount or 0)`
  (capturer les retours de `refund_on_cancel`, aujourd'hui ignorés).
- Poser `cancellation_reason`, `cancelled_at=now`, `cancelled_by=user`, `refund_amount` ; save.

### 3. Bon d'annulation (rendu HTML)

`render_cancellation_voucher_html(request, booking)` (module render booking) : réutilise
`resolve_doc_template` + tokens société ; contenu = référence booking, billets (passager,
trajet, siège), **motif**, **montant remboursé**, **auteur** (cancelled_by), **date**
(cancelled_at). Endpoint `GET /voyages/booking/bookings/<uuid:pk>/cancellation-voucher/`
→ `{html}` (perm `ticketing.ticket.view`), sur le modèle de l'endpoint billets.

### 4. Vue des annulations (liste filtrable)

Sélecteur `list_cancelled_bookings(company, *, date_from, date_to, agency_id, trip_id, cashier_id, user)` :
`Booking.objects.filter(status=CANCELLED)` + filtres (cancelled_at range, agency, outbound_trip,
cancelled_by) + scoping agence existant. Endpoint
`GET /voyages/booking/bookings/cancelled/?date_from&date_to&agency&trip&cashier` (perm
`ticketing.booking.cancel` ou `ticketing.ticket.view`) → liste sérialisée (ref, passagers,
voyage, montant remboursé, caissier, date, motif).

### 5. Vues d'annulation existantes → passent le motif

`BookingCancelView.post` et `BookingDetailView.delete` : lire `reason = request.data.get("cancellation_reason", "")`
et le passer à `cancel_booking`. (Le DELETE sans corps → le front passera le motif ; sinon
l'erreur « motif obligatoire » s'affiche.)

### 6. Frontend (Angular)

- **Annulation** : avant d'annuler (bookings list / booking-detail), demander le **motif**
  (modale) → POST cancel avec `cancellation_reason`.
- **Page « Tickets annulés »** (menu Réservations) : tableau des réservations annulées,
  filtres date/agence/voyage/caissier ; colonne montant remboursé + motif ; bouton
  **« Bon d'annulation »** → ouvre/imprime le HTML rendu.
- i18n fr/en/es/pt.

## Tests (backend)

1. **motif obligatoire** : `cancel_booking` sans `reason` → `ApplicationError` ; avec → annulé,
   `cancellation_reason`/`cancelled_by`/`cancelled_at` posés.
2. **montant remboursé capturé** : une réservation payée annulée (taux refund > 0) →
   `refund_amount` = montant effectivement remboursé.
3. **bon d'annulation** : l'endpoint renvoie un HTML non vide contenant la référence et le motif.
4. **liste des annulations** : renvoie les bookings annulés ; filtre par voyage et par
   caissier (cancelled_by) fonctionne ; les non-annulés sont exclus.
5. **non-régression** : l'annulation continue de libérer les sièges + rembourser (comportement existant).

## Hors périmètre

- Pas de changement au calcul du taux de remboursement (`refund_rate`, existant).
- Pas de ré-émission / échange (c'est M21 : report/régularisation).
- Bon = HTML imprimable (comme les billets) ; pas de PDF serveur dédié sauf réutilisation existante.

## Points tranchés (rulings)

- Motif obligatoire au niveau **service** (message clair), pas seulement front.
- `refund_amount` stocké sur le booking pour le bon + l'audit (évite de recalculer).
- Vue au niveau **booking annulé** (pas ticket) ; le bon est par booking.
