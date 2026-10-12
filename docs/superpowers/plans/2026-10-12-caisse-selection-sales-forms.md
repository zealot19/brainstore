# Sélection de la caisse sur les formulaires de vente — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (Native). Steps use checkbox (`- [ ]`).

**Goal:** Choisir la caisse avant un encaissement ; select « Caisse » sur Billets / Colis / Bagage / Régularisation, affiché mais verrouillé sauf admins & chefs d'agence.

**Spec:** `docs/superpowers/specs/2026-10-12-caisse-selection-sales-forms-design.md`

## Global Constraints

- `cash_register_id` est **optionnel** partout : absent → auto-résolution actuelle (non-régression).
- Espèces seulement : la caisse choisie doit avoir une session ouverte, sinon erreur.
- `can_select = is_admin OR has_permission(user, "treasury.session.manage")`.
- Assouplissement auth : `treasury.session.manage` ⇒ encaisser dans toute caisse de son agence ; admins partout ; guichetier limité à ses caisses gérées.

## Review Focus

- Caisse choisie **sans session ouverte** → erreur claire (pas de crash). Test Task 1.
- Chef encaisse dans une caisse **de son agence** non gérée → autorisé ; **autre agence** → refusé. Test Task 1.
- `cash_register_id` absent → comportement inchangé. Test Task 1.
- Guichetier : `can_select=false`, liste = sa caisse. Test Task 1.
- Non-espèces : `cash_register_id` ignoré (banque). Test Task 1 (implicite — pas de session requise).

---

## Task 1 : Backend — sélecteur, endpoint, auth, propagation

**Files:**
- Modify: `backend/apps/treasury/selectors/selectors.py` (`selectable_cash_registers`)
- Modify: `backend/apps/treasury/views.py` (`CashRegisterSelectView`)
- Modify: `backend/apps/treasury/urls.py` (1 route)
- Modify: `backend/apps/treasury/services/services.py` (`create_transaction` auth relax)
- Modify: `backend/apps/treasury/services/booking_sales.py` + `consignment_sales.py` (`cash_register_id`)
- Modify: `backend/apps/voyages_booking/services/{booking_services,reservation_services,adjustment_services}.py`
- Modify: `backend/apps/voyages_consignment/services/{parcel_services,baggage_services}.py`
- Modify: `backend/apps/voyages_booking/config_api/views.py` + `backend/apps/voyages_consignment/config_api/views.py`
- Create: `backend/apps/treasury/tests/test_caisse_selection.py`

**Interfaces:**
- Produces: `selectable_cash_registers(user, company)`, `GET /treasury/selectable-registers/`, `cash_register_id` kwarg on the 5 record_* callers.

- [ ] **Step 1 : Test rouge** — `test_caisse_selection.py` :

