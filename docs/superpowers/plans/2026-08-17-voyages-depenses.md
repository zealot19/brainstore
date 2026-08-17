# Dépenses voyage — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Manage per-voyage expenses (ration, carburant, péage, autres) via a configurable barème applied to voyages, disbursed from a caisse with treasury + OHADA accounting postings.

**Architecture:** New configurable `ExpenseType` and `ExpenseSchedule` (barème keyed on Route × FareClass) in `voyages_config`; a `TripExpense` in `voyages_trips` copied from the barème at trip creation and disbursed from an open cash session; a treasury bridge that posts an EXPENSE movement whose OHADA counterpart is the expense type's configured charge account (via a new `Transaction.counterpart_account` override).

**Tech Stack:** Django 5.1 + DRF, pytest (`pytest.ini`, settings `config.settings.local`), Angular 17 standalone. Run tests with `python -m pytest` from `backend/`.

**Spec:** `docs/superpowers/specs/2026-08-17-voyages-depenses-design.md`

## Global Constraints
- Git repo root is `ERP-master/`; run `git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master ...`. Commit as shimi, **no Claude co-author trailer**.
- Backend tests: `cd backend && source ../env/bin/activate && python -m pytest`.
- Money in `DecimalField(max_digits=14, decimal_places=2)`. Company-scoped config uses `voyages_config.models.base._CompanyScoped` (nullable company). Business models use `apps.core.models.BaseModel`.
- Barème key = **(Route × FareClass)**. Expense `account_code` must be an existing class-6 (`account_type="expense"`) account in the company chart. Disbursement requires an **open cash session**.
- Before merging: `git status --short` (no stray files) + `python manage.py makemigrations --check`.

---

## File Structure

- `backend/apps/voyages_config/models/expense.py` — `ExpenseType`, `ExpenseSchedule`, `ExpenseScheduleLine`.
- `backend/apps/voyages_config/services/expense_seed.py` — `seed_expense_types`.
- `backend/apps/voyages_config/config_api/serializers.py` — add expense serializers (modify).
- `backend/apps/voyages_config/config_api/views.py` — add expense views (modify).
- `backend/apps/voyages_config/urls.py` — routes (modify).
- `backend/apps/voyages_trips/models/trip_expense.py` — `TripExpense`.
- `backend/apps/voyages_trips/services/expense_services.py` — copy-from-barème + disburse.
- `backend/apps/voyages_trips/views.py` / `urls.py` — TripExpense endpoints (modify).
- `backend/apps/treasury/models/transaction.py` — `counterpart_account`, `voyage_expense`, `VOYAGE_EXPENSE` (modify).
- `backend/apps/treasury/services/services.py` — `create_transaction(counterpart_account=...)` (modify).
- `backend/apps/treasury/services/accounting_bridge.py` — prefer override (modify).
- `backend/apps/treasury/services/trip_expense_sales.py` — `record_trip_expense`.
- `backend/apps/system_config/services/company_services.py` — bootstrap seed call (modify).
- `backend/apps/admin_rbac/migrations/` — permissions data-migration.
- Angular: `_api/config/api.config.ts`, `_api/models/voyages-config.models.ts`, `_api/models/voyages.models.ts`, services + page components + `routes.ts` + `pages.routes.ts` + `sidebar.service.ts`.

---

## Task 1: ExpenseType config (model + seed + config API + bootstrap)

**Files:**
- Create: `backend/apps/voyages_config/models/expense.py`
- Modify: `backend/apps/voyages_config/models/__init__.py`
- Create: `backend/apps/voyages_config/services/expense_seed.py`
- Modify: `backend/apps/voyages_config/config_api/serializers.py`, `config_api/views.py`, `urls.py`
- Modify: `backend/apps/system_config/services/company_services.py`
- Test: `backend/apps/voyages_config/test_expense_types.py`

**Interfaces:**
- Produces: `ExpenseType(_CompanyScoped)` fields `code, name, account_code`; `seed_expense_types(company, created_by=None) -> int`; endpoints `GET/POST /api/v1/transport/expense-types/`, `GET/PATCH/DELETE .../<uuid:pk>/`.

- [ ] **Step 1: Write the failing test**

`backend/apps/voyages_config/test_expense_types.py`:
```python
import pytest
from apps.voyages_config.models import ExpenseType
from apps.voyages_config.services.expense_seed import seed_expense_types


@pytest.mark.django_db
def test_seed_expense_types_idempotent_and_defaults():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Dep Co", admin_email="dep@x.com",
                                admin_first_name="A", admin_last_name="B")
    # bootstrap already seeded; second call adds nothing
    before = ExpenseType.objects.filter(company=company).count()
    assert seed_expense_types(company) == 0
    assert ExpenseType.objects.filter(company=company).count() == before
    codes = set(ExpenseType.objects.filter(company=company).values_list("code", flat=True))
    assert {"CARBURANT", "PEAGE", "RATION_CH", "RATION_CV", "AUTRES"} <= codes
    assert ExpenseType.objects.get(company=company, code="CARBURANT").account_code == "604"
```

- [ ] **Step 2: Run test — expect failure**

Run: `cd backend && python -m pytest apps/voyages_config/test_expense_types.py -q`
Expected: FAIL (ImportError: cannot import name `ExpenseType`).

- [ ] **Step 3: Create the model**

