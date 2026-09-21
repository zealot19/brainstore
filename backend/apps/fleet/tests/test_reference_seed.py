import pytest

from apps.fleet.models import (
    FuelType, Transmission, VehicleCategoryCfg, DocumentType, InterventionType,
)
from apps.fleet.services.seed import seed_fleet_reference


def _bare_company(name="FleetRef Co"):
    from apps.system_config.services import create_company
    company, setup = create_company(name=name)
    assert setup is None
    return company


@pytest.mark.django_db
def test_seed_creates_reference_rows():
    company = _bare_company()
    seed_fleet_reference(company)
    assert FuelType.objects.filter(company=company).count() == 5
    assert Transmission.objects.filter(company=company).count() == 2
    assert VehicleCategoryCfg.objects.filter(company=company).count() == 5
    assert DocumentType.objects.filter(company=company).count() == 4
    assert InterventionType.objects.filter(company=company).count() == 4


@pytest.mark.django_db
def test_seed_is_idempotent():
    company = _bare_company("FleetIdem Co")
    seed_fleet_reference(company)
    seed_fleet_reference(company)
    assert FuelType.objects.filter(company=company).count() == 5
    assert DocumentType.objects.filter(company=company).count() == 4
    assert InterventionType.objects.filter(company=company).count() == 4


@pytest.mark.django_db
def test_bootstrap_seeds_fleet_reference():
    from apps.system_config.services import create_company
    company, setup = create_company(
        name="Boot Fleet Co", admin_email="bf@x.com",
        admin_first_name="B", admin_last_name="F")
    assert setup is not None
    assert FuelType.objects.filter(company=company).count() == 5
    assert DocumentType.objects.filter(company=company).count() == 4
