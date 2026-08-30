import pytest
from apps.core.exceptions import ApplicationError
from apps.voyages_booking.tests_integration_treasury import _setup, _book


@pytest.mark.django_db
def test_draft_trip_not_bookable():
    from apps.treasury.services import create_cash_register, open_session
    company, admin, trip = _setup()
    trip.status = "draft"
    trip.save(update_fields=["status"])
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    with pytest.raises(ApplicationError):
        _book(company, admin, trip)


@pytest.mark.django_db
def test_pending_trip_is_bookable():
    from apps.treasury.services import create_cash_register, open_session
    company, admin, trip = _setup()  # status "pending"
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    open_session(company=company, cash_register=reg, created_by=admin)
    booking = _book(company, admin, trip)
    assert booking is not None


@pytest.mark.django_db
def test_draft_trip_excluded_from_bookable_trips():
    from apps.voyages_booking.selectors import bookable_trips
    company, admin, trip = _setup()
    assert trip.id in set(bookable_trips(company).values_list("id", flat=True))
    trip.status = "draft"
    trip.save(update_fields=["status"])
    assert trip.id not in set(bookable_trips(company).values_list("id", flat=True))
