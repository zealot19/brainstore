import pytest
from django.utils import timezone
from datetime import timedelta
from apps.voyages_trips.models import TripSeat
from apps.voyages_trips.services.assignment import set_seats_status
from apps.voyages_booking.tests_integration_treasury import _setup

pytestmark = pytest.mark.django_db


def test_set_seats_status_bumps_updated_at():
    company, admin, trip = _setup()
    old = timezone.now() - timedelta(days=1)
    TripSeat.objects.filter(trip=trip).update(updated_at=old)
    ids = list(TripSeat.objects.filter(trip=trip).values_list("id", flat=True))
    n = set_seats_status(trip, ids, TripSeat.Status.BLOCKED,
                         from_status=TripSeat.Status.AVAILABLE, user=admin)
    assert n == len(ids)
    assert TripSeat.objects.filter(trip=trip, updated_at__gt=old).count() == len(ids)
