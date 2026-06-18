from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class CashRegister(BaseModel):
    """Physical cash register, typically located at a terminal."""

    company   = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                   on_delete=models.CASCADE, related_name="cash_registers")
    name      = models.CharField(_("name"), max_length=150)
    terminal  = models.ForeignKey("transport_config.Terminal", verbose_name=_("terminal"),
                                   on_delete=models.SET_NULL, null=True, blank=True,
                                   related_name="cash_registers")
    responsible = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("responsible"),
                                     on_delete=models.SET_NULL, null=True, blank=True,
                                     related_name="managed_registers")
    current_balance = models.DecimalField(_("current balance"), max_digits=12, decimal_places=2,
                                           default=0)
    is_active = models.BooleanField(_("active"), default=True)
    notes     = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("cash register")
        verbose_name_plural = _("cash registers")
        ordering = ["name"]

    def __str__(self):
        return f"{self.name} ({self.company})"
