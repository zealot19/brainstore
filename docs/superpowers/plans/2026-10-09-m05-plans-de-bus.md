# M05 — Plans de bus — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Plans de bus définis par compteurs (total/bloquées, vendables calculées), sans éditeur visuel ni affectation séparée ; un bus porte un plan ; les `TripSeat` sont générés 1..N depuis les compteurs.

**Architecture:** Suppression atomique des modèles `PlanSeat` (éditeur visuel) et `VehicleSeatingAssignment` (affectation). `SeatingPlan` devient numérique ; `Vehicle` gagne une FK `seating_plan`. `materialise_seats` génère les `TripSeat` depuis les compteurs ; `active_seating_plan(vehicle)` renvoie `vehicle.seating_plan`. Le retrait d'un modèle casse serializers/vues/seed/sync/services d'un bloc → tout le backend tient dans une tâche ; le frontend suit.

**Tech Stack:** Django + DRF, pytest (`../env/bin/python -m pytest <path> -q --reuse-db` depuis `backend/`), migrations ; Angular standalone + Transloco, `npx ng build --configuration development`.

**Spec:** `docs/superpowers/specs/2026-10-09-m05-plans-de-bus-design.md`

## Global Constraints

- UI/texte en français. Commits as shimi, sans trailer Claude. Merge/push `deploy` seulement sur demande.
- Décision validée : **sièges numérotés conservés, générés 1..N** ; pas d'option « sans numéro ».
- Ne pas toucher `apps/fleet` *assignments* (affectation véhicule/chauffeur) ni le frontend `fleet/assignments` : seul l'écran `voyages-config/vehicle-assignments` (affectation de plan) est supprimé.
- Préserver la règle existante de `assign_vehicle` : ne jamais réécraser des `TripSeat` déjà générés.
- `makemigrations --check --dry-run` = « No changes detected » en fin de tâche 1.

## Review Focus

- **blocked_seats == total_seats** (0 vendable) accepté ; **blocked_seats > total_seats** refusé proprement. → Task 1, `test_plan_coherence`.
- **Voyage déjà pourvu de sièges** + changement de véhicule/plan → sièges existants préservés. → Task 1, `test_assign_vehicle_keeps_existing_seats`.
- **Véhicule sans seating_plan** affecté à un voyage sans plan → aucun siège, pas de 500. → Task 1, `test_assign_vehicle_without_plan_no_seats`.
- **Backfill** : plan sans PlanSeat garde son total ; véhicule sans affectation → seating_plan NULL. → Task 1, couvert par la migration + `test_materialise_from_counts`.
- **Sync** : `PlanSeat` retiré du registre CDC sans référence morte. → Task 1, Step « sync ».

---

## Task 1 : Backend — SeatingPlan numérique, suppression PlanSeat/affectation, génération des sièges, Vehicle.seating_plan

**Files:**
- Modify: `backend/apps/voyages_config/models/seating.py`
- Modify: `backend/apps/fleet/models/vehicle.py`
- Create: migrations `voyages_config` (remove rows/columns, add blocked_seats, delete PlanSeat + VehicleSeatingAssignment, data backfill) and `fleet` (add Vehicle.seating_plan)
- Modify: `backend/apps/voyages_trips/services/assignment.py` (`materialise_seats`)
- Modify: `backend/apps/voyages_trips/selectors/eligibility.py` (`active_seating_plan`)
- Modify: `backend/apps/voyages_config/config_api/serializers.py` (SeatingPlan Read/Write ; remove PlanSeatRead + VehicleSeatingAssignment serializers)
- Modify: `backend/apps/voyages_config/config_api/views.py` (remove SeatingPlanSeatsView + VehicleSeatingAssignment views)
- Modify: `backend/apps/voyages_config/urls.py` (remove `/seats/` + `vehicle-seating-assignments/*`)
- Modify: `backend/apps/voyages_config/models/__init__.py` (drop PlanSeat/VehicleSeatingAssignment exports)
- Modify: `backend/apps/voyages_config/admin.py` (drop PlanSeat/VehicleSeatingAssignment admin)
- Modify: `backend/apps/voyages_config/services/defaults_seed.py` (`_SEATING_PLANS` numeric, no PlanSeat)
- Modify: `backend/apps/sync/registrations.py` (remove `voyages_config.PlanSeat`)
- Modify: `backend/apps/fleet` vehicle serializers + create view/service (`seating_plan_id` write, `seating_plan_code` read)
- Modify: `backend/apps/voyages_booking/management/commands/seed_voyageur_express.py`, `seed_voyages_demo.py`
- Create: `backend/apps/voyages_config/test_plans_numeriques.py`
- Modify (sweep): tests referencing `PlanSeat`/`VehicleSeatingAssignment`/`rows=`/`columns=` (transbord selectors tests, config api tests, eligibility, trips)

