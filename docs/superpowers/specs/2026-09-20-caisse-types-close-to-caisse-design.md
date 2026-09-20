# Trésorerie D1 — Types de caisse + clôture-vers-caisse

**Date:** 2026-09-20
**Status:** Design — pending user review
**Sub-plan:** D1 of the Trésorerie rework (D). Followed by D2 (dépenses depuis la principale + bon de dépense) and D3 (recette voyage + bordereau session + gating des ventes).
**Modules:** `treasury` (backend) + Angular treasury frontend.

## Contexte

Le système de caisses/sessions existe déjà et est riche : `CashRegister`, `CashSession`
(open/suspended/closed, `assigned_to` guichetier, `scheduled_start/end`, `opening_balance`
= fond de caisse, `closing_balance`, `difference` = écart), billetage, transferts
(`create_transfer`), `is_cash_manager`. On **étend en place**.

**Découverte clé :** `close_session` fixe déjà `reg.current_balance = closing_balance`
(le montant compté) à la clôture. Donc un transfert de `closing_balance` du guichet vers
la destination laisse le guichet à exactement **0F**.

D1 ajoute trois choses :
1. Un **type de caisse** (Caisse principale / Guichet).
2. La **clôture réservée au chef d'agence / gestionnaire** (le guichetier ne clôture plus).
3. La **clôture-vers-caisse** d'un guichet : le chef choisit une caisse de destination ;
   l'espèce comptée y est transférée ; le guichet finit à **0F**.

## Décisions (validées avec le demandeur)

- **Type des caisses existantes :** aucun type par défaut. `kind` est **nullable** ; les
  caisses existantes restent « sans type » jusqu'à ce qu'un admin le fixe. Les nouvelles
  caisses **exigent** un type à la création.
- **Destination de clôture :** **n'importe quelle caisse** de l'institution (principale ou
  autre guichet), différente du guichet clôturé.
- **Autorité de clôture :** le **chef d'agence = détenteur de `treasury.session.manage`**
  (les gestionnaires assignés de la caisse) fait tout le cycle de vie, y compris la clôture.
  Le **guichetier / opérateur** (`treasury.session.operate`) ne fait qu'**opérer** (vendre) :
  on retire sa possibilité de clôturer sa propre session (changement vs l'existant, où la
  clôture-billetage lui était permise).

## Backend

### Modèle
`CashRegister.kind` :
```python
class Kind(models.TextChoices):
    PRINCIPALE = "principale", _("Caisse principale")
    GUICHET    = "guichet",    _("Guichet")
kind = models.CharField(_("type de caisse"), max_length=12, choices=Kind.choices, null=True, blank=True)
```
Migration additive (nullable ; pas de valeur par défaut sur l'existant).

### Sérialiseurs / vues caisse
- Read : ajouter `kind` + `kind_display`.
- Write (create) : `kind` **requis** (`ChoiceField(choices=CashRegister.Kind.choices)`), un
  message clair si absent. Update : `kind` optionnel (modifiable).
- `create_cash_register(...)` gagne `kind=None` ; la vue POST exige `kind` (400 sinon).
  `update_cash_register` : ajouter `"kind"` à `allowed`.

### Autorité de clôture (vue + service)
- **`CloseSessionView`** : ajouter `permission_map = {"POST": "treasury.session.manage"}`
  (aligné sur Open/Suspend/Extend). Aujourd'hui la vue n'a pas de `permission_map` figée,
  ce qui laisse passer le guichetier ; on ferme cette porte.
- **`close_session`** — remplacer
   ```python
   if not (is_cash_manager(updated_by, session.cash_register)
           or session.assigned_to_id == getattr(updated_by, "id", None)):
   ```
   par
   ```python
   if not is_cash_manager(updated_by, session.cash_register):
       raise ApplicationError(_("Seul le chef d'agence (gestionnaire de la caisse) peut clôturer cette session."))
   ```
### `close_session` — clôture-vers-caisse (services.py)
1. **Nouveau paramètre :** `destination_cash_register_id=None`.
2. **Clôture-vers-caisse** (après la logique existante qui pose
   `reg.current_balance = closing_balance`, `status = CLOSED`, et sauvegarde) :
   ```python
   if session.cash_register.kind == CashRegister.Kind.GUICHET and closing_balance > 0:
       dest = CashRegister.objects.filter(company=session.company, id=destination_cash_register_id,
                                          is_deleted=False).exclude(id=session.cash_register_id).first()
       if not dest:
           raise ApplicationError(_("Choisissez une caisse de destination valide pour la clôture du guichet."))
       create_transfer(company=session.company, amount=closing_balance,
                       from_cash_register=session.cash_register, to_cash_register=dest,
                       description=f"Clôture guichet — session {session.id}", created_by=updated_by)
   ```
   `create_transfer` débite le guichet (dont `current_balance == closing_balance`) → **0F** —
   et crédite la destination. Tout se passe dans la transaction atomique de `close_session`.
   - Guichet avec `closing_balance == 0` : pas de transfert, destination non requise.
   - Caisse principale ou `kind` non défini : clôture normale, pas de destination.

### Vue / sérialiseur de clôture
Le endpoint de clôture de session accepte `destination_cash_register_id` (UUID, optionnel)
et le passe à `close_session`.

## Frontend

- **Page Caisses (`registers`)** : sélecteur **Type** (Caisse principale / Guichet) en
  création (requis) et édition ; colonne « Type » dans la liste.
- **Page Sessions** : dans la modale de clôture, si la caisse de la session est un **guichet**,
  afficher un sélecteur **« Caisse de destination »** (requis, liste des caisses de
  l'institution sauf le guichet), transmis à la clôture. Le bouton « Clôturer » n'est
  proposé qu'aux gestionnaires (le backend l'impose de toute façon).
- i18n `treasury.*` (type de caisse, options, destination) dans les 4 langues.

## Hors périmètre D1 (→ D2/D3)

- Dépenses uniquement depuis la caisse principale + bon de dépense → **D2**.
- Formulaire recette voyage, bordereau de session, gating des ventes billet/colis/bagage,
  « pas de vente après l'heure limite » → **D3**.

## Tests (pytest)

- Création caisse : `kind` requis (400 sans) ; `kind` persiste ; caisses existantes `kind=None`.
- Clôture d'un guichet : destination requise (si compté > 0) ; après clôture le
  `current_balance` du guichet == 0, la destination augmente du montant compté, un `Transfer`
  existe.
- Clôture d'une caisse principale : pas de destination requise, fonctionne.
- Un guichetier assigné **non** gestionnaire ne peut pas clôturer (`ApplicationError`).

## Fichiers touchés

**Backend :** `treasury/models/cash_register.py` (+migration), `treasury/serializers.py`
(caisse read/write + close), `treasury/services/services.py` (`create_cash_register`,
`update_cash_register`, `close_session`), `treasury/views.py` (create register requires kind ;
close accepts destination), tests.

**Frontend :** `pages/treasury/registers/registers.component.{ts,html}`,
`pages/treasury/sessions/sessions.component.{ts,html}`, `models/treasury.models.ts`,
`i18n/{fr,en,es,pt}.json`.
