# Voyages — Sous-module Équipage (types + membres + affectation) — Design Spec

**Date :** 2026-08-16
**Sous-projet :** Voyages — gestion des membres d'équipage + type d'équipage configurable, et rebranchement de l'affectation.
**Branche :** `feature/voyages-crew` (depuis `master`)

## Contexte & objectif

Aujourd'hui l'équipage d'un voyage (`voyages_trips.TripCrew`) pointe vers `fleet.ExternalDriver` avec un
**rôle en dur** (enum DRIVER/CONVOYEUR/CONTROLEUR). On crée un vrai sous-module Voyages pour gérer les
**membres d'équipage** (roster autonome) avec un **type d'équipage configurable** (Chauffeur, Convoyeur,
Contrôleur…), et on rebranche l'affectation des voyages sur ce nouveau modèle. On ne développe **pas** le
module RH pour ça : le membre d'équipage est autonome (liens RH/flotte reportés).

## Décisions validées (brainstorm)

- Périmètre **complet** : **CM1** (type configurable) + **CM2** (roster) + **CM3** (rebranchement de `TripCrew`).
- `CrewMember` **autonome** (pas de lien obligatoire vers `hr.Employee`/`fleet.ExternalDriver` ; liens optionnels plus tard).
- Le type porte un indicateur **`is_driver`** pour conserver la règle « il faut un chauffeur » après suppression de l'enum.

