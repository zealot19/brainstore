import pytest
from apps.core.exceptions import ApplicationError
from apps.fleet.models import Vehicle, VehicleBrand, VehicleModel
from apps.fleet.services.vehicle_services import create_vehicle
from apps.fleet.serializers import VehicleCreateSerializer


@pytest.fixture
def ctx(db):
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    company, _ = create_company(name="FleetCo", admin_email="fl@x.com",
                                admin_first_name="A", admin_last_name="B")
    user = User.objects.get(email="fl@x.com")
    brand = VehicleBrand.objects.create(name="Marque X", created_by=user)
    model = VehicleModel.objects.create(brand=brand, name="Bus", created_by=user)
    return company, user, model


def test_model_has_code_identifier():
    fields = {f.name for f in Vehicle._meta.get_fields()}
    assert "code" in fields
    assert ("company", "code") in [tuple(ut) for ut in Vehicle._meta.unique_together]


@pytest.mark.django_db
def test_create_vehicle_with_code(ctx):
    company, user, model = ctx
    v = create_vehicle(company=company, model=model, code="BUS-001",
                       license_plate="AB-123-CD", created_by=user)
    assert v.code == "BUS-001"
    assert str(v).startswith("BUS-001")


@pytest.mark.django_db
def test_duplicate_code_rejected(ctx):
    company, user, model = ctx
    create_vehicle(company=company, model=model, code="BUS-001",
                   license_plate="AB-1", created_by=user)
    with pytest.raises(ApplicationError):
        create_vehicle(company=company, model=model, code="BUS-001",
                       license_plate="AB-2", created_by=user)


def test_create_serializer_requires_code_and_drops_removed_fields():
    s = VehicleCreateSerializer()
    assert "code" in s.fields and s.fields["code"].required
    for gone in ("vin", "acquisition_cost", "parking_id"):
        assert gone not in s.fields
    s2 = VehicleCreateSerializer(data={"model_id": "00000000-0000-0000-0000-000000000000",
                                       "license_plate": "AB-9", "code": "BUS-9", "vin": "ZZZ"})
    s2.is_valid()
    assert "vin" not in s2.validated_data
