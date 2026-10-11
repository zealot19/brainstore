# M15 recettes — Résultat par voyage — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (Native) to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Afficher, pour un voyage, ses recettes (tickets, colis vente, colis transit, bagages), ses dépenses décaissées, et le résultat (recettes − dépenses), sur la page trip-detail.

**Architecture:** Un sélecteur `trip_result(trip)` agrège les `Transaction` VALIDATED de recette par catégorie, via les FKs vivantes vers `voyages_trips.Trip` ; les dépenses = `TripExpense` décaissées. Exposé par `GET /voyages/trips/<id>/result/` et affiché dans une carte sur trip-detail.

**Tech Stack:** Django/DRF, Angular standalone + Transloco.

**Spec:** `docs/superpowers/specs/2026-10-11-m15-voyage-result-design.md`

## Global Constraints

- Recettes = `Transaction` avec `company = trip.company`, `is_deleted=False`, `status = VALIDATED`, `transaction_type = INCOME`.
- Attribution billets = voyage **aller** (`voyage_booking__outbound_trip`), jamais le retour.
- Dépenses = `TripExpense` `status = PAID`, `is_deleted=False`, `trip = T`.
- Montants : `Decimal`, défaut `0`. Résultat peut être négatif.
- Permission lecture : `voyage.trip.view`. Scoping société via le voyage.

## Review Focus

