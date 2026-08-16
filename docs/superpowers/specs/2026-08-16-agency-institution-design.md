# Agences côté institution + rattachements (Caisse, Point de service) — Design Spec

**Date :** 2026-08-16
**Sous-projet :** Administration — gestion des agences par l'institution + liens Caisse↔Agence et Point de service↔Agence.
**Branche :** `feature/agency-institution` (depuis `master`)
**Dépend de :** RBAC (`HasModulePermission`), Trésorerie T3a (écran Caisses), Voyages Config (points de service).

## Contexte & objectif

L'admin d'institution ne peut pas gérer ses agences depuis l'app (l'écran vit sous l'espace super‑admin),
alors que le backend l'autorise déjà. On veut : (AG1) rendre les **agences gérables par l'institution**
(avec RBAC déléguable), (AG2) **rattacher une caisse à une agence**, (AG3) rattacher un **point de service
« vente de billets » à une agence**. Objectif immédiat : pouvoir affecter une caisse à une agence avant T3b.

## Décisions validées (brainstorm)

- Périmètre : **AG1 + AG2 + AG3**.
- **RBAC déléguable** : codes `system.agency.view` / `system.agency.manage` (pas seulement statut admin).
- Caisse : on **ajoute** `agency` (on garde `terminal` en plus).
- Point de service : FK agence **optionnel**, pertinent uniquement quand `station_kind = AGENCY` (vente de billets).

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`). Backend `backend/`, frontend `angular/`.
- Branche `feature/agency-institution` depuis `master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Vérif : backend pytest + `manage.py check` + `makemigrations --check` ; frontend `npx ng build`.

