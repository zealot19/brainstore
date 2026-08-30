# Recettes (income) module — design

**Date:** 2026-08-30
**Module:** Trésorerie › Recettes
**Author:** shimi (with Claude)

## Goal

Add a **Recettes** sub-menu to the Trésorerie module that lets treasury
users view, filter and print all company income — from voyage ticket
sales, colis (parcels) and bagage (baggage) — plus manually record
miscellaneous "autre" income. This mirrors the existing **Dépenses**
module in structure and code style.

## Context

Income is **already recorded** as `Transaction` rows the moment a
booking / colis / bagage is paid:

- `apps/treasury/services/booking_sales.py::record_booking_payment` →
  `Transaction(transaction_type=INCOME, category=TICKET_SALES,
  voyage_booking=…)`
- `apps/treasury/services/consignment_sales.py::record_parcel_payment` →
  `category=PARCEL_SHIPPING, voyages_parcel=…`
- `record_baggage_payment` → `category=BAGGAGE, voyages_baggage=…`

Therefore the Recettes module is primarily a **read/report view** over
existing income transactions, with one write path: manual `OTHER_INCOME`
entry. No new persistence model is introduced.

`Transaction` (`apps/treasury/models/transaction.py`) relevant fields:
`transaction_type` (`income`/`expense`), `category`
(`ticket_sales`/`parcel_shipping`/`baggage`/`charter`/`other_income`/…),
`amount`, `payment_mode`, `transaction_date`, `reference`, `cash_session`
(→ `cash_register` → `agency`), `bank_account`, and source FKs
`voyage_booking`, `voyages_parcel`, `voyages_baggage`, `trip`.

## Scope decisions (confirmed with user)

1. **Structure:** Tableau de bord + 3 source pages (Recette voyage,
   Recette colis, Recette bagage) + **Autre recette** (manual income),
   mirroring how "Dépense générale" sits beside voyage expenses.
2. **Editability:** read-only for sales income (voyage/colis/bagage);
   manual create only for `OTHER_INCOME` ("Autre recette"). No edit or
   delete of income anywhere.
3. **Receipt:** a printable **reçu de recette** PDF (WeasyPrint, A5,
   blue letterhead) in the row actions, reusing the voucher pattern.

## Non-goals (YAGNI)

- No new `Income` model — income already lives in `Transaction`.
- No edit/delete of income rows.
- No CSV/Excel export.
- No dedicated `CHARTER` page — charter income (rare) surfaces under
  "Autre recette" filtering if ever needed.
- No reconciliation / refund flows.

## Architecture

Read income directly from `Transaction`, filtered by
`transaction_type='income'` and `category`. Follow the exact layering of
the Dépenses module: **selectors → serializers → views → urls** on the
backend, **service → pages → sidebar/routes/config** on the frontend.

### Backend — `apps/treasury/`

**`selectors/incomes.py`** (new)

```python
def list_income(company_id, *, category=None, agency_scope=None,
                date_from=None, date_to=None, payment_mode=None):
    """Income transactions, newest first, optionally by category/scope/date."""
    # Transaction.objects.filter(company_id=..., is_deleted=False,
    #   transaction_type=Transaction.Type.INCOME)
    # .select_related("cash_session__cash_register__agency", "bank_account",
    #   "voyage_booking", "voyages_parcel", "voyages_baggage", "trip")
    # .order_by("-transaction_date", "-created_at")
    # if category: .filter(category=category)
    # agency scope: .filter(cash_session__cash_register__agency_id=agency_scope[1])
    #   applied only when agency_scope is truthy and scoped (see below)
    # if date_from: .filter(transaction_date__gte=date_from)
    # if date_to:   .filter(transaction_date__lte=date_to)
    # if payment_mode: .filter(payment_mode=payment_mode)
```

Agency scoping reuses `apps/treasury/scoping.py::register_agency_scope(user)`
→ `(scoped: bool, agency_id)`. When `scoped` is True, filter on
`cash_session__cash_register__agency_id=agency_id`. Bank income (no
`cash_session`) is excluded for scoped users — acceptable, as scoped
guichetiers work cash only. A dedicated helper
`_apply_income_agency_scope(qs, agency_scope)` keeps this explicit
(income scopes through `cash_session`, unlike `GeneralExpense` which has a
direct `agency` FK, so the expense `_apply_agency_scope` helper is not
reused directly).

