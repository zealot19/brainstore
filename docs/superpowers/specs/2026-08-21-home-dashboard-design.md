# Tableau de bord d'accueil (données réelles) — Design (spec)

**Date:** 2026-08-21
**Statut:** en attente de revue

## But
Nettoyer le frontend : (1) **supprimer le customiseur** de thème (panneau offcanvas
DreamsPOS), et (2) **remplacer le tableau de bord d'accueil** (`/dashboard/index`, un
démo ventes/inventaire DreamsPOS de ~2000 lignes) par un tableau de bord **transport**
alimenté par de **vraies données**, avec des cartes **filtrées par module** (entitlements)
et une **liste d'activité récente**.

## Contexte / contrainte découverte
Les apps *anciennes* et *nouvelles* sont toutes montées. Les modules actifs sont
`voyages/trips`, `voyages/booking`, `voyages/consignment`. Les URLs de stats présentes
côté frontend (`voyage/trips/stats`, `ticketing/bookings/stats`, `parcels/stats`) pointent
vers les apps **héritées** (`apps.voyage`, `apps.ticketing`, `apps.parcel`) — données
séparées/vides. **On ne les utilise pas.**

- **Trésorerie** `GET /treasury/stats/` et **Flotte** `GET /fleet/stats/` sont sur les
  apps actives → réutilisées telles quelles.
- **Voyages / Réservations / Colis** n'ont **aucun endpoint stats** sur les apps actives →
  on en **ajoute trois** (patron selector→view→serializer→url, comme treasury/fleet).

Les stats sont **au niveau société** (non filtrées par agence) — limitation assumée pour
l'instant (le scoping agence des stats est hors périmètre).

---

## Tranche 1 — Endpoints stats (backend, apps actives)

Chaque endpoint : `APIView` + `HasModulePermission`, société via le tenant courant, retour
`success_response(dict)` (comme fleet), + test pytest.

### 1.1 `voyages_trips` — `GET /voyages/trips/stats/` (perm `voyage.trip.view`)
Selector `get_trip_stats(company_id)` → dict :
```
today_departures : int   # scheduled_departure (date) == aujourd'hui
upcoming_7d      : int    # status in (draft,pending) et scheduled_departure entre maintenant et +7j
in_progress      : int    # status == departed
completed_today  : int    # status == completed et actual_arrival (date) == aujourd'hui
```

### 1.2 `voyages_booking` — `GET /voyages/booking/stats/` (perm `ticketing.booking.view`)
Selector `get_booking_stats(company_id)` → dict :
```
bookings_today : int      # Booking créés aujourd'hui (created_at date)
tickets_today  : int      # Ticket créés aujourd'hui
revenue_today  : Decimal  # somme amount_paid des Booking créés aujourd'hui
revenue_month  : Decimal  # somme amount_paid des Booking du mois courant
```

### 1.3 `voyages_consignment` — `GET /voyages/consignment/stats/` (perm `ticketing.parcel.view`)
Selector `get_parcel_stats(company_id)` → dict :
```
registered      : int     # status == registered (à charger)
in_transit      : int     # status == loaded
to_collect      : int     # status == arrived (à retirer)
registered_today: int     # status == registered et created_at date == aujourd'hui
```

### 1.4 Réutilisés (existants, apps actives)
- `GET /treasury/stats/` (perm `treasury.dashboard.view`) → `total_cash_balance,
  total_bank_balance, total_balance, today_income, today_expense, today_net, open_sessions`.
- `GET /fleet/stats/` (perm `fleet.dashboard.view`) → stats véhicules (champs confirmés au plan).

### 1.5 Tests
Pour chaque nouvel endpoint : société + données de fixture → l'endpoint renvoie 200 et les
compteurs attendus (ex. 1 trip aujourd'hui → `today_departures == 1`). Middleware d'entitlement
et permissions traversés (APIClient + token).

---

## Tranche 2 — Frontend

### 2.1 Supprimer le customiseur
Dans `src/app/layouts/layout/layout.component.html` : retirer le bouton `.toggle-theme`
(cog) et tout le bloc offcanvas `#theme-setting` (`.sidebar-themesettings`). Le thème
fonctionne sur ses valeurs par défaut ; aucun autre changement requis (SCSS inutilisé laissé).

### 2.2 Nouveau tableau de bord d'accueil
- Nouveau composant standalone `HomeDashboardComponent`
  (`src/_api/pages/dashboard/home/home-dashboard.component.{ts,html}`).
- Repointer la route `path: 'index'` (dans `pages.routes.ts`) vers ce composant (l'ancien
  `AdminDashboard1Component` démo n'est plus utilisé ; suppression optionnelle).
- **Service** `DashboardService` (`src/_api/services/dashboard/dashboard.service.ts`)
  exposant : `treasury()`, `trips()`, `bookings()`, `parcels()`, `fleet()`,
  `recentBookings(limit)`, `recentMovements(limit)` — chacun appelant l'endpoint réel.

### 2.3 Cartes KPI (filtrées par module via `*hasModule`)
| Carte | Module | Source | Chiffres clés |
|-------|--------|--------|----------------|
| Trésorerie | `treasury` | `/treasury/stats/` | solde total, entrées/sorties du jour, sessions ouvertes |
| Voyages | `voyage` | `/voyages/trips/stats/` | départs aujourd'hui, à venir 7j, en cours |
| Réservations | `voyage` | `/voyages/booking/stats/` | réservations & billets du jour, recette du jour |
| Colis | `colis` | `/voyages/consignment/stats/` | à charger, en transit, à retirer |
| Flotte | `fleet` | `/fleet/stats/` | véhicules disponibles / en service |

Chaque carte n'est chargée/affichée que si `hasModule(<code>)` (pas d'appel réseau inutile
ni de 403). Les appels échouant silencieusement (carte masquée) ne cassent pas la page.

### 2.4 Activité récente (réutilise des endpoints existants)
- **Dernières réservations** : `GET /voyages/booking/bookings/` (perm `ticketing.booking.view`,
  module `voyage`) — 6 plus récentes (référence, acheteur, montant, date).
- **Derniers mouvements** : `GET /treasury/movements` (perm `treasury.transaction.view`,
  module `treasury`) — 6 plus récents (libellé, montant, type, date).
Chaque bloc filtré par `*hasModule` + permission ; affiché seulement si visible.

### 2.5 Mise en page
Grille responsive de cartes (Bootstrap `row`/`col`), puis deux colonnes d'activité récente.
Style standard de l'app (cartes `card`), sans dépendances de graphes pour l'instant.

---

## Hors périmètre
- Filtrage des stats par **agence** (elles restent au niveau société).
- **Graphiques** / séries temporelles (cartes + listes uniquement pour l'instant).
- Suppression physique des apps héritées (`apps.voyage`, `apps.ticketing`, `apps.parcel`)
  et des anciens composants de dashboard démo (nettoyage optionnel ultérieur).

## Tests / done
- 3 endpoints stats verts (pytest) ; suite complète verte ; `makemigrations --check` propre
  (aucune migration — pas de changement de schéma).
- `ng build` OK ; le customiseur a disparu ; le dashboard affiche les vraies données, cartes
  filtrées selon le package de la société.
