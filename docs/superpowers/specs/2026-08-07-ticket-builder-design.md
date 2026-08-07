# Config billets piloté par formulaire + QR — Design Spec

**Date:** 2026-08-07
**Sous-projet :** Voyages → Config Voyages → Config billets (evolution)
**Branche :** `feature/ticket-builder` (depuis `origin/master`)

## Objectif

Remplacer l'edition HTML brute par un **formulaire** : l'utilisateur configure tout
ce qui n'est pas voyage/passager (infos entreprise du billet, couleurs, logo,
**logo d'arriere-plan/filigrane**, conditions, agences, options). Un **gabarit fixe**
propre a l'impression genere le billet a partir de ces champs + les tokens
dynamiques. **Verso refait**. Ajout d'un **QR code** qui encode les infos du billet
(scan -> infos). Le mode « HTML avance » reste disponible en option.

## Contraintes globales
- Branche `feature/ticket-builder` depuis `origin/master`. Forward-only. Commits shimi. Francais.
- Pas d'import treasury/tiers. Nouvelle dependance : `segno` (QR, pur Python) — ajoutee a requirements.
- Images en **FileField** (pas ImageField) pour eviter Pillow (non installe).
- Verif : `manage.py check`, `makemigrations --check`, migrate base neuve, smoke, `ng build`.

## Modele `TicketTemplate` (voyages_config) — champs structures
Evolue le modele existant (garde `html_recto`/`html_verso` pour l'avance) :
- **Entreprise (billet)** : `brand_name`, `slogan`, `niu`, `rccm`, `phone`, `email`, `address` (pre-remplis depuis la societe a la creation).
- **Images** : `logo` (FileField, en-tete), `background_logo` (FileField, filigrane/arriere-plan).
- **Couleurs** : `color_ink` (defaut `#1a1a1a`), `color_accent` (`#e6a817`), `color_band` (`#111111`).
- **Textes** : `recto_notice` (bas du recto), `verso_conditions` (Text), `agencies` (Text, une agence par ligne).
- **Options** : `show_verso` (True), `show_stub` (True), `show_watermark` (True), `show_qr` (True).
- **Avance** : `custom_html` (bool, defaut False) + `html_recto`/`html_verso` existants.
- Cree au 1er acces avec valeurs par defaut (depuis la societe pour les champs entreprise).

## Generateur de gabarit (voyages_config.ticket_render)
- `build_recto(tpl, tokens, qr_svg)` -> HTML recto (gabarit fixe facon BOARDING) :
  bande verticale « BOARDING » (couleur `color_band`), en-tete logo + slogan + NIU/RCCM,
  filigrane = `background_logo` (si `show_watermark`), passager en gros, grille de champs
  dynamiques, `recto_notice`, talon detachable a droite (si `show_stub`) avec le **QR** (si `show_qr`).
  Couleurs injectees en variables CSS. Le `background_logo` en `background-image` centre, faible opacite.
- `build_verso(tpl)` -> HTML verso **refait** proprement : titre (slogan), `verso_conditions`
  en paragraphes, « Nos Agences » = lignes de `agencies`.
- `build_ticket(tpl, tokens, request)` : si `tpl.custom_html` -> rend `html_recto`/`html_verso`
  (systeme actuel) ; sinon genere recto (+ verso si `show_verso`). Renvoie la liste des faces.
- QR : `qr_svg(tokens)` via `segno.make(payload).svg_inline(scale=…)` ; `payload` = texte
  compact des infos billet (n°, passager, trajet, date/heure, siege, classe, prix, reference).

## Tokens dynamiques (voyage/passager, inchanges)
`ticket_number, booking_reference, passenger_name, seat, departure, destination,
travel_date, travel_time, travel_class, trip_type, trip_number, vehicle, agent,
ticket_price, registered_date, printed_date, expiration_date`. En mode avance,
`{{ qr_code }}` disponible aussi.

## API (voyages_config + voyages_booking)
- `GET voyages/config/ticket-template/` : renvoie tous les champs (+ URLs images).
- `PUT voyages/config/ticket-template/` : **multipart** (champs + fichiers logo/background_logo optionnels).
- `POST .../reset/` : remet les defauts (depuis la societe).
- `POST .../preview/` : rend le billet avec des **donnees d'exemple** (JSON des champs, sans upload).
- `GET voyages/booking/bookings/<id>/render-tickets/` : billets rendus (gabarit ou HTML avance) — inchange cote route.

## Frontend (Angular)
- **Ecran « Config billets »** refondu en **formulaire** (sections : Entreprise, Images,
  Couleurs, Conditions, Agences, Options) avec **Apercu** (POST preview -> fenetre),
  **Enregistrer** (PUT multipart), **Reinitialiser**. Interrupteur **« HTML avance »**
  qui devoile les deux zones HTML (mode expert), masque par defaut.
- **Impression** (detail reservation) : inchangee (appelle render-tickets).

## Gestion des erreurs
- Template absent -> cree le defaut. Upload non-image -> accepte (FileField), affiche tel quel.
- Preview/rendu robustes (aucun 500 si un champ vide).

## Verification
- `manage.py check` + `makemigrations --check` (une migration : champs `TicketTemplate`).
- Migrate base neuve ; smoke : preview (couleurs/QR presents, QR SVG non vide), render reel
  (QR encode le n° billet, tokens remplaces). Verifier `segno` importe.
- `npx ng build`.
