from decimal import Decimal
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.core.models import Sequence
from apps.core.agency_scope import agency_allowed
from apps.core.services.sequence_service import next_number, daily_route_ref
from apps.voyages_consignment.models import Parcel, ParcelEvent

_PRE_DEPARTURE = ["draft", "pending"]
_ASSIGNABLE = (Parcel.Status.REGISTERED, Parcel.Status.READY_FOR_TRAVEL, Parcel.Status.LOADED)


def _assert_destination_agency(parcel, user):
    """Réception / retrait / livraison ne sont permis qu'à l'agence de DESTINATION (B).
    L'agence d'origine (A) voit le colis mais ne peut pas le réceptionner ni le remettre.
    Admin institution et acteur système (user=None) sont exemptés."""
    dest_agency_id = parcel.destination_point.agency_id
    if not agency_allowed(user, dest_agency_id):
        raise ApplicationError(
            _("Seule l'agence de destination peut réceptionner ou remettre ce colis."))


def _parcel_reference(company_id, origin, destination):
    """Référence colis, même style que la référence voyage : DEP-ARR-AAAAMMJJ-NNN."""
    return daily_route_ref("COL", company_id, origin, destination)


def _event(parcel, kind, *, from_status="", to_status="", trip=None, user=None, note=""):
    ParcelEvent.objects.create(parcel=parcel, kind=kind, from_status=from_status,
                               to_status=to_status, trip=trip, note=note, created_by=user)


@transaction.atomic
def register_parcel(company, *, origin_point, destination_point, consignment_type,
                    sender_name, sender_phone, recipient_name, recipient_phone,
                    recipient_address="", recipient_id_number="", description="", weight_kg=None,
                    quantity=1, declared_value=None, amount_due, amount_received=None,
                    payment_method="", sender_civility="", sender_id_type="cni",
                    sender_id_number="", user):
    if origin_point.id == destination_point.id:
        raise ApplicationError(_("Le point de départ et le point d'arrivée doivent différer."))
    if getattr(destination_point, "station_kind", "") != "AGENCY":
        raise ApplicationError(_("Le colis ne peut être envoyé que vers une agence."))
    if consignment_type.nature.is_prohibited:
        raise ApplicationError(_("Cette nature de colis est interdite au transport."))
    if consignment_type.max_weight_kg and weight_kg and weight_kg > consignment_type.max_weight_kg:
        raise ApplicationError(_("Poids supérieur au maximum autorisé pour ce type de colis."))
    due = Decimal(str(amount_due))
    received = Decimal(str(amount_received)) if amount_received is not None else due
    if received < due:
        raise ApplicationError(
            _("Montant encaissé insuffisant : %(r)s < %(d)s.") % {"r": received, "d": due})
    from apps.voyages_booking.services.passenger_services import get_or_create_passenger
    sender_client = get_or_create_passenger(
        company, id_type=sender_id_type, id_number=sender_id_number, phone=sender_phone,
        name=sender_name, civility=sender_civility, user=user) if sender_name else None
    parcel = Parcel.objects.create(
        company=company, agency=origin_point.agency,
        reference=_parcel_reference(company.id, origin_point, destination_point), status=Parcel.Status.READY_FOR_TRAVEL,
        origin_point=origin_point, destination_point=destination_point, consignment_type=consignment_type,
        sender_client=sender_client,
        sender_name=sender_name, sender_phone=sender_phone, recipient_name=recipient_name,
        recipient_phone=recipient_phone, recipient_address=recipient_address,
        recipient_id_number=recipient_id_number, description=description,
        weight_kg=weight_kg, quantity=quantity, declared_value=declared_value,
        amount_due=due, amount_received=received, change_due=received - due,
        payment_method=payment_method or "", paid_at=timezone.now(), created_by=user)
    _event(parcel, ParcelEvent.Kind.REGISTERED, to_status=Parcel.Status.REGISTERED, user=user)
    _event(parcel, ParcelEvent.Kind.READY, from_status=Parcel.Status.REGISTERED,
           to_status=Parcel.Status.READY_FOR_TRAVEL, user=user)
    from apps.treasury.services import record_parcel_payment
    record_parcel_payment(company, parcel=parcel, amount=due, payment_method=payment_method, user=user)
    return parcel


