# Recettes Module Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Trésorerie › Recettes sub-menu that lists/filters/prints all income (voyage tickets, colis, bagage) and lets users manually record "autre" income, reading from the existing `Transaction` model.

**Architecture:** Backend reads income directly from `Transaction` (`transaction_type='income'`) via new selectors → serializers → views → urls, mirroring the Dépenses module. One write path (`record_other_income`) reuses `create_transaction` + `resolve_disbursement_session`. Frontend adds one route-parametrized list component (voyage/colis/bagage/autre) + a dashboard, an income service, config/routes/sidebar wiring.

**Tech Stack:** Django + DRF, pytest; Angular 17 standalone components; WeasyPrint (PDF); OHADA accounting bridge (existing).

**Spec:** `docs/superpowers/specs/2026-08-30-recettes-module-design.md`

## Global Constraints

- French UI copy throughout; money formatted `#,##0` with space thousands separator + " FCFA".
- Amounts `DecimalField(max_digits=12, decimal_places=2)`; positive only.
- List endpoints return `{success, data, pagination}` (StandardResultsSetPagination); frontend maps `r.results ?? r.data ?? r`; never `r.results` alone.
- Reuse `create_transaction`, `resolve_disbursement_session`, `register_agency_scope`, `company_header_html`, `PaginatePipe`, `TablePaginatorComponent` — no duplicating that logic.
- New RBAC permissions are invisible until granted to a role + the user re-logs in (admins bypass).
- Primary brand color `#0068B8`.
- Backend tests run via `pytest` from `backend/` (pytest.ini, `DJANGO_SETTINGS_MODULE=config.settings.local`). Test files live beside their app, e.g. `apps/treasury/tests/test_*.py`.
- Frontend has no unit-test suite; verify frontend tasks with `cd angular && npx ng build`.
- Commits authored as shimi, no Claude co-author trailer. Use:
  `git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "..."`

---

### Task 1: Income selectors

**Files:**
- Create: `backend/apps/treasury/selectors/incomes.py`
- Test: `backend/apps/treasury/tests/test_incomes.py`

**Interfaces:**
- Consumes: `apps.treasury.models.Transaction`; `apps.treasury.scoping.register_agency_scope(user) -> (scoped: bool, agency_id)`.
- Produces:
  - `list_income(company_id, *, category=None, agency_scope=None, date_from=None, date_to=None, payment_mode=None) -> QuerySet[Transaction]`
  - `income_dashboard(company_id, *, agency_scope=None) -> dict` with keys `today_total, month_total, voyage_total, parcel_total, baggage_total, other_total, total, count`.

- [ ] **Step 1: Write the failing test**

Create `backend/apps/treasury/tests/test_incomes.py`:

```python
import pytest
from decimal import Decimal
from django.utils import timezone
from apps.authentication.models import User
from apps.system_config.models import Agency
from apps.users.services.user_services import create_user
from apps.treasury.models import Transaction
from apps.treasury.services.services import create_cash_register, open_session
from apps.treasury.services.booking_sales import record_booking_payment  # noqa: F401
from apps.treasury.services.consignment_sales import record_parcel_payment, record_baggage_payment
from apps.treasury.selectors.incomes import list_income, income_dashboard
from apps.treasury.scoping import register_agency_scope


def _company(name="Inc Co", email="inc@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.mark.django_db
def test_list_income_filters_by_category():
    company, admin = _company()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    record_parcel_payment(company, parcel=None, amount=Decimal("8000"), payment_method="cash", user=admin)
    record_baggage_payment(company, baggage=None, amount=Decimal("2000"), payment_method="cash", user=admin)
    parcels = list_income(company.id, category=Transaction.Category.PARCEL_SHIPPING)
    assert parcels.count() == 1
    assert parcels.first().category == "parcel_shipping"
    assert list_income(company.id).count() == 2


@pytest.mark.django_db
def test_list_income_date_range():
    company, admin = _company(name="IncDate", email="incd@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    txn = record_parcel_payment(company, parcel=None, amount=Decimal("5000"), payment_method="cash", user=admin)
    Transaction.objects.filter(id=txn.id).update(transaction_date="2020-01-01")
    assert list_income(company.id, date_from="2021-01-01").count() == 0
    assert list_income(company.id, date_to="2021-01-01").count() == 1


@pytest.mark.django_db
def test_list_income_agency_scope_excludes_other_agency():
    from apps.treasury.services.services import create_transaction
    company, admin = _company(name="IncScope", email="incs@x.com")
    ag_a = Agency.objects.create(company=company, name="Douala", code="DLA")
    ag_b = Agency.objects.create(company=company, name="Yaoundé", code="YDE")
    reg_a = create_cash_register(company=company, name="CA", agency_id=ag_a.id, created_by=admin)
    reg_b = create_cash_register(company=company, name="CB", agency_id=ag_b.id, created_by=admin)
    guichet, _ = create_user(created_by=admin, company=company, email="g@x.com",
                             first_name="G", last_name="U", is_institution_admin=False,
                             default_agency_id=ag_a.id)
    # Admin (unscoped) opens a session on each register and records one cash income each.
    sess_a = open_session(company=company, cash_register=reg_a, created_by=admin)
    txn_a = create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                               category=Transaction.Category.OTHER_INCOME,
                               account_type=Transaction.AccountType.CASH, amount=Decimal("1000"),
                               payment_mode="cash", cash_session=sess_a, created_by=admin)
    sess_b = open_session(company=company, cash_register=reg_b, created_by=admin)
    txn_b = create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                               category=Transaction.Category.OTHER_INCOME,
                               account_type=Transaction.AccountType.CASH, amount=Decimal("2000"),
                               payment_mode="cash", cash_session=sess_b, created_by=admin)
    # Guichetier of agency A sees only agency A income; admin sees both.
    scoped_ids = set(list_income(company.id, agency_scope=register_agency_scope(guichet))
                     .values_list("id", flat=True))
    assert scoped_ids == {txn_a.id}
    admin_ids = set(list_income(company.id, agency_scope=register_agency_scope(admin))
                    .values_list("id", flat=True))
    assert {txn_a.id, txn_b.id} <= admin_ids


@pytest.mark.django_db
def test_income_dashboard_totals_by_source():
    company, admin = _company(name="IncDash", email="incdash@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    record_parcel_payment(company, parcel=None, amount=Decimal("8000"), payment_method="cash", user=admin)
    record_baggage_payment(company, baggage=None, amount=Decimal("2000"), payment_method="cash", user=admin)
    d = income_dashboard(company.id)
    assert d["parcel_total"] == Decimal("8000")
    assert d["baggage_total"] == Decimal("2000")
    assert d["total"] == Decimal("10000")
    assert d["count"] == 2
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && python -m pytest apps/treasury/tests/test_incomes.py -v`
Expected: FAIL with `ModuleNotFoundError: apps.treasury.selectors.incomes`.

- [ ] **Step 3: Write minimal implementation**

Create `backend/apps/treasury/selectors/incomes.py`:

