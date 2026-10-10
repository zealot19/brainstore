# M30 — Demandes d'explication d'écart — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Workflow de demande d'explication sur un écart de session : chef émet → caissier assigné répond → chef décide (Justifié/Non justifié) ; historisé et rattaché à la session.

**Architecture:** Nouveau modèle `SessionExplanationRequest` (couche workflow, aucune logique monétaire). Services `raise/respond/decide` avec garde caissier assigné. Endpoints réutilisant les permissions session existantes. Frontend : fil sur la session clôturée avec écart.

**Tech Stack:** Django + DRF, pytest, Angular standalone + Transloco.

**Spec:** `docs/superpowers/specs/2026-10-10-m30-explanation-requests-design.md`

## Global Constraints

- Tests : `cd backend && ../env/bin/python -m pytest <chemin> -q` (`--create-db` après schéma).
- `makemigrations --check --dry-run` = « No changes detected » avant commit backend.
- Frontend : i18n via `python json.load/dump` + revérif ; gate `cd angular && npx ng build --configuration development`.
- Commits shimi, sans co-auteur Claude.
- **Aucune permission RBAC nouvelle** : réutiliser `treasury.session.view/operate/manage`.
- Base rouge trésorerie master : 4 tests (register/expense) — baseline, ne pas en ajouter.
- **Ne toucher AUCUN calcul de solde/écart/clôture** — M30 est purement additif.

## Review Focus

- **Demande sans écart** : `raise_explanation` sur une session `difference==0` doit lever. Test Task 1.
- **Réponse par un non-assigné** : un utilisateur ≠ caissier assigné (non admin) qui répond → doit lever. Test Task 1.
- **Transitions d'état** : respond hors PENDING_RESPONSE, decide hors RESPONDED → lèvent. Test Task 1.
- **Décision invalide** : decision ∉ {justified, not_justified} → lève. Test Task 1.
- **Fuite inter-société** : une demande/ session d'une autre société → 404 à l'API. Test Task 2.

---

## Task 1 : Backend — modèle + services

**Files:**
- Create: `backend/apps/treasury/models/explanation.py`
- Modify: `backend/apps/treasury/models/__init__.py` (export)
- Create: `backend/apps/treasury/services/explanation.py`
- Modify: `backend/apps/treasury/services/__init__.py` (export)
- Create: `backend/apps/treasury/tests/test_m30_explanation.py`
- Migration auto

**Interfaces:**
- Produces: `SessionExplanationRequest` (+ `Status`, `Decision`) ; `raise_explanation(session, *, note, user)`, `respond_explanation(req, *, note, user)`, `decide_explanation(req, *, decision, note, user)`.

- [ ] **Step 1 : Test rouge** — `test_m30_explanation.py`. Fixture : société + caisse + session clôturée AVEC écart (créer la session, poser `difference`=Decimal non nul, `assigned_to`=caissier, `status`=CLOSED directement en base pour le test — pas besoin de passer par close_session). Cas :
  - `raise_explanation` sur session `difference==0` → `ApplicationError` ; avec écart → demande créée, status `PENDING_RESPONSE`, `requested_by` = chef.
  - `respond_explanation` par un utilisateur non-assigné et non-admin → `ApplicationError` ; par le caissier assigné → `RESPONDED`, response_note/responded_by posés.
  - `respond_explanation` sur une demande déjà `RESPONDED` → `ApplicationError`.
  - `decide_explanation` avant réponse → `ApplicationError` ; après → `DECIDED`, decision=`justified`, note posée.
  - `decide_explanation` avec decision invalide → `ApplicationError`.

```python
def _session_with_ecart(company, admin, caissier, diff="500"):
    from apps.treasury.models import CashRegister, CashSession
    from apps.treasury.services.services import create_cash_register
    from decimal import Decimal
    reg = create_cash_register(company=company, name="P", kind=CashRegister.Kind.PRINCIPALE,
                               manager_ids=[admin.id], created_by=admin)
    return CashSession.objects.create(company=company, cash_register=reg, assigned_to=caissier,
        status=CashSession.Status.CLOSED, difference=Decimal(diff), opened_by=admin, closed_by=admin,
        created_by=admin)
```
(créer `caissier` via `users.services.user_services.create_user(is_institution_admin=False, …)` ou `User.objects.create(company=…, is_institution_admin=False)`.)

