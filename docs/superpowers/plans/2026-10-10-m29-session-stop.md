# M29 — Arrêt de session — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter l'étape « arrêt » du cycle de session : le caissier arrête sa session après le billetage de fin de poste (plus aucune opération) ; le chef clôture ensuite.

**Architecture:** Nouveau statut `STOPPED` + `stop_session` (caissier assigné, gardé par l'existence d'un billetage CLOSING). `close_session` accepte STOPPED. Opérations bloquées par la garde `status==OPEN` existante. Additif, aucune logique d'écart/solde touchée.

**Tech Stack:** Django + DRF, pytest, Angular standalone + Transloco.

**Spec:** `docs/superpowers/specs/2026-10-10-m29-session-stop-design.md`

## Global Constraints

- Tests : `cd backend && ../env/bin/python -m pytest <chemin> -q` (`--create-db` après schéma).
- `makemigrations --check --dry-run` = « No changes detected » avant commit backend.
- Frontend : i18n via `python json.load/dump` + revérif ; gate `cd angular && npx ng build --configuration development`.
- Commits shimi, sans co-auteur Claude.
- Base rouge trésorerie master : 4 tests (register/expense) — baseline.
- **Ne toucher NI l'écart NI le billetage NI le solde** — M29 est additif (un état + une action).

## Review Focus

- **Arrêt sans billetage** : `stop_session` sans comptage CLOSING → doit lever. Test Task 1.
- **Arrêt par non-assigné** : un utilisateur ≠ caissier assigné (non admin) → doit lever. Test Task 1.
- **Opérations après arrêt** : `create_transaction` sur une session STOPPED → doit lever (garde existante). Test Task 1.
- **Reprise interdite** : `resume_session` sur STOPPED → doit lever. Test Task 1.
- **Clôture depuis STOPPED** : `close_session` sur STOPPED → CLOSED, écart calculé normalement. Test Task 1.

---

## Task 1 : Backend — statut STOPPED + `stop_session` + endpoint

**Files:**
- Modify: `backend/apps/treasury/models/cash_session.py` (`STOPPED` + `stopped_at`/`stopped_by`)
- Modify: `backend/apps/treasury/services/services.py` (`stop_session` ; `close_session` accepte STOPPED)
- Modify: `backend/apps/treasury/services/__init__.py` (export `stop_session`)
- Modify: `backend/apps/treasury/views.py` (`SessionStopView`)
- Modify: `backend/apps/treasury/urls.py` (route `sessions/<id>/stop/`)
- Modify: `backend/apps/treasury/serializers.py` (`CashSessionReadSerializer` : exposer `stopped_at` si pertinent)
- Create: `backend/apps/treasury/tests/test_m29_stop.py`
- Migration auto

**Interfaces:**
- Produces: `CashSession.Status.STOPPED` ; `stop_session(session, *, user)`.

- [ ] **Step 1 : Test rouge** — `test_m29_stop.py`. Fixture : société + caisse + session OUVERTE assignée à un caissier (créer via `open_session`/`schedule`+`open_scheduled`, ou directement `CashSession.objects.create(status=OPEN, assigned_to=caissier)` + un `CashCount` CLOSING pour les cas « billetage fait »). Cas :
  - `stop_session` sans comptage CLOSING → `ApplicationError`.
  - `stop_session` par un utilisateur non-assigné et non-admin → `ApplicationError`.
  - `stop_session` par le caissier assigné (avec CLOSING) → `status == STOPPED`, `stopped_by` posé.
  - `create_transaction` (cash) sur la session STOPPED → `ApplicationError` (session non ouverte).
  - `resume_session` sur STOPPED → `ApplicationError`.
  - `close_session` sur STOPPED (chef) → `status == CLOSED`.
  - `stop_session` sur une session déjà CLOSED/STOPPED → `ApplicationError`.

Helper billetage CLOSING :
```python
from apps.treasury.models import CashCount
CashCount.objects.create(cash_session=session, kind=CashCount.Kind.CLOSING, total_amount=0,
                         counted_by=caissier, created_by=caissier)
```

- [ ] **Step 2 : rouge** `../env/bin/python -m pytest apps/treasury/tests/test_m29_stop.py -q --create-db`

- [ ] **Step 3 : Modèle** — `cash_session.py` : ajouter `STOPPED = "stopped", _("Arrêtée")` à `Status` ;
  champs `stopped_at = DateTimeField(null=True, blank=True)`, `stopped_by = FK(User, SET_NULL, null, blank, related_name="+")`.

