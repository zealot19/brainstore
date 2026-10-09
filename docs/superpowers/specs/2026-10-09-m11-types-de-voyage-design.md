# M11 — Types de voyage — Design

**Date:** 2026-10-09
**Cahier ref:** M11 (dictée 25) — `docs/cahier-modifications-2026-10-08.md`
**Status:** approved for planning

## Intent

Configurer les **types de voyage** : Départ, Complément, Additif. Un voyage est de type
**Départ par défaut** ; les autres types sont sélectionnables à la création du voyage.

### Décision de cadrage (validée — « liste de types configurable »)

Un nouvel objet de configuration `VoyageType` (dans le module Configuration), amorcé avec
Départ / Complément / Additif (Départ marqué par défaut) et **gérable par l'utilisateur**
(ajout, renommage). Le voyage porte une FK `voyage_type`.

**Hors scope (par choix) :** pas de lien vers un voyage de Départ parent, aucune différence
de comportement entre types (sièges, quota, vente). Le type est une étiquette configurable
sélectionnable — toute logique rattachée à un type viendra avec une modification ultérieure.

## Portée

### 1. Modèle `VoyageType` — `apps/voyages_config/models/voyage_type.py`

Sur le modèle de `CrewMemberType` (`_CompanyScoped`) :
- `code` (CharField 20), `name` (CharField 100), `is_default` (BooleanField, default False).
- `verbose_name = _("type de voyage")`, `ordering = ["code"]`.
- `save()` surchargé : si `is_default` est vrai, retirer `is_default` des autres types de la
  même société (un seul défaut par société).
- Helper de résolution : `VoyageType.objects.filter(company=…, is_default=True, is_deleted=False).first()`.
- Export dans `models/__init__.py` + enregistrement `admin.py`.

### 2. `Trip.voyage_type` — `apps/voyages_trips/models/trip.py`

- `voyage_type = models.ForeignKey("voyages_config.VoyageType", null=True, blank=True,
  on_delete=models.PROTECT, related_name="trips", verbose_name=_("type de voyage"))`.

### 3. Création de voyage — `apps/voyages_trips/services/trip_services.py`

- `create_trip(...)` : nouveau paramètre `voyage_type=None`. Si `None`, résoudre le type par
  défaut de la société (helper ci-dessus) et l'affecter. Le poser sur `Trip.objects.create(...)`.
- `create_trip_from_pattern` : même défaut (type par défaut) ; pas de champ pattern pour l'instant.

### 4. API Trip — `apps/voyages_trips/serializers.py` + vue

- Write serializer (`TripWriteSerializer` / équivalent) : ajouter
  `voyage_type_id = serializers.UUIDField(required=False, allow_null=True, default=None)`.
- Read serializers (liste + détail) : ajouter `voyage_type` (id) et
  `voyage_type_name = serializers.CharField(source="voyage_type.name", read_only=True, default=None)`.
- Vue de création/màj du voyage : résoudre `voyage_type_id` → `VoyageType` (scopé société,
  404 si fourni et introuvable), passer l'objet à `create_trip` / l'affecter au patch —
  exactement comme `fare_class_id` / `seating_plan_id`.

### 5. Config CRUD — `apps/voyages_config/config_api/`

- `VoyageTypeRead(_ScopeMixin)` : fields `["id","code","name","is_default","company","scope",
  "is_active","created_at","updated_at"]`.
- `VoyageTypeWrite(serializers.Serializer)` : `code`, `name`, `is_default` (bool, default False),
  `is_active` (bool, default True).
- Vues : `VoyageTypeListView, VoyageTypeDetailView = _pair(VoyageType, S.VoyageTypeRead,
  S.VoyageTypeWrite, unique="code", search=("code","name"))`.
- URLs : `voyage-types/` et `voyage-types/<uuid:pk>/`.

### 6. Seeding — `apps/voyages_config/services/defaults_seed.py`

- Nouvelle `_seed_voyage_types(company, created_by)` : crée Départ (`is_default=True`),
  Complément, Additif si absents (idempotent par `code`). L'ajouter à la somme de
  `seed_voyages_defaults` (déjà appelée par `_bootstrap_company`).
- Codes proposés : `DEPART`, `COMPLEMENT`, `ADDITIF`.

### 7. Migrations & données

- `voyages_config` : `CreateModel VoyageType`.
- `voyages_trips` : `AddField Trip.voyage_type`.
- **Backfill** (RunPython, dépendance inter-apps correcte) : pour chaque société existante,
  créer les 3 `VoyageType` (idempotent) ; puis affecter à chaque `Trip` sans type le
  `VoyageType` Départ (`is_default`) de sa société. `reverse_code = noop`.

### 8. Frontend

- Écran de configuration **« Types de voyage »** (calqué sur `crew-member-types` :
  composant `.ts`/`.html`, service `voyage-type.service.ts`, modèle `VoyageType`,
  entrées `api.config.ts` `voyageTypes`/`voyageType(id)`, route `vcVoyageTypes`,
  enregistrement `pages.routes.ts`, entrée sidebar sous Configuration placée après
  « Catégories tarifaires » / « Types de voyage » selon l'ordre Annexe A).
  Formulaire : `code`, `name`, interrupteur `is_default`.
- Formulaire de **création de voyage** : ajouter un select **« Type de voyage »** alimenté par
  la liste des types ; présélectionner le type par défaut (`is_default`). Le modèle Trip
  frontend porte `voyage_type` / `voyage_type_name`.
- i18n (fr/en/es/pt) : libellés de l'écran + label « Type de voyage », entrée menu.

## Critères d'acceptation

1. La Configuration propose « Types de voyage » amorcé avec Départ (défaut), Complément,
   Additif ; l'utilisateur peut en ajouter/renommer ; un seul type peut être « par défaut ».
2. À la création d'un voyage, le type par défaut (Départ) est présélectionné ; un autre type
   est sélectionnable ; le type choisi est enregistré sur le voyage.
3. Un voyage créé sans type explicite reçoit le type par défaut de la société.
4. Les voyages existants (migration) portent le type Départ de leur société.
5. `makemigrations --check` propre ; suites backend ciblées vertes (voyages_config,
   voyages_trips) hors rouges de base connus. `ng build` réussit.

## Review Focus (pièges probables non couverts par les tests nominaux)

1. **Marquer un deuxième type « par défaut »** → l'ancien défaut est retiré (un seul défaut
   par société). → test `test_single_default_per_company`.
2. **Créer un voyage sans `voyage_type_id`** → reçoit le défaut de la société (pas null si un
   défaut existe). → test `test_create_trip_defaults_to_company_default_type`.
3. **`voyage_type_id` d'une autre société / introuvable** → 404 propre, pas de 500 ni de fuite
   inter-sociétés. → test `test_trip_create_rejects_foreign_voyage_type`.
4. **Backfill** : un voyage existant sans type reçoit le Départ de SA société (pas celui d'une
   autre). → couvert par la migration + vérification manuelle du scope société.
5. **Société sans aucun type par défaut** (cas dégénéré, p. ex. défaut supprimé) → `create_trip`
   laisse `voyage_type=null` sans planter (FK nullable). → test `test_create_trip_no_default_leaves_null`.
