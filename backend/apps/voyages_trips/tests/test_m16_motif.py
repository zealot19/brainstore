import pytest
from datetime import timedelta
from django.utils import timezone
from apps.authentication.models import User


def _vehicle(company, plate, seating_plan):
    from apps.fleet.models import Vehicle, VehicleModel, VehicleBrand
    brand, _ = VehicleBrand.objects.get_or_create(name="BrandX")
    model = VehicleModel.objects.create(brand=brand, name="ModelX " + plate)
    return Vehicle.objects.create(company=company, model=model, license_plate=plate,
                                  code=plate, seating_plan=seating_plan, is_active=True)


def _setup(email="tbm@x.com"):
    from apps.system_config.services import create_company
    from apps.voyages_config.models import Town, ServicePoint, Route, FareClass, SeatingPlan
    from apps.voyages_trips.services.trip_services import create_trip, submit_trip
    company, _ = create_company(name="TBM Co", admin_email=email, admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email=email)
    town = Town.objects.create(company=company, name="Dla")
    o = ServicePoint.objects.create(company=company, town=town, code="O", name="O")
    d = ServicePoint.objects.create(company=company, town=town, code="D", name="D")
    route = Route.objects.create(company=company, code="R1", origin=o, destination=d)
    fc = FareClass.objects.create(company=company, code="CL", name="Classic")
    plan = SeatingPlan.objects.create(company=company, code="P", name="P", total_seats=10)
    v1 = _vehicle(company, "V1AA", plan)
    v2 = _vehicle(company, "V2BB", plan)
    dep = timezone.now() + timedelta(days=1)
    trip = create_trip(company=company, route=route, fare_class=fc,
                       scheduled_departure=dep, scheduled_arrival=dep + timedelta(hours=4),
                       seating_plan=plan, vehicle=v1, user=admin)
    submit_trip(trip, user=admin)
    return company, admin, trip, v1, v2


@pytest.mark.django_db
def test_transbord_trip_requires_reason():
    from apps.voyages_trips.services.transbordement import transbord_trip
    from apps.core.exceptions import ApplicationError
    company, admin, trip, v1, v2 = _setup("tbm1@x.com")
    with pytest.raises(ApplicationError):
        transbord_trip(trip, v2, user=admin, reason="")


@pytest.mark.django_db
def test_transbord_trip_stores_reason():
    from apps.voyages_trips.services.transbordement import transbord_trip
    from apps.voyages_trips.models import Transbordement
    company, admin, trip, v1, v2 = _setup("tbm2@x.com")
    res = transbord_trip(trip, v2, user=admin, reason="panne moteur")
    tb = Transbordement.objects.get(id=res["transbordement_id"])
    assert tb.reason == "panne moteur"
    trip.refresh_from_db()
    assert trip.vehicle_id == v2.id
