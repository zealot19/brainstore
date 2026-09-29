import pytest
from apps.system_config.models import Company
from apps.system_config.selectors.entitlements import enabled_modules, granted_packages

pytestmark = pytest.mark.django_db


def test_administration_always_enabled():
    c = Company.objects.create(name="A", slug="a", pkg_transport=False, pkg_accounting=False)
    assert "administration" in granted_packages(c)
    assert "administration" in enabled_modules(c)
    assert "fleet" not in enabled_modules(c)


def test_transport_grant_enables_its_modules():
    c = Company.objects.create(name="B", slug="b", pkg_transport=True, pkg_accounting=False)
    mods = enabled_modules(c)
    assert {"fleet", "treasury", "voyage", "colis", "bagages", "reporting"} <= mods
    assert "accounting" not in mods


def test_no_company_returns_all():
    from apps.system_config.selectors.entitlements import enabled_modules_for_company_id
    import uuid
    mods = enabled_modules_for_company_id(uuid.uuid4())
    assert "fleet" in mods and "accounting" in mods
