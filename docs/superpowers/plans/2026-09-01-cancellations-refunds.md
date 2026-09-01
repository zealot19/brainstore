# Cancellations & Refunds — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refund `amount_paid × refund_rate%` as a treasury cash outflow when a paid booking/colis/bagage is cancelled; cancel a booking's linked bagages; make the rate configurable per company (default 0 %).

**Architecture:** A new `refund` transaction category + a `refund_on_cancel` service (cash outflow from the agent's open caisse) called by the three existing cancel flows. The rate lives in the `Parameter` store behind get/set helpers and a `GET/PUT /treasury/refund-rate/` endpoint. Cancelling a booking also cancels its tickets' bagages with one combined refund.

**Tech Stack:** Django + DRF, pytest; Angular 17.

**Spec:** `docs/superpowers/specs/2026-09-01-cancellations-refunds-design.md`

## Global Constraints

- Single company-wide rate in `Parameter treasury.refund_rate` (decimal, scope company), default 0. Read via `get_param("treasury.refund_rate", company.id, default=Decimal("0"))` (5-min cache — invalidate on write with `cache.delete(f"param:{company.id}:treasury.refund_rate")`).
- Refund = `Transaction` EXPENSE, category `refund`, `account_type=cash`, `payment_mode=cash`, from the agent's open caisse via `resolve_disbursement_session`; **only when amount > 0** (so default 0 % leaves cancels working with no caisse).
- `refund_on_cancel` must NOT pass `booking=`/`parcel=` to `create_transaction` (those FKs are the *ticketing* models, not voyage ones) — the reference goes in the description.
- Cancelling a booking cancels its tickets' bagages and issues **one** combined refund (no double refund).
- New RBAC perms (`treasury.config.view/manage`) invisible until granted + re-login (admins bypass).
- French UI copy; rate is a % (0–100). Backend tests via `cd backend && ../env/bin/python -m pytest`. Frontend via `cd angular && npx ng build`.
- Commits authored as shimi: `git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "..."`.

---

### Task 1: Refund category + accounting mapping

**Files:**
- Modify: `backend/apps/treasury/models/transaction.py` (Category enum)
- Create: migration via `makemigrations` (AlterField category)
- Modify: `backend/apps/treasury/services/seed.py` (`_DEFAULTS`)
- Create: `backend/apps/treasury/migrations/00XX_seed_refund_mapping.py` (data)
- Modify: `backend/apps/treasury/tests/test_mapping_seed.py` (13 → 14)

**Interfaces:**
- Produces: `Transaction.Category.REFUND == "refund"`; treasury mapping `refund → 706`.

- [ ] **Step 1: Update the enum + mapping default**

In `backend/apps/treasury/models/transaction.py`, in `class Category`, add after `OTHER_INCOME`:

```python
        REFUND          = "refund",          _("Remboursement")
```

In `backend/apps/treasury/services/seed.py`, add to `_DEFAULTS` (after `other_income`):

```python
    "refund":          "706",
```

- [ ] **Step 2: Update the mapping-seed test (make it fail first)**

In `backend/apps/treasury/tests/test_mapping_seed.py`, change `assert len(m) == 13` to `assert len(m) == 14` and add `assert m.get("refund") == "706"`.

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_mapping_seed.py -q`
Expected: this test currently PASSES for len via the model+seed once Step 1 is applied and a fresh company is seeded (create_company runs seed_treasury_mapping). If it FAILS on len before the migration is generated, proceed — Step 3 makes the schema consistent.

- [ ] **Step 3: Generate the category migration**

Run: `cd backend && ../env/bin/python manage.py makemigrations treasury`
Expected: creates `00NN_alter_transaction_category.py` (AlterField; adding a choice does not prompt).

- [ ] **Step 4: Data migration for the refund mapping (existing companies)**

Create `backend/apps/treasury/migrations/00XX_seed_refund_mapping.py` (use the next number; depends on the Step 3 migration):

```python
from django.db import migrations


def seed_refund_mapping(apps, schema_editor):
    Company = apps.get_model("system_config", "Company")
    Account = apps.get_model("accounting", "Account")
    Mapping = apps.get_model("treasury", "MovementAccountMapping")
    for company in Company.objects.filter(is_deleted=False):
        if Mapping.objects.filter(company=company, category="refund").exists():
            continue
        account = Account.objects.filter(company=company, code="706", is_deleted=False).first()
        if not account:
            continue
        Mapping.objects.create(company=company, category="refund", account=account)


def noop(apps, schema_editor):
    pass


class Migration(migrations.Migration):
    dependencies = [("treasury", "00NN_alter_transaction_category")]  # replace with Step 3 name
    operations = [migrations.RunPython(seed_refund_mapping, noop)]
```

- [ ] **Step 5: Run tests + drift**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_mapping_seed.py -q`
Expected: PASS (len 14, refund→706).
Run: `../env/bin/python manage.py makemigrations --check --dry-run`
Expected: "No changes detected".

- [ ] **Step 6: Commit**

```bash
git add backend/apps/treasury/models/transaction.py backend/apps/treasury/services/seed.py backend/apps/treasury/migrations/*alter_transaction_category*.py backend/apps/treasury/migrations/*seed_refund_mapping*.py backend/apps/treasury/tests/test_mapping_seed.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): categorie de mouvement 'refund' + contrepartie 706"
```

---

### Task 2: Refund-rate config + refund service

**Files:**
- Create: `backend/apps/treasury/services/refund_config.py`
- Create: `backend/apps/treasury/services/refund.py`
- Modify: `backend/apps/treasury/services/__init__.py` (exports)
- Test: `backend/apps/treasury/tests/test_refund.py`

**Interfaces:**
- Consumes: `get_param` (`apps.system_config.selectors.parameter_selectors`); `resolve_disbursement_session`; `create_transaction`; `Transaction`.
- Produces:
  - `get_refund_rate(company) -> Decimal`
  - `set_refund_rate(company, rate, user=None) -> Decimal`
  - `refund_on_cancel(company, *, amount_paid, user, description, cash_session=None) -> Transaction | None`

- [ ] **Step 1: Write the failing tests**

Create `backend/apps/treasury/tests/test_refund.py`:

```python
import pytest
from decimal import Decimal
from apps.core.exceptions import ApplicationError


def _company(name="RfCo", email="rf@x.com"):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.mark.django_db
def test_refund_rate_get_set():
    from apps.treasury.services.refund_config import get_refund_rate, set_refund_rate
    company, admin = _company()
    assert get_refund_rate(company) == Decimal("0")
    set_refund_rate(company, 50, user=admin)
    assert get_refund_rate(company) == Decimal("50")


@pytest.mark.django_db
def test_refund_rate_rejects_out_of_range():
    from apps.treasury.services.refund_config import set_refund_rate
    company, admin = _company(name="RfBad", email="rfb@x.com")
    with pytest.raises(ApplicationError):
        set_refund_rate(company, 150, user=admin)


@pytest.mark.django_db
def test_refund_on_cancel_zero_rate_is_noop():
    from apps.treasury.services.refund import refund_on_cancel
    from apps.treasury.models import Transaction
    company, admin = _company(name="RfZero", email="rfz@x.com")
    before = Transaction.objects.count()
    txn = refund_on_cancel(company, amount_paid=Decimal("10000"), user=admin, description="x")
    assert txn is None and Transaction.objects.count() == before


@pytest.mark.django_db
def test_refund_on_cancel_records_outflow():
    from apps.treasury.services.refund_config import set_refund_rate
    from apps.treasury.services.refund import refund_on_cancel
    from apps.treasury.services import create_cash_register, open_session
    company, admin = _company(name="RfPay", email="rfp@x.com")
    set_refund_rate(company, 50, user=admin)
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    txn = refund_on_cancel(company, amount_paid=Decimal("10000"), user=admin, description="Remb")
    assert txn is not None
    assert txn.transaction_type == "expense" and txn.category == "refund"
    assert txn.amount == Decimal("5000")


@pytest.mark.django_db
def test_refund_on_cancel_needs_session_when_positive():
    from apps.treasury.services.refund_config import set_refund_rate
    from apps.treasury.services.refund import refund_on_cancel
    company, admin = _company(name="RfNoSess", email="rfn@x.com")
    set_refund_rate(company, 50, user=admin)
    with pytest.raises(ApplicationError):
        refund_on_cancel(company, amount_paid=Decimal("10000"), user=admin, description="Remb")
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_refund.py -q`
Expected: FAIL — `cannot import name 'get_refund_rate'`.

- [ ] **Step 3: Implement refund_config**

Create `backend/apps/treasury/services/refund_config.py`:

```python
from decimal import Decimal
from django.core.cache import cache
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError


def get_refund_rate(company) -> Decimal:
    from apps.system_config.selectors.parameter_selectors import get_param
    val = get_param("treasury.refund_rate", company.id, default=Decimal("0"))
    return Decimal(str(val or 0))


def set_refund_rate(company, rate, user=None) -> Decimal:
    from apps.system_config.models import Parameter
    rate = Decimal(str(rate))
    if rate < 0 or rate > 100:
        raise ApplicationError(_("Le taux de remboursement doit être compris entre 0 et 100."))
    Parameter.objects.update_or_create(
        key="treasury.refund_rate", company=company,
        defaults={"value": str(rate), "data_type": "decimal", "scope": "company"})
    cache.delete(f"param:{company.id}:treasury.refund_rate")
    return rate
```

- [ ] **Step 4: Implement the refund service**

Create `backend/apps/treasury/services/refund.py`:

```python
from decimal import Decimal


def refund_on_cancel(company, *, amount_paid, user, description, cash_session=None):
    """Rembourse amount_paid × taux depuis la caisse ouverte de l'agent.
    Retourne le mouvement (EXPENSE, catégorie refund) ou None si nul."""
    from apps.treasury.services.refund_config import get_refund_rate
    from apps.treasury.services.expense_shared import resolve_disbursement_session
    from apps.treasury.services.services import create_transaction
    from apps.treasury.models import Transaction
    rate = get_refund_rate(company)
    amount = (Decimal(str(amount_paid or 0)) * rate / Decimal("100")).quantize(Decimal("1."))
    if amount <= 0:
        return None
    session = resolve_disbursement_session(company.id, user, cash_session)
    return create_transaction(
        company=company, transaction_type=Transaction.Type.EXPENSE,
        category=Transaction.Category.REFUND, account_type=Transaction.AccountType.CASH,
        amount=amount, payment_mode=Transaction.PaymentMode.CASH,
        description=description, cash_session=session, created_by=user)
```

Export both in `backend/apps/treasury/services/__init__.py` (add imports + `__all__` entries `get_refund_rate`, `set_refund_rate`, `refund_on_cancel`).

- [ ] **Step 5: Run tests**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_refund.py -q`
Expected: PASS (all 5).

- [ ] **Step 6: Commit**

```bash
git add backend/apps/treasury/services/refund_config.py backend/apps/treasury/services/refund.py backend/apps/treasury/services/__init__.py backend/apps/treasury/tests/test_refund.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): taux de remboursement (config) + service refund_on_cancel"
```

---

### Task 3: Wire refunds into the three cancels

**Files:**
- Modify: `backend/apps/voyages_consignment/services/baggage_services.py` (`cancel_baggage`)
- Modify: `backend/apps/voyages_consignment/services/parcel_services.py` (`cancel_parcel`)
- Modify: `backend/apps/voyages_booking/services/booking_services.py` (`cancel_booking`)
- Test: append to `backend/apps/treasury/tests/test_refund.py`

**Interfaces:**
- Consumes: `refund_on_cancel` (Task 2); `Baggage` model.
- Produces: `cancel_baggage(baggage, *, user, _skip_refund=False)`.

- [ ] **Step 1: Write the failing test**

Append to `backend/apps/treasury/tests/test_refund.py`:

```python
@pytest.mark.django_db
def test_cancel_parcel_refunds():
    from apps.treasury.services.refund_config import set_refund_rate
    from apps.treasury.services import create_cash_register, open_session
    from apps.treasury.models import Transaction
    from apps.voyages_consignment.services.parcel_services import cancel_parcel
    from apps.voyages_consignment.models import Parcel
    company, admin = _company(name="Pc", email="pc@x.com")
    set_refund_rate(company, 100, user=admin)
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    p = Parcel.objects.create(company=company, reference="COL/1", status="registered",
                              amount_due=3000, amount_received=3000, sender_name="A",
                              sender_phone="1", recipient_name="B", recipient_phone="2")
    cancel_parcel(p, user=admin)
    assert p.status == "cancelled"
    assert Transaction.objects.filter(company=company, category="refund", amount=3000).exists()
