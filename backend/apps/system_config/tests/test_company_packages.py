import pytest
from apps.system_config.services import create_company

pytestmark = pytest.mark.django_db


def test_packages_set_grants():
    company, _ = create_company(name="P Co", admin_email="p@x.com",
                                admin_first_name="A", admin_last_name="B",
                                packages=["transport"])
    company.refresh_from_db()
    assert company.pkg_transport is True
    assert company.pkg_accounting is False


def test_administration_forced_on_when_omitted():
    from apps.system_config.selectors.entitlements import granted_packages
    company, _ = create_company(name="P2 Co", admin_email="p2@x.com",
                                admin_first_name="A", admin_last_name="B",
                                packages=[])
    assert "administration" in granted_packages(company)


def test_packages_none_leaves_defaults():
    """packages=None (omitted) leaves model defaults — all packages granted."""
    from apps.system_config.selectors.entitlements import granted_packages
    company, _ = create_company(name="P3 Co", admin_email="p3@x.com",
                                admin_first_name="A", admin_last_name="B")
    granted = granted_packages(company)
    # All packages should be granted (defaults are all True)
    from apps.core.packages import all_package_codes
    for code in all_package_codes():
        assert code in granted, f"Expected {code} to be granted by default"
