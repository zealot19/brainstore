from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Transbordement(BaseModel):
    """Trace d'un transbordement : remplacement complet du bus, ou déplacement d'une sélection."""

    class Kind(models.TextChoices):
        BUS       = "bus",       _("Remplacement de bus")
        SELECTION = "selection", _("Sélection")

    company        = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                        on_delete=models.CASCADE, related_name="voyages_transbordements")
    kind           = models.CharField(_("type"), max_length=12, choices=Kind.choices, default=Kind.BUS)
    trip           = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                                        on_delete=models.CASCADE, related_name="transbordements")
    from_vehicle   = models.ForeignKey("fleet.Vehicle", verbose_name=_("ancien bus"),
                                        on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    to_vehicle     = models.ForeignKey("fleet.Vehicle", verbose_name=_("nouveau bus"),
                                        on_delete=models.PROTECT, null=True, blank=True, related_name="+")
    overflow_trip  = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage de bascule"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="transbordements_overflow")
    destination_trip = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage de destination"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="transbordements_destination")
    passengers_moved    = models.PositiveIntegerField(_("passagers ré-attribués"), default=0)
    passengers_overflow = models.PositiveIntegerField(_("passagers basculés"), default=0)
    parcels_moved       = models.PositiveIntegerField(_("colis déplacés"), default=0)
    baggage_moved       = models.PositiveIntegerField(_("bagages déplacés"), default=0)
    note                = models.TextField(_("note"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("transbordement")
        ordering = ["-created_at"]

    def __str__(self):
        return f"Transbordement {self.trip_id}"
