# Partiel depuis l'écran Expédition + réception par expédition — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (Native). Steps use checkbox (`- [ ]`).

**Goal:** Expédier N pièces d'un colis sur un voyage depuis l'écran Expédition (1 clic, défaut = restant) ; réception par expédition ; retrait incrémental au niveau colis.

**Spec:** `docs/superpowers/specs/2026-10-13-partial-shipment-on-expedition-design.md`

## Global Constraints

- L'expédition = unité transport + réception ; le colis agrège et facture (paiement inchangé à l'enregistrement).
- « Expédier N » : `1 ≤ N ≤ remaining`, voyage doit desservir le trajet, capacité respectée.
- Réception par expédition (agence destination), statut expédition `arrived → received`.
- Retrait incrémental : pièces disponibles = `received_pieces − picked_up_pieces`.
- Cas simple (tout en une expédition) : flux inchangé de bout en bout.

## Review Focus

- Expédier 6/10 puis 4/10 sur 2 voyages → restant correct, colis reste expédiable. Test T2.
- Sur-expédition (N>restant) et voyage hors route → refus. Test T2.
- Réception par expédition : A→6, B→4 ; bornes manquantes/avariées ; colis `available_for_pickup` dès la 1ʳᵉ réception. Test T2.
- Retrait incrémental : retirer 6 puis 4 ; `picked_up_pieces` cumulatif ; `picked_up` seulement quand soldé. Test T2.
- Cas 1 expédition : register → ship(all) → arrive → receive → pickup inchangé. Test T2.

---

## Task 1 : Backend — modèle (réception par expédition + cumul retrait)

**Files:**
- Modify: `backend/apps/voyages_consignment/models/shipment.py`
- Modify: `backend/apps/voyages_consignment/models/parcel.py`
- Migration: `voyages_consignment`
- Modify: `backend/apps/voyages_consignment/config_api/serializers.py`

- [ ] **Step 1 : ParcelShipment** — ajouter le statut `RECEIVED` + champs réception :
```python
    class Status(models.TextChoices):
        DRAFT      = "draft",      _("Brouillon")
        VALIDATED  = "validated",  _("Validée")
        LOADED     = "loaded",     _("Chargée")
        IN_TRANSIT = "in_transit", _("En transit")
        ARRIVED    = "arrived",    _("Arrivée")
        RECEIVED   = "received",   _("Réceptionnée")
        CANCELLED  = "cancelled",  _("Annulée")
```
Après `arrived_at`, ajouter :
```python
    received_pieces = models.PositiveSmallIntegerField(_("pièces reçues"), default=0)
    missing_pieces  = models.PositiveSmallIntegerField(_("pièces manquantes"), default=0)
    damaged_pieces  = models.PositiveSmallIntegerField(_("pièces avariées"), default=0)
    received_at     = models.DateTimeField(_("réceptionnée le"), null=True, blank=True)
```
`COUNTED` inclut déjà toutes les phases engagées ; ajouter `"received"` :
```python
    COUNTED = ("validated", "loaded", "in_transit", "arrived", "received")
```

- [ ] **Step 2 : Parcel** — ajouter le cumul retiré (champ stocké) après `received_pieces` existant :
```python
    picked_up_pieces = models.PositiveSmallIntegerField(_("pièces retirées"), default=0)
```
(Les champs `received_pieces`/`missing_pieces`/`damaged_pieces` du colis restent, mais seront désormais **agrégés depuis les expéditions** par le service de réception.)

- [ ] **Step 3 : Migration** — `cd backend && ../env/bin/python manage.py makemigrations voyages_consignment` (AddField ×5 : shipment received/missing/damaged/received_at + parcel picked_up_pieces ; AlterField status). Expected : migration créée.

- [ ] **Step 4 : Serializers** — `ParcelShipmentSerializer` : ajouter `received_pieces`, `missing_pieces`, `damaged_pieces`, `received_at` aux `fields`. `ParcelRead` : ajouter `picked_up_pieces` (et garder `shipped_pieces`/`remaining_pieces`).

- [ ] **Step 5 : check** — `../env/bin/python manage.py check` → 0 issue ; `makemigrations --check` → aucune (après Step 3 committée).

- [ ] **Step 6 : Commit** — `git commit -m "feat(consignment): shipment reception fields + RECEIVED status + parcel picked_up_pieces (partial shipment)"`

---

## Task 2 : Backend — services (expédier N, réception, retrait, pool) + tests

