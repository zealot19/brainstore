from django.db.models import Q, Sum, Count
from django.utils import timezone

from apps.parcel.models import Parcel, ParcelEvent


def list_parcels(company_id, *, trip_id=None, status=None,
                 from_terminal_id=None, to_terminal_id=None,
                 payment_status=None, date_from=None, date_to=None,
                 search=None):
    qs = (Parcel.objects
          .filter(company_id=company_id, is_deleted=False)
          .select_related("from_terminal__city", "to_terminal__city", "trip")
          .order_by("-created_at"))
    if trip_id:
        qs = qs.filter(trip_id=trip_id)
    if status:
        qs = qs.filter(status=status)
    if from_terminal_id:
        qs = qs.filter(from_terminal_id=from_terminal_id)
    if to_terminal_id:
        qs = qs.filter(to_terminal_id=to_terminal_id)
    if payment_status:
        qs = qs.filter(payment_status=payment_status)
    if date_from:
        qs = qs.filter(created_at__date__gte=date_from)
    if date_to:
        qs = qs.filter(created_at__date__lte=date_to)
    if search:
        qs = qs.filter(
            Q(reference__icontains=search) |
            Q(sender_name__icontains=search) |
            Q(recipient_name__icontains=search) |
            Q(sender_phone__icontains=search) |
            Q(recipient_phone__icontains=search)
        )
    return qs


def get_parcel(parcel_id, company_id):
    try:
        return (Parcel.objects
                .select_related("from_terminal__city", "to_terminal__city", "trip__route")
                .get(id=parcel_id, company_id=company_id, is_deleted=False))
    except Parcel.DoesNotExist:
        return None


def get_parcel_by_reference(reference, company_id):
    try:
        return (Parcel.objects
                .select_related("from_terminal__city", "to_terminal__city", "trip")
                .get(reference=reference, company_id=company_id, is_deleted=False))
    except Parcel.DoesNotExist:
        return None


def list_trip_parcels(trip_id, company_id):
    return (Parcel.objects
            .filter(trip_id=trip_id, company_id=company_id, is_deleted=False)
            .select_related("from_terminal", "to_terminal")
            .order_by("reference"))


def get_parcel_stats(company_id, *, trip_id=None):
    qs = Parcel.objects.filter(company_id=company_id, is_deleted=False)
    if trip_id:
        qs = qs.filter(trip_id=trip_id)
    return {
        "total":      qs.count(),
        "registered": qs.filter(status=Parcel.Status.REGISTERED).count(),
        "shipped":    qs.filter(status=Parcel.Status.SHIPPED).count(),
        "received":   qs.filter(status=Parcel.Status.RECEIVED).count(),
        "delivered":  qs.filter(status=Parcel.Status.DELIVERED).count(),
        "returned":   qs.filter(status=Parcel.Status.RETURNED).count(),
        "lost":       qs.filter(status=Parcel.Status.LOST).count(),
        "unpaid":     qs.filter(payment_status=Parcel.PaymentStatus.UNPAID).count(),
        "revenue":    qs.filter(payment_status=Parcel.PaymentStatus.PAID)
                        .aggregate(total=Sum("shipping_amount"))["total"] or 0,
    }


def list_parcel_events(parcel_id, company_id):
    parcel = get_parcel(parcel_id, company_id)
    if not parcel:
        return None
    return parcel.events.select_related("created_by").order_by("created_at")
