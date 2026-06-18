from ..models import Role


def list_roles(*, company_id=None, include_system=True, search=None):
    qs = Role.objects.filter(is_deleted=False).select_related("company")
    if company_id is not None:
        if include_system:
            qs = qs.filter(company_id__in=[company_id, None])
        else:
            qs = qs.filter(company_id=company_id)
    if search:
        qs = qs.filter(name__icontains=search)
    return qs.prefetch_related("permissions").order_by("name")


def get_role(role_id):
    return Role.objects.select_related("company").prefetch_related("permissions__module").get(
        id=role_id, is_deleted=False
    )


def get_role_permissions(role):
    return role.permissions.filter(is_deleted=False).select_related("module")