_EDITABLE = {"sender_name", "sender_phone", "recipient_name", "recipient_phone",
             "recipient_address", "recipient_id_number", "description", "weight_kg",
             "quantity", "declared_value", "notes"}


@transaction.atomic
def edit_parcel(parcel, *, user, **fields):
    """Modifier un colis tant qu'il n'est pas retiré/annulé (hors type/tarif)."""
    if parcel.status in (Parcel.Status.PICKED_UP, Parcel.Status.CANCELLED):
        raise ApplicationError(_("Un colis retiré ou annulé ne peut pas être modifié."))
    for k, v in fields.items():
        if k in _EDITABLE:
            setattr(parcel, k, v)
    parcel.updated_by = user
    parcel.save()
    return parcel


def _capacity_ok(trip, company, adding_weight):
    """Refuse l'ajout si la capacité colis du voyage (configurée) serait dépassée."""
    from apps.voyages_config.models import VoyagesSettings
    s = VoyagesSettings.objects.filter(company=company).first()
    if not s:
        return
    current = trip.parcels.exclude(status=Parcel.Status.CANCELLED)
    if s.parcel_trip_max_count and current.count() >= s.parcel_trip_max_count:
        raise ApplicationError(_("Nombre maximum de colis atteint pour ce voyage."))
    if s.parcel_trip_max_weight_kg:
        total = sum((p.weight_kg or 0) for p in current) + (adding_weight or 0)
        if total > s.parcel_trip_max_weight_kg:
            raise ApplicationError(_("Capacité poids colis dépassée pour ce voyage."))


@transaction.atomic
def assign_to_trip(parcel, trip, *, user, scan=False):
    if parcel.status not in _ASSIGNABLE:
        raise ApplicationError(_("Ce colis ne peut plus être affecté à un voyage."))
    if trip.status not in _PRE_DEPARTURE:
        raise ApplicationError(_("Ce voyage n'est pas ouvert au chargement."))
    _capacity_ok(trip, parcel.company, parcel.weight_kg)
    prev = parcel.status
    parcel.trip = trip
    if scan:
        parcel.status = Parcel.Status.LOADED
        parcel.loaded_at = timezone.now()
        kind, to = ParcelEvent.Kind.LOADED, Parcel.Status.LOADED
    else:
        parcel.status = Parcel.Status.READY_FOR_TRAVEL
        kind, to = ParcelEvent.Kind.READY, Parcel.Status.READY_FOR_TRAVEL
    parcel.updated_by = user
    parcel.save()
    _event(parcel, kind, from_status=prev, to_status=to, trip=trip, user=user)
    return parcel


@transaction.atomic
def unassign_from_trip(parcel, *, user):
    if parcel.status not in (Parcel.Status.READY_FOR_TRAVEL, Parcel.Status.LOADED):
        raise ApplicationError(_("Seul un colis non expédié peut être retiré du voyage."))
    prev = parcel.status
    parcel.trip = None
    parcel.loaded_at = None
    parcel.status = Parcel.Status.READY_FOR_TRAVEL
    parcel.updated_by = user
    parcel.save()
    _event(parcel, ParcelEvent.Kind.READY, from_status=prev,
           to_status=Parcel.Status.READY_FOR_TRAVEL, user=user, note="Retiré du voyage")
    return parcel


@transaction.atomic
def load_parcel(parcel, *, user):
    if parcel.status != Parcel.Status.READY_FOR_TRAVEL:
        raise ApplicationError(_("Seul un colis prêt peut être chargé."))
    parcel.status = Parcel.Status.LOADED
    parcel.loaded_at = timezone.now()
    parcel.updated_by = user
    parcel.save()
    _event(parcel, ParcelEvent.Kind.LOADED, from_status=Parcel.Status.READY_FOR_TRAVEL,
           to_status=Parcel.Status.LOADED, trip=parcel.trip, user=user)
    return parcel


