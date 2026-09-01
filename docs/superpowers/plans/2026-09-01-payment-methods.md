# Configurable Payment Methods — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Company-scoped `PaymentMethod` config with a `requires_payment` flag; sales record treasury income only for methods that require payment, and the placeholder payment selects get populated.

**Architecture:** New `PaymentMethod` model (source of truth), seeded per company. The three `record_*_payment` treasury services resolve the method by code and skip income for no-payment methods; `_normalize_payment` stays as fallback. CRUD under Trésorerie → Configuration; three frontend selects load active methods.

**Tech Stack:** Django + DRF, pytest; Angular 17 standalone components.

**Spec:** `docs/superpowers/specs/2026-09-01-payment-methods-design.md`

## Global Constraints

- `payment_method` stays a **code string**; `PaymentMethod` is the behaviour source of truth. No FK, no migration of Booking/Parcel/Baggage.
- `_normalize_payment` remains the fallback for unknown/empty codes.
- No-payment methods never call `create_transaction` (so no "open cash session" requirement blocks loyalty/unpaid sales).
- New RBAC perms invisible until granted to a role + user re-login (admins bypass).
- List responses keep `{success,data,pagination}`; frontend services map `r.results ?? r.data ?? r`.
- Create modals stay open after save (`editId ? close() : openCreate()`).
- French UI copy. Backend tests via `cd backend && ../env/bin/python -m pytest`. Frontend via `cd angular && npx ng build`.
- Commits authored as shimi: `git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "..."`.

---

### Task 1: PaymentMethod model + migration

**Files:**
- Create: `backend/apps/treasury/models/payment_method.py`
- Modify: `backend/apps/treasury/models/__init__.py`
- Create: migration via `makemigrations` (new model — no interactive prompt)
- Test: `backend/apps/treasury/tests/test_payment_methods.py`

**Interfaces:**
- Produces: `PaymentMethod(company, code, name, requires_payment, mode, is_active, is_system)`.

- [ ] **Step 1: Write the failing test**

Create `backend/apps/treasury/tests/test_payment_methods.py`:

```python
import pytest


def _company(name="PMCo", email="pm@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company


@pytest.mark.django_db
def test_payment_method_model():
    from apps.treasury.models import PaymentMethod
    company = _company()
    pm = PaymentMethod.objects.create(company=company, code="orange_money", name="Orange Money",
                                      requires_payment=True, mode="mobile_money", is_system=True)
    assert str(pm) == "Orange Money"
    assert pm.requires_payment and pm.mode == "mobile_money"
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_payment_methods.py -q`
Expected: FAIL — `cannot import name 'PaymentMethod'`.

- [ ] **Step 3: Create the model**

Create `backend/apps/treasury/models/payment_method.py`:

```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel
from apps.treasury.models.transaction import Transaction


class PaymentMethod(BaseModel):
    """Moyen de paiement configurable par société."""
    company = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                on_delete=models.CASCADE, related_name="payment_methods")
    code = models.SlugField(_("code"), max_length=40)
    name = models.CharField(_("nom"), max_length=100)
    requires_payment = models.BooleanField(_("exige un paiement"), default=True)
    mode = models.CharField(_("mode trésorerie"), max_length=20,
                            choices=Transaction.PaymentMode.choices,
                            default=Transaction.PaymentMode.CASH)
    is_active = models.BooleanField(_("actif"), default=True)
    is_system = models.BooleanField(_("système"), default=False)

    class Meta(BaseModel.Meta):
        verbose_name = _("moyen de paiement")
        unique_together = [("company", "code")]
        ordering = ["name"]

    def __str__(self):
        return self.name
```

Add to `backend/apps/treasury/models/__init__.py` (follow the existing import + `__all__` style):
`from .payment_method import PaymentMethod` and add `"PaymentMethod"` to `__all__` if present.

- [ ] **Step 4: Generate migration + run test**

Run: `cd backend && ../env/bin/python manage.py makemigrations treasury`
Expected: creates `00NN_paymentmethod.py` (no prompt — new model).
Run: `../env/bin/python -m pytest apps/treasury/tests/test_payment_methods.py -q`
Expected: PASS.
Run: `../env/bin/python manage.py makemigrations --check --dry-run`
Expected: "No changes detected".

