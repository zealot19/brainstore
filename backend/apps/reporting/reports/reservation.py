from decimal import Decimal
from apps.voyages_booking.models import Ticket
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label


@register("reservation", "Liste des réservations", ["date_from", "date_to"], "landscape")
def build(company, f):
    qs = (Ticket.objects.filter(booking__company=company, is_deleted=False)
          .select_related("passenger", "trip__route", "trip__vehicle", "fare_class", "trip_seat")
          .order_by("created_at"))
    if f["date_from"]: qs = qs.filter(created_at__date__gte=f["date_from"])
    if f["date_to"]:   qs = qs.filter(created_at__date__lte=f["date_to"])
    rows, total, count = [], Decimal(0), 0
    for i, t in enumerate(qs, 1):
        total += t.amount
        count += 1
        rows.append({"n": i, "ticket": t.number,
                     "customer": t.passenger.full_name if t.passenger_id else "",
                     "trip": getattr(t.trip.route, "code", "") if t.trip_id and t.trip.route_id else "",
                     "veh": getattr(getattr(t.trip, "vehicle", None), "license_plate", "") if t.trip_id else "",
                     "cat": getattr(t.fare_class, "name", "") if t.fare_class_id else "",
                     "sens": t.get_direction_display(),
                     "seat": getattr(t.trip_seat, "seat_number", "") if t.trip_seat_id else "",
                     "price": t.amount, "status": t.get_status_display()})
    cols = [ReportColumn("n", "No"), ReportColumn("ticket", "N° billet"), ReportColumn("customer", "Client"),
            ReportColumn("trip", "Trajet"), ReportColumn("veh", "Véhicule"), ReportColumn("cat", "Catégorie"),
            ReportColumn("sens", "Sens"), ReportColumn("seat", "Siège"),
            ReportColumn("price", "Prix", "right", True), ReportColumn("status", "Statut")]
    return ReportResult("reservation", "LISTE DES RÉSERVATIONS", cols, [ReportGroup(rows=rows)],
                        totals={"customer": f"{count} billet(s)", "price": total},
                        period_label=period_label(f))
