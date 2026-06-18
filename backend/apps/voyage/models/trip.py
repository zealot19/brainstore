from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Trip(BaseModel):
    """A scheduled departure on a route — the central unit of transport operations.
    Reservations, luggage and parcels are all linked to a Trip.
    """

    class Status(models.TextChoices):
        SCHEDULED = "scheduled", _("Scheduled")
        BOARDING  = "boarding",  _("Boarding")
        DEPARTED  = "departed",  _("Departed")
        ARRIVED   = "arrived",   _("Arrived")
        CANCELLED = "cancelled", _("Cancelled")

    # ── Ownership ──────────────────────────────────────────────────────────────
    company = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                 on_delete=models.CASCADE, related_name="trips")

    # ── Reference ──────────────────────────────────────────────────────────────
    reference = models.CharField(_("reference"), max_length=30, blank=True)

    # ── Route & timing ─────────────────────────────────────────────────────────
    route                     = models.ForeignKey("transport_config.Route", verbose_name=_("route"),
                                                   on_delete=models.PROTECT, related_name="trips")
    departure_datetime        = models.DateTimeField(_("departure date & time"))
    estimated_arrival_datetime = models.DateTimeField(_("estimated arrival"), null=True, blank=True)
    actual_departure_datetime  = models.DateTimeField(_("actual departure"), null=True, blank=True)
    actual_arrival_datetime    = models.DateTimeField(_("actual arrival"), null=True, blank=True)

    # ── Vehicle & seating ──────────────────────────────────────────────────────
    vehicle          = models.ForeignKey("fleet.Vehicle", verbose_name=_("vehicle"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="trips")
    vehicle_category = models.ForeignKey("transport_config.VehicleCategory",
                                          verbose_name=_("vehicle category"),
                                          on_delete=models.PROTECT, related_name="trips")
    total_seats      = models.PositiveSmallIntegerField(_("total seats"))
    free_seating     = models.BooleanField(_("free seating"), default=False)

    # ── Fare class for this trip ────────────────────────────────────────────────
    fare_class = models.ForeignKey("transport_config.FareClass", verbose_name=_("fare class"),
                                    on_delete=models.SET_NULL, null=True, blank=True,
                                    related_name="trips")

    # ── Status ─────────────────────────────────────────────────────────────────
    status = models.CharField(_("status"), max_length=20, choices=Status.choices,
                               default=Status.SCHEDULED)

    notes = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("trip")
        verbose_name_plural = _("trips")
        ordering = ["departure_datetime"]

    def __str__(self):
        return f"{self.reference or self.id} — {self.route} ({self.departure_datetime:%Y-%m-%d %H:%M})"

    @property
    def is_past(self):
        return self.departure_datetime < timezone.now()

    @property
    def from_city(self):
        return self.route.from_terminal.city.name

    @property
    def to_city(self):
        return self.route.to_terminal.city.name