`backend/apps/voyages_config/models/expense.py`:
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class ExpenseType(_CompanyScoped):
    code         = models.CharField(_("code"), max_length=30)
    name         = models.CharField(_("nom"), max_length=150)
    account_code = models.CharField(_("compte de charge (OHADA)"), max_length=10, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type de dépense")
        verbose_name_plural = _("types de dépense")
        ordering = ["code"]

    def __str__(self):
        return f"{self.code} — {self.name}"
```
Add to `backend/apps/voyages_config/models/__init__.py`:
```python
from .expense import ExpenseType  # noqa
```

- [ ] **Step 4: Create the seed**

`backend/apps/voyages_config/services/expense_seed.py`:
```python
from apps.voyages_config.models import ExpenseType

# (code, nom, compte de charge OHADA classe 6)
_DEFAULTS = [
    ("CARBURANT", "Carburant", "604"),
    ("PEAGE",     "Péage",     "658"),
    ("RATION_CH", "Ration chauffeur", "637"),
    ("RATION_CV", "Ration convoyeur", "637"),
    ("AUTRES",    "Autres",    "658"),
]


def seed_expense_types(company, created_by=None) -> int:
    created = 0
    for code, name, account_code in _DEFAULTS:
        if ExpenseType.objects.filter(company=company, code=code).exists():
            continue
        ExpenseType.objects.create(company=company, code=code, name=name,
                                   account_code=account_code, created_by=created_by)
        created += 1
    return created
```

- [ ] **Step 5: Wire the bootstrap**

In `backend/apps/system_config/services/company_services.py`, after the `seed_crew_member_types` call inside `_bootstrap_company`:
```python
    from apps.voyages_config.services.expense_seed import seed_expense_types
    seed_expense_types(company, created_by=created_by)
```

- [ ] **Step 6: Make the migration**

Run: `cd backend && python manage.py makemigrations voyages_config`
Expected: a migration creating `ExpenseType`.

- [ ] **Step 7: Run the test — expect pass**

Run: `python -m pytest apps/voyages_config/test_expense_types.py -q`
Expected: PASS.

- [ ] **Step 8: Add the config API (serializers)**

In `backend/apps/voyages_config/config_api/serializers.py` add (import `ExpenseType` from `apps.voyages_config.models`):
```python
class ExpenseTypeRead(serializers.ModelSerializer):
    class Meta:
        model = ExpenseType
        fields = ["id", "code", "name", "account_code", "is_active"]


class ExpenseTypeWrite(serializers.ModelSerializer):
    class Meta:
        model = ExpenseType
        fields = ["code", "name", "account_code", "is_active"]

    def validate_account_code(self, value):
        if not value:
            return value
        from apps.accounting.models import Account
        request = self.context.get("request")
        company_id = getattr(getattr(request, "user", None), "company_id", None)
        qs = Account.objects.filter(code=value, account_type="expense", is_deleted=False)
        if company_id:
            qs = qs.filter(company_id=company_id)
        if not qs.exists():
            raise serializers.ValidationError(
                _("Compte de charge %(c)s introuvable dans le plan comptable.") % {"c": value})
        return value
```

- [ ] **Step 9: Add the config API (views + urls)**

In `config_api/views.py` add `ExpenseType` to the models import and register:
```python
ExpenseTypeListView, ExpenseTypeDetailView = _pair(
    ExpenseType, S.ExpenseTypeRead, S.ExpenseTypeWrite, unique="code", search=("code", "name"))
```
In `urls.py`:
```python
    path("expense-types/",           v.ExpenseTypeListView.as_view()),
    path("expense-types/<uuid:pk>/", v.ExpenseTypeDetailView.as_view()),
```

- [ ] **Step 10: Add an API test and run the suite**

Append to `test_expense_types.py`:
```python
@pytest.mark.django_db
def test_invalid_account_code_rejected():
    from apps.voyages_config.config_api.serializers import ExpenseTypeWrite
    s = ExpenseTypeWrite(data={"code": "X", "name": "X", "account_code": "999999"})
    assert not s.is_valid()
    assert "account_code" in s.errors
```
Run: `python -m pytest apps/voyages_config/test_expense_types.py -q` → PASS.

- [ ] **Step 11: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_config backend/apps/system_config/services/company_services.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(voyages-config): type de depense configurable + seed + bootstrap"
```

---

## Task 2: Barème de dépenses (ExpenseSchedule + lines + nested API)

**Files:**
- Modify: `backend/apps/voyages_config/models/expense.py`, `models/__init__.py`
- Modify: `config_api/serializers.py`, `config_api/views.py`, `urls.py`
- Test: `backend/apps/voyages_config/test_expense_schedule.py`

**Interfaces:**
- Consumes: `ExpenseType` (Task 1), `voyages_config.Route`, `voyages_config.FareClass`.
- Produces: `ExpenseSchedule(_CompanyScoped)` `route, fare_class`; `ExpenseScheduleLine` `schedule, expense_type, amount`; endpoints `GET/POST /api/v1/transport/expense-schedules/`, `GET/PATCH/DELETE .../<uuid:pk>/` with nested `lines`.

- [ ] **Step 1: Write the failing test**

`backend/apps/voyages_config/test_expense_schedule.py`:
```python
import pytest
from decimal import Decimal
from apps.voyages_config.models import ExpenseSchedule, ExpenseScheduleLine, ExpenseType, Route, FareClass


@pytest.mark.django_db
def test_schedule_holds_lines():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Bar Co", admin_email="bar@x.com",
                                admin_first_name="A", admin_last_name="B")
    route = Route.objects.create(company=company, code="R1", name="A-B")
    fc = FareClass.objects.filter(company=company).first() or \
        FareClass.objects.create(company=company, code="CL", name="Classic")
    et = ExpenseType.objects.get(company=company, code="CARBURANT")
    sch = ExpenseSchedule.objects.create(company=company, route=route, fare_class=fc)
    ExpenseScheduleLine.objects.create(schedule=sch, expense_type=et, amount=Decimal("15000"))
    assert sch.lines.count() == 1
    assert sch.lines.first().amount == Decimal("15000")
```
> Note: check `Route` required fields first (`grep -n "models\." backend/apps/voyages_config/models/network.py`); adjust the `Route.objects.create(...)` kwargs in the test to match (e.g. origin/destination if non-null).

- [ ] **Step 2: Run test — expect failure**

Run: `python -m pytest apps/voyages_config/test_expense_schedule.py -q` → FAIL (ImportError).

- [ ] **Step 3: Add the models**

Append to `backend/apps/voyages_config/models/expense.py`:
```python
class ExpenseSchedule(_CompanyScoped):
    route      = models.ForeignKey("voyages_config.Route", verbose_name=_("trajet"),
                                   on_delete=models.CASCADE, related_name="expense_schedules")
    fare_class = models.ForeignKey("voyages_config.FareClass", verbose_name=_("catégorie tarifaire"),
                                   on_delete=models.CASCADE, related_name="expense_schedules")

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("barème de dépenses")
        verbose_name_plural = _("barèmes de dépenses")
        unique_together = [("company", "route", "fare_class")]
        ordering = ["route", "fare_class"]


class ExpenseScheduleLine(models.Model):
    schedule     = models.ForeignKey(ExpenseSchedule, on_delete=models.CASCADE, related_name="lines")
    expense_type = models.ForeignKey("voyages_config.ExpenseType", on_delete=models.PROTECT)
    amount       = models.DecimalField(_("montant"), max_digits=14, decimal_places=2)

    class Meta:
        ordering = ["id"]
```
Export both in `models/__init__.py`:
```python
from .expense import ExpenseType, ExpenseSchedule, ExpenseScheduleLine  # noqa
```

- [ ] **Step 4: Make the migration + run the model test**

Run: `python manage.py makemigrations voyages_config && python -m pytest apps/voyages_config/test_expense_schedule.py -q` → PASS.

- [ ] **Step 5: Add nested serializers**

In `config_api/serializers.py`:
```python
class ExpenseScheduleLineSerializer(serializers.ModelSerializer):
    expense_type_name = serializers.CharField(source="expense_type.name", read_only=True)

    class Meta:
        model = ExpenseScheduleLine
        fields = ["id", "expense_type", "expense_type_name", "amount"]


class ExpenseScheduleSerializer(serializers.ModelSerializer):
    lines = ExpenseScheduleLineSerializer(many=True, read_only=True)
    route_name = serializers.CharField(source="route.name", read_only=True)
    fare_class_name = serializers.CharField(source="fare_class.name", read_only=True)

    class Meta:
        model = ExpenseSchedule
        fields = ["id", "route", "route_name", "fare_class", "fare_class_name", "is_active", "lines"]


class ExpenseScheduleWriteSerializer(serializers.ModelSerializer):
    lines = ExpenseScheduleLineSerializer(many=True)

    class Meta:
        model = ExpenseSchedule
        fields = ["route", "fare_class", "is_active", "lines"]

    def _sync_lines(self, schedule, lines):
        schedule.lines.all().delete()
        for ln in lines:
            ExpenseScheduleLine.objects.create(schedule=schedule, **ln)

    def create(self, validated):
        lines = validated.pop("lines", [])
        schedule = ExpenseSchedule.objects.create(**validated)
        self._sync_lines(schedule, lines)
        return schedule

    def update(self, instance, validated):
        lines = validated.pop("lines", None)
        for k, v in validated.items():
            setattr(instance, k, v)
        instance.save()
        if lines is not None:
            self._sync_lines(instance, lines)
        return instance
```

- [ ] **Step 6: Add custom views**

In `config_api/views.py` (these need custom bodies, not `_pair`, because of the nested lines and company injection). Add:
```python
class ExpenseScheduleListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "POST": "transport.config.manage"}

    def get(self, request):
        company_id = getattr(request.user, "company_id", None)
        qs = ExpenseSchedule.objects.filter(is_deleted=False)
        if company_id:
            qs = qs.filter(company_id=company_id)
        return success_response(S.ExpenseScheduleSerializer(qs.select_related("route", "fare_class"), many=True).data)

    def post(self, request):
        payload = S.ExpenseScheduleWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        schedule = payload.save(company_id=getattr(request.user, "company_id", None), created_by=request.user)
        return created_response(S.ExpenseScheduleSerializer(schedule).data)


class ExpenseScheduleDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "transport.config.view", "PATCH": "transport.config.manage",
                      "DELETE": "transport.config.manage"}

    def _get(self, request, pk):
        company_id = getattr(request.user, "company_id", None)
        qs = ExpenseSchedule.objects.filter(is_deleted=False)
        if company_id:
            qs = qs.filter(company_id=company_id)
        return qs.filter(pk=pk).first()

    def get(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response(_("Barème introuvable."), status_code=404)
        return success_response(S.ExpenseScheduleSerializer(obj).data)

    def patch(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response(_("Barème introuvable."), status_code=404)
        payload = S.ExpenseScheduleWriteSerializer(obj, data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        obj = payload.save(updated_by=request.user)
        return success_response(S.ExpenseScheduleSerializer(obj).data)

    def delete(self, request, pk):
        obj = self._get(request, pk)
        if not obj:
            return error_response(_("Barème introuvable."), status_code=404)
        obj.soft_delete(user=request.user)
        return success_response(message=_("Barème supprimé."))
```
> `from django.utils.translation import gettext_lazy as _` is already imported at the top of `views.py`; confirm and reuse.

- [ ] **Step 7: Add urls**

In `urls.py`:
```python
    path("expense-schedules/",           v.ExpenseScheduleListView.as_view()),
    path("expense-schedules/<uuid:pk>/", v.ExpenseScheduleDetailView.as_view()),
```

- [ ] **Step 8: Run the suite for the app**

Run: `python -m pytest apps/voyages_config -q` → PASS.

- [ ] **Step 9: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_config
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(voyages-config): bareme de depenses (route x fare class + lignes)"
```

---

## Task 3: TripExpense model + copy-from-barème at trip creation

**Files:**
- Create: `backend/apps/voyages_trips/models/trip_expense.py`
- Modify: `backend/apps/voyages_trips/models/__init__.py`
- Create: `backend/apps/voyages_trips/services/expense_services.py`
- Modify: `backend/apps/voyages_trips/services/trip_services.py` (hook in `create_trip`)
- Test: `backend/apps/voyages_trips/test_trip_expenses.py`

**Interfaces:**
- Consumes: `voyages_config.ExpenseSchedule/ExpenseScheduleLine/ExpenseType` (Tasks 1-2), `voyages_trips.Trip`.
- Produces: `TripExpense(BaseModel)` fields `trip, expense_type, amount, description, date, status, cash_session`; status constants `TripExpense.Status.PLANNED/PAID/CANCELLED`; `apply_expense_schedule(trip) -> int`.

- [ ] **Step 1: Write the failing test**

`backend/apps/voyages_trips/test_trip_expenses.py`:
```python
import pytest
from decimal import Decimal
from apps.voyages_trips.models import TripExpense


@pytest.mark.django_db
def test_trip_creation_copies_matching_schedule():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Route, FareClass, ExpenseType, ExpenseSchedule, ExpenseScheduleLine
    from apps.voyages_trips.services.trip_services import create_trip
    from django.utils import timezone
    company, _ = create_company(name="TE Co", admin_email="te@x.com",
                                admin_first_name="A", admin_last_name="B")
    route = Route.objects.create(company=company, code="R1", name="A-B")
    fc = FareClass.objects.filter(company=company).first() or \
        FareClass.objects.create(company=company, code="CL", name="Classic")
    et = ExpenseType.objects.get(company=company, code="CARBURANT")
    sch = ExpenseSchedule.objects.create(company=company, route=route, fare_class=fc)
    ExpenseScheduleLine.objects.create(schedule=sch, expense_type=et, amount=Decimal("15000"))
    dep = timezone.now(); arr = dep
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=dep, scheduled_arrival=arr)
    exps = TripExpense.objects.filter(trip=trip)
    assert exps.count() == 1
    assert exps.first().amount == Decimal("15000")
    assert exps.first().status == TripExpense.Status.PLANNED
