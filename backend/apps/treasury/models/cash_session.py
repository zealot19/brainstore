from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class CashSession(BaseModel):
    """Daily opening/closing of a cash register."""

    class Status(models.TextChoices):
        OPEN   = "open",   _("Open")
        CLOSED = "closed", _("Closed")

    company        = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                        on_delete=models.CASCADE, related_name="cash_sessions")
    cash_register  = models.ForeignKey("treasury.CashRegister", verbose_name=_("cash register"),
                                        on_delete=models.PROTECT, related_name="sessions")
    opened_by      = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("opened by"),
                                        on_delete=models.PROTECT, related_name="opened_sessions")
    closed_by      = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("closed by"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="closed_sessions")

    opening_balance  = models.DecimalField(_("opening balance"), max_digits=12, decimal_places=2)
    closing_balance  = models.DecimalField(_("closing balance"), max_digits=12, decimal_places=2,
                                            null=True, blank=True)
    expected_closing = models.DecimalField(_("expected closing"), max_digits=12, decimal_places=2,
                                            null=True, blank=True)
    difference       = models.DecimalField(_("difference"), max_digits=12, decimal_places=2,
                                            null=True, blank=True)

    opened_at = models.DateTimeField(_("opened at"), default=timezone.now)
    closed_at = models.DateTimeField(_("closed at"), null=True, blank=True)
    status    = models.CharField(_("status"), max_length=10, choices=Status.choices,
                                  default=Status.OPEN)
    notes     = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("cash session")
        verbose_name_plural = _("cash sessions")
        ordering = ["-opened_at"]

    def __str__(self):
        return (f"{self.cash_register.name} — "
                f"{self.opened_at:%Y-%m-%d} [{self.get_status_display()}]")
