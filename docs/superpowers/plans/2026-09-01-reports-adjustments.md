# Reports Adjustments — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the 4 financial reports reflect refunds, general expenses, broadened recettes (colis/bagage/autre), and payment-mode breakdown.

**Architecture:** Each report is a `build(company, f) -> ReportResult` in `apps/reporting/reports/`. This plan rewrites 4 build functions and extends their tests; no renderer or endpoint changes.

**Tech Stack:** Django + pytest; `ReportColumn/ReportGroup/ReportResult` primitives.

**Spec:** `docs/superpowers/specs/2026-09-01-reports-adjustments-design.md`

## Global Constraints

- Reuse `ReportColumn(key,label,align,money)`, `ReportGroup(label,rows,subtotal)`, `ReportResult(code,title,columns,groups,totals,period_label)` + `period_label(f)`. No renderer changes.
- Income categories: `TICKET_SALES, PARCEL_SHIPPING, BAGGAGE, OTHER_INCOME`. Refund = `Transaction` `transaction_type=expense`, `category=refund`.
- `GeneralExpense` status string `"paid"`/`"unpaid"`; date field `expense_date`. `TripExpense` date field `date`, status `TripExpense.Status.PAID`.
- Refunds shown **positive** in the depense list (nature=Remboursement) but **subtracted** in recap dépense/marge and recette Net.
- Multi-line summaries = extra `ReportGroup`s (the renderer shows only one `totals` row).
- Backend tests via `cd backend && ../env/bin/python -m pytest`. No frontend change.
- Commits authored as shimi: `git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "..."`.

---

### Task 1: `depense` — complete expense list

**Files:**
- Modify: `backend/apps/reporting/reports/depense.py`
- Test: `backend/apps/reporting/tests/test_depense.py`

**Interfaces:**
- Produces: `REPORTS["depense"]["build"](company, f)` → rows with `nature` ∈ {Voyage, Générale, Remboursement}.

- [ ] **Step 1: Write the failing test**

Replace `backend/apps/reporting/tests/test_depense.py` with (or add this test if the file already has one — keep existing tests, append):

```python
import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User


def _company(name, email):
    from apps.system_config.services import create_company
    company, _ = create_company(name=name, admin_email=email, admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email=email)


@pytest.mark.django_db
def test_depense_includes_general_and_refund():
    from apps.treasury.models import GeneralExpense, Transaction
    from apps.voyages_config.models import ExpenseType as VExpenseType  # noqa: F401
    from apps.treasury.services.services import create_cash_register, open_session, create_transaction
    from apps.reporting.registry import REPORTS
    company, admin = _company("Dep Co", "depc@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    session = open_session(company=company, cash_register=reg, created_by=admin)
    # dépense générale payée
    from apps.voyages_config.models import ExpenseType
    et = ExpenseType.objects.filter(company=company).first() or ExpenseType.objects.create(
        company=company, code="DIV", name="Divers", account_code="605")
    GeneralExpense.objects.create(company=company, expense_type=et, label="Savon",
                                  amount=Decimal("2000"), status="paid", cash_session=session, created_by=admin)
    # remboursement
    create_transaction(company=company, transaction_type=Transaction.Type.EXPENSE,
                       category=Transaction.Category.REFUND, account_type=Transaction.AccountType.CASH,
                       cash_session=session, amount=Decimal("1500"),
                       payment_mode=Transaction.PaymentMode.CASH, description="Remb", created_by=admin)
    result = REPORTS["depense"]["build"](company, {"date_from": None, "date_to": None,
                                                   "agency": None, "register": None, "vehicle": None})
    natures = {r["nature"] for r in result.groups[0].rows}
    assert {"Générale", "Remboursement"} <= natures
    assert result.totals["montant"] == Decimal("3500")
    # filtre véhicule -> exclut générale/remboursement (aucune ligne ici)
    filtered = REPORTS["depense"]["build"](company, {"date_from": None, "date_to": None,
                                                     "agency": None, "register": None, "vehicle": "00000000-0000-0000-0000-000000000000"})
    assert all(r["nature"] == "Voyage" for r in filtered.groups[0].rows)
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/reporting/tests/test_depense.py::test_depense_includes_general_and_refund -q`
Expected: FAIL — `KeyError: 'nature'` (report has no nature/general/refund yet).

