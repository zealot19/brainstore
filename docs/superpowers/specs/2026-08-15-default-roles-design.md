# RBAC — Tranche 4 : rôles & profils par défaut à la création d'une société — Design Spec

**Date :** 2026-08-15
**Sous-projet :** Administration → RBAC (provisioning)
**Branche :** `feature/default-roles` (depuis `origin/master`)

## Contexte & objectif

Le RBAC est effectif (tranches 1-3) mais une nouvelle société démarre **sans aucun rôle** : l'admin doit
tout construire à la main. Cette tranche crée automatiquement un **jeu de rôles + profils par défaut**,
scopés à la société, à sa création — pour que l'admin puisse affecter du personnel immédiatement.
Un profil homonyme est créé pour chaque rôle car la page « Utilisateurs » assigne des **profils** (pas
des rôles).

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche `feature/default-roles` depuis `origin/master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Idempotent : ne recrée pas un rôle/profil dont le nom existe déjà pour la société.
- N'assigne rien au 1er admin (il bypasse déjà via `is_institution_admin`).
- Vérif : `manage.py check`, pytest.

## Acquis réutilisés (vérifiés)

- `apps.admin_rbac.services.create_role(*, name, description="", company_id=None, permission_ids=None, is_system=False, created_by=None)` (lève si nom déjà pris pour la société).
- `apps.admin_rbac.services.create_profile(*, name, description="", company_id=None, role_ids=None, is_default=False, is_system=False, created_by=None)`.
- `Permission` (codes `<module>.<res>.<action>`), `Role`, `Profile`.
- `apps.system_config.services.company_services._bootstrap_company(...)` (crée HQ + 1er admin) — point d'accroche.

## Composant 1 — Helper `seed_default_roles`

Fichier : `apps/admin_rbac/services/defaults.py`. Fonction
`seed_default_roles(company, created_by=None) -> list[str]` (retourne les noms créés).

Pour chaque définition de rôle : si un `Role` de ce nom existe déjà pour `company` → **skip** ; sinon
créer le rôle (avec ses permissions résolues par code) puis, si aucun `Profile` homonyme n'existe, créer
un profil homonyme contenant ce rôle (`role_ids=[role.id]`).

Les listes de codes sont **résolues par requête** sur `Permission` (robustes au catalogue), via des aides :
- `views(*prefixes)` : tous les codes `pref.*` finissant par `.view` (+ `pref.dashboard.view`) ;
- `allof(*prefixes)` : tous les codes commençant par `pref.` ;
- `exact(...)` : codes littéraux.

### Jeu de rôles (6)

| Rôle / Profil | Règle de permissions |
|---|---|
| **Chef d'agence** | `allof("voyage")` + `allof("ticketing")` + `views("transport")` + `views("fleet")` |
| **Guichetier** | exact : `ticketing.booking.view/create/cancel/noshow/board`, `ticketing.customer.view/manage`, `ticketing.ticket.view/print`, `ticketing.dashboard.view` + `allof("ticketing.parcel")` + `allof("ticketing.luggage")` + `voyage.trip.view` + `voyage.dashboard.view` + `transport.city/route/fareclass/terminal/fare .view` |
| **Régulateur (exploitation)** | `allof("voyage")` + `fleet.vehicle.view`, `fleet.assignment.view/manage`, `fleet.driver.view`, `fleet.dashboard.view` + `transport.route/city/terminal/fareclass .view` |
| **Gestionnaire de flotte** | `allof("fleet")` |
| **Agent colis & bagages** | `allof("ticketing.parcel")` + `allof("ticketing.luggage")` + `ticketing.dashboard.view` + `voyage.trip.view` |
| **Comptable (lecture)** | tous les codes finissant par `.view` + `ticketing.ticket.print` + `scig.report.view` + `scig.report.export` |

Descriptions courtes en français pour chaque rôle/profil.

## Composant 2 — Accroche à la création de société

Dans `_bootstrap_company` (après création du HQ et du 1er admin, avant le `return`), appeler
`seed_default_roles(company, created_by=created_by)`. Import local pour éviter les cycles.
(Les rôles/profils par défaut existent donc dès qu'une société est créée avec bootstrap.)

## Composant 3 — Backfill des sociétés existantes

Management command `apps/admin_rbac/management/commands/seed_default_roles.py` :
`python manage.py seed_default_roles [--company <id>]` — itère les sociétés (`Company`, non supprimées),
appelle `seed_default_roles(company)` pour chacune (idempotent), affiche un récap par société.

## Gestion des erreurs / cas limites

- Rôle/profil déjà présent (nom) → skip silencieux (pas d'`ApplicationError`).
- Permissions absentes en base (catalogue incomplet) → le rôle est créé avec les codes trouvés
  (requête filtrée) ; jamais d'échec dur.
- `seed_default_roles` ne modifie jamais un rôle/profil existant (création uniquement).

## Vérification

- **Backend** : tests `@pytest.mark.django_db` :
  - après `create_company(..., admin_email=…)`, la société a les 6 rôles **et** 6 profils par défaut ;
  - le profil « Guichetier » contient un rôle dont les permissions incluent `ticketing.booking.create`
    et **excluent** `fleet.vehicle.create` ;
  - « Gestionnaire de flotte » inclut `fleet.vehicle.create` ;
  - idempotence : rappeler `seed_default_roles` n'ajoute pas de doublon ;
  - la commande `seed_default_roles` peuple une société créée sans bootstrap.
- `manage.py check` OK.

## Hors périmètre

- Pas de modification de l'UI (les rôles/profils apparaissent dans les écrans RBAC existants).
- Pas d'auto-assignation de profil au personnel (l'admin choisit).
- Pas de changement du frontend.
