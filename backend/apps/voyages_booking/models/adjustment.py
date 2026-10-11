from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class TicketAdjustment(BaseModel):
    """Journal d'un report ou d'une régularisation de billet (M21)."""

    class Kind(models.TextChoices):
        REPORT         = "report",         _("Report")
        REGULARISATION = "regularisation", _("Régularisation")

    company = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                on_delete=models.CASCADE, related_name="ticket_adjustments")
    ticket  = models.ForeignKey("voyages_booking.Ticket", verbose_name=_("billet"),
                                on_delete=models.CASCADE, related_name="adjustments")
    booking = models.ForeignKey("voyages_booking.Booking", verbose_name=_("réservation"),
                                on_delete=models.CASCADE, related_name="ticket_adjustments")
    kind    = models.CharField(_("type"), max_length=15, choices=Kind.choices)
    from_trip = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage d'origine"),
                                  on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    to_trip   = models.ForeignKey("voyages_trips.Trip", verbose_name=_("nouveau voyage"),
                                  on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    from_fare_class = models.ForeignKey("voyages_config.FareClass", verbose_name=_("classe d'origine"),
                                        on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    to_fare_class   = models.ForeignKey("voyages_config.FareClass", verbose_name=_("nouvelle classe"),
                                        on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    from_destination = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("destination d'origine"),
                                         on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    to_destination   = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("nouvelle destination"),
                                         on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    price_difference = models.DecimalField(_("différence"), max_digits=12, decimal_places=2, default=0)
    reason  = models.CharField(_("motif"), max_length=255, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("ajustement de billet")
        verbose_name_plural = _("ajustements de billet")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.get_kind_display()} · {self.ticket_id}"
