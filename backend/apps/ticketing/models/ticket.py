import uuid
from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Ticket(BaseModel):
    """Printable / scannable ticket for a confirmed booking."""

    booking       = models.OneToOneField("ticketing.Booking", verbose_name=_("booking"),
                                          on_delete=models.CASCADE, related_name="ticket")
    ticket_number = models.CharField(_("ticket number"), max_length=30, unique=True, blank=True)
    qr_code       = models.UUIDField(_("QR code"), default=uuid.uuid4, unique=True)
    issued_at     = models.DateTimeField(_("issued at"), auto_now_add=True)
    issued_by     = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("issued by"),
                                       on_delete=models.SET_NULL, null=True,
                                       related_name="issued_tickets")
    is_used   = models.BooleanField(_("used"), default=False)
    used_at   = models.DateTimeField(_("used at"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("ticket")
        verbose_name_plural = _("tickets")
        ordering = ["-issued_at"]

    def __str__(self):
        return f"{self.ticket_number} — {self.booking.customer.full_name}"
