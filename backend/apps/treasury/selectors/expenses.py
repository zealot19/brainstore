from django.db.models import Sum
from django.utils import timezone
from apps.treasury.models import GeneralExpense
from apps.voyages_trips.models import TripExpense
from apps.treasury.selectors.selectors import _apply_agency_scope


def list_general_expenses(company_id, *, agency_scope=None, status=None, date_from=None, date_to=None):
    qs = (GeneralExpense.objects.filter(company_id=company_id, is_deleted=False)
          .select_related("expense_type", "agency", "cash_session").order_by("-expense_date", "-id"))
    qs = _apply_agency_scope(qs, agency_scope, "agency_id")
    if status:
        qs = qs.filter(status=status)
    if date_from:
        qs = qs.filter(expense_date__gte=date_from)
    if date_to:
        qs = qs.filter(expense_date__lte=date_to)
    return qs


def list_voyage_expenses(company_id, *, status=None, date_from=None, date_to=None):
    qs = (TripExpense.objects.filter(trip__company_id=company_id, is_deleted=False)
          .select_related("expense_type", "trip").order_by("-date", "-id"))
    if status:
        qs = qs.filter(status=status)
    if date_from:
        qs = qs.filter(date__gte=date_from)
    if date_to:
        qs = qs.filter(date__lte=date_to)
    return qs


def expenses_dashboard(company_id, *, agency_scope=None):
    today = timezone.localdate()
    gen = list_general_expenses(company_id, agency_scope=agency_scope)
    voy = list_voyage_expenses(company_id)

    def _sum(qs):
        return qs.aggregate(t=Sum("amount"))["t"] or 0

    gen_unpaid = _sum(gen.filter(status="unpaid"))
    voy_unpaid = _sum(voy.filter(status="planned"))
    gen_paid_month = _sum(gen.filter(status="paid", expense_date__year=today.year, expense_date__month=today.month))
    voy_paid_month = _sum(voy.filter(status="paid", date__year=today.year, date__month=today.month))
    return {
        "unpaid_total": gen_unpaid + voy_unpaid,
        "unpaid_count": gen.filter(status="unpaid").count() + voy.filter(status="planned").count(),
        "paid_month_total": gen_paid_month + voy_paid_month,
        "general_total": _sum(gen),
        "voyage_total": _sum(voy),
    }
