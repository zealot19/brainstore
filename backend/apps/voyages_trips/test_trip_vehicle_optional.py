import pytest
from datetime import timedelta
from django.utils import timezone


def _setup():
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, FareClass, Route, SeatingPlan, PlanSeat
    from apps.authentication.models import User
    company, _ = create_company(name="TwCo", admin_email="tw@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="tw@x.com")
    town = Town.objects.create(company=company, name="Douala")
    a = ServicePoint.objects.create(company=company, town=town, code="A", name="A")
    b = ServicePoint.objects.create(company=company, town=town, code="B", name="B")
    route = Route.objects.create(company=company, code="A-B", origin=a, destination=b)
    fc = FareClass.objects.create(company=company, code="ECO", name="Éco")
    plan = SeatingPlan.objects.create(company=company, code="BUS09", name="Bus 9", rows=1, columns=9, total_seats=9)
    for i in range(9):
        PlanSeat.objects.create(company=company, plan=plan, seat_number=f"S{i+1}", row=1, column=i + 1,
                                seat_type="standard", is_sellable=True)
    return company, admin, route, fc, plan


def _mk(company, admin, route, fc, plan=None, vehicle=None):
    from apps.voyages_trips.services.trip_services import create_trip
    now = timezone.now() + timedelta(days=1)
    return create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=now, scheduled_arrival=now + timedelta(hours=3),
                       code="TRIP-1", seating_plan=plan, vehicle=vehicle, user=admin)


@pytest.mark.django_db
def test_create_with_plan_no_vehicle_materialises_seats():
    company, admin, route, fc, plan = _setup()
    trip = _mk(company, admin, route, fc, plan=plan)
    assert trip.vehicle_id is None
    assert trip.seating_plan_id == plan.id
    assert trip.seats.filter(is_deleted=False).count() == 9


@pytest.mark.django_db
def test_submit_needs_only_a_plan_not_a_vehicle():
    from apps.voyages_trips.services.trip_services import submit_trip
    from apps.core.exceptions import ApplicationError
    company, admin, route, fc, plan = _setup()
    # No plan -> submit blocked
    trip_no_plan = _mk(company, admin, route, fc, plan=None)
    with pytest.raises(ApplicationError):
        submit_trip(trip_no_plan, user=admin)
    # Plan, no vehicle -> submit OK
    trip = _mk(company, admin, route, fc, plan=plan)
    submit_trip(trip, user=admin)
    assert trip.status == "pending" and trip.vehicle_id is None


@pytest.mark.django_db
def test_assign_vehicle_later_keeps_existing_seats():
    from apps.voyages_trips.services.assignment import assign_vehicle
    from apps.voyages_trips.models import TripSeat
    from apps.fleet.models import Vehicle, VehicleBrand, VehicleModel
    from apps.voyages_config.models import VehicleSeatingAssignment
    company, admin, route, fc, plan = _setup()
    trip = _mk(company, admin, route, fc, plan=plan)
    # Sell one seat
    seat = trip.seats.order_by("column").first()
    seat.status = TripSeat.Status.SOLD; seat.save(update_fields=["status"])
    brand = VehicleBrand.objects.create(name="Toyota")
    model = VehicleModel.objects.create(brand=brand, name="Coaster")
    veh = Vehicle.objects.create(company=company, model=model, license_plate="LT-733-LB",
                                 status=Vehicle.Status.AVAILABLE, is_active=True, created_by=admin)
    VehicleSeatingAssignment.objects.create(company=company, vehicle=veh, seating_plan=plan,
                                            is_active=True)
    assign_vehicle(trip, veh, user=admin)
    trip.refresh_from_db()
    assert trip.vehicle_id == veh.id
    assert trip.seats.filter(is_deleted=False).count() == 9          # not wiped
    assert trip.seats.filter(status=TripSeat.Status.SOLD).count() == 1  # sold seat preserved
