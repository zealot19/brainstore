# G-Trésorerie T1 — Pont comptable + RBAC — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Générer automatiquement les écritures comptables depuis les mouvements/transferts/clôtures de la Trésorerie, et poser le RBAC `treasury.*`, en étendant l'app `treasury` existante.

**Architecture:** Champs de liaison compta sur les modèles treasury ; modèle de mapping catégorie→compte seedé par société ; `TreasuryAccountingBridge` (non-bloquant) accroché dans le service layer ; RBAC via `HasModulePermission`.

**Tech Stack:** Django 5.1 + DRF, pytest.

**Spec:** `docs/superpowers/specs/2026-08-15-treasury-t1-pont-comptable-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche : `feature/treasury-t1` (déjà créée depuis `master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`.
- Pont **non-bloquant** : toute erreur du bridge est capturée → l'opération de caisse réussit, `journal_entry` reste vide.
- Vérif : `manage.py check`, `makemigrations --check --dry-run`, pytest.

**Rappels codebase (vérifiés) :**
- `AccountingService.create_entry(EntryRequest(company_id, journal_code, date, label, lines=[LineRequest(account_code, label="", debit=Decimal, credit=Decimal, partner_id=None)], reference="", entry_type="manual", source_model="", source_id=None)) -> JournalEntry` puis `AccountingService.post_entry(entry.id) -> JournalEntry`. Import : `from apps.accounting.services import AccountingService, EntryRequest, LineRequest`.
- `create_entry` résout le journal par `(company_id, journal_code)` et la période par la date ; lève `ApplicationError` si journal/période/compte introuvable → capturé par le bridge.
- A1 seede par société les journaux `CAISSE`, `BANQUE`, `OD` et les comptes 571/521/706/707/708/758/601/624/622/605/658/425.
- `treasury/services/services.py` : `create_transaction`, `create_transfer`, `close_session`, `delete_transaction` (points d'accroche). `_bootstrap_company` (dans `system_config/services/company_services.py`) appelle déjà `seed_accounting(...)`.
- `treasury/views.py` classes : `TreasuryStatsView`, `CashRegisterListView/DetailView`, `BankAccountListView/DetailView`, `CashSessionListView`, `OpenSessionView`, `CloseSessionView`, `CashSessionDetailView`, `TransactionListView`, `TransactionDetailView`, `TransferListView`, `TransferDetailView` — toutes en `permission_classes = [IsAuthenticated]`.
- `HasModulePermission` : `from apps.core.permissions import IsAuthenticated, HasModulePermission`.

---

### Task 1: Champs de liaison + modèle de mapping + seed

**Files:**
- Modify: `backend/apps/treasury/models/cash_register.py`, `bank_account.py`, `transaction.py`, `transfer.py`
- Create: `backend/apps/treasury/models/posting_rule.py`
- Modify: `backend/apps/treasury/models/__init__.py`
- Create: `backend/apps/treasury/services/seed.py`
- Modify: `backend/apps/treasury/services/__init__.py`, `backend/apps/system_config/services/company_services.py`
- Create: `backend/apps/treasury/management/__init__.py`, `backend/apps/treasury/management/commands/__init__.py`, `backend/apps/treasury/management/commands/seed_treasury_mapping.py`
- Test: `backend/apps/treasury/tests/test_mapping_seed.py`

**Interfaces:**
- Produces : `MovementAccountMapping` (fields `company`, `category`, `account`) ; `CashRegister.account/journal`, `BankAccount.account/journal`, `Transaction.journal_entry`, `Transfer.journal_entry` ; `seed_treasury_mapping(company) -> int`.

- [ ] **Step 1: Champs de liaison comptable**

Dans `cash_register.py`, ajouter (après `current_balance`) :
```python
    account = models.ForeignKey("accounting.Account", verbose_name=_("compte comptable"), null=True, blank=True,
                                on_delete=models.SET_NULL, related_name="+")
    journal = models.ForeignKey("accounting.Journal", verbose_name=_("journal"), null=True, blank=True,
                                on_delete=models.SET_NULL, related_name="+")
