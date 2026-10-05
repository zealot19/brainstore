# Auto start/stop trips — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let companies opt into automatic trip lifecycle: a submitted (PENDING) trip auto-departs within its lead window and a DEPARTED trip auto-completes past its arrival grace — no manual start/stop.

**Architecture:** Add an opt-in `auto_manage_trips` flag to `VoyagesSettings`; an idempotent `run_auto_transitions()` service reuses the existing `depart_trip`/`complete_trip` services for companies that opted in, driven by a management command wired into the existing ~90s worker loop.

**Tech Stack:** Django + DRF, pytest (`../env/bin/python -m pytest` from `backend/`); Angular standalone component + Transloco for the settings toggle.

**Spec:** `docs/superpowers/specs/2026-10-05-auto-transition-trips-design.md`

## Global Constraints

- Backend tests run from `backend/` as `../env/bin/python -m pytest <path> -q`; `manage.py` as `../env/bin/python manage.py <cmd>`. Runs are slow (~2–4 min).
- Commit as shimi; **no** Claude co-author trailer. Work on branch `feat/transport-tweaks` (the current branch — this feature is the last item of that batch). Do not push until the user asks.
- Reuse existing hours fields: `VoyagesSettings.departure_lead_hours` (default 24), `arrival_grace_hours` (default 48). No new duration fields.
- Toggle: `auto_manage_trips` BooleanField, **default False** (opt-in).
- Reuse `apps.voyages_trips.services.trip_services.depart_trip(trip, *, user, lead_hours=...)` and `complete_trip(trip, *, user)`. System actor: `user=None` (updated_by is nullable).
- Idempotent: only PENDING trips auto-depart, only DEPARTED trips auto-complete; a repeat run in the same window transitions nothing.
- Trip statuses: `draft, pending, departed, completed, suspended, cancelled`.
- French UI copy. Known ~14-red master pytest baseline — add no new failures.

## Review Focus

- **Lead boundary inclusive:** a PENDING trip whose `scheduled_departure` is exactly `now + departure_lead_hours` must depart (`__lte`), not be skipped. → Task 2 test.
- **One bad trip doesn't abort the batch:** if `depart_trip`/`complete_trip` raises for one trip, the loop logs/skips it and still processes the rest. → Task 2 test.
- **Opt-out is the default:** a company whose `VoyagesSettings.auto_manage_trips` is False (or has no settings row) gets zero transitions. → Task 2 test.
- **Only PENDING auto-departs:** DRAFT and SUSPENDED trips are never auto-started; only DEPARTED auto-completes. → Task 2 test.
- **No vehicle is fine:** a PENDING trip with no vehicle still auto-departs (vehicle optional). → Task 2 test.

---

### Task 1: `auto_manage_trips` setting (model + migration + serializer)

**Files:**
- Modify: `backend/apps/voyages_config/models/settings.py`
- Create: `backend/apps/voyages_config/migrations/0018_voyagessettings_auto_manage_trips.py` (via makemigrations)
- Modify: `backend/apps/voyages_config/config_api/serializers.py` (add field to the settings serializer)
- Test: `backend/apps/voyages_config/tests/test_settings_auto_flag.py`

**Interfaces:**
- Produces: `VoyagesSettings.auto_manage_trips: bool` (default False); exposed by the settings serializer so the frontend can read/write it.

- [ ] **Step 1: Write the failing test**

```python
# backend/apps/voyages_config/tests/test_settings_auto_flag.py
import pytest
from apps.voyages_config.models import VoyagesSettings

pytestmark = pytest.mark.django_db


def _company(email="vs@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name="VSCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    return company


def test_auto_manage_trips_defaults_false():
    c = _company()
    s = VoyagesSettings.objects.create(company=c)
    assert s.auto_manage_trips is False
```

- [ ] **Step 2: Run it to verify it fails**

```bash
cd backend
../env/bin/python -m pytest apps/voyages_config/tests/test_settings_auto_flag.py -q
```
Expected: FAIL (`auto_manage_trips` unknown field). (If `VoyagesSettings.objects.create(company=c)` complains about other required fields, the model's other fields all have defaults — if not, add the minimal required ones; do not change the flag's default.)

- [ ] **Step 3: Add the field**

In `settings.py`, add alongside the other booleans (e.g. after `auto_print_default`):
```python
    auto_manage_trips = models.BooleanField(_("démarrage/arrêt auto des voyages"), default=False)
```

