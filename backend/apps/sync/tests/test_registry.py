from apps.sync import registry


def test_register_and_query_direction():
    registry.clear()
    registry.register("voyages_booking.Booking", registry.UP)
    registry.register("voyages_pricing.Fare", registry.DOWN)

    assert registry.is_syncable("voyages_booking.booking")
    assert registry.spec_for("voyages_booking.Booking").direction == registry.UP
    assert registry.labels_for_direction(registry.DOWN) == ["voyages_pricing.fare"]
    assert not registry.is_syncable("authentication.usersession")


def test_invalid_direction_rejected():
    registry.clear()
    import pytest
    with pytest.raises(ValueError):
        registry.register("x.Y", "sideways")
