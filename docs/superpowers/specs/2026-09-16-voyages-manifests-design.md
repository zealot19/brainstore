# Voyages Manifests (Bordereaux) — Design (Tranche 1)

**Status:** Approved (design), for implementation
**Date:** 2026-09-16
**Module:** `voyages_booking` (PDF rendering) + `voyages_config` (config) + frontend voyages.

## 1. Goal

Rework the trip "bordereaux" (manifests) to match the company's legacy layouts and make their **header and footer configurable**. Tranche 1 delivers the **core 4** documents:

1. **Manifest des passagers** (Bordereau de route) — passenger list; footer = voyage signatures.
2. **Bordereau de comptabilisation** — passenger amounts + expense/income totals; footer = voyage signatures.
3. **Bordereau de transmission de colis** — parcel manifest; footer = colis visas.
4. **Bordereau des bagages** — baggage manifest; footer = colis visas.

Deferred (later tranche): batch tickets, boarding control, latecomers (retardataires), transitaires.

## 2. Current state

- `TripRoadmapPdfView` (`GET /voyages/trips/<id>/roadmap/pdf/?doc=voyages|colis`) renders a WeasyPrint PDF via `apps/voyages_booking/roadmap_pdf.py::render_roadmap_pdf(data, doc)`; `build_roadmap_data(trip, request)` assembles passengers/baggage/colis + `_company_header(company)`.
- Header is derived from the `Company` record only; **no footer/signature config**, no comptabilisation doc.
- `TicketTemplate` ("Config billets") is the existing precedent for a per-company document-config entity.

## 3. Config entity — `ManifestTemplate`

New model `apps/voyages_config/models/manifest.py::ManifestTemplate(_CompanyScoped)` — one per company. Fields:

- **Header:** `brand_name` (char), `slogan` (char, e.g. "TRANSPORT ET LOGISTIQUE"), `head_office` (char, e.g. "Direction et Siège social : Tel …"), `phones` (char), `agencies_line` (char, e.g. "Agences : BAFOUSSAM/ DSCHANG / YAOUNDE"), `logo` (FileField, `upload_to="manifests/logos/"`).
- **Footer:** `sign_labels_voyage` (JSONField list; default `["Chauffeur", "Motoboy", "Chef guichetier"]`), `sign_labels_colis` (JSONField list; default `["Visa de l'Agent", "Visa du Chef d'Agence", "Visa du Chauffeur"]`).

All header fields fall back to the `Company` record (name/slogan/logo/phone/address) when blank. Migration adds the model. Config API `GET/PUT /voyages/config/manifest-template/` (perms `transport.config.view` / `transport.config.manage`), mirroring the TicketTemplate config view.

## 4. Rendering

New `apps/voyages_booking/manifest_render.py`:
- `manifest_header_html(tpl_dict)` — builds the legacy company header (logo left; name/slogan/head-office/phones/agencies right) from the resolved `ManifestTemplate` (with Company fallback).
- `manifest_footer_html(labels)` — signature blocks row from a labels list.
- `build_passenger_manifest(data, tpl)`, `build_comptabilisation(data, tpl)`, `build_colis_manifest(data, tpl)`, `build_baggage_manifest(data, tpl)` — each returns full HTML (header + title + table + footer).
- `render_manifest_pdf(data, doc, tpl)` — dispatch on `doc`, wrap in the page CSS, `HTML(string=...).write_pdf()` (reuse WeasyPrint as in `roadmap_pdf`).

`build_roadmap_data(trip, request)` is extended to also provide, for comptabilisation: per-passenger `amount`, `baggage_amount`, `refund_amount`, `agent`; and trip totals — `expenses` (list of `{type_label, amount}` from `TripExpense` where status != cancelled) with `expenses_total`, `recettes` (ticket revenue + colis + bagages income), `net = recettes - expenses_total`. The legacy fixed expense columns (Ration/Carburant/…) are represented by the company's actual configured `ExpenseType`s.

Resolved template dict comes from a helper `resolve_manifest_template(company, request)` returning header fields + the two signature lists.

## 5. Endpoints

- Replace the `doc` set of `TripRoadmapPdfView` with `voyages | comptabilisation | colis | bagages` (default `voyages`), routing to `render_manifest_pdf`. Keep the same URL (`roadmap/pdf/`) and auth. `voyages` = passenger manifest, unchanged URL contract.
- `apps/voyages_config/config_api`: `ManifestTemplateView` (GET/PUT) at `voyages/config/manifest-template/`.

## 6. Frontend

- **Config manifestes page** under Voyages → Configurations (new sidebar sub-item + route + component): header fields, logo upload, and the two editable signature-label lists.
- **Roadmap page** (`/voyages/roadmap/:id`): add buttons "Manifest passagers" (doc=voyages) and "Comptabilisation" (doc=comptabilisation) that open the PDF; keep the on-screen boarding view.
- **Expédition page:** repoint the existing "Imprimer manifeste" to the colis PDF (doc=colis) for the selected voyage.
- **Bagages / roadmap:** a "Bordereau bagages" button (doc=bagages).
- `RoadmapService.pdf(tripId, doc)` widened to the 4 doc types; new `ManifestTemplateService` (get/put).

## 7. Testing

- ManifestTemplate get/set (defaults + fallback to Company).
- `render_manifest_pdf` returns non-empty bytes for each of the 4 docs (skip gracefully if WeasyPrint unavailable, as today).
- Comptabilisation totals: recettes − dépenses = net on a seeded trip.
- i18n fr/en/es/pt for the config page + button labels.

## 8. Out of scope (later tranche)

Batch tickets, boarding-control sheet, latecomers, transitaires; per-agency manifest branding; storing generated PDFs.