```
Idem dans `bank_account.py` (après `current_balance`) : mêmes deux champs `account` et `journal`.

Dans `transaction.py`, ajouter (après `parcel`) :
```python
    journal_entry = models.ForeignKey("accounting.JournalEntry", verbose_name=_("pièce comptable"),
                                      null=True, blank=True, on_delete=models.SET_NULL, related_name="+")
```
Idem dans `transfer.py` (après `completed_by`) : même champ `journal_entry`.

- [ ] **Step 2: Modèle de mapping**

`apps/treasury/models/posting_rule.py` :
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class MovementAccountMapping(BaseModel):
    """Correspondance catégorie de mouvement → compte de contrepartie OHADA (par société)."""
    company  = models.ForeignKey("system_config.Company", on_delete=models.CASCADE, related_name="movement_mappings")
    category = models.CharField(_("catégorie"), max_length=30)
    account  = models.ForeignKey("accounting.Account", on_delete=models.PROTECT, related_name="+")

    class Meta(BaseModel.Meta):
        verbose_name = _("correspondance comptable de mouvement")
        verbose_name_plural = _("correspondances comptables de mouvement")
        unique_together = [("company", "category")]

    def __str__(self):
        return f"{self.category} → {self.account.code}"
```

`apps/treasury/models/__init__.py` — ajouter `from .posting_rule import MovementAccountMapping` et l'ajouter à `__all__`.

- [ ] **Step 3: Service de seed + hook + commande**

`apps/treasury/services/seed.py` :
```python
from apps.accounting.models import Account
from apps.treasury.models import MovementAccountMapping

# catégorie de mouvement → code de compte de contrepartie OHADA
_DEFAULTS = {
    "ticket_sales":    "706",
    "parcel_shipping": "707",
    "charter":         "708",
    "other_income":    "758",
    "fuel":            "601",
    "maintenance":     "624",
    "salary_advance":  "425",
    "supplies":        "605",
    "rent":            "622",
    "other_expense":   "658",
}


def seed_treasury_mapping(company, created_by=None) -> int:
    accounts = {a.code: a for a in Account.objects.filter(company=company, is_deleted=False)}
    created = 0
    for category, code in _DEFAULTS.items():
        acc = accounts.get(code)
        if not acc:
            continue
        if MovementAccountMapping.objects.filter(company=company, category=category).exists():
            continue
        MovementAccountMapping.objects.create(company=company, category=category, account=acc, created_by=created_by)
        created += 1
    return created
```

`apps/treasury/services/__init__.py` — ajouter à l'import et à `__all__` : `from .seed import seed_treasury_mapping`.

Dans `apps/system_config/services/company_services.py`, `_bootstrap_company`, après le bloc
`seed_accounting(company, created_by=created_by)`, ajouter :
```python
    from apps.treasury.services.seed import seed_treasury_mapping
    seed_treasury_mapping(company, created_by=created_by)
```

`apps/treasury/management/__init__.py` et `.../commands/__init__.py` : vides.
`apps/treasury/management/commands/seed_treasury_mapping.py` :
```python
from django.core.management.base import BaseCommand
from apps.system_config.models import Company
from apps.treasury.services.seed import seed_treasury_mapping


class Command(BaseCommand):
    help = "Seed le mapping catégorie→compte de la Trésorerie (idempotent)."

    def add_arguments(self, parser):
        parser.add_argument("--company", default=None)

    def handle(self, *args, **options):
        qs = Company.objects.filter(is_deleted=False)
        if options["company"]:
            qs = qs.filter(id=options["company"])
        for company in qs:
            n = seed_treasury_mapping(company)
            self.stdout.write(f"{company.name}: {n} correspondances créées")
        self.stdout.write(self.style.SUCCESS("Terminé."))
```

- [ ] **Step 4: Migration + test**

