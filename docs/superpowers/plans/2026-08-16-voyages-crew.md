# Voyages — Sous-module Équipage — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Gérer les membres d'équipage (roster) avec un type configurable, et rebrancher l'affectation des voyages dessus.

**Architecture:** `CrewMemberType` (config voyages, factory `_pair`) + `CrewMember` (roster voyages_trips) + rebranchement de `TripCrew` (member au lieu de driver+enum) ; 3 écrans Angular.

**Tech Stack:** Django + DRF, Angular (standalone), Bootstrap.

**Spec:** `docs/superpowers/specs/2026-08-16-voyages-crew-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`). Backend `backend/`, frontend `angular/`.
- Branche : `feature/voyages-crew` (déjà créée depuis `master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`. Frontend : `cd angular && npx ng build`.

**Rappels codebase (vérifiés) :**
- Config voyages : `_CompanyScoped` (base : `company` FK nullable) ; sérialiseurs `_ScopeMixin` (Read) + Serializer (Write) dans `voyages_config/config_api/serializers.py` ; factory `_pair(model, read, write, unique="name", search, perm=None)` dans `voyages_config/config_api/views.py` crée `<Model>ListView/<Model>DetailView` (permission par défaut `transport.config.*` ; ici on ne passe pas `perm` → défaut). Routes dans `voyages_config/urls.py` (`v.<Model>ListView.as_view()` etc.). Modèles importés dans `voyages_config/models/__init__.py`.
- Seeding société : `_bootstrap_company` (`system_config/services/company_services.py`) appelle déjà seed_default_roles/seed_accounting/seed_treasury_mapping (avant `return {`).
- `voyages_trips` : `TripCrew` (`trip`, `driver=FK(fleet.ExternalDriver)`, `role` enum DRIVER/CONVOYEUR/CONTROLEUR, `boarded_at`). `TripCrewSerializer` (driver_name, role_display) + `TripCrewWriteSerializer` (driver_id, role). `TripCrewView.post` résout ExternalDriver puis `TripCrew.objects.create(trip, driver, role)`. `trip_services.py` : `trip.crew.filter(is_deleted=False, role="DRIVER").exists()`. RBAC `voyage.crew.view/manage`.
- Réponses : `success_response`/`created_response`/`error_response` (`apps.core.responses`), `ApplicationError`, `HasModulePermission`+`IsAuthenticated`.
- Front : configs voyages = `_api/pages/voyages-config/*` (patron `fuel-types` + `BaseConfigService`), endpoints `VOYAGES_CONFIG` (`api.config.ts`, base `VC`), menu « Config Voyages » (`sidebar.service.ts`), routes `voyages-config/*` (`pages.routes.ts`). Affectation équipage = `_api/pages/voyages/trip-detail/`.

---

### Task 1: CM1 backend — CrewMemberType (config + seed)

**Files:**
- Create: `backend/apps/voyages_config/models/crew_member_type.py`
- Modify: `backend/apps/voyages_config/models/__init__.py`, `backend/apps/voyages_config/config_api/serializers.py`, `backend/apps/voyages_config/config_api/views.py`, `backend/apps/voyages_config/urls.py`
- Create: `backend/apps/voyages_config/services/crew_seed.py`, `backend/apps/voyages_config/management/commands/seed_crew_member_types.py`
- Modify: `backend/apps/system_config/services/company_services.py`
- Test: `backend/apps/voyages_config/test_crew_types.py`

**Interfaces:**
- Produces : `CrewMemberType(company, code, name, is_driver, is_active)` ; `seed_crew_member_types(company) -> int` ; endpoints `/voyages/config/crew-member-types/`.

- [ ] **Step 1: Modèle**

`backend/apps/voyages_config/models/crew_member_type.py` :
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class CrewMemberType(_CompanyScoped):
    code      = models.CharField(_("code"), max_length=20)
    name      = models.CharField(_("nom"), max_length=100)
    is_driver = models.BooleanField(_("est conducteur"), default=False)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type de membre d'équipage")
        verbose_name_plural = _("types de membre d'équipage")
        ordering = ["code"]

    def __str__(self):
        return f"{self.code} — {self.name}"
```
Dans `models/__init__.py` : ajouter `from .crew_member_type import CrewMemberType` et l'ajouter à `__all__`.

- [ ] **Step 2: Sérialiseurs**

Dans `config_api/serializers.py` : ajouter l'import `CrewMemberType` à la liste, puis :
```python
class CrewMemberTypeRead(_ScopeMixin):
    class Meta:
        model = CrewMemberType
        fields = ["id", "code", "name", "is_driver", "company", "scope",
                  "is_active", "created_at", "updated_at"]


class CrewMemberTypeWrite(serializers.Serializer):
    code      = serializers.CharField(max_length=20)
    name      = serializers.CharField(max_length=100)
    is_driver = serializers.BooleanField(required=False, default=False)
    is_active = serializers.BooleanField(required=False, default=True)
```

- [ ] **Step 3: Vues + routes**

Dans `config_api/views.py` : ajouter `CrewMemberType` à l'import des modèles, puis après la ligne `LoyaltyRuleListView, LoyaltyRuleDetailView = _pair(...)` :
```python
CrewMemberTypeListView, CrewMemberTypeDetailView = _pair(CrewMemberType, S.CrewMemberTypeRead, S.CrewMemberTypeWrite, unique="code", search=("code", "name"))
```
Dans `voyages_config/urls.py`, ajouter (près des fare-classes) :
```python
    path("crew-member-types/",           v.CrewMemberTypeListView.as_view()),
    path("crew-member-types/<uuid:pk>/", v.CrewMemberTypeDetailView.as_view()),
```

- [ ] **Step 4: Seed + hook + commande**

`backend/apps/voyages_config/services/crew_seed.py` :
```python
from apps.voyages_config.models import CrewMemberType

_DEFAULTS = [
    ("DRIVER", "Chauffeur", True),
    ("CONVOYEUR", "Convoyeur", False),
    ("CONTROLEUR", "Contrôleur", False),
]


def seed_crew_member_types(company, created_by=None) -> int:
    created = 0
    for code, name, is_driver in _DEFAULTS:
        if CrewMemberType.objects.filter(company=company, code=code).exists():
            continue
        CrewMemberType.objects.create(company=company, code=code, name=name, is_driver=is_driver, created_by=created_by)
        created += 1
    return created
```
Dans `company_services.py`, `_bootstrap_company`, après `seed_treasury_mapping(company, created_by=created_by)` :
```python
    from apps.voyages_config.services.crew_seed import seed_crew_member_types
    seed_crew_member_types(company, created_by=created_by)
```
`backend/apps/voyages_config/management/commands/seed_crew_member_types.py` :
```python
from django.core.management.base import BaseCommand
from apps.system_config.models import Company
from apps.voyages_config.services.crew_seed import seed_crew_member_types


class Command(BaseCommand):
    help = "Seed les types de membre d'équipage par société (idempotent)."

    def add_arguments(self, parser):
        parser.add_argument("--company", default=None)

    def handle(self, *args, **options):
        qs = Company.objects.filter(is_deleted=False)
        if options["company"]:
            qs = qs.filter(id=options["company"])
        for company in qs:
            n = seed_crew_member_types(company)
            self.stdout.write(f"{company.name}: {n} types créés")
        self.stdout.write(self.style.SUCCESS("Terminé."))
```
(Créer `backend/apps/voyages_config/management/__init__.py` et `.../commands/__init__.py` s'ils n'existent pas.)

- [ ] **Step 5: Migration + test**

`backend/apps/voyages_config/test_crew_types.py` :
```python
import pytest
from apps.voyages_config.models import CrewMemberType
from apps.voyages_config.services.crew_seed import seed_crew_member_types


def _company():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Crew Co", admin_email="cr@x.com", admin_first_name="A", admin_last_name="B")
    return company


@pytest.mark.django_db
def test_bootstrap_seeds_crew_types():
    c = _company()
    types = {t.code: t for t in CrewMemberType.objects.filter(company=c)}
    assert set(types) == {"DRIVER", "CONVOYEUR", "CONTROLEUR"}
    assert types["DRIVER"].is_driver is True


@pytest.mark.django_db
def test_seed_idempotent():
    c = _company()
    n = CrewMemberType.objects.filter(company=c).count()
    seed_crew_member_types(c)
    assert CrewMemberType.objects.filter(company=c).count() == n
```
Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py makemigrations voyages_config
../env/bin/python manage.py migrate voyages_config
../env/bin/python -m pytest apps/voyages_config/test_crew_types.py -q
../env/bin/python manage.py check
```
Expected : migration créée, 2 tests PASS, check OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_config backend/apps/system_config/services/company_services.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages-config): type de membre d'equipage configurable + seed"
```

---

### Task 2: CM2 backend — CrewMember (roster)

**Files:**
- Create: `backend/apps/voyages_trips/models/crew_member.py`
- Modify: `backend/apps/voyages_trips/models/__init__.py`, `backend/apps/voyages_trips/serializers.py`, `backend/apps/voyages_trips/views.py`, `backend/apps/voyages_trips/urls.py`
- Test: `backend/apps/voyages_trips/test_crew_members.py`

**Interfaces:**
- Consumes : `CrewMemberType`.
- Produces : `CrewMember(company, first_name, last_name, member_type, phone, license_number, is_active, notes)` + `full_name` ; endpoints `/voyages/trips/crew-members/`.

- [ ] **Step 1: Modèle**

`backend/apps/voyages_trips/models/crew_member.py` :
```python
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class CrewMember(BaseModel):
    company        = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                       on_delete=models.CASCADE, related_name="crew_members")
    first_name     = models.CharField(_("prénom"), max_length=150)
    last_name      = models.CharField(_("nom"), max_length=150)
    member_type    = models.ForeignKey("voyages_config.CrewMemberType", verbose_name=_("type"),
                                       on_delete=models.PROTECT, related_name="members")
    phone          = models.CharField(_("téléphone"), max_length=30, blank=True)
    license_number = models.CharField(_("n° de permis"), max_length=50, blank=True)
    is_active      = models.BooleanField(_("actif"), default=True)
    notes          = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("membre d'équipage")
        verbose_name_plural = _("membres d'équipage")
        ordering = ["last_name", "first_name"]

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}".strip()

    def __str__(self):
        return self.full_name
