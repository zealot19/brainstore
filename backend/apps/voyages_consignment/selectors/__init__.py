from django.db.models import Q
from apps.voyages_consignment.models import Parcel, Baggage
from apps.core.filters import resolve_date_field, apply_date_range
from apps.core.agency_scope import user_agency_ids, scope_by_agency_q
from apps.system_config.selectors.archiving import apply_archive_window

_CONS_DATE_FIELDS = {"created": "created_at", "departure": "trip__scheduled_departure",
                     "arrival": "trip__scheduled_arrival", "delivered": "delivered_home_at"}

# Un colis va de l'agence d'origine (A = parcel.agency) vers l'agence de destination
# (B = destination_point.agency). Seules A et B le voient ; ce Q applique cette règle
# (aucun filtrage pour un admin institution → user_agency_ids renvoie None).
_PARCEL_AGENCY_FIELDS = ("agency_id", "destination_point__agency_id")


def _parcel_visibility_q(user):
    return scope_by_agency_q(user_agency_ids(user), *_PARCEL_AGENCY_FIELDS)


def _parcel_sent_q(user):
    # Liste « Colis envoyés » (Tout Afficher) : uniquement l'agence d'origine,
    # c.-à-d. les colis que l'agence a elle-même enregistrés. Admin = tout.
    return scope_by_agency_q(user_agency_ids(user), "agency_id")


def list_parcels(company, status=None, trip_id=None, q=None, consignment_type=None,
                 origin_point=None, destination_point=None,
                 date_field=None, date_from=None, date_to=None,
                 delivered_home=None, delivery_payment_method=None, user=None,
                 include_archived=False):
    qs = (Parcel.objects.filter(is_deleted=False, company=company)
          .filter(_parcel_sent_q(user))
          .select_related("origin_point", "destination_point", "trip", "trip__route",
                          "trip__vehicle", "consignment_type")
          .order_by("-created_at"))
    if status:
        statuses = [s for s in str(status).split(",") if s]
        qs = qs.filter(status__in=statuses) if len(statuses) > 1 else qs.filter(status=statuses[0])
    if delivered_home:
        qs = qs.filter(delivered_home_at__isnull=False)
    if delivery_payment_method:
        qs = qs.filter(delivery_payment_method=delivery_payment_method)
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
    qs = apply_archive_window(qs, date_field="created_at", company_id=company.id,
                              include_archived=include_archived)
    return qs


def parcel_detail(company, pk, user=None):
    return (Parcel.objects.filter(is_deleted=False, company=company, id=pk)
            .filter(_parcel_visibility_q(user))
            .select_related("origin_point", "destination_point", "trip", "consignment_type")
            .prefetch_related("events__trip")
            .first())


def pending_for_trip(company, route_id=None, user=None):
    """Colis prêts sans voyage — candidats au chargement/expédition."""
    qs = (Parcel.objects.filter(is_deleted=False, company=company,
                                status=Parcel.Status.READY_FOR_TRAVEL, trip__isnull=True)
          .filter(_parcel_visibility_q(user))
          .select_related("origin_point", "destination_point", "consignment_type")
          .order_by("created_at"))
    return qs


def ready_parcels(company, destination_point=None, user=None):
    """Pool « à expédier » : colis encore expédiables (restant > 0)."""
    from django.db.models import Sum, F, Value, Q as _Q
    from django.db.models.functions import Coalesce
    from apps.voyages_consignment.models import ParcelShipment
    shipped = Coalesce(Sum("shipments__quantity",
                           filter=_Q(shipments__is_deleted=False,
                                     shipments__status__in=ParcelShipment.COUNTED)), Value(0))
    qs = (Parcel.objects.filter(is_deleted=False, company=company)
          .exclude(status__in=[Parcel.Status.PICKED_UP, Parcel.Status.CANCELLED,
                               Parcel.Status.AVAILABLE_FOR_PICKUP])
          .filter(_parcel_visibility_q(user))
          .annotate(_shipped=shipped).filter(quantity__gt=F("_shipped"))
          .select_related("origin_point", "destination_point", "consignment_type")
          .order_by("-created_at"))
    if destination_point:
        qs = qs.filter(destination_point_id=destination_point)
    return qs


def trip_parcels(company, trip_id, user=None):
    """Colis (non annulés) affectés à un voyage."""
    return (Parcel.objects.filter(is_deleted=False, company=company, trip_id=trip_id)
            .filter(_parcel_visibility_q(user))
            .exclude(status=Parcel.Status.CANCELLED)
            .select_related("origin_point", "destination_point", "consignment_type")
            .order_by("-created_at"))


def list_baggage(company, ticket_id=None, trip_id=None, status=None, q=None,
                 consignment_type=None, date_field=None, date_from=None, date_to=None, user=None,
                 include_archived=False):
    qs = (Baggage.objects.filter(is_deleted=False, company=company)
          .filter(scope_by_agency_q(user_agency_ids(user),
                                    "trip__origin__agency_id", "ticket__booking__agency_id"))
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
    qs = apply_archive_window(qs, date_field="created_at", company_id=company.id,
                              include_archived=include_archived)
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