`apps/treasury/tests/test_mapping_seed.py` :
```python
import pytest
from apps.treasury.models import MovementAccountMapping
from apps.treasury.services.seed import seed_treasury_mapping


def _company():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Trez Co", admin_email="trz@x.com", admin_first_name="A", admin_last_name="B")
    return company


@pytest.mark.django_db
def test_bootstrap_seeds_mapping():
    c = _company()
    m = {x.category: x.account.code for x in MovementAccountMapping.objects.filter(company=c)}
    assert m.get("ticket_sales") == "706"
    assert m.get("fuel") == "601"
    assert len(m) == 10


@pytest.mark.django_db
def test_seed_idempotent():
    c = _company()
    n = MovementAccountMapping.objects.filter(company=c).count()
    seed_treasury_mapping(c)
    assert MovementAccountMapping.objects.filter(company=c).count() == n
```

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py makemigrations treasury
../env/bin/python manage.py migrate treasury
../env/bin/python -m pytest apps/treasury/tests/test_mapping_seed.py -q
../env/bin/python manage.py check
```
Expected : migration créée, 2 tests PASS, check OK.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/treasury/models backend/apps/treasury/services backend/apps/treasury/management backend/apps/treasury/tests/test_mapping_seed.py backend/apps/system_config/services/company_services.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): champs de liaison compta + mapping categorie->compte seede"
```

---

### Task 2: `TreasuryAccountingBridge` + accroches service

**Files:**
- Create: `backend/apps/treasury/services/accounting_bridge.py`
- Modify: `backend/apps/treasury/services/services.py`
- Test: `backend/apps/treasury/tests/test_bridge.py`

**Interfaces:**
- Consumes : `AccountingService`, `EntryRequest`, `LineRequest`, `MovementAccountMapping`, `Account`, `Journal`.
- Produces : `TreasuryAccountingBridge.post_movement(txn)`, `.post_transfer(transfer)`, `.post_session_difference(session)` (chacun `-> JournalEntry | None`).

- [ ] **Step 1: Écrire les tests (échouent)**

`apps/treasury/tests/test_bridge.py` :
```python
import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.treasury.models import MovementAccountMapping
from apps.treasury.services.services import (
    create_cash_register, create_bank_account, open_session, close_session,
    create_transaction, create_transfer,
)
from apps.accounting.models import JournalEntry


def _ctx():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Bridge Co", admin_email="br@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="br@x.com")
    return company, admin


def _lines(entry):
    return {l.account.code: (l.debit, l.credit) for l in entry.lines.all()}


@pytest.mark.django_db
def test_income_cash_posts_debit_571_credit_706():
    company, admin = _ctx()
    reg = create_cash_register(company=company, name="Caisse 1", created_by=admin)
    sess = open_session(company=company, cash_register=reg, created_by=admin)
    txn = create_transaction(company=company, transaction_type="income", category="ticket_sales",
                             account_type="cash", amount=Decimal("15000"), payment_mode="cash",
                             cash_session=sess, created_by=admin)
    assert txn.journal_entry is not None and txn.journal_entry.state == "posted"
    ln = _lines(txn.journal_entry)
    assert ln["571"][0] == Decimal("15000")
    assert ln["706"][1] == Decimal("15000")


@pytest.mark.django_db
def test_expense_cash_posts_debit_601_credit_571():
    company, admin = _ctx()
    reg = create_cash_register(company=company, name="Caisse 1", opening_balance=Decimal("50000"), created_by=admin)
    sess = open_session(company=company, cash_register=reg, created_by=admin)
    txn = create_transaction(company=company, transaction_type="expense", category="fuel",
                             account_type="cash", amount=Decimal("45000"), payment_mode="cash",
                             cash_session=sess, created_by=admin)
    ln = _lines(txn.journal_entry)
    assert ln["601"][0] == Decimal("45000")
    assert ln["571"][1] == Decimal("45000")


@pytest.mark.django_db
def test_transfer_cash_to_bank_posts_debit_521_credit_571():
    company, admin = _ctx()
    reg = create_cash_register(company=company, name="Caisse 1", opening_balance=Decimal("100000"), created_by=admin)
    bank = create_bank_account(company=company, bank_name="BICEC", account_name="Cpt", account_number="123", created_by=admin)
    tr = create_transfer(company=company, amount=Decimal("50000"),
                         from_cash_register=reg, to_bank_account=bank, created_by=admin)
    assert tr.journal_entry is not None
    ln = _lines(tr.journal_entry)
    assert ln["521"][0] == Decimal("50000")
    assert ln["571"][1] == Decimal("50000")


@pytest.mark.django_db
def test_session_shortage_posts_debit_658_credit_571():
    company, admin = _ctx()
    reg = create_cash_register(company=company, name="Caisse 1", created_by=admin)
    sess = open_session(company=company, cash_register=reg, opening_balance=Decimal("0"), created_by=admin)
    create_transaction(company=company, transaction_type="income", category="ticket_sales",
                       account_type="cash", amount=Decimal("15000"), payment_mode="cash",
                       cash_session=sess, created_by=admin)
    close_session(sess, closing_balance=Decimal("14000"), updated_by=admin)  # manquant de 1000
    diff = JournalEntry.objects.filter(company=company, source_model="treasury.CashSession").first()
    assert diff is not None
    ln = _lines(diff)
    assert ln["658"][0] == Decimal("1000")
    assert ln["571"][1] == Decimal("1000")


@pytest.mark.django_db
def test_bridge_non_blocking_when_mapping_missing():
    company, admin = _ctx()
    MovementAccountMapping.objects.filter(company=company, category="fuel").delete()
    reg = create_cash_register(company=company, name="Caisse 1", opening_balance=Decimal("50000"), created_by=admin)
    sess = open_session(company=company, cash_register=reg, created_by=admin)
    txn = create_transaction(company=company, transaction_type="expense", category="fuel",
                             account_type="cash", amount=Decimal("1000"), payment_mode="cash",
                             cash_session=sess, created_by=admin)
    assert txn.id is not None
    assert txn.journal_entry is None
```