- [ ] **Step 3: Rewrite the report**

Replace `backend/apps/reporting/reports/depense.py` with:

```python
from decimal import Decimal
from apps.voyages_trips.models import TripExpense
from apps.treasury.models import GeneralExpense, Transaction
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label


@register("depense", "Liste des dépenses", ["date_from", "date_to", "agency", "register", "vehicle"], "landscape")
def build(company, f):
    items = []  # (date, row)

    vqs = (TripExpense.objects.filter(trip__company=company, is_deleted=False, status=TripExpense.Status.PAID)
           .select_related("expense_type", "trip", "trip__vehicle", "cash_session__cash_register"))
    if f["date_from"]: vqs = vqs.filter(date__gte=f["date_from"])
    if f["date_to"]:   vqs = vqs.filter(date__lte=f["date_to"])
    if f["vehicle"]:   vqs = vqs.filter(trip__vehicle_id=f["vehicle"])
    if f["register"]:  vqs = vqs.filter(cash_session__cash_register_id=f["register"])
    if f["agency"]:    vqs = vqs.filter(cash_session__cash_register__agency_id=f["agency"])
    for e in vqs:
        reg = getattr(e.cash_session, "cash_register", None)
        items.append((e.date, {"nature": "Voyage", "trip": e.trip.number,
                               "veh": getattr(e.trip.vehicle, "license_plate", "—"),
                               "cat": e.expense_type.name, "date": e.date.strftime("%d/%m/%Y"),
                               "desc": e.description, "tres": reg.name if reg else "—", "montant": e.amount}))

    # Générale + Remboursement : sans véhicule -> exclues si un véhicule est filtré.
    if not f["vehicle"]:
        gqs = (GeneralExpense.objects.filter(company=company, is_deleted=False, status="paid")
               .select_related("expense_type", "cash_session__cash_register"))
        if f["date_from"]: gqs = gqs.filter(expense_date__gte=f["date_from"])
        if f["date_to"]:   gqs = gqs.filter(expense_date__lte=f["date_to"])
        if f["register"]:  gqs = gqs.filter(cash_session__cash_register_id=f["register"])
        if f["agency"]:    gqs = gqs.filter(cash_session__cash_register__agency_id=f["agency"])
        for e in gqs:
            reg = getattr(e.cash_session, "cash_register", None)
            items.append((e.expense_date, {"nature": "Générale", "trip": "—", "veh": "—",
                                           "cat": e.expense_type.name, "date": e.expense_date.strftime("%d/%m/%Y"),
                                           "desc": e.label, "tres": reg.name if reg else "—", "montant": e.amount}))

        rqs = (Transaction.objects.filter(company=company, is_deleted=False,
                                          transaction_type=Transaction.Type.EXPENSE,
                                          category=Transaction.Category.REFUND)
               .select_related("cash_session__cash_register"))
        if f["date_from"]: rqs = rqs.filter(transaction_date__gte=f["date_from"])
        if f["date_to"]:   rqs = rqs.filter(transaction_date__lte=f["date_to"])
        if f["register"]:  rqs = rqs.filter(cash_session__cash_register_id=f["register"])
        if f["agency"]:    rqs = rqs.filter(cash_session__cash_register__agency_id=f["agency"])
        for t in rqs:
            reg = getattr(t.cash_session, "cash_register", None)
            items.append((t.transaction_date, {"nature": "Remboursement", "trip": "—", "veh": "—",
                                               "cat": "Remboursement", "date": t.transaction_date.strftime("%d/%m/%Y"),
                                               "desc": t.description, "tres": reg.name if reg else "—", "montant": t.amount}))

    items.sort(key=lambda x: x[0])
    rows, total = [], Decimal(0)
    for i, (_, r) in enumerate(items, 1):
        r["n"] = i
        rows.append(r)
        total += r["montant"]
    cols = [ReportColumn("n", "No"), ReportColumn("nature", "Nature"), ReportColumn("trip", "Voyage"),
            ReportColumn("veh", "Véhicule"), ReportColumn("cat", "Catégorie"), ReportColumn("date", "Date"),
            ReportColumn("desc", "Description"), ReportColumn("tres", "Trésorerie"),
            ReportColumn("montant", "Montant", "right", True)]
    return ReportResult("depense", "LISTE DES DÉPENSES", cols, [ReportGroup(rows=rows)],
                        totals={"montant": total}, period_label=period_label(f))
```

