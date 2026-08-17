# Module Reporting — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A reporting engine producing branded PDF (WeasyPrint) + XLSX + CSV, delivering 5 financial reports (Dépense, Recette, CA, Récapitulatif, Journaux de vente).

**Architecture:** New `apps/reporting` app. Each report is a data producer returning a `ReportResult` (columns, groups, subtotals, totals); format renderers (pdf/xlsx/csv) consume it. One `?format=` endpoint per report, gated by `reporting.view`.

**Tech Stack:** Django 5.1 + DRF, WeasyPrint 63, openpyxl 3.1.5, pytest (`config.settings.local`), Angular 17.

**Spec:** `docs/superpowers/specs/2026-08-17-reporting-design.md`

## Global Constraints
- Git root `ERP-master/`; `git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master ...`; commit as shimi, no Claude trailer.
- Tests: `cd backend && source ../env/bin/activate && python -m pytest`. Money `Decimal`.
- Company = `request.user.company`. Revenue categories: ticket_sales / baggage / parcel_shipping. Agency of a sale = `Transaction.cash_session.cash_register.agency`. Vehicle of a booking = `voyage_booking.outbound_trip.vehicle`.
- WeasyPrint import may fail locally (needs Pango/Cairo). PDF tests use `pytest.importorskip("weasyprint")`; XLSX/CSV/report-data tests must not import weasyprint.
- Before merge: `git status --short` clean + `python manage.py makemigrations --check`.

## File Structure
- `backend/apps/reporting/{__init__.py,apps.py}` — app config; `ready()` imports report modules so they register.
- `backend/apps/reporting/core.py` — `ReportColumn`, `ReportGroup`, `ReportResult`.
- `backend/apps/reporting/registry.py` — `REPORTS` dict + `register()` decorator.
- `backend/apps/reporting/filters.py` — `parse_filters(request)`, `period_label(f)`.
- `backend/apps/reporting/render/{csv_.py,xlsx.py,pdf.py}`, `letterhead.py`.
- `backend/apps/reporting/reports/{journaux_vente,depense,recette,ca,recapitulatif}.py`.
- `backend/apps/reporting/{views.py,urls.py}`, `tests/`.
- Modify: `config/settings/base.py` (LOCAL_APPS), `api/v1/router.py` (include), `requirements/base.txt`, `backend/Dockerfile`.
- `backend/apps/admin_rbac/migrations/00XX_reporting_permissions_seed.py`.
- Angular: `_api/config/api.config.ts`, `_api/services/reporting/report.service.ts`, `_api/pages/reporting/reporting.component.{ts,html}`, `routes.ts`, `pages.routes.ts`, `sidebar.service.ts`.

---

## Task 1: Engine (app + core + renderers CSV/XLSX + registry + view + RBAC)

**Files:** create the app, `core.py`, `registry.py`, `filters.py`, `render/csv_.py`, `render/xlsx.py`, `views.py`, `urls.py`, `apps.py`; modify `settings/base.py`, `api/v1/router.py`; add RBAC migration. Test: `apps/reporting/tests/test_engine.py`.

**Interfaces:**
- Produces: `ReportColumn(key,label,align="left",money=False)`, `ReportGroup(label="",rows=[],subtotal=None)`, `ReportResult(code,title,columns,groups,totals=None,period_label="",meta={})`; `register(code,name,filters,orientation)` decorator populating `REPORTS`; `render_csv(result)->bytes`, `render_xlsx(result)->bytes`; endpoints `GET /api/v1/reporting/catalog/`, `GET /api/v1/reporting/<code>/?format=`.

- [ ] **Step 1: Scaffold the app**

```bash
cd backend && python manage.py startapp reporting apps/reporting
```
Set `apps/reporting/apps.py`:
```python
from django.apps import AppConfig
class ReportingConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.reporting"
    def ready(self):
        from apps.reporting import reports  # noqa: registers report modules
```
Add `"apps.reporting",` to `LOCAL_APPS` in `config/settings/base.py`. Add to `api/v1/router.py`: `path("reporting/", include("apps.reporting.urls")),`. Create empty `apps/reporting/reports/__init__.py`.

- [ ] **Step 2: Write the failing test**

`apps/reporting/tests/test_engine.py`:
```python
import pytest
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.render.csv_ import render_csv
from apps.reporting.render.xlsx import render_xlsx


def _sample():
    cols = [ReportColumn("a", "A"), ReportColumn("m", "Montant", align="right", money=True)]
    grp = ReportGroup(rows=[{"a": "x", "m": 1500}, {"a": "y", "m": 2500}])
    return ReportResult(code="t", title="TEST", columns=cols, groups=[grp], totals={"m": 4000})


def test_csv_and_xlsx_render():
    r = _sample()
    csv_bytes = render_csv(r)
    assert b"Montant" in csv_bytes and b"4000" in csv_bytes
    xlsx_bytes = render_xlsx(r)
    assert xlsx_bytes[:2] == b"PK"  # xlsx is a zip
```

