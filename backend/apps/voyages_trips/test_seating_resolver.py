import pytest
from apps.voyages_booking.tests_integration_treasury import _setup


@pytest.mark.django_db
def test_resolver_picks_latest_active_assignment():
    """After dropping validity dates, the vehicle's plan is the latest active assignment."""
    from apps.fleet.models import Vehicle, VehicleBrand, VehicleModel
    from apps.voyages_config.models import SeatingPlan, VehicleSeatingAssignment
    from apps.voyages_trips.selectors.eligibility import active_seating_plan
    company, admin, trip = _setup()
    brand = VehicleBrand.objects.create(name="Toyota")
    model = VehicleModel.objects.create(brand=brand, name="Coaster")
    veh = Vehicle.objects.create(company=company, model=model, license_plate="LT-RS",
                                 status=Vehicle.Status.AVAILABLE, is_active=True)
    plan_a = SeatingPlan.objects.create(company=company, code="PA", name="Plan A", rows=1, columns=1)
    plan_b = SeatingPlan.objects.create(company=company, code="PB", name="Plan B", rows=1, columns=1)
    VehicleSeatingAssignment.objects.create(company=company, vehicle=veh, seating_plan=plan_a, is_active=True)
    VehicleSeatingAssignment.objects.create(company=company, vehicle=veh, seating_plan=plan_b, is_active=True)
    # Latest active assignment (plan_b) wins; date argument is ignored.
    assert active_seating_plan(veh, trip.scheduled_departure.date()) == plan_b