```python
import pytest
from decimal import Decimal
from apps.authentication.models import User


def _setup():
    from apps.system_config.services import create_company
    from apps.treasury.services import create_cash_register, open_session
    company, setup = create_company(name="CZCo", admin_email="cz@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="cz@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    reg2 = create_cash_register(company=company, name="C2", created_by=admin)
    return dict(company=company, admin=admin, reg=reg, reg2=reg2, hq=setup["hq_agency_id"])


@pytest.mark.django_db
def test_selectable_registers_admin_sees_all_and_can_select():
    from apps.treasury.selectors import selectable_cash_registers
    g = _setup()
    out = selectable_cash_registers(g["admin"], g["company"])
    assert out["can_select"] is True
    assert {str(g["reg"].id), str(g["reg2"].id)} <= {str(r["id"]) for r in out["registers"]}


@pytest.mark.django_db
def test_income_into_chosen_register_requires_open_session():
    from apps.treasury.services import create_cash_register, open_session, record_booking_payment
    from apps.treasury.models import Transaction
    from apps.core.exceptions import ApplicationError
    from apps.voyages_booking.models import Booking
    g = _setup()
    # Caisse sans session ouverte -> erreur.
    bk = Booking.objects.create(company=g["company"], trip_type="one_way", reference="B1",
                                amount_due=Decimal("1000"), channel="agence")
    with pytest.raises(ApplicationError):
        record_booking_payment(g["company"], booking=bk, amount=Decimal("1000"),
                               payment_method="cash", user=g["admin"], cash_register_id=str(g["reg"].id))
    # Session ouverte -> posté dans CETTE caisse.
    open_session(company=g["company"], cash_register=g["reg2"], created_by=g["admin"])
    bk2 = Booking.objects.create(company=g["company"], trip_type="one_way", reference="B2",
                                 amount_due=Decimal("1000"), channel="agence")
    txn = record_booking_payment(g["company"], booking=bk2, amount=Decimal("1000"),
                                 payment_method="cash", user=g["admin"], cash_register_id=str(g["reg2"].id))
    assert txn is not None and txn.cash_session.cash_register_id == g["reg2"].id


@pytest.mark.django_db
def test_no_register_id_keeps_auto_resolution():
    from apps.treasury.services import open_session, record_booking_payment
    from apps.voyages_booking.models import Booking
    g = _setup()
    open_session(company=g["company"], cash_register=g["reg"], created_by=g["admin"])
    bk = Booking.objects.create(company=g["company"], trip_type="one_way", reference="B3",
                                amount_due=Decimal("1000"), channel="agence")
    txn = record_booking_payment(g["company"], booking=bk, amount=Decimal("1000"),
                                 payment_method="cash", user=g["admin"])
    assert txn is not None  # auto-résolu sur la session ouverte de l'admin
```

- [ ] **Step 2 : rouge** — `cd backend && ../env/bin/python -m pytest apps/treasury/tests/test_caisse_selection.py -q --create-db`. Expected: FAIL (TypeError `cash_register_id` / ImportError `selectable_cash_registers`).

- [ ] **Step 3 : Sélecteur** — dans `selectors/selectors.py` :

```python
def selectable_cash_registers(user, company):
    """Caisses sélectionnables à l'encaissement (M)."""
    from apps.treasury.models import CashRegister
    from apps.treasury.services.services import _is_admin
    from apps.treasury.scoping import register_agency_scope
    from apps.admin_rbac.selectors.user_role_selectors import has_permission

    is_admin = _is_admin(user)
    chef = is_admin or has_permission(user, "treasury.session.manage", company.id)
    scoped, agency_id = register_agency_scope(user)

    qs = CashRegister.objects.filter(company=company, is_deleted=False)
    if is_admin:
        pass  # toutes les agences
    elif chef and agency_id:
        qs = qs.filter(agency_id=agency_id)
    else:
        own = CashRegister.objects.filter(company=company, is_deleted=False, managers=user)
        cur = get_open_session_for_user(company.id, user)
        ids = set(own.values_list("id", flat=True))
        if cur:
            ids.add(cur.cash_register_id)
        qs = CashRegister.objects.filter(company=company, is_deleted=False, id__in=ids)

    registers = []
    for r in qs.select_related("agency").order_by("name"):
        registers.append({
            "id": r.id, "name": r.name,
            "agency_id": r.agency_id, "agency_name": r.agency.name if r.agency_id else None,
            "has_open_session": get_active_session(r.id, company.id) is not None,
        })
    cur = get_open_session_for_user(company.id, user)
    return {"registers": registers, "can_select": bool(chef),
            "default_id": cur.cash_register_id if cur else None}
```