- [ ] **Step 3: Run — expect fail** — `python -m pytest apps/reporting/tests/test_engine.py -q` → ImportError.

- [ ] **Step 4: core.py**
```python
from dataclasses import dataclass, field


@dataclass
class ReportColumn:
    key: str; label: str; align: str = "left"; money: bool = False


@dataclass
class ReportGroup:
    label: str = ""
    rows: list = field(default_factory=list)
    subtotal: dict | None = None


@dataclass
class ReportResult:
    code: str
    title: str
    columns: list
    groups: list
    totals: dict | None = None
    period_label: str = ""
    meta: dict = field(default_factory=dict)
```

- [ ] **Step 5: registry.py**
```python
REPORTS: dict = {}


def register(code, name, filters, orientation="portrait"):
    def deco(fn):
        REPORTS[code] = {"code": code, "name": name, "filters": list(filters),
                         "orientation": orientation, "build": fn}
        return fn
    return deco
```

- [ ] **Step 6: filters.py**
```python
from django.utils.dateparse import parse_date


def parse_filters(request):
    q = getattr(request, "query_params", None) or request.GET
    def d(k):
        v = q.get(k)
        return parse_date(v) if v else None
    return {
        "date_from": d("date_from"), "date_to": d("date_to"),
        "agency": q.get("agency") or None, "register": q.get("register") or None,
        "agent": q.get("agent") or None, "vehicle": q.get("vehicle") or None,
        "year": int(q["year"]) if q.get("year") else None,
    }


def period_label(f):
    if f.get("date_from") or f.get("date_to"):
        a = f["date_from"].strftime("%d/%m/%Y") if f.get("date_from") else "…"
        b = f["date_to"].strftime("%d/%m/%Y") if f.get("date_to") else "…"
        return f"Période : {a} → {b}"
    if f.get("year"):
        return f"Année : {f['year']}"
    return ""
```

- [ ] **Step 7: render/csv_.py**
```python
import csv, io


def _fmt(col, v):
    if col.money and v is not None:
        return f"{float(v):,.0f}".replace(",", " ")
    return "" if v is None else str(v)


def render_csv(result) -> bytes:
    buf = io.StringIO()
    w = csv.writer(buf, delimiter=";")
    w.writerow([c.label for c in result.columns])
    for g in result.groups:
        if g.label:
            w.writerow([g.label])
        for row in g.rows:
            w.writerow([_fmt(c, row.get(c.key)) for c in result.columns])
        if g.subtotal:
            w.writerow([_fmt(c, g.subtotal.get(c.key)) for c in result.columns])
    if result.totals:
        w.writerow([_fmt(c, result.totals.get(c.key)) for c in result.columns])
    return ("﻿" + buf.getvalue()).encode("utf-8")
```

- [ ] **Step 8: render/xlsx.py**
```python
import io
from openpyxl import Workbook
from openpyxl.styles import Font, Alignment


def render_xlsx(result) -> bytes:
    wb = Workbook(); ws = wb.active; ws.title = "Rapport"
    ws.append([result.title])
    ws["A1"].font = Font(bold=True, size=14)
    if result.period_label:
        ws.append([result.period_label])
    ws.append([c.label for c in result.columns])
    for cell in ws[ws.max_row]:
        cell.font = Font(bold=True)
    for g in result.groups:
        if g.label:
            ws.append([g.label]); ws[ws.max_row][0].font = Font(bold=True, italic=True)
        for row in g.rows:
            ws.append([row.get(c.key) for c in result.columns])
        if g.subtotal:
            ws.append([g.subtotal.get(c.key) for c in result.columns])
    if result.totals:
        ws.append([result.totals.get(c.key) for c in result.columns])
        for cell in ws[ws.max_row]:
            cell.font = Font(bold=True)
    for i, c in enumerate(result.columns, 1):
        if c.align == "right":
            for cell in ws.iter_cols(min_col=i, max_col=i):
                for cc in cell:
                    cc.alignment = Alignment(horizontal="right")
    out = io.BytesIO(); wb.save(out); return out.getvalue()
```

- [ ] **Step 9: Run tests — expect pass** — `python -m pytest apps/reporting/tests/test_engine.py -q` → PASS.

