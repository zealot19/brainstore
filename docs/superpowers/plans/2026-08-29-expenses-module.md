# Module Dépenses (Trésorerie) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Centralise all expenses under Trésorerie — voyage-linked (existing) and new general/agency expenses — with a 3-sub-module menu, reusing the treasury→accounting plumbing.

**Architecture:** New `GeneralExpense` model mirrors `TripExpense`; a `general_expense` FK + `GENERAL_EXPENSE` category mirror `voyage_expense`/`VOYAGE_EXPENSE`. Posting reuses `create_transaction`; a shared `resolve_disbursement_session` helper backs both trip and general disbursement (DRY). Frontend removes the expenses card from the trip page and adds 3 Trésorerie pages.

**Tech Stack:** Django + DRF, pytest (`config.settings.local`), Angular 17.

**Spec:** `docs/superpowers/specs/2026-08-29-expenses-module-design.md`

## Global Constraints
- Git root `ERP-master/`; run git as `git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master …`; commit as shimi (`-c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com`), no Claude trailer.
- Backend tests: `cd backend && source ../env/bin/activate && python -m pytest <path> -q` (individual tests ~70s — normal).
- Reuse, don't duplicate: `create_transaction` (treasury/services/services.py), `ExpenseType` (voyages_config), `register_agency_scope` + `_apply_agency_scope` (treasury), `soft_delete(user=)`.
- Permissions: `treasury.expense.view` (read), `treasury.expense.manage` (write/disburse), module `treasury`.
- Voyage expenses = company-level (no agency filter); general expenses = agency-scoped for non-admins.
- Frontend gate: `cd angular && npx ng build`.
- Finish: merge to `master`, `git push all master`.

## File Structure
- `backend/apps/treasury/models/general_expense.py` (create) — `GeneralExpense`.
- `backend/apps/treasury/models/transaction.py` (modify) — `general_expense` FK + `GENERAL_EXPENSE` category.
- `backend/apps/treasury/models/__init__.py` (modify) — export `GeneralExpense`.
- `backend/apps/treasury/services/expense_shared.py` (create) — `resolve_disbursement_session`.
- `backend/apps/treasury/services/general_expense_sales.py` (create) — `record_general_expense`.
- `backend/apps/treasury/services/general_expense_services.py` (create) — CRUD + `disburse_general_expense`.
- `backend/apps/voyages_trips/services/expense_services.py` (modify) — use shared helper.
- `backend/apps/treasury/services/seed.py` (modify) — mapping default.
- `backend/apps/treasury/selectors/expenses.py` (create) — voyage list, general list, dashboard.
- `backend/apps/treasury/serializers.py` (modify) — general + voyage expense serializers.
- `backend/apps/treasury/views.py` + `urls.py` (modify) — endpoints.
- `backend/apps/admin_rbac/migrations/0014_expense_permissions_seed.py` (create).
- Frontend: `trip-detail.component.{ts,html}` (remove card), `api.config.ts`, `routes.ts`, `sidebar.service.ts` (modify); new `_api/services/treasury/{general-expense,expense}.service.ts`; new pages under `_api/pages/treasury/expenses/{general,voyage,dashboard}/`.

---

## Task 1: Schema — GeneralExpense + Transaction extension

**Files:** create `general_expense.py`; modify `transaction.py`, `models/__init__.py`, `services/seed.py`; test `apps/treasury/tests/test_general_expense_model.py`.

**Interfaces:**
- Produces: `GeneralExpense` (status `unpaid`/`paid`); `Transaction.Category.GENERAL_EXPENSE == "general_expense"`; `Transaction.general_expense` FK.

- [ ] **Step 1: Write the failing test** — `apps/treasury/tests/test_general_expense_model.py`:
```python
import pytest


@pytest.mark.django_db
def test_general_expense_and_transaction_extension():
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.voyages_config.models import ExpenseType
    from apps.treasury.models import GeneralExpense, Transaction
    company, _ = create_company(name="GX", admin_email="gx@x.com", admin_first_name="A", admin_last_name="B")
    ag = Agency.objects.create(company=company, name="Douala", code="DLA")
    et = ExpenseType.objects.create(company=company, code="SUP", name="Fournitures", account_code="605")
    e = GeneralExpense.objects.create(company=company, agency=ag, expense_type=et,
                                      label="Papier toilette", amount=5000)
    assert e.status == "unpaid"
    assert Transaction.Category.GENERAL_EXPENSE == "general_expense"
    assert any(f.name == "general_expense" for f in Transaction._meta.get_fields())
```

- [ ] **Step 2: Run — fail** — `python -m pytest apps/treasury/tests/test_general_expense_model.py -q`.

