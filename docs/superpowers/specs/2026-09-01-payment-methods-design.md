# Configurable payment methods — design

**Date:** 2026-09-01
**Module:** Trésorerie · Configuration (used by Réservations / Colis / Bagages)
**Author:** shimi (with Claude)
**Wave/Item:** Wave 4 · #7

## Goal

Make payment methods configurable per company, each with a **"requires
payment"** flag. Methods that require payment (Espèces, Orange Money,
Mobile Money) record treasury income; methods that don't (Point
fidélité, Non payé) settle the sale without any cash movement. The
chosen method is stored on the booking/colis/bagage for traceability,
and the currently-placeholder payment selects are populated from the
configured list.

## Context

Today `payment_method` is a **free string** on `Booking`, `Parcel`,
`Baggage`. On sale, `record_booking_payment` / `record_parcel_payment` /
`record_baggage_payment` (treasury) call `_normalize_payment(str)` which
maps via a hardcoded dict to a `Transaction.PaymentMode`
(`cash`/`mobile_money`/`transfer`/`check`) and **always** records income.
The frontend payment `<select>` in new-booking, colis, and bagage are all
disabled placeholders ("(module trésorerie à venir)"), so nothing is
actually chosen and bookings default to cash.

`create_company` (`apps/system_config/services/company_services.py`)
already seeds per-company defaults (roles, accounting, treasury mapping,
crew types) — the payment-method seed hooks in there.

Decisions (confirmed):
- **No-payment methods** only skip the cash income + set `amount_received=0`; no loyalty-point deduction (out of scope).
- **Code string** storage: keep the existing `payment_method` CharField storing the method's `code`; the `PaymentMethod` config row is the source of truth for behaviour. No FK, no migration of the 3 models.

## Non-goals (YAGNI)

- No loyalty-point redemption when paying with Point fidélité.
- No per-method fees/commissions or surcharge.
- No FK from Booking/Parcel/Baggage/Transaction to PaymentMethod.
- No change to expense/recette-autre payment selects (they use the fixed
  `Transaction.PaymentMode` enum directly and are out of scope here).

## Architecture

A new company-scoped `PaymentMethod` config model is the source of truth.
The three `record_*_payment` treasury services resolve the method by code
and either skip income (no-payment) or record it with the method's
`mode`. `_normalize_payment` stays as the fallback for unknown/empty
codes (back-compat with existing rows).

### A. Model & seed — `apps/treasury/`

`models/payment_method.py` — `PaymentMethod(BaseModel)`:
- `company` = FK to `system_config.Company` (CASCADE, `related_name="payment_methods"`) — always set (per-company).
- `code` = `SlugField(max_length=40)`.
- `name` = `CharField(max_length=100)`.
- `requires_payment` = `BooleanField(default=True)`.
- `mode` = `CharField(max_length=20, choices=Transaction.PaymentMode.choices, default=CASH)` — the treasury PaymentMode used when `requires_payment`.
- `is_active` = `BooleanField(default=True)`.
- `is_system` = `BooleanField(default=False)` — seeded rows; cannot be deleted, can be deactivated.
- `Meta`: `unique_together = [("company", "code")]`, `ordering = ["name"]`.
- `__str__` = `name`.

Register in `models/__init__.py`.

`services/seed.py` — add `seed_payment_methods(company, created_by=None)`:
seeds (idempotent `get_or_create` on `(company, code)`) the defaults:

| code | name | requires_payment | mode |
|------|------|------------------|------|
| `cash` | Espèces | True | cash |
| `orange_money` | Orange Money | True | mobile_money |
| `mobile_money` | Mobile Money (MTN) | True | mobile_money |
| `loyalty` | Point fidélité | False | cash |
| `unpaid` | Non payé | False | cash |

All seeded with `is_system=True`. (`mode` for no-payment rows is unused
but set to `cash` to satisfy the field.)

Hook into `create_company` (`company_services.py`, after
`seed_treasury_mapping`): `seed_payment_methods(company, created_by=created_by)`.

Data migration `apps/treasury/migrations/00XX_seed_payment_methods.py`:
`RunPython` iterating existing `Company` rows and calling the same
seed (via `apps.get_model`, inline dict — do not import the service in a
migration; replicate the defaults list).

### B. Income integration — `apps/treasury/services/`

New helper `payment_resolution.py::resolve_payment(company, code)`:
returns the `PaymentMethod` for `(company, code)` (active or not) or
`None` if not found.

In `booking_sales.py`, `consignment_sales.py`:
- Before recording, resolve the method:
  ```python
  pm = resolve_payment(company, payment_method)
  if pm is not None and not pm.requires_payment:
      return None                      # no cash movement
  mode, is_cash = _resolve_mode(pm, payment_method)
  ```
- `_resolve_mode(pm, raw)`: if `pm` → `(pm.mode, pm.mode == "cash")`; else fall back to the existing `_normalize_payment(raw)`.
- Replace the current `mode, is_cash = _normalize_payment(payment_method)` line in `record_booking_payment` and `_record_consignment_payment` with the resolve-then-mode logic. Keep `_normalize_payment` as the fallback (unchanged).

`booking_services.py::create_booking`: when the resolved method is
no-payment, set `amount_received = 0` and `change_due = 0` (booking stays
`CONFIRMED`). Detect via `resolve_payment(company, payment_method)`; if
`requires_payment` is False, override `received = Decimal("0")`.
The `record_booking_payment` call already returns None for no-payment, so
no income is posted.

### C. Config CRUD + RBAC — `apps/treasury/`

Endpoints under the existing treasury URL prefix:
- `GET/POST /treasury/payment-methods/`
- `GET/PATCH/DELETE /treasury/payment-methods/<uuid:pk>/`

