from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Transfer(BaseModel):
    """Internal money transfer between cash registers and/or bank accounts."""

    company   = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                   on_delete=models.CASCADE, related_name="transfers")
    reference = models.CharField(_("reference"), max_length=30, blank=True)

    # ── Source (one FK is set) ─────────────────────────────────────────────────
    from_cash_register = models.ForeignKey("treasury.CashRegister",
                                            verbose_name=_("from register"),
                                            on_delete=models.PROTECT,
                                            null=True, blank=True,
                                            related_name="outgoing_transfers")
    from_bank_account  = models.ForeignKey("treasury.BankAccount",
                                            verbose_name=_("from bank"),
                                            on_delete=models.PROTECT,
                                            null=True, blank=True,
                                            related_name="outgoing_transfers")

    # ── Destination (one FK is set) ────────────────────────────────────────────
    to_cash_register = models.ForeignKey("treasury.CashRegister",
                                          verbose_name=_("to register"),
                                          on_delete=models.PROTECT,
                                          null=True, blank=True,
                                          related_name="incoming_transfers")
    to_bank_account  = models.ForeignKey("treasury.BankAccount",
                                          verbose_name=_("to bank"),
                                          on_delete=models.PROTECT,
                                          null=True, blank=True,
                                          related_name="incoming_transfers")

    amount        = models.DecimalField(_("amount"), max_digits=12, decimal_places=2)
    description   = models.CharField(_("description"), max_length=255, blank=True)
    transfer_date = models.DateField(_("date"), default=timezone.now)
    completed_by  = models.ForeignKey(settings.AUTH_USER_MODEL,
                                       verbose_name=_("completed by"),
                                       on_delete=models.SET_NULL, null=True, blank=True,
                                       related_name="completed_transfers")

    class Meta(BaseModel.Meta):
        verbose_name = _("transfer")
        verbose_name_plural = _("transfers")
        ordering = ["-transfer_date", "-created_at"]

    def __str__(self):
        src  = self.from_cash_register or self.from_bank_account
        dest = self.to_cash_register or self.to_bank_account
        return f"{self.reference} — {src} → {dest} ({self.amount})"
