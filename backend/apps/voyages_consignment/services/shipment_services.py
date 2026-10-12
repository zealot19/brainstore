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
    """Avance parcel.status depuis l'état agrégé des expéditions (M25)."""
    live = list(parcel.shipments.filter(is_deleted=False).exclude(status=ParcelShipment.Status.CANCELLED))
    counted = [s for s in live if s.status in ParcelShipment.COUNTED]
    shipped = sum(s.quantity for s in counted)
    if parcel.status in (Parcel.Status.AVAILABLE_FOR_PICKUP, Parcel.Status.PICKED_UP, Parcel.Status.CANCELLED):
        return parcel  # phases post-réception figées
    if counted and shipped >= parcel.quantity and all(s.status == ParcelShipment.Status.ARRIVED for s in counted):
        parcel.status = Parcel.Status.ARRIVED
    elif any(s.status in (ParcelShipment.Status.IN_TRANSIT, ParcelShipment.Status.ARRIVED) for s in counted):
        parcel.status = Parcel.Status.IN_TRANSIT
    elif any(s.status == ParcelShipment.Status.LOADED for s in counted):
        parcel.status = Parcel.Status.LOADED
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
