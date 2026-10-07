from decimal import Decimal
from django.db.models import Sum
from apps.voyages_booking.models import Ticket
from apps.voyages_consignment.models import Parcel, Baggage
from apps.voyages_trips.models import TripExpense
from apps.fleet.models import Vehicle
from apps.reporting.core import ReportColumn, ReportGroup, ReportResult
from apps.reporting.registry import register
from apps.reporting.filters import period_label

_HUNDRED = Decimal(100)


def partner_share(vehicle, rev_ticket, rev_parcel, rev_baggage, net):
    """Part partenaire d'un bus, répartie sur le NET (dépenses partagées).

    On calcule d'abord la part brute Σ(revenu_type × taux_type / 100) — taux par
    type de produit (billet / colis / bagage) configurés sur le véhicule — puis le
    taux effectif = part_brute / brut, appliqué au net (Brut − Dépenses). Le
    partenaire porte ainsi sa quote-part des dépenses, proportionnelle au revenu
    qu'il a généré ; la part peut être négative en cas de perte.

    0 si pas de partenaire, ou si le brut est nul (aucune base de répartition :
    l'agence porte alors l'intégralité des dépenses). Arrondie à l'unité (FCFA)."""
    if not vehicle or not vehicle.owner_partner_id:
        return Decimal(0)
    brut = Decimal(rev_ticket or 0) + Decimal(rev_parcel or 0) + Decimal(rev_baggage or 0)
    if brut == 0:
        return Decimal(0)
    partner_gross = (Decimal(rev_ticket or 0) * Decimal(vehicle.partner_pct_ticket or 0)
                     + Decimal(rev_parcel or 0) * Decimal(vehicle.partner_pct_parcel or 0)
                     + Decimal(rev_baggage or 0) * Decimal(vehicle.partner_pct_baggage or 0)) / _HUNDRED
    effective_rate = partner_gross / brut
    return (effective_rate * Decimal(net)).quantize(Decimal("1"))


def _by_vehicle(qs, amount_field, df, dt):
    """Somme d'un montant, agrégée par véhicule du voyage, sur la période."""
    if df:
        qs = qs.filter(created_at__date__gte=df)
    if dt:
        qs = qs.filter(created_at__date__lte=dt)
    out = {}
    for r in qs.values("trip__vehicle").annotate(t=Sum(amount_field)):
        out[r["trip__vehicle"]] = out.get(r["trip__vehicle"], Decimal(0)) + (r["t"] or Decimal(0))
    return out


@register("resultat_partenaires", "Résultat par bus (agence / partenaire)",
          ["date_from", "date_to", "agency", "vehicle", "partner"], "landscape")
def build(company, f):
    df, dt = f.get("date_from"), f.get("date_to")

    rev_t = _by_vehicle(Ticket.objects.filter(trip__company=company, is_deleted=False,
                        status__in=[Ticket.Status.SOLD, Ticket.Status.BOARDED]), "amount", df, dt)
    rev_p = _by_vehicle(Parcel.objects.filter(company=company, is_deleted=False)
                        .exclude(status=Parcel.Status.CANCELLED), "amount_due", df, dt)
    rev_b = _by_vehicle(Baggage.objects.filter(company=company, is_deleted=False)
                        .exclude(status=Baggage.Status.CANCELLED), "amount_due", df, dt)
    exp = _by_vehicle(TripExpense.objects.filter(trip__company=company, is_deleted=False), "amount", df, dt)

    # Tous les véhicules ayant eu de l'activité (+ le bucket « sans bus » = clé None).
    vids = set(rev_t) | set(rev_p) | set(rev_b) | set(exp)
    vmap = {v.id: v for v in Vehicle.objects
            .filter(company=company, is_deleted=False, id__in=[x for x in vids if x])
            .select_related("owner_partner")}

    fv, fa, fp = f.get("vehicle"), f.get("agency"), f.get("partner")
    computed = []
    for vid in vids:
        rt, rp, rb = rev_t.get(vid, Decimal(0)), rev_p.get(vid, Decimal(0)), rev_b.get(vid, Decimal(0))
        brut = rt + rp + rb
        dep = exp.get(vid, Decimal(0))
        if brut == 0 and dep == 0:
            continue
        v = vmap.get(vid)
        # Filtres (agence/partenaire/bus au niveau véhicule ; le bucket sans bus est exclu si filtré).
        if fv and str(vid) != str(fv):
            continue
        if fa and (not v or str(v.agency_id) != str(fa)):
            continue
        if fp and (not v or str(v.owner_partner_id) != str(fp)):
            continue
        net = brut - dep
        part = partner_share(v, rt, rp, rb, net)
        computed.append({
            "veh": v.license_plate if v else "— Sans bus —",
            "owner": v.owner_partner.name if (v and v.owner_partner_id) else "Agence",
            "brut": brut, "dep": dep, "net": net, "part": part, "ag": net - part,
        })

    computed.sort(key=lambda r: r["net"], reverse=True)
    tot = {k: Decimal(0) for k in ("brut", "dep", "net", "part", "ag")}
    rows = []
    for i, r in enumerate(computed, start=1):
        rows.append({"n": i, **r})
        for k in tot:
            tot[k] += r[k]

    cols = [ReportColumn("n", "No"), ReportColumn("veh", "Bus"), ReportColumn("owner", "Propriétaire"),
            ReportColumn("brut", "Brut", "right", True), ReportColumn("dep", "Dépenses", "right", True),
            ReportColumn("net", "Net", "right", True),
            ReportColumn("part", "Part partenaire", "right", True),
            ReportColumn("ag", "Part agence", "right", True)]
    totals = {"owner": "TOTAL", **tot}
    return ReportResult("resultat_partenaires",
                        "RÉSULTAT PAR BUS — AGENCE / PARTENAIRE", cols,
                        [ReportGroup(rows=rows)], totals=totals, period_label=period_label(f))