**Interfaces:**
- Produces: `SeatingPlan(code,name,total_seats,blocked_seats)` + `sellable_seats` property ; `Vehicle.seating_plan` FK ; `active_seating_plan(vehicle, on_date=None)->vehicle.seating_plan` ; `materialise_seats` from counts. No `PlanSeat`, no `VehicleSeatingAssignment`.

- [ ] **Step 1 : Tests qui échouent** — `backend/apps/voyages_config/test_plans_numeriques.py`

```python
import pytest
from django.core.exceptions import ValidationError as DjangoValidationError
from apps.voyages_config.models import SeatingPlan


@pytest.fixture
def ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, setup = create_company(name="PlanCo", admin_email="plan@x.com",
                                    admin_first_name="A", admin_last_name="B")
    return company, setup, User.objects.get(email="plan@x.com")


def test_plan_has_no_visual_fields():
    names = {f.name for f in SeatingPlan._meta.get_fields()}
    assert "rows" not in names and "columns" not in names
    assert "blocked_seats" in names
    # PlanSeat / VehicleSeatingAssignment supprimés
    import apps.voyages_config.models as m
    assert not hasattr(m, "PlanSeat")
    assert not hasattr(m, "VehicleSeatingAssignment")


@pytest.mark.django_db
def test_plan_coherence(ctx):
    company, setup, user = ctx
    p = SeatingPlan(company=company, code="P1", name="70 places", total_seats=70, blocked_seats=4)
    p.full_clean(exclude=["created_by", "updated_by", "company"])
    assert p.sellable_seats == 66
    bad = SeatingPlan(company=company, code="P2", name="X", total_seats=10, blocked_seats=11)
    with pytest.raises(DjangoValidationError):
        bad.full_clean(exclude=["created_by", "updated_by", "company"])


@pytest.mark.django_db
def test_materialise_from_counts(ctx):
    from apps.voyages_trips.services.assignment import materialise_seats
    from apps.voyages_trips.models import Trip, TripSeat
    company, setup, user = ctx
    plan = SeatingPlan.objects.create(company=company, code="P", name="P", total_seats=10, blocked_seats=2)
    trip = _make_trip(company, user, plan)   # helper ci-dessous
    materialise_seats(trip)
    seats = list(TripSeat.objects.filter(trip=trip).order_by("seat_number"))
    assert len(seats) == 10
    assert sum(1 for s in seats if s.status == TripSeat.Status.BLOCKED) == 2
    assert sum(1 for s in seats if s.status == TripSeat.Status.AVAILABLE) == 8
```

Helper `_make_trip` : créer un `Trip` minimal (réutiliser le pattern de
`apps/voyages_trips/test_stats.py` : company, Town, 2 ServicePoint avec `agency`, Route,
FareClass, `Trip.objects.create(...)` avec `seating_plan=plan`). Écrire aussi
`test_assign_vehicle_keeps_existing_seats`, `test_assign_vehicle_without_plan_no_seats`,
`test_active_seating_plan_returns_vehicle_plan` (voir Review Focus).

- [ ] **Step 2 : Lancer → échec**