```python
def income_dashboard(company_id, *, agency_scope=None):
    """Totals mirroring expenses_dashboard: today, month, per-source."""
    # base = list_income(company_id, agency_scope=agency_scope)
    # returns dict:
    #   today_total, month_total,
    #   voyage_total, parcel_total, baggage_total, other_total,
    #   total, count
    # per-source via base.filter(category=...)
    # today/month via transaction_date__ (localdate())
```

**`serializers.py`** (add)

```python
class IncomeRowSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    reference = serializers.CharField()
    category = serializers.CharField()
    category_display = serializers.CharField(source="get_category_display")
    amount = serializers.DecimalField(max_digits=12, decimal_places=2)
    payment_mode = serializers.CharField()
    payment_display = serializers.CharField(source="get_payment_mode_display")
    transaction_date = serializers.DateField()
    cash_register_name = serializers.SerializerMethodField()
    agency_name = serializers.SerializerMethodField()
    account_label = serializers.SerializerMethodField()   # caisse or bank
    source_ref = serializers.SerializerMethodField()      # booking/parcel/baggage ref
    source_party = serializers.SerializerMethodField()    # passenger / sender name
    description = serializers.CharField()
    created_at = serializers.DateTimeField()
```

Method resolution:
- `cash_register_name` / `agency_name`: from
  `obj.cash_session.cash_register(.agency)` when `cash_session_id` set,
  else `None`.
- `account_label`: `cash_register.name` for cash, `str(bank_account)` for
  bank (same as `TransactionReadSerializer.get_account_label`).
- `source_ref`: `voyage_booking.reference` (TICKET_SALES) /
  `voyages_parcel.reference` (PARCEL_SHIPPING) /
  `voyages_baggage.tag_number` (BAGGAGE) / `None` (OTHER_INCOME); fall
  back to `""` when the FK/field is blank.
- `source_party`: parcel → `sender_name`; baggage → `sender_name`;
  booking → passenger/holder name if reachable, else `""`;
  other → `""`. Guard every attribute with `getattr(...)`/None checks.

**`services/` — `record_other_income`** (new, e.g.
`services/other_income.py`, exported from `services/__init__.py`)

```python
def record_other_income(company, *, amount, payment_mode, description,
                        user, cash_session=None):
    """Manual OTHER_INCOME cash-in into a caisse session.

    Resolves the session via resolve_disbursement_session (session-or-open
    + agency guard), then create_transaction(INCOME, OTHER_INCOME, cash).
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

Reusing `resolve_disbursement_session` guarantees the same agency guard
guichetiers already hit for expenses: they may only cash-in to a caisse
of their own agency. `create_transaction` already validates
positive-amount, open session, updates the register balance (+amount for
income) and posts the accounting entry — no new logic.

**`income_receipt.py`** (new) — parallel to `expense_voucher.py`:

```python
def render_income_receipt(*, company, ref, date, source_label, party,
                          amount, payment_label, caisse_label=None,
                          agency_name=None, created_by=None,
                          kind_label="Recette") -> bytes:
    """A5 landscape reçu, blue (#0068B8) letterhead via company_header_html."""
