from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Department(BaseModel):
    """Département / service de l'institution. Supporte une hiérarchie illimitée."""

    company     = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                    on_delete=models.CASCADE, related_name="departments")
    code        = models.CharField(_("code"), max_length=50)
    name        = models.CharField(_("libellé"), max_length=200)
    description = models.TextField(_("description"), blank=True)
    parent      = models.ForeignKey("self", verbose_name=_("département parent"),
                                    on_delete=models.SET_NULL, null=True, blank=True,
                                    related_name="sub_departments")
    # FK circulaire avec Employee — référence par chaîne de caractères pour éviter l'import circulaire
    head        = models.ForeignKey("hr.Employee", verbose_name=_("responsable"),
                                    on_delete=models.SET_NULL, null=True, blank=True,
                                    related_name="headed_departments")
    order       = models.PositiveSmallIntegerField(_("ordre d'affichage"), default=0)

    class Meta(BaseModel.Meta):
        verbose_name        = _("département")
        verbose_name_plural = _("départements")
        ordering            = ["order", "name"]
        unique_together     = [("company", "code")]

    def __str__(self):
        return f"{self.code} — {self.name}"
