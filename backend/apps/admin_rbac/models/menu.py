from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Menu(BaseModel):
    """
    Entrée de menu de l'interface (Angular router).
    Hiérarchie illimitée via parent FK.
    """
    class MenuType(models.TextChoices):
        GROUP   = "group",   _("Groupe")
        ITEM    = "item",    _("Élément")
        DIVIDER = "divider", _("Séparateur")

    module  = models.ForeignKey(
        "admin_rbac.AppModule", verbose_name=_("module"),
        on_delete=models.CASCADE, related_name="menus",
    )
    parent  = models.ForeignKey(
        "self", verbose_name=_("menu parent"),
        on_delete=models.SET_NULL, null=True, blank=True, related_name="children",
    )
    name    = models.CharField(_("libellé"), max_length=100)
    menu_type = models.CharField(_("type"), max_length=20,
                                  choices=MenuType.choices, default=MenuType.ITEM)
    route   = models.CharField(
        _("route Angular"), max_length=255, blank=True,
        help_text=_("Ex: /hr/employees ou /finance/invoices"),
    )
    icon    = models.CharField(_("icône"), max_length=80, blank=True)
    order   = models.PositiveSmallIntegerField(_("ordre"), default=0)
    is_visible = models.BooleanField(_("visible"), default=True)

    class Meta(BaseModel.Meta):
        verbose_name        = _("menu")
        verbose_name_plural = _("menus")
        ordering            = ["module", "order", "name"]

    def __str__(self):
        prefix = f"{self.parent.name} → " if self.parent_id else ""
        return f"{prefix}{self.name}"
