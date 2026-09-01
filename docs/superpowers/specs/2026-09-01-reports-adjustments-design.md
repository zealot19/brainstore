# Reports — include recent adjustments (refunds, general expenses, broadened recettes, payment modes)

**Date:** 2026-09-01
**Module:** Reporting (`apps/reporting`)
**Author:** shimi (with Claude)

## Goal

Update the financial reports so they reflect the features added recently:
**remboursements** (refund transactions), **dépenses générales**
(`GeneralExpense`), the **recettes élargies** (colis / bagage / autre en
plus des billets), and a **ventilation par mode de paiement**. Four
reports change; the others already list their own entities.

## Context

`apps/reporting` exposes a registry of `build(company, f)` functions,
each returning a `ReportResult(code, title, columns, groups, totals,
period_label)` rendered to PDF/CSV/XLSX. Primitives (`core.py`):
- `ReportColumn(key, label, align="left", money=False)`
- `ReportGroup(label="", rows=[], subtotal=None)`
- `ReportResult(...)` with `totals` = a single dict keyed by column key
  (rendered as one bold total row; only `money=True` columns show a value).

The PDF/CSV renderers iterate `groups` (rows + optional `subtotal` row)
then one `totals` row. So multi-line summaries (e.g. Total / Remboursements
/ Net) are expressed as an extra **group**, not via `totals`.

Current gaps (verified):
- `depense` (Liste des dépenses): only `TripExpense` PAID.
- `recapitulatif`: dépense = `TripExpense` PAID only; income = ticket/baggage/parcel (no autre); marge is gross.
- `recette` (Relevé des encaissements): only `TICKET_SALES`; no payment-mode split; refunds ignored.
- `ca` (Production): only `TICKET_SALES`.

Data facts:
- Income categories: `TICKET_SALES`, `PARCEL_SHIPPING`, `BAGGAGE`, `OTHER_INCOME` (`Transaction`, `transaction_type=income`). Refund = `Transaction` `expense`/`refund`.
- `GeneralExpense` (`treasury`): `expense_type`, `label`, `amount`, `expense_date`, `status` (`paid`/`unpaid`), `cash_session`, `agency`.
- `Transaction.payment_mode` ∈ cash/mobile_money/transfer/check (this is the treasury mode; the configurable `PaymentMethod` code is not stored on the income Transaction — the report ventilates by `payment_mode` via `get_payment_mode_display`).

## Non-goals (YAGNI)

- No change to `colis`, `bagages`, `voyages`, `reservation`, `journaux-vente` (they already list their entities).
- No new report codes; no new filters beyond what each report already declares.
- No per-`PaymentMethod`-code breakdown (income Transactions store `payment_mode`, not the method code) — ventilation is by treasury payment mode.
- No accounting-level reconciliation.

## Design

### 1. `depense` — Liste des dépenses (complète)

Union of three sources into one row list, ordered by date:
- **Voyage** — `TripExpense` PAID (as today).
- **Générale** — `GeneralExpense` (status `paid`).
- **Remboursement** — `Transaction` `expense`/`refund`.

New leading column **Nature** (`Voyage` / `Générale` / `Remboursement`).
Row shape stays `{n, nature, trip, veh, cat, date, desc, tres, montant}`:
- Générale: `trip="—"`, `veh="—"`, `cat=expense_type.name`, `desc=label`.
- Remboursement: `trip="—"`, `veh="—"`, `cat="Remboursement"`, `desc=description`.
Filters: `date_from/date_to` on each source's date field; `agency`/`register`
via `cash_session__cash_register[...]` on all three; **`vehicle`** applies
only to `TripExpense` — when a vehicle is selected, general + refund rows
are excluded (they have no vehicle). Total `montant` = sum of all shown rows.

### 2. `recapitulatif` — État récapitulatif de trésorerie

- Income buckets add **`autre`** (`OTHER_INCOME`). `OTHER_INCOME`/refund/
  general rows have no trip → grouped under vehicle `"—"`.
