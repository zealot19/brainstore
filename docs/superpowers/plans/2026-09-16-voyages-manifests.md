# Voyages Manifests (Bordereaux) — Implementation Plan (Tranche 1)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Configurable-header/footer trip bordereaux matching the legacy layouts — passenger manifest, comptabilisation, colis transmission, baggage — plus a "Config manifestes" page.

**Architecture:** New `ManifestTemplate` config (per company, Company fallback). New `manifest_render.py` builds each bordereau's HTML (shared header/footer from the template) and renders via the existing WeasyPrint pipeline. The existing `roadmap/pdf/?doc=` endpoint is extended to the 4 doc types.

**Tech Stack:** Django + DRF, WeasyPrint (HTML→PDF), pytest; Angular 21 standalone + Transloco. Backend venv `../env`; frontend `npx ng build --configuration=development`, i18n `npm run i18n:check`.

**Spec:** `docs/superpowers/specs/2026-09-16-voyages-manifests-design.md`

## Global Constraints

- French throughout. Commit as shimi; branch from origin/master; merge --ff-only; `git push all master`.
- Paginated lists = `{success,data,pagination}` unwrapped by the interceptor.
- WeasyPrint may be unavailable on a server → PDF endpoints must return 503 gracefully (keep existing try/except ImportError,OSError).
- Every backend logic change ships a pytest test; run via `pytest`. Frontend must build clean + `npm run i18n:check` OK.
- No new RBAC perms: config uses `transport.config.view/manage`; PDFs use `ticketing.booking.view`.

---

## Task 1: `ManifestTemplate` model + config API

**Files:**
- Create: `backend/apps/voyages_config/models/manifest.py`
- Modify: `backend/apps/voyages_config/models/__init__.py` (export)
- Create migration (makemigrations)
- Modify: `backend/apps/voyages_config/config_api/serializers.py`, `views.py`, `backend/apps/voyages_config/urls.py`
- Test: `backend/apps/voyages_config/test_manifest_template.py`

**Interfaces — Produces:** `ManifestTemplate` with header fields (`brand_name, slogan, head_office, phones, agencies_line, logo`) + `sign_labels_voyage`, `sign_labels_colis` (JSON lists); endpoint `GET/PUT /api/v1/voyages/config/manifest-template/`.

- [ ] **Step 1: Write the model**
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped

DEFAULT_SIGN_VOYAGE = ["Chauffeur", "Motoboy", "Chef guichetier"]
DEFAULT_SIGN_COLIS = ["Visa de l'Agent", "Visa du Chef d'Agence", "Visa du Chauffeur"]