`PaymentMethodListView` / `PaymentMethodDetailView` (APIView, pattern of
existing treasury views). `permission_map`: GET `treasury.paymentmethod.view`,
POST/PATCH/DELETE `treasury.paymentmethod.manage`. DELETE on an
`is_system` row → `error_response("Ce moyen de paiement système ne peut pas être supprimé.")`
(deactivate instead). Serializers `PaymentMethodReadSerializer` /
`PaymentMethodWriteSerializer` (write: `code`, `name`, `requires_payment`,
`mode`, `is_active`; on create, `code` slugified + uniqueness within company).

RBAC data migration in `admin_rbac` (next sequential number): seed
`treasury.paymentmethod.view` / `.manage` under the `treasury` module,
and grant both to every role that already holds `treasury.register.view`
(same remediation used for expenses/recettes). New perms are invisible
until granted + re-login (admins bypass).

### D. Frontend — `apps/_api/`

- `config/api.config.ts`: `TREASURY.paymentMethods` + `paymentMethod(id)`.
- `services/treasury/payment-method.service.ts`: `list(activeOnly?)`, `create`, `update`, `remove`.
- Config page `pages/treasury/config/payment-methods/` (list + create/edit
  modal: Nom, Code, Mode trésorerie, "Exige un paiement" checkbox, Actif).
  Create modal stays open after save (Wave 1 convention); `is_system` rows
  show a disabled delete.
- Sidebar: add **"Moyens de paiement"** under the Trésorerie → Configuration
  group (`treasury.paymentmethod.view`).
- Booking/colis/bagage payment `<select>`: replace the disabled placeholder
  with active methods (label `name`, value `code`) loaded via the service.
  In new-booking, when the selected method's `requires_payment` is false,
  set `amountReceived = 0` (and the field can be disabled).

### E. Traceability

`booking/parcel/baggage.payment_method` stores the method `code`; income
`Transaction` rows carry `payment_mode`. No-payment sales produce no
Transaction but remain traceable via the stored `payment_method` on the
booking/parcel/baggage (already displayed in lists/detail).

## Data flow

1. Config: admin manages methods under Configuration → Moyens de paiement.
2. Sale (booking/colis/bagage): agent picks a method → `code` sent.
3. `record_*_payment` resolves the method:
   - no-payment → returns None (no income); booking `amount_received=0`.
   - requires payment → records income with `method.mode`.
4. Reports/lists show `payment_method`; treasury shows the income (or none).

## Error handling

- Unknown/blank code → `_normalize_payment` fallback (never crashes; treats as cash unless it matches a non-cash keyword).
- Duplicate `(company, code)` on create → serializer validation error.
- DELETE of `is_system` → 400 with a clear message.
- No-payment method → `create_transaction` is never called, so the "open cash session" requirement does not block loyalty/unpaid sales.

## Testing

Backend (pytest):
- `seed_payment_methods` creates the 5 defaults idempotently; re-running doesn't duplicate.
- `resolve_payment(company, "orange_money")` returns the row; unknown code → None.
- `record_booking_payment` with a **requires-payment** method records income with the right `payment_mode`; with a **no-payment** method returns None and creates no Transaction (even with an open session, and without one).
- `create_booking` with a no-payment method → booking CONFIRMED, `amount_received == 0`, no income Transaction.
- Config API: create/list/patch; DELETE of `is_system` → 400; perms enforced (admin bypass).
- RBAC migration seeds the two perms.

Frontend: `ng build`.

## Files

**Create (backend)**
- `apps/treasury/models/payment_method.py`
- `apps/treasury/services/payment_resolution.py`
- `apps/treasury/migrations/00XX_paymentmethod.py` (model) + `00YY_seed_payment_methods.py` (data)
- `apps/admin_rbac/migrations/00ZZ_payment_method_permissions_seed.py`
- `apps/treasury/tests/test_payment_methods.py`

**Modify (backend)**
- `apps/treasury/models/__init__.py`
- `apps/treasury/services/seed.py` (`seed_payment_methods`)
- `apps/treasury/services/booking_sales.py`, `consignment_sales.py` (resolve + skip)
- `apps/voyages_booking/services/booking_services.py` (`amount_received=0` for no-payment)
- `apps/treasury/serializers.py` (PaymentMethod read/write)
- `apps/treasury/views.py`, `apps/treasury/urls.py` (CRUD)
- `apps/system_config/services/company_services.py` (seed hook)

**Create/Modify (frontend)**
- `src/_api/config/api.config.ts`
- `src/_api/services/treasury/payment-method.service.ts` (create)
- `src/_api/pages/treasury/config/payment-methods/*` (create)
- `src/app/core/service/sidebar/sidebar.service.ts` + `core/helpers/routes.ts` + `features/pages/pages.routes.ts`
- `src/_api/pages/voyages-booking/new-booking/new-booking.component.{ts,html}`
- `src/_api/pages/voyages-consignment/parcels/parcels.component.{ts,html}`
- `src/_api/pages/voyages-consignment/baggage/baggage.component.{ts,html}`

## Global constraints

- French UI copy; money in FCFA/XAF as existing pages do.
- `payment_method` stays a code string; `PaymentMethod` config is the behaviour source of truth.
- `_normalize_payment` remains the fallback for unknown/empty codes.
- No-payment methods never call `create_transaction`.
- New RBAC perms invisible until granted + re-login (admins bypass).
- List responses keep `{success,data,pagination}` conventions; services map `r.results ?? r.data ?? r`.
- Create modals stay open after save (Wave 1 convention).
- Commits authored as shimi, no Claude trailer. Backend tests via pytest; frontend via `ng build`.
