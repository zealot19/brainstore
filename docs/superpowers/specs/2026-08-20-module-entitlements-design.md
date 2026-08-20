# Module Entitlements + Standalone Colis — Design (spec)

**Date:** 2026-08-20
**Statut:** approuvé (approche) — en attente de revue du spec

## But
Rendre **chaque module optionnel** par société : une entreprise peut acheter, par exemple,
uniquement **Colis** sans **Voyages**. Les droits sont portés par le **package** que le
**Super Admin** attribue. Quand un module n'est pas inclus, il disparaît du menu ET son API
renvoie 403. En complément, rendre le module **Colis** autonome (fonctionnel sans Voyages).

## Décisions verrouillées
1. **Tous les modules sont optionnels** — un flag booléen par module sur `Package`.
2. Les droits viennent du **package** ; seul le **Super Admin** attribue/édite les packages
   (vues existantes `IsSuperAdmin`).
3. **Livraison par étapes** : Tranche 1 (droits + verrouillage), puis Tranche 2 (Colis autonome).
4. Défaut de migration : tous les flags à **True** (les sociétés existantes gardent tout).

## Modules gérés (codes)
`administration`, `fleet`, `voyage`, `colis`, `bagages`, `treasury`, `accounting`, `reporting`.
`auth` (connexion) n'est jamais verrouillé. Colis et Bagages sont **deux droits distincts**
(le colis peut être autonome ; le bagage reste lié au voyage — cf. §Tranche 2).

---

## Tranche 1 — Droits (entitlements) & verrouillage

### 1.1 Modèle `Package` (system_config)
Ajouter, à côté de `has_multi_agency`/`has_advanced_reports` :
```python
has_administration = models.BooleanField(_("module Administration"), default=True)
has_fleet          = models.BooleanField(_("module Flotte"), default=True)
has_voyages        = models.BooleanField(_("module Voyages"), default=True)
has_colis          = models.BooleanField(_("module Colis"), default=True)
has_bagages        = models.BooleanField(_("module Bagages"), default=True)
has_treasury       = models.BooleanField(_("module Trésorerie"), default=True)
has_accounting     = models.BooleanField(_("module Comptabilité"), default=True)
has_reporting      = models.BooleanField(_("module Reporting"), default=True)
```
Migration : schéma (8 champs, défaut True). Exposés en lecture/écriture par
`PackageSerializer`/`PackageWriteSerializer` (Super Admin only, vues existantes).

### 1.2 Résolution des modules activés
`apps/system_config/selectors/entitlements.py` :
```python
_MODULE_FLAGS = {  # code -> attribut Package
    "administration": "has_administration", "fleet": "has_fleet", "voyage": "has_voyages",
    "colis": "has_colis", "bagages": "has_bagages", "treasury": "has_treasury",
    "accounting": "has_accounting", "reporting": "has_reporting",
}

def enabled_modules(company) -> set[str]:
    pkg = getattr(company, "package", None)
    if pkg is None:                       # pas de package -> tout activé (rétro-compat)
        return set(_MODULE_FLAGS)
    return {code for code, attr in _MODULE_FLAGS.items() if getattr(pkg, attr, True)}
```

### 1.3 Exposition au frontend
Étendre `GET /api/v1/auth/me/permissions/` (vue `MePermissionsView`) pour renvoyer aussi
les modules activés de la société de l'utilisateur :
```json
{ "permissions": ["..."], "modules": ["colis","treasury","accounting","reporting", ...] }
```
- **Super Admin** (plateforme, sans société) → `modules` = tous (il gère toutes les sociétés).
- **Institution admin / agent** → modules du **package de leur société** (l'entitlement n'est
  PAS contourné par `is_institution_admin`, contrairement aux permissions RBAC).

### 1.4 Frontend — `PermissionService` + menu
- `PermissionService` (auth) : stocker `modules`, exposer `hasModule(code): boolean` et un flux.
- Nouvelle directive `*hasModule="'colis'"` (miroir de `*hasPermission`) pour masquer des blocs.
- **Sidebar** (`sidebar.service.ts`) : chaque groupe porte déjà un contexte de module ; filtrer
  les groupes/entrées par `hasModule(module)` **en plus** de la permission. Mapping groupe→module :
  Voyages→`voyage`, Flotte→`fleet`, Trésorerie→`treasury`, Comptabilité→`accounting`,
  Administration→`administration`, Reporting→`reporting`, et les entrées Colis/Bagages (sous
  Config/Voyages) →`colis`/`bagages`.

