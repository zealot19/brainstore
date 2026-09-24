# Reporting — cadre de filtres piloté par métadonnées (Phase A)

**Date:** 2026-09-24
**Status:** Design — pending user review
**Contexte:** Aligner le module reporting sur la référence G-Terminal (13 rapports,
~25 dimensions de filtres). Phase A = **socle** : filtres typés + rendu dynamique.
Décisions validées : (1) framework d'abord, (2) adapter à notre modèle, (3) ensuite
enrichir les listes opérationnelles (Phase B).

## Problème

- Aujourd'hui `@register(code, name, filters: list[str], orientation)` ; le moteur ne
  connaît que 8 clés (`date_from/to, agency, register, agent, vehicle, partner, year`).
- Le **front code en dur** chaque input de filtre (`@if (shows('agency'))`). N'échelle
  pas à ~25 filtres × 13 rapports.

## Cible

Les rapports **déclarent des clés de filtre** ; le framework connaît, pour chaque clé,
son **type** et sa **source d'options**. Le front rend les inputs **dynamiquement** et
charge les options via un endpoint. Adapter à notre modèle (pas de 1:1).

## Backend

### 1. Catalogue de définitions de filtres — `apps/reporting/filter_defs.py`
`FILTER_DEFS: dict[str, dict]` associe chaque clé à `{type, label, options?}` :
- `type` ∈ `date | datetime | text | number | select`.
- `label` : libellé **français** (cohérent avec les `name` de rapports, déjà en français).
- `options` (select) : clé de **source d'options** (ex. `service_points`, `fare_classes`,
  `partners`, `vehicles`, `payment_methods`, `cash_registers`, `bank_accounts`,
  `agencies`, `crew`, `group_by`, `statut`).

Clés couvertes en Phase A (communes + génériques) :
`date_from, date_to, station_depart, station_arrivee, station_escale,
categorie_tarifaire, partner, vehicle, payment_mode, register, bank, agency,
statut, periode, group_by` (les clés spécifiques — client, destinataire, no_cni,
telephone, poids_min/max, type_voyage, sens, retardataire, transit, avance, écart… —
sont ajoutées en Phase B/C, le framework les accepte déjà par construction).

### 2. `register()` inchangé côté signature
Les rapports continuent de déclarer une **liste de clés** (`["date_from","vehicle",…]`).
Le catalogue enrichit chaque clé via `FILTER_DEFS`. Rétro-compatible.

### 3. `parse_filters(request)` — générique
Parcourt toutes les clés connues (`FILTER_DEFS`) présentes dans la requête et convertit
selon le type (`date/datetime`→`parse_date`, `number`→`Decimal`, sinon `str`). Renvoie
un dict `{clé: valeur|None}`. Les rapports lisent `f.get(clé)`.

### 4. Endpoint options — `GET /reporting/filter-options/?source=<clé>[&report=<code>]`
Renvoie `[{value, label}]` **borné à la société** de l'appelant. Résolveurs :
- BD : `service_points` (ServicePoint stations), `fare_classes` (FareClass),
  `partners`, `vehicles`, `payment_methods`, `cash_registers`, `bank_accounts`,
  `agencies`, `crew` (types/membres d'équipage).
- Statique : `group_by` (agence/véhicule/route/jour/mois), `periode` (aujourd'hui/
  semaine/mois/année), `statut` (résolu **par rapport** via `report` → enum de l'entité).
Permission : `reporting.view` (comme le catalogue).

### 5. Helpers de filtrage — `apps/reporting/filter_apply.py`
`apply_filters(qs, f, mapping)` : `mapping = {clé: "orm__lookup"}` (le même filtre logique
mappe des chemins ORM différents selon le rapport). DRY le `if f[x]: qs=qs.filter(...)`.
`periode` → convertit en (date_from, date_to). `group_by` → géré par chaque rapport.

### 6. Câblage des filtres communs
Câbler `station_depart/arrivee/escale, categorie_tarifaire, partner, vehicle,
payment_mode, register, bank, agency, statut, periode` dans les rapports où ils
s'appliquent proprement (voyages, réservations, bagages, colis, recette, dépense,
cashflow, journaux-vente), via `mapping` par rapport. (L'enrichissement fin par rapport
= Phases B/C.)

## Frontend (`_api/pages/reporting`)

### 7. `ReportMeta.filters` → objets
`FilterSpec = { key: string; type: 'date'|'datetime'|'text'|'number'|'select'; label: string; options?: string }`.

### 8. Rendu dynamique
`reporting.component` génère un input par filtre déclaré selon `type` :
- `select` → `<select>` peuplé via l'endpoint options (source `options`), **mis en cache**
  par source ; `datetime`/`date` → input date ; `text`/`number` → input correspondant.
- `f: Record<string,string>` dynamique ; `generate()` envoie toutes les clés renseignées.
- Suppression des `@if (shows(...))` codés en dur.

### 9. Service options — `report.service.ts`
`filterOptions(source, report?)` → `{value,label}[]`, mis en cache par clé.

## Hors périmètre Phase A
- Nouveaux rapports (cashflow, analyse, fiscalité, relevés) → Phases C/D.
- Filtres spécifiques par rapport (client, poids, sens, écart…) → Phases B/C (le framework
  les accueille sans changement).

## Tests (pytest)
- `parse_filters` : typage (date/number/text) + clés inconnues ignorées.
- Catalogue : chaque rapport renvoie des `FilterSpec` enrichis (type + label + options).
- Options : `service_points`/`fare_classes`/`cash_registers` bornés société ; `statut`
  résolu par rapport ; `group_by`/`periode` statiques.
- Un rapport applique un nouveau filtre (ex. `recette` filtrée par `register`).

## Fichiers
**Backend :** `reporting/filter_defs.py` (nouveau), `reporting/filters.py` (parse générique
+ `periode`), `reporting/filter_apply.py` (nouveau), `reporting/views.py` (catalogue enrichi
+ endpoint options), `reporting/urls.py`, `reporting/registry.py` (inchangé), les
`reports/*.py` câblés, tests.
**Frontend :** `services/reporting/report.service.ts` (FilterSpec + filterOptions),
`pages/reporting/reporting.component.{ts,html}` (rendu dynamique).
