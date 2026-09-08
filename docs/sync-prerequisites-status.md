# Sync Prerequisites — Status

Status of the invariants the hub-and-spoke sync depends on (see
`docs/superpowers/plans/2026-09-08-presync-prerequisites.md` and
`…-sync-hub-and-spoke.md`). Landed on branch `feat/presync`.

| # | Condition | Status | Where |
|---|-----------|--------|-------|
| 1 | UUID PK on all syncable rows | ✅ DONE | `BaseModel`/`User` already UUID; converted RBAC links (P1), `UserAgency` (P2), `ExpenseScheduleLine`/`LeaveBalance`/`OdometerLog` (P3) |
| 2a | Deletions CDC-capturable | ✅ DONE | `soft_delete_qs` helper for genuine removals; replace-pattern deletes stay hard (fire `post_delete`, captured by CDC) — P4 |
| 2b | Bulk `update()` bumps `updated_at` | ✅ DONE | `set_seats_status` service + `updated_at=now` on expire/subscription/contract/profile-default updates — P5 |
| 3 | Agency-namespaced human numbers | ✅ DONE | `next_number(code, agency=…)`; booking/ticket refs pass the origin agency — P6 |
| 4 | Non-null departure ownership | ✅ DONE | `ServicePoint.clean()` requires an agency for stations — P7 |
| 5 | Owning agency stamped on transactions | ✅ DONE (Booking) | `Booking.agency` set from `outbound_trip.origin.agency` — P8. Parcel/Baggage/Transaction deferred to SP3 (derivable via `origin_point.agency` / `register.agency`) |
| 6 | Only origin agency sells its departures | ✅ DONE | `_assert_can_sell` in `create_booking`/`assign_return`; institution admins + system actor exempt; unowned departures skipped — P9 |
| 7 | Round trips agency-to-agency, return at destination | ✅ (return) / partial (endpoints) | `assign_return` restricted to destination agency (P9); endpoint agency-to-agency relies on the open-return model — full endpoint validation can be tightened in SP3 |

## Decisions / rulings made during pre-sync
- **Implicit M2M** (`vehicle.tags`, `contract.included_services`) were **not** converted to explicit through-models: their join rows are identified by `(uuid, uuid)` (both endpoints already UUID), so the sync layer captures them as endpoint-pairs via `m2m_changed`. Avoids breaking `.add()/.set()`.
- **Replace-pattern hard deletes** (RBAC set-permissions, seat regeneration, schedule lines) stay **hard** — soft-deleting would violate `unique_together` on recreate; `QuerySet.delete()`/`instance.delete()` fire `post_delete` per row, which the SP1 CDC layer captures.
- **`AuditLog`** left instance-local (integer PK) unless audit is consolidated centrally — excluded from sync for now.

## Deferred to the sync plan
- **#8 Online seat authority** (PWA + WhatsApp bot relay to the origin agency) → SP4.
- **#9 Schema/version parity** across instances → SP5.
- Parcel/Baggage/Transaction agency stamping → SP3 (alongside their up-sync registration).

## Excluded from sync (instance-local)
`UserSession`, `LoginAttempt`, `PasswordResetToken`, `WhatsAppSession`,
`sync_scig_sage.SyncLog`, `sync_scig_sage.StockLevel`, and the entire legacy dead
stack (`voyage`, `ticketing`, `transport_config`, `parcel`).
