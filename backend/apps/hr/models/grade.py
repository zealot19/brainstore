from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Grade(BaseModel):
    """Niveau / grade salarial. Définit la grille de classification des employés."""
    company     = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                    on_delete=models.CASCADE, related_name="grades")
    code        = models.CharField(_("code"), max_length=50)
    name        = models.CharField(_("libellé"), max_length=200)
    description = models.TextField(_("description"), blank=True)
    level       = models.PositiveSmallIntegerField(_("niveau hiérarchique"), default=1)
    salary_min  = models.DecimalField(_("salaire min"), max_digits=14, decimal_places=2, null=True, blank=True)
    salary_max  = models.DecimalField(_("salaire max"), max_digits=14, decimal_places=2, null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name        = _("grade")
        verbose_name_plural = _("grades")
        ordering            = ["level", "code"]
        unique_together     = [("company", "code")]

    def __str__(self):
        return f"{self.code} — {self.name}"
