# M09 — Lieux unifiés — Design

**Date:** 2026-10-09
**Cahier ref:** M09 (dictée n° 8) — `docs/cahier-modifications-2026-10-08.md`
**Status:** approved for planning

## Intent

Supprimer la distinction entre « point de service » (gare/agence où l'on vend des
billets) et « point de dépôt » (simple arrêt). L'application ne connaît plus que des
**Lieux**, dont n'importe lequel peut servir de départ, de destination ou d'arrêt, sans
avoir à préciser s'il s'agit d'un point de vente de billets.

Le modèle de données est **déjà** une table unique (`ServicePoint`). La « distinction »
visée par le cahier est portée par le drapeau `is_station` (+ `station_kind`) et la règle
qui impose à l'origine et à la destination d'un trajet d'être des « gares/agences ».
M09 retire ce drapeau et cette règle.

### Décision de cadrage (validée)

**« Drop the gate, keep agency link »** : on supprime `is_station` et `station_kind` ainsi
que la contrainte origine/destination = gare ; on **conserve** un lien `agency` optionnel
sur chaque Lieu, car il porte deux règles métier réelles :

- **Livraison des colis** : un colis ne peut être livré que vers un Lieu rattaché à une agence.
- **Synchronisation multi-instances** : l'agence propriétaire des voyages partant d'un Lieu.

## Portée

### 1. Modèle — `apps/voyages_config/models/network.py`

- `ServicePoint` :
  - **Supprimer** le champ `is_station` (BooleanField).
  - **Supprimer** le champ `station_kind` (CharField) et la classe `StationKind`.
  - **Conserver** `agency` (FK `system_config.Agency`, `null=True, blank=True`,
    `on_delete=SET_NULL`) — désormais un simple attribut optionnel de n'importe quel Lieu.
  - **Supprimer** la méthode `clean()` (la règle « une gare/agence doit être rattachée à
    une agence » n'a plus de sens ; `agency` est librement optionnel).
  - `verbose_name` passe de `"point de service"` à `"lieu"`.
- `Route.clean()` :
  - **Supprimer** les deux contrôles `origin.is_station` / `destination.is_station`.
  - **Conserver** le contrôle origine ≠ destination.
- **Ne pas renommer** la classe `ServicePoint` ni la table : renommer rippler­ait sur ~15
  apps et toutes les FK (`Route`, `RouteStop`, `Trip`, `Booking`, `Parcel`, reporting,
  sync…) sans gain fonctionnel. Seul le libellé utilisateur devient « Lieu / Lieux ».

### 2. Règles dépendantes

- **Colis** — `apps/voyages_consignment/services/parcel_services.py` (~ligne 44) :
  remplacer `getattr(destination_point, "station_kind", "") != "AGENCY"` par
  `destination_point.agency_id is None`. Message :
  « Le colis ne peut être envoyé que vers un lieu rattaché à une agence. »
- **Trajets** — `apps/voyages_config/config_api/views.py` (`RouteListView.post` ~325,
  `RouteDetailView.patch` ~360/365) : **supprimer** les validations
  `origin.is_station` / `dest.is_station`. Tout Lieu peut être origine/destination.
  (Le contrôle origine ≠ destination reste.)
- **Sync multi-instances** : inchangé — il s'appuie déjà sur `agency`, conservé.

### 3. API / sérialiseurs / sélecteurs

Retirer `is_station`, `station_kind`, `station_kind_display` partout où ils sont exposés,
en conservant `agency_id` (read/write) sur le Lieu :

- `apps/voyages_config/config_api/serializers.py` : `ServicePointRead`/`Write`
  (champs lignes ~125, 130-131, 140-141) et `RouteStopRead` (ligne ~245, 249 — le
  `source="service_point.is_station"`).
- `apps/voyages_booking/config_api/serializers.py` (lignes ~54, 63 : `is_station`).
- `apps/voyages_pricing/config_api/serializers.py` (~41-42) et
  `apps/voyages_pricing/config_api/views.py` (~137 : dict `is_station`/`station_kind`).
- `apps/voyages_booking/selectors/__init__.py` (~63, 77 : clés `is_station`).

### 4. Frontend

- `angular/src/_api/pages/voyages-config/service-points/` :
  - `.component.html` : supprimer le switch « Gare/Agence » (ligne ~59), le bloc
    « Type de gare » (`station_kind`, ~61-62) et les badges station/arrêt (~30-31).
    Rendre le champ **Agence** (select) toujours visible et optionnel (il n'est plus
    conditionné par `station_kind === 'AGENCY'`). Conserver town, code, name, GPS,
    `agency_id`, `is_active`.
  - `.component.ts` : retirer `is_station`/`station_kind` du `fb.group`, de `openCreate`,
    `openEdit`, et de la logique `submit` (lignes ~33-34, 52-53, 57-58). `agency_id`
    devient un champ simple.
- `angular/src/_api/models/voyages-config.models.ts` : retirer `is_station`,
  `station_kind`, `station_kind_display` de l'interface `ServicePoint` (et de tout autre
  modèle les portant : booking/pricing route-point types).
