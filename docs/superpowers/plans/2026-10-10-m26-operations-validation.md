# M26 — Opérations, validation & frais de route — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Les opérations manuelles (dépenses générales, recettes diverses, frais de route) sont enregistrées **en attente** sans impacter solde ni comptabilité, puis **validées** (frais de route : admin) ; types d'opération configurables dépense/recette.

**Architecture:** `Transaction.status` (validated|pending|invalidated, défaut validated). `create_transaction(status=…)` : validated = applique solde+compta immédiatement (ventes, inchangé) ; pending = aucune écriture. Services validate/invalidate/modify. Agrégations de solde filtrent `validated`. Entité `OperationType` (sens dépense/recette).

**Tech Stack:** Django + DRF, pytest, Angular standalone + Transloco.

**Spec:** `docs/superpowers/specs/2026-10-10-m26-operations-validation-design.md`

## Global Constraints

- Tests : `cd backend && ../env/bin/python -m pytest <chemin> -q` (`--create-db` après schéma, sinon `--reuse-db`).
- `makemigrations --check --dry-run` = « No changes detected » avant commit backend.
- Frontend i18n via `python json.load/dump` + revérif ; gate `cd angular && npx ng build --configuration development`.
- Commits shimi, sans co-auteur Claude.
- **Base rouge master : 4 tests trésorerie (register/expense) déjà rouges** — baseline, pas une régression.
- **Décision clé** : seules les opérations MANUELLES deviennent PENDING ; ventes/remboursements restent VALIDATED immédiats (défaut).

## Review Focus

- **PENDING impacte le solde/compta** : si une opération en attente modifie `current_balance`, `principale_available_cash` ou poste une écriture → bug. Test Task 1.
- **Agrégations comptent le PENDING** : tableau de bord / `principale_available_cash` incluant des PENDING → faux soldes. Test Task 1.
- **invalidate n'extourne pas** : invalider une opération validée sans restaurer le solde / annuler l'écriture → bug. Test Task 2.
- **frais de route validable par non-admin** : la validation d'un frais de route doit exiger admin. Test Task 2.
- **vente devenue PENDING** : une vente ticket/colis ne doit JAMAIS être PENDING (non-régression). Test Task 3.

---

## Task 1 : `Transaction.status` + portillon solde/compta + filtres d'agrégation

**Files:**
- Modify: `backend/apps/treasury/models/transaction.py` (Status + validated_by/at)
- Modify: `backend/apps/treasury/services/services.py` (`create_transaction` status param ; gate `_apply_transaction_balance`/`post_movement`)
- Modify: `backend/apps/treasury/services/expense_shared.py` (`principale_available_cash` filtre validated)
- Modify: `backend/apps/treasury/selectors/selectors.py` (agrégats dashboard filtrent validated)
- Modify: `backend/apps/treasury/serializers.py` (`TransactionReadSerializer` expose `status`, `status_display`)
- Create: `backend/apps/treasury/tests/test_m26_status_gating.py`
- Migration auto

**Interfaces:**
- Produces: `Transaction.Status` (VALIDATED/PENDING/INVALIDATED) ; `create_transaction(..., status=Transaction.Status.VALIDATED)` ; `_apply_transaction_balance`/`post_movement` sautés si PENDING.

- [ ] **Step 1 : Test rouge** — `test_m26_status_gating.py` :