```
Dans `voyages_trips/models/__init__.py` : ajouter `from .crew_member import CrewMember` + `__all__`.

- [ ] **Step 2: Sérialiseurs**

Dans `voyages_trips/serializers.py` (imports : `from apps.voyages_trips.models import ... , CrewMember`) :
```python
class CrewMemberSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(read_only=True)
    member_type_name = serializers.CharField(source="member_type.name", read_only=True)
    is_driver = serializers.BooleanField(source="member_type.is_driver", read_only=True)

    class Meta:
        model = CrewMember
        fields = ["id", "first_name", "last_name", "full_name", "member_type", "member_type_name",
                  "is_driver", "phone", "license_number", "is_active"]


class CrewMemberWriteSerializer(serializers.Serializer):
    first_name     = serializers.CharField(max_length=150)
    last_name      = serializers.CharField(max_length=150)
    member_type_id = serializers.UUIDField()
    phone          = serializers.CharField(max_length=30, required=False, allow_blank=True, default="")
    license_number = serializers.CharField(max_length=50, required=False, allow_blank=True, default="")
    is_active      = serializers.BooleanField(required=False, default=True)
```

- [ ] **Step 3: Vues + routes**

Dans `voyages_trips/views.py` (imports : `from .models import ... , CrewMember` ; `from apps.voyages_config.models import CrewMemberType`), ajouter :
```python
class CrewMemberListView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.crew.view", "POST": "voyage.crew.manage"}

    def get(self, request):
        cid = request.user.company_id
        qs = CrewMember.objects.filter(is_deleted=False, company_id=cid).select_related("member_type").order_by("last_name")
        return success_response(S.CrewMemberSerializer(qs, many=True).data)

    def post(self, request):
        cid = request.user.company_id
        p = S.CrewMemberWriteSerializer(data=request.data); p.is_valid(raise_exception=True); d = p.validated_data
        mt = CrewMemberType.objects.filter(id=d["member_type_id"], company_id=cid, is_deleted=False).first()
        if not mt:
            return error_response("Type introuvable.", status_code=404)
        obj = CrewMember.objects.create(company_id=cid, first_name=d["first_name"], last_name=d["last_name"],
                                        member_type=mt, phone=d["phone"], license_number=d["license_number"],
                                        is_active=d["is_active"], created_by=request.user)
        return created_response(S.CrewMemberSerializer(obj).data)


