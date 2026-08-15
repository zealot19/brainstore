# G-Accounting A2 — Moteur d'écritures — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fournir le moteur comptable en partie double (pièces + service create/post/cancel) que les autres modules appelleront.

**Architecture:** App `accounting` : modèles `Partner`, `JournalEntry`, `JournalEntryLine`, `JournalSequence` (scopés société) ; `AccountingService` (dataclasses `EntryRequest`/`LineRequest`) avec règles d'intégrité ; API DRF + RBAC `accounting.entry.*`/`partner.*`. Backend-first.

**Tech Stack:** Django 5.1 + DRF, pytest.

**Spec:** `docs/superpowers/specs/2026-08-15-accounting-a2-moteur-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`).
- Branche : `feature/accounting-a2` (déjà créée depuis `master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`.
- Modèles : étendre `apps.core.models.BaseModel` + `company` FK `system_config.Company`. Montants `DecimalField(max_digits=14, decimal_places=2)`.
- Erreurs métier : `raise ApplicationError(_("…"))` (`apps.core.exceptions`) → 400 via handler existant. Réponses : `apps.core.responses` (`success_response`, `created_response`, `error_response`).
- Immuabilité : enforced **au niveau API** (PATCH/DELETE seulement si `state == draft`) ; le service est le seul writer des transitions.
- Vérif : `manage.py check`, `makemigrations --check --dry-run`, pytest.

**Rappels codebase (vérifiés) :**
- `Account` (`company`, `code`, `account_type`, `deprecated`, `reconcile`), `Journal` (`company`, `code`, `sequence_prefix`, `default_account`), `AccountingPeriod` (`company`, `fiscal_year`, `state` open/closed/locked, `date_start`, `date_end`).
- `create_company(*, name, admin_email, admin_first_name, admin_last_name)` → `(company, setup)` ; le bootstrap seede plan + journaux (`OD`, `VTE`, …) + exercice courant + 12 périodes de l'année en cours.
- RBAC : `HasModulePermission` + `permission_map` (`apps.core.permissions`), migrations seed (dernière `admin_rbac/0008_accounting_permissions_seed`), shape : `AppModule.objects.get_or_create(code=…)` + `Permission.objects.update_or_create(code=…, defaults={name, module, category})`.
- Handler : `ApplicationError` → `{"success":false,"error":{"message":…}}` en 400.

---

### Task 1: Modèles (Partner, JournalEntry, JournalEntryLine, JournalSequence)

**Files:**
- Create: `backend/apps/accounting/models/partner.py`, `journal_entry.py`, `journal_entry_line.py`, `journal_sequence.py`
- Modify: `backend/apps/accounting/models/__init__.py`, `backend/apps/accounting/admin.py`
- Test: `backend/apps/accounting/tests/test_entry_models.py`

**Interfaces:**
- Produces : `Partner`, `JournalEntry`, `JournalEntryLine`, `JournalSequence`.

- [ ] **Step 1: Écrire les modèles**

`apps/accounting/models/partner.py` :
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Partner(BaseModel):
    class Type(models.TextChoices):
        CUSTOMER = "customer", _("Client")
        SUPPLIER = "supplier", _("Fournisseur")
        EMPLOYEE = "employee", _("Employé")
        TAX      = "tax", _("Administration fiscale")
        SOCIAL   = "social", _("Organisme social")
        OTHER    = "other", _("Autre")

    company      = models.ForeignKey("system_config.Company", on_delete=models.CASCADE, related_name="partners")
    partner_type = models.CharField(_("type"), max_length=12, choices=Type.choices, default=Type.OTHER)
    name         = models.CharField(_("nom"), max_length=255)
    source_model = models.CharField(_("modèle source"), max_length=60, blank=True)
    source_id    = models.UUIDField(_("id source"), null=True, blank=True)
    active       = models.BooleanField(_("actif"), default=True)
    note         = models.TextField(_("note"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("partenaire")
        verbose_name_plural = _("partenaires")
        ordering = ["name"]

    def __str__(self):
        return self.name
```

`apps/accounting/models/journal_entry.py` :
```python
from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class JournalEntry(BaseModel):
    class Type(models.TextChoices):
        MANUAL        = "manual", _("Manuelle")
        AUTO_SALE     = "auto_sale", _("Vente")
        AUTO_PAYMENT  = "auto_payment", _("Encaissement")
        AUTO_PAYROLL  = "auto_payroll", _("Paie")
        AUTO_TRANSFER = "auto_transfer", _("Transfert")

    class State(models.TextChoices):
        DRAFT     = "draft", _("Brouillon")
        POSTED    = "posted", _("Validée")
        CANCELLED = "cancelled", _("Annulée")

    company      = models.ForeignKey("system_config.Company", on_delete=models.CASCADE, related_name="journal_entries")
    journal      = models.ForeignKey("accounting.Journal", on_delete=models.PROTECT, related_name="entries")
    period       = models.ForeignKey("accounting.AccountingPeriod", on_delete=models.PROTECT, related_name="entries")
    date         = models.DateField(_("date"))
    entry_type   = models.CharField(_("type"), max_length=16, choices=Type.choices, default=Type.MANUAL)
    partner      = models.ForeignKey("accounting.Partner", null=True, blank=True, on_delete=models.SET_NULL, related_name="+")
    label        = models.CharField(_("libellé"), max_length=500)
    reference    = models.CharField(_("référence"), max_length=100, blank=True)
    state        = models.CharField(_("état"), max_length=10, choices=State.choices, default=State.DRAFT)
    name         = models.CharField(_("n° pièce"), max_length=30, blank=True)
    total_debit  = models.DecimalField(_("total débit"), max_digits=14, decimal_places=2, default=0)
    total_credit = models.DecimalField(_("total crédit"), max_digits=14, decimal_places=2, default=0)
    posted_at    = models.DateTimeField(_("validée le"), null=True, blank=True)
    posted_by    = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL, related_name="+")
    reversed_entry = models.ForeignKey("self", null=True, blank=True, on_delete=models.SET_NULL, related_name="reversal")
    source_model = models.CharField(_("modèle source"), max_length=60, blank=True)
    source_id    = models.UUIDField(_("id source"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("pièce comptable")
        verbose_name_plural = _("pièces comptables")
        ordering = ["-date", "-created_at"]

    def __str__(self):
        return self.name or f"[brouillon] {self.label}"
```

`apps/accounting/models/journal_entry_line.py` :
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class JournalEntryLine(BaseModel):
    entry           = models.ForeignKey("accounting.JournalEntry", on_delete=models.CASCADE, related_name="lines")
    sequence        = models.IntegerField(_("ordre"), default=0)
    account         = models.ForeignKey("accounting.Account", on_delete=models.PROTECT, related_name="+")
    label           = models.CharField(_("libellé"), max_length=500, blank=True)
    debit           = models.DecimalField(_("débit"), max_digits=14, decimal_places=2, default=0)
    credit          = models.DecimalField(_("crédit"), max_digits=14, decimal_places=2, default=0)
    partner         = models.ForeignKey("accounting.Partner", null=True, blank=True, on_delete=models.SET_NULL, related_name="+")
    reconciled      = models.BooleanField(_("lettrée"), default=False)
    reconcile_group = models.CharField(_("groupe de lettrage"), max_length=30, blank=True)
    date_maturity   = models.DateField(_("échéance"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("ligne d'écriture")
        verbose_name_plural = _("lignes d'écriture")
        ordering = ["sequence", "id"]

    def __str__(self):
        return f"{self.account.code} D{self.debit} C{self.credit}"
```

`apps/accounting/models/journal_sequence.py` :
```python
from django.db import models
from apps.core.models import BaseModel


class JournalSequence(BaseModel):
    company     = models.ForeignKey("system_config.Company", on_delete=models.CASCADE, related_name="journal_sequences")
    journal     = models.ForeignKey("accounting.Journal", on_delete=models.CASCADE, related_name="sequences")
    year        = models.IntegerField()
    last_number = models.IntegerField(default=0)

    class Meta(BaseModel.Meta):
        unique_together = [("company", "journal", "year")]
```

- [ ] **Step 2: Exporter + admin**

`apps/accounting/models/__init__.py` — ajouter aux imports/`__all__` :
```python
from .partner import Partner
from .journal_entry import JournalEntry
from .journal_entry_line import JournalEntryLine
from .journal_sequence import JournalSequence
```
et compléter `__all__` avec `"Partner", "JournalEntry", "JournalEntryLine", "JournalSequence"`.

`apps/accounting/admin.py` — ajouter à l'`admin.site.register([...])` : `Partner, JournalEntry, JournalEntryLine`.

- [ ] **Step 3: Migration + test**

`apps/accounting/tests/test_entry_models.py` :
```python
import pytest
from datetime import date
from decimal import Decimal
from apps.system_config.models import Company
from apps.accounting.models import Account, Journal, FiscalYear, AccountingPeriod, JournalEntry, JournalEntryLine, Partner


@pytest.mark.django_db
def test_entry_with_lines():
    c = Company.objects.create(name="Moteur Co")
    fy = FiscalYear.objects.create(company=c, code="FY2026", name="Ex", date_start=date(2026, 1, 1), date_end=date(2026, 12, 31))
    p = AccountingPeriod.objects.create(company=c, fiscal_year=fy, code="2026-01", name="Jan", date_start=date(2026, 1, 1), date_end=date(2026, 1, 31))
    j = Journal.objects.create(company=c, code="OD", name="OD", journal_type="general")
    a1 = Account.objects.create(company=c, code="571", name="Caisse", account_type="asset_cash")
    a2 = Account.objects.create(company=c, code="706", name="Ventes", account_type="income")
    e = JournalEntry.objects.create(company=c, journal=j, period=p, date=date(2026, 1, 10), label="Test")
    JournalEntryLine.objects.create(entry=e, sequence=1, account=a1, debit=Decimal("100"))
    JournalEntryLine.objects.create(entry=e, sequence=2, account=a2, credit=Decimal("100"))
    assert e.lines.count() == 2
    assert e.state == "draft"


@pytest.mark.django_db
def test_partner_str():
    c = Company.objects.create(name="P Co")
    part = Partner.objects.create(company=c, partner_type="customer", name="Client X")
    assert str(part) == "Client X"
```

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py makemigrations accounting
../env/bin/python manage.py migrate accounting
../env/bin/python -m pytest apps/accounting/tests/test_entry_models.py -q
../env/bin/python manage.py check
```
Expected : migration créée, tests PASS, check OK.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/accounting/models backend/apps/accounting/admin.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(accounting): modeles moteur (Partner, JournalEntry/Line, JournalSequence)"
```

---

### Task 2: RBAC (codes A2) + API Partenaires

**Files:**
- Create: `backend/apps/admin_rbac/migrations/0009_accounting_entry_permissions_seed.py`
- Modify: `backend/apps/accounting/serializers.py`, `backend/apps/accounting/views.py`, `backend/apps/accounting/urls.py`
- Test: `backend/apps/accounting/tests/test_partner_api.py`

**Interfaces:**
- Consumes : `Partner`, `HasModulePermission`, réponses core.
- Produces : codes `accounting.entry.view/create/post/cancel` + `accounting.partner.view/manage` ; `PartnerSerializer`, `PartnerListView`, `PartnerDetailView`.

- [ ] **Step 1: Migration seed des codes A2**

`apps/admin_rbac/migrations/0009_accounting_entry_permissions_seed.py` :
```python
"""Data migration — seed des permissions Comptabilité A2 (écritures + partenaires)."""
from django.db import migrations

PERMS = [
    ("accounting.entry.view",     "Consulter les écritures",   "view"),
    ("accounting.entry.create",   "Saisir des écritures",      "create"),
    ("accounting.entry.post",     "Valider des écritures",     "update"),
    ("accounting.entry.cancel",   "Annuler des écritures",     "update"),
    ("accounting.partner.view",   "Consulter les partenaires", "view"),
    ("accounting.partner.manage", "Gérer les partenaires",     "update"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="accounting", defaults={"name": "Comptabilité"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0008_accounting_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
```

- [ ] **Step 2: Écrire le test (échoue)**

`apps/accounting/tests/test_partner_api.py` :
```python
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User


def _staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(name="A2 RBAC Co", admin_email="a2@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="a2@x.com")
    staff, _ = create_user(created_by=admin, company=company, email="a2s@x.com", first_name="S", last_name="T",
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
def test_partner_gating_and_create():
    from apps.accounting.views import PartnerListView
    company, admin, staff = _staff(["accounting.partner.view"])
    assert _status(PartnerListView, "get", staff) != 403
    assert _status(PartnerListView, "post", staff, {"name": "X", "partner_type": "customer"}) == 403
    assert _status(PartnerListView, "post", admin, {"name": "Client Y", "partner_type": "customer"}) in (200, 201)
```

- [ ] **Step 3: Lancer (échoue)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python manage.py migrate admin_rbac && ../env/bin/python -m pytest apps/accounting/tests/test_partner_api.py -q`
Expected : FAIL (PartnerListView inexistante).

- [ ] **Step 4: Sérialiseur + vues + urls**

Ajouter à `apps/accounting/serializers.py` :
```python
from .models import Partner


class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = ["id", "partner_type", "name", "source_model", "source_id", "active", "note"]
        read_only_fields = ["id"]
```

Ajouter à `apps/accounting/views.py` (imports : `from .models import Partner` ; `from .serializers import PartnerSerializer`) :
```python
class PartnerListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.partner.view", "POST": "accounting.partner.manage"}

    def get(self, request):
        qs = Partner.objects.filter(is_deleted=False, company_id=_company(request))
        ptype = request.query_params.get("type")
        if ptype:
            qs = qs.filter(partner_type=ptype)
        term = request.query_params.get("search")
        if term:
            qs = qs.filter(name__icontains=term)
        return success_response(PartnerSerializer(qs.order_by("name"), many=True).data)

    def post(self, request):
        d = request.data
        obj = Partner.objects.create(
            company_id=_company(request), partner_type=d.get("partner_type", "other"),
            name=d["name"], source_model=d.get("source_model", ""), source_id=d.get("source_id"),
            note=d.get("note", ""), created_by=request.user)
        return created_response(PartnerSerializer(obj).data)


class PartnerDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.partner.view", "PATCH": "accounting.partner.manage", "DELETE": "accounting.partner.manage"}

    def _get(self, request, pk):
        return Partner.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()

    def get(self, request, pk):
        o = self._get(request, pk)
        return success_response(PartnerSerializer(o).data) if o else error_response(_("Introuvable."), status_code=404)

    def patch(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Introuvable."), status_code=404)
        for f in ("partner_type", "name", "source_model", "active", "note"):
            if f in request.data:
                setattr(o, f, request.data[f])
        o.updated_by = request.user
        o.save()
        return success_response(PartnerSerializer(o).data)

    def delete(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Introuvable."), status_code=404)
        o.is_deleted = True
        o.updated_by = request.user
        o.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return success_response(message=_("Partenaire supprimé."))
```

Ajouter à `apps/accounting/urls.py` :
```python
    path("partners/",           views.PartnerListView.as_view()),
    path("partners/<uuid:pk>/", views.PartnerDetailView.as_view()),
```

- [ ] **Step 5: Tests + check**

Run: `../env/bin/python -m pytest apps/accounting/tests/test_partner_api.py -q && ../env/bin/python manage.py check`
Expected : PASS + check OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/admin_rbac/migrations/0009_accounting_entry_permissions_seed.py backend/apps/accounting/serializers.py backend/apps/accounting/views.py backend/apps/accounting/urls.py backend/apps/accounting/tests/test_partner_api.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(accounting): RBAC A2 (entry/partner) + API partenaires"
```

---

### Task 3: `AccountingService.create_entry` + dataclasses

**Files:**
- Create: `backend/apps/accounting/services/accounting_service.py`
- Modify: `backend/apps/accounting/services/__init__.py`
- Test: `backend/apps/accounting/tests/test_service_create.py`

**Interfaces:**
- Produces : `EntryRequest`, `LineRequest`, `AccountingService.create_entry(req, *, created_by=None) -> JournalEntry`.

- [ ] **Step 1: Écrire les tests (échouent)**

`apps/accounting/tests/test_service_create.py` :
```python
import pytest
from datetime import date
from decimal import Decimal
from apps.core.exceptions import ApplicationError
from apps.accounting.services.accounting_service import AccountingService, EntryRequest, LineRequest


def _company():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Svc Co", admin_email="svc@x.com", admin_first_name="A", admin_last_name="B")
    return company


def _req(company, lines, **kw):
    return EntryRequest(company_id=company.id, journal_code="OD", date=date.today(), label="Test", lines=lines, **kw)


@pytest.mark.django_db
def test_create_balanced_draft():
    c = _company()
    e = AccountingService.create_entry(_req(c, [
        LineRequest(account_code="571", debit=Decimal("100")),
        LineRequest(account_code="706", credit=Decimal("100")),
    ]))
    assert e.state == "draft" and e.lines.count() == 2
    assert e.total_debit == Decimal("100") and e.total_credit == Decimal("100")


@pytest.mark.django_db
def test_create_line_both_sides_rejected():
    c = _company()
    with pytest.raises(ApplicationError):
        AccountingService.create_entry(_req(c, [LineRequest(account_code="571", debit=Decimal("10"), credit=Decimal("5"))]))


@pytest.mark.django_db
def test_create_reconcilable_requires_partner():
    c = _company()
    with pytest.raises(ApplicationError):
        AccountingService.create_entry(_req(c, [
            LineRequest(account_code="411", debit=Decimal("100")),   # 411 reconcile -> partenaire requis
            LineRequest(account_code="706", credit=Decimal("100")),
        ]))


@pytest.mark.django_db
def test_create_unknown_journal_rejected():
    c = _company()
    with pytest.raises(ApplicationError):
        AccountingService.create_entry(EntryRequest(company_id=c.id, journal_code="ZZZ", date=date.today(), label="x",
                                                    lines=[LineRequest(account_code="571", debit=Decimal("1")), LineRequest(account_code="706", credit=Decimal("1"))]))
```

- [ ] **Step 2: Lancer (échoue)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/accounting/tests/test_service_create.py -q`
Expected : FAIL (module inexistant).

- [ ] **Step 3: Implémenter le service (create_entry)**

`apps/accounting/services/accounting_service.py` :
```python
from dataclasses import dataclass, field
from datetime import date as date_type
from decimal import Decimal
from uuid import UUID

from django.db import transaction
from django.db.models import Sum
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.accounting.models import (Account, Journal, AccountingPeriod,
                                    JournalEntry, JournalEntryLine, JournalSequence)


@dataclass
class LineRequest:
    account_code: str
    label: str = ""
    debit: Decimal = Decimal("0")
    credit: Decimal = Decimal("0")
    partner_id: UUID | None = None


@dataclass
class EntryRequest:
    company_id: UUID
    journal_code: str
    date: date_type
    label: str
    lines: list = field(default_factory=list)
    reference: str = ""
    entry_type: str = "manual"
    partner_id: UUID | None = None
    source_model: str = ""
    source_id: UUID | None = None


def _sequence_name(journal, year, num):
    num_s = f"{num:05d}"
    prefix = journal.sequence_prefix or ""
    if "{YYYY}" in prefix:
        return f"{prefix.replace('{YYYY}', str(year))}{num_s}"
    if prefix:
        return f"{prefix}{year}/{num_s}"
    return f"{journal.code}/{year}/{num_s}"


class AccountingService:

    @staticmethod
    @transaction.atomic
    def create_entry(req: EntryRequest, *, created_by=None) -> JournalEntry:
        journal = Journal.objects.filter(company_id=req.company_id, code=req.journal_code, is_deleted=False).first()
        if not journal:
            raise ApplicationError(_("Journal introuvable : %s") % req.journal_code)
        period = AccountingPeriod.objects.filter(company_id=req.company_id, is_deleted=False,
                                                 date_start__lte=req.date, date_end__gte=req.date).first()
        if not period:
            raise ApplicationError(_("Aucune période comptable pour cette date."))
        if period.state != "open":
            raise ApplicationError(_("La période comptable n'est pas ouverte."))
        if not req.lines:
            raise ApplicationError(_("Une pièce doit comporter au moins une ligne."))

        prepared = []
        total_d = total_c = Decimal("0")
        for i, ln in enumerate(req.lines, start=1):
            debit = Decimal(ln.debit or 0)
            credit = Decimal(ln.credit or 0)
            if debit < 0 or credit < 0:
                raise ApplicationError(_("Les montants ne peuvent pas être négatifs."))
            if (debit > 0) == (credit > 0):
                raise ApplicationError(_("Chaque ligne doit avoir soit un débit, soit un crédit."))
            acc = Account.objects.filter(company_id=req.company_id, code=ln.account_code, is_deleted=False).first()
            if not acc:
                raise ApplicationError(_("Compte introuvable : %s") % ln.account_code)
            if acc.deprecated:
                raise ApplicationError(_("Compte déprécié : %s") % ln.account_code)
            partner_id = ln.partner_id or req.partner_id
            if acc.reconcile and not partner_id:
                raise ApplicationError(_("Un partenaire est obligatoire sur le compte de tiers %s.") % acc.code)
            prepared.append((i, acc, ln.label, debit, credit, partner_id))
            total_d += debit
            total_c += credit

        entry = JournalEntry.objects.create(
            company_id=req.company_id, journal=journal, period=period, date=req.date,
            entry_type=req.entry_type, partner_id=req.partner_id, label=req.label,
            reference=req.reference, source_model=req.source_model, source_id=req.source_id,
            total_debit=total_d, total_credit=total_c, created_by=created_by)
        for seq, acc, label, debit, credit, partner_id in prepared:
            JournalEntryLine.objects.create(entry=entry, sequence=seq, account=acc, label=label,
                                            debit=debit, credit=credit, partner_id=partner_id, created_by=created_by)
        return entry
```

`apps/accounting/services/__init__.py` — ajouter :
```python
from .accounting_service import AccountingService, EntryRequest, LineRequest

__all__ += ["AccountingService", "EntryRequest", "LineRequest"]
```
(si `__all__` n'existe pas encore sous cette forme, garder l'existant `["seed_accounting"]` et l'étendre.)

- [ ] **Step 4: Tests + check**

Run: `../env/bin/python -m pytest apps/accounting/tests/test_service_create.py -q && ../env/bin/python manage.py check`
Expected : 4 tests PASS + check OK.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/accounting/services
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(accounting): AccountingService.create_entry + EntryRequest/LineRequest"
```

---

### Task 4: `post_entry` (équilibre, période, séquence gapless)

**Files:**
- Modify: `backend/apps/accounting/services/accounting_service.py`
- Test: `backend/apps/accounting/tests/test_service_post.py`

**Interfaces:**
- Consumes : `create_entry`, `_sequence_name`.
- Produces : `AccountingService.post_entry(entry_id, *, posted_by=None) -> JournalEntry`.

- [ ] **Step 1: Écrire les tests (échouent)**

`apps/accounting/tests/test_service_post.py` :
```python
import pytest
from datetime import date
from decimal import Decimal
from apps.core.exceptions import ApplicationError
from apps.accounting.models import AccountingPeriod
from apps.accounting.services.accounting_service import AccountingService, EntryRequest, LineRequest


def _company():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Post Co", admin_email="post@x.com", admin_first_name="A", admin_last_name="B")
    return company


def _entry(c):
    return AccountingService.create_entry(EntryRequest(company_id=c.id, journal_code="OD", date=date.today(), label="t",
        lines=[LineRequest(account_code="571", debit=Decimal("100")), LineRequest(account_code="706", credit=Decimal("100"))]))


@pytest.mark.django_db
def test_post_assigns_sequential_numbers():
    c = _company()
    e1 = AccountingService.post_entry(_entry(c).id)
    e2 = AccountingService.post_entry(_entry(c).id)
    assert e1.state == "posted" and e1.name
    # numéros consécutifs sur le même journal/année
    n1 = int(e1.name.split("/")[-1]); n2 = int(e2.name.split("/")[-1])
    assert n2 == n1 + 1


@pytest.mark.django_db
def test_post_unbalanced_rejected():
    c = _company()
    e = AccountingService.create_entry(EntryRequest(company_id=c.id, journal_code="OD", date=date.today(), label="t",
        lines=[LineRequest(account_code="571", debit=Decimal("100")), LineRequest(account_code="706", credit=Decimal("90"))]))
    with pytest.raises(ApplicationError):
        AccountingService.post_entry(e.id)


@pytest.mark.django_db
def test_post_closed_period_rejected():
    c = _company()
    e = _entry(c)
    AccountingPeriod.objects.filter(id=e.period_id).update(state="closed")
    with pytest.raises(ApplicationError):
        AccountingService.post_entry(e.id)


@pytest.mark.django_db
def test_post_non_draft_rejected():
    c = _company()
    e = AccountingService.post_entry(_entry(c).id)
    with pytest.raises(ApplicationError):
        AccountingService.post_entry(e.id)
```

- [ ] **Step 2: Lancer (échoue)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/accounting/tests/test_service_post.py -q`
Expected : FAIL (`post_entry` inexistant).

- [ ] **Step 3: Implémenter `post_entry`**

Ajouter à la classe `AccountingService` :
```python
    @staticmethod
    @transaction.atomic
    def post_entry(entry_id, *, posted_by=None) -> JournalEntry:
        entry = JournalEntry.objects.select_for_update().filter(id=entry_id, is_deleted=False).first()
        if not entry:
            raise ApplicationError(_("Pièce introuvable."))
        if entry.state != "draft":
            raise ApplicationError(_("Seule une pièce en brouillon peut être validée."))
        agg = entry.lines.aggregate(d=Sum("debit"), c=Sum("credit"))
        total_d = agg["d"] or Decimal("0")
        total_c = agg["c"] or Decimal("0")
        if total_d != total_c:
            raise ApplicationError(_("Pièce déséquilibrée : débit %(d)s ≠ crédit %(c)s.") % {"d": total_d, "c": total_c})
        if total_d <= 0:
            raise ApplicationError(_("Une pièce validée doit avoir un montant strictement positif."))
        if entry.period.state != "open":
            raise ApplicationError(_("La période comptable n'est pas ouverte."))

        year = entry.date.year
        seq, _created = JournalSequence.objects.select_for_update().get_or_create(
            company_id=entry.company_id, journal=entry.journal, year=year)
        seq.last_number += 1
        seq.save(update_fields=["last_number", "updated_at"])

        entry.name = _sequence_name(entry.journal, year, seq.last_number)
        entry.total_debit = total_d
        entry.total_credit = total_c
        entry.state = "posted"
        entry.posted_at = timezone.now()
        entry.posted_by = posted_by
        entry.save()
        return entry
```

- [ ] **Step 4: Tests + check**

Run: `../env/bin/python -m pytest apps/accounting/tests/test_service_post.py -q && ../env/bin/python manage.py check`
Expected : 4 tests PASS + check OK.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/accounting/services/accounting_service.py backend/apps/accounting/tests/test_service_post.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(accounting): post_entry (equilibre, periode, sequence gapless)"
```

---

### Task 5: `cancel_entry` (extourne)

**Files:**
- Modify: `backend/apps/accounting/services/accounting_service.py`
- Test: `backend/apps/accounting/tests/test_service_cancel.py`

**Interfaces:**
- Consumes : `post_entry`.
- Produces : `AccountingService.cancel_entry(entry_id, reason="", *, cancelled_by=None) -> JournalEntry`.

- [ ] **Step 1: Écrire les tests (échouent)**

`apps/accounting/tests/test_service_cancel.py` :
```python
import pytest
from datetime import date
from decimal import Decimal
from apps.core.exceptions import ApplicationError
from apps.accounting.models import JournalEntry
from apps.accounting.services.accounting_service import AccountingService, EntryRequest, LineRequest


def _posted(c):
    e = AccountingService.create_entry(EntryRequest(company_id=c.id, journal_code="OD", date=date.today(), label="t",
        lines=[LineRequest(account_code="571", debit=Decimal("100")), LineRequest(account_code="706", credit=Decimal("100"))]))
    return AccountingService.post_entry(e.id)


def _company():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Cancel Co", admin_email="cancel@x.com", admin_first_name="A", admin_last_name="B")
    return company


@pytest.mark.django_db
def test_cancel_creates_reversal():
    c = _company()
    orig = _posted(c)
    rev = AccountingService.cancel_entry(orig.id, reason="erreur")
    orig.refresh_from_db()
    assert orig.state == "cancelled"
    assert rev.state == "posted" and rev.reversed_entry_id == orig.id
    # montants inversés
    ol = {l.account.code: (l.debit, l.credit) for l in orig.lines.all()}
    rl = {l.account.code: (l.debit, l.credit) for l in rev.lines.all()}
    assert rl["571"] == (ol["571"][1], ol["571"][0])
    assert rl["706"] == (ol["706"][1], ol["706"][0])


@pytest.mark.django_db
def test_cancel_non_posted_rejected():
    c = _company()
    e = AccountingService.create_entry(EntryRequest(company_id=c.id, journal_code="OD", date=date.today(), label="t",
        lines=[LineRequest(account_code="571", debit=Decimal("1")), LineRequest(account_code="706", credit=Decimal("1"))]))
    with pytest.raises(ApplicationError):
        AccountingService.cancel_entry(e.id)
```

- [ ] **Step 2: Lancer (échoue)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/accounting/tests/test_service_cancel.py -q`
Expected : FAIL (`cancel_entry` inexistant).

- [ ] **Step 3: Implémenter `cancel_entry`**

Ajouter à la classe `AccountingService` :
```python
    @staticmethod
    @transaction.atomic
    def cancel_entry(entry_id, reason="", *, cancelled_by=None) -> JournalEntry:
        entry = JournalEntry.objects.select_for_update().filter(id=entry_id, is_deleted=False).first()
        if not entry:
            raise ApplicationError(_("Pièce introuvable."))
        if entry.state != "posted":
            raise ApplicationError(_("Seule une pièce validée peut être annulée."))

        reversal = JournalEntry.objects.create(
            company_id=entry.company_id, journal=entry.journal, period=entry.period, date=entry.date,
            entry_type=entry.entry_type, partner=entry.partner,
            label=_("Extourne — %s") % entry.label, reference=reason or entry.reference,
            source_model=entry.source_model, source_id=entry.source_id,
            reversed_entry=entry, created_by=cancelled_by)
        for ln in entry.lines.all():
            JournalEntryLine.objects.create(
                entry=reversal, sequence=ln.sequence, account=ln.account, label=ln.label,
                debit=ln.credit, credit=ln.debit, partner=ln.partner, created_by=cancelled_by)

        AccountingService.post_entry(reversal.id, posted_by=cancelled_by)
        entry.state = "cancelled"
        entry.save(update_fields=["state", "updated_at"])
        reversal.refresh_from_db()
        return reversal
```

- [ ] **Step 4: Tests + check**

Run: `../env/bin/python -m pytest apps/accounting/tests/test_service_cancel.py -q && ../env/bin/python manage.py check`
Expected : 2 tests PASS + check OK.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/accounting/services/accounting_service.py backend/apps/accounting/tests/test_service_cancel.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(accounting): cancel_entry (contre-ecriture / extourne)"
```

---

### Task 6: API Pièces (liste, détail, saisie OD, post, cancel)

**Files:**
- Modify: `backend/apps/accounting/serializers.py`, `backend/apps/accounting/views.py`, `backend/apps/accounting/urls.py`
- Test: `backend/apps/accounting/tests/test_entries_api.py`

**Interfaces:**
- Consumes : `AccountingService` + `EntryRequest`/`LineRequest`, `Partner`.
- Produces : `JournalEntryLineSerializer`, `JournalEntrySerializer`, `EntryListView`, `EntryDetailView`, `EntryPostView`, `EntryCancelView`.

- [ ] **Step 1: Écrire le test (échoue)**

`apps/accounting/tests/test_entries_api.py` :
```python
import json
import pytest
from datetime import date
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User


def _staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(name="Entry API Co", admin_email="ea@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ea@x.com")
    staff, _ = create_user(created_by=admin, company=company, email="eas@x.com", first_name="S", last_name="T",
                           is_institution_admin=False, default_agency_id=setup["hq_agency_id"], agency_ids=[setup["hq_agency_id"]])
    pids = list(Permission.objects.filter(code__in=codes).values_list("id", flat=True))
    role = create_role(name="R", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=staff, role=role, company=company)
    return company, admin, staff


def _od_payload():
    return {"journal": "OD", "date": str(date.today()), "label": "OD test",
            "lines": [{"account": "571", "debit": "100"}, {"account": "706", "credit": "100"}]}


@pytest.mark.django_db
def test_create_post_and_immutability():
    from apps.accounting.views import EntryListView, EntryPostView, EntryDetailView
    company, admin, staff = _staff(["accounting.entry.view", "accounting.entry.create"])
    # gating: staff sans .post ne peut pas valider
    req = APIRequestFactory().post("/x", _od_payload(), format="json")
    force_authenticate(req, user=admin)
    r = EntryListView.as_view()(req); r.render()
    entry_id = json.loads(r.content)["data"]["id"]
    assert r.status_code in (200, 201)

    # post interdit pour staff sans permission
    preq = APIRequestFactory().post("/x", {}, format="json"); force_authenticate(preq, user=staff)
    assert EntryPostView.as_view()(preq, pk=entry_id).status_code == 403

    # admin poste
    preq2 = APIRequestFactory().post("/x", {}, format="json"); force_authenticate(preq2, user=admin)
    pr = EntryPostView.as_view()(preq2, pk=entry_id); pr.render()
    assert pr.status_code in (200, 201)
    assert json.loads(pr.content)["data"]["state"] == "posted"

    # immuabilité : PATCH d'une pièce posted refusé
    patchreq = APIRequestFactory().patch("/x", {"label": "x"}, format="json"); force_authenticate(patchreq, user=admin)
    assert EntryDetailView.as_view()(patchreq, pk=entry_id).status_code == 400


@pytest.mark.django_db
def test_unbalanced_create_then_post_fails():
    from apps.accounting.views import EntryListView, EntryPostView
    company, admin, staff = _staff(["accounting.entry.view", "accounting.entry.create", "accounting.entry.post"])
    payload = {"journal": "OD", "date": str(date.today()), "label": "x",
               "lines": [{"account": "571", "debit": "100"}, {"account": "706", "credit": "90"}]}
    req = APIRequestFactory().post("/x", payload, format="json"); force_authenticate(req, user=admin)
    r = EntryListView.as_view()(req); r.render()
    eid = json.loads(r.content)["data"]["id"]
    preq = APIRequestFactory().post("/x", {}, format="json"); force_authenticate(preq, user=admin)
    assert EntryPostView.as_view()(preq, pk=eid).status_code == 400
```

- [ ] **Step 2: Lancer (échoue)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/accounting/tests/test_entries_api.py -q`
Expected : FAIL (vues inexistantes).

- [ ] **Step 3: Sérialiseurs**

Ajouter à `apps/accounting/serializers.py` (imports : `from .models import JournalEntry, JournalEntryLine`) :
```python
class JournalEntryLineSerializer(serializers.ModelSerializer):
    account_code = serializers.CharField(source="account.code", read_only=True)

    class Meta:
        model = JournalEntryLine
        fields = ["id", "sequence", "account", "account_code", "label", "debit", "credit", "partner", "reconciled", "reconcile_group"]
        read_only_fields = ["id"]


class JournalEntrySerializer(serializers.ModelSerializer):
    lines = JournalEntryLineSerializer(many=True, read_only=True)
    journal_code = serializers.CharField(source="journal.code", read_only=True)

    class Meta:
        model = JournalEntry
        fields = ["id", "name", "journal", "journal_code", "period", "date", "entry_type", "partner",
                  "label", "reference", "state", "total_debit", "total_credit", "posted_at",
                  "reversed_entry", "source_model", "source_id", "lines"]
        read_only_fields = ["id", "name", "state", "total_debit", "total_credit", "posted_at", "period"]
```

- [ ] **Step 4: Vues + urls**

Ajouter à `apps/accounting/views.py` (imports :
`from decimal import Decimal`, `from apps.accounting.services.accounting_service import AccountingService, EntryRequest, LineRequest`,
`from apps.core.exceptions import ApplicationError`, `from .models import JournalEntry`,
`from .serializers import JournalEntrySerializer`) :
```python
class EntryListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.entry.view", "POST": "accounting.entry.create"}

    def get(self, request):
        qs = JournalEntry.objects.filter(is_deleted=False, company_id=_company(request)).select_related("journal")
        for param, fieldname in (("journal", "journal_id"), ("period", "period_id"), ("state", "state")):
            val = request.query_params.get(param)
            if val:
                qs = qs.filter(**{fieldname: val})
        if request.query_params.get("date_from"):
            qs = qs.filter(date__gte=request.query_params["date_from"])
        if request.query_params.get("date_to"):
            qs = qs.filter(date__lte=request.query_params["date_to"])
        return success_response(JournalEntrySerializer(qs.prefetch_related("lines"), many=True).data)

    def post(self, request):
        d = request.data
        lines = [LineRequest(account_code=str(ln.get("account")), label=ln.get("label", ""),
                             debit=Decimal(str(ln.get("debit") or 0)), credit=Decimal(str(ln.get("credit") or 0)),
                             partner_id=ln.get("partner")) for ln in d.get("lines", [])]
        req = EntryRequest(company_id=_company(request), journal_code=str(d.get("journal")), date=d.get("date"),
                           label=d.get("label", ""), reference=d.get("reference", ""),
                           entry_type=d.get("entry_type", "manual"), partner_id=d.get("partner"), lines=lines)
        try:
            entry = AccountingService.create_entry(req, created_by=request.user)
        except ApplicationError as e:
            return error_response(str(e.message))
        return created_response(JournalEntrySerializer(entry).data)


class EntryDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "accounting.entry.view", "PATCH": "accounting.entry.create", "DELETE": "accounting.entry.create"}

    def _get(self, request, pk):
        return JournalEntry.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()

    def get(self, request, pk):
        o = self._get(request, pk)
        return success_response(JournalEntrySerializer(o).data) if o else error_response(_("Introuvable."), status_code=404)

    def patch(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Introuvable."), status_code=404)
        if o.state != "draft":
            return error_response(_("Une pièce validée est immuable."))
        for f in ("label", "reference"):
            if f in request.data:
                setattr(o, f, request.data[f])
        o.updated_by = request.user
        o.save()
        return success_response(JournalEntrySerializer(o).data)

    def delete(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response(_("Introuvable."), status_code=404)
        if o.state != "draft":
            return error_response(_("Seule une pièce en brouillon peut être supprimée."))
        o.is_deleted = True
        o.updated_by = request.user
        o.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return success_response(message=_("Pièce supprimée."))


class EntryPostView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "accounting.entry.post"}

    def post(self, request, pk):
        o = JournalEntry.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()
        if not o:
            return error_response(_("Introuvable."), status_code=404)
        try:
            entry = AccountingService.post_entry(o.id, posted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e.message))
        return success_response(JournalEntrySerializer(entry).data)


class EntryCancelView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "accounting.entry.cancel"}

    def post(self, request, pk):
        o = JournalEntry.objects.filter(is_deleted=False, company_id=_company(request), id=pk).first()
        if not o:
            return error_response(_("Introuvable."), status_code=404)
        try:
            reversal = AccountingService.cancel_entry(o.id, reason=request.data.get("reason", ""), cancelled_by=request.user)
        except ApplicationError as e:
            return error_response(str(e.message))
        return success_response(JournalEntrySerializer(reversal).data)
```

Ajouter à `apps/accounting/urls.py` :
```python
    path("entries/",              views.EntryListView.as_view()),
    path("entries/<uuid:pk>/",    views.EntryDetailView.as_view()),
    path("entries/<uuid:pk>/post/",   views.EntryPostView.as_view()),
    path("entries/<uuid:pk>/cancel/", views.EntryCancelView.as_view()),
```

- [ ] **Step 5: Tests + check**

Run: `../env/bin/python -m pytest apps/accounting/tests/test_entries_api.py -q && ../env/bin/python manage.py check`
Expected : 2 tests PASS + check OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/accounting/serializers.py backend/apps/accounting/views.py backend/apps/accounting/urls.py backend/apps/accounting/tests/test_entries_api.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(accounting): API pieces (liste/detail/OD/post/cancel)"
```

---

### Task 7: Vérification finale + fusion

- [ ] **Step 1: Suite accounting complète + migrations à jour**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py makemigrations --check --dry-run
../env/bin/python manage.py check
../env/bin/python -m pytest apps/accounting/ -q
```
Expected : pas de migration manquante ; check OK ; tous les tests accounting PASS.

- [ ] **Step 2: Migrer la base de dev**

Run: `../env/bin/python manage.py migrate`
Expected : migrations `accounting` + `admin_rbac.0009` appliquées, sans erreur.

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- `Partner` (modèle + API + RBAC) → Tasks 1-2. ✅
- `JournalEntry`/`JournalEntryLine`/`JournalSequence` → Task 1. ✅
- `AccountingService.create_entry` + validations (débit XOR crédit, compte société/non déprécié, tiers→partenaire via `reconcile`, période ouverte) → Task 3. ✅
- `post_entry` (équilibre au post, période ouverte, séquence gapless `select_for_update`, `_sequence_name`) → Task 4. ✅
- `cancel_entry` (extourne inversée, `reversed_entry`, originale `cancelled`) → Task 5. ✅
- API pièces (liste filtrable, détail+lignes, saisie OD, PATCH/DELETE draft, post, cancel) + immuabilité API → Task 6. ✅
- RBAC `accounting.entry.*` + `accounting.partner.*` → Task 2 (migration 0009). ✅
- Hors périmètre (taxes, lettrage, reporting, clôtures, frontend, intégrations) → non inclus. ✅

**Placeholder scan :** code complet fourni (modèles, service, sérialiseurs, vues, urls, migration, tests) ; aucun TODO/TBD.

**Type consistency :** `EntryRequest(company_id, journal_code, date, label, lines, reference, entry_type, partner_id, source_model, source_id)` et `LineRequest(account_code, label, debit, credit, partner_id)` identiques entre Task 3 (déf.), Task 4/5 (consommation) et Task 6 (API). `create_entry`/`post_entry`/`cancel_entry` signatures cohérentes. `_sequence_name(journal, year, num)` défini Task 3, utilisé Task 4. Vues (`EntryListView`, `EntryDetailView`, `EntryPostView`, `EntryCancelView`, `PartnerListView`, `PartnerDetailView`) cohérentes entre views/urls/tests. Codes RBAC identiques entre migration 0009 et `permission_map`.