```python
import pytest
from decimal import Decimal
from apps.authentication.models import User


def _ctx(email):
    from apps.system_config.services import create_company
    from apps.treasury.models import CashRegister
    from apps.treasury.services.services import create_cash_register, open_session
    company, _ = create_company(name="M26", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    reg = create_cash_register(company=company, name="P", kind=CashRegister.Kind.PRINCIPALE,
                               manager_ids=[admin.id], created_by=admin)
    sess = open_session(company=company, cash_register=reg, opening_balance=Decimal("10000"), created_by=admin)
    return company, admin, reg, sess


@pytest.mark.django_db
def test_pending_does_not_touch_balance_or_accounting():
    from apps.treasury.models import Transaction
    from apps.treasury.services.services import create_transaction
    from apps.treasury.services.expense_shared import principale_available_cash
    company, admin, reg, sess = _ctx("m26g1@x.com")
    reg.refresh_from_db(); before = reg.current_balance
    avail_before = principale_available_cash(sess)
    txn = create_transaction(company=company, transaction_type=Transaction.Type.EXPENSE,
                             category=Transaction.Category.GENERAL_EXPENSE, account_type=Transaction.AccountType.CASH,
                             cash_session=sess, amount=Decimal("3000"), payment_mode="cash",
                             status=Transaction.Status.PENDING, created_by=admin)
    reg.refresh_from_db()
    assert txn.status == Transaction.Status.PENDING
    assert reg.current_balance == before                 # solde inchangé
    assert txn.journal_entry_id is None                  # pas d'écriture
    assert principale_available_cash(sess) == avail_before


@pytest.mark.django_db
def test_validated_default_applies_immediately():
    from apps.treasury.models import Transaction
    from apps.treasury.services.services import create_transaction
    company, admin, reg, sess = _ctx("m26g2@x.com")
    reg.refresh_from_db(); before = reg.current_balance
    create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                       category=Transaction.Category.OTHER_INCOME, account_type=Transaction.AccountType.CASH,
                       cash_session=sess, amount=Decimal("2000"), payment_mode="cash", created_by=admin)
    reg.refresh_from_db()
    assert reg.current_balance == before + Decimal("2000")   # défaut VALIDATED = immédiat
```

- [ ] **Step 2 : rouge** `../env/bin/python -m pytest apps/treasury/tests/test_m26_status_gating.py -q --create-db`

