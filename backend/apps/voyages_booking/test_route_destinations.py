import pytest
from apps.voyages_booking.tests_integration_treasury import _setup


@pytest.mark.django_db
def test_route_destinations_match_trip_destination_ids():
    from apps.voyages_booking.selectors import route_destinations, trip_destinations
    company, admin, trip = _setup()

    rd = route_destinations(trip.route)
    td = trip_destinations(trip)

    assert rd, "route should expose at least one destination"
    # Same drop points, same ids and order — so the id chosen early still prices later.
    assert [d["id"] for d in rd] == [d["id"] for d in td]
    assert all({"id", "name", "code", "is_station"} <= set(d.keys()) for d in rd)
    # Origin is not a selectable destination.
    assert trip.route.origin_id not in [d["id"] for d in rd]
