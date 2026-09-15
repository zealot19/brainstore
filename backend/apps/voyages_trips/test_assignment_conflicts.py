import pytest
from datetime import timedelta
from django.utils import timezone
from rest_framework.test import APIClient
from apps.voyages_booking.tests_integration_treasury import _setup
from apps.voyages_trips.test_crew_dedup import _crew_member


def _second_trip(company, base_trip, *, offset_hours=0):
    """A second trip overlapping base_trip's window by default."""
    from apps.voyages_trips.models import Trip
    from apps.voyages_trips.services.assignment import materialise_seats
    dep = base_trip.scheduled_departure + timedelta(hours=offset_hours)
    t = Trip.objects.create(
        company=company, route=base_trip.route, fare_class=base_trip.fare_class,
        origin=base_trip.origin, destination=base_trip.destination,
        seating_plan=base_trip.seating_plan,
        scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=3),
        status="pending")
    materialise_seats(t)
    return t


# ── Part A : véhicule bloqué par une mission flotte ──────────────────────────

@pytest.mark.django_db
def test_vehicle_blocked_by_overlapping_fleet_mission():
    from apps.fleet.models import Vehicle, VehicleBrand, VehicleModel, Assignment
    from apps.voyages_config.models import VehicleSeatingAssignment
    from apps.voyages_trips.selectors.eligibility import blocking_reasons
    company, admin, trip = _setup()
    brand = VehicleBrand.objects.create(name="Toyota")
    model = VehicleModel.objects.create(brand=brand, name="Coaster")
    veh = Vehicle.objects.create(company=company, model=model, license_plate="LT-1",
                                 status=Vehicle.Status.AVAILABLE, is_active=True)
    VehicleSeatingAssignment.objects.create(
        company=company, vehicle=veh, seating_plan=trip.seating_plan, is_active=True)
    # Sans mission : éligible.
    assert blocking_reasons(veh, window_start=trip.scheduled_departure,
                            window_end=trip.scheduled_arrival) == []
    # Mission flotte qui chevauche le créneau -> bloqué.
    Assignment.objects.create(
        company=company, vehicle=veh, purpose="Location", destination="X",
        status=Assignment.Status.IN_PROGRESS,
        planned_departure=trip.scheduled_departure - timedelta(hours=1),
        planned_return=trip.scheduled_arrival + timedelta(hours=1))
    reasons = blocking_reasons(veh, window_start=trip.scheduled_departure,
                               window_end=trip.scheduled_arrival)
    assert any("mission" in r.lower() for r in reasons)


# ── Part B : équipage bloqué sur des voyages qui se chevauchent ──────────────

@pytest.mark.django_db
def test_crew_member_blocked_on_overlapping_trip():
    company, admin, trip = _setup()
    other = _second_trip(company, trip)  # même créneau
    member = _crew_member(company)
    c = APIClient(); c.force_authenticate(user=admin)
    r1 = c.post(f"/api/v1/voyages/trips/{trip.id}/crew/", {"member_id": str(member.id)}, format="json")
    assert r1.status_code in (200, 201), r1.content
    r2 = c.post(f"/api/v1/voyages/trips/{other.id}/crew/", {"member_id": str(member.id)}, format="json")
    assert r2.status_code == 400, r2.content
    assert "créneau" in (r2.json().get("error", {}).get("message", "") + str(r2.json())).lower()


@pytest.mark.django_db
def test_crew_member_allowed_on_non_overlapping_trip():
    company, admin, trip = _setup()
    later = _second_trip(company, trip, offset_hours=6)  # après la fin du 1er (durée 3h)
    member = _crew_member(company)
    c = APIClient(); c.force_authenticate(user=admin)
    r1 = c.post(f"/api/v1/voyages/trips/{trip.id}/crew/", {"member_id": str(member.id)}, format="json")
    assert r1.status_code in (200, 201), r1.content
    r2 = c.post(f"/api/v1/voyages/trips/{later.id}/crew/", {"member_id": str(member.id)}, format="json")
    assert r2.status_code in (200, 201), r2.content
