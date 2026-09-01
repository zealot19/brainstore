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
                    recipient_address="", recipient_id_number="", description="", weight_kg=None,
                    quantity=1, declared_value=None, amount_due, amount_received=None,
                    payment_method="", user):
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
        recipient_phone=recipient_phone, recipient_address=recipient_address,
        recipient_id_number=recipient_id_number, description=description,
        weight_kg=weight_kg, quantity=quantity, declared_value=declared_value,
        amount_due=due, amount_received=received, change_due=received - due,
        payment_method=payment_method or "", paid_at=timezone.now(), created_by=user)
    _event(parcel, ParcelEvent.Kind.REGISTERED, user=user)
    from apps.treasury.services import record_parcel_payment
    record_parcel_payment(company, parcel=parcel, amount=due, payment_method=payment_method, user=user)
    return parcel


_EDITABLE = {"sender_name", "sender_phone", "recipient_name", "recipient_phone",
             "recipient_address", "recipient_id_number", "description", "weight_kg",
             "quantity", "declared_value", "notes"}


@transaction.atomic
def edit_parcel(parcel, *, user, **fields):
    """Modifier un colis tant qu'il n'est pas livré/annulé (hors type/tarif)."""
    if parcel.status in (Parcel.Status.PICKED_UP, Parcel.Status.CANCELLED):
        raise ApplicationError(_("Un colis livré ou annulé ne peut pas être modifié."))
    for k, v in fields.items():
        if k in _EDITABLE:
            setattr(parcel, k, v)
    parcel.updated_by = user
    parcel.save()
    return parcel


@transaction.atomic
def unload_parcel(parcel, *, user):
    """Retirer un colis d'un voyage (retour au pool d'attente)."""
    if parcel.status != Parcel.Status.LOADED:
        raise ApplicationError(_("Seul un colis chargé peut être retiré du voyage."))
    parcel.trip = None
    parcel.loaded_at = None
    parcel.status = Parcel.Status.REGISTERED
    parcel.updated_by = user
    parcel.save(update_fields=["trip", "loaded_at", "status", "updated_by", "updated_at"])
    _event(parcel, ParcelEvent.Kind.REGISTERED, user=user, note="Retiré du voyage")
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
    """Réception complète (toutes les pièces, sans écart)."""
    return receive_parcel(parcel, received_pieces=parcel.quantity, missing_pieces=0,
                          damaged_pieces=0, user=user)


@transaction.atomic
def receive_parcel(parcel, *, received_pieces=None, missing_pieces=0, damaged_pieces=0, user):
    """Réception quantitative : pièces reçues / manquantes / avariées."""
    if parcel.status != Parcel.Status.LOADED:
        raise ApplicationError(_("Seul un colis chargé peut être réceptionné."))
    total = parcel.quantity
    received = total if received_pieces is None else int(received_pieces)
    missing = int(missing_pieces or 0)
    damaged = int(damaged_pieces or 0)
    if received < 0 or missing < 0 or damaged < 0:
        raise ApplicationError(_("Les quantités ne peuvent pas être négatives."))
    if received > total:
        raise ApplicationError(_("Pièces reçues (%(r)s) supérieures aux pièces enregistrées (%(t)s).")
                               % {"r": received, "t": total})
    if received + missing > total:
        raise ApplicationError(_("Reçues + manquantes dépassent le nombre de pièces enregistrées."))
    if damaged > received:
        raise ApplicationError(_("Les pièces avariées ne peuvent pas dépasser les pièces reçues."))
    parcel.received_pieces = received
    parcel.missing_pieces = missing
    parcel.damaged_pieces = damaged
    parcel.status = Parcel.Status.ARRIVED
    parcel.arrived_at = timezone.now()
    parcel.updated_by = user
    parcel.save(update_fields=["received_pieces", "missing_pieces", "damaged_pieces",
                               "status", "arrived_at", "updated_by", "updated_at"])
    note = f"{received}/{total}"
    if missing:
        note += f" · {missing} manquant(s)"
    if damaged:
        note += f" · {damaged} avarié(s)"
    _event(parcel, ParcelEvent.Kind.ARRIVED, trip=parcel.trip, user=user, note=note)
    return parcel


@transaction.atomic
def pickup_parcel(parcel, *, picked_up_by, picked_up_id_number="", user):
    """Livraison au destinataire (avec la pièce présentée)."""
    if parcel.status != Parcel.Status.ARRIVED:
        raise ApplicationError(_("Seul un colis réceptionné peut être livré."))
    if not picked_up_by:
        raise ApplicationError(_("Indiquez le nom de la personne qui retire le colis."))
    parcel.status = Parcel.Status.PICKED_UP
    parcel.picked_up_by = picked_up_by
    parcel.picked_up_id_number = picked_up_id_number or ""
    parcel.picked_up_at = timezone.now()
    parcel.updated_by = user
    parcel.save(update_fields=["status", "picked_up_by", "picked_up_id_number", "picked_up_at",
                               "updated_by", "updated_at"])
    note = picked_up_by + (f" · pièce {picked_up_id_number}" if picked_up_id_number else "")
    _event(parcel, ParcelEvent.Kind.PICKED_UP, user=user, note=note)
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
    from apps.treasury.services.refund import refund_on_cancel
    refund_on_cancel(parcel.company, amount_paid=parcel.amount_received, user=user,
                     description=f"Remboursement colis {parcel.reference}")
    return parcel
