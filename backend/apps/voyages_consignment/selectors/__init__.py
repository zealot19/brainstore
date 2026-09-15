from django.db.models import Q
from apps.voyages_consignment.models import Parcel, Baggage
from apps.core.filters import resolve_date_field, apply_date_range

_CONS_DATE_FIELDS = {"created": "created_at", "departure": "trip__scheduled_departure",
                     "arrival": "trip__scheduled_arrival"}


def list_parcels(company, status=None, trip_id=None, q=None, consignment_type=None,
                 origin_point=None, destination_point=None,
                 date_field=None, date_from=None, date_to=None):
    qs = (Parcel.objects.filter(is_deleted=False, company=company)
          .select_related("origin_point", "destination_point", "trip", "trip__route",
                          "trip__vehicle", "consignment_type")
          .order_by("-created_at"))
    if status:
        statuses = [s for s in str(status).split(",") if s]
        qs = qs.filter(status__in=statuses) if len(statuses) > 1 else qs.filter(status=statuses[0])
    if trip_id:
        qs = qs.filter(trip_id=trip_id)
    if consignment_type:
        qs = qs.filter(consignment_type_id=consignment_type)
    if origin_point:
        qs = qs.filter(origin_point_id=origin_point)
    if destination_point:
        qs = qs.filter(destination_point_id=destination_point)
    if q:
        qs = qs.filter(Q(reference__icontains=q) | Q(sender_name__icontains=q) |
                       Q(sender_phone__icontains=q) | Q(recipient_name__icontains=q) |
                       Q(recipient_phone__icontains=q))
    field = resolve_date_field(_CONS_DATE_FIELDS, date_field, "created")
    qs = apply_date_range(qs, field, date_from, date_to)
    return qs


def parcel_detail(company, pk):
    return (Parcel.objects.filter(is_deleted=False, company=company, id=pk)
            .select_related("origin_point", "destination_point", "trip", "consignment_type")
            .prefetch_related("events__trip")
            .first())


def pending_for_trip(company, route_id=None):
    """Colis prêts sans voyage — candidats au chargement/expédition."""
    qs = (Parcel.objects.filter(is_deleted=False, company=company,
                                status=Parcel.Status.READY_FOR_TRAVEL, trip__isnull=True)
          .select_related("origin_point", "destination_point", "consignment_type")
          .order_by("created_at"))
    return qs


def ready_parcels(company, destination_point=None):
    """Colis prêts, sans voyage — pool « à expédier » de l'Expédition."""
    qs = (Parcel.objects.filter(is_deleted=False, company=company,
                                status=Parcel.Status.READY_FOR_TRAVEL, trip__isnull=True)
          .select_related("origin_point", "destination_point", "consignment_type")
          .order_by("-created_at"))
    if destination_point:
        qs = qs.filter(destination_point_id=destination_point)
    return qs


def trip_parcels(company, trip_id):
    """Colis (non annulés) affectés à un voyage."""
    return (Parcel.objects.filter(is_deleted=False, company=company, trip_id=trip_id)
            .exclude(status=Parcel.Status.CANCELLED)
            .select_related("origin_point", "destination_point", "consignment_type")
            .order_by("-created_at"))


def list_baggage(company, ticket_id=None, trip_id=None, status=None, q=None,
                 consignment_type=None, date_field=None, date_from=None, date_to=None):
    qs = (Baggage.objects.filter(is_deleted=False, company=company)
          .select_related("ticket__passenger", "trip", "consignment_type")
          .order_by("-created_at"))
    if ticket_id:
        qs = qs.filter(ticket_id=ticket_id)
    if trip_id:
        qs = qs.filter(trip_id=trip_id)
    if status:
        qs = qs.filter(status=status)
    if consignment_type:
        qs = qs.filter(consignment_type_id=consignment_type)
    if q:
        qs = qs.filter(Q(tag_number__icontains=q) | Q(sender_name__icontains=q) |
                       Q(sender_phone__icontains=q) | Q(ticket__number__icontains=q) |
                       Q(ticket__passenger__first_name__icontains=q) |
                       Q(ticket__passenger__last_name__icontains=q) |
                       Q(ticket__passenger__phone__icontains=q))
    field = resolve_date_field(_CONS_DATE_FIELDS, date_field, "created")
    qs = apply_date_range(qs, field, date_from, date_to)
    return qs


def trip_manifest(trip):
    parcels = (Parcel.objects.filter(is_deleted=False, trip=trip)
               .exclude(status=Parcel.Status.CANCELLED)
               .select_related("origin_point", "destination_point", "consignment_type")
               .order_by("reference"))
    baggage = (Baggage.objects.filter(is_deleted=False, trip=trip)
               .exclude(status=Baggage.Status.CANCELLED)
               .select_related("ticket__passenger", "consignment_type")
               .order_by("tag_number"))
    return {"parcels": parcels, "baggage": baggage}


__all__ = ["list_parcels", "parcel_detail", "pending_for_trip", "ready_parcels",
           "trip_parcels", "list_baggage", "trip_manifest"]
