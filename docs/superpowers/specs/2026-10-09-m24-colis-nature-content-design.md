# M24 — Formulaire colis : nature + type + description/contenu obligatoires — Design

**Cahier :** Revue SHIMI v1.0 — M24 (dictées n° 34, 35)
**Date :** 2026-10-09
**Statut :** approuvé en brainstorming, en attente de relecture avant plan.

## Objectif

Sur le **formulaire d'enregistrement des colis** : rendre **description** et **contenu**
obligatoires, et permettre de choisir la **nature** et le **type** de colis. Sur le formulaire
de **création de nature de colis** : supprimer **tous les interrupteurs (toggles)**.

## Décisions actées (brainstorming)

1. **Contenu = nouveau champ** `content` sur le colis (distinct de `description`). Les deux
   deviennent **obligatoires**.
2. **Nature stockée sur le colis** : ajout d'un FK `nature` en plus de `consignment_type`
   (le type implique déjà sa nature, mais on la stocke explicitement) ; sur le formulaire, la
   nature **filtre** la liste des types.
3. **Obligatoire à la création ET à l'édition** (pas de backfill ; colonnes nullables en base,
   exigence imposée au niveau serializer/form).

## État actuel

- **`Parcel`** (`apps/voyages_consignment/models/parcel.py`) : `consignment_type` (FK
  `ConsignmentType`), `description` (CharField(255), `blank=True`). Pas de `content`, pas de FK
  `nature` direct.
- **`ConsignmentNature`** (`apps/voyages_config/models/commercial.py:35`) : `code`, `name`,
  `is_fragile`, `requires_declaration`, `is_prohibited` (les 3 toggles). `ConsignmentType` a
  `nature` (FK), `code`, `label`, etc.
- **Serializers colis** (`config_api/serializers.py`) : `ParcelWrite` (création) et
  `ParcelEditSerializer` (édition) — `description` facultative, `consignment_type_id` requis,
  pas de `content`/`nature_id`. `ParcelRead` expose `description`, `consignment_type(_label)`.
- **Front** : formulaire colis `pages/voyages-consignment/parcels/` ; formulaire nature
  `pages/voyages-config/consignment-natures/`.

## Architecture

### Backend

1. **Modèle `Parcel`** : ajouter
   ```python
   content = models.CharField(_("contenu"), max_length=255, blank=True)
   nature  = models.ForeignKey("voyages_config.ConsignmentNature", verbose_name=_("nature"),
                               on_delete=models.PROTECT, null=True, blank=True, related_name="parcels")
   ```
   `blank=True`/`null=True` en base (lignes existantes), **obligation imposée au serializer**.
   Migration additive (`0013_parcel_content_nature`).
2. **Serializers d'écriture** (`ParcelWrite`, `ParcelEditSerializer`) :
   - `description` → **requise** (`required=True, allow_blank=False`).
   - `content` → **requise** (CharField max 255).
   - `nature_id` → **requise** (UUIDField).
   - Retirer `description` de `null_blank_fields`/normalisation « blank→null » là où ça la rendrait
     facultative.
3. **Cohérence** : valider que le `consignment_type` choisi appartient bien à la `nature` choisie
   (sinon `ApplicationError`). Placé dans le service (création + édition).
4. **Service** `register_parcel` / édition : accepter `content`, `nature`, les persister ; garde de
   cohérence type∈nature.
5. **Vue** colis create/edit : résoudre `nature_id` (scopé société), passer `content`/`nature`.
6. **`ParcelRead`** : exposer `content`, `nature`, `nature_name`.

### Frontend — formulaire colis (`parcels`)

7. Ajouter un sélecteur **Nature** (requis) qui **filtre** la liste des **Types** (type requis).
   Au changement de nature, réinitialiser le type si hors nature.
8. Ajouter le champ **Contenu** (requis) ; rendre **Description** requise.
9. `parcel.service` / modèles : ajouter `content`, `nature`/`nature_name` + `nature_id` au payload.
10. `openEdit` : préremplir nature (depuis `p.nature` ou `type.nature`), content, description.
11. i18n : `contenu`, `nature` (clés manquantes) fr/en/es/pt.

### Frontend — formulaire nature (`consignment-natures`)

12. **Supprimer les 3 interrupteurs** (`is_fragile`, `requires_declaration`, `is_prohibited`) du
    formulaire de création/édition de nature (et du payload). **Conserver** les champs du modèle
    (non éditables via ce formulaire) — cohérent avec le motif « retirer du form, garder la colonne ».

## Tests

**Backend (pytest) :**
1. `Parcel` possède `content` et `nature`.
2. `ParcelWrite` exige `description`, `content`, `nature_id` (absents/vides → invalide).
3. `register_parcel(content=..., nature=...)` persiste ; lecture expose `content`/`nature_name`.
4. Cohérence : `consignment_type` hors `nature` → `ApplicationError`.
5. Édition : description/content/nature requis ; persistés.
6. `makemigrations --check` → `No changes detected`.

**Frontend (karma/build) :**
7. Formulaire colis : nature filtre les types ; contrôles `content`/`nature_id` requis.
   (Gate principal : `ng build` ; spec composant si praticable.)

Gate de compilation : `npx ng build --configuration development`.

## Hors périmètre (M24)

- Suppression des colonnes `is_fragile`/`requires_declaration`/`is_prohibited` (conservées).
- Rétro-remplissage de `content`/`nature` sur les colis existants (exigence au form, pas de backfill).
- Détachement du module colis / M25 (expédition partielle).

## Points à clarifier

1. **Nature d'un colis existant sans nature** (édition) : l'utilisateur doit choisir une nature à
   l'édition (requis). OK ? — hypothèse retenue (décision « imposer à l'édition »).
2. **Type n'appartenant pas à la nature** : rejeté (garde de cohérence). OK ?