@transaction.atomic
def dispatch_parcel(parcel, *, user):
    if parcel.status not in (Parcel.Status.READY_FOR_TRAVEL, Parcel.Status.LOADED):
        raise ApplicationError(_("Seul un colis prêt ou chargé peut être expédié."))
    prev = parcel.status
    parcel.status = Parcel.Status.IN_TRANSIT
    parcel.dispatched_at = timezone.now()
    parcel.updated_by = user
    parcel.save()
    _event(parcel, ParcelEvent.Kind.DISPATCHED, from_status=prev,
           to_status=Parcel.Status.IN_TRANSIT, trip=parcel.trip, user=user)
    return parcel


@transaction.atomic
def mark_arrived(parcel, *, user):
    if parcel.status != Parcel.Status.IN_TRANSIT:
        raise ApplicationError(_("Seul un colis en transit peut être marqué arrivé."))
    parcel.status = Parcel.Status.ARRIVED
    parcel.arrived_at = timezone.now()
    parcel.updated_by = user
    parcel.save()
    _event(parcel, ParcelEvent.Kind.ARRIVED, from_status=Parcel.Status.IN_TRANSIT,
           to_status=Parcel.Status.ARRIVED, trip=parcel.trip, user=user)
    return parcel


@transaction.atomic
def receive_parcel(parcel, *, received_pieces=None, missing_pieces=0, damaged_pieces=0, user):
    """Réception à l'agence de destination : pièces reçues / manquantes / avariées
    -> disponible pour retrait."""
    _assert_destination_agency(parcel, user)
    if parcel.status not in (Parcel.Status.ARRIVED, Parcel.Status.IN_TRANSIT):
        raise ApplicationError(_("Seul un colis arrivé peut être réceptionné."))
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
    prev = parcel.status
    parcel.received_pieces = received
    parcel.missing_pieces = missing
    parcel.damaged_pieces = damaged
    parcel.status = Parcel.Status.AVAILABLE_FOR_PICKUP
    parcel.available_at = timezone.now()
    if not parcel.arrived_at:
        parcel.arrived_at = timezone.now()
    parcel.updated_by = user
    parcel.save()
    note = f"{received}/{total}"
    if missing:
        note += f" · {missing} manquant(s)"
    if damaged:
        note += f" · {damaged} avarié(s)"
    _event(parcel, ParcelEvent.Kind.RECEIVED, from_status=prev,
           to_status=Parcel.Status.AVAILABLE_FOR_PICKUP, trip=parcel.trip, user=user, note=note)
    return parcel


@transaction.atomic
def pickup_parcel(parcel, *, picked_up_by="", picked_up_phone="", picked_up_id_number="",
                  picked_up_kind="", user):
    """Retrait du colis.

    - Destinataire renseigné à la création → simple confirmation (retrait par le
      destinataire ; pièce présentée facultative).
    - Sinon → on capture qui retire (destinataire OU mandataire) avec nom,
      téléphone et pièce (obligatoires). Un destinataire capturé ici renseigne
      aussi le destinataire du colis.
    """
    _assert_destination_agency(parcel, user)
    if parcel.status != Parcel.Status.AVAILABLE_FOR_PICKUP:
        raise ApplicationError(_("Seul un colis disponible peut être retiré."))

    has_recipient = bool(parcel.recipient_name)
    if has_recipient:
        picked_up_by = picked_up_by or parcel.recipient_name
        picked_up_phone = picked_up_phone or parcel.recipient_phone
        kind = Parcel.PickupKind.DESTINATAIRE
    else:
        if not (picked_up_by and picked_up_phone and picked_up_id_number):
            raise ApplicationError(_("Nom, téléphone et pièce sont requis pour le retrait."))
        if picked_up_kind not in (Parcel.PickupKind.DESTINATAIRE, Parcel.PickupKind.MANDATAIRE):
            raise ApplicationError(_("Précisez si le retrait est fait par le destinataire ou un mandataire."))
        kind = picked_up_kind
        if kind == Parcel.PickupKind.DESTINATAIRE:
            parcel.recipient_name = picked_up_by
            parcel.recipient_phone = picked_up_phone
            parcel.recipient_id_number = picked_up_id_number

    parcel.status = Parcel.Status.PICKED_UP
    parcel.picked_up_by = picked_up_by
    parcel.picked_up_phone = picked_up_phone or ""
    parcel.picked_up_id_number = picked_up_id_number or ""
    parcel.picked_up_kind = kind
    parcel.picked_up_at = timezone.now()
    parcel.updated_by = user
    parcel.save()
    who = "mandataire" if kind == Parcel.PickupKind.MANDATAIRE else "destinataire"
    note = f"{picked_up_by} ({who})" + (f" · pièce {picked_up_id_number}" if picked_up_id_number else "")
    _event(parcel, ParcelEvent.Kind.PICKED_UP, from_status=Parcel.Status.AVAILABLE_FOR_PICKUP,
           to_status=Parcel.Status.PICKED_UP, user=user, note=note)
    return parcel


