from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class FiscalYear(BaseModel):
    class State(models.TextChoices):
        OPEN   = "open", _("Ouvert")
        CLOSED = "closed", _("Clôturé")

    company    = models.ForeignKey("system_config.Company", on_delete=models.CASCADE,
                                   related_name="fiscal_years")
    name       = models.CharField(_("nom"), max_length=50)
    code       = models.CharField(_("code"), max_length=10)
    date_start = models.DateField(_("début"))
    date_end   = models.DateField(_("fin"))
    state      = models.CharField(_("état"), max_length=8, choices=State.choices, default=State.OPEN)

    class Meta(BaseModel.Meta):
        verbose_name = _("exercice comptable")
        verbose_name_plural = _("exercices comptables")
        unique_together = [("company", "code")]
        ordering = ["-date_start"]

    def __str__(self):
        return self.name