```
> Check `create_trip` full signature (`sed -n '19,40p' backend/apps/voyages_trips/services/trip_services.py`) and pass any other required kwargs (e.g. origin/destination) so the call succeeds.

- [ ] **Step 2: Run test — expect failure**

Run: `python -m pytest apps/voyages_trips/test_trip_expenses.py -q` → FAIL (ImportError).

- [ ] **Step 3: Create the model**

`backend/apps/voyages_trips/models/trip_expense.py`:
```python
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class TripExpense(BaseModel):
    class Status(models.TextChoices):
        PLANNED   = "planned",   _("Prévue")
        PAID      = "paid",      _("Décaissée")
        CANCELLED = "cancelled", _("Annulée")

    trip         = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                                     on_delete=models.CASCADE, related_name="expenses")
    expense_type = models.ForeignKey("voyages_config.ExpenseType", verbose_name=_("type de dépense"),
                                     on_delete=models.PROTECT, related_name="trip_expenses")
    amount       = models.DecimalField(_("montant"), max_digits=14, decimal_places=2)
    description  = models.CharField(_("description"), max_length=255, blank=True)
    date         = models.DateField(_("date"), default=timezone.now)
    status       = models.CharField(_("statut"), max_length=12, choices=Status.choices,
                                    default=Status.PLANNED)
    cash_session = models.ForeignKey("treasury.CashSession", verbose_name=_("session de caisse"),
                                     on_delete=models.SET_NULL, null=True, blank=True,
                                     related_name="trip_expenses")

    class Meta(BaseModel.Meta):
        verbose_name = _("dépense de voyage")
        verbose_name_plural = _("dépenses de voyage")
        ordering = ["-date", "id"]

    def __str__(self):
        return f"{self.expense_type_id} · {self.amount}"
