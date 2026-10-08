# M04 — Formulaire de création de véhicule (Code véhicule) — Design

**Cahier :** Revue SHIMI v1.0 — M04 (dictées n° 1, 2)
**Date :** 2026-10-08
**Statut :** approuvé en brainstorming, en attente de relecture avant plan.

## Objectif

Doter le véhicule d'un **Code véhicule** (saisi, unique par société) qui devient son
**identifiant**, et **épurer le formulaire de création/édition** : retirer **VIN**, **parking
(stationnement)** et **coût d'acquisition**. **L'immatriculation est conservée** (décision
utilisateur, qui prime sur le libellé du cahier « supprimer l'immatriculation »).

## Décisions actées (brainstorming)

1. **Code véhicule : saisi par l'utilisateur, unique par société** (Annexe B #M04). Il devient
   l'identifiant principal (`__str__`, tri, unicité).
2. **Conserver l'immatriculation** (`license_plate`) sur le formulaire et en base.
3. **Retirer du formulaire** : VIN, parking, coût d'acquisition. Les **colonnes DB restent**
   (nullables) — on ne les supprime pas (blast radius : `license_plate` sert d'identifiant dans
   68 points backend + 30 frontend ; en conservant la plaque, rien en aval ne casse).
4. **Affichage de l'identifiant** : `code` devient le libellé principal (liste véhicules,
   `__str__`). Les ~68 points qui affichent `license_plate` restent inchangés (la plaque est
   conservée) — pas de churn.

## État actuel

- **Modèle `Vehicle`** (`apps/fleet/models/vehicle.py`) : `license_plate` (requis,
  `unique_together(company, license_plate)`, `ordering=["license_plate"]`, `__str__` basé
  plaque), `vin`, `parking` (FK), `acquisition_cost`, etc.
- **Serializers** (`apps/fleet/serializers.py`) : `VehicleCreateSerializer` (l.211) et
  `VehicleUpdateSerializer` (l.239) listent explicitement `license_plate`, `vin`,
  `acquisition_cost`, `parking_id`. Lecture : `VehicleListSerializer`/`VehicleDetailSerializer`.
- **Service** `create_vehicle`/`update_vehicle` (`apps/fleet/services/vehicle_services.py`)
  mappe ces champs.
- **Frontend** : formulaire véhicule (création/édition) + liste.

## Architecture

### Backend

1. **Modèle** : ajouter
   ```python
   code = models.CharField(_("code véhicule"), max_length=30)
   ```
   `Meta` : `unique_together = [("company", "license_plate"), ("company", "code")]` ;
   `ordering = ["code"]`. `__str__` → `f"{self.code} — {self.model}"`.

2. **Migration** `apps/fleet/migrations/0020_vehicle_code.py` :
   - `AddField` `code` avec `default=""` (temporaire, pour les lignes existantes).
   - `RunPython` backfill : pour chaque véhicule, `code = license_plate` (déjà unique par
     société → les codes restent uniques). Reverse = no-op.
   - `AlterUniqueTogether` → ajoute `("company", "code")`.
   - `AlterModelOptions` → `ordering = ["code"]`.
   Le backend auto-migre au déploiement (Dockerfile CMD).

3. **Serializers d'écriture** :
   - `VehicleCreateSerializer` : ajouter `code = serializers.CharField(max_length=30)` (requis) ;
     **retirer** `vin`, `acquisition_cost`, `parking_id`.
   - `VehicleUpdateSerializer` : ajouter `code = serializers.CharField(max_length=30,
     required=False)` ; **retirer** `vin`, `acquisition_cost`, `parking_id`.
   - Lecture (`VehicleListSerializer`, `VehicleDetailSerializer`) : **ajouter `code`** ; conserver
     `license_plate`/`vin`/`parking`/`acquisition_cost` en lecture (non éditables via le form).

4. **Service** `create_vehicle`/`update_vehicle` :
   - Prendre `code` ; valider l'unicité `(company, code)` → `ApplicationError` explicite si doublon.
   - Ne plus lire `vin`/`acquisition_cost`/`parking_id` depuis le payload (création : laissés à
     vide/null ; édition : inchangés).
   - `license_plate` inchangé (toujours requis).

### Frontend

5. **Formulaire véhicule** (création/édition) :
   - Ajouter le champ **Code véhicule** (requis).
   - **Retirer** les champs VIN, Parking, Coût d'acquisition.
   - Conserver Immatriculation.
6. **Liste véhicules** : colonne **Code** en tête (identifiant) ; la plaque reste affichée.
7. **i18n** : clé `Code véhicule` (fr/en/es/pt) + retrait des libellés devenus inutilisés au besoin.

## Tests

**Backend (pytest) :**
1. `Vehicle` possède `code` ; `__str__` commence par le code ; `("company","code")` dans
   `unique_together`.
2. `create_vehicle(code=...)` crée le véhicule ; deux véhicules de la même société avec le même
   `code` → `ApplicationError`.
3. `VehicleCreateSerializer` exige `code` ; n'accepte plus `vin`/`acquisition_cost`/`parking_id`
   (champs absents du serializer).
4. `create_vehicle` ignore un `vin`/`parking_id`/`acquisition_cost` éventuellement fourni (non
   persistés depuis le form).
5. `makemigrations --check` → `No changes detected`.

**Frontend (karma headless) :**
6. Le formulaire expose un contrôle `code` et **n'expose plus** `vin`/`parking`/`acquisition_cost` ;
   `immatriculation` toujours présent.

Gate de compilation : `npx ng build --configuration development`.

## Hors périmètre (M04)

- Suppression physique des colonnes `vin`/`parking`/`acquisition_cost` (conservées nullables).
- Renommage de l'identifiant `license_plate` → `code` dans les 68/30 points d'affichage (la
  plaque est conservée ; pas de churn).
- Déplacement de Marques/Modèles (fait en M01) ; plans de bus (M05).

## Points à clarifier

1. **Immatriculation requise ?** Conservée et **toujours requise** comme aujourd'hui (hypothèse).
   À confirmer si elle doit devenir facultative puisque `code` est désormais l'identifiant.
2. **Rétro-affichage** : faut-il à terme basculer les rapports vers `code` ? Hors périmètre M04 ;
   possible dans un nettoyage ultérieur.
