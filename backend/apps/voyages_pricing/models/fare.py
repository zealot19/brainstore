from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class _CompanyScoped(BaseModel):
    company = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                on_delete=models.CASCADE, null=True, blank=True)

    class Meta(BaseModel.Meta):
        abstract = True


class Fare(_CompanyScoped):
    class TripType(models.TextChoices):
        ONE_WAY    = "one_way",    _("Aller simple")
        ROUND_TRIP = "round_trip", _("Aller-retour")

    route = models.ForeignKey("voyages_config.Route", verbose_name=_("trajet"),
                              on_delete=models.CASCADE, related_name="fares")
    origin_point = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("de"),
                                     on_delete=models.PROTECT, related_name="fares_from")
    destination_point = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("à"),
                                          on_delete=models.PROTECT, related_name="fares_to")
    fare_class = models.ForeignKey("voyages_config.FareClass", verbose_name=_("catégorie tarifaire"),
                                   on_delete=models.PROTECT, related_name="fares")
    trip_type = models.CharField(_("type de voyage"), max_length=12,
                                 choices=TripType.choices, default=TripType.ONE_WAY)
    amount = models.DecimalField(_("montant"), max_digits=12, decimal_places=2)
    currency = models.CharField(_("devise"), max_length=3, default="XAF")
    valid_from = models.DateField(_("valide à partir du"), null=True, blank=True)
    valid_to = models.DateField(_("valide jusqu'au"), null=True, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("tarif")
        ordering = ["route", "origin_point", "destination_point"]
        unique_together = [("company", "route", "origin_point", "destination_point", "fare_class", "trip_type")]

    def __str__(self):
        return f"{self.route_id}: {self.origin_point_id}→{self.destination_point_id} = {self.amount}"