```

> Note: `Parcel.objects.create` here needs the required FKs (`origin_point`, `destination_point`, `consignment_type`). If the model rejects the bare create, build them minimally first (Town → ServicePoint ×2 → ConsignmentNature → ConsignmentType) as `apps/voyages_consignment/tests.py` does; copy that fixture helper. Keep the assertion identical.

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_refund.py::test_cancel_parcel_refunds -q`
Expected: FAIL — no refund transaction created.

- [ ] **Step 3: cancel_baggage — atomic + `_skip_refund` + refund**

In `backend/apps/voyages_consignment/services/baggage_services.py`, change the signature and body:

```python
@transaction.atomic
def cancel_baggage(baggage, *, user, _skip_refund=False):
    if baggage.status == Baggage.Status.DELIVERED:
        raise ApplicationError(_("Un bagage retiré ne peut pas être annulé."))
    if baggage.status == Baggage.Status.CANCELLED:
        return baggage
    baggage.status = Baggage.Status.CANCELLED
    baggage.updated_by = user
    baggage.save(update_fields=["status", "updated_by", "updated_at"])
    if not _skip_refund:
        from apps.treasury.services.refund import refund_on_cancel
        refund_on_cancel(baggage.company, amount_paid=baggage.amount_received, user=user,
                         description=f"Remboursement bagage {baggage.tag_number or baggage.id}")
    return baggage
```

