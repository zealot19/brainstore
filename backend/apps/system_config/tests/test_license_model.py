import pytest
from datetime import date
from apps.system_config.models import Company, License


@pytest.mark.django_db
def test_license_defaults():
    c = Company.objects.create(name="LicCo", slug="licco")
    lic = License.objects.create(company=c, expires_at=date(2030, 1, 1))
    assert lic.status == "active"
    assert lic.key_version == 1
    assert lic.token == ""
    assert lic.company_id == c.id