- [ ] **Step 4: Run tests**

Run: `cd backend && ../env/bin/python -m pytest apps/reporting/tests/test_depense.py -q`
Expected: PASS (existing + new).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/reporting/reports/depense.py backend/apps/reporting/tests/test_depense.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(reporting): Liste des depenses = voyage + generale + remboursement"
```

---

### Task 2: `recapitulatif` — Autre column + full dépense + net marge

**Files:**
- Modify: `backend/apps/reporting/reports/recapitulatif.py`
- Test: `backend/apps/reporting/tests/test_recapitulatif.py`

**Interfaces:**
- Produces: rows with keys `voyage, bagage, transit, autre, depense, marge`.

- [ ] **Step 1: Extend the test (make it fail)**

In `backend/apps/reporting/tests/test_recapitulatif.py::test_recapitulatif_margin`, after the `TripExpense` line and before `result = ...`, add a paid general expense, a refund, and an autre income; then change the assertions:

```python
    from apps.treasury.models import GeneralExpense, Transaction as Txn
    GeneralExpense.objects.create(company=company, expense_type=et, label="Savon",
                                  amount=Decimal("1000"), status="paid", cash_session=session, created_by=admin)
    create_transaction(company=company, transaction_type=Txn.Type.EXPENSE,
                       category=Txn.Category.REFUND, account_type=Txn.AccountType.CASH,
                       cash_session=session, amount=Decimal("500"),
                       payment_mode=Txn.PaymentMode.CASH, description="Remb", created_by=admin)
    create_transaction(company=company, transaction_type=Txn.Type.INCOME,
                       category=Txn.Category.OTHER_INCOME, account_type=Txn.AccountType.CASH,
                       cash_session=session, amount=Decimal("2000"),
                       payment_mode=Txn.PaymentMode.CASH, description="Divers", created_by=admin)
```

Replace the trailing assertions with:

```python
    result = REPORTS["recapitulatif"]["build"](company, {"date_from": None, "date_to": None, "vehicle": None})
    # dépense totale = voyage(3000) + générale(1000) + remboursement(500) = 4500
    assert result.totals["depense"] == Decimal("4500")
    assert result.totals["autre"] == Decimal("2000")
    # marge nette = (10000 voyage + 2000 autre) - 4500 = 7500
    assert result.totals["marge"] == Decimal("7500")
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/reporting/tests/test_recapitulatif.py -q`
Expected: FAIL — `depense` still 3000 / no `autre` key.

- [ ] **Step 3: Rewrite the report**

Replace `backend/apps/reporting/reports/recapitulatif.py` with:

```python
from decimal import Decimal
from collections import defaultdict
from apps.treasury.models import Transaction, GeneralExpense
from apps.voyages_trips.models import TripExpense
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label

_CAT_KEY = {
    Transaction.Category.TICKET_SALES: "voyage",
    Transaction.Category.BAGGAGE: "bagage",
    Transaction.Category.PARCEL_SHIPPING: "transit",
    Transaction.Category.OTHER_INCOME: "autre",
}
_LINK_TRIP = {
    "voyage": lambda t: getattr(t.voyage_booking, "outbound_trip", None) if t.voyage_booking_id else None,
    "bagage": lambda t: getattr(t.voyages_baggage, "trip", None) if t.voyages_baggage_id else None,
    "transit": lambda t: getattr(t.voyages_parcel, "trip", None) if t.voyages_parcel_id else None,
    "autre": lambda t: None,
}
_ZERO = lambda: {"voyage": Decimal(0), "bagage": Decimal(0), "transit": Decimal(0),
                 "autre": Decimal(0), "depense": Decimal(0)}


