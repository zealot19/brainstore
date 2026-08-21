from django.db.models import Sum
from django.utils import timezone
from apps.voyages_booking.models import Booking


def get_booking_stats(company_id):
    today = timezone.localdate()
    base = Booking.objects.filter(company_id=company_id, is_deleted=False)
    today_qs = base.filter(created_at__date=today)
    return {
        "bookings_today": today_qs.count(),
        "revenue_today": today_qs.aggregate(t=Sum("amount_paid"))["t"] or 0,
        "revenue_month": base.filter(created_at__year=today.year, created_at__month=today.month)
                             .aggregate(t=Sum("amount_paid"))["t"] or 0,
    }