- [ ] **Step 4: Generate the migration + add to serializer**

```bash
cd backend
../env/bin/python manage.py makemigrations voyages_config --name voyagessettings_auto_manage_trips
```
In `config_api/serializers.py`, find the settings serializer (the one exposing `departure_lead_hours`/`arrival_grace_hours` — grep `departure_lead_hours`). If it uses an explicit `fields = [...]` list, add `"auto_manage_trips"`. If it uses `fields = "__all__"`, no change needed.

- [ ] **Step 5: Run the test + migration check**

```bash
cd backend
../env/bin/python manage.py makemigrations --check --dry-run
../env/bin/python -m pytest apps/voyages_config/tests/test_settings_auto_flag.py -q
```
Expected: no missing migrations after the generate; test PASS.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/voyages_config/models/settings.py backend/apps/voyages_config/migrations backend/apps/voyages_config/config_api/serializers.py backend/apps/voyages_config/tests/test_settings_auto_flag.py
git commit -m "feat(trips): auto_manage_trips setting on VoyagesSettings"
```

---

### Task 2: `run_auto_transitions` service + management command + tests

**Files:**
- Create: `backend/apps/voyages_trips/services/auto_transition.py`
- Create: `backend/apps/voyages_trips/management/commands/auto_transition_trips.py`
- Test: `backend/apps/voyages_trips/test_auto_transition.py`

**Interfaces:**
- Consumes: `VoyagesSettings.auto_manage_trips` + `departure_lead_hours`/`arrival_grace_hours` (Task 1); `trip_services.depart_trip(trip, *, user, lead_hours=...)`, `complete_trip(trip, *, user)`; `Trip.Status`.
- Produces: `run_auto_transitions(now=None) -> dict` with keys `departed`, `completed`, `skipped` (ints); management command `auto_transition_trips`.

- [ ] **Step 1: Write the failing tests**

```python
# backend/apps/voyages_trips/test_auto_transition.py
import datetime as dt
import pytest
from django.utils import timezone
from apps.voyages_trips.models import Trip
from apps.voyages_trips.services.auto_transition import run_auto_transitions

pytestmark = pytest.mark.django_db


def _setup(email, *, auto=True, lead=24, grace=48):
    from apps.system_config.services import create_company
    from apps.system_config.models import Agency
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass, VoyagesSettings
    company, _ = create_company(name="AT", admin_email=email, admin_first_name="A", admin_last_name="B")
    ag = Agency.objects.create(company=company, name="D", code="DLA")
    town = Town.objects.create(company=company, name="T")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O",
                                    is_station=True, station_kind="AGENCY", agency=ag)
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D",
                                    is_station=True, station_kind="AGENCY", agency=ag)
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="STD", name="Standard")
    VoyagesSettings.objects.create(company=company, auto_manage_trips=auto,
                                   departure_lead_hours=lead, arrival_grace_hours=grace)
    return company, route, fc, o, d


def _trip(company, route, fc, o, d, *, status, departure, arrival):
    return Trip.objects.create(company=company, code="TR", route=route, fare_class=fc,
                               origin=o, destination=d, status=status,
                               scheduled_departure=departure, scheduled_arrival=arrival)


def test_pending_within_lead_departs():
    company, route, fc, o, d = _setup("at1@x.com", lead=24)
    now = timezone.now()
    t = _trip(company, route, fc, o, d, status=Trip.Status.PENDING,
              departure=now + dt.timedelta(hours=2), arrival=now + dt.timedelta(hours=6))
    res = run_auto_transitions(now=now)
    t.refresh_from_db()
    assert t.status == Trip.Status.DEPARTED
    assert res["departed"] == 1


def test_pending_beyond_lead_stays():
    company, route, fc, o, d = _setup("at2@x.com", lead=24)
    now = timezone.now()
    t = _trip(company, route, fc, o, d, status=Trip.Status.PENDING,
              departure=now + dt.timedelta(hours=48), arrival=now + dt.timedelta(hours=52))
    run_auto_transitions(now=now)
    t.refresh_from_db()
    assert t.status == Trip.Status.PENDING


def test_lead_boundary_inclusive():
    company, route, fc, o, d = _setup("at3@x.com", lead=24)
    now = timezone.now()
    t = _trip(company, route, fc, o, d, status=Trip.Status.PENDING,
              departure=now + dt.timedelta(hours=24), arrival=now + dt.timedelta(hours=28))
    run_auto_transitions(now=now)
    t.refresh_from_db()
    assert t.status == Trip.Status.DEPARTED


