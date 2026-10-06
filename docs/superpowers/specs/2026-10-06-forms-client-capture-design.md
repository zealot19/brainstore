# Forms Professional Redesign + Unified Client Capture — Design Spec

**Date:** 2026-10-06
**Status:** Approved for planning
**Author:** shimi (brainstormed with Claude)

## 1. Purpose & intent

The four transactional forms — **ticket sale**, **réservation** (both the same
`new-booking` component in two modes), **colis**, and **bagage** — look
inconsistent (uneven column widths, overlapping cells) and capture the client
differently. This work makes them **professional and uniform**, gives all of
them a **search-and-select client** (by name, from existing clients) plus a
**civilité** field, and makes the dashboard **"clients"** number mean *distinct
clients who bought something — a ticket **or** a colis **or** a bagage*.

The enabling change: **the client is a `Passenger`**, and colis/bagage link to a
`Passenger` (today their sender is free text with no link, which is exactly why
colis/bagage buyers are not counted).

Success: each form reads cleanly top-to-bottom with a consistent grid; the same
client fieldset (civilité · name-autocomplete · phone · ID) appears on all four;
selecting an existing client fills every field and links it; a new name creates
the client on save; and the dashboard "clients" count rises for colis/bagage
buyers, not just ticket buyers.

## 2. Decisions (locked during brainstorming)

- **Client = `Passenger`**, linked on every form.
- **Colis client = the sender (expéditeur)**; the recipient (destinataire) stays
  free text.
