from ..models import AppModule


def list_modules(*, is_active=None, is_core=None, parent_id=None):
    qs = AppModule.objects.filter(is_deleted=False)
    if is_active is not None:
        qs = qs.filter(is_active=is_active)
    if is_core is not None:
        qs = qs.filter(is_core=is_core)
    if parent_id is not None:
        qs = qs.filter(parent_id=parent_id)
    return qs.select_related("parent").order_by("order", "name")


def get_module(module_id):
    return AppModule.objects.get(id=module_id, is_deleted=False)


def get_module_tree():
    return AppModule.objects.filter(
        parent__isnull=True, is_deleted=False
    ).prefetch_related("children").order_by("order")
