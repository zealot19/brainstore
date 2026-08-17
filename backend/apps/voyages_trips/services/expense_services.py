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
