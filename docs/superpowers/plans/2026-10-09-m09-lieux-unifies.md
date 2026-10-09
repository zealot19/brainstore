# M09 — Lieux unifiés — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Supprimer la distinction gare/arrêt : tout Lieu peut être départ/destination/escale ; on conserve un lien `agency` optionnel qui porte la livraison colis et la sync.

**Architecture:** Le modèle est déjà une table unique `ServicePoint`. On retire les champs `is_station`/`station_kind` et les règles qui en dépendent (contrainte origine/destination = gare, livraison colis = AGENCY), en remplaçant la règle colis par « destination rattachée à une agence ». La classe/table n'est pas renommée ; seul le libellé UI devient « Lieu(x) ». Le retrait du champ est atomique : modèle, vues, services, sérialiseurs, sélecteurs et tests backend changent dans une seule tâche pour garder la suite verte ; le frontend suit dans une seconde tâche.

**Tech Stack:** Django + DRF, pytest (`../env/bin/python -m pytest <path> -q --reuse-db` depuis `backend/`), migrations (`makemigrations --check --dry-run`) ; Angular standalone + Transloco, `npx ng build --configuration development`.

**Spec:** `docs/superpowers/specs/2026-10-09-m09-lieux-unifies-design.md`

## Global Constraints

- UI/texte en français (commentaires, libellés, messages).
- Ne **pas** renommer la classe `ServicePoint` ni la table ; libellé UI « Lieu / Lieux » uniquement.
- Conserver `agency` (FK optionnelle) sur `ServicePoint` ; conserver le contrôle origine ≠ destination.
- Commits as shimi, sans trailer Claude. Merge/push seulement sur demande explicite (`deploy` uniquement).
- `makemigrations --check --dry-run` doit dire « No changes detected » à la fin de la tâche 1.

## Review Focus

- **Colis vers un Lieu sans agence** → refus propre (ApplicationError, pas 500), message dédié. → Task 1, `test_parcel_requires_destination_agency`.
- **PATCH trajet** vers un Lieu quelconque → accepté ; origine ≠ destination toujours contrôlé. → Task 1, `test_route_patch_accepts_plain_lieu`.
- **RouteStop/Route lu en API** après retrait de `is_station` (le `source="service_point.is_station"`) → pas de référence morte / 500. → Task 1, `test_route_read_ok_without_station_fields`.
- **route_destinations / payloads booking** qui exposaient `is_station` → clé retirée sans casser le consommateur. → Task 1, `test_route_destinations_has_no_is_station` ; Task 2 sweep frontend.
- **Lieu existant sans agency** comme destination colis → refus propre (pas de lecture de `station_kind` résiduelle). → Task 1, couvert par `test_parcel_requires_destination_agency`.

---

## Task 1 : Backend — retrait des champs, règles dépendantes, sérialiseurs, sélecteurs, tests

**Files:**
- Modify: `backend/apps/voyages_config/models/network.py`
- Create: `backend/apps/voyages_config/migrations/XXXX_remove_station_fields.py` (via makemigrations)
- Modify: `backend/apps/voyages_config/config_api/views.py` (RouteListView.post ~325, RouteDetailView.patch ~360/365)
- Modify: `backend/apps/voyages_config/config_api/serializers.py` (ServicePointRead/Write, RouteStopRead)
- Modify: `backend/apps/voyages_consignment/services/parcel_services.py` (~44)
- Modify: `backend/apps/voyages_booking/config_api/serializers.py` (~54, 63)
- Modify: `backend/apps/voyages_booking/selectors/__init__.py` (~63, 77)
- Modify: `backend/apps/voyages_pricing/config_api/serializers.py` (~41-42), `.../views.py` (~137)
- Create: `backend/apps/voyages_config/test_lieux_unifies.py`
- Modify (sweep `is_station=`/`station_kind=` kwargs): tests under `apps/reporting/tests/`, `apps/voyages_trips/` (+ `dashboard/tests/`), `apps/voyages_booking/`, `apps/voyages_consignment/`, `apps/online_booking/tests/`, `apps/voyages_config/tests/test_config_api.py`
- Delete: `backend/apps/voyages_config/test_station_requires_agency.py`
- Modify: `backend/apps/voyages_booking/test_route_destinations.py`