- [ ] **Step 5: Commit**

```bash
git add backend/apps/treasury/models/payment_method.py backend/apps/treasury/models/__init__.py backend/apps/treasury/migrations/*paymentmethod*.py backend/apps/treasury/tests/test_payment_methods.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): modele PaymentMethod (moyens de paiement configurables)"
```

---

### Task 2: Seed defaults + create_company hook + data migration

**Files:**
- Modify: `backend/apps/treasury/services/seed.py`
- Modify: `backend/apps/treasury/services/__init__.py` (export `seed_payment_methods`)
- Modify: `backend/apps/system_config/services/company_services.py` (~line 138-139)
- Create: `backend/apps/treasury/migrations/00XX_seed_payment_methods.py` (data)
- Test: append to `test_payment_methods.py`

**Interfaces:**
- Consumes: `PaymentMethod` (Task 1).
- Produces: `seed_payment_methods(company, created_by=None) -> int`; the 5 seeded rows.

- [ ] **Step 1: Write the failing test**

Append to `test_payment_methods.py`:

```python
@pytest.mark.django_db
def test_seed_payment_methods_idempotent():
    from apps.treasury.models import PaymentMethod
    from apps.treasury.services.seed import seed_payment_methods
    company = _company(name="Seed", email="seed@x.com")
    # create_company already seeds them; assert the 5 defaults exist
    codes = set(PaymentMethod.objects.filter(company=company).values_list("code", flat=True))
    assert {"cash", "orange_money", "mobile_money", "loyalty", "unpaid"} <= codes
    loyalty = PaymentMethod.objects.get(company=company, code="loyalty")
    assert loyalty.requires_payment is False
    n_before = PaymentMethod.objects.filter(company=company).count()
    seed_payment_methods(company)  # re-run
    assert PaymentMethod.objects.filter(company=company).count() == n_before
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_payment_methods.py::test_seed_payment_methods_idempotent -q`
Expected: FAIL — `cannot import name 'seed_payment_methods'` (and the create_company hook not wired).

- [ ] **Step 3: Add the seed function**

Append to `backend/apps/treasury/services/seed.py`:

```python
_PAYMENT_METHODS = [
    ("cash",         "Espèces",            True,  "cash"),
    ("orange_money", "Orange Money",       True,  "mobile_money"),
    ("mobile_money", "Mobile Money (MTN)", True,  "mobile_money"),
    ("loyalty",      "Point fidélité",     False, "cash"),
    ("unpaid",       "Non payé",           False, "cash"),
]


def seed_payment_methods(company, created_by=None) -> int:
    from apps.treasury.models import PaymentMethod
    created = 0
    for code, name, requires, mode in _PAYMENT_METHODS:
        _, was_created = PaymentMethod.objects.get_or_create(
            company=company, code=code,
            defaults={"name": name, "requires_payment": requires, "mode": mode,
                      "is_system": True, "created_by": created_by})
        created += int(was_created)
    return created
```

Export it in `backend/apps/treasury/services/__init__.py` (add to the imports and `__all__` next to `seed_treasury_mapping`).

- [ ] **Step 4: Hook into create_company**

In `backend/apps/system_config/services/company_services.py`, right after the
`seed_treasury_mapping(company, created_by=created_by)` call (~line 139), add:

```python
    from apps.treasury.services.seed import seed_payment_methods
    seed_payment_methods(company, created_by=created_by)
```

- [ ] **Step 5: Data migration for existing companies**

Create `backend/apps/treasury/migrations/00XX_seed_payment_methods.py` (use the
actual next number; depends on the Task 1 migration):