```
Export in `backend/apps/voyages_trips/models/__init__.py`:
```python
from .trip_expense import TripExpense  # noqa
```

- [ ] **Step 4: Create the copy service**

`backend/apps/voyages_trips/services/expense_services.py`:
```python
from apps.voyages_trips.models import TripExpense
from apps.voyages_config.models import ExpenseSchedule


def apply_expense_schedule(trip) -> int:
    """Copie les lignes du barème (route, fare_class) du voyage en TripExpense PLANNED."""
    schedule = (ExpenseSchedule.objects
                .filter(company_id=trip.company_id, route_id=trip.route_id,
                        fare_class_id=trip.fare_class_id, is_deleted=False)
                .prefetch_related("lines").first())
    if not schedule:
        return 0
    created = 0
    for line in schedule.lines.all():
        TripExpense.objects.create(trip=trip, expense_type=line.expense_type,
                                   amount=line.amount, created_by=trip.created_by)
        created += 1
    return created
```

- [ ] **Step 5: Hook into create_trip**

In `backend/apps/voyages_trips/services/trip_services.py`, at the end of `create_trip`, just before `return trip`:
```python
    from apps.voyages_trips.services.expense_services import apply_expense_schedule
    apply_expense_schedule(trip)
```

- [ ] **Step 6: Migration + run test**

Run: `python manage.py makemigrations voyages_trips && python -m pytest apps/voyages_trips/test_trip_expenses.py -q` → PASS.

- [ ] **Step 7: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_trips
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(voyages): TripExpense + copie du bareme a la creation du voyage"
```

