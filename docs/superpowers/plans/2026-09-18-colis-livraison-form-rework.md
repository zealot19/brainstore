# Colis — Livraison à domicile + retouches formulaire & retrait — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an optional paid home-delivery service for parcels (fee booked into recettes), and clean up the add-parcel form and the guichet retrait flow.

**Architecture:** Home delivery reuses the existing consignment-payment treasury helper: a new `deliver_parcel_home` service closes an `available_for_pickup` parcel to `picked_up`, stores delivery fields, and records a `PARCEL_DELIVERY` income transaction that surfaces as its own "Livraison" line in recettes. The old "Retrait" sidebar entry becomes "Livraison colis" and its page is reworked into the delivery screen; guichet retrait stays on the parcels list with a new mandataire toggle. Items 1 & 2 are frontend-only.

**Tech Stack:** Django + DRF (backend, `pytest`), Angular standalone components + Transloco i18n (frontend), treasury `Transaction` model.

**Spec:** `docs/superpowers/specs/2026-09-18-colis-livraison-form-rework-design.md`

## Global Constraints

- **UI copy is French** (this is a French ERP). New i18n keys go in all 4 files: `angular/public/i18n/{fr,en,es,pt}.json`.
- **Money display:** amounts render as integers with `FCFA`/`XAF` suffix, matching surrounding code.
- **Permissions (exact strings):** parcel actions use `ticketing.parcel.view` / `ticketing.parcel.manage`; recette views use `treasury.income.view`.
- **Backend tests:** run with `pytest` from the `backend/` directory (per `pytest.ini`), NOT `manage.py test`.
- **Commits:** author as `shimi`, plain messages, **no Claude co-author trailer** (repo convention).
- **Idempotency of delivery payment:** the delivery transaction is recorded with `link_obj=None` (no `voyages_parcel` DB link); double-charge is prevented by the parcel status guard (`available_for_pickup` → `picked_up`, non-replayable).
- **Backend field `description` and `recipient_address` stay on the model** — Item 1 only changes the form UI, not the schema.

---

### Task 1: Parcel model — delivery fields + migration

**Files:**
- Modify: `backend/apps/voyages_consignment/models/parcel.py`
- Create: `backend/apps/voyages_consignment/migrations/0009_parcel_delivery_fields.py` (via makemigrations)
- Test: `backend/apps/voyages_consignment/test_parcel_delivery.py` (new)

**Interfaces:**
- Produces: `Parcel.delivery_amount` (Decimal), `Parcel.delivery_address` (str), `Parcel.delivery_payment_method` (str), `Parcel.delivered_home_at` (datetime|None), `Parcel.delivered_home_by` (FK user|None).

- [ ] **Step 1: Write the failing test**

Create `backend/apps/voyages_consignment/test_parcel_delivery.py`:

```python
import pytest
from apps.voyages_consignment.models import Parcel


@pytest.mark.django_db
def test_parcel_has_delivery_fields():
    fields = {f.name for f in Parcel._meta.get_fields()}
    assert {"delivery_amount", "delivery_address", "delivery_payment_method",
            "delivered_home_at", "delivered_home_by"} <= fields
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && pytest apps/voyages_consignment/test_parcel_delivery.py::test_parcel_has_delivery_fields -q`
Expected: FAIL (fields missing).

- [ ] **Step 3: Add the fields to the model**

In `parcel.py`, in the `Parcel` model, after the existing `picked_up_id_number` field (around line 56) add:

```python
    delivery_amount         = models.DecimalField(_("montant livraison"), max_digits=12, decimal_places=2, default=0)
    delivery_address        = models.CharField(_("adresse de livraison"), max_length=255, blank=True)
    delivery_payment_method = models.CharField(_("mode de paiement livraison"), max_length=40, blank=True)
    delivered_home_at       = models.DateTimeField(_("livré à domicile le"), null=True, blank=True)
    delivered_home_by       = models.ForeignKey(
        "authentication.User", verbose_name=_("livré par"), on_delete=models.SET_NULL,
        null=True, blank=True, related_name="+")
```

- [ ] **Step 4: Generate the migration**

Run: `cd backend && python manage.py makemigrations voyages_consignment`
Expected: creates `0009_parcel_delivery_fields.py` (or similar). Verify it only adds the 5 fields.

- [ ] **Step 5: Run test to verify it passes**

Run: `cd backend && pytest apps/voyages_consignment/test_parcel_delivery.py::test_parcel_has_delivery_fields -q`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/voyages_consignment/models/parcel.py backend/apps/voyages_consignment/migrations/0009_*.py backend/apps/voyages_consignment/test_parcel_delivery.py
git commit -m "feat(colis): add home-delivery fields to Parcel model"
```

---

### Task 2: Treasury — PARCEL_DELIVERY category + migration

**Files:**
- Modify: `backend/apps/treasury/models/transaction.py:15-30`
- Create: treasury migration (via makemigrations)
- Test: `backend/apps/treasury/tests/test_delivery_category.py` (new)

**Interfaces:**
- Produces: `Transaction.Category.PARCEL_DELIVERY == "parcel_delivery"`.

- [ ] **Step 1: Write the failing test**

Create `backend/apps/treasury/tests/test_delivery_category.py`:

```python
from apps.treasury.models import Transaction