- [ ] **Step 2 : rouge** `../env/bin/python -m pytest apps/treasury/tests/test_m30_explanation.py -q --create-db`

- [ ] **Step 3 : Modèle** `explanation.py` (cf. spec §1) : `SessionExplanationRequest(BaseModel)` avec `Status`, `Decision`, champs demande/réponse/décision. Export dans `models/__init__.py`.

- [ ] **Step 4 : Migration** `makemigrations treasury` (CreateModel, pas de RunPython).

- [ ] **Step 5 : Services** `explanation.py` :

```python
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.treasury.models import SessionExplanationRequest

def _is_admin(u):
    return bool(getattr(u, "is_superuser", False) or getattr(u, "is_institution_admin", False))

@transaction.atomic
def raise_explanation(session, *, note, user):
    if session.difference in (None, 0):
        raise ApplicationError(_("Aucun écart sur cette session : pas de demande d'explication."))
    if not (note or "").strip():
        raise ApplicationError(_("La demande doit préciser un motif."))
    return SessionExplanationRequest.objects.create(
        company=session.company, cash_session=session,
        request_note=note, requested_by=user, created_by=user)

@transaction.atomic
def respond_explanation(req, *, note, user):
    if req.status != SessionExplanationRequest.Status.PENDING_RESPONSE:
        raise ApplicationError(_("Cette demande n'attend plus de réponse."))
    if not (_is_admin(user) or req.cash_session.assigned_to_id == getattr(user, "id", None)):
        raise ApplicationError(_("Seul le caissier assigné peut répondre à cette demande."))
    if not (note or "").strip():
        raise ApplicationError(_("La réponse ne peut pas être vide."))
    req.response_note = note; req.responded_by = user; req.responded_at = timezone.now()
    req.status = SessionExplanationRequest.Status.RESPONDED
    req.updated_by = user; req.save()
    return req

@transaction.atomic
def decide_explanation(req, *, decision, note, user):
    if req.status != SessionExplanationRequest.Status.RESPONDED:
        raise ApplicationError(_("La décision n'est possible qu'après réponse du caissier."))
    if decision not in (SessionExplanationRequest.Decision.JUSTIFIED,
                        SessionExplanationRequest.Decision.NOT_JUSTIFIED):
        raise ApplicationError(_("Décision invalide."))
    req.decision = decision; req.decision_note = note or ""; req.decided_by = user
    req.decided_at = timezone.now(); req.status = SessionExplanationRequest.Status.DECIDED
    req.updated_by = user; req.save()
    return req
```
Export les 3 dans `services/__init__.py`.

- [ ] **Step 6 : vert + non-régression + check**
Run: `../env/bin/python -m pytest apps/treasury/tests/test_m30_explanation.py -q --create-db` → PASS
Run: `../env/bin/python -m pytest apps/treasury -q --reuse-db` → seuls les 4 rouges de base
Run: `makemigrations --check --dry-run` → No changes detected

- [ ] **Step 7 : Commit** `git commit -m "feat(treasury): session explanation request model + services (M30)"`

---

## Task 2 : Backend — sérialiseur + endpoints

**Files:**
- Modify: `backend/apps/treasury/serializers.py` (`SessionExplanationRequestSerializer`)
- Modify: `backend/apps/treasury/views.py` (liste/raise, respond, decide)
- Modify: `backend/apps/treasury/urls.py`
- Create: `backend/apps/treasury/tests/test_m30_api.py`

**Interfaces:**
- Consumes: services Task 1.
- Produces: `GET/POST /treasury/sessions/<uuid:session_id>/explanations/`, `POST /treasury/explanations/<uuid:pk>/respond/`, `POST /treasury/explanations/<uuid:pk>/decide/`.

- [ ] **Step 1 : Test rouge** `test_m30_api.py` (APIClient force_authenticate) : chef crée une demande (201), caissier assigné répond (200), chef décide (200) ; une session d'une autre société → 404 au POST. Réponses enveloppées `{data:…}` (helper `_d`).

