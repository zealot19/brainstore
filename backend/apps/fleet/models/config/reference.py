from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.core.models import BaseModel


class _CompanyScoped(BaseModel):
    """Reference row scoped to a company; company NULL = global default."""
    company = models.ForeignKey("system_config.Company", verbose_name=_("institution"),
                                on_delete=models.CASCADE, null=True, blank=True)

    class Meta(BaseModel.Meta):
        abstract = True


class VehicleCategoryCfg(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("catégorie de véhicule (config)")
        ordering = ["name"]

    def __str__(self):
        return self.name


class FuelType(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type de carburant")
        ordering = ["name"]

    def __str__(self):
        return self.name


class Transmission(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("transmission")
        ordering = ["name"]

    def __str__(self):
        return self.name


class TractionType(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type de traction")
        ordering = ["name"]

    def __str__(self):
        return self.name


class UnitCategory(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("catégorie d'unité")
        ordering = ["name"]

    def __str__(self):
        return self.name


class Unit(_CompanyScoped):
    unit_category = models.ForeignKey(UnitCategory, verbose_name=_("catégorie"),
                                      on_delete=models.CASCADE, related_name="units")
    code = models.CharField(_("code"), max_length=20)
    name = models.CharField(_("nom"), max_length=100)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("unité")
        ordering = ["unit_category", "code"]

    def __str__(self):
        return f"{self.code} — {self.name}"


class Period(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("période")
        ordering = ["name"]

    def __str__(self):
        return self.name


class DocumentType(_CompanyScoped):
    code = models.CharField(_("code"), max_length=20)
    label = models.CharField(_("libellé"), max_length=255)
    requires_expiration = models.BooleanField(_("expiration requise"), default=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type de document")
        ordering = ["code"]

    def __str__(self):
        return f"{self.code} — {self.label}"


class Tag(_CompanyScoped):
    name = models.CharField(_("nom"), max_length=100)
    color = models.CharField(_("couleur"), max_length=7, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("étiquette")
        ordering = ["name"]

    def __str__(self):
        return self.name


class InterventionType(_CompanyScoped):
    class Category(models.TextChoices):
        CONTRACT = "CONTRACT", _("Contrat")
        SERVICE  = "SERVICE",  _("Service")
        BOTH     = "BOTH",     _("Contrat et Service")

    name = models.CharField(_("nom"), max_length=255)
    category = models.CharField(_("catégorie"), max_length=10,
                                choices=Category.choices, default=Category.BOTH)
    interval_km = models.DecimalField(_("intervalle (km)"), max_digits=10, decimal_places=1,
                                      null=True, blank=True)
    interval_days = models.PositiveIntegerField(_("intervalle (jours)"), null=True, blank=True)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("type d'intervention")
        ordering = ["name"]

    def __str__(self):
        return f"{self.name} ({self.get_category_display()})"


class ActivitySector(_CompanyScoped):
    code = models.CharField(_("code"), max_length=20)
    name = models.CharField(_("nom"), max_length=255)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("secteur d'activité")
        ordering = ["code"]

    def __str__(self):
        return f"{self.code} — {self.name}"