```python
from django.db.models import Sum
from django.utils import timezone
from apps.treasury.models import Transaction


def _apply_income_agency_scope(qs, agency_scope):
    """Income scopes through the cash session's register agency.

    agency_scope = (scoped: bool, agency_id) from register_agency_scope.
    When scoped, keep only cash income of that agency (bank income has no
    agency and is excluded for scoped users).
    """
    if not agency_scope:
        return qs
    scoped, agency_id = agency_scope
    if not scoped:
        return qs
    return qs.filter(cash_session__cash_register__agency_id=agency_id)


def list_income(company_id, *, category=None, agency_scope=None,
                date_from=None, date_to=None, payment_mode=None):
    qs = (Transaction.objects
          .filter(company_id=company_id, is_deleted=False,
                  transaction_type=Transaction.Type.INCOME)
          .select_related("cash_session__cash_register__agency", "bank_account",
                          "voyage_booking", "voyages_parcel", "voyages_baggage", "trip")
          .order_by("-transaction_date", "-created_at"))
    qs = _apply_income_agency_scope(qs, agency_scope)
    if category:
        qs = qs.filter(category=category)
    if date_from:
        qs = qs.filter(transaction_date__gte=date_from)
    if date_to:
        qs = qs.filter(transaction_date__lte=date_to)
    if payment_mode:
        qs = qs.filter(payment_mode=payment_mode)
    return qs


def income_dashboard(company_id, *, agency_scope=None):
    today = timezone.localdate()
    base = list_income(company_id, agency_scope=agency_scope)

    def _sum(qs):
        return qs.aggregate(t=Sum("amount"))["t"] or 0

    def _cat(code):
        return _sum(base.filter(category=code))

    return {
        "today_total": _sum(base.filter(transaction_date=today)),
        "month_total": _sum(base.filter(transaction_date__year=today.year,
                                        transaction_date__month=today.month)),
        "voyage_total":  _cat(Transaction.Category.TICKET_SALES),
        "parcel_total":  _cat(Transaction.Category.PARCEL_SHIPPING),
        "baggage_total": _cat(Transaction.Category.BAGGAGE),
        "other_total":   _cat(Transaction.Category.OTHER_INCOME),
        "total": _sum(base),
        "count": base.count(),
    }
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd backend && python -m pytest apps/treasury/tests/test_incomes.py -v`
Expected: PASS (4 passed).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/treasury/selectors/incomes.py backend/apps/treasury/tests/test_incomes.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): selecteurs recettes (list_income + income_dashboard)"
```

---

### Task 2: `record_other_income` service

**Files:**
- Create: `backend/apps/treasury/services/other_income.py`
- Modify: `backend/apps/treasury/services/__init__.py`
- Test: `backend/apps/treasury/tests/test_other_income.py`

**Interfaces:**
- Consumes: `create_transaction(...)` from `apps.treasury.services.services`; `resolve_disbursement_session(company_id, user, cash_session=None)` from `apps.treasury.services.expense_shared`; `Transaction` enums.
- Produces: `record_other_income(company, *, amount, payment_mode, description, user, cash_session=None) -> Transaction`.

- [ ] **Step 1: Write the failing test**

Create `backend/apps/treasury/tests/test_other_income.py`:

```python
import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.core.exceptions import ApplicationError
from apps.system_config.models import Agency
from apps.users.services.user_services import create_user
from apps.treasury.models import Transaction, CashRegister
from apps.treasury.services.services import create_cash_register, open_session
from apps.treasury.services.other_income import record_other_income


