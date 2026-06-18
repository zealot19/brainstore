from django.db import transaction
from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from ..models import Role, RolePermission, Permission


def create_role(*, name, description="", company_id=None, permission_ids=None,
                is_system=False, created_by=None):
    if Role.objects.filter(name=name, company_id=company_id).exists():
        raise ApplicationError(_("Un rôle avec ce nom existe déjà pour cette institution."))

    role = Role.objects.create(
        name=name, description=description,
        company_id=company_id, is_system=is_system,
        created_by=created_by,
    )
    if permission_ids:
        _set_permissions(role, permission_ids, granted_by=created_by)
    return role


def update_role(role, *, updated_by=None, **fields):
    if role.is_system and not fields.get("_allow_system", False):
        raise ApplicationError(_("Les rôles système ne peuvent pas être modifiés."))
    for k, v in fields.items():
        if k not in ("id", "is_system", "_allow_system"):
            setattr(role, k, v)
    role.updated_by = updated_by
    role.save()
    return role


def delete_role(role, deleted_by=None):
    if role.is_system:
        raise ApplicationError(_("Les rôles système ne peuvent pas être supprimés."))
    if role.user_roles.exists():
        raise ApplicationError(_("Ce rôle est assigné à des utilisateurs. Retirez-le d'abord."))
    role.soft_delete(user=deleted_by)


@transaction.atomic
def set_role_permissions(role, permission_ids: list, granted_by=None):
    """Remplace toutes les permissions du rôle."""
    if role.is_system:
        raise ApplicationError(_("Les permissions des rôles système ne peuvent pas être modifiées."))
    RolePermission.objects.filter(role=role).delete()
    _set_permissions(role, permission_ids, granted_by=granted_by)
    return role


@transaction.atomic
def add_permissions_to_role(role, permission_ids: list, granted_by=None):
    """Ajoute des permissions sans supprimer les existantes."""
    existing = set(RolePermission.objects.filter(role=role).values_list("permission_id", flat=True))
    new_ids = [pid for pid in permission_ids if pid not in existing]
    _set_permissions(role, new_ids, granted_by=granted_by)
    return role


def remove_permissions_from_role(role, permission_ids: list):
    RolePermission.objects.filter(role=role, permission_id__in=permission_ids).delete()


def _set_permissions(role, permission_ids, granted_by=None):
    perms = Permission.objects.filter(id__in=permission_ids, is_deleted=False)
    RolePermission.objects.bulk_create([
        RolePermission(role=role, permission=p, granted_by=granted_by)
        for p in perms
    ], ignore_conflicts=True)
