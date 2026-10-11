from decimal import Decimal

from django.db.models import Sum

from apps.treasury.models import Transaction
from apps.voyages_trips.models import TripExpense


def _d(v):
    return v if v is not None else Decimal("0")


def trip_result(trip):
    """Recettes / dépenses / résultat d'un voyage (M15)."""
    income = Transaction.objects.filter(
        company_id=trip.company_id, is_deleted=False,
        status=Transaction.Status.VALIDATED,
        transaction_type=Transaction.Type.INCOME,
    )

    def _sum(category, **flt):
        return _d(income.filter(category=category, **flt).aggregate(s=Sum("amount"))["s"])

    tickets       = _sum(Transaction.Category.TICKET_SALES,    voyage_booking__outbound_trip_id=trip.id)
    colis_vente   = _sum(Transaction.Category.PARCEL_SHIPPING, voyages_parcel__trip_id=trip.id)
    colis_transit = _sum(Transaction.Category.PARCEL_DELIVERY, voyages_parcel__trip_id=trip.id)
    bagages       = _sum(Transaction.Category.BAGGAGE,         voyages_baggage__trip_id=trip.id)
    recettes_total = tickets + colis_vente + colis_transit + bagages

    depenses_total = _d(TripExpense.objects.filter(
        trip_id=trip.id, is_deleted=False, status=TripExpense.Status.PAID,
    ).aggregate(s=Sum("amount"))["s"])

    return {
        "recettes": {
            "tickets": tickets, "colis_vente": colis_vente,
            "colis_transit": colis_transit, "bagages": bagages,
            "total": recettes_total,
        },
        "depenses_total": depenses_total,
        "resultat": recettes_total - depenses_total,
    }
