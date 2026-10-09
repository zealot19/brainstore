# M13 — Génération de voyages en lot — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Générer en lot un voyage par date circulée d'une charte sur une période, idempotent (skip des dates déjà pourvues), via un endpoint + un écran.

**Architecture:** Backend : service `generate_trips_from_pattern` (boucle sur la période, réutilise `create_trip_from_pattern`) + endpoint `POST voyage/trips/generate/`. Frontend : modal « Générer en lot » sur l'écran Voyages.

**Tech Stack:** Django + DRF, pytest (`../env/bin/python -m pytest <path> -q --reuse-db`) ; Angular standalone + Transloco, `npx ng build --configuration development`.

**Spec:** `docs/superpowers/specs/2026-10-09-m13-generation-lot-design.md`

## Global Constraints

- UI/texte en français. Commits as shimi, sans trailer Claude. Merge/push `deploy` seulement sur demande.
- Aucun changement de schéma → `makemigrations --check` propre.
- Idempotent : skip des dates déjà pourvues d'un voyage pour la charte ; skip des jours non circulés / hors validité.
- Cap période ≤ 366 jours ; refuser AVANT toute création.

## Review Focus

- **Période > 366 j ou fin < début** → 400, aucune création. → Task 1 `test_generate_rejects_overlong_range` / `test_generate_rejects_inverted_range`.
- **Idempotent** : relance → `created=0`, `skipped_existing` = circulant. → Task 1 `test_generate_idempotent_skips_existing`.
- **Jours non circulés / hors validité** ignorés. → Task 1 `test_generate_skips_offpattern_days`, `test_generate_respects_validity`.
- **Charte d'une autre société** → 404. → Task 1 `test_generate_foreign_pattern_404`.
- **Charte sans plan par défaut** → voyage créé sans sièges, pas de crash. → Task 1 (helper sans default_seating_plan).

---

## Task 1 : Backend — service + endpoint de génération en lot

**Files:**
- Modify: `backend/apps/voyages_trips/services/trip_services.py` (`generate_trips_from_pattern`)
- Modify: `backend/apps/voyages_trips/serializers.py` (`GenerateTripsSerializer`)
- Modify: `backend/apps/voyages_trips/views.py` (`GenerateTripsView`)
- Modify: `backend/apps/voyages_trips/urls.py` (route `generate/`)
- Create: `backend/apps/voyages_trips/test_generate_trips.py`

**Interfaces:**
- Produces: `generate_trips_from_pattern(*, company, pattern, start_date, end_date, user) -> {created, skipped_existing, skipped_offday}` ; `POST voyage/trips/generate/ {service_pattern_id,start_date,end_date}`.

- [ ] **Step 1 : Test qui échoue** — `backend/apps/voyages_trips/test_generate_trips.py`