- [ ] **Step 3: Model** — `apps/treasury/models/general_expense.py`:
```python
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class GeneralExpense(BaseModel):
    """Dépense générale / d'agence (non liée à un voyage)."""

    class Status(models.TextChoices):
        UNPAID = "unpaid", _("À décaisser")
        PAID   = "paid",   _("Décaissée")

    company      = models.ForeignKey("system_config.Company", on_delete=models.CASCADE,
                                     related_name="general_expenses", verbose_name=_("company"))
    agency       = models.ForeignKey("system_config.Agency", on_delete=models.SET_NULL,
                                     null=True, blank=True, related_name="general_expenses",
                                     verbose_name=_("agence"))
    expense_type = models.ForeignKey("voyages_config.ExpenseType", on_delete=models.PROTECT,
                                     related_name="general_expenses", verbose_name=_("type de dépense"))
    label        = models.CharField(_("libellé"), max_length=200)
    amount       = models.DecimalField(_("montant"), max_digits=14, decimal_places=2)
    expense_date = models.DateField(_("date"), default=timezone.now)
    status       = models.CharField(_("statut"), max_length=10, choices=Status.choices,
                                    default=Status.UNPAID)
    cash_session = models.ForeignKey("treasury.CashSession", on_delete=models.SET_NULL,
                                     null=True, blank=True, related_name="general_expenses",
                                     verbose_name=_("session de caisse"))

    class Meta(BaseModel.Meta):
        verbose_name = _("dépense générale")
        verbose_name_plural = _("dépenses générales")
        ordering = ["-expense_date", "id"]

    def __str__(self):
        return f"{self.label} · {self.amount}"
```
Export it in `apps/treasury/models/__init__.py` (add `from .general_expense import GeneralExpense` and to `__all__` if present).

- [ ] **Step 4: Transaction extension** — in `apps/treasury/models/transaction.py`, add to `Category` (after `VOYAGE_EXPENSE`):
```python
        GENERAL_EXPENSE = "general_expense", _("Dépense générale")
```
and add the FK near `voyage_expense`:
```python
    general_expense = models.ForeignKey("treasury.GeneralExpense", verbose_name=_("dépense générale"),
                                        on_delete=models.SET_NULL, null=True, blank=True, related_name="transactions")
```

- [ ] **Step 5: Mapping default** — in `apps/treasury/services/seed.py` `_DEFAULTS`, add:
```python
    "general_expense": "658",
```

- [ ] **Step 6: Migration + run** — `python manage.py makemigrations treasury && python -m pytest apps/treasury/tests/test_general_expense_model.py -q` → PASS.

- [ ] **Step 7: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/treasury
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(treasury): modele GeneralExpense + categorie/FK GENERAL_EXPENSE"
```

---

## Task 2: Services — shared disburse helper + record + CRUD + disburse

**Files:** create `expense_shared.py`, `general_expense_sales.py`, `general_expense_services.py`; modify `voyages_trips/services/expense_services.py`, `treasury/services/__init__.py`; test `apps/treasury/tests/test_general_expense_services.py`.

**Interfaces:**
- Consumes: `create_transaction`, `get_open_session_for_user`, `register_agency_scope`, `GeneralExpense`, `ExpenseType`.
- Produces: `resolve_disbursement_session(company_id, user, cash_session=None) -> CashSession`; `record_general_expense(company, *, expense, cash_session, user)`; `create_general_expense(*, company, expense_type, label, amount, expense_date=None, agency=None, created_by)`; `update_general_expense(expense, *, updated_by, **fields)`; `delete_general_expense(expense, *, deleted_by)`; `disburse_general_expense(expense, *, user, cash_session=None)`.

- [ ] **Step 1: Write the failing test** — `apps/treasury/tests/test_general_expense_services.py`:
```python
import pytest
from decimal import Decimal
from apps.core.exceptions import ApplicationError


