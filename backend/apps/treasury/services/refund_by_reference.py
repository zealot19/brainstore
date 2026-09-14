"""Remboursement par référence (guichet caisse).

Le caissier saisit la référence d'un billet, d'un colis ou d'un bagage,
le système la retrouve, affiche un aperçu (montant payé, taux, montant à
rembourser) puis, sur confirmation, exécute le remboursement en réutilisant
les services d'annulation existants — lesquels annulent l'objet, libèrent les
sièges le cas échéant, et passent déjà les écritures comptables via
``refund_on_cancel`` → ``create_transaction`` (catégorie REFUND → 706).
"""
from decimal import Decimal

from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError


# Types de référence pris en charge
KIND_BILLET = "billet"
KIND_COLIS = "colis"
KIND_BAGAGE = "bagage"


def _booking_refund_base(booking) -> Decimal:
    """Montant payé du billet + bagages liés non annulés (comme cancel_booking)."""
    from apps.voyages_consignment.models import Baggage
    base = booking.amount_paid or Decimal("0")
    for bag in Baggage.objects.filter(ticket__booking=booking, is_deleted=False).exclude(status="cancelled"):
        base += bag.amount_received or Decimal("0")
    return base


def _descriptor(*, kind, obj, reference, label, amount_paid, refund_rate, refundable, status_label):
    amount_paid = Decimal(str(amount_paid or 0))
    refund_amount = (amount_paid * refund_rate / Decimal("100")).quantize(Decimal("1."))
    return {
        "kind": kind,
        "id": str(obj.id),
        "reference": reference,
        "label": label,
        "amount_paid": amount_paid,
        "refund_rate": refund_rate,
        "refund_amount": refund_amount,
        "status": status_label,
        "refundable": refundable,
    }


def lookup_refundable(company, reference: str):
    """Retrouve un billet/colis/bagage par sa référence. Renvoie un descripteur ou None."""
    from apps.voyages_booking.models import Booking
    from apps.voyages_consignment.models import Parcel, Baggage
    from apps.treasury.services.refund_config import get_refund_rate

    ref = (reference or "").strip()
    if not ref:
        return None
    rate = get_refund_rate(company)

    booking = (Booking.objects.filter(company=company, is_deleted=False, reference__iexact=ref)
               .select_related("buyer").first())
    if booking:
        return _descriptor(
            kind=KIND_BILLET, obj=booking, reference=booking.reference,
            label=getattr(booking.buyer, "name", "") or "",
            amount_paid=_booking_refund_base(booking), refund_rate=rate,
            refundable=(booking.status != Booking.Status.CANCELLED),
            status_label=booking.get_status_display(),
        )

    parcel = Parcel.objects.filter(company=company, is_deleted=False, reference__iexact=ref).first()
    if parcel:
        return _descriptor(
            kind=KIND_COLIS, obj=parcel, reference=parcel.reference,
            label=parcel.sender_name or "",
            amount_paid=parcel.amount_received, refund_rate=rate,
            refundable=parcel.status not in (Parcel.Status.CANCELLED, Parcel.Status.PICKED_UP),
            status_label=parcel.get_status_display(),
        )

    baggage = Baggage.objects.filter(company=company, is_deleted=False, tag_number__iexact=ref).first()
    if baggage:
        return _descriptor(
            kind=KIND_BAGAGE, obj=baggage, reference=baggage.tag_number,
            label=baggage.sender_name or "",
            amount_paid=baggage.amount_received, refund_rate=rate,
            refundable=baggage.status not in (Baggage.Status.CANCELLED, Baggage.Status.DELIVERED),
            status_label=baggage.get_status_display(),
        )

    return None


def refund_by_reference(company, *, kind: str, obj_id: str, user):
    """Exécute le remboursement en annulant l'objet ciblé (réutilise cancel_*)."""
    from apps.voyages_booking.models import Booking
    from apps.voyages_booking.services.booking_services import cancel_booking
    from apps.voyages_consignment.models import Parcel, Baggage
    from apps.voyages_consignment.services.parcel_services import cancel_parcel
    from apps.voyages_consignment.services.baggage_services import cancel_baggage

    if kind == KIND_BILLET:
        obj = Booking.objects.filter(company=company, is_deleted=False, id=obj_id).first()
        if not obj:
            raise ApplicationError(_("Billet introuvable."))
        if obj.status == Booking.Status.CANCELLED:
            raise ApplicationError(_("Ce billet est déjà annulé."))
        cancel_booking(obj, user=user)
    elif kind == KIND_COLIS:
        obj = Parcel.objects.filter(company=company, is_deleted=False, id=obj_id).first()
        if not obj:
            raise ApplicationError(_("Colis introuvable."))
        cancel_parcel(obj, user=user)
    elif kind == KIND_BAGAGE:
        obj = Baggage.objects.filter(company=company, is_deleted=False, id=obj_id).first()
        if not obj:
            raise ApplicationError(_("Bagage introuvable."))
        cancel_baggage(obj, user=user)
    else:
        raise ApplicationError(_("Type de référence non pris en charge."))
    return obj