- **Dépense** cell now sums: `TripExpense` PAID **+** `GeneralExpense` paid
  **+** refund transactions (by their date, vehicle `"—"`).
- New recette column **Autre**. Column order:
  `No, Période, Véhicule, Partenaire, Voyage, Bagage, Transit, Autre, Dépense, Marge`.
- **Marge (nette)** = `(voyage+bagage+transit+autre) − dépense`
  (dépense already includes refunds). Totals row sums every money column.

### 3. `recette` — Relevé des encaissements (toutes recettes + modes)

- Income query broadened to `category__in=[TICKET_SALES, PARCEL_SHIPPING,
  BAGGAGE, OTHER_INCOME]`, still grouped by cash session.
- New **Nature** column per row (Voyage / Colis / Bagage / Autre); the
  `trip`/`veh`/`cat` columns fill for ticket rows, blank otherwise; `total`
  = amount. Column order: `Nature, Départ, Trajet, Véhicule, Catégorie, Total`.
- Two extra trailing groups (rendered as normal tables using the same columns):
  - **RÉPARTITION PAR MODE DE PAIEMENT** — one row per `payment_mode`
    (`get_payment_mode_display`), `nature`=mode label, `total`=sum.
  - **SYNTHÈSE** — rows: `Total encaissé` (grand), `Remboursements`
    (−R, R = sum of refund transactions in the period), `Net` (grand − R).
- Per-caisse `subtotal={"total": sub}` retained. Top-level `totals={"total": grand}` retained.

### 4. `ca` — Production par agence et par mois

Income aggregate `category__in=[TICKET_SALES, PARCEL_SHIPPING, BAGGAGE,
OTHER_INCOME]` (was ticket only). Everything else (agency×month matrix,
totals) unchanged.

## Data flow

Each `build()` reads `Transaction` (income and, for depense/recap/recette-
synthesis, refund) + `GeneralExpense`/`TripExpense`, aggregates in Python,
returns `ReportResult`. No new endpoints; the catalog auto-lists them.

## Error handling

- Rows with no linked trip/vehicle fall under `"—"` (existing convention).
- Empty period → empty groups + zero totals (existing behaviour).
- `payment_mode` missing → grouped under its display (never crashes).

## Testing (pytest, `apps/reporting/tests/`)

- `test_recapitulatif`: extend so the fixture adds a paid `GeneralExpense`,
  a refund transaction, and an `OTHER_INCOME` — assert the **Dépense** total
  includes général + refund, the **Autre** column shows other income, and
  **Marge = recettes(incl. autre) − dépense(incl. refund)**.
- `test_recette`: add colis/bagage/autre income + a refund + mixed payment
  modes — assert all categories appear with their **Nature**, the
  **Répartition par mode** group sums per mode, and **Synthèse Net =
  encaissé − remboursements**.
- `test_lists` (depense): add a general expense + a refund — assert the
  depense report lists all three natures and the total sums them; assert the
  `vehicle` filter keeps only voyage rows.
- `ca`: a small test asserting colis/bagage income is included in the matrix.

## Files

**Modify**
- `backend/apps/reporting/reports/depense.py`
- `backend/apps/reporting/reports/recapitulatif.py`
- `backend/apps/reporting/reports/recette.py`
- `backend/apps/reporting/reports/ca.py`
- `backend/apps/reporting/tests/test_recapitulatif.py`
- `backend/apps/reporting/tests/test_recette.py`
- `backend/apps/reporting/tests/test_lists.py`
- (create) `backend/apps/reporting/tests/test_ca.py` if none exists

## Global constraints

- Reuse `ReportColumn/ReportGroup/ReportResult` + `period_label`; no renderer changes.
- Money columns use `money=True`; refunds are shown positive in the depense list (nature = Remboursement) but **subtracted** in the recap dépense/marge and the recette Net.
- Multi-line summaries are extra `ReportGroup`s (renderer shows one `totals` row only).
- French copy; amounts via the existing `_money` renderer.
- Backend tests via pytest; no frontend change (reports are server-rendered; the catalog already lists them).
- Commits authored as shimi, no Claude trailer.
