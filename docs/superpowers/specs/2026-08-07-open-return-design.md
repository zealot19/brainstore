# Aller-retour à retour ouvert (Open Return) — Design Spec

**Date:** 2026-08-07
**Sous-projet :** Voyages → Réservations → Retour ouvert
**Branche :** `feature/open-return` (depuis `origin/master`)

## Objectif

Vendre un aller-retour dont le **retour n'est pas date** a la vente : le client
paie le tarif A/R, repart avec son billet aller + un droit au retour ; le jour du
retour, a l'agence, on affecte le voyage retour + un siege et on emet le billet
retour. Aucun siege retour bloque d'avance.

## Contraintes globales
- Branche `feature/open-return` depuis `origin/master`. Forward-only.
- Commits **shimi** uniquement. Pas d'import treasury/tiers. Francais partout.
- Impact schema minimal : un seul champ `Booking.return_open`. Aucun champ
  nullable ajoute sur `Ticket` (le billet retour n'est cree qu'a l'affectation).
- Verif : `manage.py check`, `makemigrations --check`, migrate base neuve, smoke, `ng build`.

## Modele
- Ajout `Booking.return_open` (BooleanField, defaut False).
- Un A/R retour ouvert = `trip_type=round_trip`, `return_trip=null`, `return_open=True`,
  billets **aller** uniquement. Le tarif A/R est facture (montant sur l'aller,
  retour 0 comme le flux A/R fixe existant).
- Le billet retour est cree seulement a l'affectation (garde siege/voyage obligatoires).

## Services (voyages_booking.services.booking_services)
- `create_booking(...)` : nouveau parametre `return_open=False`. Si `trip_type=round_trip`
  et `return_open=True` : ne pas exiger `return_trip` ni sieges retour ; creer les
  billets aller ; `booking.return_open=True`, `booking.return_trip=None`.
  (Le mode A/R fixe existant reste inchange : `return_trip` fourni + sieges retour.)
- `assign_return(booking, return_trip, items, user)` (nouveau) :
  - Garde : `booking.trip_type == round_trip` et `booking.return_open` ; sinon `ApplicationError`.
  - `return_trip` doit etre pre-depart (`draft`/`pending`) avec sieges materialises.
  - `items = [{ "outbound_ticket_id": UUID, "return_seat_id": UUID }]`, un par passager aller ;
    nb items == nb billets aller ; sinon `ApplicationError`.
  - Pour chaque item : verrouille le siege retour (`select_for_update`, doit etre `available`),
    cree le billet retour (`direction=RETURN`, `return_of` = billet aller, `trip=return_trip`,
    `fare_class=return_trip.fare_class`, `amount=0`, `status=SOLD`), passe le siege `SOLD` + `booking_id`.
  - `booking.return_open=False`, `booking.return_trip=return_trip`, save.

## Selecteurs
- `open_return_bookings(company, q=None)` : `Booking` `return_open=True`, non annulees,
  recherche par reference / acheteur (nom, tel).

## API (voyages_booking)
- `create_booking` (POST bookings/) : accepte `return_open` (bool) ; en A/R sans
  `return_trip_id`, mode ouvert.
- `GET bookings/open-returns/?q=` : liste des retours ouverts.
- `POST bookings/<id>/assign-return/` : `{ return_trip_id, items:[{outbound_ticket_id, return_seat_id}] }`.

## Frontend (Angular)
- **Nouvelle reservation** : pour un A/R, case **« Retour ouvert »**. Cochee →
  masque date/plage/voyage/sieges retour et envoie `return_open=true` (pas de
  `return_trip_id`/`return_seat_id`). Decochee → flux retour fixe actuel inchange.
- **Ecran « Retours a traiter »** (`pages/voyages-booking/open-returns/`) : liste
  des retours ouverts (recherche) ; choisir une reservation → selection voyage
  retour (classe → date → plage → voyage) + plan des sieges (un siege par passager)
  → **Affecter le retour**. Redirige vers le detail (billets retour imprimables).
- **Detail reservation** : badge « Retour ouvert » + bouton « Affecter le retour »
  (vers l'ecran d'affectation pre-rempli).
- Route + entree sidebar « Retours a traiter » sous Reservations.

## Gestion des erreurs
- Affecter un retour sur une reservation qui n'est pas A/R ouverte → refus.
- Voyage retour non pre-depart / sans sieges → refus.
- Nb sieges ≠ nb passagers → refus. Siege deja pris → « Siege deja pris ».

## Verification
- `manage.py check` + `makemigrations --check` (une migration attendue : `return_open`).
- Migrate base neuve ; smoke shell : creer A/R retour ouvert (aller seul, `return_open`),
  affecter le retour (billets retour crees, sieges SOLD, `return_open=False`),
  garde-fous (non-A/R, mauvais nb sieges).
- Smoke HTTP (token) : open-returns + assign-return.
- `npx ng build`.
