import pytest
from datetime import timedelta
from django.utils import timezone


def _ctx():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="LocCo", admin_email="loc@x.com", admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email="loc@x.com")


def _bookable_trip(company, admin, *, is_rental=False, sfx="R"):
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass, SeatingPlan
    from apps.voyages_trips.services.trip_services import create_trip, submit_trip
    town = Town.objects.create(company=company, name="D" + sfx)
    o = ServicePoint.objects.create(company=company, town=town, code="O" + sfx, name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D" + sfx, name="D2")
    route = Route.objects.create(company=company, code="RT" + sfx, origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="FC" + sfx, name="FC", is_rental=is_rental)
    plan = SeatingPlan.objects.create(company=company, code="P" + sfx, name="P", total_seats=5)
    now = timezone.now() + timedelta(days=1)
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                       seating_plan=plan, user=admin)
    submit_trip(trip, user=admin)
    return trip


def test_fareclass_has_is_rental():
    from apps.voyages_config.models import FareClass
    assert "is_rental" in {f.name for f in FareClass._meta.get_fields()}


@pytest.mark.django_db
def test_rental_blocks_sale():
    from apps.voyages_booking.services.booking_services import _assert_bookable
    from apps.core.exceptions import ApplicationError
    company, admin = _ctx()
    trip = _bookable_trip(company, admin, is_rental=True)
    with pytest.raises(ApplicationError):
        _assert_bookable(trip)


@pytest.mark.django_db
def test_rental_blocks_reservation():
    from apps.voyages_booking.services.reservation_services import create_reservation
    from apps.core.exceptions import ApplicationError
    company, admin = _ctx()
    trip = _bookable_trip(company, admin, is_rental=True)
    with pytest.raises(ApplicationError):
        create_reservation(company, trip_type="one_way", outbound_trip=trip, return_trip=None,
                           buyer_spec={"name": "X", "phone": "6"},
                           items=[{"passenger": {"name": "X", "phone": "6"}, "destination_point_id": None,
                                   "outbound_seat_id": None}],
                           hold_until=timezone.now() + timedelta(hours=2), user=admin)


@pytest.mark.django_db
def test_non_rental_bookable():
    from apps.voyages_booking.services.booking_services import _assert_bookable
    company, admin = _ctx()
    trip = _bookable_trip(company, admin, is_rental=False)
    _assert_bookable(trip)


@pytest.mark.django_db
def test_bookable_excludes_rental():
    from apps.voyages_booking.selectors import bookable_trips
    company, admin = _ctx()
    normal = _bookable_trip(company, admin, is_rental=False, sfx="N")
    rental = _bookable_trip(company, admin, is_rental=True, sfx="L")
    ids = {t.id for t in bookable_trips(company)}
    assert normal.id in ids and rental.id not in ids


@pytest.mark.django_db
def test_create_rental_trip_ok():
    company, admin = _ctx()
    trip = _bookable_trip(company, admin, is_rental=True, sfx="C")
    assert trip.id and trip.fare_class.is_rental


@pytest.mark.django_db
def test_fareclass_write_read_is_rental():
    from apps.voyages_config.config_api.serializers import FareClassWrite, FareClassRead
    from apps.voyages_config.models import FareClass
    company, admin = _ctx()
    w = FareClassWrite(data={"code": "LOCX", "name": "Loc", "is_rental": True})
    assert w.is_valid(), w.errors
    fc = FareClass.objects.create(company=company, **w.validated_data)
    assert FareClassRead(fc).data["is_rental"] is True


@pytest.mark.django_db
def test_seed_location_idempotent():
    from apps.voyages_config.services.defaults_seed import seed_voyages_defaults
    from apps.voyages_config.models import FareClass
    company, admin = _ctx()
    seed_voyages_defaults(company)
    loc = FareClass.objects.filter(company=company, is_rental=True)
    assert loc.count() == 1 and loc.first().code == "LOC"
