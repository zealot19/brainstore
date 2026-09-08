from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped
from apps.core.models import BaseModel


class ExpenseType(_CompanyScoped):
    code         = models.CharField(_("code"), max_length=30)
    name         = models.CharField(_("nom"), max_length=150)
    account_code = models.CharField(_("compte de charge (OHADA)"), max_length=10, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type de dépense")
        verbose_name_plural = _("types de dépense")
        ordering = ["code"]

    def __str__(self):
        return f"{self.code} — {self.name}"


class ExpenseSchedule(_CompanyScoped):
    route      = models.ForeignKey("voyages_config.Route", verbose_name=_("trajet"),
                                   on_delete=models.CASCADE, related_name="expense_schedules")
    fare_class = models.ForeignKey("voyages_config.FareClass", verbose_name=_("catégorie tarifaire"),
                                   on_delete=models.CASCADE, related_name="expense_schedules")

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("barème de dépenses")
        verbose_name_plural = _("barèmes de dépenses")
        unique_together = [("company", "route", "fare_class")]
        ordering = ["route", "fare_class"]

    def __str__(self):
        return f"{self.route_id} · {self.fare_class_id}"


class ExpenseScheduleLine(BaseModel):
    schedule     = models.ForeignKey(ExpenseSchedule, on_delete=models.CASCADE, related_name="lines")
    expense_type = models.ForeignKey("voyages_config.ExpenseType", on_delete=models.PROTECT)
    amount       = models.DecimalField(_("montant"), max_digits=14, decimal_places=2)

    class Meta:
        ordering = ["id"]
