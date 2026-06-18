from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class JobPosition(BaseModel):
    """Poste / fonction occupé par un employé dans un département."""

    company      = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                     on_delete=models.CASCADE, related_name="job_positions")
    department   = models.ForeignKey("hr.Department", verbose_name=_("département"),
                                     on_delete=models.SET_NULL, null=True, blank=True,
                                     related_name="job_positions")
    grade        = models.ForeignKey("hr.Grade", verbose_name=_("grade associé"),
                                     on_delete=models.SET_NULL, null=True, blank=True,
                                     related_name="job_positions")
    title        = models.CharField(_("intitulé du poste"), max_length=200)
    code         = models.CharField(_("code"), max_length=50, blank=True)
    description  = models.TextField(_("description"), blank=True)
    is_management = models.BooleanField(_("poste d'encadrement"), default=False)

    class Meta(BaseModel.Meta):
        verbose_name        = _("poste")
        verbose_name_plural = _("postes")
        ordering            = ["title"]
        unique_together     = [("company", "title")]

    def __str__(self):
        return self.title
