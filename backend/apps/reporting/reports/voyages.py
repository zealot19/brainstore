from decimal import Decimal
from django.db.models import Sum
from apps.voyages_trips.models import Trip
from apps.voyages_booking.models import Ticket
from apps.voyages_consignment.models import Parcel
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label
from apps.reporting.filter_apply import apply_filters


@register("voyages", "Liste des voyages",
          ["date_from", "date_to", "periode", "station_depart", "station_arrivee", "station_escale",
           "categorie_tarifaire", "vehicle", "partner", "crew", "statut"],
          "landscape")
def build(company, f):
    trips = (Trip.objects.filter(company=company, is_deleted=False)
             .select_related("route", "vehicle", "fare_class").order_by("scheduled_departure"))
    if f["date_from"]: trips = trips.filter(scheduled_departure__date__gte=f["date_from"])
    if f["date_to"]:   trips = trips.filter(scheduled_departure__date__lte=f["date_to"])
    trips = apply_filters(trips, f, {
        "station_depart": "route__origin_id", "station_arrivee": "route__destination_id",
        "station_escale": "route__stops__service_point_id",
        "categorie_tarifaire": "fare_class_id", "vehicle": "vehicle_id",
        "partner": "vehicle__owner_partner_id", "crew": "crew__member_id", "statut": "status"})
    trips = trips.distinct()  # les jointures escale/équipage peuvent dupliquer
    trip_ids = list(trips.values_list("id", flat=True))
    tk = {r["trip_id"]: r["s"] for r in
          Ticket.objects.filter(trip_id__in=trip_ids, is_deleted=False).values("trip_id").annotate(s=Sum("amount"))}
    pk = {r["trip_id"]: r["s"] for r in
          Parcel.objects.filter(trip_id__in=trip_ids, is_deleted=False).values("trip_id").annotate(s=Sum("amount_due"))}
    rows, tot_r, tot_p = [], Decimal(0), Decimal(0)
    for i, t in enumerate(trips, 1):
        r = tk.get(t.id) or Decimal(0)
        p = pk.get(t.id) or Decimal(0)
        tot_r += r
        tot_p += p
        rows.append({"n": i, "trip": t.number,
                     "veh": getattr(t.vehicle, "license_plate", "—") if t.vehicle_id else "—",
                     "cat": getattr(t.fare_class, "name", "") if t.fare_class_id else "",
                     "dep": t.scheduled_departure.strftime("%d/%m/%Y %H:%M"),
                     "arr": t.scheduled_arrival.strftime("%d/%m/%Y %H:%M") if t.scheduled_arrival else "",
                     "resa": r, "colis": p})
    cols = [ReportColumn("n", "No"), ReportColumn("trip", "Voyage"), ReportColumn("veh", "Véhicule"),
            ReportColumn("cat", "Catégorie"), ReportColumn("dep", "Départ"), ReportColumn("arr", "Arrivée"),
            ReportColumn("resa", "Réservations", "right", True), ReportColumn("colis", "Colis", "right", True)]
    return ReportResult("voyages", "LISTE DES VOYAGES", cols, [ReportGroup(rows=rows)],
                        totals={"resa": tot_r, "colis": tot_p}, period_label=period_label(f))
