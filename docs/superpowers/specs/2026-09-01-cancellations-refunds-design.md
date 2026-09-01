# Cancellations & refunds — design

**Date:** 2026-09-01
**Module:** Voyages (Réservations / Colis / Bagages) + Trésorerie
**Author:** shimi (with Claude)
**Wave/Item:** Wave 5 · #9

## Goal

When a **paid** réservation / colis / bagage is cancelled, record a
**refund** = `amount_paid × refund_rate%` as a treasury cash outflow from
the agent's open caisse. The refund rate is a single company-wide,
configurable percentage (default 0 %). Cancelling a réservation also
cancels the **bagages linked** to its tickets, with a single combined
refund.

## Context

Cancellation already works end-to-end:
- `cancel_booking(booking, user)` (`apps/voyages_booking/services/booking_services.py`) — cancels tickets, releases seats, reverses loyalty.
- `cancel_parcel(parcel, user)` / `cancel_baggage(baggage, user)` (`apps/voyages_consignment/services/`).
- Frontend cancel buttons exist on the **bookings**, **colis**, and **bagages** pages (+ booking-detail).

What's missing: **no refund is recorded**, `cancel_booking` **does not
cancel the linked bagages**, and there is **no refund-rate config**.

Existing infra to reuse:
- `Parameter` key/value store + `get_param(key, company_id, default)` (`apps/system_config/selectors/parameter_selectors.py`, 5-min cache).
- `resolve_disbursement_session(company_id, user, cash_session=None)` (`apps/treasury/services/expense_shared.py`) — open caisse + agency guard.
- `create_transaction(...)` + accounting bridge (posts via `MovementAccountMapping`).
- Treasury mapping seed `_DEFAULTS` (`apps/treasury/services/seed.py`) — `category → OHADA account`.

Decisions (confirmed):
- **Treasury cash outflow**: real refund transaction from the open caisse; a caisse is required **only when the refund is > 0**.
- **Single company-wide rate** in `Parameter treasury.refund_rate` (decimal), **default 0 %**, editable under Trésorerie → Configuration.

## Non-goals (YAGNI)

- No per-type refund rates (booking vs colis vs bagage share one rate).
- No partial/line-item refunds, no refund reversal, no refund receipt PDF.
- No change to the existing cancel buttons / confirm dialogs.
- No refund for unpaid items (`amount_paid == 0` → nothing to refund).

## Architecture

Refunds are a treasury EXPENSE of a new `refund` category, produced by a
single `refund_on_cancel` service that all three cancel flows call after
marking the item cancelled. The rate lives in the Parameter store behind
small get/set helpers and a config endpoint.

### A. Refund transaction category — `apps/treasury/`

`models/transaction.py`: add to `Category`:
`REFUND = "refund", _("Remboursement")`.
Migration: `AlterField` on `Transaction.category` (regenerated choices).

`services/seed.py`: add `"refund": "706"` to `_DEFAULTS` (a refund posts
EXPENSE → debit 706 revenue, credit 571 cash = money out reversing the
sale). Data migration `apps/treasury/migrations/00XX_seed_refund_mapping.py`
inserting the `refund → 706` `MovementAccountMapping` for existing
companies (mirror `0008_seed_voyage_expense_mapping`). Update
`test_mapping_seed.py`: count `13 → 14` and assert `refund → 706`.

### B. Refund-rate config — `apps/treasury/`

`services/refund_config.py`:
```python
def get_refund_rate(company) -> Decimal:
    # Parameter treasury.refund_rate (decimal, company scope), default 0.
    from apps.system_config.selectors.parameter_selectors import get_param
    val = get_param("treasury.refund_rate", company.id, default=Decimal("0"))
    return Decimal(str(val or 0))

def set_refund_rate(company, rate, user=None) -> Decimal:
    from django.core.cache import cache
    from apps.system_config.models import Parameter
    rate = Decimal(str(rate))
    if rate < 0 or rate > 100:
        raise ApplicationError(_("Le taux doit être compris entre 0 et 100."))
    Parameter.objects.update_or_create(
        key="treasury.refund_rate", company=company,
        defaults={"value": str(rate), "data_type": "decimal", "scope": "company"})
    cache.delete(f"param:{company.id}:treasury.refund_rate")
    return rate
```

Endpoints (treasury urls): `GET/PUT /treasury/refund-rate/` →
`RefundRateView` (GET returns `{"rate": "<decimal>"}`, PUT body `{"rate": <0-100>}`).
perms `treasury.config.view` (GET) / `treasury.config.manage` (PUT) — a new
RBAC pair seeded + granted to roles holding `treasury.register.view`
(admin_rbac data migration, mirror `0016`).

### C. Refund service — `apps/treasury/services/refund.py`

```python
def refund_on_cancel(company, *, amount_paid, user, description,
                     booking=None, parcel=None, cash_session=None):
    """Rembourse amount_paid × taux depuis la caisse ouverte de l'agent.
    Retourne le mouvement, ou None si le remboursement est nul."""
    from decimal import Decimal
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
        description=description, cash_session=session,
        booking=booking, parcel=parcel, created_by=user)
```
(`create_transaction` accepts `booking`/`parcel` optional refs; `trip` omitted.)

### D. Wire into the three cancels

`cancel_parcel(parcel, user)` — after setting CANCELLED:
`refund_on_cancel(parcel.company, amount_paid=parcel.amount_received, user=user, description=f"Remboursement colis {parcel.reference}", parcel=parcel)`.