```

Rows: Source, Client/Tiers, Mode de paiement, Caisse, Agence, Date,
Encaissé par; big "Montant : … FCFA"; signature zones (Le caissier / Le
client). Import `weasyprint` lazily inside the function.

**`views.py`** (add) — all `permission_classes =
[IsAuthenticated, HasModulePermission]`, agency-scoped via
`register_agency_scope(request.user)`:

| View | Method | permission_map | Behaviour |
|------|--------|----------------|-----------|
| `IncomeVoyageListView`  | GET  | `treasury.income.view` | `list_income(category=TICKET_SALES, …)` |
| `IncomeParcelListView`  | GET  | `treasury.income.view` | `category=PARCEL_SHIPPING` |
| `IncomeBaggageListView` | GET  | `treasury.income.view` | `category=BAGGAGE` |
| `IncomeOtherListView`   | GET/POST | GET `treasury.income.view`, POST `treasury.income.manage` | GET `category=OTHER_INCOME`; POST `record_other_income` |
| `IncomeDashboardView`   | GET  | `treasury.income.view` | `income_dashboard(…)` |
| `IncomeReceiptView`     | GET  | `treasury.income.view` | `HttpResponse(pdf, content_type="application/pdf")` |

GET lists paginate through the project's standard paginator and return
the `{success, data, pagination}` list shape (interceptor unwraps to a
bare array). List filters read `status`-free query params: `date_from`,
`date_to`, `payment_mode`.

POST body serializer `OtherIncomeWriteSerializer`:
`amount` (Decimal>0), `payment_mode` (choice), `description`
(CharField, blank ok), `cash_session_id` (UUID, optional).

`IncomeReceiptView` fetches the income `Transaction` by pk (scoped to
company + `transaction_type=income`), builds the receipt fields from the
same source-resolution logic as the serializer, and renders via
`render_income_receipt`.

**`urls.py`** (add, after the Dépenses block):

```
recettes/voyage/            → IncomeVoyageListView
recettes/parcel/            → IncomeParcelListView
recettes/baggage/           → IncomeBaggageListView
recettes/other/             → IncomeOtherListView   (GET list, POST create)
recettes/<uuid:pk>/receipt/ → IncomeReceiptView
recettes/dashboard/         → IncomeDashboardView
```

**RBAC — `admin_rbac` data migration** (new, next sequential number):

- `AppModule.get_or_create` for the treasury module (reuse existing).
- `Permission.update_or_create` for `treasury.income.view` and
  `treasury.income.manage`.
- Grant both to every custom role that already holds
  `treasury.register.view` (same remediation applied for Dépenses, so
  existing guichetier/treasury roles gain Recettes without manual UI
  work). `institution_admin` + superuser bypass via `allowed()`.
- **Known behaviour:** new permissions are invisible until granted to a
  role AND the user re-logs in (localStorage caches permissions);
  admins bypass. Document in the plan.

### Frontend — `angular/src/_api/`

**`config/api.config.ts`** — extend `TREASURY`:

```ts
incVoyage:   `${TREASURY_BASE}/recettes/voyage/`,
incParcel:   `${TREASURY_BASE}/recettes/parcel/`,
incBaggage:  `${TREASURY_BASE}/recettes/baggage/`,
incOther:    `${TREASURY_BASE}/recettes/other/`,
incReceipt:  (id: string) => `${TREASURY_BASE}/recettes/${id}/receipt/`,
incDashboard:`${TREASURY_BASE}/recettes/dashboard/`,
```

**`services/treasury/income.service.ts`** (new)

```ts
list(kind: 'voyage'|'parcel'|'baggage'|'other',
     filters: { date_from?; date_to?; payment_mode? } = {}): Observable<any[]>
