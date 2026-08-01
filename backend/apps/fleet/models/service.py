from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Service(BaseModel):
    """Intervention (maintenance ou réparation) ponctuelle sur un véhicule."""

    class Status(models.TextChoices):
        PLANNED     = "planned",     _("Planifié")
        IN_PROGRESS = "in_progress", _("En cours")
        DONE        = "done",        _("Terminé")
        CANCELLED   = "cancelled",   _("Annulé")

    description       = models.CharField(_("description"), max_length=500, blank=True)
    vehicle           = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                          on_delete=models.CASCADE, related_name="services")
    intervention_type = models.ForeignKey("fleet.InterventionType", verbose_name=_("type d'intervention"),
                                          on_delete=models.PROTECT, related_name="services")
    supplier          = models.ForeignKey("fleet.Supplier", verbose_name=_("fournisseur / garage"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="services")
    driver            = models.ForeignKey("fleet.ExternalDriver", verbose_name=_("conducteur"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="services")
    status            = models.CharField(_("statut"), max_length=20, choices=Status.choices,
                                         default=Status.PLANNED)
    planned_date      = models.DateField(_("date planifiée"))
    start_date        = models.DateField(_("date de début"), null=True, blank=True)
    done_date         = models.DateField(_("date de fin"), null=True, blank=True)
    odometer_at_start = models.DecimalField(_("km au début"), max_digits=10, decimal_places=1,
                                            null=True, blank=True)
    odometer_at_done  = models.DecimalField(_("km à la fin"), max_digits=10, decimal_places=1,
                                            null=True, blank=True)
    cost              = models.DecimalField(_("coût"), max_digits=18, decimal_places=2,
                                            null=True, blank=True)
    currency          = models.CharField(_("devise"), max_length=3, default="XAF")
    notes             = models.TextField(_("notes"), blank=True)
    next_due_km       = models.DecimalField(_("prochain entretien (km)"), max_digits=10, decimal_places=1,
                                            null=True, blank=True)
    next_due_date     = models.DateField(_("prochain entretien (date)"), null=True, blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("service / intervention")
        verbose_name_plural = _("services / interventions")
        ordering = ["-planned_date"]

    def __str__(self):
        return f"{self.vehicle.license_plate} — {self.intervention_type.name} ({self.get_status_display()})"
