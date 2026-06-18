from django.utils.translation import gettext_lazy as _
from apps.core.exceptions import ApplicationError
from ..models import AppModule, Menu, Permission


def create_module(*, code, name, description="", icon="", order=0,
                  parent_id=None, is_core=False):
    if AppModule.objects.filter(code=code).exists():
        raise ApplicationError(_("Un module avec ce code existe déjà."))
    parent = None
    if parent_id:
        parent = AppModule.objects.get(id=parent_id)
    return AppModule.objects.create(
        code=code, name=name, description=description,
        icon=icon, order=order, parent=parent, is_core=is_core,
    )


def update_module(module, *, updated_by=None, **fields):
    if "code" in fields and fields["code"] != module.code:
        if AppModule.objects.filter(code=fields["code"]).exists():
            raise ApplicationError(_("Ce code de module est déjà utilisé."))
    for k, v in fields.items():
        if k != "id":
            setattr(module, k, v)
    module.updated_by = updated_by
    module.save()
    return module


def delete_module(module, deleted_by=None):
    if module.is_core:
        raise ApplicationError(_("Les modules système ne peuvent pas être supprimés."))
    if module.children.filter(is_deleted=False).exists():
        raise ApplicationError(_("Supprimez d'abord les sous-modules."))
    module.soft_delete(user=deleted_by)


# ── Menus ─────────────────────────────────────────────────────────────────────

def create_menu(*, module_id, name, route="", icon="", order=0,
                menu_type=Menu.MenuType.ITEM, parent_id=None, is_visible=True):
    module = AppModule.objects.get(id=module_id, is_deleted=False)
    parent = None
    if parent_id:
        parent = Menu.objects.get(id=parent_id, is_deleted=False)
    return Menu.objects.create(
        module=module, name=name, route=route, icon=icon,
        order=order, menu_type=menu_type, parent=parent, is_visible=is_visible,
    )


def update_menu(menu, *, updated_by=None, **fields):
    for k, v in fields.items():
        if k != "id":
            setattr(menu, k, v)
    menu.updated_by = updated_by
    menu.save()
    return menu


def delete_menu(menu, deleted_by=None):
    if menu.children.filter(is_deleted=False).exists():
        raise ApplicationError(_("Supprimez d'abord les sous-menus."))
    menu.soft_delete(user=deleted_by)


# ── Permissions ───────────────────────────────────────────────────────────────

def create_permission(*, module_id, code, name, description="",
                      category=Permission.Category.VIEW):
    if Permission.objects.filter(code=code).exists():
        raise ApplicationError(_("Une permission avec ce code existe déjà."))
    module = AppModule.objects.get(id=module_id, is_deleted=False)
    return Permission.objects.create(
        module=module, code=code, name=name,
        description=description, category=category,
    )


def bulk_create_permissions(module_id, items: list[dict]):
    """
    items = [{"code": "hr.employee.view", "name": "...", "category": "view"}, ...]
    Crée uniquement celles qui n'existent pas encore.
    """
    module = AppModule.objects.get(id=module_id, is_deleted=False)
    existing = set(Permission.objects.filter(
        code__in=[i["code"] for i in items]
    ).values_list("code", flat=True))

    to_create = [
        Permission(
            module=module,
            code=i["code"], name=i["name"],
            description=i.get("description", ""),
            category=i.get("category", Permission.Category.VIEW),
        )
        for i in items if i["code"] not in existing
    ]
    Permission.objects.bulk_create(to_create)
    return len(to_create)
