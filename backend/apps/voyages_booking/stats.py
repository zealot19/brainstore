from datetime import timedelta
from django.db.models import Sum, Count
from django.db.models.functions import TruncDate
from django.utils import timezone
from apps.voyages_booking.models import Booking


def get_booking_series(company_id, days=14):
    """Réservations et recette par jour sur les `days` derniers jours (série continue)."""
    days = max(1, min(int(days), 90))
    today = timezone.localdate()
    start = today - timedelta(days=days - 1)
    rows = (Booking.objects
            .filter(company_id=company_id, is_deleted=False, created_at__date__gte=start)
            .annotate(d=TruncDate("created_at"))
            .values("d")
            .annotate(bookings=Count("id"), revenue=Sum("amount_paid"))
            .order_by("d"))
    by = {r["d"]: r for r in rows}
    out = []
    for i in range(days):
        d = start + timedelta(days=i)
        r = by.get(d)
        out.append({
            "date": d.isoformat(),
            "bookings": r["bookings"] if r else 0,
            "revenue": float(r["revenue"]) if (r and r["revenue"]) else 0.0,
        })
    return out


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