def _company(name="OI Co", email="oi@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.mark.django_db
def test_record_other_income_creates_cash_income_and_updates_balance():
    company, admin = _company()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    txn = record_other_income(company, amount=Decimal("4000"), payment_mode="cash",
                              description="Vente carton", user=admin)
    assert txn.transaction_type == "income"
    assert txn.category == "other_income"
    assert txn.account_type == "cash"
    assert txn.journal_entry is not None
    assert CashRegister.objects.get(id=reg.id).current_balance == Decimal("4000")


@pytest.mark.django_db
def test_record_other_income_without_open_session_raises():
    company, admin = _company(name="OINoSess", email="oins@x.com")
    with pytest.raises(ApplicationError):
        record_other_income(company, amount=Decimal("1000"), payment_mode="cash",
                            description="X", user=admin)


@pytest.mark.django_db
def test_record_other_income_wrong_agency_caisse_raises():
    company, admin = _company(name="OIScope", email="ois@x.com")
    ag_a = Agency.objects.create(company=company, name="Douala", code="DLA")
    ag_b = Agency.objects.create(company=company, name="Yaoundé", code="YDE")
    reg_b = create_cash_register(company=company, name="CB", agency_id=ag_b.id, created_by=admin)
    guichet, _ = create_user(created_by=admin, company=company, email="g2@x.com",
                             first_name="G", last_name="U", is_institution_admin=False,
                             default_agency_id=ag_a.id)
    sess_b = open_session(company=company, cash_register=reg_b, created_by=admin)
    with pytest.raises(ApplicationError):
        record_other_income(company, amount=Decimal("1000"), payment_mode="cash",
                            description="X", user=guichet, cash_session=sess_b)
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && python -m pytest apps/treasury/tests/test_other_income.py -v`
Expected: FAIL with `ModuleNotFoundError: apps.treasury.services.other_income`.

- [ ] **Step 3: Write minimal implementation**

Create `backend/apps/treasury/services/other_income.py`:

```python
from apps.treasury.models import Transaction
from apps.treasury.services.services import create_transaction


def record_other_income(company, *, amount, payment_mode, description, user,
                        cash_session=None):
    """Encaissement manuel « autre recette » (OTHER_INCOME) dans une caisse.

    Résout la session via resolve_disbursement_session (session ouverte de
    l'utilisateur + garde d'agence), puis crée un mouvement d'entrée espèces.
    """
    from apps.treasury.services.expense_shared import resolve_disbursement_session
    session = resolve_disbursement_session(company.id, user, cash_session)
    return create_transaction(
        company=company,
        transaction_type=Transaction.Type.INCOME,
        category=Transaction.Category.OTHER_INCOME,
        account_type=Transaction.AccountType.CASH,
        amount=amount, payment_mode=payment_mode,
        description=description, cash_session=session,
        created_by=user,
    )
```

Add to `backend/apps/treasury/services/__init__.py` — add the import beside the other service imports and add the name to `__all__`:

```python
from .other_income import record_other_income
```
and in `__all__` add `"record_other_income",`.

- [ ] **Step 4: Run test to verify it passes**

Run: `cd backend && python -m pytest apps/treasury/tests/test_other_income.py -v`
Expected: PASS (3 passed).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/treasury/services/other_income.py backend/apps/treasury/services/__init__.py backend/apps/treasury/tests/test_other_income.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): record_other_income (encaissement manuel)"
```

---

### Task 3: Income serializers

**Files:**
- Modify: `backend/apps/treasury/serializers.py` (append at end)
- Test: `backend/apps/treasury/tests/test_income_serializer.py`

**Interfaces:**
- Consumes: `Transaction` instances from `list_income`.
- Produces:
  - `IncomeRowSerializer` — fields: `id, reference, category, category_display, amount, payment_mode, payment_display, transaction_date, cash_register_name, agency_name, account_label, source_ref, source_party, description, created_at`.
  - `OtherIncomeWriteSerializer` — fields: `amount` (Decimal), `payment_mode` (choice), `description` (CharField, blank ok), `cash_session_id` (UUID, optional).

- [ ] **Step 1: Write the failing test**

Create `backend/apps/treasury/tests/test_income_serializer.py`:

```python
import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.treasury.services.services import create_cash_register, open_session
from apps.treasury.services.consignment_sales import record_parcel_payment
from apps.treasury.serializers import IncomeRowSerializer, OtherIncomeWriteSerializer


def _company(name="Ser Co", email="ser@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.mark.django_db
def test_income_row_serializer_shape():
    company, admin = _company()
    reg = create_cash_register(company=company, name="Caisse Centrale", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    txn = record_parcel_payment(company, parcel=None, amount=Decimal("8000"),
                                payment_method="cash", user=admin)
    data = IncomeRowSerializer(txn).data
    assert data["category"] == "parcel_shipping"
    assert data["category_display"]
    assert Decimal(str(data["amount"])) == Decimal("8000.00")
    assert data["cash_register_name"] == "Caisse Centrale"
    assert data["account_label"] == "Caisse Centrale"
    assert "source_ref" in data and "source_party" in data


def test_other_income_write_serializer_validates_amount():
    ser = OtherIncomeWriteSerializer(data={"amount": "0", "payment_mode": "cash", "description": "x"})
    assert not ser.is_valid()
    ser2 = OtherIncomeWriteSerializer(data={"amount": "500", "payment_mode": "cash", "description": ""})
    assert ser2.is_valid(), ser2.errors
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && python -m pytest apps/treasury/tests/test_income_serializer.py -v`
Expected: FAIL with `ImportError: cannot import name 'IncomeRowSerializer'`.

- [ ] **Step 3: Write minimal implementation**

Append to `backend/apps/treasury/serializers.py`:

```python
# ── Recettes (income) ────────────────────────────────────────────────────────

class IncomeRowSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source="get_category_display", read_only=True)
    payment_display  = serializers.CharField(source="get_payment_mode_display", read_only=True)
    cash_register_name = serializers.SerializerMethodField()
    agency_name        = serializers.SerializerMethodField()
    account_label      = serializers.SerializerMethodField()
    source_ref         = serializers.SerializerMethodField()
    source_party       = serializers.SerializerMethodField()

    class Meta:
        model = Transaction
        fields = [
            "id", "reference", "category", "category_display",
            "amount", "payment_mode", "payment_display", "transaction_date",
            "cash_register_name", "agency_name", "account_label",
            "source_ref", "source_party", "description", "created_at",
        ]

    def get_cash_register_name(self, obj):
        return obj.cash_session.cash_register.name if obj.cash_session_id else None

    def get_agency_name(self, obj):
        if obj.cash_session_id and obj.cash_session.cash_register.agency_id:
            return obj.cash_session.cash_register.agency.name
        return None

    def get_account_label(self, obj):
        if obj.account_type == "cash" and obj.cash_session_id:
            return obj.cash_session.cash_register.name
        if obj.account_type == "bank" and obj.bank_account_id:
            return str(obj.bank_account)
        return None

    def get_source_ref(self, obj):
        if obj.category == Transaction.Category.TICKET_SALES and obj.voyage_booking_id:
            return getattr(obj.voyage_booking, "reference", "") or ""
        if obj.category == Transaction.Category.PARCEL_SHIPPING and obj.voyages_parcel_id:
            return getattr(obj.voyages_parcel, "reference", "") or ""
        if obj.category == Transaction.Category.BAGGAGE and obj.voyages_baggage_id:
            return getattr(obj.voyages_baggage, "tag_number", "") or ""
        return ""

    def get_source_party(self, obj):
        if obj.category == Transaction.Category.PARCEL_SHIPPING and obj.voyages_parcel_id:
            return getattr(obj.voyages_parcel, "sender_name", "") or ""
        if obj.category == Transaction.Category.BAGGAGE and obj.voyages_baggage_id:
            return getattr(obj.voyages_baggage, "sender_name", "") or ""
        return ""


class OtherIncomeWriteSerializer(serializers.Serializer):
    amount = serializers.DecimalField(max_digits=12, decimal_places=2, min_value=1)
    payment_mode = serializers.ChoiceField(choices=Transaction.PaymentMode.choices)
    description = serializers.CharField(required=False, allow_blank=True, default="")
    cash_session_id = serializers.UUIDField(required=False, allow_null=True)
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd backend && python -m pytest apps/treasury/tests/test_income_serializer.py -v`
Expected: PASS (2 passed).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/treasury/serializers.py backend/apps/treasury/tests/test_income_serializer.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): serializers recettes (IncomeRow + OtherIncomeWrite)"
```

---

### Task 4: Receipt PDF renderer

**Files:**
- Create: `backend/apps/treasury/income_receipt.py`
- Test: `backend/apps/treasury/tests/test_income_receipt.py`

**Interfaces:**
- Consumes: `apps.reporting.letterhead.company_header_html(company)`.
- Produces: `render_income_receipt(*, company, ref, date, source_label, party, amount, payment_label, caisse_label=None, agency_name=None, created_by=None, kind_label="Recette") -> bytes`.

- [ ] **Step 1: Write the failing test**

Create `backend/apps/treasury/tests/test_income_receipt.py`:

```python
import pytest
from decimal import Decimal
from apps.authentication.models import User

pytest.importorskip("weasyprint")


