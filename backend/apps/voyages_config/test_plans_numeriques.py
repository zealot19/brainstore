import pytest
from datetime import timedelta
from django.utils import timezone
from django.core.exceptions import ValidationError as DjangoValidationError
from apps.voyages_config.models import SeatingPlan


@pytest.fixture
def ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, setup = create_company(name="PlanCo", admin_email="plan@x.com",
                                    admin_first_name="A", admin_last_name="B")
    return company, setup, User.objects.get(email="plan@x.com")


def _trip(company, admin, plan=None):
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass
    from apps.voyages_trips.models import Trip
    town = Town.objects.create(company=company, name="D")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D2")
    route = Route.objects.create(company=company, code="R", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="C", name="C")
    dep = timezone.now()
    return Trip.objects.create(company=company, route=route, fare_class=fc, origin=o, destination=d,
                               scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=3),
                               seating_plan=plan, created_by=admin)


def _vehicle(company, plan=None, plate="LT-1"):
    from apps.fleet.models import Vehicle, VehicleBrand, VehicleModel
    brand, _ = VehicleBrand.objects.get_or_create(name="Toyota")
    model, _ = VehicleModel.objects.get_or_create(brand=brand, name="Coaster")
    return Vehicle.objects.create(company=company, model=model, license_plate=plate, code=plate,
                                  status=Vehicle.Status.AVAILABLE, is_active=True,
                                  seating_plan=plan)


def test_plan_has_no_visual_fields():
    names = {f.name for f in SeatingPlan._meta.get_fields()}
    assert "rows" not in names and "columns" not in names
    assert "blocked_seats" in names
    import apps.voyages_config.models as m
    assert not hasattr(m, "PlanSeat")
    assert not hasattr(m, "VehicleSeatingAssignment")


@pytest.mark.django_db
def test_plan_coherence(ctx):
    company, setup, user = ctx
    p = SeatingPlan(company=company, code="P1", name="70 places", total_seats=70, blocked_seats=4)
    p.full_clean(exclude=["created_by", "updated_by", "company"])
    assert p.sellable_seats == 66
    bad = SeatingPlan(company=company, code="P2", name="X", total_seats=10, blocked_seats=11)
    with pytest.raises(DjangoValidationError):
        bad.full_clean(exclude=["created_by", "updated_by", "company"])


@pytest.mark.django_db
def test_materialise_from_counts(ctx):
    from apps.voyages_trips.services.assignment import materialise_seats
    from apps.voyages_trips.models import TripSeat
    company, setup, user = ctx
    plan = SeatingPlan.objects.create(company=company, code="P", name="P", total_seats=10, blocked_seats=2)
    trip = _trip(company, user, plan=plan)
    materialise_seats(trip)
    seats = list(TripSeat.objects.filter(trip=trip))
    assert len(seats) == 10
    assert sum(1 for s in seats if s.status == TripSeat.Status.BLOCKED) == 2
    assert sum(1 for s in seats if s.status == TripSeat.Status.AVAILABLE) == 8
    assert {s.seat_number for s in seats} == {str(i) for i in range(1, 11)}


@pytest.mark.django_db
def test_active_seating_plan_returns_vehicle_plan(ctx):
    from apps.voyages_trips.selectors.eligibility import active_seating_plan
    company, setup, user = ctx
    plan = SeatingPlan.objects.create(company=company, code="P", name="P", total_seats=5, blocked_seats=0)
    veh = _vehicle(company, plan=plan)
    assert active_seating_plan(veh) == plan
    assert active_seating_plan(veh, timezone.now().date()) == plan  # date ignorée
    assert active_seating_plan(_vehicle(company, plan=None, plate="LT-2")) is None


@pytest.mark.django_db
def test_assign_vehicle_without_plan_rejected(ctx):
    # Un véhicule sans plan reste inéligible (règle blocking_reasons inchangée) :
    # comportement défini (VehicleNotEligible), pas de 500, aucun siège généré.
    from apps.voyages_trips.services.assignment import assign_vehicle
    from apps.voyages_trips.exceptions import VehicleNotEligible
    from apps.voyages_trips.models import TripSeat
    company, setup, user = ctx
    trip = _trip(company, user, plan=None)
    veh = _vehicle(company, plan=None)
    with pytest.raises(VehicleNotEligible):
        assign_vehicle(trip, veh, user=user)
    assert TripSeat.objects.filter(trip=trip).count() == 0


@pytest.mark.django_db
def test_assign_vehicle_keeps_existing_seats(ctx):
    from apps.voyages_trips.services.assignment import assign_vehicle, materialise_seats
    from apps.voyages_trips.models import TripSeat
    company, setup, user = ctx
    plan = SeatingPlan.objects.create(company=company, code="P", name="P", total_seats=6, blocked_seats=0)
    trip = _trip(company, user, plan=plan)
    materialise_seats(trip)
    assert TripSeat.objects.filter(trip=trip).count() == 6
    # un autre véhicule (plan de 50) ne doit pas réécraser les 6 sièges déjà générés
    big = SeatingPlan.objects.create(company=company, code="B", name="B", total_seats=50, blocked_seats=0)
    veh = _vehicle(company, plan=big, plate="LT-9")
    assign_vehicle(trip, veh, user=user)
    assert TripSeat.objects.filter(trip=trip).count() == 6
