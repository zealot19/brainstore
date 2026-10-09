# M11 — Types de voyage — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Un objet de configuration `VoyageType` (Départ/Complément/Additif, Départ par défaut), gérable par l'utilisateur ; le voyage porte une FK `voyage_type`, présélectionnée sur le défaut à la création.

**Architecture:** Nouveau modèle config `VoyageType` (`_CompanyScoped`) calqué sur `CrewMemberType` + FK `Trip.voyage_type`. Résolution du défaut dans `create_trip`. CRUD config générique (`_pair`). Seed amorcé au bootstrap société + backfill des sociétés/voyages existants par migration. Frontend : écran config calqué sur `crew-member-types` + select sur le formulaire de voyage.

**Tech Stack:** Django + DRF, pytest (`../env/bin/python -m pytest <path> -q --reuse-db` depuis `backend/`) ; Angular standalone + Transloco, `npx ng build --configuration development`.

**Spec:** `docs/superpowers/specs/2026-10-09-m11-types-de-voyage-design.md`

## Global Constraints

- UI/texte en français. Commits as shimi, sans trailer Claude. Merge/push `deploy` seulement sur demande.
- Un seul `VoyageType.is_default` par société. `Trip.voyage_type` nullable (défaut résolu à la création).
- Hors scope : aucun lien parent ni comportement différencié par type.
- `makemigrations --check --dry-run` = « No changes detected » en fin de tâche 1.

## Review Focus

- **Second type marqué défaut** → l'ancien défaut est retiré. → Task 1 `test_single_default_per_company`.
- **Voyage créé sans voyage_type_id** → reçoit le défaut société. → Task 1 `test_create_trip_defaults_to_company_default_type`.
- **voyage_type_id d'une autre société / introuvable** → 404, pas de fuite. → Task 1 `test_trip_create_rejects_foreign_voyage_type`.
- **Société sans défaut** → create_trip laisse null, pas de plantage. → Task 1 `test_create_trip_no_default_leaves_null`.
- **Backfill scope société** → voyage existant reçoit le Départ de SA société. → migration + `test` au besoin.

---

## Task 1 : Backend — modèle VoyageType, FK Trip, défaut à la création, CRUD, seed, migration+backfill

**Files:**
- Create: `backend/apps/voyages_config/models/voyage_type.py`
- Modify: `backend/apps/voyages_config/models/__init__.py`, `admin.py`
- Modify: `backend/apps/voyages_config/config_api/serializers.py`, `config_api/views.py`, `urls.py`
- Modify: `backend/apps/voyages_config/services/defaults_seed.py`
- Modify: `backend/apps/voyages_trips/models/trip.py`
- Modify: `backend/apps/voyages_trips/services/trip_services.py`
- Modify: `backend/apps/voyages_trips/serializers.py`, `views.py`
- Create: migrations `voyages_config` (CreateModel) + `voyages_trips` (AddField + RunPython backfill)
- Create: `backend/apps/voyages_config/test_voyage_types.py`

**Interfaces:**
- Produces: `VoyageType(code,name,is_default)` + single-default `save()` ; `Trip.voyage_type` FK ; `create_trip(..., voyage_type=None)` resolving the company default ; `voyage_type_id` write / `voyage_type`+`voyage_type_name` read on Trip API.

- [ ] **Step 1 : Tests qui échouent** — `backend/apps/voyages_config/test_voyage_types.py`