class CrewMemberDetailView(APIView):
    permission_classes = [IsAuthenticated, HasModulePermission]
    permission_map = {"GET": "voyage.crew.view", "PATCH": "voyage.crew.manage", "DELETE": "voyage.crew.manage"}

    def _get(self, request, pk):
        return CrewMember.objects.filter(is_deleted=False, company_id=request.user.company_id, id=pk).first()

    def get(self, request, pk):
        o = self._get(request, pk)
        return success_response(S.CrewMemberSerializer(o).data) if o else error_response("Introuvable.", status_code=404)

    def patch(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response("Introuvable.", status_code=404)
        d = request.data
        for f in ("first_name", "last_name", "phone", "license_number", "is_active"):
            if f in d:
                setattr(o, f, d[f])
        if "member_type_id" in d:
            mt = CrewMemberType.objects.filter(id=d["member_type_id"], company_id=o.company_id, is_deleted=False).first()
            if not mt:
                return error_response("Type introuvable.", status_code=404)
            o.member_type = mt
        o.updated_by = request.user
        o.save()
        return success_response(S.CrewMemberSerializer(o).data)

    def delete(self, request, pk):
        o = self._get(request, pk)
        if not o:
            return error_response("Introuvable.", status_code=404)
        o.is_deleted = True; o.updated_by = request.user
        o.save(update_fields=["is_deleted", "updated_by", "updated_at"])
        return success_response(message="Membre supprimé.")
```
(Vérifier que `views.py` importe `IsAuthenticated, HasModulePermission`, `success_response/created_response/error_response`, et `from . import serializers as S` — sinon adapter aux imports existants du fichier.)

Dans `voyages_trips/urls.py`, ajouter :
```python
    path("crew-members/",           v.CrewMemberListView.as_view()),
    path("crew-members/<uuid:pk>/", v.CrewMemberDetailView.as_view()),
```

- [ ] **Step 4: Migration + test**

`backend/apps/voyages_trips/test_crew_members.py` :
```python
import json
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.voyages_config.models import CrewMemberType
from apps.voyages_trips.views import CrewMemberListView


def _ctx():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Crew2 Co", admin_email="cw@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="cw@x.com")
    return company, admin


