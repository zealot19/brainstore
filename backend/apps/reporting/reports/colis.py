from decimal import Decimal
from apps.voyages_consignment.models import Parcel
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label
from apps.reporting.filter_apply import apply_filters


@register("colis", "Liste des colis",
          ["date_from", "date_to", "periode", "station_depart", "station_arrivee",
           "vehicle", "partner", "statut"],
          "landscape")
def build(company, f):
    qs = (Parcel.objects.filter(company=company, is_deleted=False)
          .select_related("trip__vehicle", "consignment_type").order_by("created_at"))
    if f["date_from"]: qs = qs.filter(created_at__date__gte=f["date_from"])
    if f["date_to"]:   qs = qs.filter(created_at__date__lte=f["date_to"])
    qs = apply_filters(qs, f, {
        "station_depart": "origin_point_id", "station_arrivee": "destination_point_id",
        "vehicle": "trip__vehicle_id", "partner": "trip__vehicle__owner_partner_id",
        "statut": "status"})
    rows, total, count = [], Decimal(0), 0
    for i, p in enumerate(qs, 1):
        total += p.amount_due
        count += 1
        rows.append({"n": i, "ref": p.reference or str(p.id), "sender": p.sender_name,
                     "recipient": p.recipient_name,
                     "type": getattr(p.consignment_type, "label", "") if p.consignment_type_id else "",
                     "trip": getattr(p.trip, "number", "") if p.trip_id else "",
                     "veh": getattr(getattr(p.trip, "vehicle", None), "license_plate", "") if p.trip_id else "",
                     "price": p.amount_due, "status": p.get_status_display()})
    cols = [ReportColumn("n", "No"), ReportColumn("ref", "Référence"), ReportColumn("sender", "Expéditeur"),
            ReportColumn("recipient", "Destinataire"), ReportColumn("type", "Type"), ReportColumn("trip", "Voyage"),
            ReportColumn("veh", "Véhicule"), ReportColumn("price", "Prix", "right", True), ReportColumn("status", "Statut")]
    return ReportResult("colis", "LISTE DES COLIS", cols, [ReportGroup(rows=rows)],
                        totals={"recipient": f"{count} colis", "price": total},
                        period_label=period_label(f))
