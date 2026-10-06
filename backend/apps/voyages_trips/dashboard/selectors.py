"""Agrégations du tableau de bord Transport (lecture seule, cloisonné par agence)."""
from django.db.models import Count, Sum
from django.db.models.functions import ExtractMonth
from apps.core.agency_scope import user_agency_ids
from apps.voyages_trips.models import Trip
from apps.voyages_booking.models import Ticket
from apps.voyages_consignment.models import Baggage, Parcel


def _by_trip(qs, amount_field):
    """{trip_id: (count, revenue)} pour un queryset d'items (hors annulés)."""
    rows = (qs.exclude(status="cancelled")
              .values("trip_id")
              .annotate(c=Count("id"), r=Sum(amount_field)))
    return {row["trip_id"]: (row["c"], float(row["r"] or 0)) for row in rows}


def trip_cards(company, user, date_from, date_to):
    ids = user_agency_ids(user)
    trips = (Trip.objects.filter(is_deleted=False, company=company,
                                 scheduled_departure__date__range=(date_from, date_to))
             .select_related("vehicle", "route", "origin")
             .order_by("scheduled_departure"))
    if ids is not None:
        trips = trips.filter(origin__agency_id__in=ids)
    trips = list(trips)
    trip_ids = [t.id for t in trips]

    tk = _by_trip(Ticket.objects.filter(is_deleted=False, trip_id__in=trip_ids), "amount")
    bg = _by_trip(Baggage.objects.filter(is_deleted=False, trip_id__in=trip_ids), "amount_received")
    pc = _by_trip(Parcel.objects.filter(is_deleted=False, trip_id__in=trip_ids), "amount_received")

    cards = []
    for t in trips:
        tc, tr = tk.get(t.id, (0, 0.0))
        bc, br = bg.get(t.id, (0, 0.0))
        cc, cr = pc.get(t.id, (0, 0.0))
        header = (t.vehicle.license_plate if t.vehicle_id else "") or t.code or t.number or "—"
        cards.append({
            "id": str(t.id),
            "header": header,
            "route_label": t.route.code if t.route_id else "",
            "status": t.status,
            "status_display": t.get_status_display(),
            "scheduled_departure": t.scheduled_departure.isoformat() if t.scheduled_departure else None,
            "tickets_count": tc, "tickets_revenue": tr,
            "baggage_count": bc, "baggage_revenue": br,
            "parcels_count": cc, "parcels_revenue": cr,
            "total_revenue": tr + br + cr,
        })
    return cards


def _months(qs):
    """Liste de 12 compteurs (jan..déc) à partir d'un queryset filtré sur l'année."""
    out = [0] * 12
    rows = qs.order_by().annotate(m=ExtractMonth("created_at")).values("m").annotate(c=Count("id"))
    for row in rows:
        if row["m"]:
            out[row["m"] - 1] = row["c"]
    return out


def monthly_series(company, user, year, metric):
    ids = user_agency_ids(user)
    if metric == "tickets":
        qs = Ticket.objects.filter(is_deleted=False, booking__company=company,
                                   created_at__year=year).exclude(status="cancelled")
        if ids is not None:
            qs = qs.filter(trip__origin__agency_id__in=ids)
        return _months(qs)
    if metric == "baggage":
        qs = Baggage.objects.filter(is_deleted=False, company=company,
                                    created_at__year=year).exclude(status="cancelled")
        if ids is not None:
            qs = qs.filter(trip__origin__agency_id__in=ids)
        return _months(qs)
    if metric == "parcels":
        qs = Parcel.objects.filter(is_deleted=False, company=company,
                                   created_at__year=year).exclude(status="cancelled")
        if ids is not None:
            qs = qs.filter(agency_id__in=ids)   # colis : agence d'origine (peut ne pas avoir de voyage)
        return _months(qs)
    if metric == "clients":
        from django.db.models import Q
        from apps.voyages_booking.models import Passenger
        tick = Q(tickets__is_deleted=False) & ~Q(tickets__status="cancelled")
        parc = Q(parcels_sent__is_deleted=False) & ~Q(parcels_sent__status="cancelled")
        bag  = Q(baggage_sent__is_deleted=False) & ~Q(baggage_sent__status="cancelled")
        if ids is not None:
            tick &= Q(tickets__trip__origin__agency_id__in=ids)
            parc &= Q(parcels_sent__agency_id__in=ids)
            bag  &= Q(baggage_sent__trip__origin__agency_id__in=ids)
        client_ids = list(
            Passenger.objects.filter(is_deleted=False, company=company, created_at__year=year)
            .filter(tick | parc | bag).values_list("id", flat=True).distinct())
        out = [0] * 12
        rows = (Passenger.objects.filter(id__in=client_ids)
                .annotate(m=ExtractMonth("created_at")).values("m")
                .annotate(c=Count("id", distinct=True)))
        for row in rows:
            if row["m"]:
                out[row["m"] - 1] = row["c"]
        return out
    return [0] * 12
