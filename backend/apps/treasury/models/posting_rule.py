from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class MovementAccountMapping(BaseModel):
    """Correspondance catégorie de mouvement → compte de contrepartie OHADA (par société)."""
    company  = models.ForeignKey("system_config.Company", on_delete=models.CASCADE, related_name="movement_mappings")
    category = models.CharField(_("catégorie"), max_length=30)
    account  = models.ForeignKey("accounting.Account", on_delete=models.PROTECT, related_name="+")

    class Meta(BaseModel.Meta):
        verbose_name = _("correspondance comptable de mouvement")
        verbose_name_plural = _("correspondances comptables de mouvement")
        unique_together = [("company", "category")]

    def __str__(self):
        return f"{self.category} → {self.account.code}"