def test_parcel_delivery_category_exists():
    assert Transaction.Category.PARCEL_DELIVERY == "parcel_delivery"
    assert "parcel_delivery" in dict(Transaction.Category.choices)
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && pytest apps/treasury/tests/test_delivery_category.py -q`
Expected: FAIL (AttributeError PARCEL_DELIVERY).

- [ ] **Step 3: Add the category**

In `transaction.py`, in `class Category`, under the Income group after `BAGGAGE`:

```python
        PARCEL_DELIVERY = "parcel_delivery", _("Livraison colis")
```

- [ ] **Step 4: Generate migration + run test**

Run: `cd backend && python manage.py makemigrations treasury && pytest apps/treasury/tests/test_delivery_category.py -q`
Expected: migration created (alters `category` choices); test PASS.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/treasury/models/transaction.py backend/apps/treasury/migrations/*.py backend/apps/treasury/tests/test_delivery_category.py
git commit -m "feat(treasury): add PARCEL_DELIVERY income category"
```

---

### Task 3: Treasury — record_parcel_delivery helper

**Files:**
- Modify: `backend/apps/treasury/services/consignment_sales.py`
- Modify: `backend/apps/treasury/services/__init__.py` (export, if it re-exports names — check first)
- Test: `backend/apps/treasury/tests/test_delivery_payment.py` (new)

**Interfaces:**
- Consumes: `_record_consignment_payment(...)` (existing), `Transaction.Category.PARCEL_DELIVERY` (Task 2).
- Produces: `record_parcel_delivery(company, *, parcel, amount, payment_method, user) -> Transaction | None`.

- [ ] **Step 1: Write the failing test**

Create `backend/apps/treasury/tests/test_delivery_payment.py`. Mirror the fixtures used by the existing consignment-payment tests (look at `backend/apps/treasury/tests/` for a parcel/company/open-session fixture to reuse). Skeleton:

```python
import pytest
from decimal import Decimal
from apps.treasury.models import Transaction
from apps.treasury.services.consignment_sales import record_parcel_delivery


@pytest.mark.django_db
def test_record_parcel_delivery_creates_delivery_income(company, parcel, user, open_cash_session):
    txn = record_parcel_delivery(company, parcel=parcel, amount=Decimal("1500"),
                                 payment_method="cash", user=user)
    assert txn is not None
    assert txn.category == Transaction.Category.PARCEL_DELIVERY
    assert txn.transaction_type == Transaction.Type.INCOME
    assert txn.amount == Decimal("1500")
    # No voyages_parcel link (idempotency intentionally off for delivery)
    assert txn.voyages_parcel_id is None
```

If no shared fixtures exist, create the parcel via `apps.voyages_consignment.services.parcel_services.register_parcel(...)` and open a session via the same helper the existing parcel-payment test uses.

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && pytest apps/treasury/tests/test_delivery_payment.py -q`
Expected: FAIL (ImportError record_parcel_delivery).

- [ ] **Step 3: Implement the helper**

In `consignment_sales.py`, after `record_parcel_payment`:

```python
def record_parcel_delivery(company, *, parcel, amount, payment_method, user):
    """Mouvement de trésorerie pour une livraison à domicile (catégorie parcel_delivery).

    Pas de lien voyages_parcel (link_obj=None) : l'expédition occupe déjà ce lien.
    La double-facturation est empêchée par le statut du colis côté service.
    """
    ref = getattr(parcel, "reference", "") or ""
    return _record_consignment_payment(
        company, amount=amount, payment_method=payment_method, user=user,
        category=Transaction.Category.PARCEL_DELIVERY,
        description=f"Livraison {ref}".strip(),
        link_field="voyages_parcel", link_obj=None,
    )
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd backend && pytest apps/treasury/tests/test_delivery_payment.py -q`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/treasury/services/consignment_sales.py backend/apps/treasury/tests/test_delivery_payment.py
git commit -m "feat(treasury): record_parcel_delivery income helper"
```

---

### Task 4: voyages_consignment — deliver_parcel_home service

**Files:**
- Modify: `backend/apps/voyages_consignment/services/parcel_services.py`
- Modify: `backend/apps/voyages_consignment/services/__init__.py` (if it explicitly exports service names — check and add `deliver_parcel_home`)
- Test: `backend/apps/voyages_consignment/test_parcel_delivery.py` (extend Task 1 file)

**Interfaces:**
- Consumes: `record_parcel_delivery(...)` (Task 3), `Parcel.Status`, `ParcelEvent.Kind.PICKED_UP`.
- Produces: `deliver_parcel_home(parcel, *, delivery_amount, delivery_address="", payment_method="", user) -> Parcel`.

- [ ] **Step 1: Write the failing tests**

Append to `backend/apps/voyages_consignment/test_parcel_delivery.py` (reuse whatever helper the existing `test_parcel_flow.py` uses to bring a parcel to `available_for_pickup`; import it or replicate the minimal setup):

