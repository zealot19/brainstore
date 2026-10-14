import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.core.exceptions import ApplicationError
from apps.voyages_booking.tests_integration_treasury import _setup


def _open_caisse(company, admin):
    from apps.treasury.services import create_cash_register, open_session
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)


def _reserve(company, admin, trip, hold_until):
    from apps.voyages_booking.services import create_reservation
    seat = trip.seats.order_by("column").first()
    return create_reservation(
        company, trip_type="one_way", outbound_trip=trip, return_trip=None,
        buyer_spec={"name": "Cli Ent", "phone": "690"},
        items=[{"passenger": {"name": "Cli Ent", "phone": "690"},
                "destination_point_id": None, "outbound_seat_id": str(seat.id)}],
        hold_until=hold_until, user=admin)


@pytest.mark.django_db
def test_booking_reference_uses_same_model_as_voyage_colis():
    """La référence de réservation suit le modèle voyage/colis/billet : DEP-ARR-AAAAMMJJ-NNN."""
    import re
    company, admin, trip = _setup()
    b = _reserve(company, admin, trip, timezone.now() + timedelta(hours=2))
    pat = re.compile(r"^[^-]+-[^-]+-\d{8}-\d{3}$")
    assert pat.match(b.reference), b.reference        # réservation
    assert pat.match(b.tickets.get().number)          # billet (même modèle)


@pytest.mark.django_db
def test_reservation_holds_seat_unpaid():
    from apps.voyages_trips.models import TripSeat
    company, admin, trip = _setup()
    b = _reserve(company, admin, trip, timezone.now() + timedelta(hours=2))
    assert b.status == "reserved" and b.amount_paid == Decimal("0") and b.amount_due == Decimal("15000")
    t = b.tickets.get()
    assert t.status == "reserved"
    assert t.trip_seat.status == TripSeat.Status.HELD and t.trip_seat.held_until is not None


@pytest.mark.django_db
def test_pay_reservation_confirms_and_records_income():
    from apps.treasury.models import Transaction
    from apps.voyages_booking.services import pay_reservation
    company, admin, trip = _setup()
    _open_caisse(company, admin)
    b = _reserve(company, admin, trip, timezone.now() + timedelta(hours=2))
    b = pay_reservation(b, payment_method="cash", user=admin)
    assert b.status == "confirmed" and b.amount_paid == Decimal("15000")
    t = b.tickets.get()
    assert t.status == "sold" and t.trip_seat.status == "sold"
    assert Transaction.objects.filter(company=company, transaction_type="income", amount=15000).exists()


@pytest.mark.django_db
def test_expired_reservation_is_released():
    from apps.voyages_trips.models import TripSeat
    from apps.voyages_booking.services import release_expired_reservations
    company, admin, trip = _setup()
    b = _reserve(company, admin, trip, timezone.now() + timedelta(hours=2))
    # Force expiry
    b.hold_until = timezone.now() - timedelta(minutes=1)
    b.save(update_fields=["hold_until"])
    n = release_expired_reservations(company=company)
    assert n == 1
    b.refresh_from_db()
    assert b.status == "cancelled"
    t = b.tickets.get()
    assert t.status == "cancelled" and t.trip_seat.status == TripSeat.Status.AVAILABLE


@pytest.mark.django_db
def test_reservation_api_create_and_pay():
    from rest_framework.test import APIClient
    company, admin, trip = _setup()
    _open_caisse(company, admin)
    seat = trip.seats.order_by("column").first()
    c = APIClient(); c.force_authenticate(user=admin)
    body = {
        "trip_type": "one_way", "outbound_trip_id": str(trip.id),
        "buyer": {"name": "Cli Ent", "phone": "690"},
        "items": [{"passenger": {"name": "Cli Ent", "phone": "690"},
                   "destination_point_id": None, "outbound_seat_id": str(seat.id)}],
        "hold_until": (timezone.now() + timedelta(hours=2)).isoformat(),
    }
    r = c.post("/api/v1/voyages/booking/reservations/", body, format="json")
    assert r.status_code in (200, 201), r.content
    bid = (r.json().get("data") or r.json())["id"]
    r = c.post(f"/api/v1/voyages/booking/bookings/{bid}/pay/", {"payment_method": "cash"}, format="json")
    assert r.status_code == 200, r.content
    assert (r.json().get("data") or r.json())["status"] == "confirmed"


@pytest.mark.django_db
def test_cannot_pay_expired_reservation():
    from apps.voyages_booking.services import pay_reservation
    company, admin, trip = _setup()
    _open_caisse(company, admin)
    b = _reserve(company, admin, trip, timezone.now() + timedelta(hours=2))
    b.hold_until = timezone.now() - timedelta(minutes=1)
    b.save(update_fields=["hold_until"])
    with pytest.raises(ApplicationError):
        pay_reservation(b, payment_method="cash", user=admin)
