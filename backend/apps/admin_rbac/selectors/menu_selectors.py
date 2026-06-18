from ..models import Menu


def list_menus(*, module_id=None, is_visible=None, parent_id=None):
    qs = Menu.objects.filter(is_deleted=False).select_related("module", "parent")
    if module_id:
        qs = qs.filter(module_id=module_id)
    if is_visible is not None:
        qs = qs.filter(is_visible=is_visible)
    if parent_id is not None:
        qs = qs.filter(parent_id=parent_id)
    return qs.order_by("module", "order")


def get_menu(menu_id):
    return Menu.objects.get(id=menu_id, is_deleted=False)


def get_menu_tree(*, module_id=None):
    qs = Menu.objects.filter(parent__isnull=True, is_deleted=False).prefetch_related("children")
    if module_id:
        qs = qs.filter(module_id=module_id)
    return qs.order_by("order")