@register("recapitulatif", "État récapitulatif de trésorerie",
          ["date_from", "date_to", "vehicle"], "landscape")
def build(company, f):
    cell = defaultdict(_ZERO)

    txns = (Transaction.objects.filter(company=company, is_deleted=False,
                                       transaction_type=Transaction.Type.INCOME, category__in=list(_CAT_KEY))
            .select_related("voyage_booking__outbound_trip__vehicle", "voyages_baggage__trip__vehicle",
                            "voyages_parcel__trip__vehicle"))
    if f["date_from"]: txns = txns.filter(transaction_date__gte=f["date_from"])
    if f["date_to"]:   txns = txns.filter(transaction_date__lte=f["date_to"])
    for t in txns:
        bucket = _CAT_KEY[t.category]
        trip = _LINK_TRIP[bucket](t)
        veh = getattr(getattr(trip, "vehicle", None), "license_plate", "—") if trip else "—"
        cell[(veh, t.transaction_date.strftime("%d/%m/%Y"))][bucket] += t.amount

    exps = (TripExpense.objects.filter(trip__company=company, is_deleted=False, status=TripExpense.Status.PAID)
            .select_related("trip__vehicle"))
    if f["date_from"]: exps = exps.filter(date__gte=f["date_from"])
    if f["date_to"]:   exps = exps.filter(date__lte=f["date_to"])
    for e in exps:
        veh = getattr(e.trip.vehicle, "license_plate", "—")
        cell[(veh, e.date.strftime("%d/%m/%Y"))]["depense"] += e.amount

    # Dépenses générales payées (sans véhicule -> "—").
    gexp = GeneralExpense.objects.filter(company=company, is_deleted=False, status="paid")
    if f["date_from"]: gexp = gexp.filter(expense_date__gte=f["date_from"])
    if f["date_to"]:   gexp = gexp.filter(expense_date__lte=f["date_to"])
    for e in gexp:
        cell[("—", e.expense_date.strftime("%d/%m/%Y"))]["depense"] += e.amount

    # Remboursements (sortie) -> comptés en dépense.
    refunds = Transaction.objects.filter(company=company, is_deleted=False,
                                         transaction_type=Transaction.Type.EXPENSE,
                                         category=Transaction.Category.REFUND)
    if f["date_from"]: refunds = refunds.filter(transaction_date__gte=f["date_from"])
    if f["date_to"]:   refunds = refunds.filter(transaction_date__lte=f["date_to"])
    for t in refunds:
        cell[("—", t.transaction_date.strftime("%d/%m/%Y"))]["depense"] += t.amount

    if f["vehicle"]:
        from apps.fleet.models import Vehicle
        plate = getattr(Vehicle.objects.filter(id=f["vehicle"]).first(), "license_plate", None)
        if plate:
            cell = {k: v for k, v in cell.items() if k[0] == plate}

    rows = []
    tot = {"voyage": Decimal(0), "bagage": Decimal(0), "transit": Decimal(0),
           "autre": Decimal(0), "depense": Decimal(0), "marge": Decimal(0)}
    for i, ((veh, day), v) in enumerate(sorted(cell.items()), 1):
        rec = v["voyage"] + v["bagage"] + v["transit"] + v["autre"]
        marge = rec - v["depense"]
        rows.append({"n": i, "periode": day, "vehicule": veh, "partenaire": company.name,
                     "voyage": v["voyage"], "bagage": v["bagage"], "transit": v["transit"],
                     "autre": v["autre"], "depense": v["depense"], "marge": marge})
        for k in ("voyage", "bagage", "transit", "autre", "depense"):
            tot[k] += v[k]
        tot["marge"] += marge
    cols = [ReportColumn("n", "No"), ReportColumn("periode", "Période"), ReportColumn("vehicule", "Véhicule"),
            ReportColumn("partenaire", "Partenaire"), ReportColumn("voyage", "Voyage", "right", True),
            ReportColumn("bagage", "Bagage", "right", True), ReportColumn("transit", "Transit", "right", True),
            ReportColumn("autre", "Autre", "right", True),
            ReportColumn("depense", "Dépense", "right", True), ReportColumn("marge", "Marge", "right", True)]
    return ReportResult("recapitulatif", "ÉTAT RÉCAPITULATIF DE TRÉSORERIE", cols,
                        [ReportGroup(rows=rows)], totals={"partenaire": "TOTAL", **tot},
                        period_label=period_label(f))