@pytest.mark.django_db
def test_create_crew_member():
    company, admin = _ctx()
    mt = CrewMemberType.objects.get(company=company, code="DRIVER")
    req = APIRequestFactory().post("/x", {"first_name": "Jean", "last_name": "Kamga",
                                          "member_type_id": str(mt.id), "phone": "690"}, format="json")
    force_authenticate(req, user=admin)
    r = CrewMemberListView.as_view()(req); r.render()
    assert r.status_code in (200, 201)
    data = json.loads(r.content)["data"]
    assert data["full_name"] == "Jean Kamga"
    assert data["is_driver"] is True
```
Run:
```
../env/bin/python manage.py makemigrations voyages_trips
../env/bin/python manage.py migrate voyages_trips
../env/bin/python -m pytest apps/voyages_trips/test_crew_members.py -q
../env/bin/python manage.py check
```
Expected : migration créée, test PASS, check OK.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_trips
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages): roster des membres d'equipage (CRUD)"
```

---

### Task 3: CM3 backend — rebrancher `TripCrew` sur `CrewMember`

**Files:**
- Modify: `backend/apps/voyages_trips/models/support.py`, `backend/apps/voyages_trips/serializers.py`, `backend/apps/voyages_trips/views.py`, `backend/apps/voyages_trips/services/trip_services.py`
- Test: `backend/apps/voyages_trips/test_crew_members.py` (ajout)

- [ ] **Step 1: Modèle TripCrew**

Dans `support.py`, classe `TripCrew` : **supprimer** la classe interne `Role`, le champ `driver` et le champ `role` ; **ajouter** :
```python
    member = models.ForeignKey("voyages_trips.CrewMember", verbose_name=_("membre d'équipage"),
                               on_delete=models.PROTECT, null=True, related_name="trip_assignments")
```
et changer `ordering = ["trip", "role"]` → `ordering = ["trip", "id"]`, et `__str__` :
```python
    def __str__(self):
        return f"{self.trip_id} — {self.member_id}"
```

- [ ] **Step 2: Sérialiseurs**

Dans `serializers.py`, remplacer `TripCrewSerializer` et `TripCrewWriteSerializer` par :
```python
class TripCrewSerializer(serializers.ModelSerializer):
    member_name      = serializers.CharField(source="member.full_name", read_only=True, default=None)
    member_type_name = serializers.CharField(source="member.member_type.name", read_only=True, default=None)
    is_driver        = serializers.BooleanField(source="member.member_type.is_driver", read_only=True, default=False)

    class Meta:
        model = TripCrew
        fields = ["id", "member", "member_name", "member_type_name", "is_driver", "boarded_at"]


class TripCrewWriteSerializer(serializers.Serializer):
    member_id = serializers.UUIDField()
```

- [ ] **Step 3: Vue d'affectation**

Dans `views.py`, `TripCrewView.post` : remplacer la résolution du conducteur/rôle par :
```python
        from apps.voyages_trips.models import CrewMember
        member = CrewMember.objects.filter(id=payload.validated_data["member_id"],
                                           company=company, is_deleted=False).first()
        if not member:
            return error_response("Membre d'équipage introuvable.", status_code=404)
        crew = TripCrew.objects.create(trip=trip, member=member, created_by=request.user)
        return created_response(S.TripCrewSerializer(crew).data)
```
(retirer l'import/résolution `ExternalDriver` et `role`.)

- [ ] **Step 4: Règle « chauffeur requis »**

Dans `services/trip_services.py`, remplacer `trip.crew.filter(is_deleted=False, role="DRIVER").exists()` par
`trip.crew.filter(is_deleted=False, member__member_type__is_driver=True).exists()`.

- [ ] **Step 5: Migration + test d'affectation**

Ajouter à `apps/voyages_trips/test_crew_members.py` :
```python
@pytest.mark.django_db
def test_assign_crew_member_to_trip_via_serializer():
    from apps.voyages_trips.models import CrewMember, TripCrew
    from apps.voyages_trips.serializers import TripCrewSerializer
    company, admin = _ctx()
    mt = CrewMemberType.objects.get(company=company, code="DRIVER")
    m = CrewMember.objects.create(company=company, first_name="Paul", last_name="N", member_type=mt, created_by=admin)
    # sérialisation d'une affectation (sans construire un Trip complet)
    crew = TripCrew(member=m)
    data = TripCrewSerializer(crew).data
    assert data["member_name"] == "Paul N"
    assert data["is_driver"] is True
```
Run:
```
../env/bin/python manage.py makemigrations voyages_trips
../env/bin/python manage.py migrate voyages_trips
../env/bin/python -m pytest apps/voyages_trips/ -q
../env/bin/python manage.py check
```
Expected : migration (suppression driver/role, ajout member) ; tests PASS ; check OK.
*(Si des tests existants de `voyages_trips` référencent `driver`/`role` de crew, les adapter au nouveau champ `member`.)*

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_trips
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages): affectation d'equipage via CrewMember (remplace driver+role)"
```

---

### Task 4: CM1 frontend — écran Types d'équipage

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (bloc `VOYAGES_CONFIG`), `angular/src/_api/models/voyages-config.models.ts`
- Create: `angular/src/_api/services/voyages-config/crew-member-type.service.ts`, `angular/src/_api/pages/voyages-config/crew-member-types/crew-member-types.component.{ts,html}`
- Modify: `routes.ts`, `pages.routes.ts`, `sidebar.service.ts`

- [ ] **Step 1: Endpoint + modèle + service**

Dans `api.config.ts`, bloc `VOYAGES_CONFIG` : ajouter
```ts
  crewMemberTypes: `${VC}/crew-member-types/`,  crewMemberType: (id: string) => `${VC}/crew-member-types/${id}/`,