```python
from decimal import Decimal
from apps.core.exceptions import ApplicationError
from apps.voyages_consignment.models import Parcel
from apps.voyages_consignment.services import parcel_services


@pytest.mark.django_db
def test_deliver_home_marks_picked_up_and_stores_fields(available_parcel, user):
    p = parcel_services.deliver_parcel_home(
        available_parcel, delivery_amount=Decimal("2000"),
        delivery_address="Bonapriso, Douala", payment_method="cash", user=user)
    assert p.status == Parcel.Status.PICKED_UP
    assert p.delivery_amount == Decimal("2000")
    assert p.delivery_address == "Bonapriso, Douala"
    assert p.delivered_home_at is not None
    assert p.delivered_home_by_id == user.id


@pytest.mark.django_db
def test_deliver_home_rejected_when_not_available(registered_parcel, user):
    with pytest.raises(ApplicationError):
        parcel_services.deliver_parcel_home(
            registered_parcel, delivery_amount=Decimal("2000"), user=user)
```

Define `available_parcel` / `registered_parcel` / `user` fixtures at the top of the file (or in a local `conftest.py`) using the same construction path as `test_parcel_flow.py`.

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd backend && pytest apps/voyages_consignment/test_parcel_delivery.py -q`
Expected: FAIL (deliver_parcel_home missing).

- [ ] **Step 3: Implement the service**

In `parcel_services.py`, after `pickup_parcel`:

```python
@transaction.atomic
def deliver_parcel_home(parcel, *, delivery_amount, delivery_address="", payment_method="", user):
    """Livraison à domicile : clôt le colis et encaisse les frais de livraison (recettes)."""
    if parcel.status != Parcel.Status.AVAILABLE_FOR_PICKUP:
        raise ApplicationError(_("Seul un colis disponible peut être livré à domicile."))
    amount = Decimal(str(delivery_amount or 0))
    if amount <= 0:
        raise ApplicationError(_("Indiquez le montant de la livraison."))
    parcel.status = Parcel.Status.PICKED_UP
    parcel.picked_up_by = parcel.recipient_name
    parcel.picked_up_at = timezone.now()
    parcel.delivery_amount = amount
    parcel.delivery_address = delivery_address or ""
    parcel.delivery_payment_method = payment_method or ""
    parcel.delivered_home_at = timezone.now()
    parcel.delivered_home_by = user
    parcel.updated_by = user
    parcel.save()
    _event(parcel, ParcelEvent.Kind.PICKED_UP, from_status=Parcel.Status.AVAILABLE_FOR_PICKUP,
           to_status=Parcel.Status.PICKED_UP, user=user,
           note=f"Livré à domicile · {delivery_address}".strip(" ·"))
    from apps.treasury.services import record_parcel_delivery
    record_parcel_delivery(parcel.company, parcel=parcel, amount=amount,
                           payment_method=payment_method, user=user)
    return parcel
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `cd backend && pytest apps/voyages_consignment/test_parcel_delivery.py -q`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add backend/apps/voyages_consignment/services/parcel_services.py backend/apps/voyages_consignment/services/__init__.py backend/apps/voyages_consignment/test_parcel_delivery.py
git commit -m "feat(colis): deliver_parcel_home service + fee to recettes"
```

---

### Task 5: API — deliver-home endpoint + serializer + ParcelRead fields

**Files:**
- Modify: `backend/apps/voyages_consignment/config_api/serializers.py` (add `ParcelDeliverSerializer`, extend `ParcelRead` fields)
- Modify: `backend/apps/voyages_consignment/config_api/views.py` (add `ParcelDeliverHomeView`)
- Modify: `backend/apps/voyages_consignment/urls.py` (add route)
- Test: `backend/apps/voyages_consignment/test_parcel_api.py` (extend)

**Interfaces:**
- Consumes: `deliver_parcel_home(...)` (Task 4), `selectors.parcel_detail`, `S.ParcelRead`.
- Produces: `POST /api/v1/voyages-consignment/parcels/<uuid:pk>/deliver-home/` body `{delivery_amount, delivery_address, payment_method}`.

- [ ] **Step 1: Write the failing test**

Add to `backend/apps/voyages_consignment/test_parcel_api.py` (follow the auth/client pattern already used there):

```python
@pytest.mark.django_db
def test_deliver_home_endpoint(auth_client, available_parcel):
    url = f"/api/v1/voyages-consignment/parcels/{available_parcel.id}/deliver-home/"
    resp = auth_client.post(url, {"delivery_amount": "2000",
                                  "delivery_address": "Akwa", "payment_method": "cash"},
                            format="json")
    assert resp.status_code == 200
    assert resp.json()["data"]["status"] == "picked_up"
    assert str(resp.json()["data"]["delivery_amount"]) in ("2000.00", "2000")
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && pytest apps/voyages_consignment/test_parcel_api.py -k deliver_home -q`
Expected: FAIL (404, route missing).

- [ ] **Step 3: Add serializer + ParcelRead fields**

In `serializers.py`, add after `ParcelPickupSerializer`:

```python
class ParcelDeliverSerializer(serializers.Serializer):
    delivery_amount = serializers.DecimalField(max_digits=12, decimal_places=2)
    delivery_address = serializers.CharField(max_length=255, required=False, allow_blank=True, default="")
    payment_method = serializers.CharField(max_length=40, required=False, allow_blank=True, default="")