---

## Task 4: Treasury plumbing (counterpart override + voyage_expense FK + category)

**Files:**
- Modify: `backend/apps/treasury/models/transaction.py`
- Modify: `backend/apps/treasury/services/services.py` (`create_transaction`)
- Modify: `backend/apps/treasury/services/accounting_bridge.py` (`post_movement`)
- Modify: `backend/apps/treasury/services/seed.py` (`_DEFAULTS`)
- Create data migration for `voyage_expense → 658` (existing companies)
- Test: `backend/apps/treasury/tests/test_counterpart_override.py`

**Interfaces:**
- Consumes: `voyages_trips.TripExpense` (Task 3), `accounting.Account`.
- Produces: `Transaction.counterpart_account` (FK Account), `Transaction.voyage_expense` (FK TripExpense), `Transaction.Category.VOYAGE_EXPENSE = "voyage_expense"`; `create_transaction(..., counterpart_account=None)`.

- [ ] **Step 1: Write the failing test**

`backend/apps/treasury/tests/test_counterpart_override.py`:
```python
import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.treasury.models import Transaction
from apps.treasury.services.services import create_cash_register, open_session, create_transaction


def _lines(entry):
    return {l.account.code: (l.debit, l.credit) for l in entry.lines.all()}


@pytest.mark.django_db
def test_counterpart_account_override_used():
    from apps.system_config.services import create_company
    from apps.accounting.models import Account
    company, _ = create_company(name="CoOv", admin_email="ov@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ov@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    session = open_session(company=company, cash_register=reg, created_by=admin)
    acc604 = Account.objects.get(company=company, code="604")
    txn = create_transaction(company=company, transaction_type=Transaction.Type.EXPENSE,
                             category=Transaction.Category.VOYAGE_EXPENSE, account_type=Transaction.AccountType.CASH,
                             cash_session=session, amount=Decimal("15000"),
                             payment_mode=Transaction.PaymentMode.CASH, counterpart_account=acc604,
                             description="Carburant", created_by=admin)
    ln = _lines(txn.journal_entry)
    assert ln["604"][0] == Decimal("15000")   # debit charge
    assert ln["571"][1] == Decimal("15000")   # credit caisse
```

- [ ] **Step 2: Run test — expect failure**

Run: `python -m pytest apps/treasury/tests/test_counterpart_override.py -q` → FAIL (unexpected keyword `counterpart_account` / missing category).

- [ ] **Step 3: Model changes**

In `backend/apps/treasury/models/transaction.py`, add the category to the income group:
```python
        VOYAGE_EXPENSE  = "voyage_expense", _("Dépense voyage")
```
After the `voyage_booking` FK block add:
```python
    voyage_expense = models.ForeignKey("voyages_trips.TripExpense", verbose_name=_("dépense voyage"),
                                       on_delete=models.SET_NULL, null=True, blank=True,
                                       related_name="treasury_transactions")
    counterpart_account = models.ForeignKey("accounting.Account", verbose_name=_("compte de contrepartie"),
                                            on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
```

- [ ] **Step 4: `create_transaction` accepts the override**

In `backend/apps/treasury/services/services.py`, add `counterpart_account=None` to the `create_transaction` signature, and set it on the object before it is saved/posted (find where `Transaction.objects.create(...)` builds the txn and pass `counterpart_account=counterpart_account`).

- [ ] **Step 5: Bridge prefers the override**

In `backend/apps/treasury/services/accounting_bridge.py`, inside `post_movement`, replace the `counterpart` resolution:
```python
            mapping = MovementAccountMapping.objects.filter(company_id=company_id, category=txn.category).first()
            counterpart = txn.counterpart_account or (mapping.account if mapping else None)
```

- [ ] **Step 6: Seed fallback mapping**

In `backend/apps/treasury/services/seed.py` `_DEFAULTS` add:
```python
    "voyage_expense": "658",
```

- [ ] **Step 7: Migrations**

Run: `python manage.py makemigrations treasury` (schema: 2 FKs + altered category choices). Then create a data migration `backend/apps/treasury/migrations/00XX_seed_voyage_expense_mapping.py` mirroring the existing `0006_seed_baggage_mapping.py` but for category `"voyage_expense"` → account `"658"`.