```

- [ ] **Step 4: Run tests**

Run: `cd backend && ../env/bin/python -m pytest apps/reporting/tests/test_recapitulatif.py -q`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/reporting/reports/recapitulatif.py backend/apps/reporting/tests/test_recapitulatif.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(reporting): recapitulatif - colonne Autre + depense complete + marge nette"
```

---

### Task 3: `recette` — all categories + Nature + mode + synthèse

**Files:**
- Modify: `backend/apps/reporting/reports/recette.py`
- Test: `backend/apps/reporting/tests/test_recette.py`

**Interfaces:**
- Produces: groups per caisse (rows with `nature`), a "RÉPARTITION PAR MODE DE PAIEMENT" group, a "SYNTHÈSE" group.

- [ ] **Step 1: Extend the test (make it fail)**

Append to `backend/apps/reporting/tests/test_recette.py`:

```python
@pytest.mark.django_db
def test_recette_all_categories_modes_and_net():
    from apps.system_config.services import create_company
    from apps.treasury.services.services import create_cash_register, open_session, create_transaction
    from apps.reporting.registry import REPORTS
    company, _ = create_company(name="R2 Co", admin_email="r2@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="r2@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    session = open_session(company=company, cash_register=reg, created_by=admin)

    def inc(cat, amount, mode):
        create_transaction(company=company, transaction_type=Transaction.Type.INCOME, category=cat,
                           account_type=Transaction.AccountType.CASH, cash_session=session,
                           amount=Decimal(amount), payment_mode=mode, created_by=admin)

    inc(Transaction.Category.TICKET_SALES, "5000", Transaction.PaymentMode.CASH)
    inc(Transaction.Category.PARCEL_SHIPPING, "3000", Transaction.PaymentMode.MOBILE_MONEY)
    inc(Transaction.Category.BAGGAGE, "1000", Transaction.PaymentMode.CASH)
    inc(Transaction.Category.OTHER_INCOME, "500", Transaction.PaymentMode.CASH)
    create_transaction(company=company, transaction_type=Transaction.Type.EXPENSE,
                       category=Transaction.Category.REFUND, account_type=Transaction.AccountType.CASH,
                       cash_session=session, amount=Decimal("2000"),
                       payment_mode=Transaction.PaymentMode.CASH, description="Remb", created_by=admin)

    result = REPORTS["recette"]["build"](company, {"date_from": None, "date_to": None})
    assert result.totals["total"] == Decimal("9500")  # 5000+3000+1000+500
    natures = {r.get("nature") for g in result.groups for r in g.rows}
    assert {"Voyage", "Colis", "Bagage", "Autre"} <= natures
    modes = next(g for g in result.groups if g.label == "RÉPARTITION PAR MODE DE PAIEMENT")
    assert sum(r["total"] for r in modes.rows) == Decimal("9500")
    synth = next(g for g in result.groups if g.label == "SYNTHÈSE")
    net = next(r for r in synth.rows if r["nature"] == "Net")
    assert net["total"] == Decimal("7500")  # 9500 - 2000
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/reporting/tests/test_recette.py -q`
Expected: FAIL — only ticket sales counted; no nature/mode/synthèse.

- [ ] **Step 3: Rewrite the report**

Replace `backend/apps/reporting/reports/recette.py` with:

```python
from decimal import Decimal
from collections import defaultdict
from apps.treasury.models import Transaction
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label

_NATURE = {
    Transaction.Category.TICKET_SALES: "Voyage",
    Transaction.Category.PARCEL_SHIPPING: "Colis",
    Transaction.Category.BAGGAGE: "Bagage",
    Transaction.Category.OTHER_INCOME: "Autre",
}


@register("recette", "Relevé des encaissements", ["date_from", "date_to"], "portrait")
def build(company, f):
    qs = (Transaction.objects.filter(company=company, is_deleted=False,
                                     transaction_type=Transaction.Type.INCOME,
                                     category__in=list(_NATURE))
          .select_related("cash_session__cash_register", "cash_session__opened_by",
                          "voyage_booking__outbound_trip__route", "voyage_booking__outbound_trip__vehicle",
                          "voyage_booking__outbound_trip__fare_class")
          .order_by("cash_session_id", "transaction_date"))
    if f["date_from"]: qs = qs.filter(transaction_date__gte=f["date_from"])
    if f["date_to"]:   qs = qs.filter(transaction_date__lte=f["date_to"])
    buckets, by_mode, grand = {}, defaultdict(Decimal), Decimal(0)
    for t in qs:
        sess = t.cash_session
        key = sess.id if sess else "—"
        if key not in buckets:
            cashier = ""
            if sess and getattr(sess, "opened_by", None):
                cashier = sess.opened_by.get_full_name()
            reg = getattr(sess, "cash_register", None)
            buckets[key] = {"label": f"{reg.name if reg else '—'} — {cashier}".strip(" —"),
                            "rows": [], "sub": Decimal(0)}
        trip = getattr(t.voyage_booking, "outbound_trip", None) if t.voyage_booking_id else None
        buckets[key]["rows"].append({
            "nature": _NATURE.get(t.category, ""),
            "dep": trip.scheduled_departure.strftime("%d/%m/%Y %H:%M") if trip else "",
            "trip": getattr(trip.route, "code", "") if trip and trip.route_id else "",
            "veh": getattr(getattr(trip, "vehicle", None), "license_plate", "") if trip else "",
            "cat": getattr(getattr(trip, "fare_class", None), "name", "") if trip else "",
            "total": t.amount})
        buckets[key]["sub"] += t.amount
        by_mode[t.get_payment_mode_display()] += t.amount
        grand += t.amount

    # Remboursements de la période (sortie) -> net.
    refunds = Transaction.objects.filter(company=company, is_deleted=False,
                                         transaction_type=Transaction.Type.EXPENSE,
                                         category=Transaction.Category.REFUND)
    if f["date_from"]: refunds = refunds.filter(transaction_date__gte=f["date_from"])
    if f["date_to"]:   refunds = refunds.filter(transaction_date__lte=f["date_to"])
    remb = sum((t.amount for t in refunds), Decimal(0))

    cols = [ReportColumn("nature", "Nature"), ReportColumn("dep", "Départ"), ReportColumn("trip", "Trajet"),
            ReportColumn("veh", "Véhicule"), ReportColumn("cat", "Catégorie"),
            ReportColumn("total", "Total", "right", True)]
    groups = [ReportGroup(label=b["label"], rows=b["rows"], subtotal={"total": b["sub"]}) for b in buckets.values()]
    groups.append(ReportGroup(label="RÉPARTITION PAR MODE DE PAIEMENT",
                              rows=[{"nature": m, "total": v} for m, v in sorted(by_mode.items())]))
    groups.append(ReportGroup(label="SYNTHÈSE", rows=[
        {"nature": "Total encaissé", "total": grand},
        {"nature": "Remboursements", "total": -remb},
        {"nature": "Net", "total": grand - remb},
    ]))
    return ReportResult("recette", "RELEVÉ DES ENCAISSEMENTS", cols, groups,
                        totals={"total": grand}, period_label=period_label(f))
```

- [ ] **Step 4: Run tests**

Run: `cd backend && ../env/bin/python -m pytest apps/reporting/tests/test_recette.py -q`
Expected: PASS (existing `test_recette_grouped_by_caisse` — note its `len(result.groups) == 1` assertion will now be 3; fix that existing test to `>= 1` or to check the first group, since the report now appends mode+synthèse groups).

