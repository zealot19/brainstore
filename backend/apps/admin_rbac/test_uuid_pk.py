import pytest
from apps.admin_rbac.models import RolePermission, UserRole, ProfileRole

pytestmark = pytest.mark.django_db


def test_rbac_link_tables_have_uuid_pk():
    for M in (RolePermission, UserRole, ProfileRole):
        assert M._meta.pk.get_internal_type() == "UUIDField", f"{M.__name__} PK not UUID"