**Files:**
- Modify: `backend/apps/voyages_consignment/services/shipment_services.py`
- Modify: `backend/apps/voyages_consignment/services/parcel_services.py`
- Modify: `backend/apps/voyages_consignment/selectors/__init__.py` (`ready_parcels`)
- Modify: `backend/apps/voyages_consignment/config_api/views.py` + `urls.py`
- Create: `backend/apps/voyages_consignment/test_partial_expedition.py`

- [ ] **Step 1 : Test rouge** — `test_partial_expedition.py` : fixture société + 2 voyages même route (A→B via escale) + 1 voyage hors route + colis A→B quantité 10. Tests :
  - `ship_pieces(parcel, trip1, 6)` puis `ship_pieces(parcel, trip2, 4)` → `shipped_pieces==10`, `remaining_pieces==0`, 2 expéditions `in_transit`.
  - `ship_pieces(parcel, trip_hors_route, 1)` → `ApplicationError`.
  - `ship_pieces(parcel, trip2, 5)` quand restant=3 → `ApplicationError`.
  - réception : `arrive_shipment(s1)`, `receive_shipment(s1, received_pieces=6)` → `parcel.received_pieces==6`, statut `available_for_pickup`.
  - retrait incrémental : `pickup_parcel` (retire 6) → `picked_up_pieces==6`, pas encore `picked_up` ; après `receive_shipment(s2,4)` + `pickup_parcel` → `picked_up_pieces==10`, statut `picked_up`.
  (Fixture : réutiliser le motif de `test_m25_shipment.py`.)

- [ ] **Step 2 : rouge** — `pytest apps/voyages_consignment/test_partial_expedition.py -q --create-db` → échecs (ImportError `ship_pieces`/`receive_shipment`).

- [ ] **Step 3 : `recompute_parcel_state` (réécriture dynamique)** — remplacer le corps par :
```python
def recompute_parcel_state(parcel):
    """Statut du colis dérivé de l'état agrégé des expéditions + du cumul retiré."""
    if parcel.status == Parcel.Status.CANCELLED:
        return parcel
    live = list(parcel.shipments.filter(is_deleted=False).exclude(status=ParcelShipment.Status.CANCELLED))
    counted = [s for s in live if s.status in ParcelShipment.COUNTED]
    received = parcel.received_pieces or 0
    picked = parcel.picked_up_pieces or 0
    missing = parcel.missing_pieces or 0
    available = received - picked
    if parcel.quantity and (picked + missing) >= parcel.quantity:
        parcel.status = Parcel.Status.PICKED_UP
    elif available > 0:
        parcel.status = Parcel.Status.AVAILABLE_FOR_PICKUP
    elif any(s.status in (ParcelShipment.Status.IN_TRANSIT, ParcelShipment.Status.ARRIVED,
                          ParcelShipment.Status.RECEIVED) for s in counted):
        parcel.status = Parcel.Status.IN_TRANSIT
    else:
        parcel.status = Parcel.Status.READY_FOR_TRAVEL
    parcel.save(update_fields=["status", "updated_at"])
    return parcel
```

- [ ] **Step 4 : `ship_pieces` (1 clic)** — dans `shipment_services.py` :
```python
@transaction.atomic
def ship_pieces(parcel, *, trip, quantity=None, note="", user=None):
    """Expédier N pièces (défaut = restant) sur un voyage, en un geste : crée l'expédition,
    la valide et la met en transit."""
    qty = parcel.remaining_pieces if quantity is None else int(quantity)
    s = create_shipment(parcel, trip=trip, quantity=qty, note=note, user=user)
    validate_shipment(s, user=user)
    dispatch_shipment(s, user=user)
    return s
```
Exporter `ship_pieces` + `receive_shipment` dans `services/__init__.py`.

