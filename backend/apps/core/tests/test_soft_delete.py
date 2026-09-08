import pytest
from django.db.models.signals import post_delete
from django.utils import timezone
from datetime import timedelta

from apps.core.services.soft_delete import soft_delete_qs
from apps.voyages_trips.models import TripSeat
from apps.voyages_booking.tests_integration_treasury import _setup

pytestmark = pytest.mark.django_db


def test_soft_delete_qs_marks_and_bumps_updated_at():
    company, admin, trip = _setup()
    old = timezone.now() - timedelta(days=1)
    TripSeat.objects.filter(trip=trip).update(updated_at=old)
    n = soft_delete_qs(TripSeat.all_objects.filter(trip=trip))
    assert n > 0
    rows = TripSeat.all_objects.filter(trip=trip)
    assert all(r.is_deleted and r.updated_at > old for r in rows)


def test_hard_delete_fires_post_delete_for_cdc_capture():
    """Replace-pattern hard deletes must be capturable by the CDC layer."""
    company, admin, trip = _setup()
    seen = []

    def _rcv(sender, instance, **kw):
        seen.append(instance.pk)

    post_delete.connect(_rcv, sender=TripSeat)
    try:
        ids = set(TripSeat.objects.filter(trip=trip).values_list("id", flat=True))
        TripSeat.objects.filter(trip=trip).delete()
    finally:
        post_delete.disconnect(_rcv, sender=TripSeat)

    assert set(seen) == ids and len(ids) > 0
