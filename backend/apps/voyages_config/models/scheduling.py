from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


class ServicePattern(_CompanyScoped):
    route = models.ForeignKey("voyages_config.Route", verbose_name=_("trajet"),
                              on_delete=models.PROTECT, related_name="service_patterns")
    time_slot = models.ForeignKey("voyages_config.TimeSlot", verbose_name=_("plage horaire"),
                                  on_delete=models.PROTECT, related_name="service_patterns")
    fare_class = models.ForeignKey("voyages_config.FareClass", verbose_name=_("catégorie tarifaire"),
                                   on_delete=models.PROTECT, related_name="service_patterns")
    default_seating_plan = models.ForeignKey("voyages_config.SeatingPlan", verbose_name=_("plan par défaut"),
                                             on_delete=models.SET_NULL, null=True, blank=True,
                                             related_name="service_patterns")
    monday = models.BooleanField(_("lundi"), default=False)
    tuesday = models.BooleanField(_("mardi"), default=False)
    wednesday = models.BooleanField(_("mercredi"), default=False)
    thursday = models.BooleanField(_("jeudi"), default=False)
    friday = models.BooleanField(_("vendredi"), default=False)
    saturday = models.BooleanField(_("samedi"), default=False)
    sunday = models.BooleanField(_("dimanche"), default=False)
    valid_from = models.DateField(_("valide à partir du"), null=True, blank=True)
    valid_to = models.DateField(_("valide jusqu'au"), null=True, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("planification")
        ordering = ["route", "time_slot"]

    def __str__(self):
        return f"{self.route.code} · {self.time_slot.label}"