Run: `../env/bin/python -m pytest apps/voyages_config/test_plans_numeriques.py -q --reuse-db`
Expected: FAIL (rows/columns encore présents, pas de blocked_seats, PlanSeat/VehicleSeatingAssignment encore exportés, sellable_seats/clean absents).

- [ ] **Step 3 : Modèle SeatingPlan** — `models/seating.py`

Remplacer `SeatingPlan` : retirer `rows`, `columns` ; `total_seats` libellé « nombre total de places » ; ajouter `blocked_seats = models.PositiveSmallIntegerField(_("places bloquées"), default=0)`. Ajouter :
```python
    @property
    def sellable_seats(self):
        return max(0, (self.total_seats or 0) - (self.blocked_seats or 0))

    def clean(self):
        from django.core.exceptions import ValidationError
        super().clean()
        if (self.blocked_seats or 0) > (self.total_seats or 0):
            raise ValidationError({"blocked_seats": _("Les places bloquées ne peuvent pas dépasser le total.")})
```
Supprimer les classes `PlanSeat` et `VehicleSeatingAssignment`.

- [ ] **Step 4 : Exports & admin & Vehicle FK**

`models/__init__.py` : retirer `PlanSeat`, `VehicleSeatingAssignment`. `admin.py` : retirer leurs enregistrements. `fleet/models/vehicle.py` : ajouter
```python
    seating_plan = models.ForeignKey("voyages_config.SeatingPlan", verbose_name=_("plan de bus"),
                                     null=True, blank=True, on_delete=models.PROTECT,
                                     related_name="vehicles")
```

- [ ] **Step 5 : Génération des sièges** — `assignment.py::materialise_seats`

```python
def materialise_seats(trip):
    trip.seats.all().delete()
    plan = trip.seating_plan
    if not plan:
        return
    total = plan.total_seats or 0
    blocked = min(plan.blocked_seats or 0, total)
    first_blocked = total - blocked  # sièges > first_blocked sont bloqués
    rows = []
    for i in range(1, total + 1):
        rows.append(TripSeat(
            trip=trip, seat_number=str(i), row=i, column=1, seat_type="STANDARD",
            status=TripSeat.Status.BLOCKED if i > first_blocked else TripSeat.Status.AVAILABLE,
            created_by=trip.updated_by or trip.created_by))
    TripSeat.objects.bulk_create(rows)
```
Retirer l'import `PlanSeat`.

- [ ] **Step 6 : active_seating_plan** — `selectors/eligibility.py`

```python
def active_seating_plan(vehicle, on_date=None):
    return getattr(vehicle, "seating_plan", None)
```
Retirer l'import `VehicleSeatingAssignment`. Vérifier `transbordement.py` (utilise `active_seating_plan`) : aucun autre changement attendu (signature conservée).

- [ ] **Step 7 : Serializers / vues / urls**

`serializers.py` : supprimer `PlanSeatRead` et les serializers `VehicleSeatingAssignment*` ; `SeatingPlanRead` → fields `["id","code","name","total_seats","blocked_seats","sellable_seats","company","scope","is_active","created_at","updated_at"]` (ajouter `sellable_seats = serializers.IntegerField(read_only=True)`, retirer `seats`, `rows`, `columns`) ; `SeatingPlanWrite` → `code,name,total_seats,blocked_seats` (retirer rows/columns ; `blocked_seats` IntegerField min_value=0 default 0). `views.py` : supprimer `SeatingPlanSeatsView` et les vues `VehicleSeatingAssignment*`. `urls.py` : retirer la route `seating-plans/<uuid:plan_id>/seats/` et les 3 `vehicle-seating-assignments/*`.

- [ ] **Step 8 : Fleet vehicle API**

Serializer véhicule (read) : ajouter `seating_plan_code = serializers.CharField(source="seating_plan.code", read_only=True, default=None)` + `seating_plan` dans fields ; serializer/commande de création/màj : accepter `seating_plan_id` (UUID, optionnel) et l'affecter. (Suivre le pattern `seating_plan_id` de `voyages_trips/serializers.py`.)