**Interfaces:**
- Produces: `ServicePoint` sans `is_station`/`station_kind` ; `agency_id` reste le seul attribut d'« agence » ; règle colis = `destination_point.agency_id is not None`. Payloads config/booking/pricing sans `is_station`/`station_kind`.

- [ ] **Step 1 : Écrire les tests qui échouent** — `backend/apps/voyages_config/test_lieux_unifies.py`

```python
import pytest
from django.core.exceptions import ValidationError as DjangoValidationError
from apps.core.exceptions import ApplicationError
from apps.voyages_config.models import ServicePoint, Route, Town


@pytest.fixture
def ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, setup = create_company(name="Lieux Co", admin_email="lx@x.com",
                                    admin_first_name="A", admin_last_name="B")
    user = User.objects.get(email="lx@x.com")
    town = Town.objects.create(company=company, name="Douala")
    return company, setup, user, town


def test_servicepoint_has_no_station_fields():
    names = {f.name for f in ServicePoint._meta.get_fields()}
    assert "is_station" not in names and "station_kind" not in names


@pytest.mark.django_db
def test_route_accepts_plain_lieux(ctx):
    company, setup, user, town = ctx
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Origin")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="Dest")
    r = Route(company=company, code="R1", origin=o, destination=d)
    r.full_clean(exclude=["created_by", "updated_by", "company"])  # ne lève plus "doit être une gare"
    r.save()
    assert r.id


@pytest.mark.django_db
def test_route_rejects_same_origin_destination(ctx):
    company, setup, user, town = ctx
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="Origin")
    r = Route(company=company, code="R2", origin=o, destination=o)
    with pytest.raises(DjangoValidationError):
        r.full_clean(exclude=["created_by", "updated_by", "company"])


def _parcel_ctx(company, user, town, *, dest_has_agency):
    from apps.voyages_config.models import ConsignmentNature, ConsignmentType
    agency_id = None
    if dest_has_agency:
        from apps.system_config.models import Agency
        agency_id = Agency.objects.filter(company=company).first().id
    origin = ServicePoint.objects.create(company=company, town=town, code="O", name="Ag O")
    dest = ServicePoint.objects.create(company=company, town=town, code="D", name="Lieu D",
                                       agency_id=agency_id)
    nat = ConsignmentNature.objects.create(company=company, code="STD", name="Standard")
    typ = ConsignmentType.objects.create(company=company, code="CT", label="Carton", nature=nat)
    return origin, dest, nat, typ


@pytest.mark.django_db
def test_parcel_requires_destination_agency(ctx):
    from apps.voyages_consignment.services import parcel_services as P
    company, setup, user, town = ctx
    origin, dest, nat, typ = _parcel_ctx(company, user, town, dest_has_agency=False)
    with pytest.raises(ApplicationError):
        P.register_parcel(company, origin_point=origin, destination_point=dest,
                          consignment_type=typ, nature=nat, content="x",
                          sender_name="E", sender_phone="6", recipient_name="R",
                          recipient_phone="7", description="d", amount_due=0, user=user)


@pytest.mark.django_db
def test_parcel_accepts_destination_with_agency(ctx):
    from apps.voyages_consignment.services import parcel_services as P
    company, setup, user, town = ctx
    origin, dest, nat, typ = _parcel_ctx(company, user, town, dest_has_agency=True)
    p = P.register_parcel(company, origin_point=origin, destination_point=dest,
                          consignment_type=typ, nature=nat, content="x",
                          sender_name="E", sender_phone="6", recipient_name="R",
                          recipient_phone="7", description="d", amount_due=0, user=user)
    assert p.id
```

- [ ] **Step 2 : Lancer → échec**

Run: `../env/bin/python -m pytest apps/voyages_config/test_lieux_unifies.py -q --reuse-db`
Expected: FAIL — `test_servicepoint_has_no_station_fields` (champs encore présents), `test_route_accepts_plain_lieux` (clean rejette), `test_parcel_requires_destination_agency`/`_accepts_` (règle encore sur `station_kind`), `test_parcel_ctx` passe `agency_id=None` OK mais le service lit `station_kind`.

- [ ] **Step 3 : Modèle** — `models/network.py`

Supprimer de `ServicePoint` : la classe `StationKind`, les champs `is_station` et `station_kind`, et la méthode `clean()`. Passer `verbose_name = _("lieu")`. Dans `Route.clean()`, supprimer les deux blocs `if self.origin_id and not self.origin.is_station: ...` et destination ; conserver le bloc origine ≠ destination. (Laisser `RouteStop` tel quel : il référence un `service_point` quelconque.)