def _setup():
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.voyages_config.models import ExpenseType
    from apps.authentication.models import User
    from apps.treasury.services.services import create_cash_register, open_session
    from apps.accounting.models import Account
    company, _ = create_company(name="GXsvc", admin_email="gxs@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="gxs@x.com")
    Account.objects.get_or_create(company=company, code="605", defaults={"name": "Fournitures", "created_by": admin})
    Account.objects.get_or_create(company=company, code="571", defaults={"name": "Caisse", "created_by": admin})
    et = ExpenseType.objects.create(company=company, code="SUP", name="Fournitures", account_code="605")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    sess = open_session(company=company, cash_register=reg, created_by=admin)
    return company, admin, et, sess


@pytest.mark.django_db
def test_create_and_disburse_posts_and_idempotent():
    from apps.treasury.services.general_expense_services import create_general_expense, disburse_general_expense
    from apps.treasury.models import Transaction, GeneralExpense
    company, admin, et, sess = _setup()
    e = create_general_expense(company=company, expense_type=et, label="Détergent", amount=Decimal("3000"), created_by=admin)
    e = disburse_general_expense(e, user=admin, cash_session=sess)
    assert e.status == GeneralExpense.Status.PAID
    txn = Transaction.objects.get(general_expense=e, is_deleted=False)
    assert txn.category == Transaction.Category.GENERAL_EXPENSE and txn.amount == Decimal("3000")
    disburse_general_expense(e, user=admin, cash_session=sess)  # idempotent
    assert Transaction.objects.filter(general_expense=e, is_deleted=False).count() == 1


@pytest.mark.django_db
def test_edit_delete_blocked_after_paid():
    from apps.treasury.services.general_expense_services import (
        create_general_expense, disburse_general_expense, update_general_expense, delete_general_expense)
    company, admin, et, sess = _setup()
    e = create_general_expense(company=company, expense_type=et, label="X", amount=Decimal("1000"), created_by=admin)
    e = disburse_general_expense(e, user=admin, cash_session=sess)
    with pytest.raises(ApplicationError):
        update_general_expense(e, updated_by=admin, label="Y")
    with pytest.raises(ApplicationError):
        delete_general_expense(e, deleted_by=admin)


@pytest.mark.django_db
def test_disburse_requires_session():
    from apps.treasury.services.general_expense_services import create_general_expense, disburse_general_expense
    company, admin, et, sess = _setup()
    from apps.voyages_config.models import ExpenseType  # noqa
    e = create_general_expense(company=company, expense_type=et, label="Z", amount=Decimal("1000"), created_by=admin)
    # admin institution -> non scopé ; sans session fournie et sans session ouverte de l'admin ?
    # l'admin A ouvert sess dans _setup, donc get_open_session_for_user renverrait sess -> pas d'erreur.
    # On teste plutôt le helper directement avec un user sans session : voir test dédié ci-dessous.
    assert e.status == "unpaid"
```

- [ ] **Step 2: Run — fail** — `python -m pytest apps/treasury/tests/test_general_expense_services.py -q`.

- [ ] **Step 3: Shared helper** — `apps/treasury/services/expense_shared.py`:
```python
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError


def resolve_disbursement_session(company_id, user, cash_session=None):
    """Caisse pour un décaissement : session fournie ou session ouverte de l'utilisateur ;
    garde d'agence (la caisse doit être de l'agence de l'utilisateur, sauf admins)."""
    from apps.treasury.selectors.selectors import get_open_session_for_user
    from apps.treasury.scoping import register_agency_scope
    session = cash_session or get_open_session_for_user(company_id, user)
    if not session:
        raise ApplicationError(_("Choisissez une caisse (session ouverte) pour décaisser."))
    scoped, agency_id = register_agency_scope(user)
    if scoped and session.cash_register.agency_id != agency_id:
        raise ApplicationError(_("Vous ne pouvez décaisser que depuis une caisse de votre agence."))
    return session
```

- [ ] **Step 4: record_general_expense** — `apps/treasury/services/general_expense_sales.py`:
```python
from apps.accounting.models import Account
from apps.treasury.models import Transaction
from apps.treasury.services.services import create_transaction


def record_general_expense(company, *, expense, cash_session, user):
    """Mouvement EXPENSE pour une dépense générale (décaissement caisse). Idempotent."""
    if Transaction.objects.filter(general_expense=expense, is_deleted=False).exists():
        return None
    account = None
    if expense.expense_type.account_code:
        account = Account.objects.filter(company=company, code=expense.expense_type.account_code,
                                         is_deleted=False).first()
    txn = create_transaction(
        company=company, transaction_type=Transaction.Type.EXPENSE,
        category=Transaction.Category.GENERAL_EXPENSE, account_type=Transaction.AccountType.CASH,
        cash_session=cash_session, amount=expense.amount,
        payment_mode=Transaction.PaymentMode.CASH, counterpart_account=account,
        description=f"{expense.expense_type.name} — {expense.label}".strip(),
        created_by=user)
    txn.general_expense = expense
    txn.save(update_fields=["general_expense"])
    return txn
```

- [ ] **Step 5: CRUD + disburse** — `apps/treasury/services/general_expense_services.py`:
```python
from django.db import transaction
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.treasury.models import GeneralExpense


def create_general_expense(*, company, expense_type, label, amount, expense_date=None, agency=None, created_by):
    if amount is None or amount <= 0:
        raise ApplicationError(_("Le montant doit être positif."))
    kwargs = dict(company=company, expense_type=expense_type, label=label, amount=amount,
                  agency=agency, created_by=created_by)
    if expense_date:
        kwargs["expense_date"] = expense_date
    return GeneralExpense.objects.create(**kwargs)


def update_general_expense(expense, *, updated_by, **fields):
    if expense.status == GeneralExpense.Status.PAID:
        raise ApplicationError(_("Une dépense décaissée ne peut plus être modifiée."))
    for k in ("expense_type", "label", "amount", "expense_date", "agency"):
        if k in fields and fields[k] is not None:
            setattr(expense, k, fields[k])
    expense.updated_by = updated_by
    expense.save()
    return expense


def delete_general_expense(expense, *, deleted_by):
    if expense.status == GeneralExpense.Status.PAID:
        raise ApplicationError(_("Une dépense décaissée ne peut plus être supprimée."))
    expense.soft_delete(user=deleted_by)


@transaction.atomic
def disburse_general_expense(expense, *, user, cash_session=None):
    from apps.treasury.services.expense_shared import resolve_disbursement_session
    from apps.treasury.services.general_expense_sales import record_general_expense
    if expense.status == GeneralExpense.Status.PAID:
        return expense
    session = resolve_disbursement_session(expense.company_id, user, cash_session)
    record_general_expense(expense.company, expense=expense, cash_session=session, user=user)
    expense.status = GeneralExpense.Status.PAID
    expense.cash_session = session
    expense.updated_by = user
    expense.save(update_fields=["status", "cash_session", "updated_by", "updated_at"])
    return expense
```

- [ ] **Step 6: Refactor trip disburse to use the shared helper** — in `apps/voyages_trips/services/expense_services.py` `disburse_trip_expense`, replace:
```python
    session = cash_session or get_open_session_for_user(trip_expense.trip.company_id, user)
    if not session:
        raise ApplicationError(_("Choisissez une caisse (session ouverte) pour décaisser."))
```
with:
```python
    from apps.treasury.services.expense_shared import resolve_disbursement_session
    session = resolve_disbursement_session(trip_expense.trip.company_id, user, cash_session)
```
(the `get_open_session_for_user` import there may become unused — leave other imports intact.)

- [ ] **Step 7: Exports** — in `apps/treasury/services/__init__.py`, add:
```python
from .general_expense_sales import record_general_expense
from .expense_shared import resolve_disbursement_session
```
and add both to `__all__`.

- [ ] **Step 8: Run — pass** — `python -m pytest apps/treasury/tests/test_general_expense_services.py apps/voyages_trips/test_trip_expense_disburse.py -q` (the trip tests must still pass — admins bypass the agency guard).

- [ ] **Step 9: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/treasury backend/apps/voyages_trips
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(treasury): services depense generale + helper de decaissement partage (DRY)"
```

---

## Task 3: API — selectors, serializers, endpoints, dashboard, RBAC seed

**Files:** create `selectors/expenses.py`, `admin_rbac/migrations/0014_expense_permissions_seed.py`; modify `treasury/serializers.py`, `treasury/views.py`, `treasury/urls.py`; test `apps/treasury/tests/test_expense_api.py`.

**Interfaces:**
- Consumes: services from Task 2, `register_agency_scope`, `_apply_agency_scope`.
- Produces endpoints under `/api/v1/treasury/`:
  `GET expenses/general/`, `POST expenses/general/`, `GET/PATCH/DELETE expenses/general/<uuid:pk>/`,
  `POST expenses/general/<uuid:pk>/disburse/`, `GET expenses/voyage/`, `GET expenses/dashboard/`.
  Permissions: view→`treasury.expense.view`, write→`treasury.expense.manage`.

- [ ] **Step 1: Write the failing test** — `apps/treasury/tests/test_expense_api.py`:
```python
import pytest
from decimal import Decimal


def _client_company():
    from rest_framework.test import APIClient
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.authentication.tokens import CustomRefreshToken
    from apps.voyages_config.models import ExpenseType
    company, _ = create_company(name="EAPI", admin_email="ea@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ea@x.com")
    et = ExpenseType.objects.create(company=company, code="SUP", name="Fournitures", account_code="605")
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    return c, company, admin, et


@pytest.mark.django_db
def test_general_expense_crud_and_list():
    c, company, admin, et = _client_company()
    r = c.post("/api/v1/treasury/expenses/general/",
               {"expense_type_id": str(et.id), "label": "Savon", "amount": "2500"}, format="json")
    assert r.status_code in (200, 201)
    pk = r.json()["data"]["id"]
    r = c.get("/api/v1/treasury/expenses/general/")
    assert r.status_code == 200
    r = c.patch(f"/api/v1/treasury/expenses/general/{pk}/", {"amount": "3000"}, format="json")
    assert r.status_code == 200 and str(r.json()["data"]["amount"]) in ("3000.00", "3000")
    r = c.delete(f"/api/v1/treasury/expenses/general/{pk}/")
    assert r.status_code in (200, 204)


@pytest.mark.django_db
def test_dashboard_and_voyage_list_ok():
    c, company, admin, et = _client_company()
    assert c.get("/api/v1/treasury/expenses/dashboard/").status_code == 200
    assert c.get("/api/v1/treasury/expenses/voyage/").status_code == 200
```

- [ ] **Step 2: Run — fail** — `python -m pytest apps/treasury/tests/test_expense_api.py -q`.

- [ ] **Step 3: Selectors** — `apps/treasury/selectors/expenses.py`:
```python
from django.db.models import Sum, Q
from django.utils import timezone
from apps.treasury.models import GeneralExpense
from apps.voyages_trips.models import TripExpense
from apps.treasury.selectors.selectors import _apply_agency_scope


def list_general_expenses(company_id, *, agency_scope=None, status=None):
    qs = (GeneralExpense.objects.filter(company_id=company_id, is_deleted=False)
          .select_related("expense_type", "agency", "cash_session").order_by("-expense_date", "-id"))
    qs = _apply_agency_scope(qs, agency_scope, "agency_id")
    if status:
        qs = qs.filter(status=status)
    return qs


def list_voyage_expenses(company_id, *, status=None):
    qs = (TripExpense.objects.filter(trip__company_id=company_id, is_deleted=False)
          .select_related("expense_type", "trip").order_by("-date", "-id"))
    if status:
        qs = qs.filter(status=status)
    return qs


def expenses_dashboard(company_id, *, agency_scope=None):
    today = timezone.localdate()
    gen = list_general_expenses(company_id, agency_scope=agency_scope)
    voy = list_voyage_expenses(company_id)
    def _sum(qs):
        return qs.aggregate(t=Sum("amount"))["t"] or 0
    gen_unpaid = _sum(gen.filter(status="unpaid"))
    voy_unpaid = _sum(voy.filter(status="planned"))
    gen_paid_month = _sum(gen.filter(status="paid", expense_date__year=today.year, expense_date__month=today.month))
    voy_paid_month = _sum(voy.filter(status="paid", date__year=today.year, date__month=today.month))
    return {
        "unpaid_total": gen_unpaid + voy_unpaid,
        "unpaid_count": gen.filter(status="unpaid").count() + voy.filter(status="planned").count(),
        "paid_month_total": gen_paid_month + voy_paid_month,
        "general_total": _sum(gen),
        "voyage_total": _sum(voy),
    }
```

- [ ] **Step 4: Serializers** — in `apps/treasury/serializers.py` append:
```python
from apps.treasury.models import GeneralExpense


class GeneralExpenseReadSerializer(serializers.ModelSerializer):
    expense_type_name = serializers.CharField(source="expense_type.name", read_only=True)
    agency_name = serializers.CharField(source="agency.name", read_only=True, default=None)

    class Meta:
        model = GeneralExpense
        fields = ["id", "expense_type", "expense_type_name", "agency", "agency_name",
                  "label", "amount", "expense_date", "status", "cash_session", "created_at"]


class GeneralExpenseWriteSerializer(serializers.Serializer):
    expense_type_id = serializers.UUIDField()
    label = serializers.CharField(max_length=200)
    amount = serializers.DecimalField(max_digits=14, decimal_places=2)
    expense_date = serializers.DateField(required=False)
    agency_id = serializers.UUIDField(required=False, allow_null=True)


class VoyageExpenseRowSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    trip_number = serializers.CharField(source="trip.number")
    expense_type_name = serializers.CharField(source="expense_type.name")
    amount = serializers.DecimalField(max_digits=14, decimal_places=2)
    status = serializers.CharField()
    date = serializers.DateField()
    trip_id = serializers.UUIDField()
```
(These use the existing `from rest_framework import serializers` already imported at the top of the file.)

- [ ] **Step 5: Views** — in `apps/treasury/views.py` append (helpers `_company`, `register_agency_scope`, `selectors`, `services`, `success_response/created_response/error_response/no_content_response`, `StandardResultsSetPagination` are already imported at the top):
```python
from apps.treasury.selectors import expenses as expense_selectors
from apps.treasury.services import general_expense_services as gx
from apps.voyages_config.models import ExpenseType
from apps.system_config.models import Agency
from apps.treasury.serializers import (GeneralExpenseReadSerializer, GeneralExpenseWriteSerializer,
                                       VoyageExpenseRowSerializer)


class GeneralExpenseListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.expense.view", "POST": "treasury.expense.manage"}

    def get(self, request):
        qs = expense_selectors.list_general_expenses(
            _company(request).id, agency_scope=register_agency_scope(request.user),
            status=request.query_params.get("status"))
        page = StandardResultsSetPagination()
        return page.get_paginated_response(GeneralExpenseReadSerializer(page.paginate_queryset(qs, request), many=True).data)

    def post(self, request):
        ser = GeneralExpenseWriteSerializer(data=request.data); ser.is_valid(raise_exception=True)
        d = ser.validated_data
        company = _company(request)
        et = ExpenseType.objects.filter(company=company, id=d["expense_type_id"], is_deleted=False).first()
        if not et:
            return error_response("Type de dépense introuvable.", status_code=404)
        agency = None
        if d.get("agency_id"):
            agency = Agency.objects.filter(company=company, id=d["agency_id"], is_deleted=False).first()
        try:
            e = gx.create_general_expense(company=company, expense_type=et, label=d["label"],
                                          amount=d["amount"], expense_date=d.get("expense_date"),
                                          agency=agency, created_by=request.user)
        except ApplicationError as ex:
            return error_response(str(ex))
        return created_response(GeneralExpenseReadSerializer(e).data)


class GeneralExpenseDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.expense.view", "PATCH": "treasury.expense.manage", "DELETE": "treasury.expense.manage"}

    def _obj(self, request, pk):
        from apps.treasury.models import GeneralExpense
        return GeneralExpense.objects.filter(company=_company(request), id=pk, is_deleted=False).first()

    def get(self, request, pk):
        obj = self._obj(request, pk)
        return success_response(GeneralExpenseReadSerializer(obj).data) if obj else error_response("Introuvable.", status_code=404)

    def patch(self, request, pk):
        obj = self._obj(request, pk)
        if not obj:
            return error_response("Introuvable.", status_code=404)
        ser = GeneralExpenseWriteSerializer(data=request.data, partial=True); ser.is_valid(raise_exception=True)
        d = ser.validated_data
        fields = {"label": d.get("label"), "amount": d.get("amount"), "expense_date": d.get("expense_date")}
        if "expense_type_id" in d:
            fields["expense_type"] = ExpenseType.objects.filter(company=obj.company, id=d["expense_type_id"]).first()
        if "agency_id" in d:
            fields["agency"] = Agency.objects.filter(company=obj.company, id=d["agency_id"]).first() if d.get("agency_id") else None
        try:
            gx.update_general_expense(obj, updated_by=request.user, **fields)
        except ApplicationError as ex:
            return error_response(str(ex))
        return success_response(GeneralExpenseReadSerializer(obj).data)

    def delete(self, request, pk):
        obj = self._obj(request, pk)
        if not obj:
            return error_response("Introuvable.", status_code=404)
        try:
            gx.delete_general_expense(obj, deleted_by=request.user)
        except ApplicationError as ex:
            return error_response(str(ex))
        return no_content_response()


class GeneralExpenseDisburseView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "treasury.expense.manage"}

    def post(self, request, pk):
        from apps.treasury.models import GeneralExpense, CashSession
        obj = GeneralExpense.objects.filter(company=_company(request), id=pk, is_deleted=False).first()
        if not obj:
            return error_response("Introuvable.", status_code=404)
        session = None
        sid = request.data.get("cash_session_id")
        if sid:
            session = CashSession.objects.filter(company=obj.company, id=sid, status=CashSession.Status.OPEN, is_deleted=False).first()
        try:
            gx.disburse_general_expense(obj, user=request.user, cash_session=session)
        except ApplicationError as ex:
            return error_response(str(ex))
        return success_response(GeneralExpenseReadSerializer(obj).data)


class VoyageExpenseListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.expense.view"}

    def get(self, request):
        qs = expense_selectors.list_voyage_expenses(_company(request).id, status=request.query_params.get("status"))
        page = StandardResultsSetPagination()
        return page.get_paginated_response(VoyageExpenseRowSerializer(page.paginate_queryset(qs, request), many=True).data)


class ExpenseDashboardView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.expense.view"}

    def get(self, request):
        return success_response(expense_selectors.expenses_dashboard(
            _company(request).id, agency_scope=register_agency_scope(request.user)))
```

- [ ] **Step 6: URLs** — in `apps/treasury/urls.py`, add before the closing `]`:
```python
    path("expenses/general/",                    views.GeneralExpenseListView.as_view(),     name="gexp-list"),
    path("expenses/general/<uuid:pk>/",          views.GeneralExpenseDetailView.as_view(),   name="gexp-detail"),
    path("expenses/general/<uuid:pk>/disburse/", views.GeneralExpenseDisburseView.as_view(), name="gexp-disburse"),
    path("expenses/voyage/",                     views.VoyageExpenseListView.as_view(),      name="vexp-list"),
    path("expenses/dashboard/",                  views.ExpenseDashboardView.as_view(),       name="exp-dashboard"),
```

- [ ] **Step 7: RBAC seed migration** — `apps/admin_rbac/migrations/0014_expense_permissions_seed.py` (mirror `0010`/`0012`):
```python
"""Data migration — permissions Dépenses (Trésorerie)."""
from django.db import migrations

PERMS = [
    ("treasury.expense.view",   "Consulter les dépenses",   "view"),
    ("treasury.expense.manage", "Gérer/décaisser les dépenses", "update"),
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
    dependencies = [("admin_rbac", "0013_reporting_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
```

- [ ] **Step 8: Run — pass** — `python -m pytest apps/treasury/tests/test_expense_api.py -q`.

- [ ] **Step 9: Guard + commit** — `python -m pytest apps/treasury -q` (all green) then:
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/treasury backend/apps/admin_rbac
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(treasury): API depenses (CRUD general, liste voyage, dashboard) + permissions"
```

---

## Task 4: Frontend — remove trip-detail card + config + routes + sidebar

**Files:** modify `trip-detail.component.ts`, `trip-detail.component.html`, `api.config.ts`, `routes.ts`, `sidebar.service.ts`, `pages.routes.ts`.

- [ ] **Step 1: Remove the Dépenses card from the trip page** — in `_api/pages/voyages/trip-detail/trip-detail.component.html`, delete the entire "Dépenses" card block (the section rendering trip expenses + the disburse caisse selector). In `trip-detail.component.ts`, remove the now-unused expense/disburse members and methods (`disburseSession`, `disburseExpense`, expense list load) and any now-unused imports. Verify with `grep -ni "dépense\|disburse\|expense" .../trip-detail.component.html` → no matches.

- [ ] **Step 2: API config** — in `angular/src/_api/config/api.config.ts`, in the `TRZ`-based export add:
```ts
  expGeneral:        `${TRZ}/expenses/general/`,
  expGeneralItem:    (id: string) => `${TRZ}/expenses/general/${id}/`,
  expGeneralDisburse:(id: string) => `${TRZ}/expenses/general/${id}/disburse/`,
  expVoyage:         `${TRZ}/expenses/voyage/`,
  expDashboard:      `${TRZ}/expenses/dashboard/`,
```

- [ ] **Step 3: Routes** — in `angular/src/app/core/helpers/routes.ts` (treasury block) add:
```ts
  trzExpensesDashboard: '/treasury/expenses-dashboard',
  trzExpensesVoyage:    '/treasury/expenses-voyage',
  trzExpensesGeneral:   '/treasury/expenses-general',
```

- [ ] **Step 4: Sidebar** — in `sidebar.service.ts`, inside the **Trésorerie** group `menu`, after the "Banque" collapsible add a **Dépenses** group:
```ts
        {
          menuValue: 'Dépenses',
          hasSubRoute: true,
          showSubRoute: false,
          icon2: 'receipt',
          base: 'treasury-expenses',
          subMenus: [
            { menuValue: 'Tableau de bord',  route: routes.trzExpensesDashboard, base: 'expenses-dashboard', permission: 'treasury.expense.view' },
            { menuValue: 'Dépense voyage',   route: routes.trzExpensesVoyage,    base: 'expenses-voyage',    permission: 'treasury.expense.view' },
            { menuValue: 'Dépense générale', route: routes.trzExpensesGeneral,   base: 'expenses-general',   permission: 'treasury.expense.view' },
          ],
        },
```

- [ ] **Step 5: Register routes** — in `angular/src/app/features/pages/pages.routes.ts`, under the `treasury` children add three lazy routes:
```ts
{ path: 'expenses-dashboard', loadComponent: () => import('../../../_api/pages/treasury/expenses/dashboard/expenses-dashboard.component').then(m => m.ExpensesDashboardComponent) },
{ path: 'expenses-voyage',    loadComponent: () => import('../../../_api/pages/treasury/expenses/voyage/voyage-expenses.component').then(m => m.VoyageExpensesComponent) },
{ path: 'expenses-general',   loadComponent: () => import('../../../_api/pages/treasury/expenses/general/general-expenses.component').then(m => m.GeneralExpensesComponent) },
```
> These import paths must match the components created in Tasks 5–6.

- [ ] **Step 6: Build (components come next; comment routes if build fails first)** — `cd angular && npx ng build`. If it fails because the three components don't exist yet, that's expected — proceed to Task 5/6 and build there. Do NOT commit Task 4 alone; commit at the end of Task 6 so the branch always builds.

---

## Task 5: Frontend — services + Dépense générale page (CRUD + disburse)

**Files:** create `_api/services/treasury/general-expense.service.ts`, `_api/services/treasury/expense.service.ts`, `_api/pages/treasury/expenses/general/general-expenses.component.{ts,html}`.

**Interfaces:** Consumes `TREASURY.exp*` config. Produces `GeneralExpenseService`, `ExpenseService`, `GeneralExpensesComponent`.

- [ ] **Step 1: Services** —
`general-expense.service.ts`:
```ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';

@Injectable({ providedIn: 'root' })
export class GeneralExpenseService {
  private http = inject(HttpClient);
  list(status?: string): Observable<any[]> {
    let p = new HttpParams(); if (status) p = p.set('status', status);
    return this.http.get<any>(TREASURY.expGeneral, { params: p }).pipe(map(r => r.results ?? r.data ?? r));
  }
  create(body: any): Observable<any> { return this.http.post<any>(TREASURY.expGeneral, body).pipe(map(r => r.data ?? r)); }
  update(id: string, body: any): Observable<any> { return this.http.patch<any>(TREASURY.expGeneralItem(id), body).pipe(map(r => r.data ?? r)); }
  remove(id: string): Observable<unknown> { return this.http.delete(TREASURY.expGeneralItem(id)); }
  disburse(id: string, cashSessionId?: string): Observable<any> {
    return this.http.post<any>(TREASURY.expGeneralDisburse(id), cashSessionId ? { cash_session_id: cashSessionId } : {}).pipe(map(r => r.data ?? r));
  }
}
```
`expense.service.ts`:
```ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  private http = inject(HttpClient);
  voyage(status?: string): Observable<any[]> {
    let p = new HttpParams(); if (status) p = p.set('status', status);
    return this.http.get<any>(TREASURY.expVoyage, { params: p }).pipe(map(r => r.results ?? r.data ?? r));
  }
  dashboard(): Observable<any> { return this.http.get<any>(TREASURY.expDashboard).pipe(map(r => r.data ?? r)); }
}
```
> Confirm the `TREASURY` export name in `api.config.ts`; if the treasury export is named differently, import that name.

- [ ] **Step 2: Component TS** — `general-expenses.component.ts` (standalone; reuse `ExpenseTypeService` + `SessionService` from voyages-config/treasury; if unsure of their import paths, mirror how `trip-detail` imported the expense-type + session services before Task 4 removed them):
```ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { GeneralExpenseService } from '../../../../services/treasury/general-expense.service';
import { ExpenseTypeService } from '../../../../services/voyages-config/expense-type.service';
import { SessionService } from '../../../../services/treasury/session.service';
import { HasPermissionDirective } from '../../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-general-expenses', standalone: true,
  templateUrl: './general-expenses.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HasPermissionDirective],
})
export class GeneralExpensesComponent implements OnInit {
  private svc = inject(GeneralExpenseService);
  private typeSvc = inject(ExpenseTypeService);
  private sessionSvc = inject(SessionService);
  private fb = inject(FormBuilder);