- [ ] **Step 3 : Modèle** — `transaction.py` : ajouter
```python
class Status(models.TextChoices):
    VALIDATED   = "validated",   _("Validée")
    PENDING     = "pending",     _("En attente")
    INVALIDATED = "invalidated", _("Invalidée")
status       = models.CharField(_("statut"), max_length=12, choices=Status.choices, default=Status.VALIDATED)
validated_by = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("validée par"), null=True, blank=True,
                                 on_delete=models.SET_NULL, related_name="+")
validated_at = models.DateTimeField(_("validée le"), null=True, blank=True)
```
(vérifier l'import `settings`.)

- [ ] **Step 4 : Migration** `makemigrations treasury` (AddField status default validated + validated_by/at ; pas de RunPython — le défaut couvre l'existant).

- [ ] **Step 5 : `create_transaction`** (services.py ~321) — ajouter `status=Transaction.Status.VALIDATED` à la signature ; passer `status=status` au `Transaction.objects.create(...)` ; puis **conditionner** l'application :
```python
    if status == Transaction.Status.VALIDATED:
        _apply_transaction_balance(txn, sign=+1)
        from apps.treasury.services.accounting_bridge import TreasuryAccountingBridge
        entry = TreasuryAccountingBridge.post_movement(txn)
        if entry:
            txn.journal_entry = entry
            txn.save(update_fields=["journal_entry"])
    return txn
```
(déplacer le bloc solde+compta existant sous ce `if`.)

- [ ] **Step 6 : `principale_available_cash`** (expense_shared.py) — filtrer `status=VALIDATED` sur les sommes income/expense :
```python
income = (session.transactions.filter(transaction_type=Transaction.Type.INCOME,
          status=Transaction.Status.VALIDATED, is_deleted=False).aggregate(t=Sum("amount"))["t"] or Decimal(0))
expense = (session.transactions.filter(transaction_type=Transaction.Type.EXPENSE,
          status=Transaction.Status.VALIDATED, is_deleted=False).aggregate(t=Sum("amount"))["t"] or Decimal(0))
```

- [ ] **Step 7 : Dashboard agrégats** (selectors.py ~197-230) — ajouter `status=Transaction.Status.VALIDATED` aux filtres today_income/today_expense et aux séries income/expense.

- [ ] **Step 8 : Serializer** — `TransactionReadSerializer` : ajouter `status`, `status_display` (`get_status_display`).

- [ ] **Step 9 : vert + non-régression + check**
Run: `../env/bin/python -m pytest apps/treasury/tests/test_m26_status_gating.py -q --create-db` → PASS
Run: `../env/bin/python -m pytest apps/treasury -q --reuse-db` → seuls les 4 rouges de base (les ventes/dépenses existantes utilisent le défaut VALIDATED → inchangées)
Run: `makemigrations --check --dry-run` → No changes detected

- [ ] **Step 10 : Commit** `git commit -m "feat(treasury): Transaction.status — validation gates balance/accounting (M26)"`

---

## Task 2 : Services de validation + permission + endpoints

**Files:**
- Create: `backend/apps/treasury/services/operation_validation.py`
- Modify: `backend/apps/treasury/services/__init__.py` (exports)
- Modify: `backend/apps/treasury/views.py` (3 vues : validate / invalidate / modify + liste opérations)
- Modify: `backend/apps/treasury/urls.py`
- Create: `backend/apps/admin_rbac/migrations/0024_operation_validate_permission_seed.py` (permission `treasury.operation.validate`, UUID déterministe uuid5)
- Create: `backend/apps/treasury/tests/test_m26_validation.py`

**Interfaces:**
- Consumes: `Transaction.Status`, `create_transaction(status=…)` (Task 1).
- Produces: `validate_operation(txn, *, user)`, `invalidate_operation(txn, *, user)`, `modify_operation(txn, *, amount, user)` ; endpoints `POST /treasury/operations/<id>/{validate,invalidate,modify}/`, `GET /treasury/operations/?status=pending`.

- [ ] **Step 1 : Test rouge** — `test_m26_validation.py` (utilise le helper `_ctx` ; crée une opération PENDING via `create_transaction(status=PENDING)`) :

```python
@pytest.mark.django_db
def test_validate_applies_balance_and_posts():
    from apps.treasury.models import Transaction
    from apps.treasury.services.services import create_transaction
    from apps.treasury.services.operation_validation import validate_operation
    company, admin, reg, sess = _ctx("m26v1@x.com")
    reg.refresh_from_db(); before = reg.current_balance
    txn = create_transaction(company=company, transaction_type=Transaction.Type.EXPENSE,
        category=Transaction.Category.GENERAL_EXPENSE, account_type=Transaction.AccountType.CASH,
        cash_session=sess, amount=Decimal("3000"), payment_mode="cash",
        status=Transaction.Status.PENDING, created_by=admin)
    validate_operation(txn, user=admin)
    txn.refresh_from_db(); reg.refresh_from_db()
    assert txn.status == Transaction.Status.VALIDATED
    assert reg.current_balance == before - Decimal("3000")

@pytest.mark.django_db
def test_invalidate_reverses_validated():
    from apps.treasury.models import Transaction
    from apps.treasury.services.services import create_transaction
    from apps.treasury.services.operation_validation import validate_operation, invalidate_operation
    company, admin, reg, sess = _ctx("m26v2@x.com")
    txn = create_transaction(company=company, transaction_type=Transaction.Type.EXPENSE,
        category=Transaction.Category.GENERAL_EXPENSE, account_type=Transaction.AccountType.CASH,
        cash_session=sess, amount=Decimal("3000"), payment_mode="cash",
        status=Transaction.Status.PENDING, created_by=admin)
    validate_operation(txn, user=admin); reg.refresh_from_db(); after_val = reg.current_balance
    invalidate_operation(txn, user=admin); reg.refresh_from_db()
    txn.refresh_from_db()
    assert txn.status == Transaction.Status.INVALIDATED
    assert reg.current_balance == after_val + Decimal("3000")   # extourné

@pytest.mark.django_db
def test_modify_pending_amount():
    from apps.treasury.models import Transaction
    from apps.treasury.services.services import create_transaction
    from apps.treasury.services.operation_validation import modify_operation
    from apps.core.exceptions import ApplicationError
    company, admin, reg, sess = _ctx("m26v3@x.com")
    txn = create_transaction(company=company, transaction_type=Transaction.Type.EXPENSE,
        category=Transaction.Category.GENERAL_EXPENSE, account_type=Transaction.AccountType.CASH,
        cash_session=sess, amount=Decimal("3000"), payment_mode="cash",
        status=Transaction.Status.PENDING, created_by=admin)
    modify_operation(txn, amount=Decimal("4500"), user=admin)
    txn.refresh_from_db(); assert txn.amount == Decimal("4500")
    from apps.treasury.services.operation_validation import validate_operation
    validate_operation(txn, user=admin)
    with pytest.raises(ApplicationError):      # plus modifiable une fois validée
        modify_operation(txn, amount=Decimal("1"), user=admin)

@pytest.mark.django_db
def test_frais_de_route_validation_admin_only():
    from apps.treasury.models import Transaction
    from apps.treasury.services.services import create_transaction
    from apps.treasury.services.operation_validation import validate_operation
    from apps.core.exceptions import ApplicationError
    from apps.voyages_trips.models import Trip, TripExpense  # frais de route lié voyage_expense
    company, admin, reg, sess = _ctx("m26v4@x.com")
    # non-admin
    guichetier = _make_non_admin_user(company)   # helper : user sans is_institution_admin
    txn = create_transaction(company=company, transaction_type=Transaction.Type.EXPENSE,
        category=Transaction.Category.VOYAGE_EXPENSE, account_type=Transaction.AccountType.CASH,
        cash_session=sess, amount=Decimal("1000"), payment_mode="cash",
        status=Transaction.Status.PENDING, created_by=admin)
    # marquer comme frais de route : lier voyage_expense (créer un TripExpense minimal) — ou
    # détecter via category=VOYAGE_EXPENSE. L'implémenteur choisit le marqueur et le documente.
    with pytest.raises(ApplicationError):
        validate_operation(txn, user=guichetier)
    validate_operation(txn, user=admin)  # admin OK
    txn.refresh_from_db(); assert txn.status == Transaction.Status.VALIDATED
```
(Prévoir `_make_non_admin_user` dans le fichier de test. **Ruling implémenteur** : marqueur « frais de route » = `category == VOYAGE_EXPENSE` **ou** `voyage_expense_id is not None` — choisir et documenter dans le ledger.)

- [ ] **Step 2 : rouge** `../env/bin/python -m pytest apps/treasury/tests/test_m26_validation.py -q --create-db`

- [ ] **Step 3 : Services** `operation_validation.py` :

```python
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.treasury.models import Transaction


def _is_admin(user):
    return bool(getattr(user, "is_superuser", False) or getattr(user, "is_institution_admin", False))


def _is_frais_de_route(txn):
    return txn.category == Transaction.Category.VOYAGE_EXPENSE or txn.voyage_expense_id is not None


@transaction.atomic
def validate_operation(txn, *, user):
    if txn.status != Transaction.Status.PENDING:
        raise ApplicationError(_("Seule une opération en attente peut être validée."))
    if _is_frais_de_route(txn) and not _is_admin(user):
        raise ApplicationError(_("La validation des frais de route est réservée à l'administrateur."))
    # Contrôle solde pour une dépense espèces (au moment de la validation)
    if (txn.transaction_type == Transaction.Type.EXPENSE
            and txn.account_type == Transaction.AccountType.CASH and txn.cash_session_id):
        from apps.treasury.services.expense_shared import principale_available_cash
        if txn.amount > principale_available_cash(txn.cash_session):
            raise ApplicationError(_("Solde insuffisant pour valider ce décaissement."))
    from apps.treasury.services.services import _apply_transaction_balance
    from apps.treasury.services.accounting_bridge import TreasuryAccountingBridge
    _apply_transaction_balance(txn, sign=+1)
    entry = TreasuryAccountingBridge.post_movement(txn)
    txn.status = Transaction.Status.VALIDATED
    txn.validated_by = user
    txn.validated_at = timezone.now()
    txn.journal_entry = entry or None
    txn.save(update_fields=["status", "validated_by", "validated_at", "journal_entry"])
    return txn


@transaction.atomic
def invalidate_operation(txn, *, user):
    if txn.status == Transaction.Status.INVALIDATED:
        return txn
    if txn.status == Transaction.Status.VALIDATED:
        from apps.treasury.services.services import _apply_transaction_balance
        if txn.journal_entry_id:
            from apps.accounting.services import AccountingService
            try:
                if txn.journal_entry.state == "posted":
                    AccountingService.cancel_entry(txn.journal_entry_id, reason="Invalidation opération")
            except Exception:
                pass
        _apply_transaction_balance(txn, sign=-1)
    txn.status = Transaction.Status.INVALIDATED
    txn.updated_by = user
    txn.save(update_fields=["status", "updated_by", "updated_at"])
    return txn


@transaction.atomic
def modify_operation(txn, *, amount, user):
    if txn.status != Transaction.Status.PENDING:
        raise ApplicationError(_("Seule une opération en attente peut être modifiée."))
    if amount is None or amount <= 0:
        raise ApplicationError(_("Le montant doit être supérieur à zéro."))
    txn.amount = amount
    txn.updated_by = user
    txn.save(update_fields=["amount", "updated_by", "updated_at"])
    return txn
```
Exporter les 3 dans `services/__init__.py`.

- [ ] **Step 4 : Permission RBAC** — migration `admin_rbac/0024_operation_validate_permission_seed.py` (calquée sur 0007 MAIS UUID déterministe, cf. 0023_deterministic_rbac_uuids) :
```python
import uuid
from django.db import migrations
RBAC_NS = uuid.UUID("5b3e0b6e-6c2a-5f8a-9e1d-2a7c9f0b1a55")
PERMS = [("treasury.operation.validate", "Valider les opérations de trésorerie", "update")]
def seed(apps, se):
    AppModule = apps.get_model("admin_rbac", "AppModule"); Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="treasury", defaults={"name": "Trésorerie"})
    for code, name, cat in PERMS:
        Permission.objects.update_or_create(id=uuid.uuid5(RBAC_NS, code),
            defaults={"code": code, "name": name, "module": module, "category": cat})
def unseed(apps, se):
    apps.get_model("admin_rbac", "Permission").objects.filter(code__in=[p[0] for p in PERMS]).delete()
class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0023_deterministic_rbac_uuids")]
    operations = [migrations.RunPython(seed, unseed)]
```
(Vérifier le numéro de dernière migration admin_rbac au moment de l'implémentation ; dépendre de la dernière.)

- [ ] **Step 5 : Endpoints** — `views.py` : `OperationValidateView`, `OperationInvalidateView`, `OperationModifyView` (`POST /treasury/operations/<uuid:pk>/{validate,invalidate,modify}/`), `permission_map = {"POST": "treasury.operation.validate"}` ; `OperationListView` (`GET /treasury/operations/?status=pending`) renvoie les opérations manuelles (filtrables par statut), permission `treasury.operation.validate` ou view. URLs ajoutées.

- [ ] **Step 6 : vert + non-régression + check** (comme Task 1, cible `test_m26_validation.py`).

- [ ] **Step 7 : Commit** `git commit -m "feat(treasury): operation validate/invalidate/modify + RBAC (M26)"`

---

## Task 3 : Points d'entrée manuels → PENDING (+ MAJ tests existants)

**Files:**
- Modify: `backend/apps/treasury/services/general_expense_sales.py` (`record_general_expense` → `status=PENDING`)
- Modify: `backend/apps/treasury/services/trip_expense_sales.py` (`record_trip_expense` → `status=PENDING`)
- Modify: `backend/apps/treasury/services/other_income.py` (`record_other_income` + `record_voyage_income` → `status=PENDING`)
- Modify: tests existants devenus obsolètes (voir Review Focus) — adapter au modèle en attente→validée
- Create: `backend/apps/treasury/tests/test_m26_manual_pending.py`

**Interfaces:**
- Consumes: `create_transaction(status=…)` (Task 1), `validate_operation` (Task 2).

- [ ] **Step 1 : Test rouge** — `test_m26_manual_pending.py` : enregistrer une dépense générale via `disburse_general_expense` → la transaction créée est `PENDING`, `current_balance` inchangé ; après `validate_operation` → solde réduit. Idem une vente (`booking_sales`/`record_voyage_income`… ) : **une vente reste VALIDATED**. (Écrire les assertions.)

- [ ] **Step 2 : rouge.**

- [ ] **Step 3 : Implémentation** — dans `record_general_expense`, `record_trip_expense`, `record_other_income`, `record_voyage_income` : ajouter `status=Transaction.Status.PENDING` à l'appel `create_transaction(...)`. **Ne pas** toucher `booking_sales`/`consignment_sales`/`refund*` (restent VALIDATED par défaut).

- [ ] **Step 4 : Adapter les tests existants** — les tests qui supposaient un impact solde immédiat au décaissement d'une dépense (ex. `test_expense_principale.py`, `test_general_expense_services.py`, `test_incomes.py` « autre recette ») : soit valider explicitement après enregistrement, soit asserter le nouveau comportement en attente. Documenter chaque adaptation en ledger (`Ruling:`). **Ne pas** affaiblir une assertion de vente.

- [ ] **Step 5 : vert + non-régression + check** — `../env/bin/python -m pytest apps/treasury -q --reuse-db` : les 4 rouges de base + éventuels tests adaptés verts. `makemigrations --check` clean.

- [ ] **Step 6 : Commit** `git commit -m "feat(treasury): manual operations recorded pending until validated (M26)"`

---

## Task 4 : `OperationType` config entity (backend + page)

**Files:**
- Modify: `backend/apps/treasury/models/__init__.py` + nouveau `backend/apps/treasury/models/operation_type.py`
- Modify: `backend/apps/treasury/serializers.py` (`OperationTypeSerializer`)
- Modify: `backend/apps/treasury/views.py` (`OperationTypeListView`/`DetailView`, perm `treasury.config.view/manage`)
- Modify: `backend/apps/treasury/urls.py` (2 routes `operation-types/`)
- Modify: `backend/apps/treasury/services/seed.py` (+ appel bootstrap) — seed quelques types dépense/recette
- Create: `backend/apps/treasury/tests/test_m26_operation_types.py`
- Frontend: service + page config (mirroir value-types M28) + api.config + route + menu + i18n
- Migration auto

**Interfaces:**
- Produces: `OperationType(company, code, label, sens, is_active)` ; endpoints `GET/POST /treasury/operation-types/`, `GET/PATCH/DELETE /treasury/operation-types/<id>/` ; `seed_operation_types(company, created_by=None) -> int`.

- [ ] **Step 1 : Test rouge** (CRUD + seed idempotent + sens, calqué sur `test_m28_value_types.py` — réponses enveloppées `{data:…}`).
- [ ] **Step 2 : rouge.**
- [ ] **Step 3 : Modèle** `OperationType` (BaseModel company-scoped : code, label, sens∈{depense,recette}, is_active, display_order) + export + migration.
- [ ] **Step 4 : Serializer + vues + URLs** (calqués sur `CashValueType` M28).
- [ ] **Step 5 : Seed** `seed_operation_types` (ex. dépense : CARBURANT, SALAIRE ; recette : DIVERS) + appel bootstrap à côté de `seed_cash_value_types`.
- [ ] **Step 6 : vert backend + check migration.**
- [ ] **Step 7 : Frontend** — service `operation-type.service.ts` + page `operation-types.component.{ts,html}` (mirroir value-types) + `api.config` + route + menu + i18n ×4. `ng build`.
- [ ] **Step 8 : Commit** `git commit -m "feat(treasury): OperationType config entity + page (M26)"`

---

## Task 5 : Frontend — validation des opérations + frais de route

**Files:**
- Create: page « Validation des opérations » (service + composant) : liste des opérations (filtre statut) + actions Valider/Invalider/Modifier + badges
- Create: page « Frais de route » (Trésorerie) : liste TripExpense + formulaire (voyage, type, montant, caisse) → opération en attente
- Modify: `api.config.ts` (endpoints operations + frais de route) + routes + menu + i18n ×4
- Modify: badges de statut sur les listes dépenses/recettes existantes (si pertinent)

**Interfaces:**
- Consumes: endpoints operations (Task 2), TripExpense (existant), OperationType (Task 4).

- [ ] **Step 1 : Service operations** — list(status) / validate(id) / invalidate(id) / modify(id, amount).
- [ ] **Step 2 : Page validation** — tableau opérations (date, type, montant, statut badge, caisse) ; boutons Valider (masqué non-admin pour frais de route), Invalider, Modifier (modale montant) ; `*hasPermission="'treasury.operation.validate'"`.
- [ ] **Step 3 : Page frais de route** — liste + formulaire (voyage autocomplete, type, montant, caisse) ; enregistrement → opération en attente.
- [ ] **Step 4 : Routes + menu + i18n** (4 locales).
- [ ] **Step 5 : Build** `npx ng build --configuration development` → complete.
- [ ] **Step 6 : Commit** `git commit -m "feat(treasury): validation des opérations + frais de route (frontend) (M26)"`

---

## Notes d'implémentation

- **Invariant non négociable** : une opération PENDING n'impacte NI `current_balance`, NI `principale_available_cash`, NI la compta. Tout le reste est additif.
- Avant d'éditer `create_transaction`, relire la fonction entière (services.py:321+) ; déplacer le bloc solde+compta existant sous le `if status == VALIDATED`.
- Les ventes (`booking_sales`, `consignment_sales`) appellent `create_transaction` **sans** `status` → défaut VALIDATED → inchangées. Ne pas les toucher.
- `_make_non_admin_user` : créer un `User` de la société sans `is_institution_admin`/`is_superuser` (vérifier le modèle User pour le flag exact).
- Marqueur frais de route : `category == VOYAGE_EXPENSE or voyage_expense_id is not None` (documenter le choix).
