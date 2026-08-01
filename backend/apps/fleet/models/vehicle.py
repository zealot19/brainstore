from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Vehicle(BaseModel):
    """Véhicule appartenant à une institution."""

    class Status(models.TextChoices):
        AVAILABLE      = "available",       _("Disponible")
        ON_MISSION     = "on_mission",      _("En mission")
        IN_MAINTENANCE = "in_maintenance",  _("En maintenance")
        OUT_OF_SERVICE = "out_of_service",  _("Hors service")

    # ── Appartenance ───────────────────────────────────────────────────────────
    company = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                on_delete=models.CASCADE, related_name="vehicles")
    agency  = models.ForeignKey("system_config.Agency", verbose_name=_("agence"),
                                on_delete=models.SET_NULL, null=True, blank=True,
                                related_name="vehicles")

    # ── Classification & emplacement (Config Flotte) ────────────────────────────
    category = models.ForeignKey("fleet.VehicleCategoryCfg", verbose_name=_("catégorie"),
                                 on_delete=models.PROTECT, null=True, blank=True, related_name="vehicles")
    tags     = models.ManyToManyField("fleet.Tag", verbose_name=_("étiquettes"),
                                      blank=True, related_name="vehicles")
    parking  = models.ForeignKey("fleet.Parking", verbose_name=_("parking"),
                                 on_delete=models.SET_NULL, null=True, blank=True, related_name="vehicles")

    # ── Fiscal ──────────────────────────────────────────────────────────────────
    registration_date = models.DateField(_("date d'immatriculation"), null=True, blank=True)
    fiscal_horsepower = models.DecimalField(_("puissance fiscale"), max_digits=6, decimal_places=2, null=True, blank=True)
    catalog_value     = models.DecimalField(_("valeur catalogue"), max_digits=18, decimal_places=2, null=True, blank=True)
    purchase_value    = models.DecimalField(_("valeur d'achat"), max_digits=18, decimal_places=2, null=True, blank=True)
    residual_value    = models.DecimalField(_("valeur résiduelle"), max_digits=18, decimal_places=2, null=True, blank=True)

    # ── Référence technique ────────────────────────────────────────────────────
    model         = models.ForeignKey("fleet.VehicleModel", verbose_name=_("modèle"),
                                      on_delete=models.PROTECT, related_name="vehicles")
    license_plate = models.CharField(_("immatriculation"), max_length=30)
    vin           = models.CharField(_("numéro de châssis (VIN)"), max_length=50, blank=True)
    color         = models.CharField(_("couleur"), max_length=50, blank=True)
    year          = models.PositiveSmallIntegerField(_("année"), null=True, blank=True)

    # ── Acquisition ────────────────────────────────────────────────────────────
    acquisition_date = models.DateField(_("date d'acquisition"), null=True, blank=True)
    acquisition_cost = models.DecimalField(_("coût d'acquisition"), max_digits=14, decimal_places=2,
                                           null=True, blank=True)

    # ── Opérationnel ──────────────────────────────────────────────────────────
    status           = models.CharField(_("statut"), max_length=20, choices=Status.choices,
                                        default=Status.AVAILABLE)
    current_odometer = models.DecimalField(_("kilométrage actuel (km)"), max_digits=10,
                                           decimal_places=1, default=0)

    # ── Conducteur assigné (interne ou externe) ────────────────────────────────
    internal_driver = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name=_("conducteur interne"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="assigned_vehicles")
    external_driver = models.ForeignKey("fleet.ExternalDriver", verbose_name=_("conducteur externe"),
                                        on_delete=models.SET_NULL, null=True, blank=True,
                                        related_name="assigned_vehicles")

    # ── Carburant ──────────────────────────────────────────────────────────────
    tank_capacity_liters = models.DecimalField(_("capacité réservoir (L)"), max_digits=6,
                                               decimal_places=1, null=True, blank=True)

    notes     = models.TextField(_("notes"), blank=True)
    is_active = models.BooleanField(_("actif"), default=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("véhicule")
        verbose_name_plural = _("véhicules")
        ordering = ["license_plate"]
        unique_together = [("company", "license_plate")]

    def __str__(self):
        return f"{self.license_plate} — {self.model}"

    @property
    def current_driver_name(self):
        if self.internal_driver_id:
            u = self.internal_driver
            return f"{u.first_name} {u.last_name}".strip() or u.username
        if self.external_driver_id:
            return self.external_driver.full_name
        return None
