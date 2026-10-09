# M23 — Formulaire bagage : passager obligatoire, propriétaire en lecture seule — Design

**Cahier :** Revue SHIMI v1.0 — M23 (dictée n° 33)
**Date :** 2026-10-09
**Statut :** approuvé en brainstorming, en attente de relecture avant plan.

## Objectif

Sur le formulaire d'enregistrement des bagages : le **passager (billet) devient obligatoire**, et
les **champs nom/informations du propriétaire** ne sont plus saisissables — ils s'affichent en
**lecture seule (grisés)** dès que le passager est choisi (nom, téléphone, pièce), tirés du billet.

## Décisions actées (brainstorming)

1. **Passager toujours requis** : on retire le parcours « sans billet » (saisie manuelle d'un
   expéditeur via `app-client-fields`). Un bagage est toujours rattaché à un passager billeté du
   voyage sélectionné.
2. **Propriétaire en lecture seule** : afficher **nom + téléphone + pièce** du passager, grisés,
   depuis le billet sélectionné.

## État actuel

- **Formulaire** (`pages/voyages-consignment/baggage/`) : `trip_id` requis, `ticket_id` **facultatif**.
  `@if (!hasTicket)` affiche une section expéditeur (création : `app-client-fields` → `senderClient` ;
  édition : champs `sender_name`/`sender_phone`/`id_type`/`id_number`). `ticketOptions` construits
  côté client depuis `booking.list({ trip })` (`{ id, label: "passager · n° billet" }`).
- **Service** `add_baggage` (`services/baggage_services.py`) : `ticket=None` autorisé ; si pas de
  ticket et pas de `sender_name` → erreur ; sinon `get_or_create_passenger` pour l'expéditeur.
- **Serializer** `BaggageWrite` : `ticket_id` facultatif ; `sender_name`/`sender_phone` **requis**.
- **Serializer billet** (`voyages_booking/config_api/serializers.py:67`) : expose `passenger_name`
  (pas `passenger_phone` ni pièce).
- **Lecture** `BaggageRead` : `owner_name` (= `ticket.passenger.full_name` ou `sender_name`).

## Architecture

### Backend

1. **Serializer billet** (celui listé par `booking.list`) : ajouter
   `passenger_phone = serializers.CharField(source="passenger.phone", read_only=True, default="")` et
   `passenger_id_number = serializers.CharField(source="passenger.id_number", read_only=True, default="")`
   + les ajouter à `fields`. (Alimente l'affichage lecture seule côté form.)
2. **`add_baggage`** : rendre le **ticket obligatoire** (`if ticket is None: raise ApplicationError`).
   Retirer la branche « sans billet » (plus de `get_or_create_passenger` expéditeur, plus de
   `elif not sender_name`). À la création, **snapshoter le propriétaire depuis le passager** :
   `sender_name = ticket.passenger.full_name`, `sender_phone = ticket.passenger.phone`,
   `id_number = ticket.passenger.id_number` (pour que l'enregistrement porte l'info propriétaire),
   `sender_client = ticket.passenger`.
3. **`BaggageWrite`** : `ticket_id` **requis** ; `sender_name`/`sender_phone`/`civility`/`id_type`/
   `id_number` → **facultatifs** (ignorés : le propriétaire vient du passager).
4. **Vue** création bagage : exiger `ticket_id`, résoudre le billet (scopé société/voyage) ; passer
   `ticket=...` à `add_baggage` sans les champs expéditeur.

### Frontend

5. **`ticket_id`** → `Validators.required`.
6. **Supprimer** la section `@if (!hasTicket)` (création `app-client-fields` **et** édition manuelle).
7. **Enrichir** `ticketOptions` : `{ id, label, passenger_name, passenger_phone, passenger_id_number }`.
8. **Affichage lecture seule** : dès qu'un billet est choisi, afficher un bloc **Propriétaire**
   (nom, téléphone, pièce) en `disabled`/`readonly` (grisé), alimenté depuis l'option billet
   sélectionnée. À l'édition, l'alimenter depuis les champs propriétaire stockés du bagage.
9. **`submit`** : retirer la logique `senderClient`/no-ticket ; envoyer `ticket_id` (+ champs colis/
   paiement existants). Le propriétaire n'est plus envoyé par le form.
10. i18n : libellés « Propriétaire » / téléphone / pièce si manquants (fr/en/es/pt).

## Tests

**Backend (pytest) :**
1. `add_baggage` **sans ticket** → `ApplicationError`.
2. `add_baggage` **avec ticket** : le bagage porte le propriétaire du passager
   (`sender_name == ticket.passenger.full_name`, `sender_client == passager`).
3. `BaggageWrite` : `ticket_id` requis ; `sender_name` non requis.
4. Serializer billet : `passenger_phone` / `passenger_id_number` présents dans la sortie.

**Frontend (build) :**
5. `ng build` — plus aucune référence à `app-client-fields`/`senderClient` dans le form bagage ;
   `ticket_id` requis ; bloc propriétaire lecture seule.

Gate : `npx ng build --configuration development`.

## Hors périmètre (M23)

- Bagages « sans billet » existants (legacy) : en édition, le propriétaire stocké s'affiche en
  lecture seule ; on ne force pas de billet rétroactivement.
- M25 (expédition partielle colis), autres flux bagage (retrait, chargement).

## Points à clarifier

1. **Édition d'un bagage legacy sans billet** : on affiche le propriétaire stocké en lecture seule
   (pas de ressaisie). OK ? — hypothèse retenue.