```
Dans `voyages-config.models.ts` : ajouter
```ts
export interface CrewMemberType { id: string; code: string; name: string; is_driver: boolean; is_active: boolean; scope?: string; }
```
`angular/src/_api/services/voyages-config/crew-member-type.service.ts` :
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { CrewMemberType } from '../../models/voyages-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class CrewMemberTypeService extends BaseConfigService<CrewMemberType> {
  constructor(http: HttpClient) { super(http, VOYAGES_CONFIG.crewMemberTypes, VOYAGES_CONFIG.crewMemberType); }
}
```

- [ ] **Step 2: Composant (.ts)**

`crew-member-types.component.ts` :
```ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrewMemberTypeService } from '../../../services/voyages-config/crew-member-type.service';
import { CrewMemberType } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-vc-crew-member-types',
  templateUrl: './crew-member-types.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VcCrewMemberTypesComponent implements OnInit {
  rows: CrewMemberType[] = []; filtered: CrewMemberType[] = []; loading = true; search = '';
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;
  constructor(private svc: CrewMemberTypeService, private fb: FormBuilder) {}
  ngOnInit(): void { this.form = this.fb.group({ code: ['', Validators.required], name: ['', Validators.required], is_driver: [false], is_active: [true] }); this.load(); }
  load(): void { this.loading = true; this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false }); }
  applyFilter(): void { const q = this.search.toLowerCase(); this.filtered = this.rows.filter(r => !q || r.code.toLowerCase().includes(q) || r.name.toLowerCase().includes(q)); }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ code: '', name: '', is_driver: false, is_active: true }); }
  openEdit(r: CrewMemberType): void { this.editId = r.id; this.errorMsg = ''; this.form.reset({ code: r.code, name: r.name, is_driver: r.is_driver, is_active: r.is_active }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const a = this.editId ? this.svc.update(this.editId, this.form.value) : this.svc.create(this.form.value);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); }, error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  delete(r: CrewMemberType): void { if (!confirm('Supprimer ?')) return; this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') }); }
  private close(): void { document.getElementById('cmt-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```

- [ ] **Step 3: Composant (.html)**

`crew-member-types.component.html` :
```html
<div class="page-header">
  <div class="add-item d-flex"><div class="page-title"><h4>Types d'équipage</h4><h6>Chauffeur, Convoyeur, Contrôleur…</h6></div></div>
  <div class="page-btn"><a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cmt-modal" *hasPermission="'transport.config.manage'" (click)="openCreate()"><i class="ti ti-circle-plus me-2"></i>Nouveau type</a></div>
</div>
<app-info-banner text="Types de membre d'équipage. Cochez « conducteur » pour les types autorisés à conduire (règle : un voyage exige au moins un conducteur)."></app-info-banner>
<div class="card table-list-card">
  <div class="card-header"><div class="search-set"><div class="search-input"><input [(ngModel)]="search" (ngModelChange)="applyFilter()" type="search" class="form-control" placeholder="Rechercher…" /></div></div></div>
  <div class="card-body p-0">
    @if (loading) { <div class="text-center py-5"><div class="spinner-border text-primary"></div></div> }
    @else {
      <div class="table-responsive"><table class="table datanew">
        <thead class="thead-light"><tr><th>Code</th><th>Nom</th><th>Conducteur</th><th>Actif</th><th class="no-sort">Actions</th></tr></thead>
        <tbody>
          @for (r of filtered; track r.id) {
            <tr>
              <td class="fw-medium">{{ r.code }}</td><td>{{ r.name }}</td>
              <td>@if (r.is_driver) { <span class="badge bg-primary">Oui</span> } @else { <span class="text-muted">—</span> }</td>
              <td>@if (r.is_active) { <span class="badge bg-success">Actif</span> } @else { <span class="badge bg-secondary">Inactif</span> }</td>
              <td class="action-table-data"><div class="edit-delete-action d-flex align-items-center">
                <a href="javascript:void(0);" class="me-2 p-2 d-flex align-items-center border rounded" data-bs-toggle="modal" data-bs-target="#cmt-modal" *hasPermission="'transport.config.manage'" (click)="openEdit(r)" title="Modifier"><i class="ti ti-edit me-1"></i>Modifier</a>
                <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded" *hasPermission="'transport.config.manage'" (click)="delete(r)" title="Supprimer"><i class="ti ti-trash text-danger me-1"></i>Supprimer</a>
              </div></td>
            </tr>
          } @empty { <tr><td colspan="5" class="text-center py-4 text-muted">Aucun type.</td></tr> }
        </tbody>
      </table></div>
    }
  </div>
</div>
<div class="modal fade" id="cmt-modal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">
  <div class="modal-header"><h5 class="modal-title">{{ editId ? 'Modifier le type' : 'Nouveau type' }}</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <form [formGroup]="form" (ngSubmit)="submit()"><div class="modal-body">
    @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
    <div class="row">
      <div class="col-md-5 mb-3"><label class="form-label">Code <span class="text-danger">*</span></label><input formControlName="code" type="text" class="form-control" /></div>
      <div class="col-md-7 mb-3"><label class="form-label">Nom <span class="text-danger">*</span></label><input formControlName="name" type="text" class="form-control" /></div>
    </div>
    <div class="form-check form-switch mb-2"><input formControlName="is_driver" type="checkbox" class="form-check-input" id="cmt-driver" /><label class="form-check-label" for="cmt-driver">Est conducteur</label></div>
    <div class="form-check form-switch"><input formControlName="is_active" type="checkbox" class="form-check-input" id="cmt-active" /><label class="form-check-label" for="cmt-active">Actif</label></div>
  </div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button><button type="submit" class="btn btn-primary" [disabled]="form.invalid || saving">{{ editId ? 'Enregistrer' : 'Créer' }}</button></div></form>
</div></div></div>
```

