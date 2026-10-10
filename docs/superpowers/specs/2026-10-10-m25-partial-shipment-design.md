# M25 — Expédition partielle des colis — Design

**Date :** 2026-10-10 · **Module :** `apps/parcel` · **Référence cahier :** M25 (dictée 36)

## Intention

Un colis d'une quantité *N* unités peut être **expédié en plusieurs fois**, sur
différents bus / voyages. Le système suit les quantités **totale / expédiée /
restante**, bloque toute expédition au-delà du restant, et conserve un
**historique complet** des expéditions et de leurs validations.

Aujourd'hui l'expédition est **tout-ou-rien** : un `Parcel` porte un seul
`trip`, un seul `quantity`, et un `status` linéaire
(`REGISTERED → SHIPPED → RECEIVED → DELIVERED`). On remplace ce chemin par un
modèle enfant par expédition.

## Décisions actées (brainstorm)

1. **Cycle de vie complet par expédition** : chaque expédition porte son propre
   état `shipped → received → delivered` (les installments arrivent sur des bus
   différents à des moments différents), plus `returned` / `lost`.
2. **Validation en deux temps** : une expédition est créée `pending`, puis
   **validée** séparément. La validation est réservée à une **permission RBAC
   dédiée** (`ticketing.parcel.shipment.validate`) ; la création utilise la
   permission existante `ticketing.parcel.manage`.
3. **Comptabilité des quantités** : `RETURNED` **libère** les unités (revenues à
   l'origine, ré-expédiables) ; `LOST` **consomme** les unités (perdues,
   non ré-expédiables, colis sous-livré).
4. **Approche A — modèle-source-de-vérité** : `Parcel.status` est **dérivé** des
   expéditions (nouvel état `partially_shipped`). Pas de double système.

## Architecture (Approche A)

### 1. Modèle `ParcelShipment` (nouveau — `apps/parcel/models/parcel_shipment.py`)

Une ligne par expédition partielle. Hérite de `BaseModel` (soft-delete, audit).

| Champ | Type | Notes |
|-------|------|-------|
| `parcel` | FK `parcel.Parcel`, `related_name="shipments"`, `CASCADE` | |
| `quantity` | `PositiveSmallIntegerField` | unités dans cette expédition (≥ 1) |
| `trip` | FK `voyage.Trip`, `SET_NULL`, null/blank, `related_name="parcel_shipments"` | le bus/voyage |
| `from_terminal` / `to_terminal` | FK `transport_config.Terminal`, `PROTECT` | défaut = ceux du colis, surchargeables |
| `status` | `CharField(choices=Status)` | défaut `PENDING` |
| `validated_by` | FK user, `SET_NULL`, null/blank | rempli à la validation |
| `validated_at` | `DateTimeField`, null/blank | |
| `notes` | `CharField(255, blank=True)` | |

`created_by` / `created_at` / `updated_by` / `updated_at` viennent de `BaseModel`.

**Machine à états `ParcelShipment.Status`** :

```
PENDING   → VALIDATED, CANCELLED
VALIDATED → RECEIVED, RETURNED, LOST
RECEIVED  → DELIVERED, RETURNED, LOST
DELIVERED → (terminal)
RETURNED  → (terminal)
LOST      → (terminal)
CANCELLED → (terminal)
```

Transitions interdites → `ApplicationError` (même style que `_transition`
existant). Chaque transition journalise un `ParcelEvent` (voir §3).

### 2. Comptabilité des quantités (sélecteur `apps/parcel/selectors`)

`shipment_tally(parcel) -> dict` :

- `total`      = `parcel.quantity`
- `pending`    = Σ `quantity` des expéditions `PENDING`
- `shipped`    = Σ `quantity` des expéditions `VALIDATED | RECEIVED | DELIVERED`
- `lost`       = Σ `quantity` des expéditions `LOST`
- `remaining`  = `total − (pending + shipped + lost)`  *(≥ 0 garanti par la règle de blocage)*
- `returned`   = Σ `quantity` des expéditions `RETURNED` *(informatif — déjà re-disponible dans `remaining`)*
- `delivered`  = Σ `quantity` des expéditions `DELIVERED`

