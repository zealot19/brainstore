import pytest


@pytest.mark.django_db
def test_treasury_config_permissions_exist():
    from apps.admin_rbac.models import Permission
    assert Permission.objects.filter(code="treasury.config.view").exists()
    assert Permission.objects.filter(code="treasury.config.manage").exists()
