from apps.sync import registry


def test_trips_and_seats_are_agency_owned_up():
    assert registry.spec_for("voyages_trips.trip").direction == registry.UP
    assert registry.spec_for("voyages_trips.tripseat").direction == registry.UP


def test_config_stays_down():
    assert registry.spec_for("voyages_pricing.fare").direction == registry.DOWN
    assert registry.spec_for("voyages_config.route").direction == registry.DOWN