### 1.5 Verrouillage backend (sécurité réelle)
Implémenté en **permission DRF globale** `HasModuleEntitlement`, ajoutée à
`REST_FRAMEWORK["DEFAULT_PERMISSION_CLASSES"]` (après `IsAuthenticated`). Une permission DRF
s'exécute dans `APIView.initial()` **après** l'authentification, donc `request.user` est
résolu (contrairement à un middleware Django, cf. `TenantMiddleware`).

`apps/core/permissions.py` → `HasModuleEntitlement.has_permission(request, view)` :
```
- utilisateur non authentifié / super admin      -> True (laisser IsAuthenticated gérer)
- résoudre le module depuis request.path (mapping ci-dessous)
- module 'core'/None (auth, system, users, rbac, audit) -> True
- sinon: return module ⊆ enabled_modules(request.user.company)   (403 sinon)
```
Le mapping préfixe→module vit dans `apps/core/module_map.py` (`module_for_path(path) -> str|None`).

Mapping préfixe → module (sous `/api/v1/`) :
```
fleet/                -> fleet
voyages/config, voyages/trips, voyages/pricing, voyages/booking, voyage/ -> voyage
voyages/consignment/parcels   -> colis
voyages/consignment/baggage   -> bagages
voyages/consignment/          -> colis OR bagages (au moins un requis)
treasury/             -> treasury
accounting/           -> accounting
reporting/            -> reporting
system/, auth/, users/, rbac/, audit/ -> (toujours autorisé)
```
- **Super Admin** : jamais bloqué.
- Société sans le module → **403** avec message clair (« Module non inclus dans votre offre »).
- `transport/` (config partagée) suit `voyage`.

### 1.6 Tests (pytest)
- `enabled_modules` : pas de package → tout ; package avec `has_voyages=False` → 'voyage' absent.
- `me/permissions` renvoie `modules` cohérents ; super admin → tous.
- Verrouillage : société sans `voyage` → GET `/voyages/trips/` = 403 ; avec = 200/légitime.
- `colis` activé mais `voyage` non → `/voyages/consignment/parcels/` autorisé,
  `/voyages/trips/` bloqué.

---

## Tranche 2 — Colis autonome (sans Voyages)

### 2.1 Problème
Le cycle de vie actuel passe par **Chargé sur un voyage** (`assign_to_trip`, exige un Trip).
Une société **Colis seul** doit acheminer un colis **sans** voyage.

### 2.2 Flux autonome
Ajouter un chemin **indépendant du voyage** :
`Enregistré → Expédié/En transit → Réceptionné → Livré` (sans Trip).
- Nouveau service `dispatch_parcel(parcel, *, user)` : `REGISTERED → LOADED` **sans** trip
  (statut « En transit »), pour les sociétés sans Voyages ou sans affectation à un voyage.
- `receive_parcel` (déjà en place) : gardes conditionnelles —
  `if parcel.trip and parcel.trip.status not in (DEPARTED, COMPLETED): raise …` (le voyage doit
  être parti **seulement** si un voyage est lié ; sinon, réception libre).
- `assign_to_trip` reste, mais n'est proposé que si le module **voyage** est activé.

### 2.3 Frontend Colis
- Masquer « Charger sur un voyage » via `*hasModule="'voyage'"`.
- Afficher les actions autonomes « Expédier » / « Réceptionner » quand `voyage` n'est pas activé
  (ou quand le colis n'est pas affecté à un voyage).

### 2.4 Tests
- Société sans `voyage` : register → dispatch → receive → pickup fonctionne **sans** Trip.
- Société avec `voyage` : le chemin `assign_to_trip` reste disponible ; garde « voyage parti »
  appliquée uniquement si un voyage est lié.

---

## Hors périmètre
- Facturation/paiement réel des abonnements (le package porte déjà des prix ; l'encaissement
  des abonnements n'est pas traité ici).
- Override par société via `FeatureFlag` (possible plus tard, Super Admin only) — pour l'instant
  l'entitlement vient uniquement du package.
- Bagages autonome (le bagage reste lié à un voyage par nature).