- **Libellés i18n** (fr/en/es/pt) : renommer la section/menu « Points de service » → **« Lieux »** ;
  mettre à jour `vcfg.sp.info`, `vcfg.sp.new`, `vcfg.towns.info` (mention « point de service »),
  `vcfg.routes.st_sp`, `vcfg.routes.f_stop_sp`, `trips.detail.stop_sp` → « Lieu ».
  Retirer les clés devenues inutiles (`vcfg.sp.badge_station`, `badge_stop`, `f_is_station`,
  `f_station_kind`, `opt_terminal`, `opt_agency`) ou les laisser orphelines sans y référer
  (préférer les retirer).
- Les sélecteurs d'origine/destination/escale listent désormais **tous** les Lieux (plus de
  filtre `is_station`).

### 5. Migration & données

- Migration `voyages_config` : `RemoveField` sur `is_station` et `station_kind`.
- **Pas de backfill** : tous les anciens « stations » portent déjà une `agency` (l'ancien
  `clean()` l'imposait), donc les cibles de livraison colis sont préservées.
- **Élargissement intentionnel** : un ancien `TERMINAL` (is_station, agency renseignée,
  mais station_kind ≠ AGENCY) accepte désormais les colis (règle « tout Lieu avec agence »).
  Conforme à la décision de cadrage.

### 6. Tests impactés

- Suppression mécanique des kwargs `is_station=`/`station_kind=` dans les créations de
  `ServicePoint` à travers les suites (reporting, voyages_trips, voyages_booking,
  voyages_consignment, online_booking, voyages_config).
- Tests colis reposant sur `station_kind="AGENCY"` : fixer `agency=<agence>` à la place.
- **Supprimer** `apps/voyages_config/test_station_requires_agency.py` (règle retirée).
- Mettre à jour `apps/voyages_booking/test_route_destinations.py` (plus de clé `is_station`).
- Mettre à jour `apps/voyages_config/tests/test_config_api.py:109` (payload sans
  `is_station`/`station_kind`).

## Critères d'acceptation

1. Un trajet peut être créé avec n'importe quel Lieu comme origine et destination (aucun
   n'a besoin d'un drapeau « gare »). Origine = destination reste refusé.
2. Le formulaire Lieu n'affiche plus « Gare/Agence » ni « Type de gare » ; il propose un
   champ Agence optionnel ; la section s'intitule « Lieux ».
3. Un colis vers un Lieu **sans** agence est refusé avec le message dédié ; vers un Lieu
   **avec** agence, il est accepté.
4. La synchronisation multi-instances continue de fonctionner (clé `agency`).
5. `makemigrations --check` est propre après la migration ; la suite backend ciblée passe
   (voyages_config, parcel delivery, route create/patch, sync).
6. `ng build --configuration development` réussit ; plus aucune référence à `is_station`/
   `station_kind` dans le code frontend.

## Hors scope

- Renommage de la classe/table `ServicePoint` (libellé UI seulement).
- Module Garage/Accidents (M06), sélecteur d'arrêts multiple (M10) — traités séparément.
- Toute refonte du modèle de synchronisation.

## Review Focus (pièges probables non couverts par les tests nominaux)

1. **Colis vers un Lieu sans agence** → doit être refusé (pas un 500) ; message clair.
2. **PATCH d'un trajet** changeant origine/destination vers un Lieu quelconque → accepté,
   origine ≠ destination toujours contrôlé.
3. **Lieu existant sans agency** utilisé comme destination colis après migration → refus
   propre (régression possible si on lit encore `station_kind`).
4. **Payloads frontend** (booking/pricing) qui lisaient `is_station` → ne doivent pas casser
   l'affichage une fois la clé retirée (vérifier qu'aucun template ne la lit encore).
5. **Sérialiseur RouteStop** `source="service_point.is_station"` → sa suppression ne doit
   pas laisser de référence morte provoquant une 500 à la lecture d'un trajet.
