# M12 — Quota de réservations & suppression du délai d'archivage — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Le quota de réservation (`Trip.max_reservations`) devient réglable par l'agent, défauté aux places vendables et plafonné à celles-ci ; le paramètre `archive_delay_days` de la config Voyages est supprimé.

**Architecture:** Changement de logique dans `create_trip` (défaut/validation du quota au lieu de l'écrasement par la capacité) + retrait d'un champ de `VoyagesSettings` (modèle + migration + serializer + frontend). Front `voyages-list` : quota éditable + calcul des places vendables corrigé.

**Tech Stack:** Django + DRF, pytest (`../env/bin/python -m pytest <path> -q --reuse-db`, `--create-db` après schéma) ; Angular standalone + Transloco, `npx ng build --configuration development`.

**Spec:** `docs/superpowers/specs/2026-10-09-m12-quota-reservations-archivage-design.md`

## Global Constraints

- UI/texte en français. Commits as shimi, sans trailer Claude. Merge/push `deploy` seulement sur demande.
- Quota vide → défaut = places vendables ; quota > vendables → refus 400.
- `reservation_services` (plafond `held + n > max_reservations`) reste inchangé.
- `makemigrations --check --dry-run` = « No changes detected » en fin de tâche 1.

## Review Focus

- **Quota = vendables exactement** → accepté (pas d'off-by-one). → Task 1 `test_quota_equals_sellable_ok`.
- **Voyage sans plan + quota fourni** → pas de validation, quota conservé, pas de 500. → Task 1 `test_quota_no_plan_kept_as_is`.
- **Via planification** → quota défauté/validé pareil. → Task 1 `test_quota_from_pattern_defaults`.
- **Retrait archive_delay_days** → lecture settings + seed OK (pas de KeyError). → Task 1 `test_settings_has_no_archive_delay` + suite voyages_config.

---

## Task 1 : Backend — quota dans create_trip + retrait archive_delay_days

**Files:**
- Modify: `backend/apps/voyages_trips/services/trip_services.py`
- Modify: `backend/apps/voyages_config/models/settings.py`
- Modify: `backend/apps/voyages_config/config_api/serializers.py`
- Create: migration `voyages_config` (RemoveField archive_delay_days)
- Create: `backend/apps/voyages_trips/test_reservation_quota.py`
- Modify (non-régression): `backend/apps/voyages_trips/test_trip_crew_limits.py`

**Interfaces:**
- Produces: `create_trip` : `max_reservations` None→sellable, >sellable→ApplicationError, sinon conservé. `VoyagesSettings` sans `archive_delay_days`.

- [ ] **Step 1 : Tests qui échouent** — `backend/apps/voyages_trips/test_reservation_quota.py`

```python
import pytest
from datetime import timedelta
from django.utils import timezone
from apps.core.exceptions import ApplicationError


def _ctx():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="QuotaCo", admin_email="q@x.com", admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email="q@x.com")


def _refs(company):
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass, SeatingPlan
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    plan = SeatingPlan.objects.create(company=company, code="P", name="P", total_seats=10, blocked_seats=0)
    return route, fc, plan


def _mk(company, admin, *, plan=None, **kw):
    from apps.voyages_trips.services.trip_services import create_trip
    route, fc, p = _refs(company)
    now = timezone.now() + timedelta(days=1)
    return create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                       seating_plan=(plan if plan is not None else p), user=admin, **kw)


@pytest.mark.django_db
def test_quota_defaults_to_sellable():
    company, admin = _ctx()
    trip = _mk(company, admin, blocked_seats_count=2)   # plan 10 - 2 = 8 vendables
    assert trip.max_reservations == 8


@pytest.mark.django_db
def test_quota_equals_sellable_ok():
    company, admin = _ctx()
    trip = _mk(company, admin, blocked_seats_count=2, max_reservations=8)
    assert trip.max_reservations == 8


@pytest.mark.django_db
def test_quota_honored_within_sellable():
    company, admin = _ctx()
    trip = _mk(company, admin, blocked_seats_count=2, max_reservations=5)
    assert trip.max_reservations == 5


@pytest.mark.django_db
def test_quota_rejected_above_sellable():
    company, admin = _ctx()
    with pytest.raises(ApplicationError):
        _mk(company, admin, blocked_seats_count=2, max_reservations=9)   # > 8


@pytest.mark.django_db
def test_quota_no_plan_kept_as_is():
    from apps.voyages_trips.services.trip_services import create_trip
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    company, admin = _ctx()
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    now = timezone.now() + timedelta(days=1)
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                       seating_plan=None, max_reservations=3, user=admin)
    assert trip.max_reservations == 3


def test_settings_has_no_archive_delay():
    from apps.voyages_config.models import VoyagesSettings
    assert "archive_delay_days" not in {f.name for f in VoyagesSettings._meta.get_fields()}
```

- [ ] **Step 2 : Lancer → échec**

Run: `../env/bin/python -m pytest apps/voyages_trips/test_reservation_quota.py -q --reuse-db`
Expected: FAIL (défaut = total 10 pas 8 ; pas de refus ; archive_delay_days présent).

- [ ] **Step 3 : Quota dans create_trip** — `trip_services.py`

Remplacer le bloc actuel :
```python
    if trip.seating_plan_id:
        from apps.voyages_trips.services.assignment import materialise_seats
        materialise_seats(trip)
        _block_seats(trip, blocked_seats_count or 0, user)
        trip.max_reservations = trip.seats.filter(is_deleted=False).count()
        trip.save(update_fields=["max_reservations", "updated_by", "updated_at"])
```
par :
```python
    if trip.seating_plan_id:
        from apps.voyages_trips.services.assignment import materialise_seats
        from apps.voyages_trips.models import TripSeat
        materialise_seats(trip)
        _block_seats(trip, blocked_seats_count or 0, user)
        sellable = trip.seats.filter(is_deleted=False, status=TripSeat.Status.AVAILABLE).count()
        if max_reservations is None:
            trip.max_reservations = sellable
        elif max_reservations > sellable:
            raise ApplicationError(
                _("Le quota de réservation ne peut pas dépasser %(n)s places vendables.") % {"n": sellable})
        else:
            trip.max_reservations = max_reservations
        trip.save(update_fields=["max_reservations", "updated_by", "updated_at"])
```
(Note : la ligne `_block_seats` est déjà présente ; vérifier l'ordre exact du bloc existant
avant substitution.)

- [ ] **Step 4 : Retrait archive_delay_days (modèle + serializer)**

- `models/settings.py` : supprimer la ligne `archive_delay_days = models.PositiveSmallIntegerField(...)`.
- `config_api/serializers.py` : retirer `"archive_delay_days"` de `VoyagesSettingsRead.Meta.fields`
  et la ligne `archive_delay_days = serializers.IntegerField(...)` du write serializer.

- [ ] **Step 5 : Migration**

Run: `../env/bin/python manage.py makemigrations voyages_config`
Expected: migration `RemoveField(model_name="voyagessettings", name="archive_delay_days")`. Pas de RunPython.

- [ ] **Step 6 : Non-régression test_trip_crew_limits**

`test_max_reservations_derived_from_plan_and_sellable_minus_blocked` affirmait que la valeur
agent (1) est ignorée et que `max_reservations == 9`. M12 inverse : avec `max_reservations=1`
(≤ 7 vendables) la valeur est **honorée** → `trip.max_reservations == 1`, et
`trip.seats.filter(status="available").count() == 7` (bloqués inchangés). Mettre à jour les
assertions en conséquence (le quota n'est plus la capacité).

- [ ] **Step 7 : Lancer nouveaux tests → vert**

Run: `../env/bin/python -m pytest apps/voyages_trips/test_reservation_quota.py apps/voyages_trips/test_trip_crew_limits.py -q --create-db`
Expected: PASS.

- [ ] **Step 8 : Non-régression + makemigrations check**

Run: `../env/bin/python -m pytest apps/voyages_trips apps/voyages_config apps/voyages_booking -q --create-db`
Expected: PASS hors rouges de base connus (vérifier résiduels rouges sur master).
Puis `../env/bin/python manage.py makemigrations --check --dry-run` → « No changes detected ».

- [ ] **Step 9 : Commit**

```bash
git add backend/apps/voyages_trips backend/apps/voyages_config
git commit -m "feat(voyages): agent-settable reservation quota capped at sellable seats; drop archive_delay_days config (M12)"
```

---

## Task 2 : Frontend — quota éditable + places vendables corrigées + retrait archive

**Files:**
- Modify: `angular/src/_api/pages/voyages/list/voyages-list.component.{ts,html}`
- Modify: `angular/src/_api/pages/voyages-config/settings/settings.component.{ts,html}`
- Modify: `angular/src/_api/models/voyages-config.models.ts` (retirer `archive_delay_days`)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json` (libellés quota ; retirer `vcfg.set.f_archive`)

**Interfaces:**
- Consumes: `create_trip` défaut/validation du quota (Task 1) ; settings sans `archive_delay_days`.

- [ ] **Step 1 : voyages-list — quota éditable + vendables corrigées** (`.ts`)

- `seating_plan_id.valueChanges` (~l.77-79) : remplacer `setValue(p ? p.total_seats : null)`
  par le défaut vendables : `setValue(p ? (p.total_seats - (+this.form.get('blocked_seats_count')!.value || 0)) : null)`.
- Ajouter un abonnement `blocked_seats_count.valueChanges` qui recalcule le défaut du quota =
  `plan.total_seats − blocked` (réinitialisation au défaut vendables).
- Corriger le getter `sellableSeats` (~l.160-163) :
  ```ts
  get sellableSeats(): number {
    const plan = this.seatingPlans.find(p => p.id === this.form?.get('seating_plan_id')?.value);
    const total = plan ? plan.total_seats : 0;
    const blocked = +this.form?.get('blocked_seats_count')?.value || 0;
    return Math.max(0, total - blocked);
  }
  ```

- [ ] **Step 2 : voyages-list — champ quota éditable** (`.html` ~l.160-162)

Retirer `readonly` de l'input `max_reservations` ; relabel `trips.list.f_max_res` →
« Places réservables » ; mettre l'indice `f_max_res_hint` à « ≤ places vendables ». Le champ
« Places vendables » (l.166, `sellableSeats`, disabled) reste.

- [ ] **Step 3 : Settings — retrait archive**

- `settings.component.ts` : retirer `archive_delay_days: [365]` du `fb.group`.
- `settings.component.html` : supprimer le bloc `<div ...>…f_archive…archive_delay_days…</div>` (l.20).
- `voyages-config.models.ts` : retirer `archive_delay_days: number;` (l.132).

- [ ] **Step 4 : i18n (fr/en/es/pt)**

- `trips.list.f_max_res` → « Places réservables » / "Reservable seats" / "Plazas reservables" / "Lugares reserváveis".
- `trips.list.f_max_res_hint` → « Ne peut pas dépasser les places vendables. » (+ EN/ES/PT).
- Retirer `vcfg.set.f_archive` des 4 locales (devenu inutilisé). `python json.load/dump` + revérifier le parse.

- [ ] **Step 5 : Build (gate)**

Run: `cd angular && grep -rn "archive_delay_days" src | grep -v spec` (doit être vide) puis `npx ng build --configuration development`
Expected: `Application bundle generation complete.`

- [ ] **Step 6 : Commit**

```bash
git add angular/src angular/public/i18n
git commit -m "feat(voyages): editable reservation quota + correct sellable seats; remove archive delay from settings (M12)"
```

---

## Notes d'implémentation

- Ne pas confondre `max_reservations` (quota de réservation) avec la capacité : après M12 le quota
  n'est plus égal au total des sièges mais aux places vendables par défaut, réductible par l'agent.
- `blocked_seats_count` (quota au niveau du voyage) bloque des `TripSeat` à la création ; les
  places vendables = AVAILABLE après blocage = `total − blocked`.
- Vérifier qu'aucun autre consommateur backend de `archive_delay_days` n'existe (grep l'a confirmé :
  modèle + serializer + front uniquement).
