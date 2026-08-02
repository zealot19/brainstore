from apps.voyages_booking.models import Passenger
from django.db.models import Q


def find_passengers(company, q=None):
    qs = Passenger.objects.filter(is_deleted=False, company=company).order_by("last_name", "first_name")
    if q:
        qs = qs.filter(Q(phone__icontains=q) | Q(id_number__icontains=q) |
                       Q(first_name__icontains=q) | Q(last_name__icontains=q))
    return qs


__all__ = ["find_passengers"]