(`baggage.company` — confirm the field exists; Baggage is company-scoped. If the field is named differently, use `baggage.company`.)

- [ ] **Step 4: cancel_parcel — refund**

In `backend/apps/voyages_consignment/services/parcel_services.py::cancel_parcel`, before `return parcel`, add:

```python
    from apps.treasury.services.refund import refund_on_cancel
    refund_on_cancel(parcel.company, amount_paid=parcel.amount_received, user=user,
                     description=f"Remboursement colis {parcel.reference}")
```

- [ ] **Step 5: cancel_booking — linked bagages + one refund**

In `backend/apps/voyages_booking/services/booking_services.py::cancel_booking`, after the loyalty reverse and before `return booking`, add:

```python
    from apps.voyages_consignment.models import Baggage
    from apps.voyages_consignment.services.baggage_services import cancel_baggage
    from apps.treasury.services.refund import refund_on_cancel
    bag_total = Decimal("0")
    for bag in Baggage.objects.filter(ticket__booking=booking, is_deleted=False).exclude(status="cancelled"):
        cancel_baggage(bag, user=user, _skip_refund=True)
        bag_total += bag.amount_received or Decimal("0")
    refund_on_cancel(booking.company, amount_paid=(booking.amount_paid or Decimal("0")) + bag_total,
                     user=user, description=f"Remboursement réservation {booking.reference}")
```

