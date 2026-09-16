import re
import pytest


@pytest.mark.django_db
def test_trip_number_new_nomenclature():
    """Référence voyage : DEP-ARR-AAAAMMJJ-NNN (bordereau journalier)."""
    from django.utils import timezone
    from apps.voyages_booking.tests_integration_treasury import _setup
    from apps.voyages_trips.services.trip_services import create_trip

    company, admin, base = _setup()  # route A→B (codes "A"/"B")
    day = timezone.localtime(base.scheduled_departure).strftime("%Y%m%d")

    def _mk():
        return create_trip(
            company=company, route=base.route, fare_class=base.fare_class,
            scheduled_departure=base.scheduled_departure, scheduled_arrival=base.scheduled_arrival,
            origin=base.origin, destination=base.destination,
            seating_plan=None, auto_expenses=False, crew_member_ids=[], user=admin)

    t1 = _mk()
    t2 = _mk()
    assert re.fullmatch(rf"A-B-{day}-\d{{3}}", t1.number), t1.number
    assert re.fullmatch(rf"A-B-{day}-\d{{3}}", t2.number), t2.number
    assert int(t2.number.rsplit("-", 1)[1]) == int(t1.number.rsplit("-", 1)[1]) + 1