```python
import pytest
from datetime import timedelta
from django.utils import timezone
from apps.voyages_config.models import VoyageType


@pytest.fixture
def ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, setup = create_company(name="VtCo", admin_email="vt@x.com",
                                    admin_first_name="A", admin_last_name="B")
    return company, setup, User.objects.get(email="vt@x.com")


def _default_type(company):
    return VoyageType.objects.filter(company=company, is_default=True, is_deleted=False).first()


def _trip(company, admin, **kw):
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.services.trip_services import create_trip
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    now = timezone.now() + timedelta(days=1)
    return create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                       user=admin, **kw)


def test_model_has_voyage_type_fields():
    names = {f.name for f in VoyageType._meta.get_fields()}
    assert {"code", "name", "is_default"} <= names


@pytest.mark.django_db
def test_single_default_per_company(ctx):
    company, setup, user = ctx
    a = VoyageType.objects.create(company=company, code="DEPART", name="Départ", is_default=True)
    b = VoyageType.objects.create(company=company, code="COMP", name="Complément", is_default=True)
    a.refresh_from_db()
    assert b.is_default and not a.is_default


@pytest.mark.django_db
def test_seed_creates_default_depart(ctx):
    # _bootstrap_company (create_company) seeds the 3 types; Départ is the default.
    company, setup, user = ctx
    assert VoyageType.objects.filter(company=company).count() >= 3
    d = _default_type(company)
    assert d is not None and d.code == "DEPART"


@pytest.mark.django_db
def test_create_trip_defaults_to_company_default_type(ctx):
    company, setup, user = ctx
    trip = _trip(company, user)  # no voyage_type passed
    assert trip.voyage_type_id == _default_type(company).id


@pytest.mark.django_db
def test_create_trip_explicit_type(ctx):
    company, setup, user = ctx
    comp = VoyageType.objects.get(company=company, code="COMPLEMENT")
    trip = _trip(company, user, voyage_type=comp)
    assert trip.voyage_type_id == comp.id


@pytest.mark.django_db
def test_create_trip_no_default_leaves_null(ctx):
    company, setup, user = ctx
    VoyageType.objects.filter(company=company).update(is_default=False)
    trip = _trip(company, user)
    assert trip.voyage_type_id is None


@pytest.mark.django_db
def test_trip_create_rejects_foreign_voyage_type(ctx):
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    company, setup, user = ctx
    # another company's type
    other, _ = create_company(name="OtherCo", admin_email="o2@x.com", admin_first_name="A", admin_last_name="B")
    foreign = VoyageType.objects.filter(company=other, code="DEPART").first()
    town = Town.objects.create(company=company, name="D"); o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    now = timezone.now() + timedelta(days=1)
    tok = str(CustomRefreshToken.for_user(user).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    r = c.post("/api/v1/voyages/trips/", {
        "route_id": str(route.id), "fare_class_id": str(fc.id),
        "scheduled_departure": now.isoformat(), "scheduled_arrival": (now + timedelta(hours=3)).isoformat(),
        "voyage_type_id": str(foreign.id),
    }, format="json")
    assert r.status_code == 404
```

- [ ] **Step 2 : Lancer → échec**

