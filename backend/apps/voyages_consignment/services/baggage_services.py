from decimal import Decimal
from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.core.models import Sequence
from apps.core.services.sequence_service import next_number
from apps.voyages_consignment.models import Baggage
from apps.voyages_config.models import VoyagesSettings


def _tag_number():
    Sequence.objects.get_or_create(
        code="BAG", defaults={"name": "Bagages", "prefix": "BAG", "padding": 5, "reset_yearly": True})
    return next_number("BAG")


def _free_allowance(company):
    s = (VoyagesSettings.objects.filter(is_deleted=False, company=company).first()
         or VoyagesSettings.objects.filter(is_deleted=False, company__isnull=True).first())
    return Decimal(str(s.baggage_free_allowance_kg)) if s else Decimal("23")


@transaction.atomic
def add_baggage(company, *, ticket, consignment_type=None, description="", weight_kg=None,
                amount_due=0, amount_received=None, payment_method="", user):
    if ticket.status == "cancelled":
        raise ApplicationError(_("Impossible d'ajouter un bagage à un billet annulé."))
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
        company=company, tag_number=_tag_number(), ticket=ticket, consignment_type=consignment_type,
        description=description, weight_kg=weight_kg, free_allowance_kg=allowance, excess_kg=excess,
        amount_due=due, amount_received=received, change_due=received - due,
        payment_method=payment_method or "", paid_at=timezone.now() if due > 0 else None,
        status=Baggage.Status.CHECKED_IN, created_by=user)


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
def deliver_baggage(baggage, *, user):
    if baggage.status != Baggage.Status.LOADED:
        raise ApplicationError(_("Seul un bagage chargé peut être livré."))
    baggage.status = Baggage.Status.DELIVERED
    baggage.delivered_at = timezone.now()
    baggage.updated_by = user
    baggage.save(update_fields=["status", "delivered_at", "updated_by", "updated_at"])
    return baggage


@transaction.atomic
def cancel_baggage(baggage, *, user):
    if baggage.status == Baggage.Status.DELIVERED:
        raise ApplicationError(_("Un bagage livré ne peut pas être annulé."))
    if baggage.status == Baggage.Status.CANCELLED:
        return baggage
    baggage.status = Baggage.Status.CANCELLED
    baggage.updated_by = user
    baggage.save(update_fields=["status", "updated_by", "updated_at"])
    return baggage