- [ ] **Step 4: Route + menu**

`routes.ts` : ajouter `vcCrewMemberTypes: '/voyages-config/crew-member-types',` et `vcCrewMembers: '/voyages-config/crew-members',` (près des autres `vc*`).
`pages.routes.ts` : dans le bloc `path: 'voyages-config'`, ajouter :
```ts
                { path: 'crew-member-types', loadComponent: () => import('../../../_api/pages/voyages-config/crew-member-types/crew-member-types.component').then(m => m.VcCrewMemberTypesComponent) },
```
`sidebar.service.ts` : dans le groupe « Config Voyages » (subMenus), ajouter :
```ts
            { menuValue: "Types d'équipage", route: routes.vcCrewMemberTypes, base: 'crew-member-types', permission: 'transport.config.view' },
```

- [ ] **Step 5: Build + commit**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -12`
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/config/api.config.ts angular/src/_api/models/voyages-config.models.ts angular/src/_api/services/voyages-config/crew-member-type.service.ts angular/src/_api/pages/voyages-config/crew-member-types angular/src/app/core/helpers/routes.ts angular/src/app/features/pages/pages.routes.ts angular/src/app/core/service/sidebar/sidebar.service.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages-fe): ecran Types d'equipage"
```

---

### Task 5: CM2 frontend — écran Membres d'équipage

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (bloc `VOYAGES_CONFIG`)
- Create: `angular/src/_api/models/crew.models.ts`, `angular/src/_api/services/voyages/crew-member.service.ts`, `angular/src/_api/pages/voyages-config/crew-members/crew-members.component.{ts,html}`
- Modify: `pages.routes.ts`, `sidebar.service.ts`

- [ ] **Step 1: Endpoints + modèle + service**

Dans `api.config.ts`, ajouter (après le bloc VOYAGES_CONFIG ou dans un bloc dédié) :
```ts
const VT = `${API_BASE}/voyages/trips`;
export const VOYAGES_TRIPS = {
  crewMembers: `${VT}/crew-members/`,  crewMember: (id: string) => `${VT}/crew-members/${id}/`,
};
```
`angular/src/_api/models/crew.models.ts` :
```ts
export interface CrewMember {
  id: string; first_name: string; last_name: string; full_name: string;
  member_type: string; member_type_name: string; is_driver: boolean;
  phone: string; license_number: string; is_active: boolean;
}
```
`angular/src/_api/services/voyages/crew-member.service.ts` :
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES_TRIPS } from '../../config/api.config';
import { CrewMember } from '../../models/crew.models';