**Règle de blocage** (à la création et à la validation) : une expédition dont
`quantity > remaining` (calculé **hors** cette expédition) lève
`ApplicationError("Quantité supérieure au restant à expédier.")`.
`CANCELLED` et `RETURNED` ne consomment pas de restant (unités revenues).

### 3. Historique — `ParcelEvent`

Réutilisé tel quel, avec un champ FK **nullable** ajouté :
`shipment = FK(parcel.ParcelShipment, null=True, blank=True, SET_NULL, related_name="events")`.
Chaque action d'expédition (create / validate / receive / deliver / return /
lost / cancel) écrit un `ParcelEvent(parcel=…, shipment=…, status=<nouvel état>,
note=…, created_by=…)`. Les événements colis existants gardent `shipment=NULL`.

### 4. `Parcel.status` dérivé

Ajout de l'état `PARTIALLY_SHIPPED = "partially_shipped"` à `Parcel.Status`.
Une fonction `recompute_parcel_status(parcel)` est appelée après chaque
transition d'expédition :

- aucune expédition active (toutes `CANCELLED`, ou aucune) → `REGISTERED`
- `remaining > 0` **et** `shipped ≥ 1 unité` → `PARTIALLY_SHIPPED`
- `remaining == 0` **et** pas toutes les unités `delivered` → `SHIPPED`
- toutes les unités comptabilisées sont `DELIVERED` → `DELIVERED`
- sinon (p. ex. uniquement des `PENDING`) → `REGISTERED`

Le champ `status` reste **persisté** (dénormalisé) pour le filtrage/liste ; il
est recalculé et sauvegardé par `recompute_parcel_status`, jamais écrit
directement par les vues d'expédition.

**Legacy / compatibilité** : les colis existants n'ont aucune expédition →
restent `REGISTERED` tant qu'on n'en crée pas. Le champ `Parcel.trip` et les
anciens services `ship_parcel / receive_parcel / deliver_parcel / assign_trip`
restent en place mais ne sont **plus la voie recommandée** ; aucune migration de
données n'est requise (Approche A, pas C). Les endpoints existants continuent de
fonctionner pour les colis sans expédition.

### 5. Services (`apps/parcel/services/shipment_services.py`, nouveau)

```
create_shipment(parcel, *, quantity, trip, from_terminal=None, to_terminal=None, notes="", created_by)
    → crée PENDING, vérifie blocage, log event, recompute_parcel_status
validate_shipment(shipment, *, validated_by)        # PENDING → VALIDATED (+ re-vérifie blocage)
receive_shipment(shipment, *, location="", note="", updated_by)   # VALIDATED → RECEIVED
deliver_shipment(shipment, *, note="", updated_by)                # RECEIVED  → DELIVERED
return_shipment(shipment, *, note="", updated_by)                 # VALIDATED/RECEIVED → RETURNED
lost_shipment(shipment, *, note="", updated_by)                   # VALIDATED/RECEIVED → LOST
cancel_shipment(shipment, *, updated_by)                          # PENDING → CANCELLED
```

Chaque service est `@transaction.atomic`, applique la garde d'état, journalise,
puis appelle `recompute_parcel_status(shipment.parcel)`.

### 6. Endpoints (`apps/parcel/urls.py` + `views.py`)

Base : `/<parcel_id>/shipments/`