- [ ] **Step 9 : Seeds & sync**

`defaults_seed.py` : `_SEATING_PLANS` → tuples `(code, name, total, blocked)` ; créer `SeatingPlan(total_seats=total, blocked_seats=blocked)` sans PlanSeat. `sync/registrations.py` : retirer la ligne `"voyages_config.PlanSeat",`. `seed_voyageur_express.py` / `seed_voyages_demo.py` : retirer la création de PlanSeat ; donner total/blocked au plan et faire `vehicle.seating_plan = plan` (sauvegarder).

- [ ] **Step 10 : Migrations + data backfill**

Run: `../env/bin/python manage.py makemigrations voyages_config fleet`
Puis **éditer** la migration voyages_config pour insérer une `migrations.RunPython` AVANT les suppressions :
```python
def backfill(apps, schema_editor):
    SeatingPlan = apps.get_model("voyages_config", "SeatingPlan")
    PlanSeat = apps.get_model("voyages_config", "PlanSeat")
    VSA = apps.get_model("voyages_config", "VehicleSeatingAssignment")
    Vehicle = apps.get_model("fleet", "Vehicle")
    for p in SeatingPlan.objects.all():
        seats = PlanSeat.objects.filter(plan=p)
        n = seats.count()
        if n:
            p.total_seats = n
            p.blocked_seats = seats.filter(is_sellable=False).count()
            p.save(update_fields=["total_seats", "blocked_seats"])
    for v in Vehicle.objects.all():
        a = VSA.objects.filter(vehicle=v).order_by("-created_at").first()
        if a:
            v.seating_plan_id = a.seating_plan_id
            v.save(update_fields=["seating_plan"])
```
Ordonner : AddField(blocked_seats) + AddField(Vehicle.seating_plan) → RunPython(backfill) → RemoveField(rows/columns) → DeleteModel(PlanSeat, VehicleSeatingAssignment). Gérer la dépendance inter-apps (migration fleet pour le champ, migration voyages_config `dependencies` sur la migration fleet). `reverse_code=migrations.RunPython.noop`.

- [ ] **Step 11 : Lancer nouveaux tests → vert**

Run: `../env/bin/python -m pytest apps/voyages_config/test_plans_numeriques.py -q --reuse-db`
Expected: PASS.

- [ ] **Step 12 : Non-régression + makemigrations check**

Sweep des tests référençant `PlanSeat`/`VehicleSeatingAssignment`/`rows=`/`columns=`/`/seats/`
(grep `PlanSeat\|VehicleSeatingAssignment\|rows=\|columns=` dans `apps/**/test*`). Adapter
ou supprimer. Lancer :
`../env/bin/python -m pytest apps/voyages_config apps/voyages_trips apps/fleet apps/sync -q --reuse-db`
Expected: PASS hors rouges de base connus (vérifier tout résiduel rouge sur master).
Puis `../env/bin/python manage.py makemigrations --check --dry-run` → « No changes detected ».

- [ ] **Step 13 : Commit**

```bash
git add backend/apps/voyages_config backend/apps/fleet backend/apps/voyages_trips backend/apps/sync backend/apps/voyages_booking/management/commands
git commit -m "feat(plans): numeric bus plans (total/blocked), drop visual editor + plan affectation; vehicle.seating_plan; seats generated from counts (M05)"
```

---

## Task 2 : Frontend — formulaire numérique, plan au véhicule, suppression de l'affectation