`cancel_baggage(baggage, user)` — after CANCELLED, if the baggage is **not
part of a booking cancel** (i.e. called directly): refund
`baggage.amount_received`. To avoid double refund, `cancel_baggage` gains a
private flag: `cancel_baggage(baggage, *, user, _skip_refund=False)`;
default path refunds, the booking-cancel path passes `_skip_refund=True`.

`cancel_booking(booking, user)` — after cancelling tickets/seats/loyalty:
1. Cancel linked bagages: for each
   `Baggage.objects.filter(ticket__booking=booking, is_deleted=False).exclude(status="cancelled")`,
   call `cancel_baggage(bag, user=user, _skip_refund=True)` and accumulate
   `bag.amount_received`.
2. One refund:
   `refund_on_cancel(company, amount_paid=booking.amount_paid + bag_total, user=user, description=f"Remboursement réservation {booking.reference}", booking=booking)`.

`company` for booking = `booking.company`. All three run inside the existing
`@transaction.atomic` of their cancel service, so a failed refund (e.g. no
open caisse when rate > 0) rolls back the whole cancellation with a clear
message.

### E. Frontend — `apps/_api/`

- Config: a **"Remboursement"** card on a small config surface under
  Trésorerie → Configuration. Two options:
  - a dedicated page `pages/treasury/config/refund-rate/` (route
    `recettes`-style) with one % input + Save, OR
  - fold into the payment-methods page as a second card.
  Chosen: a **dedicated page** `refund-rate` (menu item "Remboursement"),
  loads `GET /treasury/refund-rate/`, saves via `PUT`.
- `config/api.config.ts`: `TREASURY.refundRate` (GET/PUT same URL).
- `services/treasury/refund-rate.service.ts`: `get()`, `set(rate)`.
- Sidebar: add "Remboursement" under Trésorerie → Configuration
  (`treasury.config.view`); route + `pages.routes.ts` entry.
- The existing cancel buttons/dialogs are unchanged (refund is computed
  and posted server-side; errors — e.g. "ouvrez une caisse" — surface via
  the existing alert on cancel).

## Data flow

1. Admin sets the refund rate (0–100 %) under Configuration → stored in
   `Parameter treasury.refund_rate`.
2. Agent cancels a paid booking/colis/bagage.
3. The cancel service marks it cancelled (+ linked bagages for a booking),
   then `refund_on_cancel` computes `amount_paid × rate%`.
4. If > 0: a REFUND EXPENSE is posted from the agent's open caisse
   (balance decreases, accounting entry via 706/571). If 0: nothing.

## Error handling

- Rate > 0 but no open caisse → `resolve_disbursement_session` raises
  `ApplicationError("Choisissez une caisse…")`; the atomic cancel rolls
  back — nothing is cancelled — and the message surfaces on the button.
- Rate = 0 or `amount_paid = 0` → no session needed, cancel proceeds as
  today.
- Wrong-agency caisse → the existing agency guard in
  `resolve_disbursement_session` raises.
- Set-rate out of 0–100 → 400 with a clear message.

## Testing

Backend (pytest):
- `get_refund_rate` default 0; `set_refund_rate` persists + invalidates cache; rejects <0 / >100.
- `refund_on_cancel`: rate 0 → None (no session needed, no txn); rate 50 % → EXPENSE `refund` of half, from the open caisse; raises when refund > 0 and no session.
- `cancel_booking` with a paid booking + a linked bagage: booking + bagage CANCELLED, exactly **one** refund = (booking.amount_paid + bagage.amount_received) × rate; linked bagage not double-refunded.
- `cancel_parcel` / `cancel_baggage` (direct) refund their amount.
- Category migration: `refund` is a valid category; mapping seed has 14 entries incl. `refund → 706`.
- Config API: GET returns rate; PUT sets it; perms enforced (admin bypass).

Frontend: `ng build`.

## Files

**Modify (backend)**
- `apps/treasury/models/transaction.py` (+REFUND) + migration (AlterField)
- `apps/treasury/services/seed.py` (`_DEFAULTS += refund`) + `apps/treasury/migrations/00XX_seed_refund_mapping.py`
- `apps/treasury/tests/test_mapping_seed.py` (13→14)
- `apps/treasury/services/refund_config.py` (create), `refund.py` (create)
- `apps/treasury/services/__init__.py` (exports)
- `apps/treasury/views.py`, `urls.py`, `serializers.py` (RefundRateView)
- `apps/admin_rbac/migrations/00YY_treasury_config_permissions_seed.py`
- `apps/voyages_booking/services/booking_services.py` (`cancel_booking`: linked bagages + refund)
- `apps/voyages_consignment/services/parcel_services.py` (`cancel_parcel`: refund)
- `apps/voyages_consignment/services/baggage_services.py` (`cancel_baggage`: refund + `_skip_refund`)
- tests: `apps/treasury/tests/test_refund.py` (create)

**Create/Modify (frontend)**
- `src/_api/config/api.config.ts` (refundRate)
- `src/_api/services/treasury/refund-rate.service.ts` (create)
- `src/_api/pages/treasury/config/refund-rate/*` (create)
- `src/app/core/service/sidebar/sidebar.service.ts` + `core/helpers/routes.ts` + `features/pages/pages.routes.ts`

## Global constraints

- Single company-wide rate in `Parameter treasury.refund_rate` (decimal, scope company), default 0.
- Refund = EXPENSE category `refund`, cash, from the agent's open caisse; only when amount > 0.
- Cancelling a booking cancels its tickets' bagages and issues one combined refund (no double refund).
- New RBAC perms (`treasury.config.view/manage`) invisible until granted + re-login (admins bypass).
- French UI copy; rate shown as %.
- Commits authored as shimi, no Claude trailer. Backend via pytest; frontend via `ng build`.
