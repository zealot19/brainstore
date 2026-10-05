import pytest
from apps.voyages_config.models import VoyagesSettings

pytestmark = pytest.mark.django_db


def _company(email="vs@x.com"):
    from apps.system_config.services import create_company
    company, _ = create_company(name="VSCo", admin_email=email, admin_first_name="A", admin_last_name="B")
    return company


def test_auto_manage_trips_defaults_false():
    c = _company()
    s = VoyagesSettings.objects.create(company=c)
    assert s.auto_manage_trips is False
