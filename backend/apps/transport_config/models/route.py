from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Route(BaseModel):
    """Transport route between two terminals."""

    company          = models.ForeignKey("system_config.Company", verbose_name=_("company"),
                                          on_delete=models.CASCADE, related_name="routes")
    name             = models.CharField(_("name"), max_length=200, blank=True,
                                         help_text=_("Auto-generated if left blank."))
    from_terminal    = models.ForeignKey("transport_config.Terminal", verbose_name=_("departure terminal"),
                                          on_delete=models.PROTECT, related_name="routes_from")
    to_terminal      = models.ForeignKey("transport_config.Terminal", verbose_name=_("arrival terminal"),
                                          on_delete=models.PROTECT, related_name="routes_to")
    distance_km      = models.DecimalField(_("distance (km)"), max_digits=8, decimal_places=1,
                                            null=True, blank=True)
    duration_minutes = models.PositiveIntegerField(_("estimated duration (min)"), null=True, blank=True)
    is_active        = models.BooleanField(_("active"), default=True)
    notes            = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("route")
        verbose_name_plural = _("routes")
        ordering = ["from_terminal__city__name", "to_terminal__city__name"]
        unique_together = [("company", "from_terminal", "to_terminal")]

    def __str__(self):
        return self.name or f"{self.from_terminal.city.name} → {self.to_terminal.city.name}"

    def save(self, *args, **kwargs):
        if not self.name:
            try:
                self.name = (
                    f"{self.from_terminal.city.name} → {self.to_terminal.city.name}"
                )
            except Exception:
                pass
        super().save(*args, **kwargs)


class RouteStop(BaseModel):
    """Ordered intermediate stop on a route."""

    route                    = models.ForeignKey("transport_config.Route", verbose_name=_("route"),
                                                   on_delete=models.CASCADE, related_name="stops")
    terminal                 = models.ForeignKey("transport_config.Terminal", verbose_name=_("terminal"),
                                                   on_delete=models.PROTECT, related_name="route_stops")
    stop_order               = models.PositiveSmallIntegerField(_("order"))
    arrival_offset_minutes   = models.PositiveIntegerField(_("arrival offset (min)"), default=0,
                                                            help_text=_("Minutes after departure."))
    distance_from_start_km   = models.DecimalField(_("distance from start (km)"), max_digits=8,
                                                     decimal_places=1, null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("route stop")
        verbose_name_plural = _("route stops")
        ordering = ["route", "stop_order"]
        unique_together = [("route", "stop_order"), ("route", "terminal")]

    def __str__(self):
        return f"{self.route} — stop {self.stop_order}: {self.terminal.name}"