def _company(name="Rec Co", email="rec@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.mark.django_db
def test_render_income_receipt_returns_pdf_bytes():
    try:
        from apps.treasury.income_receipt import render_income_receipt
        company, _ = _company()
        pdf = render_income_receipt(
            company=company, ref="ABC123", date="2026-08-30",
            source_label="Colis REF-1", party="Jean", amount=Decimal("8000"),
            payment_label="Espèces", caisse_label="Caisse Centrale",
            agency_name="Douala", created_by="Admin", kind_label="Recette colis")
    except (ImportError, OSError):
        pytest.skip("WeasyPrint native libs unavailable")
    assert isinstance(pdf, (bytes, bytearray)) and pdf[:4] == b"%PDF"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && python -m pytest apps/treasury/tests/test_income_receipt.py -v`
Expected: FAIL with `ModuleNotFoundError: apps.treasury.income_receipt` (or SKIP if WeasyPrint missing — in that case treat as pending until Step 4 on a WeasyPrint-capable host; the module must still import).

- [ ] **Step 3: Write minimal implementation**

Create `backend/apps/treasury/income_receipt.py`:

```python
"""Reçu de recette (PDF WeasyPrint) — voyage / colis / bagage / autre."""
import html as _h
from django.utils import timezone
from apps.reporting.letterhead import company_header_html


def _e(v):
    return "" if v is None else _h.escape(str(v))


def _money(v):
    try:
        return f"{float(v):,.0f}".replace(",", " ")
    except (TypeError, ValueError):
        return _e(v)


def render_income_receipt(*, company, ref, date, source_label, party, amount,
                          payment_label, caisse_label=None, agency_name=None,
                          created_by=None, kind_label="Recette") -> bytes:
    from weasyprint import HTML
    run = timezone.localtime(timezone.now()).strftime("%d/%m/%Y %H:%M")
    rows = [
        ("Source", _e(source_label) or "—"),
        ("Client / Tiers", _e(party) or "—"),
        ("Mode de paiement", _e(payment_label)),
        ("Caisse", _e(caisse_label) or "—"),
        ("Agence", _e(agency_name) or "—"),
        ("Date", _e(date)),
        ("Encaissé par", _e(created_by) or "—"),
    ]
    body = "".join(f'<tr><td class="k">{k}</td><td class="v">{v}</td></tr>' for k, v in rows)
    html = f"""<html><head><meta charset="utf-8"><style>
      @page {{ size: A5 landscape; margin: 12mm; }}
      body {{ font-family: DejaVu Sans, sans-serif; font-size: 11px; color:#111; }}
      .co-name {{ font-weight:bold; font-size:14px; }}
      h1 {{ font-size:16px; margin:12px 0 2px; text-transform:uppercase; color:#0068B8; }}
      .ref {{ color:#555; margin-bottom:10px; }}
      table.det {{ width:100%; border-collapse:collapse; }}
      table.det td {{ border:1px solid #ccc; padding:5px 8px; }}
      td.k {{ background:#f2f6fa; font-weight:bold; width:38%; }}
      .amount {{ margin-top:12px; font-size:15px; font-weight:bold; }}
      .sign {{ margin-top:28px; display:flex; justify-content:space-between; }}
      .sign div {{ width:45%; border-top:1px solid #999; padding-top:4px; text-align:center; font-size:10px; color:#555; }}
      .foot {{ margin-top:10px; color:#777; font-size:8px; }}
    </style></head><body>
      {company_header_html(company)}
      <h1>Reçu de {_h.escape(kind_label.lower())}</h1>
      <div class="ref">Réf. {_e(ref)}</div>
      <table class="det"><tbody>{body}</tbody></table>
      <div class="amount">Montant : {_money(amount)} FCFA</div>
      <div class="sign"><div>Le caissier</div><div>Le client</div></div>
      <div class="foot">Généré le {run}</div>
    </body></html>"""
    return HTML(string=html).write_pdf()
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd backend && python -m pytest apps/treasury/tests/test_income_receipt.py -v`
Expected: PASS or SKIP (skip only when WeasyPrint native libs are unavailable, matching `test_expense_voucher.py`).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/treasury/income_receipt.py backend/apps/treasury/tests/test_income_receipt.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): recu de recette PDF (WeasyPrint)"
```

---

### Task 5: Views + URLs

**Files:**
- Modify: `backend/apps/treasury/views.py` (append views; add serializer import)
- Modify: `backend/apps/treasury/urls.py` (append routes)
- Test: `backend/apps/treasury/tests/test_income_api.py`

**Interfaces:**
- Consumes: `list_income`, `income_dashboard` (Task 1); `record_other_income` (Task 2); `IncomeRowSerializer`, `OtherIncomeWriteSerializer` (Task 3); `render_income_receipt` (Task 4); existing `_company`, `register_agency_scope`, `StandardResultsSetPagination`, `success_response`, `created_response`, `error_response`, `HasModulePermission`, `IsAuthenticated`, `CashSession`, `Transaction`.
- Produces URL names: `income-voyage`, `income-parcel`, `income-baggage`, `income-other`, `income-receipt`, `income-dashboard` under the treasury prefix (`recettes/...`).

- [ ] **Step 1: Write the failing test**

Create `backend/apps/treasury/tests/test_income_api.py`:

```python
import pytest
from decimal import Decimal
from rest_framework.test import APIClient
from apps.authentication.models import User
from apps.treasury.services.services import create_cash_register, open_session
from apps.treasury.services.consignment_sales import record_parcel_payment


def _company(name="Api Co", email="api@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


def _auth(user):
    c = APIClient()
    c.force_authenticate(user=user)
    return c


@pytest.mark.django_db
def test_parcel_income_list_returns_rows():
    company, admin = _company()
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    record_parcel_payment(company, parcel=None, amount=Decimal("8000"), payment_method="cash", user=admin)
    r = _auth(admin).get("/api/v1/treasury/recettes/parcel/")
    assert r.status_code == 200
    body = r.json()
    data = body["data"] if "data" in body else body
    assert len(data) == 1
    assert data[0]["category"] == "parcel_shipping"


@pytest.mark.django_db
def test_other_income_create_via_post():
    company, admin = _company(name="ApiPost", email="apip@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    r = _auth(admin).post("/api/v1/treasury/recettes/other/",
                          {"amount": "4000", "payment_mode": "cash", "description": "Vente"}, format="json")
    assert r.status_code in (200, 201), r.content
    lst = _auth(admin).get("/api/v1/treasury/recettes/other/").json()
    data = lst["data"] if "data" in lst else lst
    assert len(data) == 1 and data[0]["category"] == "other_income"


@pytest.mark.django_db
def test_income_dashboard_endpoint():
    company, admin = _company(name="ApiDash", email="apid@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    record_parcel_payment(company, parcel=None, amount=Decimal("8000"), payment_method="cash", user=admin)
    r = _auth(admin).get("/api/v1/treasury/recettes/dashboard/")
    assert r.status_code == 200
    body = r.json()
    d = body["data"] if "data" in body else body
    assert Decimal(str(d["parcel_total"])) == Decimal("8000")
```

> Note: `admin` is an institution admin and bypasses RBAC (`allowed()`), so these API tests do not depend on Task 6's permission seeding.

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && python -m pytest apps/treasury/tests/test_income_api.py -v`
Expected: FAIL — 404 on `/api/v1/treasury/recettes/parcel/`.

- [ ] **Step 3: Write minimal implementation**

In `backend/apps/treasury/views.py`, add to the serializer import block near the top:

```python
from apps.treasury.serializers import IncomeRowSerializer, OtherIncomeWriteSerializer
```

Append these views at the end of `backend/apps/treasury/views.py`:

```python
# ── Recettes (income) ────────────────────────────────────────────────────────

from apps.treasury.selectors import incomes as income_selectors  # noqa: E402


class _IncomeListBase(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.income.view"}
    category = None

    def get(self, request):
        p = request.query_params
        qs = income_selectors.list_income(
            _company(request).id, category=self.category,
            agency_scope=register_agency_scope(request.user),
            date_from=p.get("date_from"), date_to=p.get("date_to"),
            payment_mode=p.get("payment_mode"))
        page = StandardResultsSetPagination()
        return page.get_paginated_response(
            IncomeRowSerializer(page.paginate_queryset(qs, request), many=True).data)


class IncomeVoyageListView(_IncomeListBase):
    category = Transaction.Category.TICKET_SALES


class IncomeParcelListView(_IncomeListBase):
    category = Transaction.Category.PARCEL_SHIPPING


class IncomeBaggageListView(_IncomeListBase):
    category = Transaction.Category.BAGGAGE


class IncomeOtherListView(_IncomeListBase):
    category = Transaction.Category.OTHER_INCOME
    permission_map = {"GET": "treasury.income.view", "POST": "treasury.income.manage"}

    def post(self, request):
        ser = OtherIncomeWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        d = ser.validated_data
        company = _company(request)
        session = None
        if d.get("cash_session_id"):
            session = CashSession.objects.filter(
                company=company, id=d["cash_session_id"],
                status=CashSession.Status.OPEN, is_deleted=False).first()
        try:
            txn = services.record_other_income(
                company, amount=d["amount"], payment_mode=d["payment_mode"],
                description=d.get("description", ""), user=request.user,
                cash_session=session)
        except ApplicationError as ex:
            return error_response(str(ex))
        return created_response(IncomeRowSerializer(txn).data)


class IncomeDashboardView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.income.view"}

    def get(self, request):
        return success_response(income_selectors.income_dashboard(
            _company(request).id, agency_scope=register_agency_scope(request.user)))


class IncomeReceiptView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "treasury.income.view"}

    def get(self, request, pk):
        from django.http import HttpResponse
        from apps.treasury.income_receipt import render_income_receipt
        company = _company(request)
        txn = Transaction.objects.select_related(
            "cash_session__cash_register__agency", "bank_account",
            "voyage_booking", "voyages_parcel", "voyages_baggage", "created_by"
        ).filter(company=company, id=pk, is_deleted=False,
                 transaction_type=Transaction.Type.INCOME).first()
        if not txn:
            return error_response("Introuvable.", status_code=404)
        row = IncomeRowSerializer(txn).data
        source_label = f"{txn.get_category_display()} {row['source_ref']}".strip()
        caisse = txn.cash_session.cash_register.name if txn.cash_session_id else None
        agency = (txn.cash_session.cash_register.agency.name
                  if txn.cash_session_id and txn.cash_session.cash_register.agency_id else None)
        pdf = render_income_receipt(
            company=company, ref=txn.reference or str(txn.id)[:8].upper(),
            date=txn.transaction_date, source_label=source_label,
            party=row["source_party"], amount=txn.amount,
            payment_label=txn.get_payment_mode_display(), caisse_label=caisse,
            agency_name=agency,
            created_by=txn.created_by.get_full_name() if txn.created_by_id else None,
            kind_label=f"Recette {txn.get_category_display()}")
        resp = HttpResponse(pdf, content_type="application/pdf")
        resp["Content-Disposition"] = f'inline; filename="recu-recette-{str(txn.id)[:8]}.pdf"'
        return resp
```

Append to `backend/apps/treasury/urls.py` (inside `urlpatterns`, after the Dépenses block):

```python
    # ── Recettes (voyage + colis + bagage + autre) ───────────────────────────────
    path("recettes/voyage/",           views.IncomeVoyageListView.as_view(),  name="income-voyage"),
    path("recettes/parcel/",           views.IncomeParcelListView.as_view(),  name="income-parcel"),
    path("recettes/baggage/",          views.IncomeBaggageListView.as_view(), name="income-baggage"),
    path("recettes/other/",            views.IncomeOtherListView.as_view(),   name="income-other"),
    path("recettes/dashboard/",        views.IncomeDashboardView.as_view(),   name="income-dashboard"),
    path("recettes/<uuid:pk>/receipt/", views.IncomeReceiptView.as_view(),    name="income-receipt"),
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd backend && python -m pytest apps/treasury/tests/test_income_api.py -v`
Expected: PASS (3 passed).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/treasury/views.py backend/apps/treasury/urls.py backend/apps/treasury/tests/test_income_api.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): API recettes (lists + create autre + dashboard + recu)"
```

---

### Task 6: RBAC permission seed migration

**Files:**
- Create: `backend/apps/admin_rbac/migrations/0015_income_permissions_seed.py`
- Test: `backend/apps/admin_rbac/tests/test_income_permissions.py` (create the `tests/` package if missing: `__init__.py`)

**Interfaces:**
- Consumes: `admin_rbac` models `AppModule`, `Permission`, `Role`, and the through relation `Role.permissions` (M2M). Determine the exact role↔permission relation by reading `0010_treasury_permissions_seed.py` (it already grants treasury perms to roles) and mirror it precisely.
- Produces: permissions `treasury.income.view`, `treasury.income.manage`; both granted to every role already holding `treasury.register.view`.

- [ ] **Step 1: Write the failing test**

Create `backend/apps/admin_rbac/tests/__init__.py` (empty if not present) and `backend/apps/admin_rbac/tests/test_income_permissions.py`:

```python
import pytest
from django.core.management import call_command


@pytest.mark.django_db
def test_income_permissions_exist_after_migrate():
    from apps.admin_rbac.models import Permission
    assert Permission.objects.filter(code="treasury.income.view").exists()
    assert Permission.objects.filter(code="treasury.income.manage").exists()


@pytest.mark.django_db
def test_income_perms_granted_to_register_roles():
    from apps.admin_rbac.models import Permission, Role
    reg = Permission.objects.filter(code="treasury.register.view").first()
    if not reg:
        pytest.skip("no register.view permission seeded in this DB")
    roles_with_register = Role.objects.filter(permissions=reg)
    inc_view = Permission.objects.get(code="treasury.income.view")
    for role in roles_with_register:
        assert role.permissions.filter(id=inc_view.id).exists()
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && python -m pytest apps/admin_rbac/tests/test_income_permissions.py -v`
Expected: FAIL — `treasury.income.view` does not exist.

- [ ] **Step 3: Write minimal implementation**

First read `backend/apps/admin_rbac/migrations/0010_treasury_permissions_seed.py` to copy the exact role-grant idiom (M2M accessor name). Then create `backend/apps/admin_rbac/migrations/0015_income_permissions_seed.py`:

```python
"""Data migration — permissions Recettes (Trésorerie) + octroi aux rôles caisse."""
from django.db import migrations

PERMS = [
    ("treasury.income.view",   "Consulter les recettes",       "view"),
    ("treasury.income.manage", "Enregistrer une recette",      "update"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    Role = apps.get_model("admin_rbac", "Role")
    module, _ = AppModule.objects.get_or_create(code="treasury", defaults={"name": "Trésorerie"})
    created = {}
    for code, name, category in PERMS:
        perm, _ = Permission.objects.update_or_create(
            code=code, defaults={"name": name, "module": module, "category": category})
        created[code] = perm
    # Grant to every role that already manages caisses.
    reg = Permission.objects.filter(code="treasury.register.view").first()
    if reg:
        for role in Role.objects.filter(permissions=reg):
            role.permissions.add(created["treasury.income.view"], created["treasury.income.manage"])


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0014_expense_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
```

> If reading `0010` reveals the role↔permission M2M is accessed differently (e.g., a named through model rather than `role.permissions`), adapt the grant loop to match that idiom exactly; the permission-seeding half stays as above.

- [ ] **Step 4: Run test to verify it passes**

Run: `cd backend && python -m pytest apps/admin_rbac/tests/test_income_permissions.py -v`
Expected: PASS (2 passed; second may skip on a bare DB).

Then verify no schema drift:
Run: `cd backend && python manage.py makemigrations --check --dry-run`
Expected: "No changes detected".

- [ ] **Step 5: Commit**

```bash
git add backend/apps/admin_rbac/migrations/0015_income_permissions_seed.py backend/apps/admin_rbac/tests/__init__.py backend/apps/admin_rbac/tests/test_income_permissions.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(rbac): permissions recettes (view/manage) + octroi aux roles caisse"
```

---

### Task 7: Frontend — income service, API config, routes helper

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (TREASURY block, lines ~422-428)
- Modify: `angular/src/app/core/helpers/routes.ts` (after `trzExpensesGeneral`, line ~408)
- Create: `angular/src/_api/services/treasury/income.service.ts`

**Interfaces:**
- Consumes: `TREASURY` from `api.config.ts`; `HttpClient`.
- Produces:
  - `TREASURY.incVoyage/incParcel/incBaggage/incOther/incDashboard` (strings), `TREASURY.incReceipt(id)` (fn).
  - `routes.trzRecettesDashboard/trzRecettesVoyage/trzRecettesColis/trzRecettesBagage/trzRecettesAutre` (strings).
  - `IncomeService` with `list(kind, filters)`, `dashboard()`, `createOther(body)`, `receipt(id)`.

- [ ] **Step 1: Add TREASURY endpoints**

In `angular/src/_api/config/api.config.ts`, add inside the `TREASURY` object (after the `expDashboard` line, before the closing `};`):

```ts
  incVoyage:   `${TRZ}/recettes/voyage/`,
  incParcel:   `${TRZ}/recettes/parcel/`,
  incBaggage:  `${TRZ}/recettes/baggage/`,
  incOther:    `${TRZ}/recettes/other/`,
  incDashboard:`${TRZ}/recettes/dashboard/`,
  incReceipt:  (id: string) => `${TRZ}/recettes/${id}/receipt/`,
```

- [ ] **Step 2: Add route constants**

In `angular/src/app/core/helpers/routes.ts`, after the `trzExpensesGeneral` line, add:

```ts
  trzRecettesDashboard: '/treasury/recettes-dashboard',
  trzRecettesVoyage:    '/treasury/recettes-voyage',
  trzRecettesColis:     '/treasury/recettes-colis',
  trzRecettesBagage:    '/treasury/recettes-bagage',
  trzRecettesAutre:     '/treasury/recettes-autre',
```

- [ ] **Step 3: Create the income service**

Create `angular/src/_api/services/treasury/income.service.ts`:

```ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';

type IncomeKind = 'voyage' | 'parcel' | 'baggage' | 'other';

@Injectable({ providedIn: 'root' })
export class IncomeService {
  private http = inject(HttpClient);

  private urlFor(kind: IncomeKind): string {
    return { voyage: TREASURY.incVoyage, parcel: TREASURY.incParcel,
             baggage: TREASURY.incBaggage, other: TREASURY.incOther }[kind];
  }

  list(kind: IncomeKind,
       filters: { date_from?: string; date_to?: string; payment_mode?: string } = {}): Observable<any[]> {
    let p = new HttpParams().set('page_size', '500');
    Object.entries(filters).forEach(([k, v]) => { if (v) p = p.set(k, v); });
    return this.http.get<any>(this.urlFor(kind), { params: p }).pipe(map(r => r.results ?? r.data ?? r));
  }

  dashboard(): Observable<any> {
    return this.http.get<any>(TREASURY.incDashboard).pipe(map(r => r.data ?? r));
  }

  createOther(body: any): Observable<any> {
    return this.http.post<any>(TREASURY.incOther, body).pipe(map(r => r.data ?? r));
  }

  receipt(id: string): Observable<Blob> {
    return this.http.get(TREASURY.incReceipt(id), { responseType: 'blob' });
  }
}
```

- [ ] **Step 4: Verify build**

Run: `cd angular && npx ng build`
Expected: build succeeds (Output location printed). The new service compiles even though no component imports it yet.

- [ ] **Step 5: Commit**

```bash
git add angular/src/_api/config/api.config.ts angular/src/app/core/helpers/routes.ts angular/src/_api/services/treasury/income.service.ts
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(front): service recettes + endpoints + routes"
```

---

### Task 8: Frontend — recettes list + dashboard pages and routing

**Files:**
- Create: `angular/src/_api/pages/treasury/recettes/list/recettes-list.component.ts`
- Create: `angular/src/_api/pages/treasury/recettes/list/recettes-list.component.html`
- Create: `angular/src/_api/pages/treasury/recettes/dashboard/recettes-dashboard.component.ts`
- Create: `angular/src/_api/pages/treasury/recettes/dashboard/recettes-dashboard.component.html`
- Modify: `angular/src/app/features/pages/pages.routes.ts` (treasury children, after line ~65)

**Interfaces:**
- Consumes: `IncomeService` (Task 7); `SessionService` (`../../../services/treasury/session.service` — `list({status:'open'})`); `HasPermissionDirective`; `PaginatePipe`, `TablePaginatorComponent`, `PageState` (`app/shared/table-paginator/...`); `ActivatedRoute` for `data.kind`.
- Produces route paths: `recettes-dashboard`, `recettes-voyage`, `recettes-colis`, `recettes-bagage`, `recettes-autre`.

The list component is generic: it reads `kind` from route `data` and shows the manual-create UI only when `kind === 'other'`.

- [ ] **Step 1: Create the list component TS**

Create `angular/src/_api/pages/treasury/recettes/list/recettes-list.component.ts`:

```ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IncomeService } from '../../../../services/treasury/income.service';
import { SessionService } from '../../../../services/treasury/session.service';
import { HasPermissionDirective } from '../../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../../app/shared/table-paginator/table-paginator.component';

type Kind = 'voyage' | 'parcel' | 'baggage' | 'other';

const TITLES: Record<Kind, string> = {
  voyage: 'Recette voyage', parcel: 'Recette colis',
  baggage: 'Recette bagage', other: 'Autre recette',
};

@Component({
  selector: 'app-recettes-list',
  standalone: true,
  templateUrl: './recettes-list.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, CommonModule, FormsModule, ReactiveFormsModule, HasPermissionDirective],
})
export class RecettesListComponent implements OnInit {
  pg: PageState = { page: 1, size: 25 };
  private income = inject(IncomeService);
  private sessionSvc = inject(SessionService);
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

  kind: Kind = 'voyage';
  title = '';
  rows: any[] = []; sessions: any[] = [];
  loading = false; saving = false; errorMsg = '';
  fFrom = ''; fTo = ''; fMode = '';

  form = this.fb.group({
    amount: [null as number | null, [Validators.required, Validators.min(1)]],
    payment_mode: ['cash', Validators.required],
    description: [''],
    cash_session_id: [null as string | null],
  });

  get isOther(): boolean { return this.kind === 'other'; }

  ngOnInit(): void {
    this.kind = (this.route.snapshot.data['kind'] as Kind) || 'voyage';
    this.title = TITLES[this.kind];
    if (this.isOther) this.sessionSvc.list({ status: 'open' }).subscribe((d: any) => this.sessions = d);
    this.reload();
  }

  reload(): void {
    this.loading = true;
    this.income.list(this.kind, {
      date_from: this.fFrom || undefined, date_to: this.fTo || undefined,
      payment_mode: this.fMode || undefined,
    }).subscribe({
      next: d => { this.rows = d; this.pg.page = 1; this.loading = false; },
      error: () => this.loading = false,
    });
  }

  clearFilters(): void { this.fFrom = this.fTo = this.fMode = ''; this.reload(); }

  openCreate(): void { this.errorMsg = ''; this.form.reset({ payment_mode: 'cash' }); }

  save(): void {
    if (this.form.invalid || this.saving) return;
    this.saving = true;
    this.income.createOther(this.form.value).subscribe({
      next: () => { this.saving = false; this.reload(); this.close('recette-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.error?.message ?? 'Erreur.'; },
    });
  }

  printReceipt(row: any): void {
    this.income.receipt(row.id).subscribe({
      next: blob => { const url = URL.createObjectURL(blob); window.open(url, '_blank'); setTimeout(() => URL.revokeObjectURL(url), 60000); },
      error: () => alert('Impossible de générer le reçu.'),
    });
  }

  private close(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
```

- [ ] **Step 2: Create the list component HTML**

Create `angular/src/_api/pages/treasury/recettes/list/recettes-list.component.html`. Model the page chrome (card, `.page-header`, table classes, empty state, paginator usage, filter row) on `angular/src/_api/pages/treasury/expenses/general/general-expenses.component.html`; use these columns and the modal (modal only relevant for `other`):

```html
<div class="page-wrapper">
  <div class="content">
    <div class="page-header d-flex justify-content-between align-items-center">
      <h4 class="mb-0">{{ title }}</h4>
      <button *ngIf="isOther" class="btn btn-primary" *hasPermission="'treasury.income.manage'"
              data-bs-toggle="modal" data-bs-target="#recette-modal" (click)="openCreate()">
        Nouvelle recette
      </button>
    </div>

    <div class="card mb-3">
      <div class="card-body d-flex flex-wrap gap-2 align-items-end">
        <div><label class="form-label mb-1">Du</label>
          <input type="date" class="form-control" [(ngModel)]="fFrom"></div>
        <div><label class="form-label mb-1">Au</label>
          <input type="date" class="form-control" [(ngModel)]="fTo"></div>
        <div><label class="form-label mb-1">Mode</label>
          <select class="form-select" [(ngModel)]="fMode">
            <option value="">Tous</option>
            <option value="cash">Espèces</option>
            <option value="mobile_money">Mobile Money</option>
            <option value="transfer">Virement</option>
            <option value="check">Chèque</option>
          </select></div>
        <button class="btn btn-outline-primary" (click)="reload()">Filtrer</button>
        <button class="btn btn-outline-secondary" (click)="clearFilters()">Réinitialiser</button>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Réf.</th><th>Source</th><th>Client/Tiers</th>
                <th class="text-end">Montant</th><th>Mode</th>
                <th>Caisse</th><th>Agence</th><th>Date</th><th class="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let r of rows | paginate:pg.page:pg.size">
                <td>{{ r.reference }}</td>
                <td>{{ r.source_ref || '—' }}</td>
                <td>{{ r.source_party || '—' }}</td>
                <td class="text-end">{{ r.amount | number:'1.0-0' }} FCFA</td>
                <td>{{ r.payment_display }}</td>
                <td>{{ r.cash_register_name || '—' }}</td>
                <td>{{ r.agency_name || '—' }}</td>
                <td>{{ r.transaction_date }}</td>
                <td class="text-end">
                  <button class="btn btn-sm btn-outline-secondary" (click)="printReceipt(r)" title="Reçu">
                    <i class="ti ti-printer"></i>
                  </button>
                </td>
              </tr>
              <tr *ngIf="!loading && rows.length === 0">
                <td colspan="9" class="text-center text-muted py-4">Aucune recette.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <app-table-paginator [total]="rows.length" [state]="pg"></app-table-paginator>
      </div>
    </div>
  </div>
</div>

<!-- Modal Nouvelle recette (autre) -->
<div class="modal fade" id="recette-modal" tabindex="-1" *ngIf="isOther">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Nouvelle recette</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <form [formGroup]="form" (ngSubmit)="save()">
        <div class="modal-body">
          <div class="alert alert-danger" *ngIf="errorMsg">{{ errorMsg }}</div>
          <div class="mb-3"><label class="form-label">Montant</label>
            <input type="number" class="form-control" formControlName="amount"></div>
          <div class="mb-3"><label class="form-label">Mode de paiement</label>
            <select class="form-select" formControlName="payment_mode">
              <option value="cash">Espèces</option>
              <option value="mobile_money">Mobile Money</option>
              <option value="transfer">Virement</option>
              <option value="check">Chèque</option>
            </select></div>
          <div class="mb-3"><label class="form-label">Libellé</label>
            <input type="text" class="form-control" formControlName="description"></div>
          <div class="mb-3"><label class="form-label">Caisse</label>
            <select class="form-select" formControlName="cash_session_id">
              <option [ngValue]="null">Ma session ouverte</option>
              <option *ngFor="let s of sessions" [ngValue]="s.id">{{ s.register_name }}</option>
            </select></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button>
          <button type="submit" class="btn btn-primary" [disabled]="saving">Enregistrer</button>
        </div>
      </form>
    </div>
  </div>
</div>
```

- [ ] **Step 3: Create the dashboard component TS**

Create `angular/src/_api/pages/treasury/recettes/dashboard/recettes-dashboard.component.ts`:

```ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeService } from '../../../../services/treasury/income.service';

@Component({
  selector: 'app-recettes-dashboard',
  standalone: true,
  templateUrl: './recettes-dashboard.component.html',
  imports: [CommonModule],
})
export class RecettesDashboardComponent implements OnInit {
  private income = inject(IncomeService);
  d: any = null; loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.income.dashboard().subscribe({
      next: r => { this.d = r; this.loading = false; },
      error: () => this.loading = false,
    });
  }
}
```

- [ ] **Step 4: Create the dashboard component HTML**

Create `angular/src/_api/pages/treasury/recettes/dashboard/recettes-dashboard.component.html`. Model the KPI cards on the template `sale-widget` cards used in `angular/src/_api/pages/treasury/expenses/dashboard/expenses-dashboard.component.html` (open that file and reuse its card markup, swapping labels/values):

```html
<div class="page-wrapper">
  <div class="content">
    <div class="page-header"><h4 class="mb-0">Recettes — Tableau de bord</h4></div>
    <div class="row" *ngIf="d">
      <div class="col-lg-3 col-sm-6 mb-3">
        <div class="card"><div class="card-body">
          <p class="mb-1 text-muted">Total du mois</p>
          <h4>{{ d.month_total | number:'1.0-0' }} FCFA</h4>
        </div></div>
      </div>
      <div class="col-lg-3 col-sm-6 mb-3">
        <div class="card"><div class="card-body">
          <p class="mb-1 text-muted">Recette voyage</p>
          <h4>{{ d.voyage_total | number:'1.0-0' }} FCFA</h4>
        </div></div>
      </div>
      <div class="col-lg-3 col-sm-6 mb-3">
        <div class="card"><div class="card-body">
          <p class="mb-1 text-muted">Recette colis</p>
          <h4>{{ d.parcel_total | number:'1.0-0' }} FCFA</h4>
        </div></div>
      </div>
      <div class="col-lg-3 col-sm-6 mb-3">
        <div class="card"><div class="card-body">
          <p class="mb-1 text-muted">Recette bagage</p>
          <h4>{{ d.baggage_total | number:'1.0-0' }} FCFA</h4>
        </div></div>
      </div>
      <div class="col-lg-3 col-sm-6 mb-3">
        <div class="card"><div class="card-body">
          <p class="mb-1 text-muted">Autre recette</p>
          <h4>{{ d.other_total | number:'1.0-0' }} FCFA</h4>
        </div></div>
      </div>
      <div class="col-lg-3 col-sm-6 mb-3">
        <div class="card"><div class="card-body">
          <p class="mb-1 text-muted">Total ({{ d.count }})</p>
          <h4>{{ d.total | number:'1.0-0' }} FCFA</h4>
        </div></div>
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 5: Wire the routes**

In `angular/src/app/features/pages/pages.routes.ts`, add to the treasury `children` array (after the `expenses-general` route, ~line 65):

```ts
                { path: 'recettes-dashboard', loadComponent: () => import('../../../_api/pages/treasury/recettes/dashboard/recettes-dashboard.component').then(m => m.RecettesDashboardComponent) },
                { path: 'recettes-voyage', data: { kind: 'voyage' },  loadComponent: () => import('../../../_api/pages/treasury/recettes/list/recettes-list.component').then(m => m.RecettesListComponent) },
                { path: 'recettes-colis',  data: { kind: 'parcel' },  loadComponent: () => import('../../../_api/pages/treasury/recettes/list/recettes-list.component').then(m => m.RecettesListComponent) },
                { path: 'recettes-bagage', data: { kind: 'baggage' }, loadComponent: () => import('../../../_api/pages/treasury/recettes/list/recettes-list.component').then(m => m.RecettesListComponent) },
                { path: 'recettes-autre',  data: { kind: 'other' },   loadComponent: () => import('../../../_api/pages/treasury/recettes/list/recettes-list.component').then(m => m.RecettesListComponent) },
```

- [ ] **Step 6: Verify build**

Run: `cd angular && npx ng build`
Expected: build succeeds.

- [ ] **Step 7: Commit**

```bash
git add angular/src/_api/pages/treasury/recettes angular/src/app/features/pages/pages.routes.ts
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(front): pages Recettes (liste generique + tableau de bord) + routes"
```

---

### Task 9: Frontend — sidebar Recettes group

**Files:**
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (Trésorerie group, after the Dépenses block ~line 285, before the "Config Trésorerie" block)

**Interfaces:**
- Consumes: `routes.trzRecettesDashboard/Voyage/Colis/Bagage/Autre` (Task 7); the sidebar group/menu schema already used by neighboring blocks.
- Produces: a new "Recettes" collapsible menu in the Trésorerie section.

- [ ] **Step 1: Insert the Recettes menu block**

In `angular/src/app/core/service/sidebar/sidebar.service.ts`, immediately after the Dépenses menu object (the `},` that closes it, ~line 285) and before the "Config Trésorerie" block, insert:

```ts
        {
          menuValue: 'Recettes',
          hasSubRoute: true,
          showSubRoute: false,
          icon2: 'coin',
          base: 'treasury-income',
          subMenus: [
            { menuValue: 'Tableau de bord', route: routes.trzRecettesDashboard, base: 'recettes-dashboard', permission: 'treasury.income.view' },
            { menuValue: 'Recette voyage',  route: routes.trzRecettesVoyage,    base: 'recettes-voyage',    permission: 'treasury.income.view' },
            { menuValue: 'Recette colis',   route: routes.trzRecettesColis,     base: 'recettes-colis',     permission: 'treasury.income.view' },
            { menuValue: 'Recette bagage',  route: routes.trzRecettesBagage,    base: 'recettes-bagage',    permission: 'treasury.income.view' },
            { menuValue: 'Autre recette',   route: routes.trzRecettesAutre,     base: 'recettes-autre',     permission: 'treasury.income.view' },
          ],
        },
