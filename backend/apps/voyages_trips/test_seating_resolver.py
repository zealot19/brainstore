import pytest
from apps.voyages_booking.tests_integration_treasury import _setup


@pytest.mark.django_db
def test_resolver_returns_vehicle_seating_plan():
    """M05 : le plan du véhicule est la FK directe `vehicle.seating_plan` (date ignorée)."""
    from apps.fleet.models import Vehicle, VehicleBrand, VehicleModel
    from apps.voyages_config.models import SeatingPlan
    from apps.voyages_trips.selectors.eligibility import active_seating_plan
    company, admin, trip = _setup()
    brand = VehicleBrand.objects.create(name="Toyota")
    model = VehicleModel.objects.create(brand=brand, name="Coaster")
    plan = SeatingPlan.objects.create(company=company, code="PA", name="Plan A", total_seats=30, blocked_seats=0)
    veh = Vehicle.objects.create(company=company, model=model, license_plate="LT-RS", code="LT-RS",
                                 status=Vehicle.Status.AVAILABLE, is_active=True, seating_plan=plan)
    assert active_seating_plan(veh, trip.scheduled_departure.date()) == plan
    veh2 = Vehicle.objects.create(company=company, model=model, license_plate="LT-RS2", code="LT-RS2",
                                  status=Vehicle.Status.AVAILABLE, is_active=True, seating_plan=None)
    assert active_seating_plan(veh2) is None