```

In `ParcelRead.Meta.fields`, append (after `"picked_up_id_number", "notes",`):

```python
                  "delivery_amount", "delivery_address", "delivery_payment_method", "delivered_home_at",
```

- [ ] **Step 4: Add the view**

In `views.py`, after `ParcelPickupView`:

```python
class ParcelDeliverHomeView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'ticketing.parcel.manage'}

    def post(self, request, pk):
        p = selectors.parcel_detail(request.user.company, pk)
        if not p:
            return error_response("Élément introuvable : il a peut-être été supprimé ou déplacé.", status_code=404)
        payload = S.ParcelDeliverSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            p = services.deliver_parcel_home(
                p, delivery_amount=payload.validated_data["delivery_amount"],
                delivery_address=payload.validated_data["delivery_address"],
                payment_method=payload.validated_data["payment_method"], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(S.ParcelRead(p).data)
```

- [ ] **Step 5: Add the URL**

In `urls.py`, after the `pickup/` line (line 18):

```python
    path("parcels/<uuid:pk>/deliver-home/", v.ParcelDeliverHomeView.as_view()),
```

- [ ] **Step 6: Run test to verify it passes**

Run: `cd backend && pytest apps/voyages_consignment/test_parcel_api.py -k deliver_home -q`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add backend/apps/voyages_consignment/config_api/serializers.py backend/apps/voyages_consignment/config_api/views.py backend/apps/voyages_consignment/urls.py backend/apps/voyages_consignment/test_parcel_api.py
git commit -m "feat(colis): deliver-home API endpoint"
```

---

### Task 6: Recettes backend — delivery total + list view + route

**Files:**
- Modify: `backend/apps/treasury/selectors/incomes.py:57-58`
- Modify: `backend/apps/treasury/views.py` (add `IncomeDeliveryListView` near `IncomeParcelListView` ~L799)
- Modify: `backend/apps/treasury/urls.py:57` (add route)
- Test: `backend/apps/treasury/tests/test_delivery_payment.py` (extend)

**Interfaces:**
- Consumes: `Transaction.Category.PARCEL_DELIVERY`, `_IncomeListBase`.
- Produces: `income_dashboard()["delivery_total"]`; `GET /api/v1/treasury/recettes/delivery/`.

- [ ] **Step 1: Write the failing test**

Append to `test_delivery_payment.py`:

```python
@pytest.mark.django_db
def test_delivery_total_in_dashboard(company, parcel, user, open_cash_session):
    from apps.treasury.selectors.incomes import income_dashboard
    record_parcel_delivery(company, parcel=parcel, amount=Decimal("1500"),
                           payment_method="cash", user=user)
    d = income_dashboard(company.id)
    assert Decimal(str(d["delivery_total"])) == Decimal("1500")
```

(Match the real `income_dashboard` signature — check whether it needs `agency_scope`; pass what the existing dashboard test passes.)

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && pytest apps/treasury/tests/test_delivery_payment.py -k dashboard -q`
Expected: FAIL (KeyError delivery_total).

- [ ] **Step 3: Add delivery_total to the selector**

In `incomes.py`, in the returned dict after the `"baggage_total"` line:

```python
        "delivery_total": _cat(Transaction.Category.PARCEL_DELIVERY),
```

- [ ] **Step 4: Add the list view + route**

In `views.py`, after `IncomeParcelListView`:

```python
class IncomeDeliveryListView(_IncomeListBase):
    category = Transaction.Category.PARCEL_DELIVERY
```

In `urls.py`, after the `recettes/parcel/` line (line 56):

```python
    path("recettes/delivery/",           views.IncomeDeliveryListView.as_view(), name="income-delivery"),
```

- [ ] **Step 5: Run test to verify it passes**

Run: `cd backend && pytest apps/treasury/tests/test_delivery_payment.py -q`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/treasury/selectors/incomes.py backend/apps/treasury/views.py backend/apps/treasury/urls.py backend/apps/treasury/tests/test_delivery_payment.py
git commit -m "feat(treasury): recettes 'Livraison' line (delivery total + list)"
```

---

### Task 7: Frontend endpoints + services (parcel deliverHome, income delivery kind)

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (add `parcelDeliverHome`, `incDelivery`)
- Modify: `angular/src/_api/services/voyages-consignment/parcel.service.ts` (add `deliverHome`)
- Modify: `angular/src/_api/services/treasury/income.service.ts` (add `'delivery'` kind)
- Modify: `angular/src/_api/models/voyages-consignment.models.ts` (add delivery fields to `Parcel`)

**Interfaces:**
- Produces: `ParcelService.deliverHome(id, {delivery_amount, delivery_address, payment_method})`; `IncomeService.list('delivery', ...)`; `Parcel.delivery_amount?` etc.

- [ ] **Step 1: Add endpoints**

In `api.config.ts`, in `VOYAGES_CONSIGNMENT` after `parcelPickup` (line 390):

```typescript
  parcelDeliverHome: (id: string) => `${VCG}/parcels/${id}/deliver-home/`,
```

In `TREASURY` after `incOther` (line 451):

```typescript
  incDelivery: `${TRZ}/recettes/delivery/`,
```

- [ ] **Step 2: Add ParcelService.deliverHome**

In `parcel.service.ts`, after the `pickup(...)` method:

```typescript
  deliverHome(id: string, body: { delivery_amount: number; delivery_address: string; payment_method: string }): Observable<Parcel> {
    return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelDeliverHome(id), body).pipe(map(r => r.data ?? r));
  }
```

- [ ] **Step 3: Extend IncomeService kind**

In `income.service.ts`: change the type and map to include delivery:

```typescript
type IncomeKind = 'voyage' | 'parcel' | 'baggage' | 'delivery' | 'other';
```
```typescript
    return { voyage: TREASURY.incVoyage, parcel: TREASURY.incParcel,
             baggage: TREASURY.incBaggage, delivery: TREASURY.incDelivery,
             other: TREASURY.incOther }[kind];
```

- [ ] **Step 4: Extend Parcel model**

In `angular/src/_api/models/voyages-consignment.models.ts`, add to the `Parcel` interface (optional fields):

```typescript
  delivery_amount?: number;
  delivery_address?: string;
  delivery_payment_method?: string;
  delivered_home_at?: string | null;
```

- [ ] **Step 5: Typecheck**

Run: `cd angular && npx tsc --noEmit -p tsconfig.app.json`
Expected: no new type errors from these files.

- [ ] **Step 6: Commit**

```bash
git add angular/src/_api/config/api.config.ts angular/src/_api/services/voyages-consignment/parcel.service.ts angular/src/_api/services/treasury/income.service.ts angular/src/_api/models/voyages-consignment.models.ts
git commit -m "feat(colis): frontend endpoints/services for deliver-home + delivery recettes"
```

---

### Task 8: Frontend — Livraison à domicile page (rework livraison component)

**Files:**
- Modify: `angular/src/_api/pages/voyages-consignment/livraison/livraison.component.ts`
- Modify: `angular/src/_api/pages/voyages-consignment/livraison/livraison.component.html`
- Modify: `angular/public/i18n/{fr,en,es,pt}.json` (`cons.livraison.*`)

**Interfaces:**
- Consumes: `ParcelService.deliverHome`, `PaymentMethodService.list`.

- [ ] **Step 1: Rework the component TS**

Replace `livraison.component.ts` body with a home-delivery form (drop the `pickedBy`/`pickedId` remit; add delivery fields + payment methods). Keep the search-by-ref logic:

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { PaymentMethodService } from '../../../services/treasury/payment-method.service';
import { Parcel } from '../../../models/voyages-consignment.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-vcg-livraison',
  templateUrl: './livraison.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, InfoBannerComponent, TranslocoModule],
})
export class VcgLivraisonComponent implements OnInit {
  private toast = inject(ToastService);
  ref = '';
  parcel: Parcel | null = null;
  searched = false;
  saving = false;
  address = '';
  amount: number | null = null;
  paymentMethod = '';
  paymentMethods: any[] = [];