(Ensure `from decimal import Decimal` is imported at the top of the file — it already is, used by pricing.)

- [ ] **Step 6: Run tests**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_refund.py -q`
Expected: PASS (all).

- [ ] **Step 7: Commit**

```bash
git add backend/apps/voyages_consignment/services/baggage_services.py backend/apps/voyages_consignment/services/parcel_services.py backend/apps/voyages_booking/services/booking_services.py backend/apps/treasury/tests/test_refund.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages): remboursement a l'annulation (reservation+bagages lies, colis, bagage)"
```

---

### Task 4: Refund-rate API

**Files:**
- Modify: `backend/apps/treasury/serializers.py`
- Modify: `backend/apps/treasury/views.py`
- Modify: `backend/apps/treasury/urls.py`
- Test: append to `backend/apps/treasury/tests/test_refund.py`

**Interfaces:**
- Consumes: `get_refund_rate`, `set_refund_rate` (Task 2); `_company`, `success_response`, `error_response`, `HasModulePermission`, `IsAuthenticated`.
- Produces: `GET/PUT /treasury/refund-rate/`.

- [ ] **Step 1: Write the failing test**

Append to `backend/apps/treasury/tests/test_refund.py`:

```python
@pytest.mark.django_db
def test_refund_rate_api():
    from rest_framework.test import APIClient
    company, admin = _company(name="RfApi", email="rfa@x.com")
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/treasury/refund-rate/")
    assert r.status_code == 200
    body = r.json(); d = body["data"] if "data" in body else body
    assert str(d["rate"]) in ("0", "0.0", "0.00")
    r = c.put("/api/v1/treasury/refund-rate/", {"rate": 25}, format="json")
    assert r.status_code == 200, r.content
    r = c.get("/api/v1/treasury/refund-rate/")
    d = r.json().get("data", r.json())
    assert Decimal(str(d["rate"])) == Decimal("25")
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_refund.py::test_refund_rate_api -q`
Expected: FAIL — 404.

- [ ] **Step 3: Add the serializer**

Append to `backend/apps/treasury/serializers.py`:

```python
class RefundRateSerializer(serializers.Serializer):
    rate = serializers.DecimalField(max_digits=5, decimal_places=2, min_value=0, max_value=100)