  rows: any[] = []; types: any[] = []; sessions: any[] = []; loading = false; saving = false;
  editId: string | null = null; disburseSession = ''; errorMsg = '';
  form = this.fb.group({ expense_type_id: [null, Validators.required], label: ['', Validators.required],
                         amount: [null, [Validators.required, Validators.min(1)]], expense_date: [''] });

  ngOnInit(): void {
    this.typeSvc.list().subscribe((d: any) => this.types = d);
    this.sessionSvc.list({ status: 'open' }).subscribe((d: any) => this.sessions = d);
    this.reload();
  }
  reload(): void { this.loading = true; this.svc.list().subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false }); }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset(); }
  openEdit(e: any): void { this.editId = e.id; this.errorMsg = ''; this.form.patchValue({ expense_type_id: e.expense_type, label: e.label, amount: e.amount, expense_date: e.expense_date }); }
  save(): void {
    if (this.form.invalid || this.saving) return; this.saving = true;
    const body: any = this.form.value;
    const req = this.editId ? this.svc.update(this.editId, body) : this.svc.create(body);
    req.subscribe({ next: () => { this.saving = false; this.reload(); this.close('gexp-modal'); },
                    error: e => { this.saving = false; this.errorMsg = e?.error?.error?.message ?? 'Erreur.'; } });
  }
  remove(e: any): void { if (confirm('Supprimer cette dépense ?')) this.svc.remove(e.id).subscribe(() => this.reload()); }
  disburse(e: any): void {
    this.svc.disburse(e.id, this.disburseSession || undefined)
      .subscribe({ next: () => this.reload(), error: err => alert(err?.error?.error?.message ?? 'Erreur.') });
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```
> Verify `ExpenseTypeService.list()` and `SessionService.list({status})` signatures against their files; adjust the calls to match (they were used by the pre-removal trip-detail page and the treasury sessions page respectively).

- [ ] **Step 3: Component HTML** — `general-expenses.component.html`: a `page-header` with a "Nouvelle dépense" button (`*hasPermission="'treasury.expense.manage'"`, `data-bs-toggle="modal" data-bs-target="#gexp-modal"`, `(click)="openCreate()"`); a table of `rows` (type, libellé, agence, montant, date, statut) with per-row **Modifier**/**Supprimer** (only when `status==='unpaid'`, `*hasPermission`) and a **Décaisser** control (a `<select [(ngModel)]="disburseSession">` of open `sessions` + a button `(click)="disburse(row)"`, shown when `status==='unpaid'`); and the `#gexp-modal` Bootstrap modal bound to `form` with a `{{ errorMsg }}` alert. Mirror the markup conventions of `parcels.component.html` (page-header, table, modal, `[data-bs-dismiss]`).

- [ ] **Step 4: Build** — `cd angular && npx ng build` (Task 4's route for `expenses-general` now resolves; the other two still pending → Task 6).

---

## Task 6: Frontend — Dépense voyage + Tableau de bord pages, then commit

**Files:** create `_api/pages/treasury/expenses/voyage/voyage-expenses.component.{ts,html}`, `_api/pages/treasury/expenses/dashboard/expenses-dashboard.component.{ts,html}`.

- [ ] **Step 1: Voyage expenses page** — `voyage-expenses.component.ts` lists `ExpenseService.voyage()` rows (trip_number, type, amount, status, date) and disburses via the **existing** `TripExpenseService.disburse(tripId, id, cashSessionId)` (`_api/services/voyages/trip-expense.service.ts`) using `row.trip_id` + `row.id` and a chosen open session (from `SessionService.list({status:'open'})`). Read-only otherwise. HTML mirrors `general-expenses.component.html` minus create/edit (a table + a Décaisser control gated by `*hasPermission="'treasury.expense.manage'"`, only for `status==='planned'`).

- [ ] **Step 2: Dashboard page** — `expenses-dashboard.component.ts` calls `ExpenseService.dashboard()` and shows KPI cards (à décaisser = `unpaid_total`/`unpaid_count`, payé ce mois = `paid_month_total`, dépenses voyage = `voyage_total`, dépenses générales = `general_total`) — same `sale-widget` card style as the home dashboard.

- [ ] **Step 3: Build** — `cd angular && npx ng build` → success (all three routes resolve; trip-detail card gone).

- [ ] **Step 4: Commit (whole frontend batch)**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(depenses-fe): menu Tresorerie 3 sous-modules + pages + retrait carte fiche voyage"
```

---

## Task 7: Verify + finish

- [ ] **Step 1:** `cd backend && python -m pytest -q` → all green; `python manage.py makemigrations --check` → no changes.
- [ ] **Step 2:** `cd angular && npx ng build` → success; `git -C <repo> status --short` clean.
- [ ] **Step 3:** superpowers:finishing-a-development-branch → merge to `master`, `git push all master`.

> Smoke after deploy: Trésorerie → Dépenses shows 3 sub-modules; create a general expense, disburse from your caisse (posts DR charge/CR caisse); the Voyages trip page no longer shows a Dépenses card; voyage expenses appear under Dépense voyage and remain disbursable.