dashboard(): Observable<any>
createOther(body): Observable<any>
receipt(id: string): Observable<Blob>   // responseType: 'blob'
```

`list` sets `page_size=500`, drops empty filters, maps
`r.results ?? r.data ?? r` (per the list-response-shape convention).

**Pages** under `pages/treasury/recettes/`:

- `dashboard/` — KPI cards reusing the template `sale-widget` style
  (Total du mois, Recette voyage, Recette colis, Recette bagage, Autre),
  fed by `income.service.dashboard()`.
- `voyage/`, `colis/`, `bagage/` — read-only tables. Columns: Réf.,
  Source (réf.), Client/Tiers, Montant, Mode, Caisse, Agence, Date,
  Actions (👁 view detail row is optional; 🖨 reçu). Filter bar: Du / Au /
  Mode de paiement / Réinitialiser. Use shared `PaginatePipe` +
  `TablePaginatorComponent` with `PageState = {page:1, size:25}`.
- `autre/` — same table for `OTHER_INCOME` plus a **"Nouvelle recette"**
  button opening a modal (Montant, Mode de paiement, Libellé, Caisse
  select) → `income.service.createOther(...)`. Gated on
  `*hasPermission="'treasury.income.manage'"`.

Print handler on each page:

```ts
printReceipt(row) {
  this.income.receipt(row.id).subscribe(blob => {
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  });
}
```

**Routing** — add the five pages to the treasury routing module
(lazy `loadComponent`), paths e.g. `recettes/tableau-de-bord`,
`recettes/voyage`, `recettes/colis`, `recettes/bagage`, `recettes/autre`.

**Sidebar — `core/service/sidebar/sidebar.service.ts`** — add a
**Recettes** collapsible in the Trésorerie group (before or after
Dépenses), `icon2: 'coin'` (or `cash`), `base: 'treasury-income'`, with
five `subMenus`, every item `permission: 'treasury.income.view'` (the
"Nouvelle recette" action is guarded in-page, not the menu). Add the
`routes.*` entries the sidebar references to the routes helper.

## Data flow

1. Sale paid → existing services write an income `Transaction`
   (unchanged).
2. User opens Trésorerie › Recettes › (source) → page calls
   `income.service.list(kind, filters)` → `IncomeXListView` →
   `list_income(category=…, agency_scope=…)` → `IncomeRowSerializer` →
   `{success,data,pagination}` → table.
3. Dashboard → `IncomeDashboardView` → `income_dashboard` → KPI cards.
4. Manual income → "Nouvelle recette" modal → POST `recettes/other/` →
   `record_other_income` → `create_transaction` (balance +, accounting
   post) → row appears under Autre recette.
5. Print → GET `recettes/<pk>/receipt/` → `render_income_receipt` → PDF
   in new tab.

## Error handling

- POST validation errors (amount ≤ 0, no open session, wrong-agency
  caisse) surface the `ApplicationError` message from
  `create_transaction` / `resolve_disbursement_session` as a 400 with
  the French message, shown via the existing toast pattern.
- Receipt for a non-income or cross-company pk → 404.
- Scoped users see only their agency's cash income; empty results render
  the standard "aucune donnée" empty state.
- WeasyPrint absent locally (macOS/Pango) → receipt endpoint 500 only in
  dev; tests skip. Railway Docker has the libs (same as expense voucher).

## Testing (pytest, `backend/`)

- `list_income`: filters by category, date range, payment_mode; agency
  scope includes own-agency cash income and excludes other agencies /
  bank income for scoped users; unscoped (admin) sees all.
- `income_dashboard`: per-source totals + today/month + count on a fixed
  fixture set.
- `record_other_income`: creates INCOME/OTHER_INCOME cash txn, increments
  register balance, posts accounting entry; raises without an open
  session; raises on wrong-agency caisse (agency guard).
- View perms: GET requires `treasury.income.view`; POST requires
  `treasury.income.manage`; admin bypass.
- Receipt: `pytest.importorskip("weasyprint")`; renders non-empty PDF
  bytes for each source category.
- RBAC migration: `treasury.income.view` / `treasury.income.manage`
  exist after migrate; a role with `treasury.register.view` gains them.

## Files

**Create**
- `backend/apps/treasury/selectors/incomes.py`
- `backend/apps/treasury/services/other_income.py`
- `backend/apps/treasury/income_receipt.py`
- `backend/apps/admin_rbac/migrations/00XX_income_permissions_seed.py`
- `backend/tests/treasury/test_incomes.py` (or alongside existing
  treasury tests)
- `angular/src/_api/services/treasury/income.service.ts`
- `angular/src/_api/pages/treasury/recettes/dashboard/*`
- `angular/src/_api/pages/treasury/recettes/voyage/*`
- `angular/src/_api/pages/treasury/recettes/colis/*`
- `angular/src/_api/pages/treasury/recettes/bagage/*`
- `angular/src/_api/pages/treasury/recettes/autre/*`

**Modify**
- `backend/apps/treasury/serializers.py` (+`IncomeRowSerializer`,
  `OtherIncomeWriteSerializer`)
- `backend/apps/treasury/services/__init__.py` (export
  `record_other_income`)
- `backend/apps/treasury/views.py` (+6 views)
- `backend/apps/treasury/urls.py` (+6 routes)
- `angular/src/_api/config/api.config.ts` (TREASURY endpoints)
- `angular/src/app/core/service/sidebar/sidebar.service.ts` (Recettes
  group + routes)
- treasury routing module (5 routes)

## Global constraints

- French UI copy throughout; money formatted `#,##0` with space
  thousands separator + " FCFA".
- Amounts `DecimalField(max_digits=12, decimal_places=2)`; positive only.
- List responses use `{success, data, pagination}`; frontend maps
  `r.results ?? r.data ?? r`; never `r.results` alone.
- Reuse `create_transaction`, `resolve_disbursement_session`,
  `register_agency_scope`, `company_header_html`, `PaginatePipe`,
  `TablePaginatorComponent` — no duplication of that logic.
- New RBAC permissions are invisible until granted to a role + user
  re-login (admins bypass).
- Primary brand color `#0068B8`.
- Commits authored as shimi, no Claude co-author trailer.
