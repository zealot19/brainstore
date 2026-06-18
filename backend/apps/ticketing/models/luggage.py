from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Luggage(BaseModel):
    """A luggage item registered for a booking."""

    class Status(models.TextChoices):
        CHECKED_IN = "checked_in", _("Checked In")
        LOADED     = "loaded",     _("Loaded")
        DELIVERED  = "delivered",  _("Delivered")
        LOST       = "lost",       _("Lost")

    booking     = models.ForeignKey("ticketing.Booking", verbose_name=_("booking"),
                                     on_delete=models.CASCADE, related_name="luggage_items")
    tag_number  = models.CharField(_("tag number"), max_length=30, blank=True)
    description = models.CharField(_("description"), max_length=255, blank=True)
    weight_kg   = models.DecimalField(_("weight (kg)"), max_digits=5, decimal_places=2,
                                       null=True, blank=True)
    status      = models.CharField(_("status"), max_length=20, choices=Status.choices,
                                    default=Status.CHECKED_IN)

    class Meta(BaseModel.Meta):
        verbose_name = _("luggage item")
        verbose_name_plural = _("luggage items")
        ordering = ["tag_number"]

    def __str__(self):
        return f"{self.tag_number} — {self.booking.reference}"
