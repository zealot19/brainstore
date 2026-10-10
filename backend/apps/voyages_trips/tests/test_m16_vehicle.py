import pytest
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User


def _vehicle(company, plate, seating_plan, active=True):
    from apps.fleet.models import Vehicle, VehicleModel, VehicleBrand
    brand, _ = VehicleBrand.objects.get_or_create(name="BrandX")
    model = VehicleModel.objects.create(brand=brand, name="ModelX " + plate)
    return Vehicle.objects.create(company=company, model=model, license_plate=plate,
                                  code=plate, seating_plan=seating_plan, is_active=active)


def _setup(email, n_trips=2, v2_active=True):
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass, SeatingPlan
    from apps.voyages_trips.services.trip_services import create_trip, submit_trip
    company, _ = create_company(name="TBV Co", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    town = Town.objects.create(company=company, name="Dla")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D")
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="CL", name="Classic")
    plan = SeatingPlan.objects.create(company=company, code="P", name="P", total_seats=10)
    v1 = _vehicle(company, "V1AA", plan)
    v2 = _vehicle(company, "V2BB", plan, active=v2_active)
    trips = []
    for i in range(n_trips):
        dep = timezone.now() + timedelta(days=2 * i + 1)  # fenêtres non chevauchantes
        t = create_trip(company=company, route=route, fare_class=fc,
                        scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=4),
                        seating_plan=plan, vehicle=v1, user=admin)
        submit_trip(t, user=admin)
        trips.append(t)
    return company, admin, v1, v2, trips


@pytest.mark.django_db
def test_transbord_vehicle_moves_all_upcoming_trips():
    from apps.voyages_trips.services.transbordement import transbord_vehicle
    company, admin, v1, v2, trips = _setup("tbv1@x.com", n_trips=2)
    res = transbord_vehicle(company, from_vehicle=v1, to_vehicle=v2, reason="panne", user=admin)
    assert len(res["trips"]) == 2
    for t in trips:
        t.refresh_from_db()
        assert t.vehicle_id == v2.id


@pytest.mark.django_db
def test_transbord_vehicle_no_eligible_trips_raises():
    from apps.voyages_trips.services.transbordement import transbord_vehicle
    from apps.core.exceptions import ApplicationError
    company, admin, v1, v2, trips = _setup("tbv2@x.com", n_trips=0)
    with pytest.raises(ApplicationError):
        transbord_vehicle(company, from_vehicle=v1, to_vehicle=v2, reason="panne", user=admin)


@pytest.mark.django_db
def test_transbord_vehicle_atomic_rollback_on_failure():
    from apps.voyages_trips.services.transbordement import transbord_vehicle
    from apps.core.exceptions import ApplicationError
    # V2 inactif → transbord_trip lève → rollback global, aucun voyage déplacé.
    company, admin, v1, v2, trips = _setup("tbv3@x.com", n_trips=2, v2_active=False)
    with pytest.raises(ApplicationError):
        transbord_vehicle(company, from_vehicle=v1, to_vehicle=v2, reason="panne", user=admin)
    for t in trips:
        t.refresh_from_db()
        assert t.vehicle_id == v1.id   # inchangé


@pytest.mark.django_db
def test_transbord_vehicle_requires_reason():
    from apps.voyages_trips.services.transbordement import transbord_vehicle
    from apps.core.exceptions import ApplicationError
    company, admin, v1, v2, trips = _setup("tbv4@x.com", n_trips=1)
    with pytest.raises(ApplicationError):
        transbord_vehicle(company, from_vehicle=v1, to_vehicle=v2, reason="", user=admin)
