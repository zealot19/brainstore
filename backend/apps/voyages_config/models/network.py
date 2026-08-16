from django.core.exceptions import ValidationError
from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class Town(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=150)
    code = models.CharField(_("code"), max_length=20, blank=True)
    region = models.CharField(_("région"), max_length=100, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("ville")
        ordering = ["name"]

    def __str__(self):
        return self.name


class ServicePoint(_CompanyScoped):
    class StationKind(models.TextChoices):
        TERMINAL = "TERMINAL", _("Gare / Terminal")
        AGENCY   = "AGENCY",   _("Agence")

    town = models.ForeignKey("voyages_config.Town", verbose_name=_("ville"),
                             on_delete=models.PROTECT, related_name="service_points")
    code = models.CharField(_("code"), max_length=20)
    name = models.CharField(_("nom"), max_length=150)
    is_station = models.BooleanField(_("est une gare/agence"), default=False)
    station_kind = models.CharField(_("type de gare"), max_length=10,
                                    choices=StationKind.choices, blank=True)
    latitude = models.DecimalField(_("latitude"), max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(_("longitude"), max_digits=9, decimal_places=6, null=True, blank=True)
    agency = models.ForeignKey("system_config.Agency", verbose_name=_("agence"), null=True, blank=True,
                               on_delete=models.SET_NULL, related_name="service_points")

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("point de service")
        ordering = ["town__name", "name"]

    def __str__(self):
        return f"{self.name} ({self.code})"


class Route(_CompanyScoped):
    code = models.CharField(_("code"), max_length=30)
    label = models.CharField(_("libellé"), max_length=200, blank=True)
    origin = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("origine"),
                               on_delete=models.PROTECT, related_name="routes_from")
    destination = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("destination"),
                                    on_delete=models.PROTECT, related_name="routes_to")
    distance_km = models.DecimalField(_("distance (km)"), max_digits=8, decimal_places=1, null=True, blank=True)
    estimated_duration = models.DurationField(_("durée estimée"), null=True, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("trajet")
        ordering = ["code"]

    def clean(self):
        if self.origin_id and not self.origin.is_station:
            raise ValidationError({"origin": _("L'origine doit être une gare/agence.")})
        if self.destination_id and not self.destination.is_station:
            raise ValidationError({"destination": _("La destination doit être une gare/agence.")})
        if self.origin_id and self.origin_id == self.destination_id:
            raise ValidationError(_("Origine et destination doivent différer."))

    def __str__(self):
        return self.code


class RouteStop(_CompanyScoped):
    route = models.ForeignKey("voyages_config.Route", verbose_name=_("trajet"),
                              on_delete=models.CASCADE, related_name="stops")
    service_point = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("point de service"),
                                      on_delete=models.PROTECT, related_name="route_stops")
    sequence = models.PositiveIntegerField(_("ordre"))
    distance_from_origin_km = models.DecimalField(_("distance depuis origine (km)"),
                                                  max_digits=8, decimal_places=1, null=True, blank=True)
    offset_from_departure = models.DurationField(_("décalage depuis départ"), null=True, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("escale")
        ordering = ["route", "sequence"]
        unique_together = [("route", "sequence")]

    def __str__(self):
        return f"{self.route.code} #{self.sequence} → {self.service_point.name}"
