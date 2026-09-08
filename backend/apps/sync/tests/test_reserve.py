import pytest
from apps.sync.reserve import author_booking
from apps.voyages_booking.models import Booking
from apps.voyages_trips.models import TripSeat
from apps.voyages_booking.tests_integration_treasury import _setup

pytestmark = pytest.mark.django_db


def test_author_booking_creates_online_booking_locally():
    company, admin, trip = _setup()
    job = {
        "trip_id": str(trip.id),
        "passenger_name": "Jean Client",
        "passenger_phone": "670000000",
        "passenger_email": "",
        "payment_method": "mtn_momo",
        "payment_phone": "670000000",
    }
    result = author_booking(job)
    assert result["booking_reference"]
    assert result["ticket_number"]
    b = Booking.objects.get(reference=result["booking_reference"])
    assert b.channel == Booking.Channel.ONLINE
    # the chosen seat is sold
    assert TripSeat.objects.filter(trip=trip, seat_number=result["seat_number"],
                                   status=TripSeat.Status.SOLD).exists()
