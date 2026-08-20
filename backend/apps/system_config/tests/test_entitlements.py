import pytest


@pytest.mark.django_db
def test_package_has_module_flags_default_true():
    from apps.system_config.models import Package
    p = Package.objects.create(name="Full", tier="professional")
    for attr in ["has_administration", "has_fleet", "has_voyages", "has_colis",
                 "has_bagages", "has_treasury", "has_accounting", "has_reporting"]:
        assert getattr(p, attr) is True