- [ ] **Step 4 : Export** — ajouter `selectable_cash_registers` à `apps/treasury/selectors/__init__.py` (suivre le motif d'export existant).

- [ ] **Step 5 : Vue + URL** — dans `views.py` :

```python
class CashRegisterSelectView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        company = _company(request)
        return Response(selectors.selectable_cash_registers(request.user, company))
```
URL (`urls.py`) : `path("selectable-registers/", views.CashRegisterSelectView.as_view(), name="selectable-registers")`.
(Vérifier `selectors` importé dans views.py ; sinon `from apps.treasury import selectors`.)

- [ ] **Step 6 : Résolution caisse (helpers)** — `booking_sales.py` : `_record_income(... , cash_register_id=None)` ; remplacer la branche espèces :

```python
    if is_cash:
        if cash_register_id:
            from apps.treasury.selectors import get_active_session
            session = get_active_session(cash_register_id, company.id)
            if not session:
                raise ApplicationError(_("La caisse choisie n'a pas de session ouverte."))
        else:
            session = get_open_session_for_user(company.id, user)
            if not session:
                raise ApplicationError(_("Ouvrez d'abord votre session de caisse pour encaisser une vente au comptant."))
        txn = create_transaction(account_type=Transaction.AccountType.CASH, cash_session=session, **common)
```
Propager `cash_register_id` depuis `record_booking_payment` et `record_adjustment_income` vers `_record_income`. Idem dans `consignment_sales._record_consignment_payment` (+ `record_parcel_payment`, `record_parcel_delivery`, `record_baggage_payment`).

- [ ] **Step 7 : Auth relax** — `create_transaction` (services.py), remplacer le garde CASH :

```python
        from apps.treasury.scoping import register_agency_scope
        scoped, _agency = register_agency_scope(created_by)
        if scoped and not is_cash_manager(created_by, cash_session.cash_register):
            from apps.admin_rbac.selectors.user_role_selectors import has_permission
            chef = has_permission(created_by, "treasury.session.manage", company.id)
            if not (chef and cash_session.cash_register.agency_id == _agency):
                raise ApplicationError(_("Vous n'êtes pas autorisé à opérer sur cette caisse."))
```

- [ ] **Step 8 : Propagation services** — ajouter `cash_register_id=None` et le transmettre :
  - `create_booking(...)` → `record_booking_payment(..., cash_register_id=cash_register_id)`.
  - `pay_reservation(...)` → `record_booking_payment(..., cash_register_id=cash_register_id)`.
  - `regularize_ticket(...)` → `record_adjustment_income(..., cash_register_id=cash_register_id)`.
  - `register_parcel(...)` → `record_parcel_payment(..., cash_register_id=cash_register_id)`.
  - `deliver_parcel_home(...)` → `record_parcel_delivery(..., cash_register_id=cash_register_id)`.
  - `add_baggage(...)` → `record_baggage_payment(..., cash_register_id=cash_register_id)`.

- [ ] **Step 9 : Vues → service** — dans chaque vue POST, lire `cid = request.data.get("cash_register_id")` et le passer :
  - `voyages_booking/config_api/views.py` : `create_booking` (l.171), `create_reservation` (l.196 — accepte aussi `cash_register_id`), `pay_reservation` (l.217), `regularize_ticket` (l.751).
  - `voyages_consignment/config_api/views.py` : `register_parcel` (l.61), `add_baggage` (l.327), livraison à domicile.

- [ ] **Step 10 : vert + non-régression + check** — `pytest apps/treasury/tests/test_caisse_selection.py -q --create-db` (3 vert) ; `pytest apps/treasury apps/voyages_booking apps/voyages_consignment -q --reuse-db -p no:cacheprovider` (comparer base rouge) ; `makemigrations --check` → aucune.

- [ ] **Step 11 : Commit** — `git commit -m "feat(treasury): caisse selection backend — selectable registers + cash_register_id routing + chef auth relax"`

---

## Task 2 : Frontend — service + composant `app-caisse-select`

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (endpoint)
- Modify: `angular/src/_api/services/treasury/session.service.ts` (`selectableRegisters`)
- Create: `angular/src/_api/pages/shared/caisse-select/caisse-select.component.ts`

**Interfaces:**
- Consumes: `GET /treasury/selectable-registers/`.
- Produces: `<app-caisse-select [(value)]="cashRegisterId">`.

- [ ] **Step 1 : Endpoint** — `api.config.ts`, bloc `TREASURY` : `selectableRegisters: `${TRZ}/selectable-registers/`,`.

- [ ] **Step 2 : Service** — `session.service.ts` :
```ts
selectableRegisters(): Observable<{ registers: {id:string;name:string;agency_name:string|null;has_open_session:boolean}[]; can_select:boolean; default_id:string|null }> {
  return this.http.get<any>(TREASURY.selectableRegisters).pipe(map(r => r.data ?? r));
}
```

- [ ] **Step 3 : Composant** — `caisse-select.component.ts` (standalone, inline template) :
```ts
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { SessionService } from '../../../services/treasury/session.service';

@Component({
  selector: 'app-caisse-select',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule],
  template: `
    <label class="form-label">{{ 'treasury.caisse_select.label' | transloco }}</label>
    <select class="form-select" [ngModel]="value" (ngModelChange)="onChange($event)" [disabled]="!canSelect">
      <option [ngValue]="null">{{ 'treasury.caisse_select.auto' | transloco }}</option>
      @for (r of registers; track r.id) {
        <option [ngValue]="r.id">{{ r.name }}@if (!r.has_open_session) { — {{ 'treasury.caisse_select.closed' | transloco }} }</option>
      }
    </select>
    @if (!canSelect) { <small class="text-muted">{{ 'treasury.caisse_select.locked_hint' | transloco }}</small> }
  `,
})
export class CaisseSelectComponent implements OnInit {
  private svc = inject(SessionService);
  @Input() value: string | null = null;
  @Output() valueChange = new EventEmitter<string | null>();
  registers: any[] = []; canSelect = false;
  ngOnInit(): void {
    this.svc.selectableRegisters().subscribe({ next: d => {
      this.registers = d.registers || []; this.canSelect = !!d.can_select;
      if (this.value == null && d.default_id) { this.value = d.default_id; this.valueChange.emit(this.value); }
    }, error: () => {} });
  }
  onChange(v: string | null): void { this.value = v; this.valueChange.emit(v); }
}
```

- [ ] **Step 4 : Build** — `cd angular && npx ng build --configuration development` (composant compile isolément).

- [ ] **Step 5 : Commit** — `git commit -m "feat(treasury): caisse-select shared component + service (frontend)"`

---

## Task 3 : Frontend — intégration aux 4 formulaires + i18n

**Files:**
- Modify: `new-booking.component.{ts,html}` (Billets)
- Modify: `parcels.component.{ts,html}` (Colis)
- Modify: `baggage.component.{ts,html}` (Bagage)
- Modify: `booking-detail.component.{ts,html}` (Régularisation, M21)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

- [ ] **Step 1 : Billets** — `new-booking` : importer `CaisseSelectComponent` ; champ `cashRegisterId: string|null = null` ; `<app-caisse-select [(value)]="cashRegisterId">` près du mode de paiement ; ajouter `cash_register_id: this.cashRegisterId` au corps de `create(...)`.

- [ ] **Step 2 : Colis** — `parcels` : idem dans la modale d'enregistrement ; ajouter `cash_register_id` au corps `create(...)`.

- [ ] **Step 3 : Bagage** — `baggage` : idem ; ajouter `cash_register_id` au corps `create(...)`.

- [ ] **Step 4 : Régularisation** — `booking-detail` : `<app-caisse-select [(value)]="rgCaisse">` dans la modale de régularisation ; ajouter `cash_register_id: this.rgCaisse` au corps `regularizeTicket(...)`.

- [ ] **Step 5 : i18n** — clés `treasury.caisse_select.{label,auto,closed,locked_hint}` (fr/en/es/pt) :
  - fr : « Caisse » / « — Automatique (ma caisse) — » / « fermée » / « Caisse fixée à la vôtre. »
  - en : "Cash register" / "— Automatic (my register) —" / "closed" / "Register fixed to yours."
  - es : "Caja" / "— Automático (mi caja) —" / "cerrada" / "Caja fijada a la suya."
  - pt : "Caixa" / "— Automático (minha caixa) —" / "fechada" / "Caixa fixada na sua."

- [ ] **Step 6 : Build** — `npx ng build --configuration development` → complete, sans erreur.

- [ ] **Step 7 : Commit** — `git commit -m "feat(treasury): caisse select on Billets/Colis/Bagage/Régularisation forms (M)"`

---

## Notes

- `create_booking`/`register_parcel`/`add_baggage` ont des signatures à **mot-clé** : ajouter `cash_register_id=None` ne casse aucun appel existant.
- `Booking.objects.create(...)` du test : vérifier les champs obligatoires à l'exécution (channel, trip_type) — ruling si un champ manque.
- Base rouge treasury/voyages_* : comparer avant d'imputer une régression.
