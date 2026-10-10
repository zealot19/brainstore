import pytest
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User


def _setup(email):
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass, SeatingPlan, ExpenseType
    from apps.fleet.models import Vehicle, VehicleModel, VehicleBrand
    from apps.voyages_trips.services.trip_services import create_trip, submit_trip
    company, _ = create_company(name="M15 Co", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    town = Town.objects.create(company=company, name="Dla")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D")
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="CL", name="Classic")
    plan = SeatingPlan.objects.create(company=company, code="P", name="P", total_seats=10)
    brand, _b = VehicleBrand.objects.get_or_create(name="BrandX")
    vmodel = VehicleModel.objects.create(brand=brand, name="ModelX")
    veh = Vehicle.objects.create(company=company, model=vmodel, license_plate="V1", code="V1",
                                 seating_plan=plan, is_active=True)
    etype = ExpenseType.objects.create(company=company, code="DIV", name="Divers")
    dep = timezone.now() + timedelta(hours=1)   # delta < lead_hours → démarrage permis
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=4),
                       seating_plan=plan, vehicle=veh, auto_expenses=False, user=admin)
    submit_trip(trip, user=admin)
    return company, admin, trip, etype


@pytest.mark.django_db
def test_depart_blocked_with_unpaid_expense():
    from apps.voyages_trips.models import TripExpense
    from apps.voyages_trips.services.trip_services import depart_trip
    from apps.core.exceptions import ApplicationError
    company, admin, trip, etype = _setup("m15a@x.com")
    TripExpense.objects.create(trip=trip, expense_type=etype, amount=Decimal("5000"),
                               status=TripExpense.Status.PLANNED)
    with pytest.raises(ApplicationError):
        depart_trip(trip, user=admin)


@pytest.mark.django_db
def test_depart_allowed_when_expenses_paid():
    from apps.voyages_trips.models import TripExpense, Trip
    from apps.voyages_trips.services.trip_services import depart_trip
    company, admin, trip, etype = _setup("m15b@x.com")
    TripExpense.objects.create(trip=trip, expense_type=etype, amount=Decimal("5000"),
                               status=TripExpense.Status.PAID)
    depart_trip(trip, user=admin)
    trip.refresh_from_db()
    assert trip.status == Trip.Status.DEPARTED


@pytest.mark.django_db
def test_depart_allowed_with_no_expenses():
    from apps.voyages_trips.models import Trip
    from apps.voyages_trips.services.trip_services import depart_trip
    company, admin, trip, etype = _setup("m15c@x.com")
    depart_trip(trip, user=admin)
    trip.refresh_from_db()
    assert trip.status == Trip.Status.DEPARTED
