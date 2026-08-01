from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class Contract(BaseModel):
    """Contrat récurrent lié à un véhicule (assurance, leasing, plan de maintenance…)."""

    class Status(models.TextChoices):
        DRAFT     = "draft",     _("Brouillon")
        ACTIVE    = "active",    _("Actif")
        EXPIRED   = "expired",   _("Expiré")
        CANCELLED = "cancelled", _("Annulé")

    name              = models.CharField(_("nom du contrat"), max_length=255)
    reference         = models.CharField(_("référence externe"), max_length=100, blank=True)
    vehicle           = models.ForeignKey("fleet.Vehicle", verbose_name=_("véhicule"),
                                          on_delete=models.CASCADE, related_name="contracts")
    intervention_type = models.ForeignKey("fleet.InterventionType", verbose_name=_("type"),
                                          on_delete=models.PROTECT, related_name="contracts")
    included_services = models.ManyToManyField("fleet.InterventionType", blank=True,
                                               verbose_name=_("services inclus"),
                                               related_name="included_in_contracts")
    supplier          = models.ForeignKey("fleet.Supplier", verbose_name=_("fournisseur"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="contracts")
    responsible       = models.ForeignKey("hr.Employee", verbose_name=_("responsable"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="managed_contracts")
    driver            = models.ForeignKey("fleet.ExternalDriver", verbose_name=_("conducteur"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="contracts")
    policy_number     = models.CharField(_("numéro de police / référence"), max_length=100, blank=True)
    start_date        = models.DateField(_("date de début"))
    end_date          = models.DateField(_("date d'échéance"))
    creation_date     = models.DateField(_("date de signature"), null=True, blank=True)
    activation_cost   = models.DecimalField(_("coût d'activation"), max_digits=18, decimal_places=2, default=0)
    billing_period    = models.ForeignKey("fleet.Period", verbose_name=_("périodicité de facturation"),
                                          on_delete=models.SET_NULL, null=True, blank=True,
                                          related_name="contracts")
    deductible        = models.DecimalField(_("franchise"), max_digits=18, decimal_places=2,
                                            null=True, blank=True)
    currency          = models.CharField(_("devise"), max_length=3, default="XAF")
    status            = models.CharField(_("statut"), max_length=12, choices=Status.choices,
                                         default=Status.ACTIVE)
    terms             = models.TextField(_("conditions générales"), blank=True)
    notes             = models.TextField(_("notes"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("contrat")
        verbose_name_plural = _("contrats")
        ordering = ["-start_date"]

    def __str__(self):
        return f"{self.name} — {self.vehicle.license_plate}"

    @property
    def is_expired(self):
        return self.end_date < timezone.now().date()

    @property
    def days_until_expiry(self):
        return (self.end_date - timezone.now().date()).days