- [ ] **Step 4 : Migration**

Run: `../env/bin/python manage.py makemigrations voyages_config`
Expected: nouvelle migration avec `RemoveField(is_station)` + `RemoveField(station_kind)` (+ `AlterModelOptions` verbose_name). Pas de `RunPython` (aucun backfill).

- [ ] **Step 5 : Règle colis** — `parcel_services.py`

Remplacer :
```python
    if getattr(destination_point, "station_kind", "") != "AGENCY":
        raise ApplicationError(_("Le colis ne peut être envoyé que vers une agence."))
```
par :
```python
    if destination_point.agency_id is None:
        raise ApplicationError(_("Le colis ne peut être envoyé que vers un lieu rattaché à une agence."))
```

- [ ] **Step 6 : Vues trajets** — `voyages_config/config_api/views.py`

Dans `RouteListView.post`, supprimer :
```python
        if not origin.is_station or not dest.is_station:
            return error_response("Origine et destination doivent être des gares/agences.")
```
Dans `RouteDetailView.patch`, supprimer les deux contrôles `if not origin or not origin.is_station:` / `if not dest or not dest.is_station:` en gardant le `cfg_lookup` + l'affectation et le test « introuvable » (remplacer `if not origin or not origin.is_station` par `if not origin`). Conserver le contrôle origine ≠ destination.

- [ ] **Step 7 : Sérialiseurs & sélecteurs**

- `voyages_config/config_api/serializers.py` : retirer `is_station`, `station_kind`, `station_kind_display` de `ServicePointRead`/`ServicePointWrite` (déclarations + `Meta.fields`) ; dans `RouteStopRead`, retirer le champ `is_station = serializers.BooleanField(source="service_point.is_station", ...)` et sa clé dans `Meta.fields`. Conserver `agency_id`/`agency`.
- `voyages_booking/config_api/serializers.py` : retirer les deux champs `is_station = serializers.BooleanField()` (+ `Meta.fields` correspondants).
- `voyages_booking/selectors/__init__.py` : retirer la clé `"is_station": p.is_station` des deux dicts (~63, 77).
- `voyages_pricing/config_api/serializers.py` : retirer `is_station`/`station_kind` ; `voyages_pricing/config_api/views.py` (~137) : retirer `"is_station"`/`"station_kind"` du dict.

- [ ] **Step 8 : Lancer les nouveaux tests → vert**

Run: `../env/bin/python -m pytest apps/voyages_config/test_lieux_unifies.py -q --reuse-db`
Expected: PASS (6 tests).

- [ ] **Step 9 : Non-régression — balayage des suites impactées**

Retirer les kwargs `is_station=...` et `station_kind=...` de chaque `ServicePoint.objects.create(...)` dans les tests ; là où un test de **livraison/retrait colis** dépendait de `station_kind="AGENCY"`, remplacer par `agency=<agence>` (récupérer l'agence HQ via `Agency.objects.filter(company=company).first()` ou `setup["hq_agency_id"]`). Supprimer `apps/voyages_config/test_station_requires_agency.py`. Mettre à jour `apps/voyages_booking/test_route_destinations.py` (retirer `is_station` de l'assertion de clés) et `apps/voyages_config/tests/test_config_api.py:109` (payload sans `is_station`/`station_kind` ; agency_id conservé). Ajouter `test_route_destinations_has_no_is_station` (les dicts renvoyés n'ont plus la clé) et `test_route_read_ok_without_station_fields` (GET d'un trajet via `RouteDetailView` renvoie 200 et des escales sans `is_station`) et `test_route_patch_accepts_plain_lieu` (PATCH origine→Lieu sans agence = succès).

Run (suites les plus exposées) :
`../env/bin/python -m pytest apps/voyages_config apps/voyages_consignment apps/voyages_booking apps/voyages_trips apps/voyages_pricing apps/reporting apps/online_booking -q --reuse-db`
Expected: PASS, hormis les rouges de base déjà connus (cf. mémoire master-preexisting-test-failures) — vérifier que tout échec résiduel est bien rouge sur master avant de l'attribuer.

- [ ] **Step 10 : makemigrations --check**

Run: `../env/bin/python manage.py makemigrations --check --dry-run`
Expected: `No changes detected`.

- [ ] **Step 11 : Commit**

