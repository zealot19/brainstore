from ..models import Permission


def list_permissions(*, module_id=None, category=None, search=None):
    qs = Permission.objects.filter(is_deleted=False).select_related("module")
    if module_id:
        qs = qs.filter(module_id=module_id)
    if category:
        qs = qs.filter(category=category)
    if search:
        qs = qs.filter(code__icontains=search) | qs.filter(name__icontains=search)
    return qs.order_by("module", "category", "code")


def get_permission(permission_id):
    return Permission.objects.get(id=permission_id, is_deleted=False)


def list_permissions_by_module(module_id):
    return (
        Permission.objects.filter(module_id=module_id, is_deleted=False)
        .order_by("category", "code")
    )
