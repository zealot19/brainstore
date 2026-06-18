from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class AppModule(BaseModel):
    """
    Module fonctionnel de l'ERP (HR, Finance, Fleet, POS…).
    Permet d'activer/désactiver des blocs fonctionnels par institution.
    """
    code        = models.SlugField(_("code"), max_length=50, unique=True)
    name        = models.CharField(_("nom"), max_length=100)
    description = models.TextField(_("description"), blank=True)
    icon        = models.CharField(_("icône"), max_length=80, blank=True,
                                   help_text=_("Classe CSS de l'icône (ex: mdi-account-group)"))
    order       = models.PositiveSmallIntegerField(_("ordre"), default=0)
    parent      = models.ForeignKey(
        "self", verbose_name=_("module parent"),
        on_delete=models.SET_NULL, null=True, blank=True, related_name="children",
    )
    is_core     = models.BooleanField(
        _("module système"), default=False,
        help_text=_("Les modules système ne peuvent pas être désactivés."),
    )

    class Meta(BaseModel.Meta):
        verbose_name        = _("module applicatif")
        verbose_name_plural = _("modules applicatifs")
        ordering            = ["order", "name"]

    def __str__(self):
        return f"[{self.code}] {self.name}"