**Acquis réutilisés (vérifiés) :**
- Vues `AgencyListView` (l.266), `AgencyDetailView` (l.318), `AgencyTreeView` (l.358) dans `apps/system_config/views.py`, aujourd'hui `IsInstitutionAdmin`, scopées via `_get_company_id(request)` ; `AgencyListView.post` injecte `company` pour un non‑superuser.
- `HasModulePermission` accorde automatiquement super‑admin **et** admin d'institution ; sinon vérifie `permission_map`.
- Dernière migration `admin_rbac` : `0010_treasury_permissions_seed`. Patron seed : `AppModule.get_or_create(code=…)` + `Permission.update_or_create(...)`.
- `Agency` (system_config) : `company, parent, name, code, agency_type, email, phone, address, manager, currency`.
- `CashRegister` (treasury) : a déjà `terminal` (FK transport_config.Terminal), `account`, `journal`.
- `ServicePoint` (voyages_config, `models/network.py`) : `StationKind` = `TERMINAL`/`AGENCY`, `is_station`, `station_kind`.
- Front : `AgencyService` (`_api/services/system/agency.service.ts`) → `list(companyId?)/create/update/delete/tree` sur `SYSTEM.agencies` (le backend scope à la société de l'admin quand `companyId` absent). Modèles `Agency`,`AgencyForm` (`_api/models/system.models.ts`). Écran super‑admin : `_api/pages/system/agencies/` (avec sélecteur de société). Section menu « Administration » (`sidebar.service.ts` l.449). `RegisterService` (T3a), écran Caisses `_api/pages/treasury/registers/`. Écran points de service `_api/pages/voyages-config/service-points/` + `service-point.service.ts`.

## AG1 — Agences gérables par l'institution

### Backend
- Migration `admin_rbac/0011_agency_permissions_seed.py` : module `system` (« Configuration système ») + codes
  `system.agency.view`, `system.agency.manage`.
- `apps/system_config/views.py` : importer `IsAuthenticated, HasModulePermission` ; sur les 3 vues Agency,
  remplacer `permission_classes = [IsInstitutionAdmin]` par `[IsAuthenticated, HasModulePermission]` + `permission_map` :
  - `AgencyListView` : `{"GET": "system.agency.view", "POST": "system.agency.manage"}`
  - `AgencyDetailView` : `{"GET": "system.agency.view", "PATCH": "system.agency.manage", "PUT": "system.agency.manage", "DELETE": "system.agency.manage"}`
  - `AgencyTreeView` : `{"GET": "system.agency.view"}`
  (L'admin d'institution garde l'accès via le bypass ; un employé peut être délégué via ces codes. La logique
  d'injection de `company` pour non‑superuser est inchangée.)

### Frontend
- Nouvel écran **Agences (institution)** : `_api/pages/system/agencies-admin/agencies-admin.component.{ts,html}`
  (CRUD via `AgencyService.list()/create/update/delete` **sans** sélecteur de société ; le payload de création
  n'envoie pas `company` — le backend l'injecte). Colonnes : Nom, Code, Type, Ville/adresse, Manager, Actions.
  Modale : name, code, agency_type, email, phone, (parent optionnel). Gating `*hasPermission="'system.agency.manage'"`.
- Route `admAgencies = '/administration/agencies'` (constante `routes.ts`) ; bloc route lazy sous `pages` ;
  entrée menu **« Agences »** dans la section **Administration**, `permission:'system.agency.view'`.

## AG2 — Caisse ↔ Agence

### Backend
- `CashRegister` : ajouter `agency = FK("system_config.Agency", null=True, blank=True, SET_NULL, related_name="+")`. Migration `treasury/0003`.
- `CashRegisterReadSerializer` : ajouter `agency` + `agency_name` (`source="agency.name"`, default None).
- `CashRegisterWriteSerializer`/`UpdateSerializer` : ajouter `agency_id` (UUID, required=False, allow_null).
- `create_cash_register` : accepter `agency_id=None` → `agency_id=agency_id` au create ; `update_cash_register` : ajouter `"agency_id"` au set `allowed` ; `CashRegisterListView.post` : passer `agency_id=d.get("agency_id")`.

### Frontend
- `treasury.models.ts::CashRegister` : ajouter `agency`, `agency_name`.
- Écran Caisses : sélecteur **Agence** (via `AgencyService.list()`) dans la modale ; colonne Agence dans la table.

## AG3 — Point de service ↔ Agence

### Backend
- `ServicePoint` : ajouter `agency = FK("system_config.Agency", null=True, blank=True, SET_NULL, related_name="+")`. Migration voyages_config.
- Sérialiseur `ServicePoint` (dans `apps/voyages_config/`) : exposer `agency` (write) + `agency_name` (read). (Localiser le sérialiseur existant lors du plan.)

### Frontend
- Écran points de service : sélecteur **Agence** (via `AgencyService.list()`), **affiché uniquement** quand
  `station_kind === 'AGENCY'` ; colonne Agence. Champ envoyé seulement si type = AGENCY.

## Gestion des erreurs / cas limites

- Agences : erreurs backend renvoyées telles quelles (enveloppe `{success,error}` → interceptor). Unicité `(company, code)` gérée par le backend.
- Caisse/point de service : `agency` facultatif ; `— Aucune —` possible.
- AG3 : si l'utilisateur change le type de AGENCY→TERMINAL, l'agence peut être ignorée/effacée côté form (non bloquant).
- RBAC : admin d'institution et super‑admin conservent l'accès complet (bypass) ; le staff délégué a besoin de `system.agency.*`.

## Vérification

- **Backend** :
  - RBAC : staff avec `system.agency.view` → GET agencies ≠ 403, POST → 403 ; `system.agency.manage` → POST ≠ 403 ; admin d'institution → tout ; codes seedés présents.
  - Caisse : POST register avec `agency_id` → caisse liée ; read renvoie `agency_name`.
  - Point de service : POST/PATCH avec `agency` (type AGENCY) → lien enregistré.
  - `manage.py check` + `makemigrations --check` OK ; suites `treasury`, `system_config`, `voyages_config` PASS.
- **Frontend** : `npx ng build` OK. Contrôle manuel : admin d'institution voit « Agences » (Administration) et crée une agence ; formulaire Caisse propose l'agence ; point de service de type Agence propose l'agence.

## Hors périmètre

- Réécriture de l'écran super‑admin des agences (inchangé).
- Utilisation de `agency` dans le pont comptable (le pont T1 reste inchangé ; l'agence est informative/organisationnelle en T3a).
- Sessions/Mouvements/Transferts (T3b).
