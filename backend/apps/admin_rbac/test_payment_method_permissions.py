import pytest


@pytest.mark.django_db
def test_payment_method_permissions_exist():
    from apps.admin_rbac.models import Permission
    assert Permission.objects.filter(code="treasury.paymentmethod.view").exists()
    assert Permission.objects.filter(code="treasury.paymentmethod.manage").exists()