- [ ] **Step 4 : Migration** `makemigrations treasury` (AddField stopped_at/by ; AlterField status si nécessaire pour le choix — un ajout de choix ne change pas le schéma SQLite/Postgres, souvent aucune migration pour le choix seul, mais les 2 AddField oui).

- [ ] **Step 5 : Service `stop_session`** (services.py, près de suspend/resume) :
```python
@transaction.atomic
def stop_session(session, *, user):
    from apps.treasury.models import CashCount
    if session.status != CashSession.Status.OPEN:
        raise ApplicationError(_("Seule une session ouverte peut être arrêtée."))
    is_admin = bool(getattr(user, "is_superuser", False) or getattr(user, "is_institution_admin", False))
    if not is_admin and session.assigned_to_id != getattr(user, "id", None):
        raise ApplicationError(_("Seul le caissier assigné peut arrêter cette session."))
    if not session.counts.filter(kind=CashCount.Kind.CLOSING, is_deleted=False).exists():
        raise ApplicationError(_("Faites le billetage de fin de poste avant d'arrêter la session."))
    from django.utils import timezone
    session.status = CashSession.Status.STOPPED
    session.stopped_at = timezone.now(); session.stopped_by = user
    session.updated_by = user
    session.save(update_fields=["status", "stopped_at", "stopped_by", "updated_by", "updated_at"])
    return session
```
Exporter dans `services/__init__.py`.

- [ ] **Step 6 : `close_session` accepte STOPPED** — remplacer
  `if session.status not in (CashSession.Status.OPEN, CashSession.Status.SUSPENDED):`
  par `… not in (OPEN, SUSPENDED, STOPPED):`.

- [ ] **Step 7 : Vue + URL** — `SessionStopView` (`POST`, `permission_map={"POST": "treasury.session.operate"}`) : `get_session` scoping société, 404 sinon ; `stop_session` ; renvoie `CashSessionReadSerializer`. URL `path("sessions/<uuid:session_id>/stop/", views.SessionStopView.as_view())`. Serializer : ajouter `stopped_at` aux fields si utile à l'affichage.

- [ ] **Step 8 : vert + non-régression + check**
Run: `../env/bin/python -m pytest apps/treasury/tests/test_m29_stop.py -q --create-db` → PASS
Run: `../env/bin/python -m pytest apps/treasury -q --reuse-db` → seuls les 4 rouges de base
Run: `makemigrations --check --dry-run` → No changes detected

- [ ] **Step 9 : Commit** `git commit -m "feat(treasury): session STOPPED state + stop_session (M29)"`

---

## Task 2 : Frontend — action « Arrêter ma session »

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (`sessionStop`)
- Modify: `angular/src/_api/services/treasury/session.service.ts` (`stop(id)`)
- Modify: `angular/src/_api/pages/treasury/sessions/sessions.component.{ts,html}` (action + badge)
- Modify: `angular/src/_api/models/treasury.models.ts` (status peut valoir `stopped` — déjà `string`, OK)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

**Interfaces:**
- Consumes: `POST /treasury/sessions/<id>/stop/`.

- [ ] **Step 1 : Endpoint** `api.config.ts` : `sessionStop: (id) => \`${TRZ}/sessions/${id}/stop/\``.
- [ ] **Step 2 : Service** `session.service.ts` : `stop(id)` POST (`map(r => r.data ?? r)`).
- [ ] **Step 3 : Composant** — bouton **« Arrêter ma session »** sur une session `open` assignée au user courant (le caissier), visible avec `*hasPermission="'treasury.session.operate'"` ; appelle `svc.stop(s.id)` → recharge ; toast succès / toast erreur (ex. « billetage de fin requis »).
- [ ] **Step 4 : Badge statut** — ajouter le rendu du statut `stopped` (ex. `statusCss('stopped')` → une classe) + libellé via `status_display` déjà renvoyé par l'API.
- [ ] **Step 5 : i18n** — `treasury.session.stop_btn` (« Arrêter ma session » / "Stop my session" / …) ×4.
- [ ] **Step 6 : Build** `npx ng build --configuration development` → complete.
- [ ] **Step 7 : Commit** `git commit -m "feat(treasury): action Arrêter ma session (frontend) (M29)"`

---

## Notes d'implémentation

- M29 est additif : un statut + une action. Ne pas réécrire open/close/billetage/écart.
- Le blocage des opérations sur une session STOPPED est **hérité** de la garde `status==OPEN`
  de `create_transaction` — le prouver par test, ne pas ajouter de garde redondante.
- Pour les tests, construire la session OPEN + le comptage CLOSING directement en base.
- `close_session` : seul le `status not in (...)` change ; l'écart/justification/transfert restent identiques.
