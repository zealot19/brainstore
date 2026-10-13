from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.voyages_consignment.models import Parcel, ParcelShipment

_PRE_DEPARTURE = ("draft", "pending")


def _route_covers(route, from_point, to_point):
    from apps.voyages_pricing.selectors.fare_selectors import route_points
    ids = [p.id for p in route_points(route)]
    if from_point.id not in ids or to_point.id not in ids:
        return False
    return ids.index(from_point.id) < ids.index(to_point.id)


def _capacity_ok(trip, company, adding_weight):
    """Capacité colis du voyage, comptée en EXPÉDITIONS présentes (M25)."""
    from apps.voyages_config.models import VoyagesSettings
    s = VoyagesSettings.objects.filter(company=company).first()
    if not s:
        return
    current = ParcelShipment.objects.filter(trip=trip, is_deleted=False).exclude(
        status=ParcelShipment.Status.CANCELLED)
    if s.parcel_trip_max_count and current.count() >= s.parcel_trip_max_count:
        raise ApplicationError(_("Nombre maximum de colis atteint pour ce voyage."))
    if s.parcel_trip_max_weight_kg and adding_weight:
        total = sum((sh.parcel.weight_kg or 0) for sh in current.select_related("parcel")) + adding_weight
        if total > s.parcel_trip_max_weight_kg:
            raise ApplicationError(_("Capacité poids colis dépassée pour ce voyage."))


def recompute_parcel_state(parcel):
    """Statut du colis dérivé de l'état agrégé des expéditions + du cumul retiré."""
    if parcel.status == Parcel.Status.CANCELLED:
        return parcel
    live = list(parcel.shipments.filter(is_deleted=False).exclude(status=ParcelShipment.Status.CANCELLED))
    counted = [s for s in live if s.status in ParcelShipment.COUNTED]
    shipped = sum(s.quantity for s in counted)
    moving = any(s.status in (ParcelShipment.Status.IN_TRANSIT, ParcelShipment.Status.ARRIVED,
                              ParcelShipment.Status.RECEIVED) for s in counted)
    received = parcel.received_pieces or 0
    picked = parcel.picked_up_pieces or 0
    missing = parcel.missing_pieces or 0
    available = received - picked
    if parcel.quantity and (picked + missing) >= parcel.quantity:
        parcel.status = Parcel.Status.PICKED_UP
    elif available > 0:
        parcel.status = Parcel.Status.AVAILABLE_FOR_PICKUP
    elif moving and shipped < parcel.quantity:
        # Une partie seulement a été expédiée : colis « à moitié envoyé ».
        parcel.status = Parcel.Status.PARTIAL_TRANSIT
    elif moving:
        parcel.status = Parcel.Status.IN_TRANSIT
    else:
        parcel.status = Parcel.Status.READY_FOR_TRAVEL
    parcel.save(update_fields=["status", "updated_at"])
    return parcel


@transaction.atomic
def create_shipment(parcel, *, trip, quantity, note="", user=None):
    if parcel.status in (Parcel.Status.PICKED_UP, Parcel.Status.CANCELLED):
        raise ApplicationError(_("Ce colis ne peut plus être expédié."))
    if trip.status not in _PRE_DEPARTURE:
        raise ApplicationError(_("Ce voyage n'est pas ouvert au chargement."))
    if not _route_covers(trip.route, parcel.origin_point, parcel.destination_point):
        raise ApplicationError(_("Ce voyage ne dessert pas le trajet du colis (départ → destination)."))
    quantity = int(quantity or 0)
    if quantity < 1:
        raise ApplicationError(_("La quantité expédiée doit être au moins 1."))
    if quantity > parcel.remaining_pieces:
        raise ApplicationError(_("Quantité (%(q)s) supérieure au restant (%(r)s).")
                               % {"q": quantity, "r": parcel.remaining_pieces})
    _capacity_ok(trip, parcel.company, parcel.weight_kg)
    return ParcelShipment.objects.create(parcel=parcel, trip=trip, quantity=quantity,
                                         status=ParcelShipment.Status.DRAFT, note=note, created_by=user)


@transaction.atomic
def validate_shipment(shipment, *, user=None):
    if shipment.status != ParcelShipment.Status.DRAFT:
        raise ApplicationError(_("Seule une expédition en brouillon peut être validée."))
    parcel = shipment.parcel
    if shipment.quantity > parcel.remaining_pieces:
        raise ApplicationError(_("Le restant a changé : quantité supérieure au restant."))
    shipment.status = ParcelShipment.Status.VALIDATED
    shipment.validated_by = user
    shipment.validated_at = timezone.now()
    # Voyage primaire : 1ʳᵉ expédition validée.
    if not parcel.shipments.filter(is_deleted=False, is_primary=True).exists():
        shipment.is_primary = True
        parcel.trip = shipment.trip
        parcel.save(update_fields=["trip", "updated_at"])
    shipment.updated_by = user
    shipment.save()
    recompute_parcel_state(parcel)
    return shipment