```bash
git add backend/apps/voyages_config backend/apps/voyages_consignment/services/parcel_services.py backend/apps/voyages_booking/config_api/serializers.py backend/apps/voyages_booking/selectors/__init__.py backend/apps/voyages_booking/test_route_destinations.py backend/apps/voyages_pricing backend/apps/reporting backend/apps/voyages_trips backend/apps/online_booking
git commit -m "feat(lieux): remove is_station/station_kind gate; any Lieu as origin/destination; parcel delivery requires agency link (M09)"
```

---

## Task 2 : Frontend — formulaire Lieu, modèles, libellés « Lieux »

**Files:**
- Modify: `angular/src/_api/models/voyages-config.models.ts` (interface `ServicePoint` + types route-point booking/pricing portant `is_station`/`station_kind`)
- Modify: `angular/src/_api/pages/voyages-config/service-points/service-points.component.ts`
- Modify: `angular/src/_api/pages/voyages-config/service-points/service-points.component.html`
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`
- Grep-sweep: tout autre `.ts`/`.html` lisant `is_station`/`station_kind`

**Interfaces:**
- Consumes: payloads backend sans `is_station`/`station_kind` (Task 1) ; `agency_id` conservé sur le Lieu.

- [ ] **Step 1 : Modèle TS**

Dans `voyages-config.models.ts`, retirer `is_station`, `station_kind`, `station_kind_display` de l'interface `ServicePoint` (et des interfaces route-point booking/pricing si elles les portent). Conserver `agency`.

- [ ] **Step 2 : Composant `.ts`**

Retirer `is_station`/`station_kind` du `fb.group`, de `openCreate` (reset) et `openEdit` (patchValue). Dans `submit`, supprimer `if (!v.is_station) v.station_kind = ''` et la ligne conditionnant `agency_id` sur `station_kind === 'AGENCY'` : `agency_id` est envoyé tel quel (ou `null`).

- [ ] **Step 3 : Composant `.html`**

Supprimer les badges station/arrêt du tableau (col. ~30-31), le switch « Gare/Agence » (~59), le bloc « Type de gare » (`station_kind`, ~61-62). Rendre le champ **Agence** (select, ~65-66) toujours affiché (plus de `@if (form.value.station_kind === 'AGENCY')`), optionnel (option « Aucune »). Conserver town, code, name, GPS, is_active.

- [ ] **Step 4 : i18n (fr/en/es/pt)**

Via `python json.load/dump` (revérifier le parse) : renommer la section « Points de service » → « Lieux » et le titre/`new`/`info` (`vcfg.sp.*`) en « Lieu(x) » ; mettre à jour `vcfg.towns.info`, `vcfg.routes.st_sp`, `vcfg.routes.f_stop_sp`, `trips.detail.stop_sp` (« point de service » → « lieu »). Retirer les clés `vcfg.sp.badge_station`, `badge_stop`, `f_is_station`, `f_station_kind`, `opt_terminal`, `opt_agency` (devenues inutilisées). EN/ES/PT : traductions équivalentes (« Places / Lugares / Locais »).

- [ ] **Step 5 : Sweep + build (gate)**

Run: `cd angular && grep -rn "is_station\|station_kind" src | grep -v spec` → doit être vide, puis
`npx ng build --configuration development`
Expected: `Application bundle generation complete.` ; plus aucune référence `is_station`/`station_kind` hors specs.

- [ ] **Step 6 : Commit**

```bash
git add angular/src/_api/models/voyages-config.models.ts angular/src/_api/pages/voyages-config/service-points angular/public/i18n/fr.json angular/public/i18n/en.json angular/public/i18n/es.json angular/public/i18n/pt.json
git commit -m "feat(lieux): Lieu form without gare/type flags, agency optional, relabel to Lieux (M09)"
```

---

## Notes d'implémentation

- Le retrait d'un champ de modèle casse immédiatement tout test passant `is_station=`/`station_kind=` en kwarg (TypeError) : le balayage (Step 9) fait partie intégrante de la tâche 1, pas d'une tâche ultérieure.
- `RouteStop` n'a **pas** de champ `is_station` ; seul le sérialiseur `RouteStopRead` en exposait un via `source=`. Le retrait du champ de sérialiseur suffit.
- Vérifier qu'aucun template frontend n'affiche encore un badge/condition `is_station` (sweep Step 5).
