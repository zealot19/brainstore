from django.db.models import Sum
from django.utils import timezone
from apps.treasury.models import Transaction


def _apply_income_agency_scope(qs, agency_scope):
    """Income scopes through the cash session's register agency.

    agency_scope = (scoped: bool, agency_id) from register_agency_scope.
    When scoped, keep only cash income of that agency (bank income has no
    agency and is excluded for scoped users).
    """
    if not agency_scope:
        return qs
    scoped, agency_id = agency_scope
    if not scoped:
        return qs
    return qs.filter(cash_session__cash_register__agency_id=agency_id)


def list_income(company_id, *, category=None, agency_scope=None,
                date_from=None, date_to=None, payment_mode=None):
    qs = (Transaction.objects
          .filter(company_id=company_id, is_deleted=False,
                  transaction_type=Transaction.Type.INCOME)
          .select_related("cash_session__cash_register__agency", "bank_account",
                          "voyage_booking__outbound_trip", "voyages_parcel",
                          "voyages_baggage", "trip")
          .order_by("-transaction_date", "-created_at"))
    qs = _apply_income_agency_scope(qs, agency_scope)
    if category:
        qs = qs.filter(category=category)
    if date_from:
        qs = qs.filter(transaction_date__gte=date_from)
    if date_to:
        qs = qs.filter(transaction_date__lte=date_to)
    if payment_mode:
        qs = qs.filter(payment_mode=payment_mode)
    return qs


def income_dashboard(company_id, *, agency_scope=None):
    today = timezone.localdate()
    base = list_income(company_id, agency_scope=agency_scope)

    def _sum(qs):
        return qs.aggregate(t=Sum("amount"))["t"] or 0

    def _cat(code):
        return _sum(base.filter(category=code))

    return {
        "today_total": _sum(base.filter(transaction_date=today)),
        "month_total": _sum(base.filter(transaction_date__year=today.year,
                                        transaction_date__month=today.month)),
        "voyage_total":  _cat(Transaction.Category.TICKET_SALES),
        "parcel_total":  _cat(Transaction.Category.PARCEL_SHIPPING),
        "baggage_total": _cat(Transaction.Category.BAGGAGE),
        "other_total":   _cat(Transaction.Category.OTHER_INCOME),
        "total": _sum(base),
        "count": base.count(),
    }