## Contraintes globales

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`). Backend `backend/`, frontend `angular/`.
- Branche depuis `master`. Forward-only. Commits **shimi** (sans trailer Claude). Français.
- Vérif : pytest + `manage.py check` + `makemigrations --check` ; frontend `npx ng build`.

**Acquis réutilisés (vérifiés) :**
- Configs Voyages : factory `_pair(model, read, write, unique="name", search, perm=None)` (`voyages_config/config_api/views.py`) + `_ConfigListView`/`_ConfigDetailView` (permission par défaut `transport.config.view/manage`). Sérialiseurs `_ScopeMixin`/Write. Modèles `_CompanyScoped`.
- Seeding par société : `_bootstrap_company` (system_config) appelle déjà seed_default_roles/seed_accounting/seed_treasury_mapping.
- `voyages_trips.TripCrew` : `trip`, `driver=FK(fleet.ExternalDriver)`, `role` (enum), `boarded_at`. API : `TripCrewView` (GET/POST `voyage.crew.view/manage`) + `TripCrewDetailView` (DELETE). `TripCrewWriteSerializer` = `driver_id` + `role`. `TripCrewSerializer` (read). Règle `trip_services.py` : `trip.crew.filter(role="DRIVER").exists()`.
- Frontend : configs voyages = écrans `_api/pages/voyages-config/*` (patron `fuel-types`/BaseConfigService) + menu « Config Voyages ». Affectation équipage = écran `_api/pages/voyages/trip-detail/`.

## CM1 — Type de membre d'équipage (config)

- Modèle `apps/voyages_config/models/crew_member_type.py::CrewMemberType(_CompanyScoped)` : `code` (CharField),
  `name` (CharField), `is_driver` (bool défaut False), `is_active` (hérité). `unique_together` par société sur `code` (via `_CompanyScoped`).
- API : sérialiseurs `CrewMemberTypeRead`/`CrewMemberTypeWrite` + enregistrement via `_pair(CrewMemberType, …, unique="code", search=("code","name"), perm=None)` (RBAC `transport.config.*` par défaut) + routes sous `/voyages/config/crew-member-types/`.
- Seed par société : `seed_crew_member_types(company)` (idempotent) → **Chauffeur** (`code=DRIVER`, `is_driver=True`), **Convoyeur** (`code=CONVOYEUR`), **Contrôleur** (`code=CONTROLEUR`). Accroché dans `_bootstrap_company` + commande `seed_crew_member_types [--company]`.
- Frontend : écran **Types d'équipage** (`_api/pages/voyages-config/crew-member-types/`) : table (code, nom, conducteur ?, actif) + CRUD (champ `is_driver` = switch). Service + route + entrée menu « Config Voyages ».

## CM2 — Roster des membres d'équipage

- Modèle `apps/voyages_trips/models/crew_member.py::CrewMember(BaseModel)` : `company` (FK), `first_name`,
  `last_name`, `member_type` (FK `voyages_config.CrewMemberType`, PROTECT), `phone` (blank), `license_number`
  (blank), `is_active` (défaut True), `notes` (blank). Propriété `full_name`.
- API : `apps/voyages_trips` — sérialiseurs `CrewMemberRead` (avec `member_type_name`, `is_driver` via type) / `CrewMemberWrite` (`first_name`, `last_name`, `member_type_id`, `phone?`, `license_number?`, `is_active?`) ; vues list/create + detail (GET/PATCH/DELETE) scopées société, RBAC `voyage.crew.view/manage` ; routes sous `/voyages/trips/crew-members/`.
- Frontend : écran **Membres d'équipage** (`_api/pages/voyages-config/crew-members/` ou `_api/pages/voyages/crew-members/`) : table (Nom, Type, Téléphone, N° permis, Actif) + CRUD (sélecteur type via l'API types). Service + route + entrée menu.

## CM3 — Rebranchement de l'affectation (`TripCrew`)

- Modèle `TripCrew` : **supprimer** `driver` (FK ExternalDriver) et `role` (enum) ; **ajouter** `member = FK("voyages_trips.CrewMember", on_delete=PROTECT, null=True, related_name="trip_assignments")`. Migration `voyages_trips` (destructive sur `driver`/`role`).
- `TripCrewWriteSerializer` : remplacer `driver_id`/`role` par `member_id` (UUID).
- `TripCrewView.post` : résoudre le `CrewMember` de la société ; `TripCrew.objects.create(trip=trip, member=member, …)`.
- `TripCrewSerializer` (read) : exposer `member` (id), `member_name` (`source="member.full_name"`), `member_type_name`, `is_driver` (`source="member.member_type.is_driver"`).
- `trip_services.py` : remplacer `trip.crew.filter(role="DRIVER")` par `trip.crew.filter(member__member_type__is_driver=True)`.
- Frontend : écran **trip-detail** — la section équipage sélectionne désormais un **membre d'équipage** (au lieu d'un conducteur flotte) ; adapter le service/affichage (nom + type + badge conducteur).

## Gestion des erreurs / cas limites

- Type d'équipage : `code` unique par société ; suppression PROTECT si des membres l'utilisent.
- Membre d'équipage : `member_type` PROTECT ; suppression/désactivation ; PROTECT si affecté à un voyage.
- `TripCrew.member` null=True pour permettre la migration (lignes existantes) ; à la création via API, `member` requis.
- Règle « chauffeur requis » conservée via `member__member_type__is_driver`.
- Seed idempotent des types.

## Vérification

- **Backend** (`@pytest.mark.django_db`) :
  - `seed_crew_member_types(company)` crée 3 types dont Chauffeur `is_driver=True` ; idempotent ; présent après `create_company`.
  - CrewMemberType : POST config crée un type ; unicité `code`.
  - CrewMember : CRUD (create avec `member_type_id`) ; RBAC `voyage.crew.*` (staff view → GET ok, POST 403 ; manage → POST ok).
  - `TripCrew` : POST crew avec `member_id` crée l'affectation ; `TripCrewSerializer` renvoie `member_name`/`is_driver` ; la règle « chauffeur requis » (`trip_services`) détecte un membre de type `is_driver`.
  - `manage.py check` + `makemigrations --check` OK.
- **Frontend** : `npx ng build` OK. Contrôle manuel : configurer un type ; créer un membre ; l'affecter à un voyage (trip-detail).

## Hors périmètre

- Lien `CrewMember → hr.Employee` / `fleet.ExternalDriver` (plus tard).
- Disponibilités/planning des membres, coûts/rémunération (paie), permis/visites médicales.
- Reprise de données des affectations `driver`/`role` existantes (migration destructive sur base de dev).