- [ ] **Step 5 : `receive_shipment`** — dans `shipment_services.py` :
```python
@transaction.atomic
def receive_shipment(shipment, *, received_pieces=None, missing_pieces=0, damaged_pieces=0, user=None):
    from apps.voyages_consignment.services.parcel_services import _assert_destination_agency
    parcel = shipment.parcel
    _assert_destination_agency(parcel, user)
    if shipment.status != ParcelShipment.Status.ARRIVED:
        raise ApplicationError(_("Seule une expédition arrivée peut être réceptionnée."))
    total = shipment.quantity
    received = total if received_pieces is None else int(received_pieces)
    missing = int(missing_pieces or 0); damaged = int(damaged_pieces or 0)
    if received < 0 or missing < 0 or damaged < 0:
        raise ApplicationError(_("Les quantités ne peuvent pas être négatives."))
    if received > total:
        raise ApplicationError(_("Pièces reçues supérieures aux pièces expédiées."))
    if received + missing > total:
        raise ApplicationError(_("Reçues + manquantes dépassent les pièces expédiées."))
    if damaged > received:
        raise ApplicationError(_("Les pièces avariées ne peuvent pas dépasser les pièces reçues."))
    shipment.received_pieces = received
    shipment.missing_pieces = missing
    shipment.damaged_pieces = damaged
    shipment.status = ParcelShipment.Status.RECEIVED
    shipment.received_at = timezone.now()
    shipment.updated_by = user
    shipment.save(update_fields=["received_pieces", "missing_pieces", "damaged_pieces",
                                 "status", "received_at", "updated_by", "updated_at"])
    # Ré-agrégation sur le colis (affichage liste + base du retrait).
    from django.db.models import Sum
    agg = parcel.shipments.filter(is_deleted=False, status=ParcelShipment.Status.RECEIVED).aggregate(
        r=Sum("received_pieces"), m=Sum("missing_pieces"), d=Sum("damaged_pieces"))
    parcel.received_pieces = agg["r"] or 0
    parcel.missing_pieces = agg["m"] or 0
    parcel.damaged_pieces = agg["d"] or 0
    parcel.available_at = parcel.available_at or timezone.now()
    parcel.updated_by = user
    parcel.save(update_fields=["received_pieces", "missing_pieces", "damaged_pieces",
                               "available_at", "updated_by", "updated_at"])
    recompute_parcel_state(parcel)
    return shipment
```
(Import `timezone` déjà présent ? sinon `from django.utils import timezone`.)