- [ ] **Step 10: views.py + urls.py**
```python
# views.py
from rest_framework.views import APIView
from django.http import HttpResponse
from apps.core.permissions import IsAuthenticated, HasModulePermission
from apps.core.responses import success_response, error_response
from apps.reporting.registry import REPORTS
from apps.reporting.filters import parse_filters
from apps.reporting.render.csv_ import render_csv
from apps.reporting.render.xlsx import render_xlsx


class ReportCatalogView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "reporting.view"}

    def get(self, request):
        data = [{"code": r["code"], "name": r["name"], "filters": r["filters"]} for r in REPORTS.values()]
        return success_response(sorted(data, key=lambda x: x["name"]))


class ReportGenerateView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "reporting.view"}

    def get(self, request, code):
        entry = REPORTS.get(code)
        if not entry:
            return error_response("Rapport introuvable.", status_code=404)
        result = entry["build"](request.user.company, parse_filters(request))
        fmt = request.query_params.get("format", "pdf")
        if fmt == "csv":
            body, ct, ext = render_csv(result), "text/csv", "csv"
        elif fmt == "xlsx":
            body, ct, ext = render_xlsx(result), \
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "xlsx"
        else:
            from apps.reporting.render.pdf import render_pdf
            body, ct, ext = render_pdf(result, request.user.company), "application/pdf", "pdf"
        resp = HttpResponse(body, content_type=ct)
        resp["Content-Disposition"] = f'attachment; filename="{code}.{ext}"'
        return resp
```
```python
# urls.py
from django.urls import path
from . import views as v
urlpatterns = [
    path("catalog/", v.ReportCatalogView.as_view()),
    path("<str:code>/", v.ReportGenerateView.as_view()),
]
```

- [ ] **Step 11: RBAC migration** — create `apps/admin_rbac/migrations/00XX_reporting_permissions_seed.py` (mirror `0012_voyage_expense_permissions_seed.py`, dep on the latest admin_rbac migration): AppModule `get_or_create(code="reporting", defaults={"name":"Reporting"})`, Permission `reporting.view` ("Consulter les rapports", "view"). Run `python manage.py migrate`.