- [ ] **Step 8: Run test — expect pass**

Run: `python manage.py migrate && python -m pytest apps/treasury/tests/test_counterpart_override.py -q` → PASS.

- [ ] **Step 9: Fix the mapping-seed count test**

`apps/treasury/tests/test_mapping_seed.py` asserts a category count — bump it by 1 (12) and add `assert m.get("voyage_expense") == "658"`. Run `python -m pytest apps/treasury/tests/test_mapping_seed.py -q` → PASS.

- [ ] **Step 10: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/treasury
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(treasury): compte de contrepartie override + FK voyage_expense + categorie voyage_expense"
```

---

## Task 5: Disbursement bridge + TripExpense API + RBAC

**Files:**
- Create: `backend/apps/treasury/services/trip_expense_sales.py`
- Modify: `backend/apps/treasury/services/__init__.py`
- Modify: `backend/apps/voyages_trips/services/expense_services.py` (add `disburse_trip_expense`)
- Modify: `backend/apps/voyages_trips/views.py`, `urls.py`
- Create: `backend/apps/admin_rbac/migrations/00XX_voyage_expense_perms.py`
- Test: `backend/apps/voyages_trips/test_trip_expense_disburse.py`

**Interfaces:**
- Consumes: `TripExpense` (Task 3), `Transaction`/`counterpart_account` (Task 4), `get_open_session_for_user`, `create_transaction`.
- Produces: `record_trip_expense(company, *, trip_expense, cash_session, user) -> Transaction|None`; `disburse_trip_expense(trip_expense, *, user) -> TripExpense`; endpoints `GET/POST /api/v1/voyage/trips/<trip_id>/expenses/`, `PATCH/DELETE .../expenses/<uuid:pk>/`, `POST .../expenses/<uuid:pk>/disburse/`; perms `voyage.expense.view`, `voyage.expense.manage`.

- [ ] **Step 1: Write the failing test**

`backend/apps/voyages_trips/test_trip_expense_disburse.py`:
```python
import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.core.exceptions import ApplicationError
from apps.treasury.models import Transaction


def _lines(entry):
    return {l.account.code: (l.debit, l.credit) for l in entry.lines.all()}


def _setup():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Route, FareClass, ExpenseType
    from apps.voyages_trips.models import TripExpense
    from apps.voyages_trips.services.trip_services import create_trip
    from django.utils import timezone
    company, _ = create_company(name="Disb Co", admin_email="disb@x.com",
                                admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="disb@x.com")
    route = Route.objects.create(company=company, code="R1", name="A-B")
    fc = FareClass.objects.filter(company=company).first() or \
        FareClass.objects.create(company=company, code="CL", name="Classic")
    et = ExpenseType.objects.get(company=company, code="CARBURANT")
    dep = timezone.now()
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=dep, scheduled_arrival=dep)
    exp = TripExpense.objects.create(trip=trip, expense_type=et, amount=Decimal("15000"), created_by=admin)
    return company, admin, exp


@pytest.mark.django_db
def test_disburse_requires_open_session():
    from apps.voyages_trips.services.expense_services import disburse_trip_expense
    company, admin, exp = _setup()
    with pytest.raises(ApplicationError):
        disburse_trip_expense(exp, user=admin)


@pytest.mark.django_db
def test_disburse_posts_and_is_idempotent():
    from apps.treasury.services.services import create_cash_register, open_session
    from apps.voyages_trips.services.expense_services import disburse_trip_expense
    company, admin, exp = _setup()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    exp = disburse_trip_expense(exp, user=admin)
    assert exp.status == "paid"
    txn = Transaction.objects.get(voyage_expense=exp, is_deleted=False)
    ln = _lines(txn.journal_entry)
    assert ln["604"][0] == Decimal("15000") and ln["571"][1] == Decimal("15000")
    # second call: no new transaction
    disburse_trip_expense(exp, user=admin)
    assert Transaction.objects.filter(voyage_expense=exp, is_deleted=False).count() == 1
```

- [ ] **Step 2: Run test — expect failure**

Run: `python -m pytest apps/voyages_trips/test_trip_expense_disburse.py -q` → FAIL (ImportError).

- [ ] **Step 3: Write the bridge**

`backend/apps/treasury/services/trip_expense_sales.py`:
```python
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.accounting.models import Account
from apps.treasury.models import Transaction
from apps.treasury.services.services import create_transaction


def record_trip_expense(company, *, trip_expense, cash_session, user):
    """Mouvement de trésorerie EXPENSE pour une dépense de voyage (décaissement caisse)."""
    if Transaction.objects.filter(voyage_expense=trip_expense, is_deleted=False).exists():
        return None  # idempotent
    account = Account.objects.filter(company=company, code=trip_expense.expense_type.account_code,
                                     is_deleted=False).first()
    txn = create_transaction(
        company=company, transaction_type=Transaction.Type.EXPENSE,
        category=Transaction.Category.VOYAGE_EXPENSE, account_type=Transaction.AccountType.CASH,
        cash_session=cash_session, amount=trip_expense.amount,
        payment_mode=Transaction.PaymentMode.CASH, counterpart_account=account,
        description=f"{trip_expense.expense_type.name} — {trip_expense.trip.number}".strip(),
        created_by=user)
    txn.voyage_expense = trip_expense
    txn.save(update_fields=["voyage_expense"])
    return txn