@transaction.atomic
def deliver_parcel_home(parcel, *, delivery_amount, delivery_address="", payment_method="", user):
    """Livraison à domicile : clôt le colis et encaisse les frais de livraison (recettes)."""
    _assert_destination_agency(parcel, user)
    if parcel.status != Parcel.Status.AVAILABLE_FOR_PICKUP:
        raise ApplicationError(_("Seul un colis disponible peut être livré à domicile."))
    amount = Decimal(str(delivery_amount or 0))
    if amount <= 0:
        raise ApplicationError(_("Indiquez le montant de la livraison."))
    parcel.status = Parcel.Status.PICKED_UP
    parcel.picked_up_by = parcel.recipient_name
    parcel.picked_up_at = timezone.now()
    parcel.delivery_amount = amount
    parcel.delivery_address = delivery_address or ""
    parcel.delivery_payment_method = payment_method or ""
    parcel.delivered_home_at = timezone.now()
    parcel.delivered_home_by = user
    parcel.updated_by = user
    parcel.save()
    _event(parcel, ParcelEvent.Kind.PICKED_UP, from_status=Parcel.Status.AVAILABLE_FOR_PICKUP,
           to_status=Parcel.Status.PICKED_UP, user=user,
           note=f"Livré à domicile · {delivery_address}".strip(" ·"))
    from apps.treasury.services import record_parcel_delivery
    record_parcel_delivery(parcel.company, parcel=parcel, amount=amount,
                           payment_method=payment_method, user=user)
    return parcel


@transaction.atomic
def cancel_parcel(parcel, *, user):
    if parcel.status == Parcel.Status.CANCELLED:
        return parcel
    if parcel.status not in (Parcel.Status.REGISTERED, Parcel.Status.READY_FOR_TRAVEL):
        raise ApplicationError(_("Un colis déjà expédié ne peut pas être annulé."))
    prev = parcel.status
    parcel.status = Parcel.Status.CANCELLED
    parcel.updated_by = user
    parcel.save()
    _event(parcel, ParcelEvent.Kind.CANCELLED, from_status=prev,
           to_status=Parcel.Status.CANCELLED, user=user)
    from apps.treasury.services.refund import refund_on_cancel
    refund_on_cancel(parcel.company, amount_paid=parcel.amount_received, user=user,
                     description=f"Remboursement colis {parcel.reference}", kind="colis")
    return parcel


# ── Traitements par lot (chemin « sans voyage ») ──────────────────────────────

def dispatch_batch(parcels, *, user):
    return [dispatch_parcel(p, user=user) for p in parcels]


def mark_arrived_batch(parcels, *, user):
    return [mark_arrived(p, user=user) for p in parcels]


# ── Cascades depuis le voyage ─────────────────────────────────────────────────

@transaction.atomic
def dispatch_parcels_for_trip(trip, *, user):
    qs = trip.parcels.filter(status__in=(Parcel.Status.READY_FOR_TRAVEL, Parcel.Status.LOADED))
    return [dispatch_parcel(p, user=user) for p in qs]


@transaction.atomic
def arrive_parcels_for_trip(trip, *, user):
    qs = trip.parcels.filter(status=Parcel.Status.IN_TRANSIT)
    return [mark_arrived(p, user=user) for p in qs]