```python
import pytest
from datetime import date, timedelta, time


def _ctx():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="GenCo", admin_email="g@x.com", admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email="g@x.com")


def _pattern(company, *, all_days=True, mondays_only=False, valid_from=None, valid_to=None, with_plan=True):
    from apps.voyages_config.models import (Town, ServicePoint, Route, FareClass, TimeSlot,
                                            ServicePattern, SeatingPlan)
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    ts = TimeSlot.objects.create(company=company, label="08h", start_time=time(8, 0), end_time=time(11, 0))
    flags = {w: all_days for w in ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]}
    if mondays_only:
        flags = {w: False for w in flags}; flags["monday"] = True
    plan = SeatingPlan.objects.create(company=company, code="P", name="P", total_seats=10) if with_plan else None
    return ServicePattern.objects.create(company=company, route=route, time_slot=ts, fare_class=fc,
                                         default_seating_plan=plan, valid_from=valid_from, valid_to=valid_to, **flags)


@pytest.mark.django_db
def test_generate_creates_one_per_circulating_date():
    from apps.voyages_trips.services.trip_services import generate_trips_from_pattern
    company, admin = _ctx()
    p = _pattern(company, all_days=True)
    start = date(2027, 1, 4); end = date(2027, 1, 8)   # 5 jours, tous circulés
    res = generate_trips_from_pattern(company=company, pattern=p, start_date=start, end_date=end, user=admin)
    assert res["created"] == 5 and res["skipped_existing"] == 0 and res["skipped_offday"] == 0


@pytest.mark.django_db
def test_generate_skips_offpattern_days():
    from apps.voyages_trips.services.trip_services import generate_trips_from_pattern
    company, admin = _ctx()
    p = _pattern(company, mondays_only=True)
    start = date(2027, 1, 4); end = date(2027, 1, 17)   # 2 semaines → 2 lundis
    res = generate_trips_from_pattern(company=company, pattern=p, start_date=start, end_date=end, user=admin)
    expected = sum(1 for i in range((end - start).days + 1) if (start + timedelta(days=i)).weekday() == 0)
    assert res["created"] == expected == 2
    assert res["skipped_offday"] == (end - start).days + 1 - expected


@pytest.mark.django_db
def test_generate_idempotent_skips_existing():
    from apps.voyages_trips.services.trip_services import generate_trips_from_pattern
    company, admin = _ctx()
    p = _pattern(company, all_days=True)
    start = date(2027, 2, 1); end = date(2027, 2, 3)
    generate_trips_from_pattern(company=company, pattern=p, start_date=start, end_date=end, user=admin)
    res = generate_trips_from_pattern(company=company, pattern=p, start_date=start, end_date=end, user=admin)
    assert res["created"] == 0 and res["skipped_existing"] == 3


@pytest.mark.django_db
def test_generate_respects_validity():
    from apps.voyages_trips.services.trip_services import generate_trips_from_pattern
    company, admin = _ctx()
    p = _pattern(company, all_days=True, valid_from=date(2027, 3, 3))
    start = date(2027, 3, 1); end = date(2027, 3, 4)   # 1,2 hors validité ; 3,4 ok
    res = generate_trips_from_pattern(company=company, pattern=p, start_date=start, end_date=end, user=admin)
    assert res["created"] == 2 and res["skipped_offday"] == 2


@pytest.mark.django_db
def test_generate_without_default_plan_ok():
    from apps.voyages_trips.services.trip_services import generate_trips_from_pattern
    company, admin = _ctx()
    p = _pattern(company, all_days=True, with_plan=False)
    res = generate_trips_from_pattern(company=company, pattern=p, start_date=date(2027, 4, 1),
                                      end_date=date(2027, 4, 2), user=admin)
    assert res["created"] == 2


@pytest.mark.django_db
def test_generate_rejects_overlong_and_inverted_range():
    from apps.voyages_trips.services.trip_services import generate_trips_from_pattern
    from apps.core.exceptions import ApplicationError
    company, admin = _ctx()
    p = _pattern(company, all_days=True)
    with pytest.raises(ApplicationError):
        generate_trips_from_pattern(company=company, pattern=p, start_date=date(2027, 1, 1),
                                    end_date=date(2028, 6, 1), user=admin)   # > 366 j
    with pytest.raises(ApplicationError):
        generate_trips_from_pattern(company=company, pattern=p, start_date=date(2027, 1, 10),
                                    end_date=date(2027, 1, 1), user=admin)   # fin < début


@pytest.mark.django_db
def test_generate_endpoint_and_foreign_404():
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, admin = _ctx()
    p = _pattern(company, all_days=True)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {CustomRefreshToken.for_user(admin).access_token}")
    r = c.post("/api/v1/voyage/trips/generate/",
               {"service_pattern_id": str(p.id), "start_date": "2027-05-01", "end_date": "2027-05-03"}, format="json")
    assert r.status_code in (200, 201), r.content
    assert r.json()["data"]["created"] == 3
    other, _ = create_company(name="OtherGen", admin_email="og@x.com", admin_first_name="A", admin_last_name="B")
    fp = _pattern(other, all_days=True)
    r2 = c.post("/api/v1/voyage/trips/generate/",
                {"service_pattern_id": str(fp.id), "start_date": "2027-05-01", "end_date": "2027-05-02"}, format="json")
    assert r2.status_code == 404
```
(Vérifier les champs réels de `TimeSlot` — ajouter `code=` si requis par le modèle.)