- [ ] **Step 2: Lancer (échoue)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/treasury/tests/test_bridge.py -q`
Expected : FAIL (bridge inexistant / journal_entry non renseigné).

- [ ] **Step 3: Implémenter le bridge**

`apps/treasury/services/accounting_bridge.py` :
```python
import logging
from decimal import Decimal

from django.utils import timezone

from apps.accounting.models import Account, Journal
from apps.accounting.services import AccountingService, EntryRequest, LineRequest
from apps.treasury.models import Transaction, MovementAccountMapping

logger = logging.getLogger(__name__)


def _journal(company_id, code):
    return Journal.objects.filter(company_id=company_id, code=code, is_deleted=False).first()


def _account(company_id, code):
    return Account.objects.filter(company_id=company_id, code=code, is_deleted=False).first()


def _post(company_id, journal_code, date, label, reference, entry_type, source_model, source_id, lines):
    req = EntryRequest(company_id=company_id, journal_code=journal_code, date=date, label=label,
                       reference=reference, entry_type=entry_type,
                       source_model=source_model, source_id=source_id, lines=lines)
    entry = AccountingService.create_entry(req)
    AccountingService.post_entry(entry.id)
    return entry


class TreasuryAccountingBridge:

    @staticmethod
    def post_movement(txn):
        try:
            company_id = txn.company_id
            if txn.account_type == Transaction.AccountType.CASH:
                reg = txn.cash_session.cash_register
                journal = reg.journal or _journal(company_id, "CAISSE")
                liquidity = reg.account or _account(company_id, "571")
            else:
                bank = txn.bank_account
                journal = bank.journal or _journal(company_id, "BANQUE")
                liquidity = bank.account or _account(company_id, "521")
            mapping = MovementAccountMapping.objects.filter(company_id=company_id, category=txn.category).first()
            counterpart = mapping.account if mapping else None
            if not (journal and liquidity and counterpart):
                return None
            amount = txn.amount
            if txn.transaction_type == Transaction.Type.INCOME:
                lines = [LineRequest(account_code=liquidity.code, debit=amount),
                         LineRequest(account_code=counterpart.code, credit=amount)]
            else:
                lines = [LineRequest(account_code=counterpart.code, debit=amount),
                         LineRequest(account_code=liquidity.code, credit=amount)]
            return _post(company_id, journal.code, txn.transaction_date,
                         txn.description or txn.get_category_display(), txn.reference,
                         "auto_payment", "treasury.Transaction", txn.id, lines)
        except Exception:
            logger.exception("Treasury bridge post_movement failed for txn %s", getattr(txn, "id", None))
            return None

    @staticmethod
    def post_transfer(transfer):
        try:
            company_id = transfer.company_id
            if transfer.from_cash_register_id:
                src_acc = transfer.from_cash_register.account or _account(company_id, "571")
            else:
                src_acc = transfer.from_bank_account.account or _account(company_id, "521")
            if transfer.to_cash_register_id:
                dst_acc = transfer.to_cash_register.account or _account(company_id, "571")
            else:
                dst_acc = transfer.to_bank_account.account or _account(company_id, "521")
            journal = _journal(company_id, "OD")
            if not (journal and src_acc and dst_acc):
                return None
            lines = [LineRequest(account_code=dst_acc.code, debit=transfer.amount),
                     LineRequest(account_code=src_acc.code, credit=transfer.amount)]
            return _post(company_id, "OD", transfer.transfer_date,
                         transfer.description or "Transfert interne", transfer.reference,
                         "auto_transfer", "treasury.Transfer", transfer.id, lines)
        except Exception:
            logger.exception("Treasury bridge post_transfer failed for %s", getattr(transfer, "id", None))
            return None

    @staticmethod
    def post_session_difference(session):
        try:
            diff = session.difference or Decimal("0")
            if diff == 0:
                return None
            company_id = session.company_id
            reg = session.cash_register
            cash_acc = reg.account or _account(company_id, "571")
            journal = _journal(company_id, "OD")
            if not (journal and cash_acc):
                return None
            date = session.closed_at.date() if session.closed_at else timezone.now().date()
            label = f"Écart de caisse — {reg.name}"
            if diff < 0:  # manquant
                loss = _account(company_id, "658")
                if not loss:
                    return None
                lines = [LineRequest(account_code=loss.code, debit=abs(diff)),
                         LineRequest(account_code=cash_acc.code, credit=abs(diff))]
            else:  # excédent
                gain = _account(company_id, "758")
                if not gain:
                    return None
                lines = [LineRequest(account_code=cash_acc.code, debit=diff),
                         LineRequest(account_code=gain.code, credit=diff)]
            return _post(company_id, "OD", date, label, "", "manual",
                         "treasury.CashSession", session.id, lines)
        except Exception:
            logger.exception("Treasury bridge post_session_difference failed for %s", getattr(session, "id", None))
            return None
