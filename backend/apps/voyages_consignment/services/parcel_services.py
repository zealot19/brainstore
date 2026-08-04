from decimal import Decimal
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.core.models import Sequence
from apps.core.services.sequence_service import next_number
from apps.voyages_consignment.models import Parcel, ParcelEvent
from apps.voyages_pricing.selectors.fare_selectors import route_points

_PRE_DEPARTURE = ["draft", "pending"]


def _parcel_reference():
    Sequence.objects.get_or_create(
        code="COL", defaults={"name": "Colis", "prefix": "COL", "padding": 5, "reset_yearly": True})
    return next_number("COL")


def _event(parcel, kind, *, trip=None, user=None, note=""):
    ParcelEvent.objects.create(parcel=parcel, kind=kind, trip=trip, note=note, created_by=user)


@transaction.atomic
def register_parcel(company, *, origin_point, destination_point, consignment_type,
                    sender_name, sender_phone, recipient_name, recipient_phone,
                    recipient_address="", description="", weight_kg=None, quantity=1,
                    declared_value=None, amount_due, amount_received=None, payment_method="", user):
    if origin_point.id == destination_point.id:
        raise ApplicationError(_("Le point de départ et le point d'arrivée doivent différer."))
    if consignment_type.nature.is_prohibited:
        raise ApplicationError(_("Cette nature de colis est interdite au transport."))
    if consignment_type.max_weight_kg and weight_kg and weight_kg > consignment_type.max_weight_kg:
        raise ApplicationError(_("Poids supérieur au maximum autorisé pour ce type de colis."))
    due = Decimal(str(amount_due))
    received = Decimal(str(amount_received)) if amount_received is not None else due
    if received < due:
        raise ApplicationError(
            _("Montant encaissé insuffisant : %(r)s < %(d)s.") % {"r": received, "d": due})
    parcel = Parcel.objects.create(
        company=company, reference=_parcel_reference(), status=Parcel.Status.REGISTERED,
        origin_point=origin_point, destination_point=destination_point, consignment_type=consignment_type,
        sender_name=sender_name, sender_phone=sender_phone, recipient_name=recipient_name,
        recipient_phone=recipient_phone, recipient_address=recipient_address, description=description,
        weight_kg=weight_kg, quantity=quantity, declared_value=declared_value,
        amount_due=due, amount_received=received, change_due=received - due,
        payment_method=payment_method or "", paid_at=timezone.now(), created_by=user)
    _event(parcel, ParcelEvent.Kind.REGISTERED, user=user)
    return parcel


def _points_on_trip(trip):
    return {p.id for p in route_points(trip.route)}


@transaction.atomic
def assign_to_trip(parcel, trip, *, user):
    if parcel.status != Parcel.Status.REGISTERED:
        raise ApplicationError(_("Seul un colis enregistré peut être chargé."))
    if trip.status not in _PRE_DEPARTURE:
        raise ApplicationError(_("Ce voyage n'est pas ouvert au chargement."))
    pts = _points_on_trip(trip)
    if parcel.origin_point_id not in pts or parcel.destination_point_id not in pts:
        raise ApplicationError(_("Le trajet du colis n'est pas desservi par ce voyage."))
    parcel.trip = trip
    parcel.status = Parcel.Status.LOADED
    parcel.loaded_at = timezone.now()
    parcel.updated_by = user
    parcel.save(update_fields=["trip", "status", "loaded_at", "updated_by", "updated_at"])
    _event(parcel, ParcelEvent.Kind.LOADED, trip=trip, user=user)
    return parcel


@transaction.atomic
def mark_arrived(parcel, *, user):
    if parcel.status != Parcel.Status.LOADED:
        raise ApplicationError(_("Seul un colis chargé peut être marqué arrivé."))
    parcel.status = Parcel.Status.ARRIVED
    parcel.arrived_at = timezone.now()
    parcel.updated_by = user
    parcel.save(update_fields=["status", "arrived_at", "updated_by", "updated_at"])
    _event(parcel, ParcelEvent.Kind.ARRIVED, trip=parcel.trip, user=user)
    return parcel


@transaction.atomic
def pickup_parcel(parcel, *, picked_up_by, user):
    if parcel.status != Parcel.Status.ARRIVED:
        raise ApplicationError(_("Seul un colis arrivé peut être retiré."))
    if not picked_up_by:
        raise ApplicationError(_("Indiquez le nom de la personne qui retire le colis."))
    parcel.status = Parcel.Status.PICKED_UP
    parcel.picked_up_by = picked_up_by
    parcel.picked_up_at = timezone.now()
    parcel.updated_by = user
    parcel.save(update_fields=["status", "picked_up_by", "picked_up_at", "updated_by", "updated_at"])
    _event(parcel, ParcelEvent.Kind.PICKED_UP, user=user, note=picked_up_by)
    return parcel


@transaction.atomic
def cancel_parcel(parcel, *, user):
    if parcel.status == Parcel.Status.PICKED_UP:
        raise ApplicationError(_("Un colis retiré ne peut pas être annulé."))
    if parcel.status == Parcel.Status.CANCELLED:
        return parcel
    parcel.status = Parcel.Status.CANCELLED
    parcel.updated_by = user
    parcel.save(update_fields=["status", "updated_by", "updated_at"])
    _event(parcel, ParcelEvent.Kind.CANCELLED, user=user)
    return parcel