@Injectable({ providedIn: 'root' })
export class CrewMemberService {
  constructor(private http: HttpClient) {}
  list(): Observable<CrewMember[]> { return this.http.get<CrewMember[]>(VOYAGES_TRIPS.crewMembers); }
  create(data: Record<string, unknown>): Observable<CrewMember> { return this.http.post<CrewMember>(VOYAGES_TRIPS.crewMembers, data); }
  update(id: string, data: Record<string, unknown>): Observable<CrewMember> { return this.http.patch<CrewMember>(VOYAGES_TRIPS.crewMember(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(VOYAGES_TRIPS.crewMember(id)); }
}
```
(Le backend CM2 renvoie `success_response(list)` → l'interceptor déballe en tableau ; création/maj → objet.)

- [ ] **Step 2: Composant (.ts)**

`crew-members.component.ts` :
```ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrewMemberService } from '../../../services/voyages/crew-member.service';
import { CrewMember } from '../../../models/crew.models';
import { CrewMemberTypeService } from '../../../services/voyages-config/crew-member-type.service';
import { CrewMemberType } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-vc-crew-members',
  templateUrl: './crew-members.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VcCrewMembersComponent implements OnInit {
  rows: CrewMember[] = []; filtered: CrewMember[] = []; loading = true; search = '';
  types: CrewMemberType[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;
  constructor(private svc: CrewMemberService, private typeSvc: CrewMemberTypeService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({ first_name: ['', Validators.required], last_name: ['', Validators.required],
      member_type_id: [null, Validators.required], phone: [''], license_number: [''], is_active: [true] });
    this.typeSvc.list().subscribe({ next: d => this.types = d.filter(t => t.is_active) });
    this.load();
  }
  load(): void { this.loading = true; this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false }); }
  applyFilter(): void { const q = this.search.toLowerCase(); this.filtered = this.rows.filter(r => !q || (r.full_name || '').toLowerCase().includes(q)); }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ first_name: '', last_name: '', member_type_id: null, phone: '', license_number: '', is_active: true }); }
  openEdit(r: CrewMember): void { this.editId = r.id; this.errorMsg = ''; this.form.reset({ first_name: r.first_name, last_name: r.last_name, member_type_id: r.member_type, phone: r.phone, license_number: r.license_number, is_active: r.is_active }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const a = this.editId ? this.svc.update(this.editId, this.form.value) : this.svc.create(this.form.value);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); }, error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  delete(r: CrewMember): void { if (!confirm('Supprimer ?')) return; this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') }); }
  private close(): void { document.getElementById('cm-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```

- [ ] **Step 3: Composant (.html)**

`crew-members.component.html` :
```html
<div class="page-header">
  <div class="add-item d-flex"><div class="page-title"><h4>Membres d'équipage</h4><h6>Chauffeurs, convoyeurs, contrôleurs</h6></div></div>
  <div class="page-btn"><a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cm-modal" *hasPermission="'voyage.crew.manage'" (click)="openCreate()"><i class="ti ti-circle-plus me-2"></i>Nouveau membre</a></div>
</div>
<app-info-banner text="Roster des membres d'équipage affectables aux voyages. Le type détermine le rôle (dont « conducteur »)."></app-info-banner>
<div class="card table-list-card">
  <div class="card-header"><div class="search-set"><div class="search-input"><input [(ngModel)]="search" (ngModelChange)="applyFilter()" type="search" class="form-control" placeholder="Rechercher…" /></div></div></div>
  <div class="card-body p-0">
    @if (loading) { <div class="text-center py-5"><div class="spinner-border text-primary"></div></div> }
    @else {
      <div class="table-responsive"><table class="table datanew">
        <thead class="thead-light"><tr><th>Nom</th><th>Type</th><th>Téléphone</th><th>N° permis</th><th>Actif</th><th class="no-sort">Actions</th></tr></thead>
        <tbody>
          @for (r of filtered; track r.id) {
            <tr>
              <td class="fw-medium">{{ r.full_name }}</td>
              <td><span class="badge bg-info">{{ r.member_type_name }}</span></td>
              <td>{{ r.phone || '—' }}</td><td>{{ r.license_number || '—' }}</td>
              <td>@if (r.is_active) { <span class="badge bg-success">Actif</span> } @else { <span class="badge bg-secondary">Inactif</span> }</td>
              <td class="action-table-data"><div class="edit-delete-action d-flex align-items-center">
                <a href="javascript:void(0);" class="me-2 p-2 d-flex align-items-center border rounded" data-bs-toggle="modal" data-bs-target="#cm-modal" *hasPermission="'voyage.crew.manage'" (click)="openEdit(r)" title="Modifier"><i class="ti ti-edit me-1"></i>Modifier</a>
                <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded" *hasPermission="'voyage.crew.manage'" (click)="delete(r)" title="Supprimer"><i class="ti ti-trash text-danger me-1"></i>Supprimer</a>
              </div></td>
            </tr>
          } @empty { <tr><td colspan="6" class="text-center py-4 text-muted">Aucun membre.</td></tr> }
        </tbody>
      </table></div>
    }
  </div>
</div>
<div class="modal fade" id="cm-modal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">
  <div class="modal-header"><h5 class="modal-title">{{ editId ? 'Modifier le membre' : 'Nouveau membre' }}</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <form [formGroup]="form" (ngSubmit)="submit()"><div class="modal-body">
    @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
    <div class="row">
      <div class="col-md-6 mb-3"><label class="form-label">Prénom <span class="text-danger">*</span></label><input formControlName="first_name" type="text" class="form-control" /></div>
      <div class="col-md-6 mb-3"><label class="form-label">Nom <span class="text-danger">*</span></label><input formControlName="last_name" type="text" class="form-control" /></div>
    </div>
    <div class="mb-3"><label class="form-label">Type <span class="text-danger">*</span></label>
      <select formControlName="member_type_id" class="form-select"><option [ngValue]="null">— Choisir —</option>@for (t of types; track t.id) { <option [ngValue]="t.id">{{ t.name }}</option> }</select>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3"><label class="form-label">Téléphone</label><input formControlName="phone" type="text" class="form-control" /></div>
      <div class="col-md-6 mb-3"><label class="form-label">N° de permis</label><input formControlName="license_number" type="text" class="form-control" /></div>
    </div>
    <div class="form-check form-switch"><input formControlName="is_active" type="checkbox" class="form-check-input" id="cm-active" /><label class="form-check-label" for="cm-active">Actif</label></div>
  </div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button><button type="submit" class="btn btn-primary" [disabled]="form.invalid || saving">{{ editId ? 'Enregistrer' : 'Créer' }}</button></div></form>
</div></div></div>
```

- [ ] **Step 4: Route + menu**

`pages.routes.ts` : dans `path: 'voyages-config'`, ajouter :
```ts
                { path: 'crew-members', loadComponent: () => import('../../../_api/pages/voyages-config/crew-members/crew-members.component').then(m => m.VcCrewMembersComponent) },
```
`sidebar.service.ts` : dans « Config Voyages », ajouter :
```ts
            { menuValue: "Membres d'équipage", route: routes.vcCrewMembers, base: 'crew-members', permission: 'voyage.crew.view' },
```

- [ ] **Step 5: Build + commit**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -12`
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/config/api.config.ts angular/src/_api/models/crew.models.ts angular/src/_api/services/voyages/crew-member.service.ts angular/src/_api/pages/voyages-config/crew-members angular/src/app/features/pages/pages.routes.ts angular/src/app/core/service/sidebar/sidebar.service.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages-fe): ecran Membres d'equipage"
```

---

### Task 6: CM3 frontend — affectation d'équipage (trip-detail)

**Files:**
- Modify: `angular/src/_api/pages/voyages/trip-detail/trip-detail.component.{ts,html}` (+ le service utilisé pour l'affectation crew)

- [ ] **Step 1: Lire l'existant**

Lire `trip-detail.component.ts` et `.html` : repérer comment l'équipage est ajouté (appel POST `.../crew/` avec `driver_id`/`role`) et affiché (`driver_name`/`role_display`).

- [ ] **Step 2: Adapter le service d'affectation**

Le POST d'affectation envoie désormais `{ member_id }` (au lieu de `{ driver_id, role }`). Charger la liste des membres via `CrewMemberService.list()` pour peupler le sélecteur ; envoyer `member_id`.

- [ ] **Step 3: Adapter l'affichage**

Remplacer les colonnes `driver_name`/`role_display` par `member_name` / `member_type_name` (+ badge « conducteur » si `is_driver`), conformément au nouveau `TripCrewSerializer`.

- [ ] **Step 4: Build + commit**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -12`
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/voyages/trip-detail
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages-fe): affectation d'equipage via membre (trip-detail)"
```

---

### Task 7: Vérification finale + fusion

- [ ] **Step 1: Migrations + suites + build**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py makemigrations --check --dry-run
../env/bin/python manage.py check
../env/bin/python -m pytest apps/voyages_config/ apps/voyages_trips/ apps/voyages_booking/ -q
cd ../angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -12
```
Expected : aucune migration manquante ; check OK ; tests PASS ; build OK.

- [ ] **Step 2: Migrer + backfill dev**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py migrate
../env/bin/python manage.py seed_crew_member_types
```

- [ ] **Step 3: Checklist manuelle (rapport final)**

- Config Voyages → « Types d'équipage » : 3 types seedés, dont Chauffeur (conducteur).
- Config Voyages → « Membres d'équipage » : créer un membre (type Chauffeur).
- Détail d'un voyage → affecter le membre à l'équipage ; badge « conducteur ».

- [ ] **Step 4: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- CM1 (CrewMemberType config + seed + config screen) → Tasks 1, 4. ✅
- CM2 (CrewMember roster CRUD + screen) → Tasks 2, 5. ✅
- CM3 (rewire TripCrew → member ; API + trip_services + trip-detail FE) → Tasks 3, 6. ✅
- `is_driver` conservé pour la règle « chauffeur requis » → Task 3 Step 4. ✅
- Seed par société + backfill → Task 1. ✅
- Hors périmètre (liens hr/fleet, planning/paie) → non inclus. ✅

**Placeholder scan :** code complet backend + FE (CM1/CM2). Task 6 (trip-detail) contient une étape de lecture de l'existant avant édition, avec instructions concrètes (payload `member_id`, colonnes `member_name`/`member_type_name`/`is_driver`) — non trivial car il faut voir la structure exacte de l'écran.

**Type consistency :** `CrewMemberType(code,name,is_driver,is_active)` cohérent (modèle, serializers, FE). `CrewMember(first_name,last_name,member_type,phone,license_number,is_active)` + `full_name`/`is_driver` cohérents (modèle, serializers, FE). `seed_crew_member_types(company, created_by=None) -> int` (déf. Task 1 + hook + commande + tests). `TripCrew.member` + `TripCrewWriteSerializer.member_id` + `TripCrewSerializer(member_name,member_type_name,is_driver)` cohérents (Task 3) et consommés par le FE (Task 6). Endpoints `VOYAGES_CONFIG.crewMemberTypes` (Task 4) et `VOYAGES_TRIPS.crewMembers` (Task 5) alignés aux routes backend (Tasks 1-2).
