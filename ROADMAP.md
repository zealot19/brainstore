# ERP — Feuille de route / Reste à faire

> Document de suivi : ce qui est **fait**, ce qui **reste**, et les points d'attention
> pour reprendre le développement plus tard. Mis à jour le **2026-08-16**.
> Voir aussi `backend/apps/accounting/README.md` (détails du module comptable) et
> `docs/superpowers/specs/` + `docs/superpowers/plans/` (specs & plans par tranche).

---

## 1. État actuel (fait ✅)

### Socle
- **core** — `BaseModel` (UUID, TimeStamped/SoftDelete/Audit), séquences, pagination
  (`StandardResultsSetPagination` → enveloppe `{success, data, pagination}`), réponses
  normalisées, exceptions.
- **Multi-tenant** — `TenantMiddleware` résout le tenant depuis les claims du JWT
  (`company_id`/`agency_id`/`user_id`). Fallback défensif par vue sur `request.user.company`.
- **authentication** — JWT (SimpleJWT), login email/username, claims enrichis, 2FA (champ).
- **admin_rbac** — rôles & permissions par module, permissions semées par data-migrations,
  bypass superuser + institution_admin.
- **system_config** — packages, institutions (Company), abonnements, **agences**
  (hiérarchie), paramètres, feature flags.
- **users** — gestion des utilisateurs.

### Métier
- **fleet** — parc / véhicules, conducteurs externes.
- **voyages_config** — configuration transport (points de service, itinéraires, plans de
  salle, tarifs, types de colis, **types de membres d'équipage**, réglages).
- **voyages_trips** — voyages/départs, sièges, **équipage** (CrewMember + affectation),
  transbordement, cycle de vie (draft → completed).
- **voyages_booking** — réservations, billets, guichet.
- **voyages_consignment** — **colis** & **bagages** (enregistrement, suivi, retrait).
- **accounting** — A1 (référentiel SYSCOHADA : comptes, journaux, périodes) + A2 (moteur :
  écritures, lignes, séquences, lettrage partiel, partenaires). Double-partie, séquences
  sans trou, immutabilité après validation, contre-passation.
- **treasury** — caisses, sessions, comptes bancaires, transactions, transferts.
  - Pont comptable automatique (571/521 ↔ contrepartie par catégorie, écart de caisse).
  - Intégration **ventes guichet** (billets → 706), **colis** (707), **bagages** (706).

### Frontend (Angular)
- Écrans : auth, agences (super-admin + institution), config voyages, voyages/trip-detail,
  équipage, colis/bagages, trésorerie (caisses, sessions, transactions, transferts), RH
  (employés minimal), comptabilité (référentiel + saisie).
- `apiUnwrapInterceptor` (désemballe `{success,data}`), `HasPermissionDirective`,
  `BaseConfigService`.

---

## 2. Avant de déployer (checklist « version utilisable »)

- [ ] **Settings production** (`config/settings/production.py`) : `DEBUG=False`,
      `ALLOWED_HOSTS`, `SECRET_KEY` via env, base **PostgreSQL** (au lieu de SQLite),
      `CORS`/`CSRF` origins, `SECURE_*` (HTTPS).
- [ ] **Migrations** : `python manage.py migrate` sur la base cible. Vérifier
      `makemigrations --check` (doit être propre).
- [ ] **Données de base** : créer le super-admin, puis une institution (le bootstrap sème
      plan comptable, journaux, mapping trésorerie, types d'équipage…). Vérifier
      `seed_treasury_mapping` (11 catégories dont `baggage`).
- [ ] **Statique** : le dossier `backend/static` n'existe pas (warning `W004`) →
      `collectstatic` ou créer le dossier.
- [ ] **Dépendances optionnelles** (warnings au démarrage) : `cryptography` (mdp Sage
      chiffrés) et `pyodbc` (sync Sage 100). Facultatif si la sync Sage n'est pas utilisée.
- [ ] **Frontend** : `ng build` en configuration production ; servir `angular/dist/`.
      ⚠️ `angular/dist/` est **versionné** (1371 fichiers) — reconstruire proprement au
      déploiement plutôt que committer des artefacts partiels.
- [ ] **Tests** : `pytest` (120 tests au 2026-08-16) — tout au vert avant déploiement.
- [ ] **Sauvegardes** DB + stratégie de restauration.

---

## 3. Reste à faire (backlog priorisé)

### Trésorerie
- [ ] **T2 — Partenaire sur mouvement** : rattacher un tiers (client/fournisseur) à une
      transaction ; relevé & **rapprochement bancaire** (import relevé, pointage).

### Comptabilité
- [ ] **A3 — Reporting** : balance, grand-livre, journaux, bilan/compte de résultat
      SYSCOHADA, exports (PDF/Excel).
- [ ] **A4 — Lettrage & clôtures** : lettrage complet (au-delà du partiel actuel), clôture
      de période/exercice, à-nouveaux.

### RH
- [ ] **Contrats** (types, périodes, avenants).
- [ ] **Paie** → génération d'écritures dans le journal **PAIE** (pont comptable RH).
- [ ] **Lien équipage ↔ RH** : rattacher `CrewMember` à `hr.Employee` /
      `fleet.ExternalDriver` (actuellement `CrewMember` est autonome).

### Multi-tenant / plateforme
- [ ] Résolution d'agence courante (au-delà de la société) si besoin de scoping par agence.
- [ ] Quotas de package appliqués partout (users/agences/stockage).

### À décider / éventuel (« along the road »)
- [ ] Booking en ligne public (`online_booking`) — présent mais à finaliser/vérifier.
- [ ] Sync SCIG ↔ Sage 100 (`sync_scig_sage`) — nécessite `pyodbc`/`cryptography`.
- [ ] Notifications (email/SMS), i18n EN/FR complet (spec existante), tableaux de bord.

---

## 4. Points d'attention / dette technique (à ne pas oublier)

- **Forme des listes paginées** : toutes les listes DRF renvoient `{success, data,
  pagination}`, **désemballé en tableau nu** par l'intercepteur Angular. Côté service :
  `map(r => r.results ?? r.data ?? r)` (jamais `r.results` seul). Voir historique du bug
  (trésorerie/RH listes vides).
- **Avant de fusionner une branche** : `git status --short` (repérer du source non
  committé) + `makemigrations --check`. Deux bugs « clone neuf cassé » ont été livrés ainsi
  (migration comptable manquante ; fichiers front équipage non committés).
- **`angular/dist/` versionné** : éviter de committer des artefacts de build partiels
  (`git checkout --` après un `ng build` local de vérification).
- **Dépôt git** : la racine est `ERP-master/` (⚠️ pas `new_erp/`). Brancher depuis
  `origin/master`. Commits au nom de *shimi* (pas de co-auteur).

---

## 5. Comment reprendre

1. Choisir une tranche du backlog (§3).
2. Brainstorming → spec (`docs/superpowers/specs/`) → plan (`docs/superpowers/plans/`).
3. Implémenter en TDD, suite `pytest` au vert.
4. Vérifier §4 (git status + makemigrations), fusionner en fast-forward sur `master`,
   pousser.