Run: `../env/bin/python -m pytest apps/voyages_config/test_voyage_types.py -q --reuse-db`
Expected: FAIL (VoyageType n'existe pas / pas de seed / create_trip sans voyage_type).

- [ ] **Step 3 : Modèle VoyageType** — `models/voyage_type.py`

```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class VoyageType(_CompanyScoped):
    code = models.CharField(_("code"), max_length=20)
    name = models.CharField(_("nom"), max_length=100)
    is_default = models.BooleanField(_("par défaut"), default=False)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type de voyage")
        ordering = ["code"]

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.is_default:
            VoyageType.objects.filter(company=self.company, is_default=True).exclude(pk=self.pk)\
                .update(is_default=False)

    def __str__(self):
        return f"{self.code} — {self.name}"
```
Exporter dans `models/__init__.py` (import + `__all__`) ; enregistrer dans `admin.py`.

- [ ] **Step 4 : FK Trip** — `voyages_trips/models/trip.py`

Ajouter après `fare_class` :
```python
    voyage_type = models.ForeignKey("voyages_config.VoyageType", verbose_name=_("type de voyage"),
                                    on_delete=models.PROTECT, null=True, blank=True, related_name="trips")
```

- [ ] **Step 5 : create_trip défaut** — `voyages_trips/services/trip_services.py`

Ajouter le paramètre `voyage_type=None` à `create_trip`. Avant `Trip.objects.create(...)` :
```python
    if voyage_type is None:
        from apps.voyages_config.models import VoyageType
        voyage_type = VoyageType.objects.filter(company=company, is_default=True, is_deleted=False).first()
```
Passer `voyage_type=voyage_type` au `Trip.objects.create(...)`. (Même défaut dans
`create_trip_from_pattern` : résoudre le défaut société avant la création.)

- [ ] **Step 6 : Seed** — `voyages_config/services/defaults_seed.py`

```python
_VOYAGE_TYPES = [("DEPART", "Départ", True), ("COMPLEMENT", "Complément", False), ("ADDITIF", "Additif", False)]

def _seed_voyage_types(company, created_by):
    n = 0
    for code, name, is_default in _VOYAGE_TYPES:
        if VoyageType.objects.filter(company=company, code=code).exists():
            continue
        VoyageType.objects.create(company=company, code=code, name=name, is_default=is_default,
                                  created_by=created_by)
        n += 1
    return n
```
Importer `VoyageType` ; ajouter `+ _seed_voyage_types(company, created_by)` à la somme de `seed_voyages_defaults`.

- [ ] **Step 7 : Serializers & vue Trip** — `voyages_trips/serializers.py` + `views.py`

- `TripListSerializer` : ajouter champ `voyage_type_name = serializers.CharField(source="voyage_type.name", read_only=True, default=None)` et `"voyage_type"`, `"voyage_type_name"` dans `Meta.fields` (hérité par `TripDetailSerializer`).
- `TripCreateSerializer` et `TripUpdateSerializer` : ajouter
  `voyage_type_id = serializers.UUIDField(required=False, allow_null=True, default=None)`.
- Vue création (`views.py`, bloc `create_trip`) : après la résolution des autres FK :
```python
        from apps.voyages_config.models import VoyageType
        voyage_type = _cfg(VoyageType, d.get("voyage_type_id"), company) if d.get("voyage_type_id") else None
        if d.get("voyage_type_id") and not voyage_type:
            return error_response("Type de voyage introuvable.", status_code=404)
```
  puis passer `voyage_type=voyage_type` à `services.create_trip(...)`.
- Vue patch (TripUpdate) : si `voyage_type_id` présent, résoudre via `_cfg` (404 si introuvable) et affecter `trip.voyage_type`.

- [ ] **Step 8 : Migrations + backfill**

Run: `../env/bin/python manage.py makemigrations voyages_config voyages_trips`
Puis **éditer la migration voyages_trips** (celle qui ajoute `Trip.voyage_type`) pour ajouter,
APRÈS l'`AddField`, une `RunPython` (dépendance sur la migration `voyages_config` CreateModel) :
```python
def backfill(apps, schema_editor):
    VoyageType = apps.get_model("voyages_config", "VoyageType")
    Trip = apps.get_model("voyages_trips", "Trip")
    Company = apps.get_model("system_config", "Company")
    _TYPES = [("DEPART", "Départ", True), ("COMPLEMENT", "Complément", False), ("ADDITIF", "Additif", False)]
    for c in Company.objects.all():
        for code, name, is_default in _TYPES:
            VoyageType.objects.get_or_create(company=c, code=code,
                defaults={"name": name, "is_default": is_default})
        dep = VoyageType.objects.filter(company=c, code="DEPART").first()
        if dep:
            Trip.objects.filter(company=c, voyage_type__isnull=True).update(voyage_type=dep)
```
`dependencies` : la migration voyages_trips doit dépendre de la migration voyages_config qui
crée `VoyageType`. `reverse_code=migrations.RunPython.noop`.

- [ ] **Step 9 : Config CRUD** — `voyages_config/config_api/`

- `serializers.py` : `VoyageTypeRead(_ScopeMixin)` (fields `["id","code","name","is_default","company","scope","is_active","created_at","updated_at"]`) ; `VoyageTypeWrite(serializers.Serializer)` (`code` max20, `name` max100, `is_default` bool default False, `is_active` bool default True). Importer `VoyageType`.
- `views.py` : `VoyageTypeListView, VoyageTypeDetailView = _pair(VoyageType, S.VoyageTypeRead, S.VoyageTypeWrite, unique="code", search=("code","name"))`. Importer `VoyageType`.
- `urls.py` : `path("voyage-types/", v.VoyageTypeListView.as_view())`, `path("voyage-types/<uuid:pk>/", v.VoyageTypeDetailView.as_view())`.

- [ ] **Step 10 : Lancer nouveaux tests → vert**

Run: `../env/bin/python -m pytest apps/voyages_config/test_voyage_types.py -q --create-db`
Expected: PASS.

- [ ] **Step 11 : Non-régression + makemigrations check**

Run: `../env/bin/python -m pytest apps/voyages_config apps/voyages_trips -q --create-db`
Expected: PASS hors rouges de base connus (vérifier tout résiduel rouge sur master).
Puis `../env/bin/python manage.py makemigrations --check --dry-run` → « No changes detected ».

- [ ] **Step 12 : Commit**

```bash
git add backend/apps/voyages_config backend/apps/voyages_trips
git commit -m "feat(voyages): configurable VoyageType (Départ/Complément/Additif), trip.voyage_type defaulting to company default (M11)"
```

---

## Task 2 : Frontend — écran config Types de voyage + select au formulaire de voyage

**Files:**
- Create: `angular/src/_api/pages/voyages-config/voyage-types/voyage-types.component.{ts,html}`
- Create: `angular/src/_api/services/voyages-config/voyage-type.service.ts`
- Modify: `angular/src/_api/models/voyages-config.models.ts` (interface `VoyageType`)
- Modify: `angular/src/_api/config/api.config.ts` (`voyageTypes`/`voyageType`)
- Modify: `angular/src/app/core/helpers/routes.ts` (`vcVoyageTypes`) + `src/app/features/pages/pages.routes.ts`
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (entrée « Types de voyage »)
- Modify: `angular/src/_api/pages/voyages/list/voyages-list.component.{ts,html}` (select + modèle)
- Modify: `angular/src/_api/models/voyages.models.ts` (ou le modèle Trip front) : `voyage_type`/`voyage_type_name`
- Modify: `angular/public/i18n/{fr,en,es,pt}.json`

**Interfaces:**
- Consumes: `VoyageType{code,name,is_default}` + `voyage_type_id` sur le trip write (Task 1).

- [ ] **Step 1 : Modèle + service + api.config**

Modèle `voyages-config.models.ts` : `export interface VoyageType extends VcBase { code: string; name: string; is_default: boolean; }`.
`api.config.ts` (bloc VC, près de `crewMemberTypes`) : `voyageTypes: \`${VC}/voyage-types/\`, voyageType: (id: string) => \`${VC}/voyage-types/${id}/\`,`.
Service `voyage-type.service.ts` (calqué sur `crew-member-type.service.ts`) :
```ts
@Injectable({ providedIn: 'root' })
export class VoyageTypeService extends BaseConfigService<VoyageType> {
  constructor(http: HttpClient) { super(http, VOYAGES_CONFIG.voyageTypes, VOYAGES_CONFIG.voyageType); }
}
```

- [ ] **Step 2 : Composant config** — calquer `crew-member-types.component.{ts,html}`

Copier la structure (liste + modal CRUD, PaginatePipe, TablePaginator, HasPermission, Transloco).
Champs du formulaire : `code`, `name`, interrupteur `is_default`. Colonnes liste : code, nom,
badge « Défaut » si `is_default`. Permissions `transport.config.view/manage`. Sélecteur
`app-vc-voyage-types`, clés i18n sous `vcfg.vtype.*`.

- [ ] **Step 3 : Route + sidebar**

`routes.ts` : `vcVoyageTypes: '/voyages-config/voyage-types',`.
`pages.routes.ts` : `{ path: 'voyage-types', loadComponent: () => import('../../../_api/pages/voyages-config/voyage-types/voyage-types.component').then(m => m.VcVoyageTypesComponent) },`.
`sidebar.service.ts` : après l'entrée « Catégories tarifaires », ajouter
`{ menuValue: 'Types de voyage', route: routes.vcVoyageTypes, base: 'voyage-types', permission: 'transport.config.view', module: 'voyage' },`.

- [ ] **Step 4 : Select au formulaire de voyage** — `voyages/list/voyages-list.component.*`

`.ts` : importer `VoyageTypeService` + type ; champ `voyageTypes: VoyageType[] = [];` ; dans
`ngOnInit`, `this.vtSvc.list().subscribe(d => { this.voyageTypes = d; });` ; ajouter
`voyage_type_id: [null]` au `fb.group` ; dans `openCreate`/reset, présélectionner le défaut :
`voyage_type_id: (this.voyageTypes.find(t => t.is_default)?.id) ?? null` (recalculer après chargement) ;
en édition, `voyage_type_id: f.voyage_type_id`. Inclure `voyage_type_id` dans le payload de création/édition.
`.html` : ajouter un `<select formControlName="voyage_type_id">` (options = `voyageTypes`, libellé `name`) près du select Catégorie tarifaire.

- [ ] **Step 5 : i18n (fr/en/es/pt)**

Ajouter le bloc `vcfg.vtype` (title, subtitle, new, info, f_default, col_default…) et le label
« Type de voyage » du formulaire de voyage. Menu : l'entrée sidebar 'Types de voyage' est un
libellé brut (pas de clé) — rien à ajouter côté i18n pour le menu. `python json.load/dump` + revérifier le parse.

- [ ] **Step 6 : Build (gate)**

Run: `cd angular && npx ng build --configuration development`
Expected: `Application bundle generation complete.`

- [ ] **Step 7 : Commit**

```bash
git add angular/src angular/public/i18n
git commit -m "feat(voyages): Types de voyage config screen + voyage_type select on trip form (M11)"
```

---

## Notes d'implémentation

- Les modèles historiques en migration n'exécutent pas le `save()` surchargé : le seed de
  backfill pose explicitement `is_default` (un seul Départ par société), donc pas de conflit.
- `voyage_type` est nullable : une société sans type par défaut crée des voyages à `voyage_type=null`
  sans erreur (cas dégénéré).
- Ne pas confondre `voyage_type` (M11, type de voyage) avec `trip_type` existant (one_way/round_trip
  des billets) — ce sont des notions distinctes.
