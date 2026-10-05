# Data Archiving — Design Spec

**Date:** 2026-10-05
**Status:** Approved for planning
**Author:** shimi (brainstormed with Claude)

## 1. Purpose & intent

Operational list screens accumulate rows indefinitely, so they grow slow and
cluttered over time. An **institution admin** should be able to set a single
**visibility window** — "show data from the last *N* days" — so the everyday
operational lists only display recent records. Older records are **hidden, not
deleted**: they remain in the database, are fully retrievable, and are never
lost.

Success looks like: an admin sets *N* days in a new **"Archivage des données"**
menu under the Administration app; the affected operational lists immediately
return only in-window rows **from the database** (not filtered in the browser);
a one-click toggle on each affected list reveals the full history on demand;
reporting and all configuration screens are completely unaffected.

### What this is NOT
- Not a delete/purge feature. Nothing is ever removed or moved. (A future
  retention/purge feature is explicitly out of scope.)
- Not soft-delete. `is_deleted` is unrelated; archived rows have
  `is_deleted=False` and are ordinary live rows that are simply out of the
  visibility window.
- Not a per-domain or per-module configuration. One global window per company.

## 2. Core invariants

These are binding and must hold in the implementation:

- **I1 — Server-side enforcement.** Hiding is applied in the selector's
  queryset (`WHERE date_field >= cutoff`). Archived rows are never serialized to
  the client unless the request explicitly carries `include_archived`. There is
  no client-side hiding.
- **I2 — Opt-in / non-destructive default.** A company with no setting (or `0`)
  behaves exactly as today — nothing is hidden. The feature only hides rows once
  an admin sets a positive window.
- **I3 — Reporting is exempt.** The reporting module never applies the window;
  reports, dashboards, and exports always see the full history.
- **I4 — Configuration is exempt.** No reference/configuration list in any module
  is ever windowed. The window applies only to the six operational selectors
  named in §5.