- [ ] **Step 6 : `pickup_parcel` incrémental** — dans `parcel_services.py`, adapter : autoriser si **pièces disponibles** (`received_pieces − picked_up_pieces > 0`) au lieu de `status == AVAILABLE_FOR_PICKUP` ; après capture du retirant, faire :
```python
    avail = (parcel.received_pieces or 0) - (parcel.picked_up_pieces or 0)
    if avail <= 0:
        raise ApplicationError(_("Aucune pièce disponible au retrait."))
    parcel.picked_up_pieces = (parcel.picked_up_pieces or 0) + avail
    parcel.picked_up_by = picked_up_by; parcel.picked_up_phone = picked_up_phone or ""
    parcel.picked_up_id_number = picked_up_id_number or ""; parcel.picked_up_kind = kind
    parcel.picked_up_at = timezone.now(); parcel.updated_by = user
    parcel.save()
    _event(parcel, ParcelEvent.Kind.PICKED_UP, from_status=Parcel.Status.AVAILABLE_FOR_PICKUP,
           to_status=parcel.status, user=user, note=f"{picked_up_by} — {avail} pièce(s)")
    recompute_parcel_state(parcel)
    return parcel
```
(Remplace le bloc qui forçait `status = PICKED_UP` ; c'est désormais `recompute_parcel_state` qui décide picked_up/available selon le solde. Conserver la capture destinataire/mandataire au-dessus.)

- [ ] **Step 7 : `ready_parcels` par restant** — réécrire pour renvoyer les colis **encore expédiables** (restant > 0) :
```python
def ready_parcels(company, destination_point=None, user=None):
    from django.db.models import Sum, F, Value, Q as _Q
    from django.db.models.functions import Coalesce
    from apps.voyages_consignment.models import ParcelShipment
    shipped = Coalesce(Sum("shipments__quantity",
                           filter=_Q(shipments__is_deleted=False,
                                     shipments__status__in=ParcelShipment.COUNTED)), Value(0))
    qs = (Parcel.objects.filter(is_deleted=False, company=company)
          .exclude(status__in=[Parcel.Status.PICKED_UP, Parcel.Status.CANCELLED,
                               Parcel.Status.AVAILABLE_FOR_PICKUP])
          .filter(_parcel_visibility_q(user))
          .annotate(_shipped=shipped).filter(quantity__gt=F("_shipped"))
          .select_related("origin_point", "destination_point", "consignment_type")
          .order_by("-created_at"))
    if destination_point:
        qs = qs.filter(destination_point_id=destination_point)
    return qs
```

- [ ] **Step 8 : Endpoints** — `views.py` : `ParcelShipView` (`POST parcels/<pk>/ship/` → `services.ship_pieces(parcel, trip=_trip, quantity=request.data.get("quantity"))`, perm `ticketing.parcel.manage`) ; `ShipmentReceiveView` (`POST shipments/<pk>/receive/` → `services.receive_shipment(...)`, perm `ticketing.parcel.manage`). `urls.py` : ajouter les 2 routes. `arrive_parcels_for_trip` : opérer sur les expéditions `in_transit` du voyage (`ParcelShipment.objects.filter(trip=trip, status=IN_TRANSIT)` → `arrive_shipment`).

- [ ] **Step 9 : vert + non-régression + check** — `pytest apps/voyages_consignment/test_partial_expedition.py -q --create-db` → vert ; `pytest apps/voyages_consignment -q --reuse-db -p no:cacheprovider` (comparer base rouge : 3 reds connus) ; `makemigrations --check` → aucune.

- [ ] **Step 10 : Commit** — `git commit -m "feat(consignment): ship_pieces + receive_shipment + incremental pickup + remaining-based pool (partial shipment)"`

---

## Task 3 : Frontend — écran Expédition (pool quantités + Expédier)

**Files:**
- Modify: `api.config.ts` (`parcelShip`, `shipmentReceive`)
- Modify: `parcel.service.ts` (`ship`, `receiveShipment`)
- Modify: `manifest.component.{ts,html}`
- Modify: `voyages-consignment.models.ts` (`Parcel.remaining_pieces/shipped_pieces/picked_up_pieces`)
- Modify: `public/i18n/{fr,en,es,pt}.json`

- [ ] **Step 1 : Endpoints + service** — `parcelShip: (id)=>`${VCG}/parcels/${id}/ship/`` ; `shipmentReceive: (id)=>`${VCG}/shipments/${id}/receive/``. Service : `ship(id, {trip_id, quantity})`, `receiveShipment(id, {received_pieces, missing_pieces, damaged_pieces})`.

- [ ] **Step 2 : Pool (gauche)** — chaque ligne du pool : badge « restant {{p.remaining_pieces}} / {{p.quantity}} », **input number** `shipQty[p.id]` (défaut = `remaining_pieces`, min 1, max remaining), bouton **« Expédier »** → `ship(p.id, {trip_id: tripId, quantity: shipQty[p.id]})` puis `refresh()`. Garder la sélection + « Expédier la sélection » (chaque colis part de `shipQty` ou son restant). Nécessite un voyage sélectionné.

- [ ] **Step 3 : Droite = expéditions du voyage** — lister les expéditions (via le colis `shipments` ou l'endpoint existant) : colis, pièces, statut. (Le dispatch par colis entier legacy de cette table est remplacé par le pool « Expédier ».)

- [ ] **Step 4 : i18n** — `cons.expedition.{remaining, ship_n, qty}` ×4. **Build** `ng build` OK.

- [ ] **Step 5 : Commit** — `git commit -m "feat(consignment): Expédition pool — ship N pieces per parcel (frontend)"`

---

## Task 4 : Frontend — Réception par expédition + page Colis

**Files:**
- Modify: `reception.component.{ts,html}`
- Modify: `parcels.component.html` (colonne pièces : reçu/total + historique expéditions)
- Modify: `public/i18n/{fr,en,es,pt}.json`

- [ ] **Step 1 : Réception** — lister les **expéditions arrivées** (nouvel endpoint liste ou via `parcels` filtré + leurs `shipments` `arrived`). Par ligne : colis + pièces expédiées + inputs reçues/manquantes/avariées (défaut reçues = qté) + bouton « Réceptionner » → `receiveShipment(s.id, …)`.

- [ ] **Step 2 : Page Colis** — colonne pièces : « reçu {{p.received_pieces}} / {{p.quantity}} » + badges manquant/avarié ; détail : liste des expéditions avec leur quantité/voyage/statut/réception.

- [ ] **Step 3 : i18n ×4 + Build** — `ng build` OK sans erreur.

- [ ] **Step 4 : Commit** — `git commit -m "feat(consignment): per-shipment reception screen + parcel pieces display (frontend)"`

---

## Notes

- `create_shipment`/`validate_shipment`/`dispatch_shipment` existants réutilisés (couverture route + restant + capacité + voyage primaire).
- Réception : seule l'agence de destination (réutilise `_assert_destination_agency`).
- Cas simple : `ship_pieces(all)` → 1 expédition ; `arrive_shipment` + `receive_shipment(all)` + `pickup_parcel` → identique au flux mono-lot.
- Base rouge `voyages_consignment` (3 reds connus) : comparer avant d'imputer une régression.
- Réception liste des expéditions arrivées : si pas d'endpoint, ajouter `GET shipments/?status=arrived&destination=` (sélecteur simple) — décision d'exécution (ruling).
