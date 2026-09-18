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

    # ── Voyage & Véhicule ──────────────────────────────────────────────────────
    # Un accident est rattaché à un voyage ; le véhicule est celui du voyage
    # (dérivé automatiquement, donc null si le voyage n'a pas de véhicule).
    trip    = models.ForeignKey("voyages_trips.Trip", verbose_name=_("voyage lié"),
                                on_delete=models.SET_NULL, null=True, blank=True,
                                related_name="accidents")
    vehicle = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
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

    # ── Administratif ──────────────────────────────────────────────────────────
    police_report_number   = models.CharField(_("numéro PV de police"), max_length=100, blank=True)
    insurance_claim_number = models.CharField(_("numéro sinistre assurance"), max_length=100, blank=True)

    notes  = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("accident")
        verbose_name_plural = _("accidents")
        ordering = ["-date"]

    def __str__(self):
        plate = self.vehicle.license_plate if self.vehicle_id else (self.trip_label or "?")
        return f"{plate} — {self.date} ({self.get_severity_display()})"

    @property
    def trip_label(self):
        t = self.trip
        if not t:
            return None
        return t.number or t.code or str(t.id)[:8]
