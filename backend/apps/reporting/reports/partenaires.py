from decimal import Decimal
from django.db.models import Sum
from apps.voyages_booking.models import Ticket
from apps.voyages_consignment.models import Parcel, Baggage
from apps.fleet.models import Vehicle
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label

_HUNDRED = Decimal(100)


def split_revenue(amount, partner_share_percent):
    """Répartit un revenu véhicule entre l'agence et le partenaire propriétaire.

    partner_share_percent = 0 (pas de partenaire) → tout va à l'agence.
    Retourne (part_agence, part_partenaire) arrondies à l'unité (FCFA)."""
    amount = Decimal(amount or 0)
    pct = Decimal(partner_share_percent or 0)
    partner = (amount * pct / _HUNDRED).quantize(Decimal("1"))
    return amount - partner, partner


def _by_vehicle(qs, amount_field, date_from, date_to):
    if date_from:
        qs = qs.filter(created_at__date__gte=date_from)
    if date_to:
        qs = qs.filter(created_at__date__lte=date_to)
    out = {}
    for r in qs.values("trip__vehicle").annotate(t=Sum(amount_field)):
        out[r["trip__vehicle"]] = out.get(r["trip__vehicle"], Decimal(0)) + (r["t"] or Decimal(0))
    return out


@register("partenaires_revenus", "Revenus par véhicule (agence / partenaire)",
          ["date_from", "date_to"], "landscape")
def build(company, f):
    df, dt = f["date_from"], f["date_to"]

    tickets = _by_vehicle(Ticket.objects.filter(trip__company=company, is_deleted=False,
                          status__in=[Ticket.Status.SOLD, Ticket.Status.BOARDED]), "amount", df, dt)
    parcels = _by_vehicle(Parcel.objects.filter(company=company, is_deleted=False)
                          .exclude(status=Parcel.Status.CANCELLED), "amount_due", df, dt)
    baggage = _by_vehicle(Baggage.objects.filter(company=company, is_deleted=False)
                          .exclude(status=Baggage.Status.CANCELLED), "amount_due", df, dt)

    revenue = {}
    for src in (tickets, parcels, baggage):
        for vid, amt in src.items():
            revenue[vid] = revenue.get(vid, Decimal(0)) + amt

    vehicles = {v.id: v for v in Vehicle.objects.filter(company=company, is_deleted=False)
                .select_related("owner_partner")}

    rows, tot_rev, tot_agency, tot_partner = [], Decimal(0), Decimal(0), Decimal(0)
    i = 0
    for vid, amt in sorted(revenue.items(), key=lambda kv: -(kv[1] or Decimal(0))):
        if not amt:
            continue
        i += 1
        v = vehicles.get(vid)
        partner = v.owner_partner if (v and v.owner_partner_id) else None
        pct = v.partner_share_percent if partner else Decimal(0)
        ag_share, part_share = split_revenue(amt, pct)
        rows.append({"n": i, "veh": v.license_plate if v else "— Sans véhicule —",
                     "owner": partner.name if partner else "Agence",
                     "rev": amt, "ag": ag_share, "part": part_share})
        tot_rev += amt
        tot_agency += ag_share
        tot_partner += part_share

    cols = [ReportColumn("n", "No"), ReportColumn("veh", "Véhicule"),
            ReportColumn("owner", "Propriétaire"),
            ReportColumn("rev", "Revenu", "right", True),
            ReportColumn("ag", "Part agence", "right", True),
            ReportColumn("part", "Part partenaire", "right", True)]
    totals = {"owner": "TOTAL", "rev": tot_rev, "ag": tot_agency, "part": tot_partner}
    return ReportResult("partenaires_revenus",
                        "REVENUS PAR VÉHICULE — RÉPARTITION AGENCE / PARTENAIRE", cols,
                        [ReportGroup(rows=rows)], totals=totals, period_label=period_label(f))
