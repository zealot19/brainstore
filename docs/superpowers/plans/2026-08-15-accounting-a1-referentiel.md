# G-Accounting A1 — Référentiel comptable — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Poser le référentiel comptable OHADA multi-tenant (comptes, journaux, exercices, périodes), seedé par société, avec API et RBAC backend.

**Architecture:** Nouvelle app `accounting` ; modèles scopés `company` ; plan SYSCOHADA en JSON versionné seedé par société (hook `_bootstrap_company` + commande) ; DRF + `HasModulePermission` (codes `accounting.*`). Backend-first.

**Tech Stack:** Django 5.1 + DRF, pytest.

**Spec:** `docs/superpowers/specs/2026-08-15-accounting-a1-referentiel-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche : `feature/accounting-a1` (déjà créée depuis `origin/master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`.
- Multi-tenant : modèles étendent `apps.core.models.BaseModel` + `company` FK `system_config.Company` + `unique_together(company, code)`.
- Backend-first : pas de frontend Angular. Devise XAF, SYSCOHADA révisé.
- Vérif : `manage.py check`, `manage.py makemigrations --check --dry-run`, pytest.

**Rappels codebase (vérifiés) :**
- `LOCAL_APPS` dans `config/settings/base.py` (ligne 43+). Router `api/v1/router.py` (pattern `path("x/", include("apps.x.urls"))`).
- `from apps.core.models import BaseModel`. `system_config.Company`, `system_config.Agency`.
- Scoping : cf. `apps/fleet/models/vehicle.py` (`company = FK`, `unique_together`).
- Hook seeding : `apps/system_config/services/company_services.py::_bootstrap_company` (déjà : `seed_default_roles(company, created_by=created_by)` avant `return {`).
- RBAC : `HasModulePermission` (`apps.core.permissions`), migrations seed `admin_rbac/000x` (dernière : `0007_parcel_permissions_seed`), `create_role`/bundles dans `admin_rbac/services/defaults.py`.
- Patron apps.py : `AppConfig(name="apps.<x>", label="<x>", verbose_name=...)`.

---

### Task 1: App `accounting` + modèles + enregistrement

**Files:**
- Create: `backend/apps/accounting/__init__.py`, `apps.py`, `admin.py`
- Create: `backend/apps/accounting/models/__init__.py`, `account.py`, `journal.py`, `fiscal_year.py`, `period.py`
- Create: `backend/apps/accounting/urls.py` (stub vide pour le router)
- Create: `backend/apps/accounting/tests/__init__.py`, `tests/test_models.py`
- Modify: `backend/config/settings/base.py` (LOCAL_APPS), `backend/api/v1/router.py`

- [ ] **Step 1: Scaffolder l'app**

`apps/accounting/__init__.py` : vide. `apps/accounting/apps.py` :
```python
from django.apps import AppConfig

class AccountingConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.accounting"
    label = "accounting"
    verbose_name = "Comptabilité (G-Accounting)"
```
`apps/accounting/urls.py` :
```python
from django.urls import path

urlpatterns = []  # complété en Task 4
```

- [ ] **Step 2: Écrire les modèles**

`apps/accounting/models/account.py` :
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Account(BaseModel):
    class Type(models.TextChoices):
        ASSET_CASH        = "asset_cash", _("Disponibilités")
        ASSET_RECEIVABLE  = "asset_receivable", _("Créances / Clients")
        ASSET_CURRENT     = "asset_current", _("Actif circulant")
        ASSET_FIXED       = "asset_fixed", _("Immobilisations")
        LIABILITY_PAYABLE = "liability_payable", _("Fournisseurs")
        LIABILITY_CURRENT = "liability_current", _("Dettes court terme")
        EQUITY            = "equity", _("Capitaux propres")
        INCOME            = "income", _("Produits")
        EXPENSE           = "expense", _("Charges")
        TAX               = "tax", _("Taxes")

    company      = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                     on_delete=models.CASCADE, related_name="accounts")
    code         = models.CharField(_("code"), max_length=10)
    name         = models.CharField(_("libellé"), max_length=255)
    account_type = models.CharField(_("type"), max_length=20, choices=Type.choices)
    reconcile    = models.BooleanField(_("lettrable"), default=False)
    deprecated   = models.BooleanField(_("déprécié"), default=False)
    currency     = models.CharField(_("devise"), max_length=3, default="XAF")
    parent       = models.ForeignKey("self", verbose_name=_("compte parent"), null=True, blank=True,
                                     on_delete=models.SET_NULL, related_name="children")
    note         = models.TextField(_("note"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("compte")
        verbose_name_plural = _("comptes")
        unique_together = [("company", "code")]
        ordering = ["code"]

    def __str__(self):
        return f"{self.code} — {self.name}"
```

`apps/accounting/models/journal.py` :
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Journal(BaseModel):
    class Type(models.TextChoices):
        CASH     = "cash", _("Caisse")
        BANK     = "bank", _("Banque")
        SALE     = "sale", _("Ventes")
        PURCHASE = "purchase", _("Achats")
        GENERAL  = "general", _("Opérations diverses")

    company         = models.ForeignKey("system_config.Company", on_delete=models.CASCADE,
                                        related_name="journals")
    code            = models.CharField(_("code"), max_length=10)
    name            = models.CharField(_("nom"), max_length=100)
    journal_type    = models.CharField(_("type"), max_length=12, choices=Type.choices)
    default_account = models.ForeignKey("accounting.Account", null=True, blank=True,
                                        on_delete=models.SET_NULL, related_name="+")
    sequence_prefix = models.CharField(_("préfixe séquence"), max_length=30, blank=True)
    agency          = models.ForeignKey("system_config.Agency", null=True, blank=True,
                                        on_delete=models.SET_NULL, related_name="journals")
    active          = models.BooleanField(_("actif"), default=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("journal")
        verbose_name_plural = _("journaux")
        unique_together = [("company", "code")]
        ordering = ["code"]

    def __str__(self):
        return f"{self.code} — {self.name}"
```

`apps/accounting/models/fiscal_year.py` :
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class FiscalYear(BaseModel):
    class State(models.TextChoices):
        OPEN   = "open", _("Ouvert")
        CLOSED = "closed", _("Clôturé")

    company    = models.ForeignKey("system_config.Company", on_delete=models.CASCADE,
                                   related_name="fiscal_years")
    name       = models.CharField(_("nom"), max_length=50)
    code       = models.CharField(_("code"), max_length=10)
    date_start = models.DateField(_("début"))
    date_end   = models.DateField(_("fin"))
    state      = models.CharField(_("état"), max_length=8, choices=State.choices, default=State.OPEN)

    class Meta(BaseModel.Meta):
        verbose_name = _("exercice comptable")
        verbose_name_plural = _("exercices comptables")
        unique_together = [("company", "code")]
        ordering = ["-date_start"]

    def __str__(self):
        return self.name
```

`apps/accounting/models/period.py` :
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class AccountingPeriod(BaseModel):
    class State(models.TextChoices):
        OPEN   = "open", _("Ouverte")
        CLOSED = "closed", _("Clôturée")
        LOCKED = "locked", _("Verrouillée")

    company     = models.ForeignKey("system_config.Company", on_delete=models.CASCADE,
                                    related_name="accounting_periods")
    fiscal_year = models.ForeignKey("accounting.FiscalYear", on_delete=models.CASCADE,
                                    related_name="periods")
    name        = models.CharField(_("nom"), max_length=50)
    code        = models.CharField(_("code"), max_length=10)
    date_start  = models.DateField(_("début"))
    date_end    = models.DateField(_("fin"))
    state       = models.CharField(_("état"), max_length=8, choices=State.choices, default=State.OPEN)

    class Meta(BaseModel.Meta):
        verbose_name = _("période comptable")
        verbose_name_plural = _("périodes comptables")
        unique_together = [("company", "code")]
        ordering = ["date_start"]

    def __str__(self):
        return self.name
```

`apps/accounting/models/__init__.py` :
```python
from .account import Account
from .journal import Journal
from .fiscal_year import FiscalYear
from .period import AccountingPeriod

__all__ = ["Account", "Journal", "FiscalYear", "AccountingPeriod"]
```

`apps/accounting/admin.py` :
```python
from django.contrib import admin
from .models import Account, Journal, FiscalYear, AccountingPeriod

admin.site.register([Account, Journal, FiscalYear, AccountingPeriod])
```

- [ ] **Step 3: Enregistrer l'app + le router**

Dans `config/settings/base.py`, ajouter `"apps.accounting",` à `LOCAL_APPS` (près de `"apps.treasury",`).
Dans `api/v1/router.py`, ajouter : `path("accounting/", include("apps.accounting.urls")),`.

- [ ] **Step 4: Migration + test modèles**

Créer `apps/accounting/tests/__init__.py` (vide) et `apps/accounting/tests/test_models.py` :
```python
import pytest
from django.db import IntegrityError
from apps.system_config.models import Company
from apps.accounting.models import Account


@pytest.mark.django_db
def test_account_unique_per_company():
    c = Company.objects.create(name="Acc Co")
    Account.objects.create(company=c, code="571", name="Caisse", account_type="asset_cash")
    with pytest.raises(IntegrityError):
        Account.objects.create(company=c, code="571", name="Doublon", account_type="asset_cash")


@pytest.mark.django_db
def test_account_parent_selffk():
    c = Company.objects.create(name="Acc Co 2")
    p = Account.objects.create(company=c, code="41", name="Clients", account_type="asset_receivable")
    child = Account.objects.create(company=c, code="411", name="Clients loc.",
                                   account_type="asset_receivable", parent=p)
    assert child.parent == p and p.children.count() == 1
```

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py makemigrations accounting
../env/bin/python manage.py migrate accounting
../env/bin/python -m pytest apps/accounting/tests/test_models.py -q
../env/bin/python manage.py check
```
Expected : migration créée, tests PASS, check OK.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/accounting backend/config/settings/base.py backend/api/v1/router.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(accounting): app + modeles referentiel (Account/Journal/FiscalYear/Period)"
```

---

### Task 2: Plan OHADA (JSON) + loader + mapping

**Files:**
- Create: `backend/apps/accounting/data/ohada_syscohada.json`
- Create: `backend/apps/accounting/chart.py`
- Create: `backend/apps/accounting/tests/test_chart.py`

**Interfaces:**
- Produces: `chart.load_ohada_accounts() -> list[dict]` (chaque dict : `code`, `name`, `type`, `reconcile`, `parent`), `chart.account_type_for(code) -> str`, `chart.is_reconcilable(code) -> bool`.

- [ ] **Step 1: Écrire les règles de dérivation + loader**

`apps/accounting/chart.py` :
```python
import json
from pathlib import Path

_DATA = Path(__file__).parent / "data" / "ohada_syscohada.json"

# Comptes de tiers lettrables (SYSCOHADA) — préfixes exacts.
RECONCILE_PREFIXES = ("401", "411", "421", "425", "431", "447")


def is_reconcilable(code: str) -> bool:
    return any(code.startswith(p) for p in RECONCILE_PREFIXES)


def account_type_for(code: str) -> str:
    """Déduit le type OHADA d'un compte à partir de son code."""
    c2 = code[:2]
    cls = code[0]
    if cls == "1":
        if c2 in ("16", "17", "18", "19"):
            return "liability_current"
        return "equity"
    if cls == "2":
        return "asset_fixed"
    if cls == "3":
        return "asset_current"
    if cls == "4":
        if c2 == "40":
            return "liability_payable"
        if c2 == "41":
            return "asset_receivable"
        if c2 == "44":
            return "tax"
        if c2 in ("42", "43", "45", "46", "47", "48", "49"):
            return "liability_current"
        return "asset_current"
    if cls == "5":
        return "asset_cash"
    if cls == "6":
        return "expense"
    if cls == "7":
        return "income"
    if cls == "8":
        return "income" if c2 in ("82", "84", "86", "88") else "expense"
    return "asset_current"


def load_ohada_accounts() -> list[dict]:
    with open(_DATA, encoding="utf-8") as f:
        return json.load(f)
```

- [ ] **Step 2: Créer le fichier JSON (plan SYSCOHADA standard complet)**

Créer `apps/accounting/data/ohada_syscohada.json` : un tableau d'objets
`{"code","name","type","reconcile","parent"}` couvrant le **plan SYSCOHADA révisé standard** — les 8
classes, toutes les divisions à 2 chiffres, les comptes principaux à 3 chiffres et les sous-comptes
usuels, incluant **obligatoirement** tous les comptes cités par la spec client :
101,105,109,10,11,12,13,14,16,17,18,19,1 · 20,21,22,23,24,27,28,2 · 31,32,33,34,37,38,3 ·
401,408,409,40,411,418,419,41,421,422,423,424,425,428,42,431,438,43,443,445,447,448,44,45,46,47,48,49,4 ·
501,502,52,521,522,53,57,571,572,573,574,575,58,59,5 ·
601,602,603,604,605,608,60,61,62,621,622,625,627,63,64,65,658,66,661,664,67,671,68,681,6 ·
70,701,706,707,708,71,72,75,758,77,78,7 · 81,82,83,84,85,86,87,88,8.
Le champ `type` = `account_type_for(code)`, `reconcile` = `is_reconcilable(code)`, `parent` = code parent
(division supérieure ; ex. parent de « 571 » = « 57 », de « 57 » = « 5 »). Libellés OHADA en français.
(À l'exécution : générer ce JSON de façon exhaustive et cohérente ; il est éditable par société ensuite.)

- [ ] **Step 3: Test loader + mapping**

`apps/accounting/tests/test_chart.py` :
```python
from apps.accounting import chart


def test_type_mapping():
    assert chart.account_type_for("571") == "asset_cash"
    assert chart.account_type_for("411") == "asset_receivable"
    assert chart.account_type_for("401") == "liability_payable"
    assert chart.account_type_for("447") == "tax"
    assert chart.account_type_for("601") == "expense"
    assert chart.account_type_for("706") == "income"
    assert chart.account_type_for("22") == "asset_fixed"
    assert chart.account_type_for("13") == "equity"


def test_reconcile_rules():
    assert chart.is_reconcilable("411") and chart.is_reconcilable("401")
    assert not chart.is_reconcilable("408")   # non lettrable
    assert not chart.is_reconcilable("418")


def test_chart_loads_and_contains_key_accounts():
    accts = {a["code"]: a for a in chart.load_ohada_accounts()}
    for code in ("411", "401", "571", "521", "601", "706", "421", "431", "447", "13"):
        assert code in accts, code
    assert len(accts) >= 120  # plan standard complet
    # parents cohérents
    assert accts["571"]["parent"] == "57"
```

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/accounting/tests/test_chart.py -q`
Expected : PASS.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/accounting/data backend/apps/accounting/chart.py backend/apps/accounting/tests/test_chart.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(accounting): plan SYSCOHADA (JSON) + loader + mapping type/lettrage"
```

---

### Task 3: Seeding par société + hook + backfill

**Files:**
- Create: `backend/apps/accounting/services/__init__.py`, `services/seed.py`
- Create: `backend/apps/accounting/management/__init__.py`, `management/commands/__init__.py`, `management/commands/seed_accounting.py`
- Modify: `backend/apps/system_config/services/company_services.py`
- Create: `backend/apps/accounting/tests/test_seed.py`

**Interfaces:**
- Produces: `services.seed.seed_accounting(company, created_by=None) -> dict` (récap : `{"accounts": n, "journals": n, "fiscal_year": code|None, "periods": n}`).

- [ ] **Step 1: Écrire les tests (échouent)**

`apps/accounting/tests/test_seed.py` :
```python
import pytest
from datetime import date
from apps.system_config.models import Company
from apps.accounting.models import Account, Journal, FiscalYear, AccountingPeriod
from apps.accounting.services.seed import seed_accounting


@pytest.mark.django_db
def test_seed_creates_full_referential():
    c = Company.objects.create(name="Seed Acc Co")
    res = seed_accounting(c)
    assert Account.objects.filter(company=c).count() >= 120
    # parent lié
    a571 = Account.objects.get(company=c, code="571")
    assert a571.parent and a571.parent.code == "57"
    # journaux standard
    codes = set(Journal.objects.filter(company=c).values_list("code", flat=True))
    assert {"VTE", "ACH", "OD", "PAIE", "CAISSE", "BANQUE"} <= codes
    # journal VTE lié au compte 706
    assert Journal.objects.get(company=c, code="VTE").default_account.code == "706"
    # exercice courant + 12 périodes
    fy = FiscalYear.objects.get(company=c, code=f"FY{date.today().year}")
    assert AccountingPeriod.objects.filter(company=c, fiscal_year=fy).count() == 12


@pytest.mark.django_db
def test_seed_idempotent():
    c = Company.objects.create(name="Seed Idem Co")
    seed_accounting(c)
    n = Account.objects.filter(company=c).count()
    seed_accounting(c)  # rappel
    assert Account.objects.filter(company=c).count() == n


@pytest.mark.django_db
def test_company_create_seeds_accounting():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Bootstrap Acc Co", admin_email="ba@x.com",
                                admin_first_name="A", admin_last_name="B")
    assert Account.objects.filter(company=company).exists()
```

- [ ] **Step 2: Lancer les tests (échouent)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/accounting/tests/test_seed.py -q`
Expected : FAIL (module seed inexistant).

- [ ] **Step 3: Implémenter le seeding**

`apps/accounting/services/__init__.py` :
```python
from .seed import seed_accounting

__all__ = ["seed_accounting"]
```

`apps/accounting/services/seed.py` :
```python
from datetime import date
from calendar import monthrange
from apps.accounting import chart
from apps.accounting.models import Account, Journal, FiscalYear, AccountingPeriod

_MONTHS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
           "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

# (code, nom, type, compte défaut)
_JOURNALS = [
    ("VTE",    "Journal des ventes",      "sale",     "706"),
    ("ACH",    "Journal des achats",      "purchase", "601"),
    ("OD",     "Opérations diverses",     "general",  None),
    ("PAIE",   "Journal de paie",         "general",  "421"),
    ("CAISSE", "Caisse (défaut)",         "cash",     "571"),
    ("BANQUE", "Banque (défaut)",         "bank",     "521"),
]


def seed_accounting(company, created_by=None):
    res = {"accounts": 0, "journals": 0, "fiscal_year": None, "periods": 0}

    # 1) Comptes (2 passes : création puis liaison parent)
    if not Account.objects.filter(company=company).exists():
        rows = chart.load_ohada_accounts()
        by_code = {}
        for r in rows:
            acc = Account.objects.create(
                company=company, code=r["code"], name=r["name"],
                account_type=r["type"], reconcile=bool(r.get("reconcile")),
                created_by=created_by)
            by_code[r["code"]] = acc
            res["accounts"] += 1
        for r in rows:
            p = r.get("parent")
            if p and p in by_code:
                acc = by_code[r["code"]]
                acc.parent = by_code[p]
                acc.save(update_fields=["parent"])

    accounts = {a.code: a for a in Account.objects.filter(company=company)}

    # 2) Journaux standard
    for code, name, jtype, def_code in _JOURNALS:
        if Journal.objects.filter(company=company, code=code).exists():
            continue
        Journal.objects.create(
            company=company, code=code, name=name, journal_type=jtype,
            default_account=accounts.get(def_code) if def_code else None,
            sequence_prefix=f"{code}/{{YYYY}}/", created_by=created_by)
        res["journals"] += 1

    # 3) Exercice courant + 12 périodes
    year = date.today().year
    fy_code = f"FY{year}"
    if not FiscalYear.objects.filter(company=company, code=fy_code).exists():
        fy = FiscalYear.objects.create(
            company=company, code=fy_code, name=f"Exercice {year}",
            date_start=date(year, 1, 1), date_end=date(year, 12, 31), created_by=created_by)
        res["fiscal_year"] = fy_code
        for m in range(1, 13):
            AccountingPeriod.objects.create(
                company=company, fiscal_year=fy, code=f"{year}-{m:02d}",
                name=f"{_MONTHS[m - 1]} {year}",
                date_start=date(year, m, 1),
                date_end=date(year, m, monthrange(year, m)[1]), created_by=created_by)
            res["periods"] += 1

    return res
```

- [ ] **Step 4: Accrocher à `_bootstrap_company`**

Dans `apps/system_config/services/company_services.py`, `_bootstrap_company`, après l'appel existant
`seed_default_roles(company, created_by=created_by)`, ajouter :
```python
    from apps.accounting.services.seed import seed_accounting
    seed_accounting(company, created_by=created_by)
```

- [ ] **Step 5: Commande de backfill**

`apps/accounting/management/__init__.py` et `.../commands/__init__.py` : vides.
`apps/accounting/management/commands/seed_accounting.py` :
```python
from django.core.management.base import BaseCommand
from apps.system_config.models import Company
from apps.accounting.services.seed import seed_accounting


class Command(BaseCommand):
    help = "Seed le référentiel comptable OHADA pour les sociétés (idempotent)."

    def add_arguments(self, parser):
        parser.add_argument("--company", default=None, help="UUID d'une société précise.")

    def handle(self, *args, **options):
        qs = Company.objects.filter(is_deleted=False)
        if options["company"]:
            qs = qs.filter(id=options["company"])
        for company in qs:
            res = seed_accounting(company)
            self.stdout.write(f"{company.name}: {res['accounts']} comptes, {res['journals']} journaux, "
                              f"{res['periods']} périodes")
        self.stdout.write(self.style.SUCCESS("Terminé."))
```

- [ ] **Step 6: Tests + check**

Run: `../env/bin/python -m pytest apps/accounting/tests/test_seed.py -q && ../env/bin/python manage.py check`
Expected : 3 tests PASS + check OK.

- [ ] **Step 7: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/accounting/services backend/apps/accounting/management backend/apps/accounting/tests/test_seed.py backend/apps/system_config/services/company_services.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(accounting): seeding referentiel par societe + hook creation + commande backfill"
```

---

### Task 4: API DRF + RBAC

**Files:**
- Create: `backend/apps/admin_rbac/migrations/0008_accounting_permissions_seed.py`
- Create: `backend/apps/accounting/serializers.py`, `backend/apps/accounting/views.py`
- Modify: `backend/apps/accounting/urls.py`
- Create: `backend/apps/accounting/tests/test_api.py`

**Interfaces:**
- Consumes: `HasModulePermission`, `IsAuthenticated` (`apps.core.permissions`), `success_response`/`created_response`/`error_response` (`apps.core.responses`).

- [ ] **Step 1: Migration seed des codes `accounting.*`**

`apps/admin_rbac/migrations/0008_accounting_permissions_seed.py` :
```python
"""Data migration — seed des permissions Comptabilité (module `accounting`, référentiel A1)."""
from django.db import migrations

PERMS = [
    ("accounting.account.view",     "Consulter le plan comptable",   "view"),
    ("accounting.account.manage",   "Gérer le plan comptable",       "update"),
    ("accounting.journal.view",     "Consulter les journaux",        "view"),
    ("accounting.journal.manage",   "Gérer les journaux",            "update"),
    ("accounting.fiscalyear.view",  "Consulter les exercices",       "view"),
    ("accounting.fiscalyear.manage","Gérer les exercices",           "update"),
    ("accounting.period.view",      "Consulter les périodes",        "view"),
    ("accounting.period.manage",    "Gérer les périodes",            "update"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="accounting", defaults={"name": "Comptabilité"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(
            code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0007_parcel_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
```

- [ ] **Step 2: Écrire le test (échoue)**

`apps/accounting/tests/test_api.py` :
```python
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.accounting.views import AccountListView


def _staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(name="Acc RBAC Co", admin_email="ar@x.com",
                                    admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ar@x.com")
    staff, _ = create_user(created_by=admin, company=company, email="ars@x.com",
                           first_name="S", last_name="T", is_institution_admin=False,
                           default_agency_id=setup["hq_agency_id"], agency_ids=[setup["hq_agency_id"]])
    pids = list(Permission.objects.filter(code__in=codes).values_list("id", flat=True))
    role = create_role(name="R", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=staff, role=role, company=company)
    return company, admin, staff


def _status(view, method, user, **kw):
    req = getattr(APIRequestFactory(), method)("/x", {}, format="json")
    force_authenticate(req, user=user)
    r = view.as_view()(req, **kw); return r.status_code


@pytest.mark.django_db
def test_account_view_gating():
    company, admin, staff = _staff(["accounting.account.view"])
    assert _status(AccountListView, "get", staff) != 403
    assert _status(AccountListView, "post", staff) == 403
    assert _status(AccountListView, "get", admin) != 403


@pytest.mark.django_db
def test_account_list_scoped(company_seed=None):
    company, admin, staff = _staff(["accounting.account.view"])
    import json
    from rest_framework.test import APIRequestFactory, force_authenticate
    req = APIRequestFactory().get("/x"); force_authenticate(req, user=admin)
    r = AccountListView.as_view()(req); r.render()
    data = json.loads(r.content)["data"]
    assert isinstance(data, list) and len(data) >= 120  # plan seedé pour la société
```

- [ ] **Step 3: Lancer (échoue)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python manage.py migrate admin_rbac && ../env/bin/python -m pytest apps/accounting/tests/test_api.py -q`
Expected : FAIL (views inexistantes).

- [ ] **Step 4: Sérialiseurs + vues + urls**

`apps/accounting/serializers.py` :
```python
from rest_framework import serializers
from .models import Account, Journal, FiscalYear, AccountingPeriod


class AccountSerializer(serializers.ModelSerializer):
    parent_code = serializers.CharField(source="parent.code", read_only=True, default=None)

    class Meta:
        model = Account
        fields = ["id", "code", "name", "account_type", "reconcile", "deprecated",
                  "currency", "parent", "parent_code", "note"]
        read_only_fields = ["id"]


class JournalSerializer(serializers.ModelSerializer):
    default_account_code = serializers.CharField(source="default_account.code", read_only=True, default=None)

    class Meta:
        model = Journal
        fields = ["id", "code", "name", "journal_type", "default_account",
                  "default_account_code", "sequence_prefix", "agency", "active"]
        read_only_fields = ["id"]


class FiscalYearSerializer(serializers.ModelSerializer):
    class Meta:
        model = FiscalYear
        fields = ["id", "code", "name", "date_start", "date_end", "state"]
        read_only_fields = ["id"]


class AccountingPeriodSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountingPeriod
        fields = ["id", "fiscal_year", "code", "name", "date_start", "date_end", "state"]
        read_only_fields = ["id"]
```

`apps/accounting/views.py` :
```python
from django.utils.translation import gettext_lazy as _
from rest_framework.views import APIView
from apps.core.permissions import IsAuthenticated, HasModulePermission
from apps.core.responses import success_response, created_response, error_response
from .models import Account, Journal, FiscalYear, AccountingPeriod
from .serializers import (AccountSerializer, JournalSerializer,
                          FiscalYearSerializer, AccountingPeriodSerializer)


def _company(request):
    return getattr(request.user, "company_id", None)


class AccountListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.account.view", "POST": "accounting.account.manage"}

    def get(self, request):
        qs = Account.objects.filter(is_deleted=False, company_id=_company(request))
        atype = request.query_params.get("type")
        if atype:
            qs = qs.filter(account_type=atype)
        term = request.query_params.get("search")
        if term:
            from django.db.models import Q
            qs = qs.filter(Q(code__icontains=term) | Q(name__icontains=term))
        return success_response(AccountSerializer(qs.order_by("code"), many=True).data)

    def post(self, request):
        data = dict(request.data)
        obj = Account.objects.create(
            company_id=_company(request), code=data["code"], name=data["name"],
            account_type=data["account_type"], reconcile=bool(data.get("reconcile", False)),
            currency=data.get("currency", "XAF"),
            parent_id=data.get("parent"), note=data.get("note", ""),
            created_by=request.user)
        return created_response(AccountSerializer(obj).data)


class AccountDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.account.view", "PATCH": "accounting.account.manage",
                      "PUT": "accounting.account.manage", "DELETE": "accounting.account.manage"}

    def _get(self, request, pk):
        return Account.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()

    def get(self, request, pk):
        o = self._get(request, pk)
        return success_response(AccountSerializer(o).data) if o else error_response(_("Introuvable."), status_code=404)

    def patch(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Introuvable."), status_code=404)
        for f in ("name", "account_type", "reconcile", "deprecated", "note", "parent"):
            if f in request.data:
                setattr(o, f if f != "parent" else "parent_id", request.data[f])
        o.updated_by = request.user
        o.save()
        return success_response(AccountSerializer(o).data)

    def delete(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Introuvable."), status_code=404)
        o.is_deleted = True
        o.updated_by = request.user
        o.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return success_response(message=_("Compte supprimé."))


class JournalListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.journal.view", "POST": "accounting.journal.manage"}

    def get(self, request):
        qs = Journal.objects.filter(is_deleted=False, company_id=_company(request)).order_by("code")
        return success_response(JournalSerializer(qs, many=True).data)

    def post(self, request):
        d = request.data
        obj = Journal.objects.create(
            company_id=_company(request), code=d["code"], name=d["name"],
            journal_type=d["journal_type"], default_account_id=d.get("default_account"),
            sequence_prefix=d.get("sequence_prefix", ""), agency_id=d.get("agency"),
            created_by=request.user)
        return created_response(JournalSerializer(obj).data)


class JournalDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.journal.view", "PATCH": "accounting.journal.manage",
                      "PUT": "accounting.journal.manage", "DELETE": "accounting.journal.manage"}

    def _get(self, request, pk):
        return Journal.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()

    def get(self, request, pk):
        o = self._get(request, pk)
        return success_response(JournalSerializer(o).data) if o else error_response(_("Introuvable."), status_code=404)

    def patch(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Introuvable."), status_code=404)
        for f in ("name", "journal_type", "sequence_prefix", "active"):
            if f in request.data:
                setattr(o, f, request.data[f])
        if "default_account" in request.data:
            o.default_account_id = request.data["default_account"]
        o.updated_by = request.user
        o.save()
        return success_response(JournalSerializer(o).data)


class FiscalYearListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.fiscalyear.view", "POST": "accounting.fiscalyear.manage"}

    def get(self, request):
        qs = FiscalYear.objects.filter(is_deleted=False, company_id=_company(request))
        return success_response(FiscalYearSerializer(qs, many=True).data)

    def post(self, request):
        d = request.data
        obj = FiscalYear.objects.create(
            company_id=_company(request), code=d["code"], name=d["name"],
            date_start=d["date_start"], date_end=d["date_end"], created_by=request.user)
        return created_response(FiscalYearSerializer(obj).data)


class PeriodListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.period.view", "POST": "accounting.period.manage"}

    def get(self, request):
        qs = AccountingPeriod.objects.filter(is_deleted=False, company_id=_company(request))
        fy = request.query_params.get("fiscal_year")
        if fy:
            qs = qs.filter(fiscal_year_id=fy)
        return success_response(AccountingPeriodSerializer(qs, many=True).data)

    def post(self, request):
        d = request.data
        obj = AccountingPeriod.objects.create(
            company_id=_company(request), fiscal_year_id=d["fiscal_year"], code=d["code"],
            name=d["name"], date_start=d["date_start"], date_end=d["date_end"], created_by=request.user)
        return created_response(AccountingPeriodSerializer(obj).data)


class PeriodCloseView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "accounting.period.manage"}

    def post(self, request, pk):
        o = AccountingPeriod.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()
        if not o:
            return error_response(_("Introuvable."), status_code=404)
        if o.state != "open":
            return error_response(_("La période n'est pas ouverte."))
        o.state = "closed"
        o.updated_by = request.user
        o.save(update_fields=["state", "updated_by", "updated_at"])
        return success_response(AccountingPeriodSerializer(o).data)
```

`apps/accounting/urls.py` :
```python
from django.urls import path
from . import views

urlpatterns = [
    path("accounts/",            views.AccountListView.as_view()),
    path("accounts/<uuid:pk>/",  views.AccountDetailView.as_view()),
    path("journals/",            views.JournalListView.as_view()),
    path("journals/<uuid:pk>/",  views.JournalDetailView.as_view()),
    path("fiscal-years/",        views.FiscalYearListView.as_view()),
    path("periods/",             views.PeriodListView.as_view()),
    path("periods/<uuid:pk>/close/", views.PeriodCloseView.as_view()),
]
```

- [ ] **Step 5: Tests + check**

Run: `../env/bin/python -m pytest apps/accounting/tests/test_api.py -q && ../env/bin/python manage.py check`
Expected : PASS + check OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/accounting/serializers.py backend/apps/accounting/views.py backend/apps/accounting/urls.py backend/apps/admin_rbac/migrations/0008_accounting_permissions_seed.py backend/apps/accounting/tests/test_api.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(accounting): API referentiel (comptes/journaux/exercices/periodes) + RBAC accounting.*"
```

---

### Task 5: Vérification finale + backfill dev + fusion

- [ ] **Step 1: Suite complète + migrations à jour**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py makemigrations --check --dry-run
../env/bin/python manage.py check
../env/bin/python -m pytest apps/accounting/ apps/admin_rbac/tests.py -q
```
Expected : pas de migration manquante ; check OK ; tests PASS.

- [ ] **Step 2: Migrer + backfill de la base de dev**

Run:
```
../env/bin/python manage.py migrate
../env/bin/python manage.py seed_accounting
```
Expected : récap par société (comptes/journaux/périodes), sans erreur.

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- App + modèles Account/Journal/FiscalYear/Period (scopés, unique_together) → Task 1. ✅
- Plan SYSCOHADA complet (JSON) + type/reconcile → Task 2. ✅
- Seeding par société + hook `_bootstrap_company` + backfill command → Task 3. ✅
- API référentiel (comptes/journaux/exercices/périodes, admin) → Task 4. ✅
- RBAC `accounting.*` (codes + HasModulePermission) → Task 4. ✅
- Hors périmètre (moteur A2, reporting A3, lettrage/clôtures A4, frontend, Partner, taxes) → non inclus. ✅

**Placeholder scan :** code complet (modèles, chart, seed, API) ; le seul artefact « à produire » est le contenu exhaustif du JSON SYSCOHADA (données), dont le schéma + règles de dérivation + comptes obligatoires sont entièrement spécifiés (Task 2).

**Type consistency :** `seed_accounting(company, created_by=None) -> dict` cohérent (Task 3 déf. + hook + commande + tests). `account_type_for`/`is_reconcilable`/`load_ohada_accounts` (Task 2) consommés par le seed (Task 3). `permission_map`/codes `accounting.*` identiques entre migration (Task 4) et vues (Task 4). Helper `_staff` = patron RBAC des tranches précédentes.
