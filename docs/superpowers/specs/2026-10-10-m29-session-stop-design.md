# M29 — Arrêt de session (cycle de vie caisse) — Design

**Date :** 2026-10-10 · **Module :** `apps/treasury` · **Référence cahier :** M29 (dictée 39)

## Intention

Compléter le cycle de vie de session de caisse : après son **billetage de fin de
poste**, le **caissier arrête sa session** (« plus aucune opération ») ; le **chef
d'agence** la **clôture** ensuite (billetage détaillé + écart). Chaque étape tracée.

## État existant (déjà conforme à M29)

- Création de la caisse par le chef (`create_cash_register`, RBAC `session.manage`).
- Planification + ouverture par le chef OU le caissier titulaire (`schedule_session`,
  `open_scheduled_session`, `open_session`) ; solde d'ouverture affiché.
- Billetage de fin de poste par le caissier assigné (`record_shift_billetage`,
  CLOSING count, après l'heure de fin prévue).
- Clôture **par le chef uniquement** (`close_session`, `session.manage`) : billetage
  détaillé + écart ; sans écart → clôture directe, avec écart → justification obligatoire.
- `SUSPENDED` (pause résumable via `suspend_session`/`resume_session`).

**Seule pièce manquante : l'« arrêt » de fin de poste** — aujourd'hui la session reste
`OPEN` après le billetage du caissier jusqu'à la clôture par le chef.

## Décisions actées (brainstorm)

- Nouveau statut **`STOPPED` (« Arrêtée »)**, distinct de `SUSPENDED` (pause résumable).
- **Action explicite « Arrêter »** par le caissier, **après** son billetage de fin de
  poste (gardée : un comptage CLOSING doit exister sur la session).
- **Pas de reprise** d'une session `STOPPED` : seul le chef la **clôture** (un admin peut
  intervenir au besoin, mais pas de `resume` caissier).

## Architecture (delta)

### 1. Statut `STOPPED`

Ajouter à `CashSession.Status` : `STOPPED = "stopped", _("Arrêtée")`.

### 2. Service `stop_session(session, *, user)`

```
- status doit être OPEN (sinon ApplicationError : seule une session ouverte s'arrête)
- autorisé si user == session.assigned_to OU admin  (sinon ApplicationError)
- exige qu'un comptage CLOSING existe (billetage de fin fait) :
    session.counts.filter(kind=CashCount.Kind.CLOSING, is_deleted=False).exists()
    sinon ApplicationError("Faites le billetage de fin de poste avant d'arrêter la session.")
- status = STOPPED ; stopped_at/stopped_by si on veut tracer (sinon audit BaseModel) ; save
```
(On peut ajouter `stopped_at`/`stopped_by` sur le modèle pour la traçabilité fine ; sinon
l'audit global suffit. **Ruling plan** : ajouter `stopped_at` + `stopped_by` pour l'historique.)

### 3. `close_session` accepte `STOPPED`

Ligne existante `if session.status not in (OPEN, SUSPENDED): raise` → ajouter `STOPPED`.
Le reste (écart, justification, transfert guichet) **inchangé**.

### 4. Opérations bloquées quand STOPPED

`create_transaction` exige déjà `cash_session.status == OPEN` → une session `STOPPED`
**bloque automatiquement** ventes/dépenses/recettes. Aucun code nouveau ; ajouter un test
qui le prouve.

### 5. Pas de reprise

`resume_session` ne résume que `SUSPENDED` (vérifier sa garde) → une session `STOPPED`
ne peut pas être résumée. `suspend_session` n'agit que sur `OPEN`. Aucun changement, test.

### 6. Endpoint

`POST /treasury/sessions/<uuid:session_id>/stop/` — permission `treasury.session.operate`
(le caissier) ; résout la session scoping société ; `stop_session` (garde caissier assigné
dans le service). Renvoie la session sérialisée.

### 7. Frontend (sessions)

- Bouton **« Arrêter ma session »** pour le caissier assigné sur une session `OPEN` ayant
  déjà un billetage de fin (sinon désactivé avec tooltip). Après billetage de fin de poste
  (composant `cash-session-timer` ou page sessions), proposer l'arrêt.
- La page sessions affiche le statut `Arrêtée` (badge) ; le chef garde l'action **Clôturer**
  sur une session arrêtée (comme aujourd'hui sur OPEN).
- i18n fr/en/es/pt (`treasury.session.stop_btn`, statut `stopped`).

## Tests (backend)

1. **stop réservé au caissier assigné** : autre utilisateur non-admin → lève ; caissier assigné → STOPPED.
2. **stop exige le billetage de fin** : sans comptage CLOSING → lève ; avec → STOPPED.
3. **STOPPED bloque les opérations** : `create_transaction`/`record_other_income` sur une session STOPPED → lève.
4. **close depuis STOPPED** : `close_session` sur une session STOPPED → CLOSED (écart calculé normalement).
5. **pas de reprise** : `resume_session` sur STOPPED → lève.
6. **stop exige OPEN** : stop sur une session déjà CLOSED/STOPPED → lève.

## Hors périmètre

- Aucun changement au calcul d'écart, de solde, ou au billetage (M28/existant).
- Pas de réouverture d'une session arrêtée (décision : non).
- Le reste du cycle (création/ouverture/clôture) est déjà en place — non ré-implémenté.

## Points tranchés (rulings)

- `STOPPED` nouveau statut (pas de surcharge de `SUSPENDED`).
- Arrêt = action explicite du caissier, gardée par l'existence d'un billetage CLOSING.
- `stopped_at`/`stopped_by` ajoutés au modèle pour la traçabilité de l'étape.
- Blocage des opérations hérité de la garde `status == OPEN` existante (testé, non ré-écrit).
