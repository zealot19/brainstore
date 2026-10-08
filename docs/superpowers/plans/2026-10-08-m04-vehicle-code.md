# M04 — Formulaire de création de véhicule (Code véhicule) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter `code` (saisi, unique par société) comme identifiant du véhicule, conserver l'immatriculation, et retirer VIN / parking / coût d'acquisition du formulaire (colonnes conservées nullables).

**Architecture:** Backend : nouveau champ `Vehicle.code` (identifiant : `__str__`, `ordering`, `unique_together`) + migration avec backfill `code = license_plate` ; les serializers/vue/service d'écriture prennent `code` et cessent d'accepter vin/parking/acquisition_cost. Frontend : le formulaire ajoute Code, retire les 3 champs, la liste affiche Code. Aucune colonne supprimée → les 68/30 références à `license_plate` restent intactes.

**Tech Stack:** Django + DRF (pytest `../env/bin/python -m pytest <path> -q --reuse-db`). Angular standalone (gate : `npx ng build --configuration development`).

**Spec:** `docs/superpowers/specs/2026-10-08-m04-vehicle-code-design.md`

## Global Constraints

- **Conserver l'immatriculation** (`license_plate`) : toujours requise, inchangée. Ne PAS supprimer les colonnes `vin`/`parking`/`acquisition_cost` (nullables, juste retirées du formulaire/API d'écriture).
- **`code` = saisi, unique par société**, requis à la création. Devient l'identifiant (`__str__`, `ordering=["code"]`, `unique_together(company, code)`).
- **Ne pas churner** les ~68 points backend / 30 frontend qui affichent `license_plate` (la plaque est conservée).
- Backend auto-migre au déploiement (Dockerfile CMD).
- Commits : auteur shimi, pas de co-author. Push (quand demandé) : **`git push deploy master`** uniquement.

## Review Focus