| Méthode / chemin | Vue | Permission (`permission_map`) |
|---|---|---|
| `GET  /<parcel_id>/shipments/` | liste + `tally` | `IsAuthenticated` |
| `POST /<parcel_id>/shipments/` | create (PENDING) | `ticketing.parcel.manage` |
| `POST /shipments/<id>/validate/` | validate | **`ticketing.parcel.shipment.validate`** |
| `POST /shipments/<id>/receive/` | receive | `ticketing.parcel.manage` |
| `POST /shipments/<id>/deliver/` | deliver | `ticketing.parcel.manage` |
| `POST /shipments/<id>/return/`  | return  | `ticketing.parcel.manage` |
| `POST /shipments/<id>/lost/`    | lost    | `ticketing.parcel.manage` |
| `POST /shipments/<id>/cancel/`  | cancel  | `ticketing.parcel.manage` |

Enforcement : `permission_classes = [IsAuthenticated, HasModulePermission]` +
`permission_map` (pattern treasury `OpenSessionView`). Toutes les requêtes sont
scellées à `request.user.company` (404 si le colis/expédition n'appartient pas à
la société). `HasModulePermission` lit `view.permission_map[method]`.

### 7. Permission RBAC

Nouvelle permission `ticketing.parcel.shipment.validate` (« Valider les
expéditions de colis », action `update`), seedée par une **nouvelle data
migration** `admin_rbac` (après la dernière en date), sur le modèle de
`0007_parcel_permissions_seed`. Elle doit aussi être ajoutée au seed de création
de société si les permissions y sont référencées (à vérifier dans le plan).
*Rappel (mémoire new-permission-visibility)* : invisible tant que non accordée à
un rôle + re-login ; les admins contournent.

### 8. Sérialiseurs (`apps/parcel/serializers.py`)

- `ParcelShipmentReadSerializer` : id, quantity, trip (id + libellé), from/to
  terminal, status (+ label), validated_by (nom), validated_at, created_by,
  created_at, notes.
- `ParcelShipmentWriteSerializer` : quantity (min 1), trip_id (req), from/to
  terminal_id (optionnels), notes.
- `ParcelReadSerializer` : exposer le `tally` (total/expédié/restant/…) et le
  nouvel état `partially_shipped`.

### 9. Frontend (Angular — module colis)

Page détail colis : nouveau panneau **« Expéditions »** :
- bandeau récap **Total / Expédié / Restant** (+ perdu si > 0) ;
- tableau des expéditions : quantité, voyage, statut (badge), validé par, date,
  actions contextuelles selon l'état (Valider / Réceptionner / Livrer /
  Retour / Perdu / Annuler) ;
- modal **Nouvelle expédition** : quantité (max = restant), voyage
  (autocomplete), notes ;
- bouton **Valider** masqué sauf permission `ticketing.parcel.shipment.validate`
  (directive `*hasPermission`).
- i18n fr / en / es / pt.

## Modèle de données (résumé)

```
Parcel (existant) 1───* ParcelShipment ───* ParcelEvent (shipment nullable)
         status dérivé          status machine
```

## Tests (backend, pytest)

- machine à états : chaque transition autorisée / interdite ;
- blocage quantité : create & validate refusent `quantity > remaining` ;
- `RETURNED` libère le restant (ré-expédition possible), `LOST` le consomme ;
- `recompute_parcel_status` : registered / partially_shipped / shipped /
  delivered selon les quantités ;
- validation gated : POST validate sans la permission → 403 ; avec → 200 ;
- company scoping : expédition d'une autre société → 404 ;
- idempotence/compat : un colis sans expédition reste `REGISTERED` ; endpoints
  legacy inchangés.

## Hors périmètre

- Pas de re-tarification par expédition (paiement reste au niveau colis, payé
  d'avance ; COD réglé à la livraison finale).
- Pas de migration de données des colis déjà `SHIPPED` (Approche A).
- Le transbordement (M16) reste indépendant.

## Points tranchés (rulings pris pendant le design)

- `Parcel.trip` conservé (nullable) pour compat ; non utilisé par le nouveau
  flux.
- `status` dénormalisé persisté (pas purement calculé) pour garder le filtrage
  liste performant.
- `PENDING` réserve le restant (empêche la sur-réservation avant validation).
