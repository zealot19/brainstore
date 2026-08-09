from apps.voyages_booking.selectors import list_bookings


def test_list_bookings_filters_type_channel_and_departure():
    qs = list_bookings(None, trip_type="round_trip", channel="online",
                       date_field="departure", date_from="2026-01-01", date_to="2026-12-31")
    sql = str(qs.query)
    assert "trip_type" in sql
    assert "channel" in sql
    assert "scheduled_departure" in sql


def test_list_bookings_created_basis_default():
    qs = list_bookings(None, date_from="2026-01-01")
    assert "created_at" in str(qs.query)
