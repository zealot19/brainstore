from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Assignment(BaseModel):
    """Mission / affectation d'un véhicule à un conducteur."""

    class Status(models.TextChoices):
        PENDING    = "pending",    _("En attente")
        IN_PROGRESS = "in_progress", _("En cours")
        COMPLETED  = "completed",  _("Terminée")
        CANCELLED  = "cancelled",  _("Annulée")

    # ── Véhicule & Conducteur ──────────────────────────────────────────────────
    vehicle         = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                        on_delete=models.PROTECT, related_name="assignments")
    internal_driver = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("conducteur interne"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="fleet_assignments")
    external_driver = models.ForeignKey("fleet.ExternalDriver", verbose_name=_("conducteur externe"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="assignments")
    company         = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                        on_delete=models.CASCADE, related_name="assignments")

    # ── Détails de la mission ─────────────────────────────────────────────────
    status               = models.CharField(_("statut"), max_length=20, choices=Status.choices,
                                            default=Status.PENDING)
    purpose              = models.CharField(_("objet de la mission"), max_length=300)
    departure_location   = models.CharField(_("lieu de départ"), max_length=300, blank=True)
    destination          = models.CharField(_("destination"), max_length=300)

    # ── Planification ─────────────────────────────────────────────────────────
    planned_departure = models.DateTimeField(_("départ planifié"))
    planned_return    = models.DateTimeField(_("retour planifié"), null=True, blank=True)

    # ── Exécution réelle ──────────────────────────────────────────────────────
    actual_departure = models.DateTimeField(_("départ réel"), null=True, blank=True)
    actual_return    = models.DateTimeField(_("retour réel"), null=True, blank=True)

    # ── Kilométrage ───────────────────────────────────────────────────────────
    start_odometer = models.DecimalField(_("km départ"), max_digits=10, decimal_places=1,
                                         null=True, blank=True)
    end_odometer   = models.DecimalField(_("km retour"), max_digits=10, decimal_places=1,
                                         null=True, blank=True)

    notes = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("mission")
        verbose_name_plural = _("missions")
        ordering = ["-planned_departure"]

    def __str__(self):
        return f"{self.vehicle.license_plate} → {self.destination} ({self.get_status_display()})"

    @property
    def distance_km(self):
        if self.start_odometer is not None and self.end_odometer is not None:
            return self.end_odometer - self.start_odometer
        return None

    @property
    def driver_name(self):
        if self.internal_driver_id:
            u = self.internal_driver
            return f"{u.first_name} {u.last_name}".strip() or u.username
        if self.external_driver_id:
            return self.external_driver.full_name
        return None
