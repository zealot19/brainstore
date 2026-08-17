from decimal import Decimal
from apps.voyages_consignment.models import Baggage
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label


@register("bagages", "Liste des bagages", ["date_from", "date_to"], "landscape")
def build(company, f):
    qs = (Baggage.objects.filter(company=company, is_deleted=False)
          .select_related("trip__route", "trip__vehicle", "ticket", "consignment_type")
          .order_by("created_at"))
    if f["date_from"]: qs = qs.filter(created_at__date__gte=f["date_from"])
    if f["date_to"]:   qs = qs.filter(created_at__date__lte=f["date_to"])
    rows, total, count = [], Decimal(0), 0
    for i, b in enumerate(qs, 1):
        total += b.amount_due
        count += 1
        trip = b.trip
        rows.append({"n": i, "ticket": getattr(b.ticket, "number", "") if b.ticket_id else "",
                     "passager": b.owner_name, "description": b.description,
                     "depart": trip.scheduled_departure.strftime("%d/%m/%Y %H:%M") if trip else "",
                     "trajet": getattr(trip.route, "code", "") if trip and trip.route_id else "",
                     "veh": getattr(getattr(trip, "vehicle", None), "license_plate", "") if trip else "",
                     "type": getattr(b.consignment_type, "label", "") if b.consignment_type_id else "",
                     "tarif": b.amount_due})
    cols = [ReportColumn("n", "No"), ReportColumn("ticket", "N° billet"), ReportColumn("passager", "Passager"),
            ReportColumn("description", "Description"), ReportColumn("depart", "Départ"),
            ReportColumn("trajet", "Trajet"), ReportColumn("veh", "Véhicule"), ReportColumn("type", "Type"),
            ReportColumn("tarif", "Tarif", "right", True)]
    return ReportResult("bagages", "LISTE DES BAGAGES", cols, [ReportGroup(rows=rows)],
                        totals={"passager": f"{count} bagage(s)", "tarif": total},
                        period_label=period_label(f))