```

- [ ] **Step 4: Add the view**

Append to `backend/apps/treasury/views.py`:

```python
from apps.treasury.serializers import RefundRateSerializer  # noqa: E402


class RefundRateView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.config.view", "PUT": "treasury.config.manage"}

    def get(self, request):
        from apps.treasury.services.refund_config import get_refund_rate
        return success_response({"rate": str(get_refund_rate(_company(request)))})

    def put(self, request):
        from apps.treasury.services.refund_config import set_refund_rate
        ser = RefundRateSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        try:
            rate = set_refund_rate(_company(request), ser.validated_data["rate"], user=request.user)
        except ApplicationError as ex:
            return error_response(str(ex))
        return success_response({"rate": str(rate)})
```

- [ ] **Step 5: Add the url**

In `backend/apps/treasury/urls.py`, add inside `urlpatterns` (after the payment-methods block):

```python
    path("refund-rate/", views.RefundRateView.as_view(), name="refund-rate"),
```

- [ ] **Step 6: Run tests**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_refund.py -q`
Expected: PASS (all). (Admin bypasses RBAC, so this passes before Task 5.)

- [ ] **Step 7: Commit**

```bash
git add backend/apps/treasury/serializers.py backend/apps/treasury/views.py backend/apps/treasury/urls.py backend/apps/treasury/tests/test_refund.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): API taux de remboursement (GET/PUT)"
```

---

### Task 5: RBAC permissions (treasury.config)

**Files:**
- Create: `backend/apps/admin_rbac/migrations/0017_treasury_config_permissions_seed.py`
- Test: `backend/apps/admin_rbac/test_treasury_config_permissions.py`

**Interfaces:**
- Mirror `0016_payment_method_permissions_seed.py`.

- [ ] **Step 1: Write the failing test**

Create `backend/apps/admin_rbac/test_treasury_config_permissions.py`:

```python
import pytest


@pytest.mark.django_db
def test_treasury_config_permissions_exist():
    from apps.admin_rbac.models import Permission
    assert Permission.objects.filter(code="treasury.config.view").exists()
    assert Permission.objects.filter(code="treasury.config.manage").exists()
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/admin_rbac/test_treasury_config_permissions.py -q`
Expected: FAIL — perms not seeded.

- [ ] **Step 3: Create the migration**

Create `backend/apps/admin_rbac/migrations/0017_treasury_config_permissions_seed.py`:

```python
"""Data migration — permissions Config Trésorerie (taux de remboursement) + octroi rôles caisse."""
from django.db import migrations

PERMS = [
    ("treasury.config.view",   "Consulter la config Trésorerie", "view"),
    ("treasury.config.manage", "Gérer la config Trésorerie",     "update"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    Role = apps.get_model("admin_rbac", "Role")
    RolePermission = apps.get_model("admin_rbac", "RolePermission")
    module, _ = AppModule.objects.get_or_create(code="treasury", defaults={"name": "Trésorerie"})
    created = {}
    for code, name, category in PERMS:
        perm, _ = Permission.objects.update_or_create(
            code=code, defaults={"name": name, "module": module, "category": category})
        created[code] = perm
    reg = Permission.objects.filter(code="treasury.register.view").first()
    if reg:
        for role in Role.objects.filter(permissions=reg):
            for perm in created.values():
                RolePermission.objects.get_or_create(role=role, permission=perm)


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0016_payment_method_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
```

- [ ] **Step 4: Run test + drift**

Run: `cd backend && ../env/bin/python -m pytest apps/admin_rbac/test_treasury_config_permissions.py -q`
Expected: PASS.
Run: `../env/bin/python manage.py makemigrations --check --dry-run`
Expected: "No changes detected".

- [ ] **Step 5: Commit**

```bash
git add backend/apps/admin_rbac/migrations/0017_treasury_config_permissions_seed.py backend/apps/admin_rbac/test_treasury_config_permissions.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): permissions config Tresorerie (view/manage)"
```

---

### Task 6: Frontend — refund-rate config page + menu

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (TREASURY block)
- Create: `angular/src/_api/services/treasury/refund-rate.service.ts`
- Create: `angular/src/_api/pages/treasury/config/refund-rate/refund-rate.component.{ts,html}`
- Modify: `angular/src/app/core/helpers/routes.ts` (`trzRefundRate`)
- Modify: `angular/src/app/features/pages/pages.routes.ts` (treasury children)
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (Configuration group)

**Interfaces:**
- Consumes: `TREASURY.refundRate` (GET/PUT same URL).
- Produces: `RefundRateService` (`get()`, `set(rate)`); route `/treasury/refund-rate`.

- [ ] **Step 1: Add the endpoint**

In `angular/src/_api/config/api.config.ts`, add inside `TREASURY` (after `paymentMethod`):

```ts
  refundRate: `${TRZ}/refund-rate/`,
```

- [ ] **Step 2: Create the service**

Create `angular/src/_api/services/treasury/refund-rate.service.ts`:

```ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';

@Injectable({ providedIn: 'root' })
export class RefundRateService {
  private http = inject(HttpClient);
  get(): Observable<number> {
    return this.http.get<any>(TREASURY.refundRate).pipe(map(r => Number((r.data ?? r).rate)));
  }
  set(rate: number): Observable<number> {
    return this.http.put<any>(TREASURY.refundRate, { rate }).pipe(map(r => Number((r.data ?? r).rate)));
  }
}
```

- [ ] **Step 3: Create the page (TS)**

Create `angular/src/_api/pages/treasury/config/refund-rate/refund-rate.component.ts`:

```ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RefundRateService } from '../../../../services/treasury/refund-rate.service';
import { HasPermissionDirective } from '../../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-refund-rate',
  standalone: true,
  templateUrl: './refund-rate.component.html',
  imports: [CommonModule, FormsModule, HasPermissionDirective],
})
export class RefundRateComponent implements OnInit {
  private svc = inject(RefundRateService);
  rate = 0; saving = false; saved = false; errorMsg = '';

  ngOnInit(): void { this.svc.get().subscribe(r => this.rate = r); }
  save(): void {
    if (this.saving) return;
    this.saving = true; this.saved = false; this.errorMsg = '';
    this.svc.set(this.rate).subscribe({
      next: r => { this.rate = r; this.saving = false; this.saved = true; },
      error: e => { this.saving = false; this.errorMsg = e?.error?.error?.message ?? 'Erreur.'; },
    });
  }
}
```

- [ ] **Step 4: Create the page (HTML)**