- [ ] **Step 2 : rouge.**

- [ ] **Step 3 : Serializer** `SessionExplanationRequestSerializer` (ModelSerializer) : champs cf. spec §4 avec `status_display`/`decision_display` + `requested_by_name`/`responded_by_name`/`decided_by_name` (SerializerMethodField ou source `.get_full_name`).

- [ ] **Step 4 : Vues** (pattern treasury) :
  - `SessionExplanationListView` : `GET` (liste par session, perm `treasury.session.view`) + `POST` raise (perm `treasury.session.manage`) sous `sessions/<session_id>/explanations/` ; résout la session scoping société/agence (helper `get_session`), 404 sinon ; `raise_explanation`.
  - `ExplanationRespondView` : `POST explanations/<pk>/respond/`, perm `treasury.session.operate` ; récupère la demande scoping société, 404 sinon ; `respond_explanation` (la garde caissier est dans le service).
  - `ExplanationDecideView` : `POST explanations/<pk>/decide/`, perm `treasury.session.manage` ; `decide_explanation(decision=request.data["decision"], note=request.data.get("decision_note",""))`.
  - Erreurs `ApplicationError` → `error_response(str(e))`.

- [ ] **Step 5 : URLs** (treasury/urls.py) :
```python
    path("sessions/<uuid:session_id>/explanations/", views.SessionExplanationListView.as_view()),
    path("explanations/<uuid:pk>/respond/", views.ExplanationRespondView.as_view()),
    path("explanations/<uuid:pk>/decide/", views.ExplanationDecideView.as_view()),
```

- [ ] **Step 6 : vert + non-régression + check.**

- [ ] **Step 7 : Commit** `git commit -m "feat(treasury): explanation request endpoints + serializer (M30)"`

---

## Task 3 : Frontend — fil d'explication sur la session

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (endpoints)
- Create: `angular/src/_api/services/treasury/explanation.service.ts`
- Modify: `angular/src/_api/pages/treasury/sessions/sessions.component.{ts,html}` (actions + fil + modales)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

**Interfaces:**
- Consumes: endpoints Task 2.

- [ ] **Step 1 : Endpoints** `api.config.ts` : `sessionExplanations: (sid) => \`${TRZ}/sessions/${sid}/explanations/\``, `explanationRespond: (id) => …/respond/`, `explanationDecide: (id) => …/decide/`.
- [ ] **Step 2 : Service** `explanation.service.ts` : `list(sessionId)`, `raise(sessionId, {request_note})`, `respond(id, {response_note})`, `decide(id, {decision, decision_note})` (map `r.data ?? r`).
- [ ] **Step 3 : Composant sessions** : sur une session clôturée avec écart (`difference` ≠ 0) :
  - bouton **« Demander une explication »** (`*hasPermission="'treasury.session.manage'"`) → modale note → `raise` → recharger le fil.
  - bouton **« Répondre »** sur les demandes `pending_response` → modale réponse → `respond`.
  - bouton **« Décider »** sur les demandes `responded` (`*hasPermission="'treasury.session.manage'"`) → modale (radio Justifié/Non justifié + note) → `decide`.
  - **fil** : liste des demandes avec statut (badge), note/demandeur/date, réponse/caissier/date, décision/chef/date.
- [ ] **Step 4 : i18n** `treasury.explanation.*` (title, ask, respond, decide, justified, not_justified, f_note, status_*…) ×4.
- [ ] **Step 5 : Build** `npx ng build --configuration development` → complete.
- [ ] **Step 6 : Commit** `git commit -m "feat(treasury): demandes d'explication d'écart (frontend) (M30)"`

---

## Notes d'implémentation

- M30 ne modifie NI le solde, NI l'écart, NI la clôture : purement additif.
- La garde « caissier assigné » est dans le service (message clair) ; l'endpoint respond
  utilise `treasury.session.operate` pour laisser passer le guichetier.
- Pour les tests, construire la session clôturée avec écart directement en base
  (`CashSession.objects.create(status=CLOSED, difference=…)`) — inutile de passer par
  `close_session`.
- Réponses API enveloppées `{success,data}` : déballer `data` dans les tests et le service.
