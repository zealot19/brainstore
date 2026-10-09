import pytest
from datetime import timedelta
from django.utils import timezone


def _trip_with_seats(company, admin, *, total=10, blocked=2):
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass, SeatingPlan
    from apps.voyages_trips.services.trip_services import create_trip
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    plan = SeatingPlan.objects.create(company=company, code="P", name="P", total_seats=total, blocked_seats=0)
    now = timezone.now() + timedelta(days=1)
    return create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                       seating_plan=plan, blocked_seats_count=blocked, user=admin)


@pytest.fixture
def ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="AvailCo", admin_email="av@x.com", admin_first_name="A", admin_last_name="B")
    return company, User.objects.get(email="av@x.com")


@pytest.mark.django_db
def test_trip_availability_counts(ctx):
    from apps.voyages_booking.selectors import trip_availability
    from apps.voyages_trips.models import TripSeat
    company, admin = ctx
    trip = _trip_with_seats(company, admin, total=10, blocked=2)   # 2 BLOCKED, 8 AVAILABLE
    seats = list(TripSeat.objects.filter(trip=trip, status=TripSeat.Status.AVAILABLE).order_by("seat_number"))
    seats[0].status = TripSeat.Status.SOLD; seats[0].save(update_fields=["status"])
    seats[1].status = TripSeat.Status.HELD; seats[1].save(update_fields=["status"])
    a = trip_availability(trip)
    assert a["total"] == 10 and a["blocked"] == 2 and a["sold"] == 1 and a["reserved"] == 1
    assert a["available"] == 6
    # quota défaut (M12) = vendables à la création = 8 ; réservations possibles = 8 − 1 held = 7
    assert a["max_reservations"] == 8 and a["reservations_possible"] == 7


@pytest.mark.django_db
def test_reservations_possible_null_without_quota(ctx):
    from apps.voyages_booking.selectors import trip_availability
    company, admin = ctx
    trip = _trip_with_seats(company, admin)
    trip.max_reservations = None; trip.save(update_fields=["max_reservations"])
    a = trip_availability(trip)
    assert a["reservations_possible"] is None


@pytest.mark.django_db
def test_availability_no_seats(ctx):
    from apps.voyages_booking.selectors import trip_availability
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.services.trip_services import create_trip
    company, admin = ctx
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    now = timezone.now() + timedelta(days=1)
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                       seating_plan=None, user=admin)
    a = trip_availability(trip)
    assert a["total"] == 0 and a["available"] == 0


@pytest.mark.django_db
def test_availability_endpoint_200_and_foreign_404(ctx):
    from rest_framework.test import APIClient
    from apps.authentication.tokens import CustomRefreshToken
    from apps.system_config.services import create_company
    company, admin = ctx
    trip = _trip_with_seats(company, admin)
    tok = str(CustomRefreshToken.for_user(admin).access_token)
    c = APIClient(); c.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
    r = c.get(f"/api/v1/voyages/booking/trips/{trip.id}/availability/")
    assert r.status_code == 200
    body = r.json()["data"]
    assert {"total", "sold", "reserved", "blocked", "available", "reservations_possible"} <= set(body)
    # voyage d'une autre société → 404
    other, _ = create_company(name="OtherAv", admin_email="oa@x.com", admin_first_name="A", admin_last_name="B")
    from apps.authentication.models import User
    otok = str(CustomRefreshToken.for_user(User.objects.get(email="oa@x.com")).access_token)
    c.credentials(HTTP_AUTHORIZATION=f"Bearer {otok}")
    assert c.get(f"/api/v1/voyages/booking/trips/{trip.id}/availability/").status_code == 404