```python
from django.db import migrations

DEFAULTS = [
    ("cash",         "Espèces",            True,  "cash"),
    ("orange_money", "Orange Money",       True,  "mobile_money"),
    ("mobile_money", "Mobile Money (MTN)", True,  "mobile_money"),
    ("loyalty",      "Point fidélité",     False, "cash"),
    ("unpaid",       "Non payé",           False, "cash"),
]


def seed(apps, schema_editor):
    Company = apps.get_model("system_config", "Company")
    PaymentMethod = apps.get_model("treasury", "PaymentMethod")
    for company in Company.objects.all():
        for code, name, requires, mode in DEFAULTS:
            PaymentMethod.objects.get_or_create(
                company=company, code=code,
                defaults={"name": name, "requires_payment": requires, "mode": mode, "is_system": True})


def unseed(apps, schema_editor):
    PaymentMethod = apps.get_model("treasury", "PaymentMethod")
    PaymentMethod.objects.filter(is_system=True,
                                 code__in=[d[0] for d in DEFAULTS]).delete()


class Migration(migrations.Migration):
    dependencies = [("treasury", "00NN_paymentmethod")]  # replace 00NN with Task 1 migration name
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
```

- [ ] **Step 6: Run test + drift**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_payment_methods.py -q`
Expected: PASS (both tests).
Run: `../env/bin/python manage.py makemigrations --check --dry-run`
Expected: "No changes detected".

- [ ] **Step 7: Commit**

```bash
git add backend/apps/treasury/services/seed.py backend/apps/treasury/services/__init__.py backend/apps/system_config/services/company_services.py backend/apps/treasury/migrations/*seed_payment_methods*.py backend/apps/treasury/tests/test_payment_methods.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): seed moyens de paiement par societe (creation + migration)"
```

---

### Task 3: Income integration (resolve + skip no-payment)

**Files:**
- Create: `backend/apps/treasury/services/payment_resolution.py`
- Modify: `backend/apps/treasury/services/booking_sales.py` (`record_booking_payment`)
- Modify: `backend/apps/treasury/services/consignment_sales.py` (`_record_consignment_payment`)
- Modify: `backend/apps/voyages_booking/services/booking_services.py` (`create_booking` — `amount_received=0` for no-payment)
- Test: append to `test_payment_methods.py`

**Interfaces:**
- Consumes: `PaymentMethod`, `_normalize_payment` (existing in `booking_sales.py`).
- Produces: `resolve_payment(company, code) -> PaymentMethod | None`; `_resolve_mode(pm, raw) -> (mode: str, is_cash: bool)`.

- [ ] **Step 1: Write the failing tests**

Append to `test_payment_methods.py`:

```python
@pytest.mark.django_db
def test_booking_payment_requires_payment_records_income():
    # orange_money -> mode mobile_money (non-cash) -> bank branch needs exactly 1 active bank.
    from apps.treasury.services.booking_sales import record_booking_payment
    from apps.treasury.services import create_bank_account
    from decimal import Decimal
    company = _company(name="Req", email="req@x.com")
    from apps.authentication.models import User
    admin = User.objects.get(email="req@x.com")
    create_bank_account(company=company, bank_name="BICEC", account_name="Cpt", account_number="1", created_by=admin)
    txn = record_booking_payment(company, booking=None, amount=Decimal("5000"),
                                 payment_method="orange_money", user=admin)
    assert txn is not None and txn.payment_mode == "mobile_money"


@pytest.mark.django_db
def test_no_payment_method_records_no_income():
    from apps.treasury.services.booking_sales import record_booking_payment
    from apps.treasury.models import Transaction
    from decimal import Decimal
    company = _company(name="Free", email="free@x.com")
    from apps.authentication.models import User
    admin = User.objects.get(email="free@x.com")
    before = Transaction.objects.count()
    txn = record_booking_payment(company, booking=None, amount=Decimal("5000"),
                                 payment_method="loyalty", user=admin)
    assert txn is None
    assert Transaction.objects.count() == before  # no session needed, no income
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_payment_methods.py -k "records_income or no_income" -q`
Expected: FAIL — loyalty currently normalizes to cash and raises/records.

- [ ] **Step 3: Create the resolver**

Create `backend/apps/treasury/services/payment_resolution.py`:

```python
def resolve_payment(company, code):
    """Le PaymentMethod (company, code) ou None si introuvable/vide."""
    if not code:
        return None
    from apps.treasury.models import PaymentMethod
    return PaymentMethod.objects.filter(company=company, code=code, is_deleted=False).first()


def resolve_mode(pm, raw, normalize):
    """(mode trésorerie, is_cash) depuis le PaymentMethod, sinon fallback normalize(raw)."""
    if pm is not None:
        return pm.mode, pm.mode == "cash"
    return normalize(raw)
```

- [ ] **Step 4: Wire into booking_sales**

In `backend/apps/treasury/services/booking_sales.py::record_booking_payment`,
replace the line `mode, is_cash = _normalize_payment(payment_method)` with:

```python
    from apps.treasury.services.payment_resolution import resolve_payment, resolve_mode
    pm = resolve_payment(company, payment_method)
    if pm is not None and not pm.requires_payment:
        return None
    mode, is_cash = resolve_mode(pm, payment_method, _normalize_payment)
```

- [ ] **Step 5: Wire into consignment_sales**

In `backend/apps/treasury/services/consignment_sales.py::_record_consignment_payment`,
replace `mode, is_cash = _normalize_payment(payment_method)` with the same
block (it imports `_normalize_payment` from `booking_sales`):

```python
    from apps.treasury.services.payment_resolution import resolve_payment, resolve_mode
    pm = resolve_payment(company, payment_method)
    if pm is not None and not pm.requires_payment:
        return None
    mode, is_cash = resolve_mode(pm, payment_method, _normalize_payment)
```

- [ ] **Step 6: Zero the received amount for no-payment bookings**

In `backend/apps/voyages_booking/services/booking_services.py::create_booking`,
after `received = Decimal(str(amount_received)) if amount_received is not None else total`
(~line 146), add:

```python
        from apps.treasury.services.payment_resolution import resolve_payment
        _pm = resolve_payment(company, payment_method)
        if _pm is not None and not _pm.requires_payment:
            received = Decimal("0")
```

(Do not change the `record_booking_payment` call — it already returns None for no-payment.)

- [ ] **Step 7: Run tests**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_payment_methods.py -q`
Expected: PASS (all).

- [ ] **Step 8: Commit**

```bash
git add backend/apps/treasury/services/payment_resolution.py backend/apps/treasury/services/booking_sales.py backend/apps/treasury/services/consignment_sales.py backend/apps/voyages_booking/services/booking_services.py backend/apps/treasury/tests/test_payment_methods.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): resolution moyen de paiement (income seulement si paiement requis)"
```

---

### Task 4: CRUD API (serializers + views + urls)

**Files:**
- Modify: `backend/apps/treasury/serializers.py`
- Modify: `backend/apps/treasury/views.py`
- Modify: `backend/apps/treasury/urls.py`
- Test: append to `test_payment_methods.py`

**Interfaces:**
- Consumes: `PaymentMethod` (Task 1); `_company`, `error_response`, `success_response`, `created_response`, `no_content_response`, `HasModulePermission`, `IsAuthenticated` (existing in views.py).
- Produces: `/treasury/payment-methods/` + `/treasury/payment-methods/<uuid:pk>/`.

- [ ] **Step 1: Write the failing tests**

Append to `test_payment_methods.py`:

```python
@pytest.mark.django_db
def test_payment_method_crud_api():
    from rest_framework.test import APIClient
    from apps.authentication.models import User
    from apps.treasury.models import PaymentMethod
    company = _company(name="Api", email="api2@x.com")
    admin = User.objects.get(email="api2@x.com")
    c = APIClient(); c.force_authenticate(user=admin)
    # list seeded methods
    r = c.get("/api/v1/treasury/payment-methods/")
    assert r.status_code == 200
    body = r.json(); data = body["data"] if "data" in body else body
    assert any(m["code"] == "orange_money" for m in data)
    # create
    r = c.post("/api/v1/treasury/payment-methods/",
               {"code": "wave", "name": "Wave", "requires_payment": True, "mode": "mobile_money"}, format="json")
    assert r.status_code in (200, 201), r.content
    # system row cannot be deleted
    sysm = PaymentMethod.objects.get(company=company, code="cash")
    r = c.delete(f"/api/v1/treasury/payment-methods/{sysm.id}/")
    assert r.status_code == 400
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_payment_methods.py::test_payment_method_crud_api -q`
Expected: FAIL — 404 (route missing).

- [ ] **Step 3: Add serializers**

Append to `backend/apps/treasury/serializers.py` (imports of `PaymentMethod` at top or inline):

```python
from apps.treasury.models import PaymentMethod  # noqa: E402  (add near other model imports)


class PaymentMethodReadSerializer(serializers.ModelSerializer):
    mode_display = serializers.CharField(source="get_mode_display", read_only=True)

    class Meta:
        model = PaymentMethod
        fields = ["id", "code", "name", "requires_payment", "mode", "mode_display",
                  "is_active", "is_system", "created_at"]


class PaymentMethodWriteSerializer(serializers.Serializer):
    code = serializers.SlugField(max_length=40, required=False, allow_blank=True)
    name = serializers.CharField(max_length=100)
    requires_payment = serializers.BooleanField(required=False, default=True)
    mode = serializers.ChoiceField(choices=Transaction.PaymentMode.choices, required=False,
                                   default=Transaction.PaymentMode.CASH)
    is_active = serializers.BooleanField(required=False, default=True)
```

(`Transaction` is already imported at the top of `serializers.py`.)

- [ ] **Step 4: Add views**

Append to `backend/apps/treasury/views.py`:

```python
from apps.treasury.serializers import PaymentMethodReadSerializer, PaymentMethodWriteSerializer  # noqa: E402
from django.utils.text import slugify  # noqa: E402


class PaymentMethodListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.paymentmethod.view", "POST": "treasury.paymentmethod.manage"}

    def get(self, request):
        from apps.treasury.models import PaymentMethod
        qs = PaymentMethod.objects.filter(company=_company(request), is_deleted=False)
        if request.query_params.get("active") == "true":
            qs = qs.filter(is_active=True)
        return success_response(PaymentMethodReadSerializer(qs.order_by("name"), many=True).data)

    def post(self, request):
        from apps.treasury.models import PaymentMethod
        ser = PaymentMethodWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        company = _company(request)
        code = d.get("code") or slugify(d["name"])
        if PaymentMethod.objects.filter(company=company, code=code, is_deleted=False).exists():
            return error_response("Un moyen de paiement avec ce code existe déjà.")
        pm = PaymentMethod.objects.create(
            company=company, code=code, name=d["name"],
            requires_payment=d.get("requires_payment", True), mode=d.get("mode", "cash"),
            is_active=d.get("is_active", True), created_by=request.user)
        return created_response(PaymentMethodReadSerializer(pm).data)


class PaymentMethodDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.paymentmethod.view", "PATCH": "treasury.paymentmethod.manage",
                      "DELETE": "treasury.paymentmethod.manage"}

    def _obj(self, request, pk):
        from apps.treasury.models import PaymentMethod
        return PaymentMethod.objects.filter(company=_company(request), id=pk, is_deleted=False).first()

    def get(self, request, pk):
        obj = self._obj(request, pk)
        return success_response(PaymentMethodReadSerializer(obj).data) if obj else error_response("Introuvable.", status_code=404)

    def patch(self, request, pk):
        obj = self._obj(request, pk)
        if not obj:
            return error_response("Introuvable.", status_code=404)
        ser = PaymentMethodWriteSerializer(data=request.data, partial=True)
        ser.is_valid(raise_exception=True)
        for k, v in ser.validated_data.items():
            if k == "code" and obj.is_system:
                continue  # ne pas renommer le code d'un moyen système
            setattr(obj, k, v)
        obj.updated_by = request.user
        obj.save()
        return success_response(PaymentMethodReadSerializer(obj).data)

    def delete(self, request, pk):
        obj = self._obj(request, pk)
        if not obj:
            return error_response("Introuvable.", status_code=404)
        if obj.is_system:
            return error_response("Ce moyen de paiement système ne peut pas être supprimé (désactivez-le).")
        obj.soft_delete(user=request.user)
        return no_content_response()
```

- [ ] **Step 5: Add urls**

In `backend/apps/treasury/urls.py`, add inside `urlpatterns` (after the recettes block):

```python
    path("payment-methods/",             views.PaymentMethodListView.as_view(),   name="paymentmethod-list"),
    path("payment-methods/<uuid:pk>/",   views.PaymentMethodDetailView.as_view(), name="paymentmethod-detail"),
```

- [ ] **Step 6: Run tests**

Run: `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_payment_methods.py -q`
Expected: PASS (all). (Admin is institution admin → bypasses RBAC, so this passes before Task 5.)

- [ ] **Step 7: Commit**

```bash
git add backend/apps/treasury/serializers.py backend/apps/treasury/views.py backend/apps/treasury/urls.py backend/apps/treasury/tests/test_payment_methods.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): API CRUD moyens de paiement (garde suppression systeme)"
```

---

### Task 5: RBAC permissions

**Files:**
- Create: `backend/apps/admin_rbac/migrations/0016_payment_method_permissions_seed.py`
- Test: `backend/apps/admin_rbac/test_payment_method_permissions.py`

**Interfaces:**
- Consumes: `admin_rbac` `AppModule`, `Permission`, `Role`, `RolePermission` (through model). Mirror `0015_income_permissions_seed.py`.

- [ ] **Step 1: Write the failing test**

Create `backend/apps/admin_rbac/test_payment_method_permissions.py`:

```python
import pytest


@pytest.mark.django_db
def test_payment_method_permissions_exist():
    from apps.admin_rbac.models import Permission
    assert Permission.objects.filter(code="treasury.paymentmethod.view").exists()
    assert Permission.objects.filter(code="treasury.paymentmethod.manage").exists()
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/admin_rbac/test_payment_method_permissions.py -q`
Expected: FAIL — perm not seeded.

- [ ] **Step 3: Create the migration**

Create `backend/apps/admin_rbac/migrations/0016_payment_method_permissions_seed.py` (mirror 0015):

```python
"""Data migration — permissions Moyens de paiement (Trésorerie) + octroi aux rôles caisse."""
from django.db import migrations

PERMS = [
    ("treasury.paymentmethod.view",   "Consulter les moyens de paiement", "view"),
    ("treasury.paymentmethod.manage", "Gérer les moyens de paiement",     "update"),
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
    dependencies = [("admin_rbac", "0015_income_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
```

- [ ] **Step 4: Run test + drift**

Run: `cd backend && ../env/bin/python -m pytest apps/admin_rbac/test_payment_method_permissions.py -q`
Expected: PASS.
Run: `../env/bin/python manage.py makemigrations --check --dry-run`
Expected: "No changes detected".

- [ ] **Step 5: Commit**

```bash
git add backend/apps/admin_rbac/migrations/0016_payment_method_permissions_seed.py backend/apps/admin_rbac/test_payment_method_permissions.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): permissions moyens de paiement (view/manage) + octroi roles caisse"
```

---

### Task 6: Frontend config page + service + menu

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (TREASURY block)
- Create: `angular/src/_api/services/treasury/payment-method.service.ts`
- Create: `angular/src/_api/pages/treasury/config/payment-methods/payment-methods.component.{ts,html}`
- Modify: `angular/src/app/core/helpers/routes.ts` (add `trzPaymentMethods`)
- Modify: `angular/src/app/features/pages/pages.routes.ts` (treasury children)
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (Configuration group)

**Interfaces:**
- Consumes: `TREASURY.paymentMethods` endpoints; `PaginatePipe`/`TablePaginatorComponent`/`HasPermissionDirective` (existing).
- Produces: `PaymentMethodService` (`list(activeOnly?)`, `create`, `update`, `remove`); route `/treasury/payment-methods`.

- [ ] **Step 1: Add endpoints**

In `angular/src/_api/config/api.config.ts`, add inside the `TREASURY` object (before the closing `};`):

```ts
  paymentMethods: `${TRZ}/payment-methods/`,
  paymentMethod:  (id: string) => `${TRZ}/payment-methods/${id}/`,
```

- [ ] **Step 2: Create the service**

Create `angular/src/_api/services/treasury/payment-method.service.ts`:

```ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';

@Injectable({ providedIn: 'root' })
export class PaymentMethodService {
  private http = inject(HttpClient);

  list(activeOnly = false): Observable<any[]> {
    let p = new HttpParams();
    if (activeOnly) p = p.set('active', 'true');
    return this.http.get<any>(TREASURY.paymentMethods, { params: p }).pipe(map(r => r.results ?? r.data ?? r));
  }
  create(body: any): Observable<any> { return this.http.post<any>(TREASURY.paymentMethods, body).pipe(map(r => r.data ?? r)); }
  update(id: string, body: any): Observable<any> { return this.http.patch<any>(TREASURY.paymentMethod(id), body).pipe(map(r => r.data ?? r)); }
  remove(id: string): Observable<unknown> { return this.http.delete(TREASURY.paymentMethod(id)); }
}
```

- [ ] **Step 3: Create the config page (TS)**

Create `payment-methods.component.ts` (model on `fleet-config/fuel-types` — form + editId + openCreate + stay-open-on-save):

```ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PaymentMethodService } from '../../../../services/treasury/payment-method.service';
import { HasPermissionDirective } from '../../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../../app/shared/table-paginator/table-paginator.component';

@Component({
  selector: 'app-payment-methods',
  standalone: true,
  templateUrl: './payment-methods.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, CommonModule, FormsModule, ReactiveFormsModule, HasPermissionDirective],
})
export class PaymentMethodsComponent implements OnInit {
  pg: PageState = { page: 1, size: 25 };
  private svc = inject(PaymentMethodService);
  private fb = inject(FormBuilder);
  rows: any[] = []; loading = false; saving = false; editId: string | null = null; errorMsg = '';
  modes = [
    { v: 'cash', l: 'Espèces' }, { v: 'mobile_money', l: 'Mobile Money' },
    { v: 'transfer', l: 'Virement' }, { v: 'check', l: 'Chèque' },
  ];
  form = this.fb.group({
    name: ['', Validators.required], code: [''],
    mode: ['cash', Validators.required], requires_payment: [true], is_active: [true],
  });

  ngOnInit(): void { this.load(); }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ mode: 'cash', requires_payment: true, is_active: true }); }
  openEdit(r: any): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.patchValue({ name: r.name, code: r.code, mode: r.mode, requires_payment: r.requires_payment, is_active: r.is_active });
  }
  save(): void {
    if (this.form.invalid || this.saving) return;
    this.saving = true;
    const req = this.editId ? this.svc.update(this.editId, this.form.value) : this.svc.create(this.form.value);
    req.subscribe({
      next: () => { this.saving = false; this.load(); this.editId ? this.close() : this.openCreate(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.error?.message ?? 'Erreur.'; },
    });
  }
  remove(r: any): void {
    if (r.is_system) return;
    if (confirm('Supprimer ce moyen de paiement ?')) this.svc.remove(r.id).subscribe(() => this.load());
  }
  private close(): void { document.getElementById('pm-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```

- [ ] **Step 4: Create the config page (HTML)**

Create `payment-methods.component.html` (model chrome on `general-expenses.component.html`: `.page-header`, `.card`, `@for ... paginate`, modal `#pm-modal`). Columns: Nom, Code, Mode, Exige paiement (badge Oui/Non), Actif, Actions (Modifier; Supprimer hidden when `r.is_system`). Modal fields: Nom, Code (optional), Mode (`modes`), "Exige un paiement" checkbox, "Actif" checkbox. Add-button `data-bs-target="#pm-modal"` guarded by `*hasPermission="'treasury.paymentmethod.manage'"`.

- [ ] **Step 5: Route + sidebar**

`routes.ts`: after the treasury recettes routes add `trzPaymentMethods: '/treasury/payment-methods',`.

`pages.routes.ts` (treasury children, after `recettes-autre`):
```ts
                { path: 'payment-methods', loadComponent: () => import('../../../_api/pages/treasury/config/payment-methods/payment-methods.component').then(m => m.PaymentMethodsComponent) },
```

`sidebar.service.ts` — in the Trésorerie "Configuration" group `subMenus`, add:
```ts
            { menuValue: 'Moyens de paiement', route: routes.trzPaymentMethods, base: 'payment-methods', permission: 'treasury.paymentmethod.view' },
```

- [ ] **Step 6: Verify build**

Run: `cd angular && npx ng build`
Expected: build succeeds.

- [ ] **Step 7: Commit**

```bash
git add angular/src/_api/config/api.config.ts angular/src/_api/services/treasury/payment-method.service.ts angular/src/_api/pages/treasury/config/payment-methods angular/src/app/core/helpers/routes.ts angular/src/app/features/pages/pages.routes.ts angular/src/app/core/service/sidebar/sidebar.service.ts
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(front): page config Moyens de paiement + menu"
```

---

### Task 7: Wire payment selects (booking / colis / bagage)

**Files:**
- Modify: `angular/src/_api/pages/voyages-booking/new-booking/new-booking.component.{ts,html}`
- Modify: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.{ts,html}`
- Modify: `angular/src/_api/pages/voyages-consignment/baggage/baggage.component.{ts,html}`

**Interfaces:**
- Consumes: `PaymentMethodService.list(true)` (Task 6).

- [ ] **Step 1: new-booking TS**

In `new-booking.component.ts`: inject `PaymentMethodService`; add `paymentMethods: any[] = [];`; in `ngOnInit` (or the constructor init) call `this.pmSvc.list(true).subscribe(d => this.paymentMethods = d);`. When `paymentMethod` changes, if the selected method has `requires_payment === false` set `this.amountReceived = 0`. Add a handler:
```ts
onPaymentMethodChange(): void {
  const pm = this.paymentMethods.find(m => m.code === this.paymentMethod);
  if (pm && !pm.requires_payment) this.amountReceived = 0;
}
```

- [ ] **Step 2: new-booking HTML**

Replace the placeholder select (~line 127) with:
```html
        <select class="form-select" [(ngModel)]="paymentMethod" (ngModelChange)="onPaymentMethodChange()">
          <option value="" disabled selected>— Choisir —</option>
          @for (m of paymentMethods; track m.id) { <option [value]="m.code">{{ m.name }}</option> }
        </select>
```

- [ ] **Step 3: colis (parcels) TS + HTML**

In `parcels.component.ts`: inject `PaymentMethodService`, add `paymentMethods: any[] = []`, load in `ngOnInit` via `list(true)`.
In `parcels.component.html` (~line 127) replace the placeholder select with:
```html
        <select formControlName="payment_method" class="form-select">
          <option value="" disabled selected>— Choisir —</option>
          @for (m of paymentMethods; track m.id) { <option [value]="m.code">{{ m.name }}</option> }
        </select>
```

- [ ] **Step 4: bagage (baggage) TS + HTML**

Same as Step 3 for `baggage.component.ts` / `baggage.component.html` (~line 124).

- [ ] **Step 5: Verify build**

Run: `cd angular && npx ng build`
Expected: build succeeds.

- [ ] **Step 6: Commit**

```bash
git add angular/src/_api/pages/voyages-booking/new-booking angular/src/_api/pages/voyages-consignment/parcels angular/src/_api/pages/voyages-consignment/baggage
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(front): selects moyens de paiement (reservation/colis/bagage)"
```

---

### Task 8: Full-suite verification

**Files:** none (verification only).

- [ ] **Step 1: Full backend suite**

Run: `cd backend && ../env/bin/python -m pytest -q`
Expected: all pass (watch `test_mapping_seed` and any treasury seed-count test — `PaymentMethod` is a new model, unrelated to `MovementAccountMapping`, so counts are unaffected).

- [ ] **Step 2: Migration drift**

Run: `cd backend && ../env/bin/python manage.py makemigrations --check --dry-run`
Expected: "No changes detected".

- [ ] **Step 3: Frontend build**

Run: `cd angular && npx ng build`
Expected: build succeeds.

- [ ] **Step 4: Apply migrations to dev DB (manual note)**

Note for the human: run `../env/bin/python manage.py migrate` so existing
companies get seeded payment methods; a treasury user must log out/in for the
new `treasury.paymentmethod.*` permissions (admins bypass). Prod auto-migrates
on deploy.

---

## Notes for the executor

- No-payment methods (`loyalty`, `unpaid`) must never reach `create_transaction` — the early `return None` in Task 3 guarantees this, so a loyalty/unpaid sale does not require an open cash session.
- `_normalize_payment` stays untouched as the fallback for unknown/empty codes; only the call sites gain the resolve-and-skip prelude.
- The booking payment `<select>` binds by `code` (value) and shows `name` (label). The three sale flows all store the code in `payment_method`.
- Admin (institution admin) bypasses RBAC, so Task 4 API tests pass before Task 5's permission seed exists.