def test_departed_past_grace_completes():
    company, route, fc, o, d = _setup("at4@x.com", grace=48)
    now = timezone.now()
    t = _trip(company, route, fc, o, d, status=Trip.Status.DEPARTED,
              departure=now - dt.timedelta(hours=60), arrival=now - dt.timedelta(hours=50))
    res = run_auto_transitions(now=now)
    t.refresh_from_db()
    assert t.status == Trip.Status.COMPLETED
    assert res["completed"] == 1


def test_departed_within_grace_stays():
    company, route, fc, o, d = _setup("at5@x.com", grace=48)
    now = timezone.now()
    t = _trip(company, route, fc, o, d, status=Trip.Status.DEPARTED,
              departure=now - dt.timedelta(hours=10), arrival=now - dt.timedelta(hours=2))
    run_auto_transitions(now=now)
    t.refresh_from_db()
    assert t.status == Trip.Status.DEPARTED


def test_disabled_company_no_transition():
    company, route, fc, o, d = _setup("at6@x.com", auto=False)
    now = timezone.now()
    t = _trip(company, route, fc, o, d, status=Trip.Status.PENDING,
              departure=now + dt.timedelta(hours=1), arrival=now + dt.timedelta(hours=5))
    run_auto_transitions(now=now)
    t.refresh_from_db()
    assert t.status == Trip.Status.PENDING


def test_draft_not_started():
    company, route, fc, o, d = _setup("at7@x.com")
    now = timezone.now()
    t = _trip(company, route, fc, o, d, status=Trip.Status.DRAFT,
              departure=now + dt.timedelta(hours=1), arrival=now + dt.timedelta(hours=5))
    run_auto_transitions(now=now)
    t.refresh_from_db()
    assert t.status == Trip.Status.DRAFT


def test_idempotent_second_run_noop():
    company, route, fc, o, d = _setup("at8@x.com")
    now = timezone.now()
    _trip(company, route, fc, o, d, status=Trip.Status.PENDING,
          departure=now + dt.timedelta(hours=1), arrival=now + dt.timedelta(hours=5))
    run_auto_transitions(now=now)
    res2 = run_auto_transitions(now=now)
    assert res2["departed"] == 0


def test_one_failing_trip_does_not_abort_batch(monkeypatch):
    """Si depart_trip lève pour un voyage, les autres sont quand même traités."""
    import apps.voyages_trips.services.auto_transition as mod
    company, route, fc, o, d = _setup("at9@x.com")
    now = timezone.now()
    bad = _trip(company, route, fc, o, d, status=Trip.Status.PENDING,
                departure=now + dt.timedelta(hours=1), arrival=now + dt.timedelta(hours=5))
    good = _trip(company, route, fc, o, d, status=Trip.Status.PENDING,
                 departure=now + dt.timedelta(hours=2), arrival=now + dt.timedelta(hours=6))
    real_depart = mod.depart_trip
    def flaky(trip, **kw):
        if trip.id == bad.id:
            raise RuntimeError("boom")
        return real_depart(trip, **kw)
    monkeypatch.setattr(mod, "depart_trip", flaky)
    res = run_auto_transitions(now=now)
    good.refresh_from_db(); bad.refresh_from_db()
    assert good.status == Trip.Status.DEPARTED      # le bon voyage est parti
    assert bad.status == Trip.Status.PENDING        # le mauvais reste en attente
    assert res["departed"] == 1 and res["skipped"] == 1
