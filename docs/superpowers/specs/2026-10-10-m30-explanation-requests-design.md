# M30 — Demandes d'explication d'écart — Design

**Date :** 2026-10-10 · **Module :** `apps/treasury` · **Référence cahier :** M30 (dictée 40)

## Intention

En cas d'**écart de session**, le **chef d'agence** émet une **demande d'explication**
au **caissier** (guichetier assigné), qui **répond dans l'application** ; le chef rend
ensuite une **décision**. Demande, réponse et décision sont **historisées** et rattachées
à la session.

## Décisions actées (brainstorm)

- Une demande ne peut être créée que sur une session **avec écart** (`difference ≠ 0`).
- **Répond** : le caissier **assigné** (`cash_session.assigned_to`) ; les admins contournent.
- **Décision** structurée : **Justifié / Non justifié** + note.

## État existant (réutilisé)

`CashSession` possède déjà `difference`, `justification_reason/note`, `assigned_to`
(caissier), `closed_by`, `ecart_status`. L'écart est calculé à la clôture (M28/existant).
Aucune logique monétaire n'est touchée par M30 — couche workflow uniquement.

## Architecture

### 1. Modèle `SessionExplanationRequest` (`apps/treasury/models/explanation.py`)

```python
class SessionExplanationRequest(BaseModel):
    class Status(models.TextChoices):
        PENDING_RESPONSE = "pending_response", _("En attente de réponse")
        RESPONDED        = "responded",        _("Répondu")
        DECIDED          = "decided",          _("Décidé")

    class Decision(models.TextChoices):
        JUSTIFIED     = "justified",     _("Justifié")
        NOT_JUSTIFIED = "not_justified", _("Non justifié")

    company      = FK(system_config.Company, CASCADE, related_name="explanation_requests")
    cash_session = FK(treasury.CashSession, CASCADE, related_name="explanation_requests")
    status       = CharField(choices=Status, default=PENDING_RESPONSE)
    # Demande
    request_note = CharField(max_length=500)
    requested_by = FK(User, SET_NULL, null)          # chef d'agence
    requested_at = DateTimeField(default=now)
    # Réponse
    response_note = CharField(max_length=500, blank)
    responded_by  = FK(User, SET_NULL, null, blank)  # caissier assigné
    responded_at  = DateTimeField(null, blank)
    # Décision
    decision      = CharField(choices=Decision, blank)
    decision_note = CharField(max_length=500, blank)
    decided_by    = FK(User, SET_NULL, null, blank)  # chef d'agence
    decided_at    = DateTimeField(null, blank)
```

`created_by`/`created_at`/`updated_*` via `BaseModel`. Ordering `-created_at`.

### 2. Services (`apps/treasury/services/explanation.py`)

```
raise_explanation(session, *, note, user)
    - exige session.difference not in (None, 0)  → sinon ApplicationError
    - garde agence (scoping existant) : la session doit être de l'agence du chef
    - crée la demande (status PENDING_RESPONSE, requested_by=user)
respond_explanation(req, *, note, user)
    - status doit être PENDING_RESPONSE
    - autorisé si user == session.assigned_to OU admin  → sinon ApplicationError
    - enregistre response_note/responded_by/responded_at, status RESPONDED
decide_explanation(req, *, decision, note, user)
    - status doit être RESPONDED (le chef décide après réponse)
    - decision ∈ {justified, not_justified}
    - enregistre decision/decision_note/decided_by/decided_at, status DECIDED
```

### 3. Endpoints (`urls.py` + `views.py`)

| Méthode / chemin | Permission |
|---|---|
| `GET  /treasury/sessions/<session_id>/explanations/` | `treasury.session.view` (ou operate/manage) |
| `POST /treasury/sessions/<session_id>/explanations/` (raise) | `treasury.session.manage` |
| `POST /treasury/explanations/<id>/respond/` | `treasury.session.operate` + garde caissier assigné (service) |
| `POST /treasury/explanations/<id>/decide/` | `treasury.session.manage` |
| `GET  /treasury/explanations/?status=pending_response` (liste, option) | `treasury.session.manage` ou operate |

Pattern vues : `permission_classes = [IsAuthenticated, HasModulePermission]` + `permission_map`
(comme les vues de session existantes). Scoping société/agence via helpers existants.
**Aucune nouvelle permission RBAC** (réutilise session.view/operate/manage).

### 4. Sérialiseurs

`SessionExplanationRequestSerializer` (lecture) : id, status (+display), request_note,
requested_by (nom), requested_at, response_note, responded_by (nom), responded_at,
decision (+display), decision_note, decided_by (nom), decided_at, created_at.
Le `CashSessionReadSerializer`/détail peut exposer `explanation_requests` (ou via l'endpoint liste).

### 5. Frontend (Angular — module Trésorerie, sessions)

- Sur une **session clôturée avec écart** : bouton **« Demander une explication »** (chef
  d'agence, `treasury.session.manage`) → modale note.
- Le caissier assigné voit les demandes **en attente de réponse** (sur la session ou une
  liste dédiée) → modale **Répondre**.
- Le chef voit les demandes **répondues** → modale **Décision** (Justifié / Non justifié + note).
- **Fil historisé** sur la session : demande → réponse → décision, avec auteurs et dates.
- Badges de statut. i18n fr/en/es/pt.

## Tests (backend)

1. **raise exige un écart** : session sans écart (`difference == 0`) → `raise_explanation` lève ;
   avec écart → demande créée (status PENDING_RESPONSE).
2. **respond réservé au caissier assigné** : un autre utilisateur → lève ; le caissier assigné
   (ou admin) → RESPONDED.
3. **respond exige PENDING_RESPONSE** : répondre deux fois → lève.
4. **decide après réponse** : décider avant réponse → lève ; après → DECIDED avec decision + note.
5. **decision valide** : decision hors {justified, not_justified} → lève.
6. **historique** : la session expose ses demandes avec demande/réponse/décision + auteurs/dates.

## Hors périmètre

- Aucune modification du calcul de l'écart, du solde, ou de la clôture (M29/M28/existant).
- Pas de notification push/email (réponse in-app uniquement) sauf demande ultérieure.
- Pas de ré-ouverture de session liée à la décision (la décision est un constat historisé).

## Points tranchés (rulings)

- Réutilise les permissions session existantes (view/operate/manage) — pas de nouvelle
  permission ni migration RBAC.
- Garde « caissier assigné » imposée au niveau **service** (message clair), pas seulement RBAC.
- Décision structurée (justified/not_justified) pour la reportabilité, + note libre.