> The existing `test_recette_grouped_by_caisse` asserts `len(result.groups) == 1`. Update it to `assert result.groups[0].subtotal["total"] == Decimal("5000")` and `assert result.totals["total"] == Decimal("5000")` (drop the `len == 1` line — there are now 3 groups: caisse + modes + synthèse).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/reporting/reports/recette.py backend/apps/reporting/tests/test_recette.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(reporting): recette - toutes categories + Nature + repartition modes + net"
```

---

### Task 4: `ca` — all income categories

**Files:**
- Modify: `backend/apps/reporting/reports/ca.py`
- Test: `backend/apps/reporting/tests/test_ca.py`

- [ ] **Step 1: Extend the test (make it fail)**

Append to `backend/apps/reporting/tests/test_ca.py`:

```python
@pytest.mark.django_db
def test_ca_includes_parcel_and_baggage():
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.treasury.services.services import create_cash_register, open_session, create_transaction
    from apps.reporting.registry import REPORTS
    company, _ = create_company(name="CA2 Co", admin_email="ca2@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ca2@x.com")
    agency = Agency.objects.create(company=company, name="DLA", code="DLA")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    reg.agency = agency; reg.save(update_fields=["agency"])
    session = open_session(company=company, cash_register=reg, created_by=admin)
    for cat in (Transaction.Category.TICKET_SALES, Transaction.Category.PARCEL_SHIPPING, Transaction.Category.BAGGAGE):
        create_transaction(company=company, transaction_type=Transaction.Type.INCOME, category=cat,
                           account_type=Transaction.AccountType.CASH, cash_session=session,
                           amount=Decimal("1000"), payment_mode=Transaction.PaymentMode.CASH, created_by=admin)
    now = timezone.now()
    result = REPORTS["ca"]["build"](company, {"year": now.year})
    assert result.totals["tot"] == Decimal("3000")  # 1000 x 3 catégories
```

- [ ] **Step 2: Run to verify failure**

Run: `cd backend && ../env/bin/python -m pytest apps/reporting/tests/test_ca.py::test_ca_includes_parcel_and_baggage -q`
Expected: FAIL — total 1000 (ticket only).

- [ ] **Step 3: Broaden the category filter**

In `backend/apps/reporting/reports/ca.py`, replace:

```python
                                      category=Transaction.Category.TICKET_SALES,
```
with:

```python
                                      category__in=[Transaction.Category.TICKET_SALES,
                                                    Transaction.Category.PARCEL_SHIPPING,
                                                    Transaction.Category.BAGGAGE,
                                                    Transaction.Category.OTHER_INCOME],
```

- [ ] **Step 4: Run tests**

Run: `cd backend && ../env/bin/python -m pytest apps/reporting/tests/test_ca.py -q`
Expected: PASS (both — the existing ticket-only test still gets 3000? No: existing `test_ca_agency_month_matrix` creates one 3000 ticket → still 3000, unaffected).

- [ ] **Step 5: Commit**

```bash
git add backend/apps/reporting/reports/ca.py backend/apps/reporting/tests/test_ca.py
git -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(reporting): production (CA) inclut colis/bagage/autre"
```

---

### Task 5: Full-suite verification

**Files:** none (verification only).

- [ ] **Step 1: Reporting suite**

Run: `cd backend && ../env/bin/python -m pytest apps/reporting -q`
Expected: all pass.

- [ ] **Step 2: Full backend suite**

Run: `cd backend && ../env/bin/python -m pytest -q`
Expected: all pass (no other app depends on these report internals).

- [ ] **Step 3: Render smoke (optional, if WeasyPrint present)**

Run: `cd backend && ../env/bin/python -m pytest apps/reporting -q -k pdf` (skips if WeasyPrint libs absent).

---

## Notes for the executor

- The renderer shows one `totals` row keyed by column key; multi-line summaries (modes, synthèse) are separate `ReportGroup`s that reuse the same columns (label text sits in the first non-money column, e.g. `nature`).
- Refund rows are positive in the `depense` list but the recap counts them in `depense` (reducing marge) and the recette `Net` subtracts them.
- `GeneralExpense.status == "paid"` and `TripExpense.status == TripExpense.Status.PAID` gate "actually disbursed" expenses; unpaid ones are excluded (matches the pre-existing depense/recap behaviour).
- Only `test_recette_grouped_by_caisse` needs its `len(groups)` assertion relaxed (Task 3 Step 4 note) — the other existing report tests are unaffected.
