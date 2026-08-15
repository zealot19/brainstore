from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class AccountingPeriod(BaseModel):
    class State(models.TextChoices):
        OPEN   = "open", _("Ouverte")
        CLOSED = "closed", _("Clôturée")
        LOCKED = "locked", _("Verrouillée")

    company     = models.ForeignKey("system_config.Company", on_delete=models.CASCADE,
                                    related_name="accounting_periods")
    fiscal_year = models.ForeignKey("accounting.FiscalYear", on_delete=models.CASCADE,
                                    related_name="periods")
    name        = models.CharField(_("nom"), max_length=50)
    code        = models.CharField(_("code"), max_length=10)
    date_start  = models.DateField(_("début"))
    date_end    = models.DateField(_("fin"))
    state       = models.CharField(_("état"), max_length=8, choices=State.choices, default=State.OPEN)

    class Meta(BaseModel.Meta):
        verbose_name = _("période comptable")
        verbose_name_plural = _("périodes comptables")
        unique_together = [("company", "code")]
        ordering = ["date_start"]

    def __str__(self):
        return self.name
