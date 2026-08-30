import pytest


@pytest.mark.django_db
def test_income_permissions_exist_after_migrate():
    from apps.admin_rbac.models import Permission
    assert Permission.objects.filter(code="treasury.income.view").exists()
    assert Permission.objects.filter(code="treasury.income.manage").exists()


@pytest.mark.django_db
def test_income_perms_granted_to_register_roles():
    from apps.admin_rbac.models import Permission, Role
    reg = Permission.objects.filter(code="treasury.register.view").first()
    if not reg:
        pytest.skip("no register.view permission seeded in this DB")
    roles_with_register = Role.objects.filter(permissions=reg)
    inc_view = Permission.objects.get(code="treasury.income.view")
    for role in roles_with_register:
        assert role.permissions.filter(id=inc_view.id).exists()
