from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class MaintenanceType(BaseModel):
    """Type de maintenance (vidange, révision, pneumatiques…).
    company=None → type système partagé globalement.
    """

    class Category(models.TextChoices):
        PREVENTIVE  = "preventive",  _("Préventive")
        CORRECTIVE  = "corrective",  _("Corrective")
        INSPECTION  = "inspection",  _("Inspection / Contrôle")

    company      = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                     on_delete=models.CASCADE, null=True, blank=True,
                                     related_name="maintenance_types")
    name         = models.CharField(_("nom"), max_length=150)
    category     = models.CharField(_("catégorie"), max_length=20, choices=Category.choices,
                                    default=Category.PREVENTIVE)
    interval_km  = models.PositiveIntegerField(_("intervalle (km)"), null=True, blank=True,
                                               help_text=_("Déclenche une alerte après N km depuis la dernière intervention."))
    interval_days = models.PositiveIntegerField(_("intervalle (jours)"), null=True, blank=True,
                                                help_text=_("Déclenche une alerte après N jours depuis la dernière intervention."))
    description  = models.TextField(_("description"), blank=True)

    class Meta(BaseModel.Meta):
        verbose_name = _("type de maintenance")
        verbose_name_plural = _("types de maintenance")
        ordering = ["name"]

    def __str__(self):
        return self.name
