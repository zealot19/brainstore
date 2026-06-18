from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class BankAccount(BaseModel):
    """Company bank account."""

    company         = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                         on_delete=models.CASCADE, related_name="bank_accounts")
    bank_name       = models.CharField(_("bank name"),       max_length=150)
    account_name    = models.CharField(_("account name"),    max_length=150)
    account_number  = models.CharField(_("account number"),  max_length=50)
    current_balance = models.DecimalField(_("current balance"), max_digits=14, decimal_places=2,
                                           default=0)
    is_active = models.BooleanField(_("active"), default=True)
    notes     = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("bank account")
        verbose_name_plural = _("bank accounts")
        ordering = ["bank_name", "account_name"]

    def __str__(self):
        return f"{self.bank_name} — {self.account_name} ({self.account_number})"
