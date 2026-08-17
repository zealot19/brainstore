from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


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
