from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class ParcelShipment(BaseModel):
    """Expédition partielle d'un colis (M25) : N pièces sur un voyage donné."""

    class Status(models.TextChoices):
        DRAFT      = "draft",      _("Brouillon")
        VALIDATED  = "validated",  _("Validée")
        LOADED     = "loaded",     _("Chargée")
        IN_TRANSIT = "in_transit", _("En transit")
        ARRIVED    = "arrived",    _("Arrivée")
        CANCELLED  = "cancelled",  _("Annulée")

    parcel = models.ForeignKey("voyages_consignment.Parcel", verbose_name=_("colis"),
                               on_delete=models.CASCADE, related_name="shipments")
    quantity = models.PositiveSmallIntegerField(_("pièces expédiées"), default=1)
    trip = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage"),
                             on_delete=models.PROTECT, related_name="parcel_shipments")
    status = models.CharField(_("statut"), max_length=12, choices=Status.choices, default=Status.DRAFT)
    is_primary = models.BooleanField(_("expédition primaire"), default=False)
    validated_by = models.ForeignKey("authentication.User", verbose_name=_("validée par"),
                                     on_delete=models.SET_NULL, null=True, blank=True, related_name="+")
    validated_at  = models.DateTimeField(_("validée le"), null=True, blank=True)
    loaded_at     = models.DateTimeField(_("chargée le"), null=True, blank=True)
    dispatched_at = models.DateTimeField(_("expédiée le"), null=True, blank=True)
    arrived_at    = models.DateTimeField(_("arrivée le"), null=True, blank=True)
    note = models.CharField(_("note"), max_length=255, blank=True)

    # Statuts qui comptent comme « pièces engagées / expédiées ».
    COUNTED = ("validated", "loaded", "in_transit", "arrived")

    class Meta(BaseModel.Meta):
        verbose_name = _("expédition")
        verbose_name_plural = _("expéditions")
        ordering = ["created_at"]

    def __str__(self):
        return f"{self.parcel_id} · {self.quantity} ({self.get_status_display()})"