```
Export in `backend/apps/treasury/services/__init__.py` (add import + `__all__` entry): `from .trip_expense_sales import record_trip_expense`.

- [ ] **Step 4: Write the disburse service**

Append to `backend/apps/voyages_trips/services/expense_services.py`:
```python
from django.db import transaction
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError


@transaction.atomic
def disburse_trip_expense(trip_expense, *, user):
    from apps.treasury.selectors.selectors import get_open_session_for_user
    from apps.treasury.services import record_trip_expense
    if trip_expense.status == TripExpense.Status.PAID:
        return trip_expense
    session = get_open_session_for_user(trip_expense.trip.company_id, user)
    if not session:
        raise ApplicationError(_("Ouvrez d'abord votre session de caisse pour décaisser."))
    record_trip_expense(trip_expense.trip.company, trip_expense=trip_expense, cash_session=session, user=user)
    trip_expense.status = TripExpense.Status.PAID
    trip_expense.cash_session = session
    trip_expense.updated_by = user
    trip_expense.save(update_fields=["status", "cash_session", "updated_by", "updated_at"])
    return trip_expense
```

- [ ] **Step 5: Run test — expect pass**

Run: `python -m pytest apps/voyages_trips/test_trip_expense_disburse.py -q` → PASS.

- [ ] **Step 6: Add the API views**

In `backend/apps/voyages_trips/views.py` add (mirror the existing `CrewMemberListView`/`CrewMemberDetailView` pattern; imports for `TripExpense`, serializers, `success_response`/`created_response`/`error_response`):
```python
class TripExpenseListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.expense.view", "POST": "voyage.expense.manage"}

    def get(self, request, trip_id):
        qs = TripExpense.objects.filter(trip_id=trip_id, is_deleted=False).select_related("expense_type")
        return success_response(TripExpenseSerializer(qs, many=True).data)

    def post(self, request, trip_id):
        payload = TripExpenseWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        exp = TripExpense.objects.create(trip_id=trip_id, created_by=request.user, **payload.validated_data)
        return created_response(TripExpenseSerializer(exp).data)


class TripExpenseDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"PATCH": "voyage.expense.manage", "DELETE": "voyage.expense.manage",
                      "GET": "voyage.expense.view"}

    def _get(self, trip_id, pk):
        return TripExpense.objects.filter(trip_id=trip_id, pk=pk, is_deleted=False).first()

    def patch(self, request, trip_id, pk):
        exp = self._get(trip_id, pk)
        if not exp:
            return error_response(_("Dépense introuvable."), status_code=404)
        if exp.status == TripExpense.Status.PAID:
            return error_response(_("Dépense déjà décaissée."), status_code=400)
        payload = TripExpenseWriteSerializer(exp, data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        payload.save(updated_by=request.user)
        return success_response(TripExpenseSerializer(exp).data)

    def delete(self, request, trip_id, pk):
        exp = self._get(trip_id, pk)
        if not exp:
            return error_response(_("Dépense introuvable."), status_code=404)
        exp.soft_delete(user=request.user)
        return success_response(message=_("Dépense supprimée."))


class TripExpenseDisburseView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"POST": "voyage.expense.manage"}

    def post(self, request, trip_id, pk):
        from apps.voyages_trips.services.expense_services import disburse_trip_expense
        exp = TripExpense.objects.filter(trip_id=trip_id, pk=pk, is_deleted=False).first()
        if not exp:
            return error_response(_("Dépense introuvable."), status_code=404)
        try:
            exp = disburse_trip_expense(exp, user=request.user)
        except ApplicationError as e:
            return error_response(str(e), status_code=400)
        return success_response(TripExpenseSerializer(exp).data)
```
Add serializers to `backend/apps/voyages_trips/serializers.py`:
```python
class TripExpenseSerializer(serializers.ModelSerializer):
    expense_type_name = serializers.CharField(source="expense_type.name", read_only=True)

    class Meta:
        model = TripExpense
        fields = ["id", "expense_type", "expense_type_name", "amount", "description",
                  "date", "status", "cash_session"]


class TripExpenseWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = TripExpense
        fields = ["expense_type", "amount", "description", "date"]
```

- [ ] **Step 7: Add urls**

In `backend/apps/voyages_trips/urls.py`:
```python
    path("trips/<uuid:trip_id>/expenses/",                     views.TripExpenseListView.as_view()),
    path("trips/<uuid:trip_id>/expenses/<uuid:pk>/",           views.TripExpenseDetailView.as_view()),
    path("trips/<uuid:trip_id>/expenses/<uuid:pk>/disburse/",  views.TripExpenseDisburseView.as_view()),
```

- [ ] **Step 8: RBAC data-migration**

Create `backend/apps/admin_rbac/migrations/00XX_voyage_expense_perms.py` mirroring an existing perms migration (e.g. the crew one adding `voyage.crew.*`). Add `voyage.expense.view` and `voyage.expense.manage` to the existing `voyage` `AppModule`, category "Voyages". Run `python manage.py migrate`.

- [ ] **Step 9: Add an RBAC test and run the app suite**

Add to `test_trip_expense_disburse.py` a check that a staff user with only `voyage.expense.view` gets 403 on the disburse endpoint (mirror `test_agency_rbac.py` `_status` helper). Run: `python -m pytest apps/voyages_trips -q` → PASS.

- [ ] **Step 10: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/treasury backend/apps/voyages_trips backend/apps/admin_rbac
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(voyages): decaissement des depenses (bridge tresorerie + API + RBAC)"
```

