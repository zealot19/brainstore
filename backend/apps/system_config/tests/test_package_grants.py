import pytest
from apps.system_config.models import Company

pytestmark = pytest.mark.django_db


def test_new_company_grants_default_true():
    c = Company.objects.create(name="G", slug="g")
    assert c.pkg_transport is True
    assert c.pkg_accounting is True
