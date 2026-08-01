from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class RecurringCost(BaseModel):
    """Ligne de coût récurrent d'un contrat."""
    contract    = models.ForeignKey("fleet.Contract", verbose_name=_("contrat"),
                                    on_delete=models.CASCADE, related_name="recurring_costs")
    description = models.CharField(_("description"), max_length=255)
    amount      = models.DecimalField(_("montant"), max_digits=18, decimal_places=2)
    currency    = models.CharField(_("devise"), max_length=3, default="XAF")
    period      = models.ForeignKey("fleet.Period", verbose_name=_("périodicité"),
                                    on_delete=models.PROTECT, related_name="recurring_costs")

    class Meta(BaseModel.Meta):
        verbose_name = _("coût récurrent")
        verbose_name_plural = _("coûts récurrents")
        ordering = ["contract", "description"]

    def __str__(self):
        return f"{self.description} — {self.amount} {self.currency}"
