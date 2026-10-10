from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class OperationType(BaseModel):
    """Type d'opération de trésorerie configurable, classé dépense ou recette (M26)."""

    class Sens(models.TextChoices):
        DEPENSE = "depense", _("Dépense")
        RECETTE = "recette", _("Recette")

    company       = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                       on_delete=models.CASCADE, related_name="operation_types")
    code          = models.CharField(_("code"), max_length=20)
    label         = models.CharField(_("libellé"), max_length=100)
    sens          = models.CharField(_("sens"), max_length=10, choices=Sens.choices)
    is_active     = models.BooleanField(_("actif"), default=True)
    display_order = models.PositiveIntegerField(_("ordre d'affichage"), default=0)

    class Meta(BaseModel.Meta):
        verbose_name        = _("type d'opération")
        verbose_name_plural = _("types d'opération")
        unique_together     = [("company", "code")]
        ordering            = ["sens", "display_order", "label"]

    def __str__(self):
        return self.label
