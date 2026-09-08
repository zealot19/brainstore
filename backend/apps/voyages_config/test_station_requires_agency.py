import pytest
from django.core.exceptions import ValidationError
from apps.voyages_config.models import Town, ServicePoint
from apps.system_config.services import create_company

pytestmark = pytest.mark.django_db


def test_station_without_agency_is_invalid():
    company, _ = create_company(name="Ag", admin_email="ag@x.com",
                                admin_first_name="A", admin_last_name="B")
    town = Town.objects.create(company=company, name="Douala")
    sp = ServicePoint(company=company, town=town, code="DLA", name="Gare",
                      is_station=True, agency=None)
    with pytest.raises(ValidationError):
        sp.full_clean()


def test_non_station_without_agency_is_ok():
    company, _ = create_company(name="Ag2", admin_email="ag2@x.com",
                                admin_first_name="A", admin_last_name="B")
    town = Town.objects.create(company=company, name="Douala")
    sp = ServicePoint(company=company, town=town, code="STOP", name="Arrêt",
                      is_station=False, agency=None)
    sp.full_clean()  # should not raise