Create `angular/src/_api/pages/treasury/config/refund-rate/refund-rate.component.html`:

```html
<div class="page-header">
  <div class="add-item d-flex"><div class="page-title"><h4>Remboursement</h4><h6>Taux appliqué au montant payé lors d'une annulation</h6></div></div>
</div>
<div class="card"><div class="card-body" style="max-width:420px;">
  @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
  @if (saved) { <div class="alert alert-success py-2">Taux enregistré.</div> }
  <label class="form-label">Taux de remboursement (%)</label>
  <div class="input-group">
    <input type="number" min="0" max="100" class="form-control" [(ngModel)]="rate" />
    <span class="input-group-text">%</span>
  </div>
  <small class="text-muted d-block mt-1">0 % = aucun remboursement. Le remboursement sort de la caisse ouverte de l'agent.</small>
  <button class="btn btn-primary mt-3" *hasPermission="'treasury.config.manage'" (click)="save()" [disabled]="saving">
    {{ saving ? 'Enregistrement…' : 'Enregistrer' }}
  </button>
</div></div>
```

- [ ] **Step 5: Route + sidebar**

`routes.ts`: after `trzPaymentMethods` add `trzRefundRate: '/treasury/refund-rate',`.

`pages.routes.ts` (treasury children, after `payment-methods`):
```ts
                { path: 'refund-rate', loadComponent: () => import('../../../_api/pages/treasury/config/refund-rate/refund-rate.component').then(m => m.RefundRateComponent) },
```

`sidebar.service.ts` — in the Trésorerie "Configuration" group `subMenus`, after "Moyens de paiement":
```ts
            { menuValue: 'Remboursement', route: routes.trzRefundRate, base: 'refund-rate', permission: 'treasury.config.view' },
```

- [ ] **Step 6: Verify build**

Run: `cd angular && npx ng build`
Expected: build succeeds.

- [ ] **Step 7: Commit**

```bash
git add angular/src/_api/config/api.config.ts angular/src/_api/services/treasury/refund-rate.service.ts angular/src/_api/pages/treasury/config/refund-rate angular/src/app/core/helpers/routes.ts angular/src/app/features/pages/pages.routes.ts angular/src/app/core/service/sidebar/sidebar.service.ts
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(front): page config Taux de remboursement + menu"
```

---

### Task 7: Full-suite verification

**Files:** none (verification only).

- [ ] **Step 1: Full backend suite**

Run: `cd backend && ../env/bin/python -m pytest -q`
Expected: all pass. Watch `apps/voyages_consignment/tests.py` and `apps/voyages_booking` cancel tests — if any cancels a **paid** item with a non-zero rate and no open caisse, it now raises; such a test must either set rate 0 (default — most do nothing) or open a caisse. Fix any that regress by opening a caisse in their fixture, matching the new behaviour.

- [ ] **Step 2: Migration drift**

Run: `cd backend && ../env/bin/python manage.py makemigrations --check --dry-run`
Expected: "No changes detected".

- [ ] **Step 3: Frontend build**

Run: `cd angular && npx ng build`
Expected: build succeeds.

- [ ] **Step 4: Apply migrations to dev DB (manual note)**

Note for the human: run `../env/bin/python manage.py migrate` (refund mapping for existing companies + RBAC perms). A treasury user must log out/in for the new `treasury.config.*` permissions (admins bypass). Prod auto-migrates on deploy.

---

## Notes for the executor

- With the **default 0 % rate**, `refund_on_cancel` returns None before touching a caisse — so existing cancel tests that don't set a rate keep passing without an open session.
- `refund_on_cancel` deliberately does **not** link the source booking/parcel on the Transaction (`Transaction.booking`/`parcel` are the *ticketing* models, wrong type here) — the reference lives in the description.
- `cancel_booking` cancels linked bagages with `_skip_refund=True` and issues one combined refund, so a bagage attached to a cancelled booking is never refunded twice.
- All three cancel services are `@transaction.atomic` (Task 3 adds it to `cancel_baggage`), so a refund failure (e.g. no caisse when rate > 0) rolls the whole cancellation back.