  constructor(private svc: ParcelService, private pmSvc: PaymentMethodService) {}

  ngOnInit(): void { this.pmSvc.list(true).subscribe(d => this.paymentMethods = d); }

  statusClass(s: string): string {
    return { registered: 'bg-secondary', ready_for_travel: 'bg-warning', loaded: 'bg-info',
             in_transit: 'bg-primary', arrived: 'bg-primary', available_for_pickup: 'bg-info',
             picked_up: 'bg-success', cancelled: 'bg-danger' }[s] ?? 'bg-secondary';
  }

  search(): void {
    const q = this.ref.trim();
    if (!q) return;
    this.searched = true; this.parcel = null;
    this.svc.list({ q }).subscribe({
      next: rows => {
        this.parcel = rows.find(p => p.reference.toLowerCase() === q.toLowerCase()) ?? rows[0] ?? null;
        if (this.parcel) { this.address = this.parcel.recipient_address || ''; this.amount = null; this.paymentMethod = ''; }
      },
      error: e => this.toast.error(e?.error?.detail ?? 'La recherche a échoué.'),
    });
  }

  deliver(): void {
    if (!this.parcel || this.saving) return;
    if (!this.amount || this.amount <= 0) { this.toast.error('Indiquez le montant de la livraison.'); return; }
    this.saving = true;
    this.svc.deliverHome(this.parcel.id, {
      delivery_amount: this.amount, delivery_address: this.address.trim(), payment_method: this.paymentMethod,
    }).subscribe({
      next: p => { this.saving = false; this.parcel = p; this.toast.success('Colis livré. Recette enregistrée.'); },
      error: e => { this.saving = false; this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."); },
    });
  }

  reset(): void { this.ref = ''; this.parcel = null; this.searched = false; this.address = ''; this.amount = null; this.paymentMethod = ''; }
}
```

- [ ] **Step 2: Rework the component HTML**

Replace the "remit" block (lines 38-54 in current HTML) with the delivery form; keep the search + parcel info blocks. The `available_for_pickup` branch becomes:

```html
        @if (parcel.status === 'available_for_pickup') {
          <hr>
          <div class="row g-3" style="max-width:640px">
            <div class="col-12">
              <label class="form-label">{{ 'cons.livraison.f_address' | transloco }}</label>
              <input class="form-control" [(ngModel)]="address" [placeholder]="'cons.livraison.ph_address' | transloco" />
            </div>
            <div class="col-md-6">
              <label class="form-label">{{ 'cons.livraison.f_amount' | transloco }} <span class="text-danger">*</span></label>
              <input type="number" min="0" class="form-control" [(ngModel)]="amount" />
            </div>
            <div class="col-md-6">
              <label class="form-label">{{ 'cons.common.f_payment_method' | transloco }}</label>
              <select class="form-select" [(ngModel)]="paymentMethod">
                <option value="" disabled selected>{{ 'cons.common.opt_choose' | transloco }}</option>
                @for (m of paymentMethods; track m.id) { <option [value]="m.code">{{ m.name }}</option> }
              </select>
            </div>
            <div class="col-12">
              <button class="btn btn-success" *hasPermission="'ticketing.parcel.manage'" [disabled]="saving || !amount" (click)="deliver()">
                <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span><i class="ti ti-truck-delivery me-1"></i>{{ 'cons.livraison.deliver' | transloco }}
              </button>
            </div>
          </div>
        } @else if (parcel.status === 'picked_up') {
          <div class="alert alert-success mt-3 mb-0">{{ 'cons.livraison.already_done' | transloco }}</div>
        } @else {
          <div class="alert alert-warning mt-3 mb-0">{{ 'cons.livraison.not_ready' | transloco }}</div>
        }
```

- [ ] **Step 3: Update i18n `cons.livraison`**

In each of `fr/en/es/pt.json`, retitle the `cons.livraison` block and add keys. French values:

```json
"livraison": {
  "title": "Livraison à domicile",
  "subtitle": "Livrer un colis au domicile du client (service payant)",
  "info": "Recherchez le colis par référence, saisissez l'adresse et le montant, puis validez la livraison.",
  "f_ref": "Référence du colis", "ph_ref": "ex. COL-00123", "new_search": "Nouvelle recherche",
  "not_found": "Aucun colis trouvé pour cette référence.",
  "sender": "Expéditeur", "contents": "Contenu", "weight": "Poids", "voyage": "Voyage",
  "f_address": "Adresse de livraison", "ph_address": "Quartier, ville…",
  "f_amount": "Montant de la livraison", "deliver": "Livrer",
  "already_done": "Ce colis a déjà été remis.", "not_ready": "Ce colis n'est pas encore disponible."
}
```

Provide equivalent translations for en/es/pt (keep the same keys). Remove now-unused keys `picked_by`, `picked_id`, `picked_id_ph`, `remit` if present.

- [ ] **Step 4: Verify build**

Run: `cd angular && npx tsc --noEmit -p tsconfig.app.json`
Expected: no errors referencing livraison.component.

- [ ] **Step 5: Commit**

```bash
git add angular/src/_api/pages/voyages-consignment/livraison/ angular/public/i18n/*.json
git commit -m "feat(colis): rework livraison page into home-delivery + fee"
```

---

### Task 9: Frontend — sidebar rename + recettes 'Livraison' surfacing

**Files:**
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (rename Retrait→Livraison colis; add Recette livraison)
- Modify: `angular/src/app/core/helpers/routes.ts` (add `trzRecettesLivraison`)
- Modify: `angular/src/app/features/pages/pages.routes.ts` (add recettes-livraison route)
- Modify: `angular/src/_api/pages/treasury/recettes/list/recettes-list.component.ts` (add `delivery` kind + title)
- Modify: `angular/src/_api/pages/treasury/recettes/dashboard/recettes-dashboard.component.html` (add Livraison tile)
- Modify: i18n (`treasury.rec_dash.delivery_total`)

**Interfaces:**
- Consumes: `IncomeService.list('delivery', ...)` (Task 7), `incDelivery` endpoint, `delivery_total` (Task 6).

- [ ] **Step 1: Rename the consignment menu entry**

In `sidebar.service.ts` line 357, change:

```typescript
            { menuValue: 'Livraison colis',  route: routes.vcgLivraison, base: 'livraison', permission: 'ticketing.parcel.manage' },
```

(`menuValue` becomes the FR label; permission raised to `manage` since it now collects money.)

- [ ] **Step 2: Add the recette-livraison route + menu**

In `routes.ts` after `trzRecettesColis` (line 412):

```typescript
  trzRecettesLivraison: '/treasury/recettes-livraison',
```

In `pages.routes.ts` after the `recettes-colis` line (69):

```typescript
                { path: 'recettes-livraison', data: { kind: 'delivery' }, loadComponent: () => import('../../../_api/pages/treasury/recettes/list/recettes-list.component').then(m => m.RecettesListComponent) },
```

In `sidebar.service.ts` after the `Recette colis` entry (line 173):

```typescript
            { menuValue: 'Recette livraison', route: routes.trzRecettesLivraison, base: 'recettes-livraison', permission: 'treasury.income.view' },
```

- [ ] **Step 3: Add the `delivery` kind to recettes-list**

In `recettes-list.component.ts`:

```typescript
type Kind = 'voyage' | 'parcel' | 'baggage' | 'delivery' | 'other';
```
```typescript
const TITLES: Record<Kind, string> = {
  voyage: 'Recette voyage', parcel: 'Recette colis',
  baggage: 'Recette bagage', delivery: 'Recette livraison', other: 'Autre recette',
};
```

- [ ] **Step 4: Add the dashboard tile**

In `recettes-dashboard.component.html`, duplicate the parcel tile (lines 18-23) after the baggage tile, using `delivery_total`:

```html
      <div class="col-lg-3 col-sm-6 mb-3">
        <div class="card"><div class="card-body">
          <p class="mb-1 text-muted">{{ 'treasury.rec_dash.delivery_total' | transloco }}</p>
          <h4>{{ d.delivery_total | number:'1.0-0' }} FCFA</h4>
        </div></div>
      </div>
```

- [ ] **Step 5: Add i18n key**

In each `i18n/*.json`, under `treasury.rec_dash`, add `"delivery_total": "Livraison colis"` (translate per language).

- [ ] **Step 6: Verify build**

Run: `cd angular && npx tsc --noEmit -p tsconfig.app.json`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add angular/src/app/core/service/sidebar/sidebar.service.ts angular/src/app/core/helpers/routes.ts angular/src/app/features/pages/pages.routes.ts angular/src/_api/pages/treasury/recettes/ angular/public/i18n/*.json
git commit -m "feat(colis): sidebar Livraison colis + recettes Livraison line"
```

---

### Task 10: Item 2 — Retrait modal mandataire toggle

**Files:**
- Modify: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.ts`
- Modify: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.html` (pickup-modal, lines 140-154)
- Modify: i18n (`cons.parcels.*`)

- [ ] **Step 1: TS — add the toggle state**

In `parcels.component.ts`: add `pickupByMandataire = false;`. Update `askPickup`:

```typescript
  askPickup(p: Parcel): void { this.pickupTarget = p; this.pickupByMandataire = false; this.pickupName = ''; this.pickupId = ''; }
```

Replace `doPickup`:

```typescript
  doPickup(): void {
    if (!this.pickupTarget) return;
    const by = this.pickupByMandataire ? this.pickupName.trim() : this.pickupTarget.recipient_name;
    const idnum = this.pickupByMandataire ? this.pickupId.trim() : '';
    if (this.pickupByMandataire && (!by || !idnum)) return;
    this.svc.pickup(this.pickupTarget.id, by, idnum).subscribe({
      next: () => { this.pickupTarget = null; this.reload(); this.close('pickup-modal'); },
      error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }
```

- [ ] **Step 2: HTML — replace the pickup-modal body inputs**

In `parcels.component.html`, replace the two `<div class="mb-2">` name/CNI blocks (lines 150-151) with a toggle + conditional fields:

```html
    <div class="form-check form-switch mb-2">
      <input class="form-check-input" type="checkbox" id="mandataire-toggle" [(ngModel)]="pickupByMandataire" />
      <label class="form-check-label" for="mandataire-toggle">{{ 'cons.parcels.f_by_mandataire' | transloco }}</label>
    </div>
    @if (pickupByMandataire) {
      <div class="mb-2"><label class="form-label">{{ 'cons.parcels.f_mandataire_name' | transloco }} <span class="text-danger">*</span></label><input class="form-control" [(ngModel)]="pickupName" /></div>
      <div class="mb-2"><label class="form-label">{{ 'cons.parcels.f_mandataire_id' | transloco }} <span class="text-danger">*</span></label><input class="form-control" [(ngModel)]="pickupId" /></div>
    }
```

Update the confirm button (line 153) disabled condition:

```html
<button type="button" class="btn btn-success" [disabled]="pickupByMandataire && (!pickupName || !pickupId)" *hasPermission="'ticketing.parcel.manage'" (click)="doPickup()">{{ 'cons.parcels.pickup_confirm' | transloco }}</button>
```

- [ ] **Step 3: i18n keys**

Add to `cons.parcels` in all 4 files (FR shown):

```json
"f_by_mandataire": "Retiré par un mandataire",
"f_mandataire_name": "Nom du mandataire",
"f_mandataire_id": "CNI du mandataire",
```

- [ ] **Step 4: Verify build**

Run: `cd angular && npx tsc --noEmit -p tsconfig.app.json`
Expected: no errors.

- [ ] **Step 5: Manual verification**

Start the app (`cd angular && npm start`), open a parcel that is `available_for_pickup`, click the deliver/retrait action:
- toggle OFF → confirm works, no name asked (pickup uses recipient);
- toggle ON → Nom + CNI required, confirm disabled until both filled.

- [ ] **Step 6: Commit**

```bash
git add angular/src/_api/pages/voyages-consignment/parcels/ angular/public/i18n/*.json
git commit -m "feat(colis): retrait via mandataire toggle (name + CNI)"
```

---

### Task 11: Item 1 — Add-parcel form cleanup

**Files:**
- Modify: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.ts`
- Modify: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.html`
- Modify: i18n (`cons.parcels.f_contenance`)

- [ ] **Step 1: TS — drop recipient_address, add typeOptions**

In `parcels.component.ts`:
- Add field `typeOptions: any[] = [];`
- In `ngOnInit`, replace the types load: `this.ctSvc.list().subscribe(d => { this.types = d; this.typeOptions = d.map(t => ({ ...t, label_nature: t.nature_name ? `${t.label} - ${t.nature_name}` : t.label })); });`
- Remove `recipient_address: [''],` from the `form` group.
- In `openEdit`, remove the `recipient_address: p.recipient_address,` line.

- [ ] **Step 2: HTML — remove address, type shows nature, rename Description**

In `parcels.component.html`:
- Remove the address field block (line 114); make the id-number field full width by changing its wrapper to `col-md-12` (or keep `col-md-4` and let it sit alone — prefer `col-md-6`).
- Change the type select (line 120) to use the nature-combined list:

```html
        <app-searchable-select formControlName="consignment_type_id" [items]="typeOptions" labelKey="label_nature" valueKey="id" [placeholder]="'cons.common.opt_choose' | transloco"></app-searchable-select>
```

- Change the description label (line 125) to point at the new key:

```html
    <div class="mb-3"><label class="form-label">{{ 'cons.parcels.f_contenance' | transloco }}</label><input formControlName="description" class="form-control" /></div>
```

- [ ] **Step 3: i18n key**

Add `"f_contenance": "Contenance"` to `cons.parcels` in all 4 files (translate: en `Contents`, es `Contenido`, pt `Conteúdo`).

- [ ] **Step 4: Verify build**

Run: `cd angular && npx tsc --noEmit -p tsconfig.app.json`
Expected: no errors.

- [ ] **Step 5: Manual verification**

Open "Ajouter colis": no "Adresse destinataire" field; type dropdown options read "Type - Nature"; the content field is labelled "Contenance". Create a parcel and confirm it still saves (backend `recipient_address` defaults to "", `description` still sent).

- [ ] **Step 6: Commit**

```bash
git add angular/src/_api/pages/voyages-consignment/parcels/ angular/public/i18n/*.json
git commit -m "feat(colis): add-form cleanup (drop address, type-nature label, Contenance)"
```

---

### Task 12: Full verification + migration check

**Files:** none (verification only)

- [ ] **Step 1: Backend test suite (parcel + treasury)**

Run: `cd backend && pytest apps/voyages_consignment apps/treasury -q`
Expected: all pass.

- [ ] **Step 2: Migration integrity**

Run: `cd backend && python manage.py makemigrations --check --dry-run`
Expected: "No changes detected" (all model changes captured in Tasks 1-2 migrations).

- [ ] **Step 3: Frontend build**

Run: `cd angular && npm run build`
Expected: build succeeds, no errors.

- [ ] **Step 4: Manual end-to-end**

With the app running: register a parcel → advance it to `available_for_pickup` → open "Livraison colis" menu → search by ref → enter address + amount + payment method → Livrer → confirm success toast → open Trésorerie → Recettes → "Recette livraison": the delivery amount appears as its own line, and the recettes dashboard "Livraison colis" tile reflects it.

- [ ] **Step 5: Commit (if any verification fixups were needed)**

```bash
git add -A && git commit -m "chore(colis): verification fixups"
```

---

## Self-Review Notes

- **Spec coverage:** Item 1 → Task 11; Item 2 → Task 10; Item 3 → Tasks 1-9 (model, category, treasury helper, service, API, recettes backend, frontend services, livraison page, sidebar/recettes surfacing). Verification → Task 12.
- **Idempotency:** delivery transaction recorded with `link_obj=None` per Global Constraints — matches spec decision.
- **Type consistency:** `deliverHome` body `{delivery_amount, delivery_address, payment_method}` is identical in `parcel.service.ts` (Task 7), the livraison component (Task 8), and the DRF `ParcelDeliverSerializer` (Task 5). `IncomeKind`/`Kind` include `'delivery'` in both `income.service.ts` and `recettes-list.component.ts`. `delivery_total` produced in Task 6, consumed in Task 9.
- **Fixtures:** backend tasks reference fixtures (`available_parcel`, `open_cash_session`, `auth_client`) that already have analogues in `test_parcel_flow.py` / existing treasury tests — the implementer must reuse or replicate them (called out in each task).
