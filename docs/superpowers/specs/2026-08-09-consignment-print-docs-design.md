# Documents d'impression Colis & Bagages + correction verso billet — Design Spec

**Date :** 2026-08-09
**Sous-projet :** Voyages → impression (billet verso, reçu colis, ticket bagage, étiquette bagage)
**Branche :** `feature/consignment-print-docs` (depuis `origin/master`)

## Objectif

Quatre livrables d'impression, dans l'ordre :

1. **Verso du billet** — corriger la mise en page : ajouter une **colonne gauche vierge**
   alignée sur le **talon détachable du recto** (découpée à l'embarquement) ; le contenu
   (conditions + « Nos Agences ») occupe la partie droite.
2. **Reçu d'expédition colis** — document thermique 80 mm par colis.
3. **Ticket de bagage** — document thermique 80 mm, imprimé en **2 exemplaires** l'un sous
   l'autre (passager + agence), séparés par un pointillé de découpe.
4. **Étiquette de bagage** — petite étiquette thermique 80 mm à coller sur le bagage.

Les maquettes de référence (racine du projet) : `BOARDING/1.png` (recto), `BOARDING/2.png`
(verso), `BrainStore-recu-colis.pdf`, `BrainStore-ticket-bagage.pdf`, `BrainStore-ettiquette-bagage.pdf`.

## Contraintes globales

- Branche `feature/consignment-print-docs` depuis `origin/master`. Forward-only. **Commits shimi**
  (nom `shimi`, email `shimiengamaleonelcabrel@gmail.com`, **sans** trailer Claude). Français.
- **Dépôt git** : cibler explicitement `/Users/zealot/Desktop/brainstore/new_erp/ERP-master`
  (dépôts imbriqués ; le parent `new_erp/` n'est pas un dépôt, `~/Desktop` en est un autre).
- Pas d'import treasury/tiers. Pas de nouvelle dépendance (réutilise l'existant, `segno` déjà présent).
- Images en **FileField** (Pillow non installé).
- Réutiliser l'architecture d'impression des billets : le backend renvoie un **document HTML
  complet**, le frontend l'ouvre dans une fenêtre et appelle `print()`.
- Vérif : `manage.py check`, migration, smoke-render des 4 sorties, `ng build`.

## Format papier

- **Billet (recto + verso)** : norme boarding-pass **IATA/ATB = 203 mm × 82,55 mm paysage**
  (= rouleau thermique boarding-pass 82×203). Remplace l'actuel 190×95 mm.
  Taille **configurable** (défauts 203 / 82.55).
- **Reçu colis / ticket bagage / étiquette bagage** : rouleau **thermique 80 mm** de large,
  hauteur libre : `@page { size: 80mm auto; margin: 3mm }`.

## Modèle `TicketTemplate` (voyages_config) — champs ajoutés

- `ticket_width_mm`  : Decimal, défaut `203`.
- `ticket_height_mm` : Decimal, défaut `82.55`.
- `parcel_receipt_terms` : Text, défaut
  « Par sa signature, le client déclare avoir lu et accepté les conditions définies par l'agence. »
- `baggage_ticket_note`  : Char(255), défaut « Merci de votre confiance. Bon voyage ! »

Migration unique. Ces champs sont exposés par le serializer et éditables dans **Config billets**
(nouvelle section « Documents colis & bagages » + champs largeur/hauteur dans la section format).

## Rendu

### Billet — `apps/voyages_config/ticket_render.py`
- `build_recto` / `build_verso` : la largeur passe de 190 mm à `tpl.ticket_width_mm` et la hauteur
  à `tpl.ticket_height_mm` (injectées en CSS). Bande « BOARDING » ~14 mm, talon ~52 mm conservés.
- `build_verso` **refait** : rangée flex `[colonne vierge 52 mm | contenu]`. La colonne vierge
  porte une **bordure droite en pointillé** (ligne de découpe alignée sur le talon du recto).
  Le contenu (slogan, conditions, « Nos Agences ») occupe la partie droite.
- `render_document` : `@page { size: <w>mm <h>mm landscape; margin: 0 }` depuis le template.

### Colis & bagages — nouveau module `apps/voyages_consignment/doc_render.py`
Parallèle à `ticket_render.py`. Réutilise `TicketTemplate` (via
`ticket_render.get_or_create_template(company)`) pour l'entête société.

- `company_header(tpl, *, logo_url, agency_line="")` → entête HTML partagée : logo, nom, RCCM,
  NIU, téléphones, ligne agence.
- `build_parcel_receipt(parcel, tpl, *, agent, request)` → reçu 80 mm :
  entête ; « Reçu d'Expédition N° {reference} » ; **Exp** (nom + tél) ; **Dest** (nom + tél) ;
  Destination ; Colis (description) ; Valeur (declared_value) ; Qté + Montant (amount_due) ;
  Desc ; « Par {agent} le {created_at} » ; mention `parcel_receipt_terms` ; blocs
  « Signature Client » / « Signature de l'agent ».
- `build_baggage_ticket(baggage, tpl, *, agent, request)` → **2 exemplaires** empilés séparés
  par un pointillé : entête ; « Ticket de bagage N° {tag_number} » ; Passager (`owner_name`) ;
  Tél ; N° CNI (`id_number`) ; Trajet (code route) + Destination ; Bus (véhicule du voyage) ;
  Qté + Montant ; Description ; Note `baggage_ticket_note` ; « Imprimé le {now} par {agent} ».
- `build_baggage_label(baggage, tpl, *, agent)` → étiquette compacte : mini-entête ;
  « Ticket N° {tag_number} » ; Nom ; Tél ; CNI ; **PAYANT / GRATUIT** (selon `amount_due`) ;
  Trajet ; Destination ; « Imprimé le {now} par {agent} ».
- `render_80mm(inner_html_list)` → enveloppe `<html>` avec `@page{size:80mm auto;margin:3mm}`.

Agent = `request.user` (nom affiché) ; date d'impression = maintenant (`timezone.now()`).
Le trajet/bus/destination du bagage viennent de `baggage.trip` (route + véhicule) ; l'agence du
reçu colis vient de `parcel.origin_point`.

## API

Routes ajoutées dans `apps/voyages_consignment/urls.py`, vues dans `config_api/views.py` :
- `GET parcels/<uuid:pk>/receipt/` → `{ "html": "<!DOCTYPE html>…" }`
- `GET baggage/<uuid:pk>/ticket/` → `{ "html": … }`
- `GET baggage/<uuid:pk>/label/`  → `{ "html": … }`

Renvoi via `success_response({"html": …})`, comme `BookingRenderTicketsView`. 404 si objet absent
ou hors institution.

## Frontend (Angular)

- `services/voyages-consignment/parcel.service.ts` : `receipt(id) : Observable<{html:string}>`.
- `services/voyages-consignment/baggage.service.ts` : `ticket(id)`, `label(id)`.
- Helper partagé `openAndPrint(html: string)` (ouvre `window.open`, `document.write`, `print`).
- **Colis** (`pages/voyages-consignment/parcels`) : bouton **« Imprimer reçu »** par ligne/détail.
- **Bagages** (`pages/voyages-consignment/baggage`) : boutons **« Ticket »** et **« Étiquette »**.
- **Config billets** : section « Format » (largeur/hauteur mm) + section « Documents colis &
  bagages » (`parcel_receipt_terms`, `baggage_ticket_note`) ajoutées au formulaire existant.

## Hors périmètre

- Pas de QR/code-barres sur ces 3 documents (les maquettes n'en ont pas) — ajoutable plus tard.
- Tarification manuelle inchangée (montant saisi, pas calculé).
- Pas de traçabilité fine des bagages (ils voyagent avec le propriétaire) — décision utilisateur.

## Gestion des erreurs

- Template billet absent → créé par défaut (`get_or_create_template`).
- Rendu robuste : aucun 500 si un champ est vide (échappement HTML, valeurs par défaut « »).
- Objet introuvable / autre institution → 404.

## Vérification

- `manage.py check` + migration (une seule : champs `TicketTemplate`).
- Smoke-render : `build_verso` (colonne vierge présente, largeur talon, contenu à droite),
  `build_parcel_receipt` / `build_baggage_ticket` (2 exemplaires) / `build_baggage_label`
  (contenu clé présent, `@page` 80 mm).
- `npx ng build`.