**Files:**
- Modify: `angular/src/_api/pages/voyages-config/seating-plans/seating-plans.component.{ts,html}`
- Delete: `angular/src/_api/pages/voyages-config/vehicle-assignments/` (component .ts/.html) + `angular/src/_api/services/voyages-config/vehicle-seating-assignment.service.ts`
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (retirer l'entrée 'Affectations de plan')
- Modify: `angular/src/app/core/helpers/routes.ts` (retirer `vcVehicleAssignments`) + la route dans `features/pages/pages.routes.ts`
- Modify: `angular/src/_api/config/api.config.ts` (retirer `vehicleSeatingAssignments`/`vehicleSeatingAssignment`)
- Modify: `angular/src/_api/pages/fleet/vehicles/vehicles.component.{ts,html}` (select « Plan de bus »)
- Modify: `angular/src/_api/models/voyages-config.models.ts` (SeatingPlan numérique, retirer PlanSeat/VehicleSeatingAssignment types) ; `fleet` vehicle model (`seating_plan`, `seating_plan_code`)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

**Interfaces:**
- Consumes: SeatingPlan `{total_seats,blocked_seats,sellable_seats}` + `vehicle.seating_plan_id` (Task 1).

- [ ] **Step 1 : Modèle TS** — retirer `rows`,`columns`,`seats`,`PlanSeat`,`VehicleSeatingAssignment` ; `SeatingPlan { code, name, total_seats, blocked_seats, sellable_seats }` ; véhicule `seating_plan?: string|null; seating_plan_code?: string|null`.

- [ ] **Step 2 : Seating-plans component** — formulaire `total_seats` + `blocked_seats` (number), affichage `sellable_seats` lecture seule ; supprimer toute l'UI d'éditeur visuel (grille, appels `/seats/`, SeatingPlanSeatsView). `fb.group` : `{ code, name, total_seats:[0,Validators.min(0)], blocked_seats:[0,Validators.min(0)] }` ; validation front : blocked ≤ total (message).

- [ ] **Step 3 : Supprimer l'affectation de plan** — supprimer le dossier `vehicle-assignments`, le service `vehicle-seating-assignment.service.ts`, l'entrée sidebar (ligne 'Affectations de plan'), la route `vcVehicleAssignments` (+ son enregistrement dans pages.routes.ts) et les clés `api.config.ts`. Grep `vehicleSeatingAssignment\|vehicle-assignments\|vcVehicleAssignments` → zéro hors suppressions.

- [ ] **Step 4 : Plan au véhicule** — `vehicles.component.ts` : charger les SeatingPlan (service existant `SeatingPlanService` ou via config) ; `fb.group` ajouter `seating_plan_id:[null]` ; `openEdit` patch depuis `v.seating_plan`. `.html` : select « Plan de bus » (options = plans, libellé `code — name`, option « Aucun »).

- [ ] **Step 5 : i18n (fr/en/es/pt)** — libellés plan (`total`, `bloquées`, `vendables`), label « Plan de bus » (véhicule) ; retirer l'entrée menu `affectations_de_plan` et les libellés de l'éditeur visuel/affectation devenus inutilisés. `python json.load/dump` + revérifier le parse.

- [ ] **Step 6 : Build (gate)**

Run: `cd angular && grep -rn "PlanSeat\|vehicleSeatingAssignment\|vehicle-assignments\|\\.rows\|\\.columns" src | grep -v spec` (doit être propre) puis `npx ng build --configuration development`
Expected: `Application bundle generation complete.`

- [ ] **Step 7 : Commit**

```bash
git add angular/src angular/public/i18n
git commit -m "feat(plans): numeric plan form, plan chosen on vehicle, remove plan-affectation screen (M05)"
```

---

## Notes d'implémentation

- Suppression de modèle = cassure atomique : serializers/vues/seed/sync/services/tests changent dans la tâche 1.
- `assign_vehicle` conserve sa garde « ne pas réécraser des sièges existants » ; seul le *source* du plan change (`vehicle.seating_plan`).
- Ne pas confondre `voyages-config/vehicle-assignments` (affectation de **plan**, supprimé) et `fleet/assignments` (affectation véhicule/chauffeur, conservé).
- Migration inter-apps : le champ `Vehicle.seating_plan` (fleet) doit exister avant le backfill (voyages_config) — poser la bonne `dependencies`.
