from datetime import timedelta
from django.utils import timezone
from apps.voyages_trips.models import Trip


def get_trip_stats(company_id):
    today = timezone.localdate()
    now = timezone.now()
    base = Trip.objects.filter(company_id=company_id, is_deleted=False)
    return {
        "today_departures": base.filter(scheduled_departure__date=today).count(),
        "upcoming_7d": base.filter(status__in=["draft", "pending"],
                                   scheduled_departure__gte=now,
                                   scheduled_departure__lte=now + timedelta(days=7)).count(),
        "in_progress": base.filter(status="departed").count(),
        "completed_today": base.filter(status="completed", actual_arrival__date=today).count(),
    }