- **Transaction PENDING ou supprimée** comptée par erreur → le filtre `status=VALIDATED, is_deleted=False` doit l'exclure. Test Task 1.
- **Recette billets d'un A/R comptée sur le retour** → filtrer sur `outbound_trip` uniquement ; le voyage retour affiche 0. Test Task 1.
- **Dépense PLANNED comptée** → seules les `PAID` comptent. Test Task 1.
- **Colis/bagage d'un autre voyage** agrégé → les jointures `voyages_parcel__trip`/`voyages_baggage__trip` bornent au voyage. Test Task 1.
- **Voyage sans aucun flux** → toutes les lignes à 0, résultat 0 (pas d'erreur `None`). Test Task 1.

---

## Task 1 : Backend — sélecteur + endpoint

**Files:**
- Create: `backend/apps/voyages_trips/selectors/result_selectors.py`
- Modify: `backend/apps/voyages_trips/selectors/__init__.py`
- Modify: `backend/apps/voyages_trips/views.py` (`TripResultView`)
- Modify: `backend/apps/voyages_trips/urls.py` (1 route)
- Create: `backend/apps/voyages_trips/tests/test_m15_result.py`

**Interfaces:**
- Consumes: `apps.treasury.models.Transaction`, `apps.voyages_trips.models.TripExpense`, `selectors.get_trip`.
- Produces: `trip_result(trip) -> dict`, `GET /voyages/trips/<uuid:trip_id>/result/`.

- [ ] **Step 1 : Test rouge** — créer `test_m15_result.py` :

```python
import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User


def _setup():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import (Town, ServicePoint, Route, FareClass, SeatingPlan,
                                            ConsignmentNature, ConsignmentType)
    from apps.voyages_trips.models import Trip, TripExpense
    from apps.voyages_trips.services.assignment import materialise_seats
    from apps.voyages_pricing.models import Fare
    from apps.treasury.services import create_cash_register, open_session
    from apps.voyages_consignment.models import Parcel, Baggage
    from apps.treasury.models import Transaction
    from apps.treasury.services.services import create_transaction

    company, _ = create_company(name="M15Co", admin_email="m15@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="m15@x.com")
    town = Town.objects.create(company=company, name="Dla")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="Gare A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="Gare B")
    route = Route.objects.create(company=company, code="A-B", origin=a, destination=b)
    eco = FareClass.objects.create(company=company, code="ECO", name="Éco", rank=1)
    plan = SeatingPlan.objects.create(company=company, code="P1", name="P1", total_seats=6, blocked_seats=0)
    now = timezone.now() + timedelta(days=1)

    def _trip(offset):
        dep = now + timedelta(days=offset)
        t = Trip.objects.create(company=company, route=route, fare_class=eco, origin=a, destination=b,
                                seating_plan=plan, scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=3),
                                status="pending")
        materialise_seats(t)
        return t
    trip = _trip(0)
    other = _trip(5)
    Fare.objects.create(company=company, route=route, origin_point=a, destination_point=b,
                        fare_class=eco, trip_type="one_way", amount=Decimal("15000"))
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    session = open_session(company=company, cash_register=reg, created_by=admin)

    # Vente de tickets (recette réelle via create_booking → txn ticket_sales VALIDATED liée au outbound_trip)
    from apps.voyages_booking.services.booking_services import create_booking
    seat = trip.seats.order_by("column").first()
    create_booking(company, trip_type="one_way", outbound_trip=trip, return_trip=None,
                   buyer_spec={"name": "Cli", "phone": "6"},
                   items=[{"passenger": {"name": "Cli", "phone": "6"}, "destination_point_id": None,
                           "outbound_seat_id": str(seat.id)}],
                   payment_method="cash", user=admin)

    nature = ConsignmentNature.objects.create(company=company, code="STD", name="Standard")
    ctype = ConsignmentType.objects.create(company=company, code="CT", label="Type", nature=nature)
    parcel = Parcel.objects.create(company=company, status="registered", origin_point=a, destination_point=b,
                                   consignment_type=ctype, trip=trip, sender_name="E", sender_phone="6",
                                   recipient_name="R", recipient_phone="7")
    baggage = Baggage.objects.create(company=company, trip=trip)

    def _income(category, amount, **fk):
        txn = create_transaction(company=company, transaction_type=Transaction.Type.INCOME,
                                 category=category, account_type=Transaction.AccountType.CASH,
                                 cash_session=session, amount=Decimal(str(amount)), payment_mode="cash",
                                 created_by=admin)
        for k, v in fk.items():
            setattr(txn, k, v)
        txn.save()
        return txn

    _income(Transaction.Category.PARCEL_SHIPPING, 5000, voyages_parcel=parcel)   # colis vente
    _income(Transaction.Category.PARCEL_DELIVERY, 2000, voyages_parcel=parcel)   # colis transit
    _income(Transaction.Category.BAGGAGE, 1000, voyages_baggage=baggage)         # bagage transit
    # Bruit : même catégories mais rattachées à un AUTRE voyage → exclues
    other_parcel = Parcel.objects.create(company=company, status="registered", origin_point=a, destination_point=b,
                                         consignment_type=ctype, trip=other, sender_name="E", sender_phone="6",
                                         recipient_name="R", recipient_phone="7")
    _income(Transaction.Category.PARCEL_SHIPPING, 9999, voyages_parcel=other_parcel)

    # Dépenses : une décaissée (compte), une planifiée (exclue)
    et = _expense_type(company)
    TripExpense.objects.create(company=company, trip=trip, expense_type=et, amount=Decimal("3000"), status="paid")
    TripExpense.objects.create(company=company, trip=trip, expense_type=et, amount=Decimal("4000"), status="planned")

    return dict(company=company, trip=trip, other=other, admin=admin)


def _expense_type(company):
    from apps.voyages_config.models import ExpenseType
    return ExpenseType.objects.create(company=company, code="CARB", name="Carburant")


@pytest.mark.django_db
def test_trip_result_breakdown():
    from apps.voyages_trips.selectors import trip_result
    g = _setup()
    r = trip_result(g["trip"])
    assert r["recettes"]["tickets"] == Decimal("15000")
    assert r["recettes"]["colis_vente"] == Decimal("5000")
    assert r["recettes"]["colis_transit"] == Decimal("2000")
    assert r["recettes"]["bagages"] == Decimal("1000")
    assert r["recettes"]["total"] == Decimal("23000")
    assert r["depenses_total"] == Decimal("3000")        # PLANNED 4000 exclue
    assert r["resultat"] == Decimal("20000")


@pytest.mark.django_db
def test_trip_result_other_trip_empty():
    from apps.voyages_trips.selectors import trip_result
    g = _setup()
    r = trip_result(g["other"])
    # Le voyage « other » n'a que le colis de bruit (5000 shipping), rien d'autre.
    assert r["recettes"]["tickets"] == Decimal("0")
    assert r["recettes"]["colis_vente"] == Decimal("9999")
    assert r["recettes"]["bagages"] == Decimal("0")
    assert r["depenses_total"] == Decimal("0")
    assert r["resultat"] == Decimal("9999")
```

- [ ] **Step 2 : rouge** — `cd backend && ../env/bin/python -m pytest apps/voyages_trips/tests/test_m15_result.py -q --create-db`. Expected: FAIL (ImportError: `trip_result`).

- [ ] **Step 3 : Sélecteur** — créer `result_selectors.py` :

```python
from decimal import Decimal
from django.db.models import Sum
from apps.treasury.models import Transaction
from apps.voyages_trips.models import TripExpense


def _d(v):
    return v if v is not None else Decimal("0")


def trip_result(trip):
    """Recettes / dépenses / résultat d'un voyage (M15)."""
    income = Transaction.objects.filter(
        company_id=trip.company_id, is_deleted=False,
        status=Transaction.Status.VALIDATED,
        transaction_type=Transaction.Type.INCOME,
    )

    def _sum(category, **flt):
        return _d(income.filter(category=category, **flt).aggregate(s=Sum("amount"))["s"])

    tickets       = _sum(Transaction.Category.TICKET_SALES,    voyage_booking__outbound_trip_id=trip.id)
    colis_vente   = _sum(Transaction.Category.PARCEL_SHIPPING, voyages_parcel__trip_id=trip.id)
    colis_transit = _sum(Transaction.Category.PARCEL_DELIVERY, voyages_parcel__trip_id=trip.id)
    bagages       = _sum(Transaction.Category.BAGGAGE,         voyages_baggage__trip_id=trip.id)
    recettes_total = tickets + colis_vente + colis_transit + bagages

    depenses_total = _d(TripExpense.objects.filter(
        trip_id=trip.id, is_deleted=False, status=TripExpense.Status.PAID,
    ).aggregate(s=Sum("amount"))["s"])

    return {
        "recettes": {
            "tickets": tickets, "colis_vente": colis_vente,
            "colis_transit": colis_transit, "bagages": bagages,
            "total": recettes_total,
        },
        "depenses_total": depenses_total,
        "resultat": recettes_total - depenses_total,
    }
```

- [ ] **Step 4 : Export** — dans `selectors/__init__.py` ajouter :

```python
from .result_selectors import trip_result
```

- [ ] **Step 5 : Vue** — ajouter dans `views.py` (après `TripExpense...` / à la suite des vues voyage) :

```python
class TripResultView(APIView):
    """M15 — recettes / dépenses / résultat d'un voyage."""
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.trip.view"}

    def get(self, request, trip_id):
        company, err = _scope(request)
        if err:
            return err
        trip = selectors.get_trip(company, trip_id)
        if not trip:
            return error_response("Voyage introuvable.", status_code=404)
        return success_response(selectors.trip_result(trip))
```

- [ ] **Step 6 : URL** — dans `urls.py`, à côté des routes `<uuid:trip_id>/expenses/` :

```python
    path("<uuid:trip_id>/result/", v.TripResultView.as_view()),
```

- [ ] **Step 7 : vert** — `../env/bin/python -m pytest apps/voyages_trips/tests/test_m15_result.py -q --create-db`. Expected: 2 passed.

- [ ] **Step 8 : non-régression + check** — `../env/bin/python -m pytest apps/voyages_trips -q --reuse-db -p no:cacheprovider` (comparer à la base rouge connue du module) ; `../env/bin/python manage.py makemigrations --check --dry-run` → `No changes detected`.

- [ ] **Step 9 : Commit** — `git commit -m "feat(voyages): per-trip result selector + endpoint (M15)"`

---

## Task 2 : Frontend — carte « Résultat du voyage »

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (endpoint `tripResult`)
- Modify: `angular/src/_api/services/voyages/trip.service.ts` (`tripResult`)
- Modify: `angular/src/_api/models/voyages.models.ts` (`TripResult`)
- Modify: `angular/src/_api/pages/voyages/trip-detail/trip-detail.component.{ts,html}`
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

**Interfaces:**
- Consumes: `GET /voyages/trips/<id>/result/` (Task 1).

- [ ] **Step 1 : Endpoint** — dans `api.config.ts`, bloc `VOYAGES`, après `tripExpense` :

```ts
  tripResult: (id: string) => `${VT}/${id}/result/`,
```

- [ ] **Step 2 : Modèle** — dans `voyages.models.ts` :

```ts
export interface TripResult {
  recettes: { tickets: string; colis_vente: string; colis_transit: string; bagages: string; total: string };
  depenses_total: string;
  resultat: string;
}
```

- [ ] **Step 3 : Service** — dans `trip.service.ts`, importer `TripResult` et ajouter :

```ts
  tripResult(id: string): Observable<TripResult> { return this.http.get<TripResult>(VOYAGES.tripResult(id)); }
```

- [ ] **Step 4 : Composant TS** — dans `trip-detail.component.ts` : importer `TripResult` ; ajouter `result: TripResult | null = null;` ; dans `reload()`, après le chargement des dépenses, ajouter `this.svc.tripResult(this.id).subscribe({ next: r => this.result = r, error: () => this.result = null });`

- [ ] **Step 5 : Composant HTML** — dans `trip-detail.component.html`, ajouter une carte (p.ex. dans la colonne latérale, après les dépenses/équipage) :

```html
@if (result) {
  <div class="card mb-3"><div class="card-header"><h6 class="mb-0">{{ 'trips.detail.result.title' | transloco }}</h6></div>
    <div class="card-body">
      <ul class="list-group list-group-flush mb-2">
        <li class="list-group-item d-flex justify-content-between px-0"><span>{{ 'trips.detail.result.tickets' | transloco }}</span><strong>{{ result.recettes.tickets | number:'1.0-0' }}</strong></li>
        <li class="list-group-item d-flex justify-content-between px-0"><span>{{ 'trips.detail.result.colis_vente' | transloco }}</span><strong>{{ result.recettes.colis_vente | number:'1.0-0' }}</strong></li>
        <li class="list-group-item d-flex justify-content-between px-0"><span>{{ 'trips.detail.result.colis_transit' | transloco }}</span><strong>{{ result.recettes.colis_transit | number:'1.0-0' }}</strong></li>
        <li class="list-group-item d-flex justify-content-between px-0"><span>{{ 'trips.detail.result.bagages' | transloco }}</span><strong>{{ result.recettes.bagages | number:'1.0-0' }}</strong></li>
        <li class="list-group-item d-flex justify-content-between px-0 fw-semibold"><span>{{ 'trips.detail.result.recettes_total' | transloco }}</span><strong>{{ result.recettes.total | number:'1.0-0' }} XAF</strong></li>
        <li class="list-group-item d-flex justify-content-between px-0"><span>{{ 'trips.detail.result.depenses' | transloco }}</span><strong class="text-danger">− {{ result.depenses_total | number:'1.0-0' }} XAF</strong></li>
      </ul>
      <div class="d-flex justify-content-between align-items-center">
        <span class="fw-semibold">{{ 'trips.detail.result.resultat' | transloco }}</span>
        <span class="badge fs-6" [ngClass]="(+result.resultat >= 0) ? 'bg-success' : 'bg-danger'">{{ result.resultat | number:'1.0-0' }} XAF</span>
      </div>
    </div>
  </div>
}
```

- [ ] **Step 6 : i18n** — ajouter sous `trips.detail` dans les 4 fichiers le bloc `result` :

fr :
```json
"result": { "title": "Résultat du voyage", "tickets": "Vente de tickets", "colis_vente": "Vente de colis", "colis_transit": "Transit des colis", "bagages": "Transit des bagages", "recettes_total": "Total recettes", "depenses": "Dépenses décaissées", "resultat": "Résultat" }
```
en : `"Trip result" / "Ticket sales" / "Parcel sales" / "Parcel transit" / "Baggage transit" / "Total revenue" / "Disbursed expenses" / "Result"`
es : `"Resultado del viaje" / "Venta de billetes" / "Venta de paquetes" / "Tránsito de paquetes" / "Tránsito de equipajes" / "Total ingresos" / "Gastos desembolsados" / "Resultado"`
pt : `"Resultado da viagem" / "Venda de bilhetes" / "Venda de encomendas" / "Trânsito de encomendas" / "Trânsito de bagagens" / "Total de receitas" / "Despesas desembolsadas" / "Resultado"`

- [ ] **Step 7 : Build** — `cd angular && npx ng build --configuration development` → `Application bundle generation complete`, sans erreur.

- [ ] **Step 8 : Commit** — `git commit -m "feat(voyages): trip result card on trip-detail (M15 frontend)"`

---

## Notes

- `ExpenseType` : champs `code` + `name` (voir `voyages_config`). Si le nom de champ diffère à l'exécution, l'ajuster dans le fixture (ruling à consigner).
- Le dict renvoyé par l'endpoint sérialise les `Decimal` via le renderer DRF (nombres/chaînes) ; le frontend lit des `string` et convertit avec `+` pour la couleur.
- Base rouge voyages_trips : comparer avant d'imputer une régression (M15 start-gate, auto-transition, trip-expense disburse peuvent être rouges au départ).