- **Civilité is a `Passenger` attribute** (codes `mr`/`mrs`/`miss`, reusing
  Bagage's existing `Civility` codes), auto-filled when an existing client is
  picked.
- **Dashboard "clients" = distinct `Passenger`s** linked to a non-cancelled
  ticket, parcel (as `sender_client`), or baggage (as `sender_client`), within
  the period + agency scope.
- **Shared client fieldset** (Approach A) reused across all four forms.
- Each form gets a **real layout redesign**, not just the client block.

## 3. Data model & migrations (backend, all additive/nullable)

- **`voyages_booking.Passenger`** → add `civility = CharField(choices=mr/mrs/miss,
  blank=True)`. Reuse the same codes as `voyages_consignment.Baggage.Civility`
  so nothing diverges. (Migration 1.)
- **`voyages_consignment.Parcel`** → add `sender_client = ForeignKey(Passenger,
  null=True, blank=True, on_delete=SET_NULL, related_name="parcels_sent")`. Keep
  `sender_name`/`sender_phone` as a denormalized snapshot for display/manifests.
  (Migration 2.)
- **`voyages_consignment.Baggage`** → add `sender_client = ForeignKey(Passenger,
  null=True, blank=True, on_delete=SET_NULL, related_name="baggage_sent")`. Its
  existing `civility` column is superseded by the client's civilité but left in
  place (nullable) for old rows. (Migration 3.)
- **`Booking`** already has `buyer` (a `Passenger`) — no schema change.

Three small additive migrations; existing rows get `NULL`/blank — no backfill
required and no risk.

## 4. Shared client fieldset (frontend)

A new standalone **`ClientFieldsComponent`** (`app-client-fields`) in
`angular/src/_api/pages/voyages-booking/shared/client-fields/`, rendering one
consistent, aligned row:

> **Civilité** (`select`: —/M./Mme/Mlle) · **Nom** (search-autocomplete) ·
> **Téléphone** · **Type de pièce** · **N° de pièce**

- Bound to one `PassengerSpec` object (the TS interface gains `civility?: string`),
  which the component mutates — identical to how `new-booking` already binds the
  current `ClientAutocompleteComponent`, so adoption is a one-line swap per form.
- **Reuses the existing autocomplete search logic** (debounced name lookup →
  dropdown of matches). `pick(p)` fills `civility, name, phone, id_type,
  id_number` and sets `row.id` (links the existing client); typing a new name
  clears `row.id` (creates on save).
- It is the single source of the client section's look on all four forms.
- The existing `ClientAutocompleteComponent` is either absorbed into this
  component or kept as the name-input internal to it; the booking form stops
  using the bare autocomplete and uses `app-client-fields` instead.

## 5. Backend write path + dashboard count

- **`get_or_create_passenger(...)`** gains a `civility=""` kwarg; set on create
  (and filled in if a matched client had none). Dedup rule unchanged
  (`id_type`+`id_number`, else `phone`).
- **Colis create** (`voyages_consignment` parcel create service): accept a sender
  client spec (`name, phone, civility, id_type, id_number`) → `get_or_create_passenger`
  → set `parcel.sender_client` and the `sender_name`/`sender_phone` snapshot.
- **Bagage create**: same, setting `baggage.sender_client` (+ snapshot name/phone,
  civility from the client).
- **Booking/réservation**: already resolves `buyer` via `get_or_create_passenger`;
  now also carries `civility` through the buyer spec.
- **Dashboard "clients" metric** (`voyages_trips/dashboard/selectors.py`,
  `monthly_series(..., "clients")`): change from "Passengers with tickets" to
  **distinct `Passenger`s linked to a non-cancelled ticket OR parcel
  (`sender_client`) OR baggage (`sender_client`)**, within the year and agency
  scope (agency resolved per source: ticket → `trip__origin__agency`, parcel →
  `agency`, baggage → `trip__origin__agency`), bucketed by month as today. Update
  the metric's tests accordingly.

## 6. Professional redesign of each form (the main visual work)

A single design language across all four, fixing uneven/overlapping cells:

- **Grid discipline:** every input row is a Bootstrap `.row` whose `col-md-*`
  **sum to 12** (no stray inline widths, no overlap); uniform `mb-3` spacing;
  every control full-width (`form-control`/`form-select`); labels styled
  consistently (`form-label`).
- **Grouped sections** with subtle headers/dividers, read top-to-bottom:
  - **Ticket sale / Réservation:** *Client* (shared fieldset) → *Voyage*
    (trip / route / seat) → *Paiement* (method / amount).
  - **Colis:** *Client — expéditeur* (shared fieldset) → *Destinataire*
    (free-text name / phone / address) → *Colis* (type / weight / description /
    declared value) → *Paiement*.
  - **Bagage:** *Client* (shared fieldset) → *Bagage* (trip / type / weight /
    value) → *Paiement*.
- **Alignment & rhythm:** equal-height rows, aligned field groups, same control
  sizes throughout, action buttons right-aligned in the footer.
- **Responsive:** columns collapse to full width on small screens.
- Uses the app's existing component/style conventions so it feels native.

Scope note: this redesigns the **create** forms for the four flows. It does not
restructure their list screens beyond what the global table-fit change already
did.

## 7. i18n

Civilité option labels and any new field labels added to all four locales
(`fr`, `en`, `es`, `pt`) — reusing existing keys where present (Bagage already
has `cons.baggage.civ_mr/civ_mrs/civ_miss`; promote to a shared
`shared.civility.*` set used by the fieldset).

## 8. Testing strategy

**Backend (TDD):**
- `Passenger.civility` migration + choices/blank default.
- `get_or_create_passenger` sets `civility` on create; dedup still matches on
  id/phone and does not duplicate.
- Colis create links `sender_client` (new client created; and dedups to an
  existing client by id/phone) + snapshot fields populated.
- Bagage create links `sender_client`.
- Dashboard `clients` = distinct across bookings + parcels + baggage, honoring
  agency scope (a colis-only buyer and a bagage-only buyer each count; the same
  person across two forms counts once).

**Frontend:** no unit-test harness in this repo → **build-verified**; the shared
fieldset is proven by reuse. The visual redesign is verified on the running
build by the user.

## 9. Out of scope
- The parcel **recipient** becoming a client (stays free text).
- List/table screens (already handled by the global table-fit change).
- Loyalty, pricing, or payment-method logic changes.
- Backfilling `sender_client` for historical parcels/baggage (old rows stay
  unlinked; the count is forward-looking).
- Merging/deduplicating existing duplicate Passenger records.