- [ ] **Step 2 : Lancer → échec**

Run: `../env/bin/python -m pytest apps/voyages_trips/test_generate_trips.py -q --reuse-db`
Expected: FAIL (`generate_trips_from_pattern` et l'endpoint absents).

- [ ] **Step 3 : Service** — `trip_services.py` (après `create_trip_from_pattern`)

```python
_MAX_RANGE_DAYS = 366


def generate_trips_from_pattern(*, company, pattern, start_date, end_date, user):
    """M13 : crée un voyage par date circulée de [start_date, end_date] (idempotent)."""
    from datetime import timedelta
    if end_date < start_date:
        raise ApplicationError(_("La date de fin doit être postérieure ou égale à la date de début."))
    if (end_date - start_date).days + 1 > _MAX_RANGE_DAYS:
        raise ApplicationError(_("La période ne peut pas dépasser 366 jours."))
    created = skipped_existing = skipped_offday = 0
    d = start_date
    while d <= end_date:
        circulates = bool(getattr(pattern, _WEEKDAY_FIELDS[d.weekday()]))
        in_validity = ((not pattern.valid_from or d >= pattern.valid_from)
                       and (not pattern.valid_to or d <= pattern.valid_to))
        if not circulates or not in_validity:
            skipped_offday += 1
        elif Trip.objects.filter(company=company, service_pattern=pattern, is_deleted=False,
                                 scheduled_departure__date=d).exists():
            skipped_existing += 1
        else:
            create_trip_from_pattern(company=company, pattern=pattern, service_date=d, user=user)
            created += 1
        d += timedelta(days=1)
    return {"created": created, "skipped_existing": skipped_existing, "skipped_offday": skipped_offday}
```

- [ ] **Step 4 : Serializer** — `serializers.py`

```python
class GenerateTripsSerializer(serializers.Serializer):
    service_pattern_id = serializers.UUIDField()
    start_date = serializers.DateField()
    end_date = serializers.DateField()

    def validate(self, attrs):
        if attrs["end_date"] < attrs["start_date"]:
            raise serializers.ValidationError("La date de fin doit être postérieure ou égale à la date de début.")
        return attrs
```

- [ ] **Step 5 : Vue** — `views.py` (mirror `TripListCreateView.post` : `_scope`, `_cfg`)

```python
class GenerateTripsView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {'POST': 'voyage.trip.create'}

    def post(self, request):
        company, err = _scope(request)
        if err:
            return err
        payload = S.GenerateTripsSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        from apps.voyages_config.models import ServicePattern
        pattern = _cfg(ServicePattern, d["service_pattern_id"], company)
        if not pattern:
            return error_response("Planification introuvable.", status_code=404)
        try:
            res = services.generate_trips_from_pattern(
                company=company, pattern=pattern,
                start_date=d["start_date"], end_date=d["end_date"], user=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(res)
```

- [ ] **Step 6 : URL** — `voyages_trips/urls.py`

Ajouter AVANT `path("", v.TripListCreateView.as_view())` : `path("generate/", v.GenerateTripsView.as_view()),`.

- [ ] **Step 7 : Lancer → vert**

Run: `../env/bin/python -m pytest apps/voyages_trips/test_generate_trips.py -q --reuse-db`
Expected: PASS (7 tests).

- [ ] **Step 8 : Non-régression + makemigrations check**

Run: `../env/bin/python -m pytest apps/voyages_trips -q --reuse-db` (hors rouges de base connus : trip-expense disburse, trips list-filter — rouges sur master) ; puis `../env/bin/python manage.py makemigrations --check --dry-run` → « No changes detected ».

- [ ] **Step 9 : Commit**

```bash
git add backend/apps/voyages_trips
git commit -m "feat(voyages): batch-generate trips from a charte over a date range (idempotent) (M13)"
```

---

## Task 2 : Frontend — modal « Générer en lot » sur l'écran Voyages

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (`generateTrips`)
- Modify: `angular/src/_api/services/voyages/trip.service.ts` (`generateBatch`)
- Modify: `angular/src/_api/pages/voyages/list/voyages-list.component.{ts,html}`
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

**Interfaces:**
- Consumes: `POST voyage/trips/generate/` → `{created, skipped_existing, skipped_offday}` (Task 1). `patterns` déjà chargées dans `voyages-list`.

- [ ] **Step 1 : api.config + service**

- `api.config.ts` (bloc VOYAGES, près de `trips`) : `generateTrips: \`${API_BASE}/voyage/trips/generate/\`,`.
- `trip.service.ts` : `generateBatch(body: { service_pattern_id: string; start_date: string; end_date: string }): Observable<{ created: number; skipped_existing: number; skipped_offday: number }> { return this.http.post<...>(VOYAGES.generateTrips, body); }`.

- [ ] **Step 2 : Composant** — `voyages-list.component.ts`

- Champs : `genPatternId = ''; genStart = ''; genEnd = ''; generating = false;`.
- `generate()` : si `!genPatternId || !genStart || !genEnd || generating` → return ; `generating=true` ;
  `this.svc.generateBatch({ service_pattern_id: genPatternId, start_date: genStart, end_date: genEnd }).subscribe({ next: r => { this.generating=false; this.toast.success(... r.created + ' créés, ' + (r.skipped_existing + r.skipped_offday) + ' ignorés'); this.load(); this.closeGen(); }, error: e => { this.generating=false; this.toast.error(e?.error?.detail ?? 'Génération impossible.'); } })`.
- `closeGen()` : fermer le modal (même pattern que les autres modals du composant).

- [ ] **Step 3 : Template** — `voyages-list.component.html`

- Bouton « Générer en lot » (près du bouton de création), `data-bs-toggle="modal" data-bs-target="#gen-modal"`, `*hasPermission="'voyage.trip.create'"`.
- Modal `#gen-modal` : select charte (`@for (p of patterns; track p.id)`, libellé `p.route_code · p.time_slot_label` ou équivalent disponible sur le modèle ServicePattern front), input date début (`[(ngModel)]="genStart"`), date fin (`genEnd`), bouton « Générer » `[disabled]="!genPatternId || !genStart || !genEnd || generating"` (click)="generate()".

- [ ] **Step 4 : i18n (fr/en/es/pt)**

Bloc `trips.gen` : `btn` (« Générer en lot »), `title`, `f_charte`, `f_start`, `f_end`, `run` (« Générer »),
`result` (« {{created}} créés, {{skipped}} ignorés » — ou libellés simples assemblés côté TS).
`python json.load/dump` + revérifier le parse.

- [ ] **Step 5 : Build (gate)**

Run: `cd angular && npx ng build --configuration development`
Expected: `Application bundle generation complete.`

- [ ] **Step 6 : Commit**

```bash
git add angular/src angular/public/i18n
git commit -m "feat(voyages): 'Générer en lot' modal (charte + période) on trips screen (M13)"
```

---

## Notes d'implémentation

- Réutiliser `create_trip_from_pattern` tel quel (gère horaires nuit/fuseau, plan optionnel, auto-dépenses) ; ne PAS réimplémenter la création.
- `scheduled_departure__date=d` : la détection d'existant compare la date locale du départ (le départ est `combine(date, start_time)` localisé → date = `d`).
- Vérifier le libellé disponible sur le modèle `ServicePattern` front (route_code / time_slot_label) pour l'option du select ; adapter si besoin.
