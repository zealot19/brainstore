from django.db import transaction
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from apps.voyages_trips.models import TripExpense
from apps.voyages_config.models import ExpenseSchedule


def apply_expense_schedule(trip) -> int:
    """Copie les lignes du barème (route, fare_class) du voyage en TripExpense PLANNED."""
    schedule = (ExpenseSchedule.objects
                .filter(company_id=trip.company_id, route_id=trip.route_id,
                        fare_class_id=trip.fare_class_id, is_deleted=False)
                .prefetch_related("lines").first())
    if not schedule:
        return 0
    created = 0
    for line in schedule.lines.all():
        TripExpense.objects.create(trip=trip, expense_type=line.expense_type,
                                   amount=line.amount, created_by=trip.created_by)
        created += 1
    return created


@transaction.atomic
def disburse_trip_expense(trip_expense, *, user, cash_session=None):
    from apps.treasury.services import record_trip_expense
    from apps.treasury.services.expense_shared import resolve_disbursement_session
    if trip_expense.status == TripExpense.Status.PAID:
        return trip_expense
    # Caisse choisie explicitement ou session ouverte de l'utilisateur (helper partagé, DRY).
    session = resolve_disbursement_session(trip_expense.trip.company_id, user, cash_session)
    record_trip_expense(trip_expense.trip.company, trip_expense=trip_expense, cash_session=session, user=user)
    trip_expense.status = TripExpense.Status.PAID
    trip_expense.cash_session = session
    trip_expense.updated_by = user
    trip_expense.save(update_fields=["status", "cash_session", "updated_by", "updated_at"])
    return trip_expense
