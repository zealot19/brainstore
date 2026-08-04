from decimal import Decimal
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.core.models import Sequence
from apps.core.services.sequence_service import next_number
from apps.voyages_consignment.models import Baggage
from apps.voyages_config.models import VoyagesSettings

_PRE_DEPARTURE = ["draft", "pending", "departed"]


def _tag_number():
    Sequence.objects.get_or_create(
        code="BAG", defaults={"name": "Bagages", "prefix": "BAG", "padding": 5, "reset_yearly": True})
    return next_number("BAG")


def _free_allowance(company):
    s = (VoyagesSettings.objects.filter(is_deleted=False, company=company).first()
         or VoyagesSettings.objects.filter(is_deleted=False, company__isnull=True).first())
    return Decimal(str(s.baggage_free_allowance_kg)) if s else Decimal("23")


@transaction.atomic
def add_baggage(company, *, trip, ticket=None, consignment_type=None, description="", weight_kg=None,
                quantity=1, declared_value=1, sender_name="", sender_phone="", civility="",
                id_type="", id_number="", birth_date=None, email="",
                amount_due=0, amount_received=None, payment_method="", user):
    """Enregistrer un bagage sur un voyage. Le passager (billet) est facultatif :
    s'il est absent, l'expéditeur est identifié par les champs d'identité."""
    if trip is None:
        raise ApplicationError(_("Sélectionnez le voyage du bagage."))
    if ticket is not None:
        if ticket.status == "cancelled":
            raise ApplicationError(_("Impossible d'ajouter un bagage à un billet annulé."))
        if ticket.trip_id != trip.id:
            raise ApplicationError(_("Le billet choisi n'appartient pas à ce voyage."))
    elif not sender_name:
        raise ApplicationError(_("Indiquez le passager (billet) ou le nom de l'expéditeur."))
    if consignment_type and consignment_type.max_weight_kg and weight_kg and weight_kg > consignment_type.max_weight_kg:
        raise ApplicationError(_("Poids supérieur au maximum autorisé pour ce type."))
    allowance = _free_allowance(company)
    excess = Decimal("0")
    if weight_kg is not None:
        w = Decimal(str(weight_kg))
        excess = w - allowance if w > allowance else Decimal("0")
    due = Decimal(str(amount_due or 0))
    received = Decimal(str(amount_received)) if amount_received is not None else due
    if received < due:
        raise ApplicationError(
            _("Montant encaissé insuffisant : %(r)s < %(d)s.") % {"r": received, "d": due})
    return Baggage.objects.create(
        company=company, tag_number=_tag_number(), trip=trip, ticket=ticket,
        sender_name=sender_name, sender_phone=sender_phone, civility=civility,
        id_type=id_type, id_number=id_number, birth_date=birth_date, email=email,
        consignment_type=consignment_type, description=description, weight_kg=weight_kg,
        quantity=quantity, declared_value=declared_value or 1,
        free_allowance_kg=allowance, excess_kg=excess,
        amount_due=due, amount_received=received, change_due=received - due,
        payment_method=payment_method or "", paid_at=timezone.now() if due > 0 else None,
        status=Baggage.Status.CHECKED_IN, created_by=user)


_EDITABLE = {"sender_name", "sender_phone", "civility", "id_type", "id_number", "birth_date",
             "email", "description", "weight_kg", "quantity", "declared_value", "notes"}


@transaction.atomic
def edit_baggage(baggage, *, user, **fields):
    if baggage.status in (Baggage.Status.DELIVERED, Baggage.Status.CANCELLED):
        raise ApplicationError(_("Un bagage retiré ou annulé ne peut pas être modifié."))
    for k, v in fields.items():
        if k in _EDITABLE:
            setattr(baggage, k, v)
    baggage.updated_by = user
    baggage.save()
    return baggage


@transaction.atomic
def load_baggage(baggage, *, user):
    if baggage.status != Baggage.Status.CHECKED_IN:
        raise ApplicationError(_("Seul un bagage enregistré peut être chargé."))
    baggage.status = Baggage.Status.LOADED
    baggage.loaded_at = timezone.now()
    baggage.updated_by = user
    baggage.save(update_fields=["status", "loaded_at", "updated_by", "updated_at"])
    return baggage


@transaction.atomic
def deliver_baggage(baggage, *, comment="", delivered_at=None, user):
    """Retrait du bagage par le passager. Possible directement depuis Enregistré
    (le bagage voyage dans la soute, sans étape de chargement obligatoire)."""
    if baggage.status not in (Baggage.Status.CHECKED_IN, Baggage.Status.LOADED):
        raise ApplicationError(_("Seul un bagage enregistré ou chargé peut être retiré."))
    baggage.status = Baggage.Status.DELIVERED
    baggage.delivered_at = delivered_at or timezone.now()
    baggage.delivered_comment = comment or ""
    baggage.updated_by = user
    baggage.save(update_fields=["status", "delivered_at", "delivered_comment", "updated_by", "updated_at"])
    return baggage


@transaction.atomic
def cancel_baggage(baggage, *, user):
    if baggage.status == Baggage.Status.DELIVERED:
        raise ApplicationError(_("Un bagage retiré ne peut pas être annulé."))
    if baggage.status == Baggage.Status.CANCELLED:
        return baggage
    baggage.status = Baggage.Status.CANCELLED
    baggage.updated_by = user
    baggage.save(update_fields=["status", "updated_by", "updated_at"])
    return baggage
