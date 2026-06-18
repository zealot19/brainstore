from django.db import transaction
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from apps.core.exceptions import ApplicationError
from apps.parcel.models import Parcel, ParcelEvent


# ── Reference generator ────────────────────────────────────────────────────────

def _next_parcel_reference(company) -> str:
    date_str = timezone.now().strftime("%Y%m%d")
    prefix = f"PCL-{date_str}-"
    count = Parcel.objects.filter(company=company, reference__startswith=prefix).count()
    return f"{prefix}{count + 1:04d}"


# ── Internal helper ────────────────────────────────────────────────────────────

def _log_event(parcel, *, status: str, location: str = "", note: str = "", created_by):
    ParcelEvent.objects.create(
        parcel=parcel, status=status,
        location=location, note=note,
        created_by=created_by,
    )


# ── Allowed transitions ────────────────────────────────────────────────────────

_TRANSITIONS = {
    Parcel.Status.REGISTERED: [Parcel.Status.SHIPPED, Parcel.Status.LOST],
    Parcel.Status.SHIPPED:    [Parcel.Status.RECEIVED, Parcel.Status.RETURNED, Parcel.Status.LOST],
    Parcel.Status.RECEIVED:   [Parcel.Status.DELIVERED, Parcel.Status.RETURNED, Parcel.Status.LOST],
    Parcel.Status.DELIVERED:  [],
    Parcel.Status.RETURNED:   [],
    Parcel.Status.LOST:       [],
}


def _transition(parcel, new_status: str, *, location="", note="", updated_by):
    allowed = _TRANSITIONS.get(parcel.status, [])
    if new_status not in allowed:
        raise ApplicationError(
            _("Cannot move parcel from {current} to {next}.").format(
                current=Parcel.Status(parcel.status).label,
                next=Parcel.Status(new_status).label,
            )
        )
    parcel.status = new_status
    parcel.updated_by = updated_by
    parcel.save(update_fields=["status", "updated_by", "updated_at"])
    _log_event(parcel, status=new_status, location=location, note=note, created_by=updated_by)
    return parcel


# ── CRUD ───────────────────────────────────────────────────────────────────────

@transaction.atomic
def create_parcel(
    *, company, from_terminal, to_terminal,
    sender_name, sender_phone,
    recipient_name, recipient_phone, recipient_address="",
    description="", weight_kg=None, quantity=1, declared_value=None,
    shipping_amount=0,
    payment_status=Parcel.PaymentStatus.UNPAID, payment_mode="",
    trip=None, notes="", created_by,
):
    if from_terminal.id == to_terminal.id:
        raise ApplicationError(_("Origin and destination terminals must be different."))

    reference = _next_parcel_reference(company)
    parcel = Parcel.objects.create(
        company=company, reference=reference,
        from_terminal=from_terminal, to_terminal=to_terminal,
        trip=trip,
        sender_name=sender_name, sender_phone=sender_phone,
        recipient_name=recipient_name, recipient_phone=recipient_phone,
        recipient_address=recipient_address,
        description=description, weight_kg=weight_kg,
        quantity=quantity, declared_value=declared_value,
        shipping_amount=shipping_amount,
        payment_status=payment_status, payment_mode=payment_mode,
        status=Parcel.Status.REGISTERED,
        notes=notes, created_by=created_by,
    )
    _log_event(parcel, status=Parcel.Status.REGISTERED,
               location=from_terminal.name, created_by=created_by)
    return parcel


@transaction.atomic
def update_parcel(parcel, *, updated_by, **fields):
    if parcel.status != Parcel.Status.REGISTERED:
        raise ApplicationError(_("Only registered parcels can be edited."))
    allowed = {
        "sender_name", "sender_phone",
        "recipient_name", "recipient_phone", "recipient_address",
        "description", "weight_kg", "quantity", "declared_value",
        "shipping_amount", "payment_status", "payment_mode",
        "trip_id", "notes",
    }
    for key, val in fields.items():
        if key in allowed:
            setattr(parcel, key, val)
    parcel.updated_by = updated_by
    parcel.save()
    return parcel


def delete_parcel(parcel, *, deleted_by):
    if parcel.status not in (Parcel.Status.REGISTERED,):
        raise ApplicationError(_("Only registered parcels can be deleted."))
    parcel.soft_delete(user=deleted_by)


# ── Trip assignment ────────────────────────────────────────────────────────────

@transaction.atomic
def assign_trip(parcel, *, trip, updated_by):
    if parcel.status not in (Parcel.Status.REGISTERED,):
        raise ApplicationError(_("Only registered parcels can be assigned to a trip."))
    if trip.company_id != parcel.company_id:
        raise ApplicationError(_("The trip does not belong to the same company."))
    parcel.trip = trip
    parcel.updated_by = updated_by
    parcel.save(update_fields=["trip", "updated_by", "updated_at"])
    return parcel


# ── Status transitions ─────────────────────────────────────────────────────────

@transaction.atomic
def ship_parcel(parcel, *, location="", note="", updated_by):
    """Load parcel on the trip — REGISTERED → SHIPPED."""
    return _transition(parcel, Parcel.Status.SHIPPED,
                       location=location, note=note, updated_by=updated_by)


@transaction.atomic
def receive_parcel(parcel, *, location="", note="", updated_by):
    """Parcel arrived at destination terminal — SHIPPED → RECEIVED."""
    return _transition(parcel, Parcel.Status.RECEIVED,
                       location=location, note=note, updated_by=updated_by)


@transaction.atomic
def deliver_parcel(parcel, *, location="", note="", updated_by):
    """Parcel handed to recipient — RECEIVED → DELIVERED."""
    result = _transition(parcel, Parcel.Status.DELIVERED,
                         location=location, note=note, updated_by=updated_by)
    # Auto-collect COD payment on delivery
    if parcel.payment_status == Parcel.PaymentStatus.COD:
        record_payment(result, payment_mode=Parcel.PaymentMode.CASH, updated_by=updated_by)
    return result


@transaction.atomic
def return_parcel(parcel, *, location="", note="", updated_by):
    """Send parcel back to origin — SHIPPED/RECEIVED → RETURNED."""
    return _transition(parcel, Parcel.Status.RETURNED,
                       location=location, note=note, updated_by=updated_by)


@transaction.atomic
def mark_lost(parcel, *, note="", updated_by):
    """Mark parcel as lost."""
    return _transition(parcel, Parcel.Status.LOST,
                       note=note, updated_by=updated_by)


# ── Payment ────────────────────────────────────────────────────────────────────

@transaction.atomic
def record_payment(parcel, *, payment_mode: str, updated_by):
    if parcel.payment_status == Parcel.PaymentStatus.PAID:
        raise ApplicationError(_("This parcel has already been paid."))
    parcel.payment_status = Parcel.PaymentStatus.PAID
    parcel.payment_mode = payment_mode
    parcel.paid_at = timezone.now()
    parcel.paid_by = updated_by
    parcel.updated_by = updated_by
    parcel.save(update_fields=[
        "payment_status", "payment_mode", "paid_at", "paid_by",
        "updated_by", "updated_at",
    ])
    _log_event(parcel, status=parcel.status,
               note=f"Payment received — {Parcel.PaymentMode(payment_mode).label}",
               created_by=updated_by)
    return parcel