- **Doublon de `code`** dans la même société → `ApplicationError` clair (création ET édition) — testé en Task 1.
- **Backfill migration** : les véhicules existants reçoivent `code = license_plate` (sinon `code` vide casserait `unique_together`/l'affichage) — couvert par l'opération RunPython ; vérifié via `makemigrations --check` clean + revue.
- **Vue création** : après retrait de `vin`/`acquisition_cost` du serializer, la vue ne doit plus faire `d["vin"]`/`d["acquisition_cost"]` (KeyError) — Task 1 met à jour la vue.
- **Édition sans `code`** (PATCH partiel) : l'update ne doit pas exiger `code` ni l'écraser s'il n'est pas fourni — testé en Task 1.
- **Template frontend** : un `formControlName` retiré mais encore référencé casse le build — le gate `ng build` l'attrape (Task 2).

---

## Task 1 : Backend — champ `code`, migration backfill, serializers/vue/service

**Files:**
- Modify: `backend/apps/fleet/models/vehicle.py` (champ `code`, `Meta`, `__str__`)
- Create: `backend/apps/fleet/migrations/0020_vehicle_code.py`
- Modify: `backend/apps/fleet/serializers.py` (create/update write + list/detail read)
- Modify: `backend/apps/fleet/services/vehicle_services.py` (`create_vehicle`, `update_vehicle`)
- Modify: `backend/apps/fleet/views.py` (VehicleListView.post : args passés à create_vehicle)
- Test: `backend/apps/fleet/tests/test_vehicle_code.py`

**Interfaces:**
- Produces: `Vehicle.code` (CharField, identifiant), `create_vehicle(..., code: str, ...)`, `update_vehicle` accepte `code`.

- [ ] **Step 1 : Test RED**

Créer `backend/apps/fleet/tests/test_vehicle_code.py` :

```python
import pytest
from apps.core.exceptions import ApplicationError
from apps.fleet.models import Vehicle, VehicleBrand, VehicleModel
from apps.fleet.services.vehicle_services import create_vehicle
from apps.fleet.serializers import VehicleCreateSerializer


@pytest.fixture
def ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="FleetCo", admin_email="fl@x.com",
                                admin_first_name="A", admin_last_name="B")
    user = User.objects.get(email="fl@x.com")
    brand = VehicleBrand.objects.create(name="Marque X", created_by=user)
    model = VehicleModel.objects.create(brand=brand, name="Bus", created_by=user)
    return company, user, model


def test_model_has_code_identifier():
    fields = {f.name for f in Vehicle._meta.get_fields()}
    assert "code" in fields
    assert ("company", "code") in [tuple(ut) for ut in Vehicle._meta.unique_together]


@pytest.mark.django_db
def test_create_vehicle_with_code(ctx):
    company, user, model = ctx
    v = create_vehicle(company=company, model=model, code="BUS-001",
                       license_plate="AB-123-CD", created_by=user)
    assert v.code == "BUS-001"
    assert str(v).startswith("BUS-001")


@pytest.mark.django_db
def test_duplicate_code_rejected(ctx):
    company, user, model = ctx
    create_vehicle(company=company, model=model, code="BUS-001",
                   license_plate="AB-1", created_by=user)
    with pytest.raises(ApplicationError):
        create_vehicle(company=company, model=model, code="BUS-001",
                       license_plate="AB-2", created_by=user)


def test_create_serializer_requires_code_and_drops_removed_fields():
    s = VehicleCreateSerializer()
    assert "code" in s.fields and s.fields["code"].required
    for gone in ("vin", "acquisition_cost", "parking_id"):
        assert gone not in s.fields
    # Les clés inconnues en entrée sont ignorées par DRF (pas de persistance) :
    s2 = VehicleCreateSerializer(data={"model_id": "00000000-0000-0000-0000-000000000000",
                                       "license_plate": "AB-9", "code": "BUS-9", "vin": "ZZZ"})
    s2.is_valid()
    assert "vin" not in s2.validated_data
```

- [ ] **Step 2 : Lancer, vérifier l'échec**

Run: `cd backend && ../env/bin/python -m pytest apps/fleet/tests/test_vehicle_code.py -q --reuse-db`
Expected: FAIL — `code` absent du modèle / `create_vehicle()` n'accepte pas `code` / serializer sans `code`.

- [ ] **Step 3 : Modèle — champ `code`, Meta, `__str__`**

Dans `backend/apps/fleet/models/vehicle.py` : après `license_plate = models.CharField(...)`, ajouter :

```python
    code          = models.CharField(_("code véhicule"), max_length=30, default="")
```

Dans `Meta` :

```python
        ordering = ["code"]
        unique_together = [("company", "license_plate"), ("company", "code")]
```

Remplacer `__str__` :

```python
    def __str__(self):
        return f"{self.code} — {self.model}"
```

- [ ] **Step 4 : Migration backfill**

Créer `backend/apps/fleet/migrations/0020_vehicle_code.py` :

```python
from django.db import migrations, models


def backfill_code(apps, schema_editor):
    Vehicle = apps.get_model("fleet", "Vehicle")
    for v in Vehicle.objects.all():
        if not v.code:
            v.code = v.license_plate or str(v.id)
            v.save(update_fields=["code"])


class Migration(migrations.Migration):

    dependencies = [
        ("fleet", "0019_remove_vehicle_partner_share_percent_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="vehicle",
            name="code",
            field=models.CharField(default="", max_length=30, verbose_name="code véhicule"),
        ),
        migrations.RunPython(backfill_code, migrations.RunPython.noop),
        migrations.AlterModelOptions(name="vehicle", options={"ordering": ["code"],
            "verbose_name": "véhicule", "verbose_name_plural": "véhicules"}),
        migrations.AlterUniqueTogether(
            name="vehicle",
            unique_together={("company", "license_plate"), ("company", "code")},
        ),
    ]
```

- [ ] **Step 5 : Serializers**

Dans `backend/apps/fleet/serializers.py` :

- `VehicleCreateSerializer` : ajouter après `model_id` : `code = serializers.CharField(max_length=30)` ; **supprimer** les lignes `vin = …`, `acquisition_cost = …`, `parking_id = …`.
- `VehicleUpdateSerializer` : ajouter `code = serializers.CharField(max_length=30, required=False)` ; **supprimer** `vin = …`, `acquisition_cost = …`, `parking_id = …`.
- `VehicleListSerializer.fields` et `VehicleDetailSerializer.fields` : ajouter `"code"` (après `"id"`).

- [ ] **Step 6 : Service**

Dans `backend/apps/fleet/services/vehicle_services.py`, `create_vehicle` : ajouter le paramètre `code: str = ""` (après `license_plate`), la garde d'unicité, et le passer à `create` :

```python
    if (Vehicle.objects.filter(company=company, code=code, is_deleted=False).exists()):
        raise ApplicationError(_("Un véhicule avec ce code existe déjà dans votre institution."))
```
(placer juste après la garde d'immatriculation) et dans `Vehicle.objects.create(...)` ajouter `code=code,`.

`update_vehicle` : ajouter `"code"` à l'ensemble `allowed` ; avant la boucle `setattr`, ajouter la garde d'unicité :

```python
    if "code" in fields:
        if (Vehicle.objects.filter(company=vehicle.company, code=fields["code"], is_deleted=False)
                .exclude(id=vehicle.id).exists()):
            raise ApplicationError(_("Ce code véhicule est déjà utilisé."))
```

- [ ] **Step 7 : Vue création**

Dans `backend/apps/fleet/views.py`, `VehicleListView.post` (l.~340) : dans l'appel `services.create_vehicle(...)`, ajouter `code=d["code"],` ; **supprimer** `vin=d["vin"],`, `acquisition_cost=d["acquisition_cost"],` et `parking_id=parking_id,` ; supprimer le bloc de résolution parking devenu inutile (l.~332-334 : `parking_id = d.get("parking_id") … Parking introuvable`). Laisser le reste tel quel (les paramètres service `vin`/`acquisition_cost`/`parking_id` gardent leurs défauts).

- [ ] **Step 8 : Lancer, vérifier le succès + makemigrations --check**

Run: `cd backend && ../env/bin/python -m pytest apps/fleet/tests/test_vehicle_code.py -q --reuse-db`
Expected: PASS (4 tests).
Run: `../env/bin/python manage.py makemigrations --check --dry-run`
Expected: `No changes detected`.

- [ ] **Step 9 : Commit**

```bash
git add backend/apps/fleet/models/vehicle.py backend/apps/fleet/migrations/0020_vehicle_code.py backend/apps/fleet/serializers.py backend/apps/fleet/services/vehicle_services.py backend/apps/fleet/views.py backend/apps/fleet/tests/test_vehicle_code.py
git commit -m "feat(fleet): add Code véhicule identifier; drop VIN/parking/acquisition from vehicle form API (M04)"
```

---

## Task 2 : Frontend — formulaire (ajout Code, retrait VIN/parking/coût), liste, i18n

**Files:**
- Modify: `angular/src/_api/services/fleet/vehicle.service.ts` (types create/update + list/detail)
- Modify: `angular/src/_api/models/fleet.models.ts` (VehicleListItem : `code`)
- Modify: `angular/src/_api/pages/fleet/vehicles/vehicles.component.ts` (forms + payloads + openEdit)
- Modify: `angular/src/_api/pages/fleet/vehicles/vehicles.component.html` (champ Code, retrait 3 champs, colonne)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json` (`fleet.veh.f_code`)

**Interfaces:**
- Consumes: `code` du backend (Task 1).

- [ ] **Step 1 : Types service + modèle**

Dans `vehicle.service.ts` : dans le type du payload de création et de mise à jour, ajouter `code: string;` et **retirer** `vin`, `parking_id`, `acquisition_cost`. Dans `fleet.models.ts`, ajouter `code: string;` à `VehicleListItem` (et au type détail s'il est distinct).

- [ ] **Step 2 : Forms — ajouter `code`, retirer les 3 contrôles**

Dans `vehicles.component.ts`, `createForm` et `editForm` (l.~74 et ~96) : ajouter `code: ['', Validators.required],` ; **supprimer** les contrôles `vin: ['']`, `parking_id: [null]`, `acquisition_cost: [null]`.

Dans les constructeurs de payload de `submit()` création (l.~181) et édition (l.~241) : ajouter `code: v.code,` ; **supprimer** `vin: …`, `parking_id: …`, `acquisition_cost: …`.

Dans `openEdit` (patch du formulaire, l.~215) : ajouter `code: d.code,` ; **supprimer** `vin: d.vin`, `parking_id: d.parking`, `acquisition_cost: …` s'il y figure.

- [ ] **Step 3 : HTML — champ Code, retrait, colonne**

Dans `vehicles.component.html` :
- Avant le champ immatriculation (l.~190), insérer :
```html
              <label class="form-label">{{ 'fleet.veh.f_code' | transloco }} <span class="text-danger">*</span></label>
              <input formControlName="code" type="text" class="form-control" placeholder="BUS-001" />
```
  (dans sa propre colonne, en suivant la structure `col-*` voisine ; faire de même dans le formulaire d'édition.)
- **Supprimer** les blocs VIN (l.~196-197), Parking (l.~218-221) et Coût d'acquisition (l.~278) dans **les deux** formulaires (création + édition).
- Table : avant `<td class="fw-medium">{{ v.license_plate }}</td>` (l.~109), ajouter une cellule `<td class="fw-medium">{{ v.code }}</td>` et l'en-tête `<th>` correspondant « Code » (réutiliser une clé i18n ou texte) ; l'immatriculation reste affichée dans sa colonne.

- [ ] **Step 4 : i18n**

Dans `angular/public/i18n/{fr,en,es,pt}.json`, sous `fleet.veh`, ajouter `f_code` :
- fr `"Code véhicule"`, en `"Vehicle code"`, es `"Código de vehículo"`, pt `"Código do veículo"`.
Éditer via python (`json.load`/`json.dump`, `ensure_ascii=False, indent=2`), revérifier le parse.

- [ ] **Step 5 : Build (gate)**

Run: `cd angular && npx ng build --configuration development`
Expected: `Application bundle generation complete.` — tout `formControlName` retiré mais encore référencé ferait échouer le build ; l'ajout de `code` doit compiler. (Pas de spec unitaire : le composant est fortement couplé à 7 services ; le build compile les liaisons de template et la revue finale couvre le diff.)

- [ ] **Step 6 : Commit**

```bash
git add angular/src/_api/services/fleet/vehicle.service.ts angular/src/_api/models/fleet.models.ts angular/src/_api/pages/fleet/vehicles/vehicles.component.ts angular/src/_api/pages/fleet/vehicles/vehicles.component.html angular/public/i18n/fr.json angular/public/i18n/en.json angular/public/i18n/es.json angular/public/i18n/pt.json
git commit -m "feat(fleet): vehicle form shows Code, drops VIN/parking/acquisition cost (M04)"
```

---

## Notes d'implémentation

- **Colonnes conservées** : `vin`/`parking`/`acquisition_cost` restent en base (lecture détail possible), simplement non éditables via le formulaire. Aucune suppression de colonne.
- **Immatriculation** : inchangée, toujours requise et unique par société (en plus du nouveau `code`).
- **Backfill** : indispensable avant l'`AlterUniqueTogether` sur `code` (sinon doublons de `""`). L'ordre des opérations dans la migration le garantit.