class ManifestTemplate(_CompanyScoped):
    """Config en-tête/pied des bordereaux (manifestes), une par institution."""
    brand_name    = models.CharField(_("nom affiché"), max_length=255, blank=True)
    slogan        = models.CharField(_("slogan"), max_length=255, blank=True)
    head_office   = models.CharField(_("direction / siège social"), max_length=255, blank=True)
    phones        = models.CharField(_("téléphones"), max_length=255, blank=True)
    agencies_line = models.CharField(_("agences"), max_length=255, blank=True)
    logo          = models.FileField(_("logo"), upload_to="manifests/logos/", null=True, blank=True)
    sign_labels_voyage = models.JSONField(_("signatures voyage"), default=list, blank=True)
    sign_labels_colis  = models.JSONField(_("signatures colis"), default=list, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("modèle de bordereau")

    def __str__(self):
        return f"Modèle de bordereau ({self.company_id or 'global'})"
```
Export it in `models/__init__.py`.

- [ ] **Step 2: Write the test (get defaults + set)**
`backend/apps/voyages_config/test_manifest_template.py`:
```python
import pytest


@pytest.mark.django_db
def test_manifest_template_get_defaults_and_set():
    from rest_framework.test import APIClient
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="MtCo", admin_email="mt@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="mt@x.com")
    c = APIClient(); c.force_authenticate(user=admin)
    r = c.get("/api/v1/voyages/config/manifest-template/")
    assert r.status_code == 200, r.content
    r = c.put("/api/v1/voyages/config/manifest-template/",
              {"brand_name": "BLUE BIRD", "sign_labels_voyage": ["Chauffeur", "Chef"]}, format="json")
    assert r.status_code == 200, r.content
    d = (r.json().get("data", r.json()))
    assert d["brand_name"] == "BLUE BIRD"
    assert d["sign_labels_voyage"] == ["Chauffeur", "Chef"]
```

- [ ] **Step 3: Run test → fails** (`cd backend && source ../env/bin/activate && pytest apps/voyages_config/test_manifest_template.py -q`) — 404/no model.

- [ ] **Step 4: Serializer + view + url**
In `config_api/serializers.py` add `ManifestTemplateRead` (ModelSerializer, all fields + `id`, `company`) and `ManifestTemplateWrite(serializers.Serializer)` with the header chars (required=False, allow_blank) + `sign_labels_voyage`/`sign_labels_colis` as `serializers.ListField(child=serializers.CharField(), required=False)`. In `config_api/views.py` add `ManifestTemplateView(APIView)` (GET returns the company's row or a defaults dict with `DEFAULT_SIGN_*`; PUT `update_or_create`). Follow the existing `TicketTemplate` config view/URL pattern exactly. Add the URL `manifest-template/` in `voyages_config/urls.py`.

- [ ] **Step 5: makemigrations + migrate + test passes**
`python manage.py makemigrations voyages_config && python manage.py migrate voyages_config && pytest apps/voyages_config/test_manifest_template.py -q` → PASS.

- [ ] **Step 6: Commit** (`git add backend/apps/voyages_config … && git commit -m "feat(voyages-config): ManifestTemplate (config manifestes) model + API"`)

---

## Task 2: Comptabilisation data in `build_roadmap_data`

**Files:**
- Modify: `backend/apps/voyages_booking/config_api/views.py` (`build_roadmap_data`)
- Test: `backend/apps/voyages_booking/test_manifest_data.py`

**Interfaces — Consumes:** `TripExpense` (voyages_trips), trip passengers/amounts. **Produces:** `data["accounting"] = {passengers:[{name, phone, destination, amount, baggage_amount, refund_amount, agent}], expenses:[{type_label, amount}], expenses_total, recettes, net}`.

- [ ] **Step 1: Test** — seed a trip with 2 tickets (known amounts) + 1 TripExpense, call `build_roadmap_data`, assert `accounting.recettes == sum(ticket amounts)`, `expenses_total == expense.amount`, `net == recettes - expenses_total`. Use the `_setup` helper from `apps/voyages_booking/tests_integration_treasury.py`.

- [ ] **Step 2: Run → fails** (`pytest apps/voyages_booking/test_manifest_data.py -q`) — key absent.

- [ ] **Step 3: Implement** — in `build_roadmap_data`, after the existing assembly, compute:
```python
from apps.voyages_trips.models import TripExpense
exp = (TripExpense.objects.filter(trip=trip, is_deleted=False).exclude(status="cancelled")
       .select_related("expense_type"))
expenses = [{"type_label": e.expense_type.name if e.expense_type_id else "—", "amount": e.amount} for e in exp]
expenses_total = sum((e["amount"] for e in expenses), Decimal("0"))
# Recettes : montant des billets du voyage (déjà chargés dans passengers via ticket.amount).
recettes = sum((Decimal(str(p.get("amount") or 0)) for p in acc_passengers), Decimal("0"))
data["accounting"] = {"passengers": acc_passengers, "expenses": expenses,
                      "expenses_total": expenses_total, "recettes": recettes,
                      "net": recettes - expenses_total}
```
Build `acc_passengers` from `selectors.trip_passengers(trip)` with `amount = t.amount` (ticket paid amount — confirm the ticket amount field name; use the field the booking list serializer uses), `baggage_amount`, `refund_amount=0` (Tranche 1), `agent = t.created_by`. Keep money as `Decimal`; the serializer/JSON view already stringifies.

- [ ] **Step 4: Run → passes.**

- [ ] **Step 5: Commit.**

---

## Task 3: `manifest_render.py` (header/footer + 4 docs)

**Files:**
- Create: `backend/apps/voyages_booking/manifest_render.py`
- Modify: `backend/apps/voyages_booking/config_api/views.py` (add `resolve_manifest_template(company, request)`)
- Test: `backend/apps/voyages_booking/test_manifest_render.py`

**Interfaces — Consumes:** `build_roadmap_data` output, `ManifestTemplate`. **Produces:** `render_manifest_pdf(data, doc, tpl) -> bytes` for `doc in {voyages, comptabilisation, colis, bagages}`.

- [ ] **Step 1: `resolve_manifest_template`** in views.py — load `ManifestTemplate` for the company (or None), return a dict: header fields falling back to Company (`brand_name or company.name`, `slogan or company.slogan`, `head_office`, `phones or company.phone`, `agencies_line`, `logo_url` absolute or company logo), and `sign_labels_voyage`/`sign_labels_colis` (or the DEFAULT_* when empty).

- [ ] **Step 2: Test** — build data via `build_roadmap_data`, call `render_manifest_pdf(data, doc, tpl)` for each of the 4 docs; assert `isinstance(pdf, (bytes, bytearray)) and len(pdf) > 0`; wrap in `try/except (ImportError, OSError): pytest.skip("WeasyPrint indisponible")` so CI without Pango still passes.

- [ ] **Step 3: Run → fails** (module missing).

- [ ] **Step 4: Implement** `manifest_render.py`:
  - `manifest_header_html(tpl)` — legacy header: logo left; right column = `brand_name` (bold), `slogan`, `head_office`, `phones`, `agencies_line`.
  - `manifest_footer_html(labels)` — a row of equal-width signature cells, each showing the label above a signing space.
  - `build_passenger_manifest(data, tpl)` — title "Bordereau de route", table (S/N, Nom, Téléphone, N° CNI, Destination, Siège, Bagages) + `manifest_footer_html(tpl["sign_labels_voyage"])`.
  - `build_comptabilisation(data, tpl)` — title "Bordereau de comptabilisation", passenger table (S/N, Nom, Téléphone, Dest., Montant, Bagage, Remb, Agent), then two summary tables: **Détails Dépenses** (one column per `expenses[].type_label` + Total) and **Détails Calcul** (Recettes, Dépenses, Net); footer = voyage signatures.
  - `build_colis_manifest(data, tpl)` — title "BORDEREAU DE TRANSMISSION DE COLIS", table (S/N, N° Reçu, Nature, Expéditeur, Destinataire, T, Partie, Décharge) from `data["parcels"]`; footer = `sign_labels_colis`.
  - `build_baggage_manifest(data, tpl)` — title "BORDEREAU DES BAGAGES", table (S/N, N° Reçu, Nature, Nom du Client, No CNI, Téléphone, Nbr) from `data["baggage"]`; footer = `sign_labels_colis`.
  - `render_manifest_pdf(data, doc, tpl)` — pick builder by `doc`, wrap body in an HTML doc with A4 CSS (reuse the `<style>` from `roadmap_pdf.render_roadmap_pdf`), `from weasyprint import HTML; return HTML(string=html).write_pdf()`.

- [ ] **Step 5: Run → passes** (or skips if WeasyPrint absent).

- [ ] **Step 6: Commit.**

---

## Task 4: Wire the PDF endpoint to the 4 docs

**Files:** Modify `backend/apps/voyages_booking/config_api/views.py` (`TripRoadmapPdfView`).

- [ ] **Step 1** — replace the `doc` handling:
```python
doc = request.query_params.get("doc") or "voyages"
if doc not in ("voyages", "comptabilisation", "colis", "bagages"):
    doc = "voyages"
data = build_roadmap_data(trip, request)
tpl = resolve_manifest_template(trip.company, request)
from apps.voyages_booking.manifest_render import render_manifest_pdf
try:
    pdf = render_manifest_pdf(data, doc, tpl)
except (ImportError, OSError):
    return error_response("Génération PDF indisponible : WeasyPrint non configuré.", status_code=503)
```
Keep the existing filename/HttpResponse logic (filename `bordereau-{doc}-{trip.number}.pdf`).

- [ ] **Step 2: Test** — API test: authenticate, `GET /voyages/trips/<id>/roadmap/pdf/?doc=comptabilisation` → 200 `application/pdf` (or 503 if WeasyPrint absent — assert `status_code in (200, 503)`).

- [ ] **Step 3: Run → passes. Commit.**

---

## Task 5: Frontend — Config manifestes page

**Files:**
- Create: `angular/src/_api/services/voyages-config/manifest-template.service.ts`
- Create: `angular/src/_api/pages/voyages-config/manifest-template/manifest-template.component.{ts,html}`
- Modify: `angular/src/_api/config/api.config.ts` (VOYAGES_CONFIG.manifestTemplate), `pages.routes.ts`, `sidebar.service.ts` (Voyages → Configurations add "Config manifestes"), `routes.ts` (vcManifestTemplate)
- i18n seed for the page.

- [ ] **Step 1** — add `VOYAGES_CONFIG.manifestTemplate = \`${VC}/manifest-template/\``. Service `get()`/`save(body)` (GET/PUT, unwrap `r.data ?? r`).

- [ ] **Step 2** — component: load template, form with header fields + logo upload (mirror the ticket-template page's upload pattern if present, else a simple file input posting multipart; if multipart is complex, Tranche 1 may accept a logo URL/text and defer upload — but prefer reusing TicketTemplate's upload approach), and two editable string lists (`sign_labels_voyage`, `sign_labels_colis`) with add/remove. Save via PUT.

- [ ] **Step 3** — route `voyages-config/manifest-template` in `pages.routes.ts`; `routes.ts` const `vcManifestTemplate`; sidebar sub-item under Voyages → Configurations: `{ menuValue: 'Config manifestes', route: routes.vcManifestTemplate, base: 'manifest-template', permission: 'transport.config.view' }`.

- [ ] **Step 4** — i18n keys (title/subtitle/field labels/signatures) fr/en/es/pt via a seed script; `npm run i18n:check`.

- [ ] **Step 5: Build → clean. Commit.**

---

## Task 6: Frontend — print triggers

**Files:** Modify `angular/src/_api/services/voyages-booking/roadmap.service.ts`, `roadmap.component.{ts,html}`, `voyages-consignment/manifest/manifest.component.ts` (Expédition), and the bagages trigger.

- [ ] **Step 1** — widen `RoadmapService.pdf(tripId, doc)` doc union to `'voyages' | 'comptabilisation' | 'colis' | 'bagages'`.

- [ ] **Step 2** — Roadmap page: add buttons **Manifest passagers** (`pdf(id,'voyages')`) and **Comptabilisation** (`pdf(id,'comptabilisation')`), opening the returned Blob in a new tab (`URL.createObjectURL`), mirroring any existing roadmap PDF button.

- [ ] **Step 3** — Expédition (`manifest.component.ts`): change `printManifest()` to call the roadmap PDF `doc=colis` for `tripId` (open Blob), instead of the JSON URL.

- [ ] **Step 4** — Add a **Bordereau bagages** button (roadmap page or bagages page) → `pdf(id,'bagages')`.

- [ ] **Step 5** — i18n button labels; build clean. Commit.

---

## Task 7: Verification

- [ ] `cd backend && source ../env/bin/activate && pytest apps/voyages_config apps/voyages_booking -q` → green (WeasyPrint tests skip if absent).
- [ ] `python manage.py makemigrations --check --dry-run` → No changes.
- [ ] `cd angular && npx ng build --configuration=development` → clean; `npm run i18n:check` → OK.
- [ ] Commit any i18n/fixups.

## Self-review

- Spec coverage: config entity → T1; comptabilisation data → T2; 4 doc renders + header/footer → T3; endpoint → T4; config page → T5; triggers → T6. Deferred docs remain out of scope.
- Types: `render_manifest_pdf(data, doc, tpl)` / `resolve_manifest_template` names consistent across T3–T4; `RoadmapService.pdf` doc union consistent T6.
- Placeholder scan: logo upload in T5 may reuse TicketTemplate's mechanism; flagged as the one area to match to the existing pattern at implementation time.
