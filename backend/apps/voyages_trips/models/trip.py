from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Trip(BaseModel):
    class Status(models.TextChoices):
        DRAFT     = "draft",     _("Brouillon")
        PENDING   = "pending",   _("En attente")
        DEPARTED  = "departed",  _("Parti")
        COMPLETED = "completed", _("Terminé")
        SUSPENDED = "suspended", _("Suspendu")
        CANCELLED = "cancelled", _("Annulé")

    class SeatAssignment(models.TextChoices):
        MANUAL = "manual", _("Manuelle")
        AUTO   = "auto",   _("Automatique")

    company             = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                             on_delete=models.CASCADE, related_name="voyages_trips")
    number              = models.CharField(_("numéro"), max_length=40, blank=True)
    code                = models.CharField(_("code"), max_length=40, blank=True)
    route               = models.ForeignKey("voyages_config.Route", verbose_name=_("trajet"),
                                             on_delete=models.PROTECT, related_name="trips")
    service_pattern     = models.ForeignKey("voyages_config.ServicePattern", verbose_name=_("planification"),
                                             on_delete=models.SET_NULL, null=True, blank=True, related_name="trips")
    fare_class          = models.ForeignKey("voyages_config.FareClass", verbose_name=_("catégorie tarifaire"),
                                             on_delete=models.PROTECT, related_name="trips")
    vehicle             = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                             on_delete=models.SET_NULL, null=True, blank=True, related_name="voyages_trips")
    seating_plan        = models.ForeignKey("voyages_config.SeatingPlan", verbose_name=_("plan de bus"),
                                             on_delete=models.SET_NULL, null=True, blank=True, related_name="trips")
    scheduled_departure = models.DateTimeField(_("départ prévu"))
    scheduled_arrival   = models.DateTimeField(_("arrivée prévue"))
    actual_departure    = models.DateTimeField(_("départ réel"), null=True, blank=True)
    actual_arrival      = models.DateTimeField(_("arrivée réelle"), null=True, blank=True)
    origin              = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("origine"),
                                             on_delete=models.PROTECT, related_name="trips_from")
    destination         = models.ForeignKey("voyages_config.ServicePoint", verbose_name=_("destination"),
                                             on_delete=models.PROTECT, related_name="trips_to")
    status              = models.CharField(_("statut"), max_length=12, choices=Status.choices, default=Status.DRAFT)
    seat_assignment_mode = models.CharField(_("attribution des sièges"), max_length=10,
                                            choices=SeatAssignment.choices, default=SeatAssignment.MANUAL)
    is_delayed          = models.BooleanField(_("en retard"), default=False)
    delayed_until       = models.DateTimeField(_("reporté à"), null=True, blank=True)
    delay_reason        = models.TextField(_("motif du retard"), blank=True)
    notes               = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("voyage")
        ordering = ["-scheduled_departure"]

    def __str__(self):
        return self.number or f"{self.route.code} {self.scheduled_departure:%Y-%m-%d}"