```

- [ ] **Step 4: Accrocher dans `services.py`**

Dans `create_transaction`, remplacer la fin `_apply_transaction_balance(txn, sign=+1)\n    return txn` par :
```python
    _apply_transaction_balance(txn, sign=+1)

    from apps.treasury.services.accounting_bridge import TreasuryAccountingBridge
    entry = TreasuryAccountingBridge.post_movement(txn)
    if entry:
        txn.journal_entry = entry
        txn.save(update_fields=["journal_entry"])
    return txn
```

Dans `create_transfer`, remplacer le `return Transfer.objects.create(...)` final par une capture puis postage :
```python
    transfer = Transfer.objects.create(
        company=company, reference=reference,
        from_cash_register=from_cash_register, from_bank_account=from_bank_account,
        to_cash_register=to_cash_register, to_bank_account=to_bank_account,
        amount=amount, description=description,
        transfer_date=transfer_date or timezone.now().date(),
        completed_by=created_by,
        created_by=created_by,
    )
    from apps.treasury.services.accounting_bridge import TreasuryAccountingBridge
    entry = TreasuryAccountingBridge.post_transfer(transfer)
    if entry:
        transfer.journal_entry = entry
        transfer.save(update_fields=["journal_entry"])
    return transfer
```

Dans `close_session`, avant `return session`, ajouter :
```python
    from apps.treasury.services.accounting_bridge import TreasuryAccountingBridge
    TreasuryAccountingBridge.post_session_difference(session)
    return session
```

Dans `delete_transaction`, avant `_apply_transaction_balance(txn, sign=-1)`, ajouter l'extourne :
```python
    if txn.journal_entry_id:
        from apps.accounting.services import AccountingService
        try:
            if txn.journal_entry.state == "posted":
                AccountingService.cancel_entry(txn.journal_entry_id, reason="Annulation mouvement")
        except Exception:
            pass
```

- [ ] **Step 5: Tests + check**

Run: `../env/bin/python -m pytest apps/treasury/tests/test_bridge.py -q && ../env/bin/python manage.py check`
Expected : 5 tests PASS + check OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/treasury/services/accounting_bridge.py backend/apps/treasury/services/services.py backend/apps/treasury/tests/test_bridge.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): TreasuryAccountingBridge (ecritures auto mouvements/transferts/ecart) non-bloquant"
```