---

## Task 6: Frontend (config screens + trip-detail Dépenses section)

**Files:**
- Modify: `angular/src/_api/config/api.config.ts`, `_api/models/voyages-config.models.ts`, `_api/models/voyages.models.ts`
- Create: `_api/services/voyages-config/expense-type.service.ts`, `_api/services/voyages-config/expense-schedule.service.ts`, `_api/services/voyages/trip-expense.service.ts`
- Create: `_api/pages/voyages-config/expense-types/*`, `.../expense-schedules/*`
- Modify: `_api/pages/voyages/trip-detail/trip-detail.component.{ts,html}`
- Modify: `angular/src/app/core/helpers/routes.ts`, `features/pages/pages.routes.ts`, `core/service/sidebar/sidebar.service.ts`

**Interfaces:**
- Consumes: endpoints from Tasks 1-5. Response envelopes per project convention: config `_ConfigListView` is paginated (`{success,data,pagination}` → unwrapped to array by interceptor → use `r.results ?? r.data ?? r`); custom `success_response`/`created_response` unwrap to `data`.

- [ ] **Step 1: Endpoints**

In `_api/config/api.config.ts`, under the transport/`VOYAGES_CONFIG` block add `expenseTypes`, `expenseType(id)`, `expenseSchedules`, `expenseSchedule(id)`; under `VOYAGES` add `tripExpenses(tripId)`, `tripExpense(tripId,id)`, `tripExpenseDisburse(tripId,id)`. Follow the exact base-URL pattern already used for `crewMemberTypes` / `crewMembers` in that file.

- [ ] **Step 2: Models**

`voyages-config.models.ts`: append
```ts
export interface ExpenseType { id: string; code: string; name: string; account_code: string; is_active: boolean; }
export interface ExpenseScheduleLine { id?: string; expense_type: string; expense_type_name?: string | null; amount: number; }
export interface ExpenseSchedule { id: string; route: string; route_name?: string | null; fare_class: string; fare_class_name?: string | null; is_active: boolean; lines: ExpenseScheduleLine[]; }
```
`voyages.models.ts`: append
```ts
export interface TripExpense { id: string; expense_type: string; expense_type_name: string | null; amount: number; description: string; date: string; status: 'planned' | 'paid' | 'cancelled'; cash_session: string | null; }
```

- [ ] **Step 3: Services**

`expense-type.service.ts` — extend `BaseConfigService<ExpenseType>` with `VOYAGES_CONFIG.expenseTypes` / `expenseType` (mirror `crew-member-type.service.ts`).
`expense-schedule.service.ts` — plain CRUD returning arrays (`list()` uses `map(r => r.results ?? r.data ?? r)`).
`trip-expense.service.ts`:
```ts
list(tripId: string): Observable<TripExpense[]> { return this.http.get<TripExpense[]>(VOYAGES.tripExpenses(tripId)); }
create(tripId: string, data: Record<string, unknown>): Observable<TripExpense> { return this.http.post<TripExpense>(VOYAGES.tripExpenses(tripId), data); }
update(tripId: string, id: string, data: Record<string, unknown>): Observable<TripExpense> { return this.http.patch<TripExpense>(VOYAGES.tripExpense(tripId, id), data); }
remove(tripId: string, id: string): Observable<unknown> { return this.http.delete(VOYAGES.tripExpense(tripId, id)); }
disburse(tripId: string, id: string): Observable<TripExpense> { return this.http.post<TripExpense>(VOYAGES.tripExpenseDisburse(tripId, id), {}); }
```

- [ ] **Step 4: Config screens**

Create `expense-types` component (CRUD list + modal, mirror `crew-member-types`; the account field is a `<select>` populated from the company chart — reuse the accounting Account list service if present, else a text input constrained to class-6 codes). Create `expense-schedules` component (route + fare-class selectors + editable lines table of {expense_type, amount}).

- [ ] **Step 5: Trip-detail Dépenses section**

In `trip-detail.component.ts` inject `TripExpenseService`, load `expenses` on reload, add `addExpense()`, `disburse(e)`, `removeExpense(e)`. In `trip-detail.component.html` add a **Dépenses** card: table of expenses (type, montant, statut), an add row (type select + montant), a **Décaisser** button per PLANNED row `*hasPermission="'voyage.expense.manage'"`.

- [ ] **Step 6: Routes + sidebar**

`routes.ts`: add `vcExpenseTypes`, `vcExpenseSchedules`. `pages.routes.ts`: add both under `voyages-config`. `sidebar.service.ts`: under the "Config Voyages" group add "Types de dépense" (perm `transport.config.view`) and "Barème dépenses" (perm `transport.config.view`).

- [ ] **Step 7: Build**

Run: `cd angular && npx ng build` → "Application bundle generation complete", no errors.

- [ ] **Step 8: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(voyages-fe): ecrans types de depense + bareme + section depenses du voyage"
```

---

## Task 7: Verify + finish

- [ ] **Step 1: Full backend suite** — `cd backend && python -m pytest -q` → all green.
- [ ] **Step 2: Guardrails** — `git -C <repo> status --short` (no stray files) + `python manage.py makemigrations --check` (clean).
- [ ] **Step 3: Finish** — use superpowers:finishing-a-development-branch: merge to `master`, push with `git push all master`.