```

- [ ] **Step 2: Run to verify they fail**

```bash
cd backend
../env/bin/python -m pytest apps/voyages_trips/test_auto_transition.py -q
```
Expected: FAIL (module missing). If a fixture errors on a required field (e.g. `FareClass`/`ServicePoint`/`Trip` need more), confirm with `grep -nE "= models\." apps/voyages_config/models/*.py apps/voyages_trips/models/trip.py` and add the minimal fields — do NOT change service logic to fit a broken fixture.

- [ ] **Step 3: Implement the service**

```python
# backend/apps/voyages_trips/services/auto_transition.py
"""Transitions automatiques des voyages (démarrage/arrêt) pour les sociétés qui
ont activé `VoyagesSettings.auto_manage_trips`. Idempotent : seules les transitions
PENDING->DEPARTED et DEPARTED->COMPLETED sont faites, gardées par le statut."""
import datetime as dt
import logging

from django.utils import timezone

from apps.voyages_config.models import VoyagesSettings
from apps.voyages_trips.models import Trip
from apps.voyages_trips.services.trip_services import depart_trip, complete_trip

log = logging.getLogger(__name__)


def run_auto_transitions(now=None) -> dict:
    now = now or timezone.now()
    departed = completed = skipped = 0
    for s in VoyagesSettings.objects.filter(auto_manage_trips=True).select_related("company"):
        lead = dt.timedelta(hours=s.departure_lead_hours or 0)
        grace = dt.timedelta(hours=s.arrival_grace_hours or 0)

        # Démarrage : voyages soumis (PENDING) dont le départ est dans la fenêtre d'avance.
        due = Trip.objects.filter(is_deleted=False, company_id=s.company_id,
                                  status=Trip.Status.PENDING,
                                  scheduled_departure__lte=now + lead)
        for trip in due:
            try:
                depart_trip(trip, user=None, lead_hours=s.departure_lead_hours or 0)
                departed += 1
            except Exception as e:  # une erreur sur un voyage ne stoppe pas le lot
                skipped += 1
                log.warning("auto-depart skipped trip %s: %s", trip.id, e)

        # Arrêt : voyages partis (DEPARTED) dont l'arrivée dépasse le délai d'arrêt.
        overdue = Trip.objects.filter(is_deleted=False, company_id=s.company_id,
                                      status=Trip.Status.DEPARTED,
                                      scheduled_arrival__lte=now - grace)
        for trip in overdue:
            try:
                complete_trip(trip, user=None)
                completed += 1
            except Exception as e:
                skipped += 1
                log.warning("auto-complete skipped trip %s: %s", trip.id, e)

    return {"departed": departed, "completed": completed, "skipped": skipped}
```

Note: `depart_trip` guards `(scheduled_departure - now) > lead_hours` → raises "too early". The `scheduled_departure__lte = now + lead` filter guarantees the selected trips are within the window, so the guard never trips. Passing `lead_hours = s.departure_lead_hours` keeps the service's own check consistent with the query.

- [ ] **Step 4: Implement the management command**

```python
# backend/apps/voyages_trips/management/commands/auto_transition_trips.py
from django.core.management.base import BaseCommand
from apps.voyages_trips.services.auto_transition import run_auto_transitions


class Command(BaseCommand):
    help = "Démarre/arrête automatiquement les voyages des sociétés ayant activé l'option (idempotent)."

    def handle(self, *args, **opts):
        res = run_auto_transitions()
        self.stdout.write(f"auto-transitions: {res['departed']} démarré(s), "
                          f"{res['completed']} clôturé(s), {res['skipped']} ignoré(s).")
```

- [ ] **Step 5: Run the tests**

```bash
cd backend
../env/bin/python -m pytest apps/voyages_trips/test_auto_transition.py -q
../env/bin/python manage.py check
```
Expected: all PASS; check clean.

- [ ] **Step 6: Commit**

```bash
git add backend/apps/voyages_trips/services/auto_transition.py backend/apps/voyages_trips/management/commands/auto_transition_trips.py backend/apps/voyages_trips/test_auto_transition.py
git commit -m "feat(trips): idempotent auto_transition_trips service + command"
```

---

### Task 3: Wire the command into the worker loop

**Files:**
- Modify: `agency/docker-compose.local.yml:46`
- Modify: `agency/docker-compose.yml:51`
- Modify: `deploy/agency/docker-compose.web.yml:56`
- Modify: `deploy/agency/docker-compose.yml:30`

**Interfaces:**
- Consumes: the `auto_transition_trips` management command (Task 2).

- [ ] **Step 1: Add the command to each worker loop**

In each of the four files, the worker `command:` is:
```
sh -c 'while true; do python manage.py sync_once || true; sleep ${SYNC_INTERVAL:-90}; done'
```
Change it to run the transition each cycle (before the sleep), guarded with `|| true` so a transition error can't kill the sync loop:
```
sh -c 'while true; do python manage.py sync_once || true; python manage.py auto_transition_trips || true; sleep ${SYNC_INTERVAL:-90}; done'
```
Apply the identical edit to all four files.

- [ ] **Step 2: Verify the edits**

```bash
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master
grep -rn "auto_transition_trips" agency/docker-compose*.yml deploy/agency/*.yml
```
Expected: 4 matches (one per worker command). (No automated test — compose files aren't unit-tested. The command's own behavior is covered by Task 2.)

- [ ] **Step 3: Commit**

```bash
git add agency/docker-compose.local.yml agency/docker-compose.yml deploy/agency/docker-compose.web.yml deploy/agency/docker-compose.yml
git commit -m "chore(deploy): run auto_transition_trips each worker cycle"
```

---

### Task 4: Frontend settings toggle + i18n

**Files:**
- Modify: `angular/src/_api/pages/voyages-config/settings/settings.component.ts`
- Modify: `angular/src/_api/pages/voyages-config/settings/settings.component.html`
- Modify: `angular/public/i18n/fr.json`, `en.json`, `es.json`, `pt.json`

**Interfaces:**
- Consumes: the serializer now returns/accepts `auto_manage_trips` (Task 1).

- [ ] **Step 1: Add the control to the form group**

In `settings.component.ts`, the `FormBuilder.group({...})` already lists `auto_print_default: [false]`. Add:
```typescript
      auto_manage_trips: [false],
```
(`patchValue(s)` already populates it on load; the existing save path submits the whole form value.)

- [ ] **Step 2: Add the checkbox to the template**

In `settings.component.html`, next to the existing `auto_print_default` / `sms_notification_default` switches, add:
```html
        <div class="form-check form-switch mb-2"><input formControlName="auto_manage_trips" type="checkbox" class="form-check-input" id="vc-automanage" /><label class="form-check-label" for="vc-automanage">{{ 'vcfg.set.f_auto_manage' | transloco }}</label></div>
        <p class="text-muted small mb-3">{{ 'vcfg.set.f_auto_manage_hint' | transloco }}</p>
```

- [ ] **Step 3: Add i18n keys (all four locales)**

Add under the existing `vcfg.set` namespace (grep `"f_autoprint"` to find it) in each file:

fr:
```json
      "f_auto_manage": "Démarrage/arrêt automatique des voyages",
      "f_auto_manage_hint": "Utilise les délais de démarrage (h) et d'arrêt (h) ci-dessus.",
```
en:
```json
      "f_auto_manage": "Auto start/stop trips",
      "f_auto_manage_hint": "Uses the departure lead (h) and arrival grace (h) above.",
```
es:
```json
      "f_auto_manage": "Inicio/parada automática de viajes",
      "f_auto_manage_hint": "Usa los retrasos de inicio (h) y de parada (h) de arriba.",
```
pt:
```json
      "f_auto_manage": "Início/paragem automática das viagens",
      "f_auto_manage_hint": "Usa os prazos de início (h) e de paragem (h) acima.",
```

- [ ] **Step 4: Validate JSON + build**

```bash
cd angular
for f in fr en es pt; do node -e "JSON.parse(require('fs').readFileSync('public/i18n/$f.json','utf8'));console.log('$f ok')"; done
npx ng build --configuration development 2>&1 | tail -6
```
Expected: all `ok`; build succeeds (pre-existing NG8113 warnings elsewhere are fine).

- [ ] **Step 5: Commit**

```bash
git add angular/src/_api/pages/voyages-config/settings angular/public/i18n
git commit -m "feat(ui): Voyages settings toggle for auto start/stop trips"
```

---

## Final verification

- [ ] Backend: `cd backend && ../env/bin/python -m pytest apps/voyages_trips/test_auto_transition.py apps/voyages_config/tests/test_settings_auto_flag.py -q` (green) and `../env/bin/python manage.py makemigrations --check --dry-run` (clean — exactly one new migration, already committed).
- [ ] Regression: `../env/bin/python -m pytest apps/voyages_trips -q` — no NEW failures beyond the ~14-red baseline.
- [ ] Frontend: `cd angular && npx ng build --configuration development` succeeds.
- [ ] Manual: enable the toggle on a company, create a PENDING trip departing within the lead window, run `../env/bin/python manage.py auto_transition_trips` → trip becomes DEPARTED; run again → 0 departed.

## Notes for the executor

- Exactly one migration is added (Task 1). If `makemigrations --check` reports more, something else drifted — investigate, don't blindly generate.
- `depart_trip`/`complete_trip` have side effects (vehicle status, parcel cascades); the service relies on them — do not reimplement those transitions.
- Confirm the settings serializer field-list style (explicit list vs `__all__`) before editing (Task 1 Step 4).
- Do all work on `feat/transport-tweaks`; do not push until the user asks.