---

### Task 3: RBAC `treasury.*`

**Files:**
- Create: `backend/apps/admin_rbac/migrations/0010_treasury_permissions_seed.py`
- Modify: `backend/apps/treasury/views.py`
- Test: `backend/apps/treasury/tests/test_rbac.py`

**Interfaces:**
- Consumes : `HasModulePermission`.
- Produces : codes `treasury.register/bank/session/transaction/transfer .view/manage` + `treasury.dashboard.view` ; `permission_map` sur chaque vue.

- [ ] **Step 1: Migration seed des codes**

`apps/admin_rbac/migrations/0010_treasury_permissions_seed.py` :
```python
"""Data migration — seed des permissions Trésorerie."""
from django.db import migrations

PERMS = [
    ("treasury.register.view",    "Consulter les caisses",        "view"),
    ("treasury.register.manage",  "Gérer les caisses",            "update"),
    ("treasury.bank.view",        "Consulter les comptes bancaires", "view"),
    ("treasury.bank.manage",      "Gérer les comptes bancaires",  "update"),
    ("treasury.session.view",     "Consulter les sessions",       "view"),
    ("treasury.session.manage",   "Ouvrir/clôturer les sessions", "update"),
    ("treasury.transaction.view", "Consulter les mouvements",     "view"),
    ("treasury.transaction.manage", "Saisir des mouvements",      "update"),
    ("treasury.transfer.view",    "Consulter les transferts",     "view"),
    ("treasury.transfer.manage",  "Effectuer des transferts",     "update"),
    ("treasury.dashboard.view",   "Consulter le tableau de bord Trésorerie", "view"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="treasury", defaults={"name": "Trésorerie"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0009_accounting_entry_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
```

- [ ] **Step 2: Écrire le test (échoue)**

`apps/treasury/tests/test_rbac.py` :
```python
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.treasury.views import TransactionListView


def _staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(name="Trez RBAC Co", admin_email="tr@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="tr@x.com")
    staff, _ = create_user(created_by=admin, company=company, email="trs@x.com", first_name="S", last_name="T",
                           is_institution_admin=False, default_agency_id=setup["hq_agency_id"], agency_ids=[setup["hq_agency_id"]])
    pids = list(Permission.objects.filter(code__in=codes).values_list("id", flat=True))
    role = create_role(name="R", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=staff, role=role, company=company)
    return company, admin, staff


def _status(view, method, user, data=None, **kw):
    req = getattr(APIRequestFactory(), method)("/x", data or {}, format="json")
    force_authenticate(req, user=user)
    return view.as_view()(req, **kw).status_code


@pytest.mark.django_db
def test_transaction_gating():
    company, admin, staff = _staff(["treasury.transaction.view"])
    assert _status(TransactionListView, "get", staff) != 403
    assert _status(TransactionListView, "post", staff, {}) == 403
    assert _status(TransactionListView, "get", admin) != 403
```