```

- [ ] **Step 2: Verify build**

Run: `cd angular && npx ng build`
Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
git add angular/src/app/core/service/sidebar/sidebar.service.ts
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(front): menu Recettes dans la barre laterale Tresorerie"
```

---

### Task 10: Full-suite verification

**Files:** none (verification only).

- [ ] **Step 1: Run the full backend suite**

Run: `cd backend && python -m pytest -q`
Expected: all pass (income tests green; receipt test passes or skips on hosts without WeasyPrint native libs).

- [ ] **Step 2: Migration drift check**

Run: `cd backend && python manage.py makemigrations --check --dry-run`
Expected: "No changes detected".

- [ ] **Step 3: Frontend build**

Run: `cd angular && npx ng build`
Expected: build succeeds.

- [ ] **Step 4: Manual smoke (document, do not automate)**

Note in the ledger for the human: after deploy, run `python manage.py migrate`, then a treasury user must log out/in for the new `treasury.income.*` permissions to appear (admins bypass). Verify Trésorerie › Recettes shows the 5 sub-items, the three source tables list paid income, "Autre recette" creates an entry into the open caisse, and the reçu prints.

---

## Notes for the executor

- **Agency scope for income** differs from expenses: `GeneralExpense` has a direct `agency` FK, but income scopes through `cash_session__cash_register__agency_id`. That is why Task 1 defines its own `_apply_income_agency_scope` rather than reusing the expense helper.
- **Admin bypass:** institution admins/superusers bypass RBAC in `allowed()`, so API tests (Task 5) authenticate as the company admin and do not depend on Task 6.
- **DRY:** the four source tables are one component (`RecettesListComponent`) parametrized by route `data.kind`; only `other` shows the create button/modal.
- **`_apply_income_agency_scope`** accepts the raw `(scoped, agency_id)` tuple from `register_agency_scope`; a falsy `agency_scope` (None) means no scoping.
