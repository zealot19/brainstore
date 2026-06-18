from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Permission(BaseModel):
    """
    Permission granulaire sur une action/ressource.
    Code de référence : "<module>.<ressource>.<action>"
    Ex: hr.employee.view, finance.invoice.export, system.user.admin
    """
    class Category(models.TextChoices):
        VIEW   = "view",   _("Consulter")
        CREATE = "create", _("Créer")
        UPDATE = "update", _("Modifier")
        DELETE = "delete", _("Supprimer")
        EXPORT = "export", _("Exporter")
        IMPORT = "import", _("Importer")
        ADMIN  = "admin",  _("Administration")

    module      = models.ForeignKey(
        "admin_rbac.AppModule", verbose_name=_("module"),
        on_delete=models.CASCADE, related_name="permissions",
    )
    code        = models.CharField(_("code"), max_length=150, unique=True,
                                   help_text=_("Ex: hr.employee.view"))
    name        = models.CharField(_("libellé"), max_length=200)
    description = models.TextField(_("description"), blank=True)
    category    = models.CharField(_("catégorie"), max_length=20,
                                   choices=Category.choices, default=Category.VIEW)

    class Meta(BaseModel.Meta):
        verbose_name        = _("permission")
        verbose_name_plural = _("permissions")
        ordering            = ["module", "category", "code"]

    def __str__(self):
        return f"{self.code} — {self.name}"