- **I5 — Access is unaffected.** The window filters *lists* only. Detail
  endpoints, edits, and cross-references (a booking's linked bagage, a
  transaction's receipt) reach archived rows normally.
- **I6 — Toggle is per-request and non-sticky.** `include_archived` affects only
  the request that carries it; it is never persisted. A reload returns to the
  windowed view.

## 3. Configuration storage

Stored as a single row in the existing `system_config.Parameter` key/value store
— **no new table**:

- `key = "data.archive_window_days"`
- `scope = Parameter.Scope.COMPANY`
- `data_type = Parameter.DataType.INTEGER`
- `company = <tenant>`
- `value = "0"` by default (disabled)

Semantics of the value:
- `0` or absent → **disabled** (I2): the window is never applied.
- positive integer *N* → show only rows whose anchor date is within the last
  *N* days.
- negative values are rejected at the write endpoint.

A small typed accessor resolves it:

```python
# apps/core/archiving.py
def archive_window_days(company_id) -> int:
    """Returns the configured window in days for a company, or 0 if unset/disabled."""
```

Because it is an ordinary company `Parameter`, it syncs across the
hub-and-spoke instances through the existing backbone like any other parameter,
and each instance enforces it locally at query time.

## 4. The window helper (single enforcement point)

One function, used by every windowed selector and nowhere else:

```python
# apps/core/archiving.py
from datetime import timedelta
from django.utils import timezone

def apply_archive_window(qs, *, date_field, company_id, include_archived):
    """Restrict qs to rows whose `date_field` is within the company's archive
    window. No-op when the window is disabled (0/unset) or include_archived is
    truthy. Enforcement is at the query layer (I1)."""
    n = archive_window_days(company_id)
    if include_archived or not n:
        return qs
    cutoff = timezone.now() - timedelta(days=n)
    return qs.filter(**{f"{date_field}__gte": cutoff})
```

- The `cutoff` is a timezone-aware datetime. Django compares it correctly
  against both `DateTimeField` anchors (`created_at`, `scheduled_departure`) and
  `DateField`/date anchors (`transaction_date`).
- **Boundary rule:** a row exactly at `cutoff` is **visible** (`__gte`).
- The helper composes with existing agency/company scoping as one more
  `.filter()`; ordering of filters is irrelevant.

## 5. Windowed selectors (the only integration points)

Exactly six selectors call `apply_archive_window`. Each gains an
`include_archived: bool = False` keyword argument, forwarded from its view.

| # | Screen(s) | Selector | Anchor date field |
|---|---|---|---|
| 1 | Billetterie "Tout Afficher" **+** Réservations | `voyages_booking.selectors.list_bookings` | `created_at` |
| 2 | Retours à traiter | `voyages_booking.selectors.open_return_bookings` | `created_at` |
| 3 | Voyages | `voyages_trips.selectors.trip_selectors.list_trips` | `scheduled_departure` |
| 4 | Colis | `voyages_consignment.selectors.list_parcels` | `created_at` |
| 5 | Bagages | `voyages_consignment.selectors.list_baggage` | `created_at` |
| 6 | Trésorerie | `treasury.selectors.selectors.list_transactions` | `transaction_date` |

**Assumption (confirmed at design time):** Billetterie "Tout Afficher" and
Réservations are two status-filtered views over the same `list_bookings`
selector, so windowing it covers both. If Réservations is later found to use a
separate endpoint, add the helper call there too — a one-line change.

**Anchor rationale:** trips are windowed by their own scheduled departure (the
business date users think in), not by when the trip was keyed in; treasury uses
`transaction_date` (the same column `list_transactions` already filters
`date_from`/`date_to` on); the rest use `created_at` (the record's entry date).
The anchor per selector is fixed in code — it is **not** user-configurable.

## 6. API surface

### 6.1 Setting endpoints (new), under `/api/v1/system/`
- `GET  /api/v1/system/archiving/` → `{ "archive_window_days": <int> }`
- `PUT  /api/v1/system/archiving/` with `{ "archive_window_days": <int ≥ 0> }`
  → validates `≥ 0` (400 on negative / non-integer), upserts the company
  `Parameter`, returns the stored value.
- Both gated to `institution_admin` (403 otherwise), matching the menu.

### 6.2 Toggle on the six list endpoints (existing)
Each of the six list views reads:

```python
include_archived = request.query_params.get("include_archived") in ("1", "true", "True")
```

and forwards it into its selector call. Absent/any-other value → windowed
(default). No new permission: the toggle only re-reveals rows the user can
already see in reports.

## 7. Frontend

- **Admin screen:** a new standalone component **"Archivage des données"** in the
  Administration app, `role: institution_admin`, placed immediately **after
  "Journal d'audit"** in the sidebar. A short info banner + one number input
  ("Afficher les données des N derniers jours — `0 = tout afficher`") + Save,
  wired to the §6.1 endpoints. Follows the existing settings-component pattern
  (e.g. voyages-config settings): reactive form, loading/saving/ok/error states.
- **Per-list toggle:** each of the five affected list screens (Billetterie/
  Réservations, Retours à traiter, Voyages, Colis, Bagages, Trésorerie) gets one
  "Afficher les archives" switch. Flipping it re-requests the list with
  `?include_archived=1`; flipping back drops the param. When the company's window
  is disabled (`0`), the toggle is hidden (nothing to reveal). The toggle sends a
  query param only — it performs no client-side filtering (I1).
- **i18n:** new keys added to all four locales (`fr`, `en`, `es`, `pt`) for the
  menu label, the settings screen, and the toggle label.

## 8. Error handling & edge cases

- Negative or non-integer window on write → 400, setting unchanged.
- Window disabled (`0`/unset) → every windowed selector is a pure no-op (I2);
  regression-guarded by test.
- Agency-scoped users: the window filter stacks on top of agency scope with no
  interaction (§4).
- Detail/edit/cross-reference access to archived rows is unchanged (I5).
- Reporting selectors and all configuration selectors must **not** import or call
  the helper (I3, I4) — enforced by the selector inventory in §5 being the
  complete list of call sites.

## 9. Testing strategy

**Helper unit tests** (`apps/core`, no HTTP):
- disabled (`N=0`) → queryset returned unchanged;
- `N>0` → rows older than `now − N days` excluded;
- `include_archived=True` → window bypassed even when `N>0`;
- boundary → a row exactly at `now − N days` remains visible (`__gte`);
- works against each anchor field type (datetime and date).

**Per-selector tests** (one each for the six selectors): seed one in-window and
one out-of-window row for a company with `N` set → default call returns only the
in-window row; `include_archived=True` returns both. For `list_trips`, the
out-of-window row is distinguished by `scheduled_departure`, not `created_at`,
to prove the anchor.

**Reporting-exempt test:** a report over a period that includes an
out-of-window row still counts it (guards I3).

**Setting endpoint tests:** `GET` returns current value; `PUT` with a valid
value upserts; `PUT` with a negative value → 400; non-admin → 403.

**Opt-in default test:** a company with no setting behaves exactly as before on
all six selectors (guards I2).

## 10. Out of scope
- Purge/retention/deletion of old data.
- Per-domain or per-module windows.
- A central cross-domain "Archives" browser screen.
- Windowing any screen other than the six selectors in §5.
- Table partitioning / cold storage / hot-cold split.
