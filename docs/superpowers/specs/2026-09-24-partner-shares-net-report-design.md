# Retenues partenaires (part fixe/unité) + rapport de résultat net agence/partenaire

**Date:** 2026-09-24
**Status:** Design — pending user review
**Modules:** `fleet` (config véhicule), `reporting` (rapport), frontends fleet + reporting.

## Contexte

- `Vehicle.owner_partner` (FK `partners.Partner`) + `Vehicle.partner_share_percent` (**%**) existent.
- Rapport `partenaires_revenus` : agrège le revenu billets/colis/bagages **par véhicule**
  (via `trip__vehicle`) et le répartit agence/partenaire par **pourcentage**
  (`split_revenue(amount, pct)`). Filtres : `date_from`, `date_to`.
- `TripExpense` (voyages_trips) : dépense de voyage `trip` + `amount` → dépenses par
  véhicule via `trip__vehicle`.
- Moteur de rapports : `@register`, `ReportColumn/Group/Result`, filtres déjà pris en
  charge : `date_from`, `date_to`, `agency`, `vehicle`, `year`.

## Décisions (validées)

1. **Par bus** : les taux sont configurés sur le **Véhicule**.
2. **Trois pourcentages par type de produit** (billet / colis / bagage) qui **remplacent**
   l'unique `partner_share_percent`.
3. **Dépenses = dépenses de voyage uniquement** (`TripExpense` des voyages du bus).

## Modèle (fleet)

`Vehicle` :
- **Ajouter** : `partner_pct_ticket`, `partner_pct_parcel`, `partner_pct_baggage`
  (Decimal max_digits=5, decimal_places=2, default 0 ; borné 0–100).
- **Retirer** : `partner_share_percent`.
- Migration : ajout des 3 taux + suppression du champ % unique.

## Calcul (par véhicule, sur la période)

- **Revenu par type** : `rev_ticket`, `rev_parcel`, `rev_baggage` (agrégés par `trip__vehicle`).
- **Brut (gross)** = `rev_ticket + rev_parcel + rev_baggage`.
- **Dépenses** = Σ `TripExpense.amount` des voyages du véhicule.
- **Net** = Brut − Dépenses.
- **Part partenaire** = `rev_ticket×pct_ticket/100 + rev_parcel×pct_parcel/100 + rev_baggage×pct_baggage/100`
  (0 si le véhicule n'a pas de partenaire), arrondie à l'unité.
- **Part agence** = Net − Part partenaire.
- **Total net** = Net (= Part agence + Part partenaire).

> Note : la part partenaire est un forfait à l'unité, indépendant des dépenses ; l'agence
> supporte les dépenses. Si Part partenaire > Net, la Part agence peut être négative
> (affichée telle quelle — signal métier).

## Rapport (reporting)

Refonte de `partenaires_revenus` → **`resultat_partenaires`** :
- **Filtres** : `date_from`, `date_to`, `agency` (voyages de l'agence), `vehicle` (un bus),
  `partner` (nouveau, optionnel).
- **Colonnes** : No, Bus, Propriétaire, Brut, Dépenses, Net, Part partenaire, Part agence
  (+ éventuellement compteurs en info-bulle).
- **Groupes** : lignes par bus ; **totaux** globaux (Brut, Dépenses, Net, Part partenaire,
  Part agence). Rollup par partenaire = tri/regroupement par propriétaire.
- Rendu paysage (comme l'existant), PDF via le moteur existant.
- `agency` filtre sur `trip__company`… en réalité `trip__` scope compagnie ; l'agence =
  agence du voyage (`trip.agency` si présent) — à câbler sur le champ agence réel du Trip.

## Backend

- `fleet/models/vehicle.py` (+migration), `fleet/serializers.py` (retirer %, ajouter 3
  montants aux read/write), `fleet/services/vehicle_services.py` (mêmes paramètres).
- `reporting/reports/partenaires.py` : réécriture (revenu+compteurs+dépenses+forfaits) ;
  `reporting/filters.py` : ajouter `partner`.
- Tests : calcul de la part (forfaits + net), agrégation du rapport, filtre partenaire.

## Frontend

- Formulaire véhicule (fleet) : remplacer le champ « part partenaire (%) » par trois
  champs **% billet**, **% colis**, **% bagage** (visibles si un propriétaire partenaire
  est choisi).
- Page rapport : le rapport `resultat_partenaires` apparaît au catalogue ; filtres bus/
  agence/période/partenaire ; colonnes ci-dessus. i18n si libellés côté front.

## Hors périmètre

- Pas d'allocation des dépenses générales par bus (dépenses de voyage uniquement).
- Pas de règlement/paiement effectif du partenaire (rapport uniquement).

## Tests (pytest)

- `partner_share(vehicle, rev_ticket, rev_parcel, rev_baggage)` → Σ revenu×taux/100 ;
  0 sans partenaire.
- Rapport : 1 bus partenaire (billets+colis+bagages+dépenses) → Brut/Dépenses/Net/part
  partenaire/part agence corrects ; 1 bus agence (sans partenaire) → part partenaire = 0.
- Filtre `vehicle` et `partner` restreignent bien les lignes.