- [ ] **Step 12: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/reporting backend/config/settings/base.py backend/api/v1/router.py backend/apps/admin_rbac
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(reporting): moteur (core, renderers csv/xlsx, catalog+generate, RBAC)"
```

---

## Task 2: PDF renderer (WeasyPrint) + letterhead + deps + Dockerfile

**Files:** create `render/pdf.py`, `letterhead.py`; modify `requirements/base.txt`, `backend/Dockerfile`. Test: `apps/reporting/tests/test_pdf.py`.

**Interfaces:** Consumes `ReportResult`, `system_config.Company`. Produces `render_pdf(result, company) -> bytes`, `letterhead.company_header_html(company) -> str`.

- [ ] **Step 1: Add deps** — append to `backend/requirements/base.txt`: `weasyprint==63.0` and `openpyxl==3.1.5`.

- [ ] **Step 2: Dockerfile system libs** — in `backend/Dockerfile`, **before** the `COPY requirements/` line, insert:
```dockerfile
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpango-1.0-0 libpangocairo-1.0-0 libgdk-pixbuf-2.0-0 libcairo2 libffi8 \
    shared-mime-info fonts-dejavu \
    && rm -rf /var/lib/apt/lists/*
```

- [ ] **Step 3: Install locally** — `pip install weasyprint==63.0 openpyxl==3.1.5` (macOS also needs `brew install pango gdk-pixbuf libffi` — if WeasyPrint still won't import, the PDF test will skip and CI/Docker covers it).

- [ ] **Step 4: Write the failing test**

`apps/reporting/tests/test_pdf.py`:
```python
import pytest
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult

weasyprint = pytest.importorskip("weasyprint")


@pytest.mark.django_db
def test_pdf_bytes():
    from apps.system_config.services import create_company
    from apps.reporting.render.pdf import render_pdf
    company, _ = create_company(name="PDF Co", admin_email="pdf@x.com",
                                admin_first_name="A", admin_last_name="B")
    r = ReportResult(code="t", title="TEST", columns=[ReportColumn("a", "A")],
                     groups=[ReportGroup(rows=[{"a": "x"}])], period_label="Période : test")
    out = render_pdf(r, company)
    assert out[:4] == b"%PDF"
```

- [ ] **Step 5: letterhead.py**
```python
import html as _h


def company_header_html(company) -> str:
    e = _h.escape
    ids = []
    for label, val in [("RCCM", company.rccm), ("NIU", company.tax_id),
                       ("Capital", company.capital), ("Tel", company.phone)]:
        if val:
            ids.append(f"{label}: {e(str(val))}")
    logo = ""
    if getattr(company, "logo", None):
        try:
            logo = f'<img src="{company.logo.path}" style="height:60px">'
        except Exception:
            logo = ""
    return f"""
    <div class="head">
      <div>{logo}</div>
      <div class="co">
        <div class="co-name">{e(company.name)}</div>
        <div>{e(company.slogan or "")}</div>
        <div>{e(" · ".join(ids))}</div>
      </div>
    </div>"""
```

- [ ] **Step 6: render/pdf.py**
```python
import html as _h
from django.utils import timezone
from weasyprint import HTML
from apps.reporting.letterhead import company_header_html


def _money(v):
    try:
        return f"{float(v):,.0f}".replace(",", " ")
    except (TypeError, ValueError):
        return "" if v is None else str(v)


def _cell(col, v):
    return _money(v) if col.money else ("" if v is None else _h.escape(str(v)))


def render_pdf(result, company) -> bytes:
    cols = result.columns
    thead = "".join(f'<th style="text-align:{c.align}">{_h.escape(c.label)}</th>' for c in cols)
    body = []
    for g in result.groups:
        if g.label:
            body.append(f'<tr class="grp"><td colspan="{len(cols)}">{_h.escape(g.label)}</td></tr>')
        for row in g.rows:
            tds = "".join(f'<td style="text-align:{c.align}">{_cell(c, row.get(c.key))}</td>' for c in cols)
            body.append(f"<tr>{tds}</tr>")
        if g.subtotal:
            tds = "".join(f'<td style="text-align:{c.align}"><b>{_cell(c, g.subtotal.get(c.key))}</b></td>' for c in cols)
            body.append(f'<tr class="sub">{tds}</tr>')
    if result.totals:
        tds = "".join(f'<td style="text-align:{c.align}"><b>{_cell(c, result.totals.get(c.key))}</b></td>' for c in cols)
        body.append(f'<tr class="tot">{tds}</tr>')
    orientation = "landscape" if len(cols) > 6 else "portrait"
    run = timezone.localtime(timezone.now()).strftime("%d/%m/%Y %H:%M")
    html = f"""<html><head><meta charset="utf-8"><style>
      @page {{ size: A4 {orientation}; margin: 14mm 10mm; }}
      body {{ font-family: DejaVu Sans, sans-serif; font-size: 10px; color:#111; }}
      .head {{ display:flex; gap:12px; border-bottom:1px solid #999; padding-bottom:6px; }}
      .co-name {{ font-weight:bold; font-size:14px; }}
      h1 {{ font-size:15px; margin:10px 0 2px; }}
      .meta {{ color:#555; margin-bottom:8px; }}
      table {{ width:100%; border-collapse:collapse; }}
      th, td {{ border:1px solid #bbb; padding:3px 5px; }}
      th {{ background:#f0f0f0; }}
      tr.grp td {{ background:#eef; font-weight:bold; }}
      tr.tot td {{ background:#f7f7f7; }}
    </style></head><body>
      {company_header_html(company)}
      <h1>{_h.escape(result.title)}</h1>
      <div class="meta">Généré le {run}{(' · ' + _h.escape(result.period_label)) if result.period_label else ''}</div>
      <table><thead><tr>{thead}</tr></thead><tbody>{''.join(body)}</tbody></table>
    </body></html>"""
    return HTML(string=html).write_pdf()
```

- [ ] **Step 7: Run test** — `python -m pytest apps/reporting/tests/test_pdf.py -q` → PASS (or skipped if weasyprint missing locally).

- [ ] **Step 8: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/reporting backend/requirements/base.txt backend/Dockerfile
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(reporting): rendu PDF WeasyPrint + en-tete societe + deps/Dockerfile"
```

---

## Task 3: Report — Journaux de vente

**Files:** create `apps/reporting/reports/journaux_vente.py`; modify `reports/__init__.py` (import it). Test: `apps/reporting/tests/test_journaux.py`.

**Interfaces:** Consumes `register`, `ReportColumn/Group/Result`, `treasury.CashSession`. Produces report code `"journaux-vente"`.

- [ ] **Step 1: Write the failing test**

```python
import pytest
from decimal import Decimal
from apps.authentication.models import User


@pytest.mark.django_db
def test_journaux_totals():
    from apps.system_config.services import create_company
    from apps.treasury.services.services import create_cash_register, open_session, close_session
    from apps.reporting.registry import REPORTS
    company, _ = create_company(name="J Co", admin_email="j@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="j@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    s = open_session(company=company, cash_register=reg, created_by=admin)
    close_session(s, closing_balance=Decimal("1000"), updated_by=admin)  # opening 0, expected 0 -> excédent 1000
    result = REPORTS["journaux-vente"]["build"](company, {"date_from": None, "date_to": None, "register": None})
    assert result.totals["exc"] == Decimal("1000")
    assert result.groups[0].rows[0]["caisse"] == "C1"
```
> Verify `close_session` signature (`grep -n "def close_session" backend/apps/treasury/services/services.py`) and adjust the call. Opening balance defaults to the register balance (0 for a new register), so a closing of 1000 yields difference +1000.

- [ ] **Step 2: Run — fail** (`KeyError: 'journaux-vente'`).

- [ ] **Step 3: Implement** `apps/reporting/reports/journaux_vente.py`
```python
from decimal import Decimal
from apps.treasury.models import CashSession
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label


@register("journaux-vente", "Journaux de vente", ["date_from", "date_to", "register"], "portrait")
def build(company, f):
    qs = (CashSession.objects.filter(company=company, is_deleted=False, status=CashSession.Status.CLOSED)
          .select_related("cash_register").order_by("opened_at"))
    if f["date_from"]: qs = qs.filter(opened_at__date__gte=f["date_from"])
    if f["date_to"]:   qs = qs.filter(opened_at__date__lte=f["date_to"])
    if f["register"]:  qs = qs.filter(cash_register_id=f["register"])
    rows, exc, man = [], Decimal(0), Decimal(0)
    for i, s in enumerate(qs, 1):
        diff = s.difference or Decimal(0)
        e = diff if diff > 0 else Decimal(0)
        m = -diff if diff < 0 else Decimal(0)
        exc += e; man += m
        rows.append({"n": i, "periode": s.opened_at.strftime("%d/%m/%Y"), "caisse": s.cash_register.name,
                     "si": s.opening_balance, "sf": s.expected_closing, "sr": s.closing_balance,
                     "exc": e, "man": m})
    cols = [ReportColumn("n", "No"), ReportColumn("periode", "Période"), ReportColumn("caisse", "Caisse"),
            ReportColumn("si", "Solde initial", "right", True), ReportColumn("sf", "Solde final", "right", True),
            ReportColumn("sr", "Solde réel", "right", True), ReportColumn("exc", "Excédent", "right", True),
            ReportColumn("man", "Manquant", "right", True)]
    return ReportResult("journaux-vente", "JOURNAUX DE VENTE", cols, [ReportGroup(rows=rows)],
                        totals={"exc": exc, "man": man}, period_label=period_label(f))
```
Add to `apps/reporting/reports/__init__.py`: `from . import journaux_vente  # noqa`.

- [ ] **Step 4: Run — pass.** **Step 5: Commit** `feat(reporting): etat Journaux de vente`.

---

## Task 4: Report — Dépense

**Files:** `reports/depense.py` + `reports/__init__.py`. Test: `tests/test_depense.py`.

- [ ] **Step 1: Failing test** — create a company, a Route/FareClass/ServicePoints (helper as in `voyages_trips/test_trip_expenses.py`), a trip, a paid `TripExpense` (open session + `disburse_trip_expense`), then assert `REPORTS["depense"]["build"](company, filters).totals["montant"]` equals the amount and the row `cat` is the expense type name.

- [ ] **Step 2: Run — fail.**

- [ ] **Step 3: Implement** `apps/reporting/reports/depense.py`
```python
from decimal import Decimal
from apps.voyages_trips.models import TripExpense
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label


@register("depense", "Liste des dépenses", ["date_from", "date_to", "agency", "register", "vehicle"], "landscape")
def build(company, f):
    qs = (TripExpense.objects.filter(trip__company=company, is_deleted=False, status=TripExpense.Status.PAID)
          .select_related("expense_type", "trip", "trip__vehicle", "cash_session__cash_register")
          .order_by("date"))
    if f["date_from"]: qs = qs.filter(date__gte=f["date_from"])
    if f["date_to"]:   qs = qs.filter(date__lte=f["date_to"])
    if f["vehicle"]:   qs = qs.filter(trip__vehicle_id=f["vehicle"])
    if f["register"]:  qs = qs.filter(cash_session__cash_register_id=f["register"])
    if f["agency"]:    qs = qs.filter(cash_session__cash_register__agency_id=f["agency"])
    rows, total = [], Decimal(0)
    for i, e in enumerate(qs, 1):
        total += e.amount
        reg = getattr(e.cash_session, "cash_register", None)
        rows.append({"n": i, "trip": e.trip.number,
                     "veh": getattr(e.trip.vehicle, "license_plate", "—"),
                     "cat": e.expense_type.name, "date": e.date.strftime("%d/%m/%Y"),
                     "desc": e.description, "tres": reg.name if reg else "—", "montant": e.amount})
    cols = [ReportColumn("n", "No"), ReportColumn("trip", "Voyage"), ReportColumn("veh", "Véhicule"),
            ReportColumn("cat", "Catégorie"), ReportColumn("date", "Date"), ReportColumn("desc", "Description"),
            ReportColumn("tres", "Trésorerie"), ReportColumn("montant", "Montant", "right", True)]
    return ReportResult("depense", "LISTE DES DÉPENSES", cols, [ReportGroup(rows=rows)],
                        totals={"montant": total}, period_label=period_label(f))
```
Register in `reports/__init__.py`. **Step 4: pass. Step 5: Commit** `feat(reporting): etat Depense`.

---

## Task 5: Report — Recette (grouped by caisse)

**Files:** `reports/recette.py` + `__init__`. Test: `tests/test_recette.py`.

- [ ] **Step 1: Failing test** — create a company + cash register + open session; create a `Transaction` (category `TICKET_SALES`, income, cash_session) via `create_transaction`; assert `build(...)` returns one group whose `subtotal["total"]` equals the amount and grand `totals["total"]` equals it.

- [ ] **Step 2: Run — fail.**

- [ ] **Step 3: Implement** `apps/reporting/reports/recette.py`
```python
from decimal import Decimal
from apps.treasury.models import Transaction
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label


@register("recette", "Relevé des encaissements", ["date_from", "date_to"], "portrait")
def build(company, f):
    qs = (Transaction.objects.filter(company=company, is_deleted=False,
                                     transaction_type=Transaction.Type.INCOME,
                                     category=Transaction.Category.TICKET_SALES)
          .select_related("cash_session__cash_register", "cash_session__opened_by",
                          "voyage_booking__outbound_trip__route", "voyage_booking__outbound_trip__vehicle",
                          "voyage_booking__outbound_trip__fare_class")
          .order_by("cash_session_id", "transaction_date"))
    if f["date_from"]: qs = qs.filter(transaction_date__gte=f["date_from"])
    if f["date_to"]:   qs = qs.filter(transaction_date__lte=f["date_to"])
    buckets = {}  # session_id -> {"label":..., "rows":[...], "sub":Decimal}
    grand = Decimal(0)
    for t in qs:
        sess = t.cash_session
        key = sess.id if sess else "—"
        if key not in buckets:
            cashier = getattr(getattr(sess, "opened_by", None), "get_full_name", lambda: "")() if sess else ""
            reg = getattr(sess, "cash_register", None)
            buckets[key] = {"label": f"{reg.name if reg else '—'} — {cashier}".strip(" —"),
                            "rows": [], "sub": Decimal(0)}
        trip = getattr(t.voyage_booking, "outbound_trip", None)
        buckets[key]["rows"].append({
            "dep": trip.scheduled_departure.strftime("%d/%m/%Y %H:%M") if trip else "",
            "trip": getattr(trip.route, "code", "") if trip else "",
            "veh": getattr(getattr(trip, "vehicle", None), "license_plate", "") if trip else "",
            "cat": getattr(getattr(trip, "fare_class", None), "name", "") if trip else "",
            "total": t.amount})
        buckets[key]["sub"] += t.amount; grand += t.amount
    cols = [ReportColumn("dep", "Départ"), ReportColumn("trip", "Trajet"), ReportColumn("veh", "Véhicule"),
            ReportColumn("cat", "Catégorie"), ReportColumn("total", "Total", "right", True)]
    groups = [ReportGroup(label=b["label"], rows=b["rows"], subtotal={"total": b["sub"]}) for b in buckets.values()]
    return ReportResult("recette", "RELEVÉ DES ENCAISSEMENTS", cols, groups,
                        totals={"total": grand}, period_label=period_label(f))
```
Register. **Step 4: pass. Step 5: Commit** `feat(reporting): etat Recette (par caisse)`.

---

## Task 6: Report — CA (agence × mois)

**Files:** `reports/ca.py` + `__init__`. Test: `tests/test_ca.py`.

- [ ] **Step 1: Failing test** — company + cash register with an agency + session; a `TICKET_SALES` transaction in a known month; assert the agency's row has the month total and `totals` grand equals it.

- [ ] **Step 2: Run — fail.**

- [ ] **Step 3: Implement** `apps/reporting/reports/ca.py`
```python
from decimal import Decimal
from django.db.models import Sum
from django.db.models.functions import ExtractMonth
from django.utils import timezone
from apps.treasury.models import Transaction
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register

_MONTHS = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"]


@register("ca", "Production par agence et par mois", ["year"], "landscape")
def build(company, f):
    year = f.get("year") or timezone.now().year
    agg = (Transaction.objects.filter(company=company, is_deleted=False,
                                      transaction_type=Transaction.Type.INCOME,
                                      category=Transaction.Category.TICKET_SALES,
                                      transaction_date__year=year)
           .annotate(month=ExtractMonth("transaction_date"))
           .values("cash_session__cash_register__agency__name", "month")
           .annotate(total=Sum("amount")))
    matrix = {}  # agency -> {month:amount}
    for r in agg:
        name = r["cash_session__cash_register__agency__name"] or "— Sans agence —"
        matrix.setdefault(name, {}).setdefault(r["month"], Decimal(0))
        matrix[name][r["month"]] += r["total"] or Decimal(0)
    cols = [ReportColumn("n", "No"), ReportColumn("agence", "Centre d'activité")]
    cols += [ReportColumn(f"m{m}", _MONTHS[m - 1], "right", True) for m in range(1, 13)]
    cols += [ReportColumn("tot", "Total", "right", True)]
    rows, col_tot = [], {f"m{m}": Decimal(0) for m in range(1, 13)}
    grand = Decimal(0)
    for i, (name, months) in enumerate(sorted(matrix.items()), 1):
        row = {"n": i, "agence": name}; line = Decimal(0)
        for m in range(1, 13):
            v = months.get(m, Decimal(0)); row[f"m{m}"] = v; col_tot[f"m{m}"] += v; line += v
        row["tot"] = line; grand += line
        rows.append(row)
    totals = {"agence": "TOTAL", **col_tot, "tot": grand}
    return ReportResult("ca", f"PRODUCTION PAR AGENCE ET PAR MOIS — {year}", cols,
                        [ReportGroup(rows=rows)], totals=totals, period_label=f"Année : {year}")
```
Register. **Step 4: pass. Step 5: Commit** `feat(reporting): etat CA (agence x mois)`.

---

## Task 7: Report — Récapitulatif (marge par véhicule)

**Files:** `reports/recapitulatif.py` + `__init__`. Test: `tests/test_recapitulatif.py`.

- [ ] **Step 1: Failing test** — company + register + session; a `TICKET_SALES` transaction linked to a booking whose `outbound_trip.vehicle` is set; a paid `TripExpense` on that trip. Assert the vehicle row has `voyage` = revenue, `depense` = expense, `marge` = revenue − expense.

- [ ] **Step 2: Run — fail.**

- [ ] **Step 3: Implement** `apps/reporting/reports/recapitulatif.py`
```python
from decimal import Decimal
from collections import defaultdict
from apps.treasury.models import Transaction
from apps.voyages_trips.models import TripExpense
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label

_CAT_KEY = {  # transaction category -> revenue bucket
    Transaction.Category.TICKET_SALES: "voyage",
    Transaction.Category.BAGGAGE: "bagage",
    Transaction.Category.PARCEL_SHIPPING: "transit",
}
_LINK_TRIP = {  # which FK carries the trip, per category
    "voyage": lambda t: getattr(t.voyage_booking, "outbound_trip", None),
    "bagage": lambda t: getattr(t.voyages_baggage, "trip", None),
    "transit": lambda t: getattr(t.voyages_parcel, "trip", None),
}


@register("recapitulatif", "État récapitulatif de trésorerie",
          ["date_from", "date_to", "vehicle"], "landscape")
def build(company, f):
    # cell = {(vehicle_label, date_str): {"voyage":..,"bagage":..,"transit":..,"depense":..}}
    cell = defaultdict(lambda: {"voyage": Decimal(0), "bagage": Decimal(0), "transit": Decimal(0), "depense": Decimal(0)})
    txns = (Transaction.objects.filter(company=company, is_deleted=False, transaction_type=Transaction.Type.INCOME,
                                       category__in=list(_CAT_KEY))
            .select_related("voyage_booking__outbound_trip__vehicle", "voyages_baggage__trip__vehicle",
                            "voyages_parcel__trip__vehicle"))
    if f["date_from"]: txns = txns.filter(transaction_date__gte=f["date_from"])
    if f["date_to"]:   txns = txns.filter(transaction_date__lte=f["date_to"])
    for t in txns:
        bucket = _CAT_KEY[t.category]
        trip = _LINK_TRIP[bucket](t)
        veh = getattr(getattr(trip, "vehicle", None), "license_plate", "—") if trip else "—"
        key = (veh, t.transaction_date.strftime("%d/%m/%Y"))
        cell[key][bucket] += t.amount
    exps = (TripExpense.objects.filter(trip__company=company, is_deleted=False, status=TripExpense.Status.PAID)
            .select_related("trip__vehicle"))
    if f["date_from"]: exps = exps.filter(date__gte=f["date_from"])
    if f["date_to"]:   exps = exps.filter(date__lte=f["date_to"])
    for e in exps:
        veh = getattr(e.trip.vehicle, "license_plate", "—")
        cell[(veh, e.date.strftime("%d/%m/%Y"))]["depense"] += e.amount
    if f["vehicle"]:
        # optional narrow: keep only rows for that vehicle's plate
        from apps.fleet.models import Vehicle
        plate = getattr(Vehicle.objects.filter(id=f["vehicle"]).first(), "license_plate", None)
        if plate:
            cell = {k: v for k, v in cell.items() if k[0] == plate}
    rows = []
    tot = {"voyage": Decimal(0), "bagage": Decimal(0), "transit": Decimal(0), "depense": Decimal(0), "marge": Decimal(0)}
    for i, ((veh, day), v) in enumerate(sorted(cell.items()), 1):
        rec = v["voyage"] + v["bagage"] + v["transit"]
        marge = rec - v["depense"]
        rows.append({"n": i, "periode": day, "vehicule": veh, "partenaire": company.name,
                     "voyage": v["voyage"], "bagage": v["bagage"], "transit": v["transit"],
                     "depense": v["depense"], "marge": marge})
        for k in ("voyage", "bagage", "transit", "depense"):
            tot[k] += v[k]
        tot["marge"] += marge
    cols = [ReportColumn("n", "No"), ReportColumn("periode", "Période"), ReportColumn("vehicule", "Véhicule"),
            ReportColumn("partenaire", "Partenaire"), ReportColumn("voyage", "Voyage", "right", True),
            ReportColumn("bagage", "Bagage", "right", True), ReportColumn("transit", "Transit", "right", True),
            ReportColumn("depense", "Dépense", "right", True), ReportColumn("marge", "Marge", "right", True)]
    return ReportResult("recapitulatif", "ÉTAT RÉCAPITULATIF DE TRÉSORERIE", cols,
                        [ReportGroup(rows=rows)], totals={"partenaire": "TOTAL", **tot},
                        period_label=period_label(f))
```
Register. **Step 4: pass. Step 5: Commit** `feat(reporting): etat Recapitulatif (marge par vehicule)`.

---

## Task 8: Frontend — page Reporting

**Files:** modify `api.config.ts`; create `_api/services/reporting/report.service.ts`, `_api/pages/reporting/reporting.component.{ts,html}`; modify `routes.ts`, `pages.routes.ts`, `sidebar.service.ts`.

- [ ] **Step 1: Endpoints** — in `api.config.ts` add a `REPORTING` block: `const RP = ${API_BASE}/reporting; export const REPORTING = { catalog: ${RP}/catalog/, generate: (code) => ${RP}/${code}/ };`

- [ ] **Step 2: Service** `report.service.ts`
```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { REPORTING } from '../../config/api.config';

export interface ReportMeta { code: string; name: string; filters: string[]; }

@Injectable({ providedIn: 'root' })
export class ReportService {
  constructor(private http: HttpClient) {}
  catalog(): Observable<ReportMeta[]> { return this.http.get<ReportMeta[]>(REPORTING.catalog); }
  download(code: string, format: string, filters: Record<string, string>): void {
    let p = new HttpParams().set('format', format);
    Object.entries(filters).forEach(([k, v]) => { if (v) p = p.set(k, v); });
    this.http.get(`${REPORTING.generate(code)}`, { params: p, responseType: 'blob' }).subscribe(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = `${code}.${format}`; a.click();
      URL.revokeObjectURL(url);
    });
  }
}
```

- [ ] **Step 3: Component** `reporting.component.ts` — standalone; loads `catalog()`; a filter form (date_from, date_to, agency select via `AgencyService`, register select via `RegisterService`, vehicle select via fleet vehicle service, year); a report picker; a format selector (pdf/xlsx/csv); a **Générer** button calling `svc.download(selectedCode, format, filters)`. Show only the filters listed in the selected report's `filters`. Imports `CommonModule, FormsModule, HasPermissionDirective`.

- [ ] **Step 4: HTML** — a card with the report `<select>`, conditional filter inputs (`@if (meta.filters.includes('agency'))` etc.), a format `<select>`, and `<button (click)="generate()">Générer</button>`.

- [ ] **Step 5: Routes + sidebar** — `routes.ts`: `reporting: '/reporting'`. `pages.routes.ts`: `{ path: 'reporting', loadComponent: () => import('../../../_api/pages/reporting/reporting.component').then(m => m.ReportingComponent) }`. `sidebar.service.ts`: a new top-level group **"Reporting"** (or under an existing group) with one item `{ menuValue: 'Rapports', route: routes.reporting, base: 'reporting', permission: 'reporting.view' }`.

- [ ] **Step 6: Build** — `cd angular && npx ng build` → success.

- [ ] **Step 7: Commit** `feat(reporting-fe): page de generation des rapports (PDF/Excel/CSV)`.

---

## Task 9: Verify + finish

- [ ] **Step 1:** `cd backend && python -m pytest -q` → all green (PDF test skips if weasyprint absent locally).
- [ ] **Step 2:** `git -C <repo> status --short` clean + `python manage.py makemigrations --check` clean.
- [ ] **Step 3:** superpowers:finishing-a-development-branch → merge to `master`, `git push all master`. (The Railway Docker build installs the WeasyPrint system libs; watch that deploy.)