def _advance(shipment, *, to_status, stamp, user):
    shipment.status = to_status
    setattr(shipment, stamp, timezone.now())
    shipment.updated_by = user
    shipment.save(update_fields=[stamp, "status", "updated_by", "updated_at"])
    recompute_parcel_state(shipment.parcel)
    return shipment


@transaction.atomic
def load_shipment(shipment, *, user=None):
    if shipment.status != ParcelShipment.Status.VALIDATED:
        raise ApplicationError(_("Seule une expédition validée peut être chargée."))
    return _advance(shipment, to_status=ParcelShipment.Status.LOADED, stamp="loaded_at", user=user)


@transaction.atomic
def dispatch_shipment(shipment, *, user=None):
    if shipment.status not in (ParcelShipment.Status.VALIDATED, ParcelShipment.Status.LOADED):
        raise ApplicationError(_("Seule une expédition validée ou chargée peut être expédiée."))
    return _advance(shipment, to_status=ParcelShipment.Status.IN_TRANSIT, stamp="dispatched_at", user=user)


@transaction.atomic
def arrive_shipment(shipment, *, user=None):
    if shipment.status != ParcelShipment.Status.IN_TRANSIT:
        raise ApplicationError(_("Seule une expédition en transit peut être marquée arrivée."))
    return _advance(shipment, to_status=ParcelShipment.Status.ARRIVED, stamp="arrived_at", user=user)


@transaction.atomic
def cancel_shipment(shipment, *, user=None):
    if shipment.status == ParcelShipment.Status.ARRIVED:
        raise ApplicationError(_("Une expédition arrivée ne peut pas être annulée."))
    was_primary = shipment.is_primary
    shipment.status = ParcelShipment.Status.CANCELLED
    shipment.is_primary = False
    shipment.updated_by = user
    shipment.save(update_fields=["status", "is_primary", "updated_by", "updated_at"])
    parcel = shipment.parcel
    if was_primary:
        nxt = (parcel.shipments.filter(is_deleted=False, status__in=ParcelShipment.COUNTED)
               .order_by("validated_at", "created_at").first())
        parcel.trip = nxt.trip if nxt else None
        if nxt:
            nxt.is_primary = True
            nxt.save(update_fields=["is_primary", "updated_at"])
        parcel.save(update_fields=["trip", "updated_at"])
    recompute_parcel_state(parcel)
    return shipment


@transaction.atomic
def ship_pieces(parcel, *, trip, quantity=None, note="", user=None):
    """Expédier N pièces (défaut = restant) sur un voyage, en un geste :
    crée l'expédition, la valide et la met en transit."""
    qty = parcel.remaining_pieces if quantity is None else int(quantity)
    s = create_shipment(parcel, trip=trip, quantity=qty, note=note, user=user)
    validate_shipment(s, user=user)
    dispatch_shipment(s, user=user)
    return s


@transaction.atomic
def receive_shipment(shipment, *, received_pieces=None, missing_pieces=0, damaged_pieces=0, user=None):
    """Réception d'une expédition arrivée (par lot). Seule l'agence de destination.
    Ré-agrège les pièces reçues/manquantes/avariées sur le colis (affichage + base du retrait)."""
    from django.db.models import Sum
    from apps.voyages_consignment.services.parcel_services import _assert_destination_agency
    parcel = shipment.parcel
    _assert_destination_agency(parcel, user)
    if shipment.status != ParcelShipment.Status.ARRIVED:
        raise ApplicationError(_("Seule une expédition arrivée peut être réceptionnée."))
    total = shipment.quantity
    received = total if received_pieces is None else int(received_pieces)
    missing = int(missing_pieces or 0)
    damaged = int(damaged_pieces or 0)
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
    agg = (parcel.shipments.filter(is_deleted=False, status=ParcelShipment.Status.RECEIVED)
           .aggregate(r=Sum("received_pieces"), m=Sum("missing_pieces"), d=Sum("damaged_pieces")))
    parcel.received_pieces = agg["r"] or 0
    parcel.missing_pieces = agg["m"] or 0
    parcel.damaged_pieces = agg["d"] or 0
    if not parcel.available_at:
        parcel.available_at = timezone.now()
    parcel.updated_by = user
    parcel.save(update_fields=["received_pieces", "missing_pieces", "damaged_pieces",
                               "available_at", "updated_by", "updated_at"])
    recompute_parcel_state(parcel)
    return shipment
