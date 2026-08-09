from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Transbordement(BaseModel):
    """Trace d'un transbordement : remplacement du bus d'un voyage (+ bascule éventuelle)."""
    company        = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                        on_delete=models.CASCADE, related_name="voyages_transbordements")
    trip           = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                                        on_delete=models.CASCADE, related_name="transbordements")
    from_vehicle   = models.ForeignKey("fleet.Vehicle", verbose_name=_("ancien bus"),
                                        on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    to_vehicle     = models.ForeignKey("fleet.Vehicle", verbose_name=_("nouveau bus"),
                                        on_delete=models.PROTECT, related_name="+")
    overflow_trip  = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage de bascule"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="transbordements_overflow")
    passengers_moved    = models.PositiveIntegerField(_("passagers ré-attribués"), default=0)
    passengers_overflow = models.PositiveIntegerField(_("passagers basculés"), default=0)
    baggage_moved       = models.PositiveIntegerField(_("bagages basculés"), default=0)
    note                = models.TextField(_("note"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("transbordement")
        ordering = ["-created_at"]

    def __str__(self):
        return f"Transbordement {self.trip_id}"
