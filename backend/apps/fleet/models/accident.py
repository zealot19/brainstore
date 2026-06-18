from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Accident(BaseModel):
    """Déclaration d'accident impliquant un véhicule de la flotte."""

    class Severity(models.TextChoices):
        MINOR      = "minor",      _("Mineur")
        MODERATE   = "moderate",   _("Modéré")
        SEVERE     = "severe",     _("Grave")
        TOTAL_LOSS = "total_loss", _("Perte totale")

    class Status(models.TextChoices):
        REPORTED          = "reported",           _("Déclaré")
        UNDER_REVIEW      = "under_review",       _("En cours d'examen")
        REPAIR_IN_PROGRESS = "repair_in_progress", _("En réparation")
        CLOSED            = "closed",             _("Clôturé")

    # ── Véhicule & Conducteur ──────────────────────────────────────────────────
    vehicle         = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                        on_delete=models.PROTECT, related_name="accidents")
    internal_driver = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("conducteur interne"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="fleet_accidents")
    external_driver = models.ForeignKey("fleet.ExternalDriver", verbose_name=_("conducteur externe"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="accidents")
    assignment      = models.ForeignKey("fleet.Assignment", verbose_name=_("mission liée"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="accidents")

    # ── Informations accident ──────────────────────────────────────────────────
    date        = models.DateField(_("date"))
    location    = models.CharField(_("lieu"), max_length=300)
    description = models.TextField(_("description"))
    severity    = models.CharField(_("gravité"), max_length=20, choices=Severity.choices,
                                   default=Severity.MINOR)
    at_fault    = models.BooleanField(_("responsable"), default=False)

    # ── Tiers ─────────────────────────────────────────────────────────────────
    third_party_involved = models.BooleanField(_("tiers impliqué"), default=False)
    third_party_info     = models.TextField(_("informations tiers"), blank=True)

    # ── Administratif & financier ──────────────────────────────────────────────
    police_report_number   = models.CharField(_("numéro PV de police"), max_length=100, blank=True)
    insurance_claim_number = models.CharField(_("numéro sinistre assurance"), max_length=100, blank=True)
    estimated_damage_cost  = models.DecimalField(_("coût estimé des dégâts"), max_digits=14,
                                                  decimal_places=2, null=True, blank=True)
    actual_repair_cost     = models.DecimalField(_("coût réel de réparation"), max_digits=14,
                                                  decimal_places=2, null=True, blank=True)

    status = models.CharField(_("statut"), max_length=25, choices=Status.choices,
                               default=Status.REPORTED)
    notes  = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("accident")
        verbose_name_plural = _("accidents")
        ordering = ["-date"]

    def __str__(self):
        return f"{self.vehicle.license_plate} — {self.date} ({self.get_severity_display()})"

    @property
    def driver_name(self):
        if self.internal_driver_id:
            u = self.internal_driver
            return f"{u.first_name} {u.last_name}".strip() or u.username
        if self.external_driver_id:
            return self.external_driver.full_name
        return None