- [ ] **Step 3: Lancer (échoue)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python manage.py migrate admin_rbac && ../env/bin/python -m pytest apps/treasury/tests/test_rbac.py -q`
Expected : FAIL (POST staff ≠ 403 car pas encore de HasModulePermission).

- [ ] **Step 4: Appliquer `HasModulePermission` aux vues**

Dans `apps/treasury/views.py`, remplacer l'import
`from apps.core.permissions import IsAuthenticated` par
`from apps.core.permissions import IsAuthenticated, HasModulePermission`.

Puis, pour **chaque** classe, remplacer `permission_classes = [IsAuthenticated]` par
`permission_classes = [IsAuthenticated, HasModulePermission]` et ajouter juste en dessous un
`permission_map` selon ce tableau :

| Classe | `permission_map` |
|---|---|
| `TreasuryStatsView` | `{"GET": "treasury.dashboard.view"}` |
| `CashRegisterListView` | `{"GET": "treasury.register.view", "POST": "treasury.register.manage"}` |
| `CashRegisterDetailView` | `{"GET": "treasury.register.view", "PATCH": "treasury.register.manage", "DELETE": "treasury.register.manage"}` |
| `BankAccountListView` | `{"GET": "treasury.bank.view", "POST": "treasury.bank.manage"}` |
| `BankAccountDetailView` | `{"GET": "treasury.bank.view", "PATCH": "treasury.bank.manage", "DELETE": "treasury.bank.manage"}` |
| `CashSessionListView` | `{"GET": "treasury.session.view"}` |
| `OpenSessionView` | `{"POST": "treasury.session.manage"}` |
| `CloseSessionView` | `{"POST": "treasury.session.manage"}` |
| `CashSessionDetailView` | `{"GET": "treasury.session.view"}` |
| `TransactionListView` | `{"GET": "treasury.transaction.view", "POST": "treasury.transaction.manage"}` |
| `TransactionDetailView` | `{"GET": "treasury.transaction.view", "DELETE": "treasury.transaction.manage"}` |
| `TransferListView` | `{"GET": "treasury.transfer.view", "POST": "treasury.transfer.manage"}` |
| `TransferDetailView` | `{"GET": "treasury.transfer.view"}` |

Exemple (pour `TransactionListView`) :
```python
class TransactionListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.transaction.view", "POST": "treasury.transaction.manage"}
```

- [ ] **Step 5: Tests + check**

Run: `../env/bin/python -m pytest apps/treasury/tests/test_rbac.py -q && ../env/bin/python manage.py check`
Expected : PASS + check OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/admin_rbac/migrations/0010_treasury_permissions_seed.py backend/apps/treasury/views.py backend/apps/treasury/tests/test_rbac.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): RBAC treasury.* sur toutes les vues"
```

---

### Task 4: Vérification finale + doc + fusion

**Files:**
- Modify: `backend/apps/accounting/README.md`

- [ ] **Step 1: Mettre à jour la roadmap du README**

Dans `backend/apps/accounting/README.md`, tableau « État d'avancement » : passer **A2** à ✅ livré et
**Trésorerie** à « 🔄 T1 (pont comptable) en cours ».

- [ ] **Step 2: Suite treasury + accounting + migrations à jour**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py makemigrations --check --dry-run
../env/bin/python manage.py check
../env/bin/python -m pytest apps/treasury/ apps/accounting/ -q
```
Expected : pas de migration manquante ; check OK ; tous les tests PASS.

- [ ] **Step 3: Migrer + backfill de la base de dev**

Run:
```
../env/bin/python manage.py migrate
../env/bin/python manage.py seed_treasury_mapping
```
Expected : migrations appliquées ; récap du mapping par société.

- [ ] **Step 4: Commit doc**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/accounting/README.md
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "docs(accounting): maj roadmap (A2 livre, Tresorerie T1 en cours)"
```

- [ ] **Step 5: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- Champs de liaison (`account`/`journal` sur caisse/banque, `journal_entry` sur mouvement/transfert) → Task 1. ✅
- Modèle mapping catégorie→compte + seed par société + hook + backfill → Task 1. ✅
- `TreasuryAccountingBridge` (post_movement/post_transfer/post_session_difference, non-bloquant) → Task 2. ✅
- Accroches `create_transaction`/`create_transfer`/`close_session` + extourne à la suppression → Task 2. ✅
- RBAC `treasury.*` (codes + HasModulePermission sur toutes les vues) → Task 3. ✅
- Non-bloquant (mapping manquant → mouvement créé, `journal_entry` None) → testé Task 2. ✅
- Hors périmètre (relevé/rapprochement, partenaire, frontend) → non inclus. ✅

**Placeholder scan :** code complet fourni (modèles, seed, bridge, hooks, migration, vues, tests) ; aucun TODO/TBD.

**Type consistency :** `seed_treasury_mapping(company, created_by=None) -> int` cohérent (déf. Task 1 + hook + commande + tests). `TreasuryAccountingBridge.post_movement/post_transfer/post_session_difference` (Task 2 déf.) consommés par les accroches (Task 2). `EntryRequest`/`LineRequest`/`AccountingService` conformes à A2. Codes `treasury.*` identiques entre migration 0010 (Task 3) et `permission_map` des vues (Task 3). Comptes de contrepartie (706/601/624/622/605/658/425/707/708/758) présents dans le plan A1.
