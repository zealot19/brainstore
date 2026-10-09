# M24 — Colis : nature + type + description/contenu obligatoires — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Sur le formulaire colis : nature + type sélectionnables (nature filtre les types), description & contenu obligatoires ; stocker `content` et `nature` sur le colis ; retirer les 3 interrupteurs du formulaire de nature.

**Architecture:** Ajout de `Parcel.content` + `Parcel.nature` (FK) + migration ; `register_parcel`/`edit_parcel` et les serializers d'écriture exigent description/contenu (création ET édition) et nature (création), avec garde de cohérence type∈nature. Frontend : sélecteur nature qui filtre les types + champ contenu + description requise ; formulaire de nature sans toggles.

**Tech Stack:** Django + DRF (pytest `../env/bin/python -m pytest <path> -q --reuse-db`). Angular standalone (gate `npx ng build --configuration development`).

**Spec:** `docs/superpowers/specs/2026-10-09-m24-colis-nature-content-design.md`

## Global Constraints

- **Nouveau champ `content`** (contenu) distinct de `description`. **Les deux obligatoires** à la création ET à l'édition.
- **`nature` FK stockée sur le colis** (en plus de `consignment_type`) ; **requise à la création** ; **figée à l'édition** (comme le type, déjà gelé dans l'UI d'édition — résout le point à clarifier #1 du spec : on n'exige pas de re-choisir la nature en édition, on fige).
- **Cohérence** : le `consignment_type` doit appartenir à la `nature` choisie, sinon `ApplicationError`.
- Colonnes `content`/`nature` **nullables en base** (pas de backfill) ; exigence imposée au serializer/form.
- Toggles nature (`is_fragile`, `requires_declaration`, `is_prohibited`) : **retirés du formulaire** de nature ; **colonnes conservées** (le modèle et l'affichage tableau restent).
- Édition PATCH = `partial=True` (DRF ignore `required`) → l'obligation description/contenu à l'édition est imposée via un `validate()` du serializer d'édition.
- Commits : auteur shimi, pas de co-author. Push (quand demandé) : **`git push deploy master`** uniquement.

## Review Focus

- **Type hors nature** (type dont `nature_id` ≠ nature choisie) → rejeté avec message clair — testé en Task 1.
- **Création sans contenu / sans description / sans nature** → invalide — testé en Task 1.
- **Édition qui vide description ou contenu** → rejetée (validate), même en PATCH partiel — testé en Task 1.
- **Nature config write** : le payload nature n'envoie plus les 3 booléens → le serializer d'écriture nature doit les défauter (sinon 400) — vérifié en Task 2 (et au build).
- **Filtre nature→type côté form** : changer la nature ne doit pas laisser un type d'une autre nature sélectionné — géré en Task 2 (reset du type hors nature).

---

## Task 1 : Backend — `content` + `nature`, migration, serializers, services, vue

**Files:**
- Modify: `backend/apps/voyages_consignment/models/parcel.py` (champs `content`, `nature`)
- Create: `backend/apps/voyages_consignment/migrations/0013_parcel_content_nature.py`
- Modify: `backend/apps/voyages_consignment/config_api/serializers.py` (ParcelWrite, ParcelEditSerializer, ParcelRead)
- Modify: `backend/apps/voyages_consignment/services/parcel_services.py` (register_parcel, edit_parcel, _EDITABLE)
- Modify: `backend/apps/voyages_consignment/config_api/views.py` (create : résoudre nature, passer content/nature)
- Test: `backend/apps/voyages_consignment/test_parcel_nature_content.py`

**Interfaces:**
- Produces: `Parcel.content` (CharField), `Parcel.nature` (FK ConsignmentNature).
- Produces: `register_parcel(..., content="", nature=None, ...)` ; garde type∈nature.

- [ ] **Step 1 : Test RED**

Créer `backend/apps/voyages_consignment/test_parcel_nature_content.py` :

```python
import pytest
from decimal import Decimal
from apps.core.exceptions import ApplicationError
from apps.voyages_consignment.models import Parcel
from apps.voyages_consignment.services import parcel_services as S
from apps.voyages_consignment.config_api.serializers import ParcelWrite


@pytest.fixture
def ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    from apps.voyages_config.models import (Town, ServicePoint, ConsignmentNature, ConsignmentType)
    company, _ = create_company(name="ColisCo", admin_email="co@x.com",
                                admin_first_name="A", admin_last_name="B")
    user = User.objects.get(email="co@x.com")
    town = Town.objects.create(company=company, name="Douala")
    origin = ServicePoint.objects.create(company=company, town=town, code="O", name="Ag O",
                                         is_station=True, station_kind="AGENCY")
    dest = ServicePoint.objects.create(company=company, town=town, code="D", name="Ag D",
                                       is_station=True, station_kind="AGENCY")
    nat = ConsignmentNature.objects.create(company=company, code="STD", name="Standard")
    other_nat = ConsignmentNature.objects.create(company=company, code="FRG", name="Fragile")
    typ = ConsignmentType.objects.create(company=company, code="CT", label="Carton", nature=nat)
    return company, user, origin, dest, nat, other_nat, typ


def test_model_has_content_and_nature():
    fields = {f.name for f in Parcel._meta.get_fields()}
    assert "content" in fields and "nature" in fields


def test_parcel_write_requires_description_content_nature():
    s = ParcelWrite()
    assert s.fields["description"].required
    assert s.fields["content"].required
    assert s.fields["nature_id"].required


@pytest.mark.django_db
def test_register_parcel_persists_content_and_nature(ctx):
    company, user, origin, dest, nat, other_nat, typ = ctx
    p = S.register_parcel(company, origin_point=origin, destination_point=dest,
                          consignment_type=typ, nature=nat, content="Vêtements",
                          sender_name="Exp", sender_phone="600",
                          recipient_name="Dest", recipient_phone="601",
                          description="Carton 1", amount_due=0, user=user)
    assert p.content == "Vêtements" and p.nature_id == nat.id


@pytest.mark.django_db
def test_type_outside_nature_rejected(ctx):
    company, user, origin, dest, nat, other_nat, typ = ctx
    with pytest.raises(ApplicationError):
        S.register_parcel(company, origin_point=origin, destination_point=dest,
                          consignment_type=typ, nature=other_nat, content="x",
                          sender_name="Exp", sender_phone="600",
                          recipient_name="Dest", recipient_phone="601",
                          description="d", amount_due=0, user=user)


def test_edit_serializer_rejects_blank_description_or_content():
    from apps.voyages_consignment.config_api.serializers import ParcelEditSerializer
    s = ParcelEditSerializer(data={"description": "", "content": "x"}, partial=True)
    assert not s.is_valid()
    s2 = ParcelEditSerializer(data={"description": "ok", "content": ""}, partial=True)
    assert not s2.is_valid()
```

- [ ] **Step 2 : Lancer, vérifier l'échec**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_consignment/test_parcel_nature_content.py -q --reuse-db`
Expected: FAIL — `content`/`nature` absents ; `register_parcel()` n'accepte pas `content`/`nature` ; serializers sans `content`/`nature_id`.

- [ ] **Step 3 : Modèle**

Dans `parcel.py`, après `consignment_type = ...` :

```python
    nature            = models.ForeignKey("voyages_config.ConsignmentNature", verbose_name=_("nature"),
                                          on_delete=models.PROTECT, null=True, blank=True, related_name="parcels")
```
Après `description = models.CharField(_("description"), max_length=255, blank=True)` :

```python
    content           = models.CharField(_("contenu"), max_length=255, blank=True)
```

- [ ] **Step 4 : Migration**

Run: `cd backend && ../env/bin/python manage.py makemigrations voyages_consignment`
Expected: crée `0013_parcel_content_nature` (AddField content + nature). Renommer le fichier si besoin pour le préfixe `0013_`.

- [ ] **Step 5 : Serializers**

`ParcelWrite` :
- retirer `"description"` de `null_blank_fields`.
- `description` → `serializers.CharField(max_length=255)` (requis, non-blank).
- ajouter `content = serializers.CharField(max_length=255)` (requis).
- ajouter `nature_id = serializers.UUIDField()` (requis).

`ParcelEditSerializer` : ajouter `content = serializers.CharField(max_length=255, required=False)` ; ajouter un `validate` :

```python
    def validate(self, data):
        for f in ("description", "content"):
            if f in data and not str(data[f]).strip():
                raise serializers.ValidationError({f: "Ce champ est obligatoire."})
        return data
```

`ParcelRead.Meta.fields` : ajouter `"content"`, `"nature"`, `"nature_name"` ; et en tête de classe :
```python
    nature_name = serializers.CharField(source="nature.name", read_only=True, default=None)
```

- [ ] **Step 6 : Service**

`register_parcel` : ajouter les paramètres `content: str = ""` et `nature=None` (après `consignment_type`). Après la garde `is_prohibited`, ajouter la cohérence :

```python
    if nature is not None and consignment_type.nature_id != nature.id:
        raise ApplicationError(_("Le type choisi n'appartient pas à la nature sélectionnée."))
```
Dans `Parcel.objects.create(...)` : ajouter `nature=nature or consignment_type.nature, content=content,`.

`_EDITABLE` : ajouter `"content"`.

- [ ] **Step 7 : Vue création**

Dans `config_api/views.py` (création de colis) : résoudre la nature (scopée société) depuis `d["nature_id"]` et la passer :

```python
from apps.voyages_config.models import ConsignmentNature
nature = ConsignmentNature.objects.filter(id=d["nature_id"], company=company, is_deleted=False).first()
if not nature:
    return error_response(_("Nature introuvable."), status_code=404)
# ... dans l'appel register_parcel(...) : nature=nature, content=d["content"],
```
(Adapter aux noms locaux `d`/`company` de la vue ; `description=d["description"]` est déjà passé.)

- [ ] **Step 8 : Lancer, vérifier le succès + makemigrations --check**

Run: `cd backend && ../env/bin/python -m pytest apps/voyages_consignment/test_parcel_nature_content.py -q --reuse-db`
Expected: PASS (5 tests).
Run: `../env/bin/python -m pytest apps/voyages_consignment/test_parcel_api.py apps/voyages_consignment/test_parcel_delivery.py -q --reuse-db`
Expected: non-régression — **mettre à jour** ces tests si la création d'un colis y passe désormais `nature_id`/`content` requis (les POST `/parcels/` et les appels `register_parcel` doivent fournir `nature`/`content`). Ajuster puis PASS.
Run: `../env/bin/python manage.py makemigrations --check --dry-run`
Expected: `No changes detected`.

- [ ] **Step 9 : Commit**

```bash
git add backend/apps/voyages_consignment/models/parcel.py backend/apps/voyages_consignment/migrations/0013_parcel_content_nature.py backend/apps/voyages_consignment/config_api/serializers.py backend/apps/voyages_consignment/services/parcel_services.py backend/apps/voyages_consignment/config_api/views.py backend/apps/voyages_consignment/test_parcel_nature_content.py
git commit -m "feat(colis): parcel content + nature, description/contenu required, type∈nature guard (M24)"
```

---

## Task 2 : Frontend — formulaire colis (nature filtre type, contenu) + formulaire nature (sans toggles)

**Files:**
- Modify: `angular/src/_api/models/voyages-consignment.models.ts` (Parcel : `content`, `nature`, `nature_name`)
- Modify: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.ts` (nature list/filter, content, description requis)
- Modify: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.html` (champs nature + contenu ; description requise)
- Modify: `angular/src/_api/pages/voyages-config/consignment-natures/consignment-natures.component.ts` (retirer les 3 toggles)
- Modify: `angular/src/_api/pages/voyages-config/consignment-natures/consignment-natures.component.html` (retirer les 3 switches)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json` (`cons.*` contenu/nature si manquants)

**Interfaces:**
- Consumes: `content`/`nature`/`nature_name` du backend (Task 1) ; `ConsignmentType.nature` (id) existe déjà côté modèle.

- [ ] **Step 1 : Modèle Parcel (frontend)**

Dans `voyages-consignment.models.ts`, interface `Parcel` : ajouter `content: string;`, `nature: string | null;`, `nature_name: string | null;`.

- [ ] **Step 2 : Composant colis — natures + filtre + contenu**

Dans `parcels.component.ts` :
- Charger les natures : ajouter `natures: ConsignmentNature[] = [];` et, là où les types sont chargés, charger aussi les natures (service `ConsignmentNatureService.list()`), importer le type.
- Form group : ajouter `nature_id: [null, Validators.required]` ; `content: ['', Validators.required]` ; passer `description` à `['', Validators.required]`.
- Filtre : getter `filteredTypeOptions` = `this.typeOptions.filter(t => !this.form.value.nature_id || t.nature === this.form.value.nature_id)`. Sur `(ngModelChange)`/valueChanges de `nature_id`, si le `consignment_type_id` courant n'est pas dans `filteredTypeOptions`, le remettre à `null`.
- Payload (création) : ajouter `nature_id`, `content` ; `description` déjà présent.
- `openEdit(p)` : préremplir `nature_id: p.nature`, `content: p.content`, `description: p.description` ; **figer** `nature_id` et `consignment_type_id` (ajouter `nature_id` à la liste des contrôles `disable()`).

- [ ] **Step 3 : HTML colis — sélecteur nature + champ contenu**

Dans `parcels.component.html`, section type/colis : ajouter avant le select type un select **Nature** (requis) lié à `nature_id` ; le select **Type** itère sur `filteredTypeOptions` ; ajouter un champ **Contenu** (`formControlName="content"`, requis) ; la **Description** garde son `formControlName="description"` et devient requise (indicateur `*`).

- [ ] **Step 4 : Formulaire nature — retirer les 3 toggles**

Dans `consignment-natures.component.ts` : retirer `is_fragile`, `requires_declaration`, `is_prohibited` du `fb.group` (ngOnInit), du `reset` d'`openCreate`, et du `patchValue` d'`openEdit`.
Dans `consignment-natures.component.html` : supprimer les 3 `<div class="form-check form-switch">` (switches `vc-frag`, `vc-decl`, `vc-proh`). **Conserver** les colonnes du tableau (affichage).
Vérifier que le serializer d'écriture nature (`ConsignmentNatureWrite`) défaute ces booléens (required=False) — si requis, les rendre `required=False, default=False` côté backend (sinon le POST nature casserait). (Fichier : `apps/voyages_config/config_api/serializers.py`.)

- [ ] **Step 5 : i18n**

Ajouter les clés manquantes utilisées (ex. `cons.parcels.f_content` = « Contenu », `cons.parcels.f_nature` = « Nature ») dans `fr/en/es/pt` (python `json.load`/`dump`, revérifier le parse). fr: "Contenu"/"Nature" ; en: "Content"/"Nature" ; es: "Contenido"/"Naturaleza" ; pt: "Conteúdo"/"Natureza".

- [ ] **Step 6 : Build (gate)**

Run: `cd angular && npx ng build --configuration development`
Expected: `Application bundle generation complete.` sans erreur (tout `formControlName` retiré ne doit plus être référencé ; `nature_id`/`content` liés).

- [ ] **Step 7 : Commit**

```bash
git add angular/src/_api/models/voyages-consignment.models.ts angular/src/_api/pages/voyages-consignment/parcels/parcels.component.ts angular/src/_api/pages/voyages-consignment/parcels/parcels.component.html angular/src/_api/pages/voyages-config/consignment-natures/consignment-natures.component.ts angular/src/_api/pages/voyages-config/consignment-natures/consignment-natures.component.html angular/public/i18n/fr.json angular/public/i18n/en.json angular/public/i18n/es.json angular/public/i18n/pt.json
git commit -m "feat(colis): nature filters type + required contenu/description; nature form without toggles (M24)"
```

---

## Notes d'implémentation

- **Non-régression tests colis** (Task 1 Step 8) : `test_parcel_api.py` / `test_parcel_delivery.py` créent des colis ; après l'ajout de `nature_id`/`content` requis, leurs POST et/ou appels `register_parcel` doivent fournir `nature` + `content`. Les ajuster fait partie de la tâche.
- **Nature figée à l'édition** : cohérent avec le type déjà gelé ; on n'exige donc pas de nature en PATCH (seuls description/content sont contrôlés par `validate`).
- **Colonnes conservées** : `content`/`nature` nullables ; toggles nature conservés en base. Aucune suppression de colonne.
